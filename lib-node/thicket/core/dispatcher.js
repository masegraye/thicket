/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  M,
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

  var DEFAULT_CONTEXT_DELEGATE = function() {
    return {};
  };

  _.extend(Dispatcher.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._delegate        = opts.getOrError("delegate"),
      this._prefix          = opts.getOrElse("prefix", "onMsg");
      this._elseSuffix      = opts.getOrElse("elseSuffix", "else");
      this._malformedSuffix = opts.getOrElse("malformedSuffix", "malformed");
      this._contextDelegate = opts.getOrElse("contextDelegate", DEFAULT_CONTEXT_DELEGATE);
      this._stateGuard      = new StateGuard(["disposed"]);
      this._subs            = M.hash_map();

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

      var sub = channel.subscribe(_.bind(function(msg) {
        this.dispatch(msg);
      }, this));

      this._subs = M.assoc(this._subs, sub.id(), sub);

      return {
        dispose: _.bind(function(){
          var nSub = M.get(this._subs, sub.id());
          if (nSub) {
            this._subs = M.dissoc(this._subs, sub.id());
            nSub.dispose();
          }
        }, this)
      }
    },

    dispatch: function(mTyped) {
      if (this._stateGuard.applied("disposed")) {
        return;
      }

      var handler = this._getVettedHandlerName(mTyped);

      if (handler) {
        this._delegate[handler](mTyped, this._contextDelegate(mTyped));
      }
    },

    /**
     * Like `dispatch`, but expects delegate to return a Promise<object>
     */
    dispatchAsync: function(mTyped) {
      if (this._stateGuard.applied("disposed")) {
        return;
      }

      var handler = this._getVettedHandlerName(mTyped);
      if (handler) {
        return this._delegate[handler](mTyped, this._contextDelegate(mTyped));
      }
    },

    dispose: function() {
      if (this._stateGuard.applied("disposed")) {
        return;
      }

      var subs = this._subs;
      this._subs = M.hash_map();

      M.each(subs, function(pair) {
        M.nth(pair, 1).dispose();
      });

      this._delegate = null;

      this._stateGuard.apply("disposed");
    },

    _getHandlerName: function(prefix, suffix) {
      return prefix + suffix.charAt(0).toUpperCase() + suffix.substr(1);
    },

    _getVettedHandlerName: function(mTyped) {
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
        return finalHandlerName;
      }
    }
  });

  return Dispatcher;
};

module.exports = mod(
  require("underscore"),
  require("mori"),
  require("./options"),
  require("./state-guard")
);
