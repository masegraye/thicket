/*global require: false, module: false */

var mod = function (
  _
  ) {

  var CountdownLatch = function () {
        this.initialize.apply(this, arguments);
      },
      noop = function() {};

  _.extend(CountdownLatch.prototype, {
    initialize: function (steps, completionCallback) {
      this._steps = steps || 0;
      this._completionCallback = completionCallback || noop;
      _.bindAll(this, "_completionCallback", "_triggerCompletion");
      if(isNaN(this._steps) || this._steps < 0) {
        throw new Error("CountdownLatch: Number of steps are invalid.");
      }
      this._current = 0;
      this._complete = false;
      this._error = null;
      if(this._steps === 0) {
        _.defer(this._triggerCompletion);
        return;
      }
    },
    step: function (steps) {
      if (this._complete || this._steps === 0) {
        return;
      }
      this._current += steps || 1;
      if (this._current >= this._steps) {
        this._triggerCompletion();
      }
    },
    error: function (err) {
      if (this._complete || this._steps === 0) {
        return;
      }
      this._error = err;
      this._triggerCompletion();
    },
    _triggerCompletion: function () {
      if (this._complete) {
        return;
      }
      this._complete = true;
      if (this._error) {
        _.defer(_.bind(this._completionCallback, null, this._error));
      } else {
        _.defer(this._completionCallback);
      }
    }
  });

  return CountdownLatch;
};

module.exports = mod(
  require("underscore")
);
