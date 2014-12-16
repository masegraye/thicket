/*global require: false, module: false */
"use strict";

var mod = function(
  _
) {

  /**
   * A simple timer.
   *
   * Start it, stop it, get the delta.
   *
   * Or, start it, and repeatedly call `lap` for the time between the last `lap` call and now.
   *
   */
  var Timer = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Timer.prototype, {
    initialize: function() {
      this._startTime = null;
      this._endTime = null;
      this._lastLap = null;
    },


    start: function() {
      this._startTime = this._lastLap = +new Date();
      return this;
    },


    stop: function() {
      this._endTime = +new Date();
      return this;
    },

    lap: function() {
      if (!this._lastLap) return 0;

      var oldLastLap = this._lastLap;
      this._lastLap = +new Date();
      return (this._lastLap - oldLastLap);
    },


    delta: function() {
      return (this._endTime - this._startTime);
    }
  });

  return Timer;
};

module.exports = mod(
  require("underscore")
);
