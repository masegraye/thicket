/*global require: false, module: false */
"use strict";

/**
 * Exports a singleton
 */

var mod = function(
  _
) {

  var UUID = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(UUID.prototype, {
    initialize: function() {},
    // See: http://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29
    v4: function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0;
        // 0x3       = 0b00011
        // 0x8       = 0b01000
        // 0x3 | 0x8 = 0b01011
        // r & 0x3   = (0b00000 | 0b00001 | 0b00010 | 0b00011)
        var v = (c == 'x' ? r : (r & 0x3 | 0x8));
        return v.toString(16);
      });
    }
  });

  return new UUID();
};

module.exports = mod(
  require("underscore")
);
