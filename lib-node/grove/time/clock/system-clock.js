"use strict";

var mod = function(
  _,
  Promise
) {

  /**
   * Clock protocol requires the following method:
   *
   *   Clock#getTime() -> {Promise<number>} the time, in milliseconds since epoch
   *
   */

  var SystemClock = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(SystemClock.prototype, {
    initialize: function() {},
    /**
     * @async
     * @returns {Promise<number>} Time in milliseconds since epoch
     * @see Clock#getTime()
     */
    getTime: Promise.method(function() {
      return Date.now();
    })
  });

  return SystemClock;
};

module.exports = mod(
  require("underscore"),
  require("bluebird")
);
