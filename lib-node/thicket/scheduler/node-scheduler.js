"use strict";

var mod = function(
  _
) {

  var NodeScheduler = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(NodeScheduler.prototype, {
    initialize: function() {},

    runSoon: function(fn) {
      process.nextTick(fn);
    },

    schedule: function(fn, delay) {
      delay = delay || 1;
      return setTimeout(fn, delay);
    },

    unschedule: function(id) {
      return clearTimeout(id);
    }
  });

  return NodeScheduler;
};

module.exports = mod(
  require("underscore")
);
