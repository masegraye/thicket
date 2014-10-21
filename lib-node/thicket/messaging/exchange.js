/*global require: false, module: false */
"use strict";

var mod = function(
  _
) {

  var Exchange = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Exchange.prototype, {
    initialize: function() {},
    send: function() {},
    sendAndReceive: function() {}
  });

  return Exchange;
};

module.exports = mod(
  require("underscore")
);
