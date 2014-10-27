/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  StateGuard
) {

  /**
   * Attempts to intelligently dispatch an object with an mT attribute, using
   * the rules provided at instantiation.
   *
   * For a given mTyped object, searches the provided `delegate` for a method
   * named [prefix][camel-cased mT], and if present, calls it. If not found,
   * looks for [prefix]Else. If the mT attribute isn't found, dispatches to
   * [prefix]Malformed.
   */
  var Dispatcher = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Dispatcher.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._delegate        = opts.getOrError("delegate"),
      this._prefix          = opts.getOrElse("prefix", "onMsg");
      this._elseSuffix      = opts.getOrElse("elseSuffix", "else");
      this._malformedSuffix = opts.getOrElse("malformedSuffix", "malformed");
      this._stateGuard      = new StateGuard(["disposed"]);
      this._subs            = [];

      var channels = opts.getOrElse("listen", []);

      if (!_.isArray(channels)) {
        channels = [channels];
      }

      _.each(channels, _.bind(function(c) {
        this.listen(c)
      }, this));
    },

    listen: function(channel) {
      this._stateGuard.deny("disposed");
      this._subs.push(channel.subscribe(_.bind(function(msg) {
        this.dispatch(msg);
      }, this)));
    },

    dispatch: function(mTyped) {
      if (this._stateGuard.applied("disposed")) {
        return;
      }

      var mT = mTyped.mT,
          prefix = this._prefix,
          potentialHandlerName,
          finalHandlerName;

      if (!mT) {
        finalHandlerName = this._getHandlerName(prefix, this._malformedSuffix);
      } else {
        potentialHandlerName = this._getHandlerName(prefix, mT);
        if (_.isFunction(this._delegate[potentialHandlerName])) {
          finalHandlerName = potentialHandlerName;
        } else {
          finalHandlerName = this._getHandlerName(prefix, this._elseSuffix);
        }
      }

      if (_.isFunction(this._delegate[finalHandlerName])) {
        this._delegate[finalHandlerName](mTyped);
      }
    },

    dispose: function() {
      if (this._stateGuard.applied("disposed")) {
        return;
      }

      var subs = this._subs;
      this._subs = [];
      _.invoke(subs, "disposed");
      this._delegate = null;

      this._stateGuard.apply("dispose");
    },

    _getHandlerName: function(prefix, suffix) {
      return prefix + suffix.charAt(0).toUpperCase() + suffix.substr(1);
    }
  });

  return Dispatcher;
};

module.exports = mod(
  require("underscore"),
  require("./options"),
  require("./state-guard")
);
