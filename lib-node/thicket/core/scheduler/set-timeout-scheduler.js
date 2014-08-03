"use strict";

var mod = function(
  _
) {

  var SetTimeoutScheduler = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(SetTimeoutScheduler.prototype, {
    initialize: function() {},

    schedule: function(fn, delay) {
      delay = delay || 1;
      return setTimeout(fn, delay);
    },

    unschedule: function(id) {
      return clearTimeout(id);
    }
  });

  return SetTimeoutScheduler;
};

module.exports = mod(
  require("underscore")
);
