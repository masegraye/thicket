/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options,
  StateGuard,
  Channel,
  ChainedChannel,
  Logger
) {

  var Periodic = function() {
    this.initialize.apply(this, arguments);
  };

  var Log = Logger.create("Periodic");

  _.extend(Periodic.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._schedulerRef = opts.getOrError("scheduler");
      this._task         = opts.getOrElse("task");
      this._interval     = opts.getOrError("interval");

      this._stateGuard   = new StateGuard(["disposed", "started"]);
      this._channel      = new Channel({ sentinel: this });
      this._taskId       = null;

      _.bindAll(this, "_runTask");
    },


    start: function(){
      this._stateGuard
        .deny("disposed", "started")
        .apply("started");

      this._scheduleNext();
    },


    stop: function() {
      this._cancelPending();
      this._cancelOutstanding();
      this._stateGuard.unapply("started");
    },

    egressChannel: function() {
      return new ChainedChannel({
        sentinel: this,
        chainTo: this._channel
      });
    },

    _runTask: function() {
      var results = {
        mT: "results",
        result: null,
        err: null
      };

      this._taskId = null;
      this._currentRun = Promise
        .bind(this)
        .cancellable()
        .then(function() {
          return this._task();
        })
        .then(function(result) {
          results.result = result;
        })
        .caught(Promise.CancellationError, function() {
          // Let it be. Don't want it to trickle into the results.
        })
        .caught(function(err) {
          results.err = err;
        })
        .lastly(function() {
          this._currentRun = null;
          this._notifyResults(results);
          this._scheduleNext();
        });
    },


    _notifyResults: function(results) {
      this._schedulerRef.get().runSoon(_.bind(function() {

        if (this._stateGuard.applied("disposed") || !this._stateGuard.applied("started")) {
          return;
        }

        if (Log.isTraceEnabled()) {
          Log.trace("Notifying results", results);
        }

        this._channel.publish(this, results);
      }, this));
    },


    _scheduleNext: function() {
      if (this._stateGuard.applied("disposed") || !this._stateGuard.applied("started")) {
        return;
      }
      this._taskId = this._schedulerRef.get().schedule(this._runTask, this._interval);
      Log.trace("Scheduled task", this._taskId);
    },


    _cancelPending: function() {
      Log.trace("cancelPending requested, looking for pending task.");
      if (this._taskId) {
        Log.trace("Found pending task; cancelling", this._taskId);
        this._schedulerRef.get().unschedule(this._taskId);
        this._taskId = null;
      }
    },

    _cancelOutstanding: function() {
      Log.trace("cancelOutstanding requested, looking for outstanding work.");
      if (this._currentRun) {
        Log.trace("Outstanding work found; cancelling");
        this._currentRun.cancel();
        this._currentRun = null;
      }
    },

    dispose: function(){
      if (this._stateGuard.applied("disposed")) {
        return;
      }

      this._cancelPending();
      this._cancelOutstanding();
    }
  });

  return Periodic;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("../core/state-guard"),
  require("../core/channel"),
  require("../core/chained-channel"),
  require("../core/logging/logger")
);
