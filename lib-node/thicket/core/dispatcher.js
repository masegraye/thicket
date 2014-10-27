/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options
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
    },

    dispatch: function(mTyped) {
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

    _getHandlerName: function(prefix, suffix) {
      return prefix + suffix.charAt(0).toUpperCase() + suffix.substr(1);
    }
  });

  return Dispatcher;
};

module.exports = mod(
  require("underscore"),
  require("./options")
);
