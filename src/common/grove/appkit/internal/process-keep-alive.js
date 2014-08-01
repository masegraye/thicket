"use strict";

var mod = function(
  _,
  Logger,
  Options
) {

  var TEN_MINUTES_IN_MILLISECONDS = 60 * 1000 * 10;

  var Log = Logger.create("ProcessKeepAlive");

  var ProcessKeepAlive = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ProcessKeepAlive.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._scheduler = opts.getOrError("scheduler");
      this._timeoutId = null;

      _.bindAll(this, "_cycle");
    },
    start: function() {
      Log.debug("Starting ProcessKeepAlive");
      this._timeoutId = this._scheduler.get().schedule(
        this._cycle,
        TEN_MINUTES_IN_MILLISECONDS
      );
    },
    stop: function() {
      Log.debug("Stopping ProcessKeepAlive");
      if (this._timeoutId) {
        this._scheduler.get().unschedule(this._timeoutId);
        this._timeoutId = null;
      }
    },
    _cycle: function() {
      this._timeoutId = this._scheduler.get().schedule(
        this._cycle,
        TEN_MINUTES_IN_MILLISECONDS
      );
    }
  });

  return ProcessKeepAlive;
};

module.exports = mod(
  require("underscore"),
  require("../../logging/logger"),
  require("../../core/options")
);
