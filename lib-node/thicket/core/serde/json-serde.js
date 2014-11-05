/*global require: false, module: false */
"use strict";

var mod = function(
  _
) {

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
