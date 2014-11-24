/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options,
  Lang,
  StateGuard,
  Logger
) {

  var Log = Logger.create("Retryable");

  var DEFAULT_BACKOFF_CEILING = 60 * 1000 * 10; // 10 minutes

  var Retryable = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Retryable.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._scheduler  = opts.getOrError("scheduler");
      this._task       = opts.getOrError("task");
      // If not provided, go on forever.
      this._retries    = opts.getOrElse("retries");
      this._currentTry = 0;
      this._deferred   = Lang.deferred();

      var backoff = Options.fromObject(opts.getOrElseFn("backoff", function() {
        return {
          strategy: Retryable.Backoff.Linear,
          factor: 1,
          coefficient: 250
        };
      }));

      var StrategyClass = BackoffStrategy[backoff.getOrError("strategy")];

      this._backoffStrategy = new StrategyClass(backoff.toObject());
      this._backoffCeiling  = opts.getOrElse("backoffCeiling", DEFAULT_BACKOFF_CEILING);
      this._disposedGuard   = StateGuard.scoped("disposed");

      _.bindAll(this, "_attempt");
      this._currentRun = null;
      this._scheduler.get().runSoon(this._attempt);
    },

    dispose: function() {
      if (this._disposedGuard.applied()) {
        return;
      }

      if (this._currentRun) {
        this._currentRun.cancel(new Retryable.Error.DisposedError());
        this._currentRun = null;
      }

      this._task = null;

      this._disposedGuard.apply();
    },

    result: function() {
      return this._deferred.promise;
    },

    _attempt: function() {
      if (this._disposedGuard.applied()) {
        return;
      }

      this._currentRun = Promise
        .bind(this)
        .cancellable()
        .then(function() {
          return this._task();
        })
        .then(function(result) {
          if (this._deferred.promise.isPending()) {
            this._deferred.resolve(result);
          }
        })
        .caught(Retryable.Error.DisposedError, function() {
          this._deferred.promise.cancel(new Promise.CancellationError());
        })
        .caught(function(err) {
          if (this._disposedGuard.applied()) {
            Log.warn("Caught retryable run error, but retryable is already disposed");
            return;
          }

          Log.debug("Received error in attempt", this._currentTry);
          var nextTry = this._currentTry + 1;

          if (this._retries >= 0 && nextTry > this._retries) {
            Log.debug("Hit max number of retries:", this._retries);
            var e = new Retryable.Error.MaxRetriesError();
            e.cause = err;
            throw e;
          }

          // Schedule us up to try again;
          this._currentRun = null;
          this._currentTry = nextTry;

          var time = this._backoffStrategy.time(this._currentTry);
          this._scheduler.get().schedule(this._attempt, Math.min(time, this._backoffCeiling));
        })
        .caught(Retryable.Error.MaxRetriesError, function(err) {
          if (this._deferred.promise.isPending()) {
            this._deferred.reject(err.cause);
          }
        });
    }
  });

  _.extend(Retryable, {
    Backoff: {
      Linear:      "linear",
      Exponential: "exponential"
    },
    Error: {
      DisposedError: Lang.makeErrorClass("DisposedError", "Retryable was disposed"),
      MaxRetriesError: Lang.makeErrorClass("MaxRetriesError", "Retryable was retried too many times")
    }
  })

  var BackoffStrategy = (function() {
    var Linear = function() {
      this.initialize.apply(this, arguments);
    };

    _.extend(Linear.prototype, {
      initialize: function(opts) {
        opts = Options.fromObject(opts);
        this._factor        = opts.getOrElse("factor", 1);
        this._coefficient   = opts.getOrElse("coefficient", 250);
      },

      time: function(iteration) {
        return this._factor * this._coefficient * iteration;
      }
    });

    var Exponential = function() {
      this.initialize.apply(this, arguments);
    };

    _.extend(Exponential.prototype, {
      initialize: function(opts) {
        opts = Options.fromObject(opts);

        this._base        = opts.getOrElse("base", 2);
        this._coefficient = opts.getOrElse("coefficient", 250);
      },

      time: function(iteration) {
        return this._coefficient * (Math.pow(this._base, iteration));
      }
    })


    var backoffs = {};

    backoffs[Retryable.Backoff.Linear]      = Linear;
    backoffs[Retryable.Backoff.Exponential] = Exponential;

    return backoffs;
  }());

  return Retryable;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("../core/lang"),
  require("../core/state-guard"),
  require("../core/logging/logger")
);
