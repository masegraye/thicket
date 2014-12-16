/*global require: false, module: false */
"use strict";

var mod = function(
  _
) {

  /**
   * A 'serde' is a thing that can "ser"-ialize and "de"-erialize an object. This one just does JSON, and ignores
   * any additional options.
   *
   *
   */
  var JSONSerde = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(JSONSerde.prototype, {
    initialize: function() {},

    serialize: function(payload, opts) {
      return JSON.stringify(payload);
    },

    deserialize: function(payload, opts) {
      return JSON.parse(payload);
    }
  });

  return JSONSerde;
};

module.exports = mod(
  require("underscore")
);
