/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Channel
) {

  var CompositeChannel = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(CompositeChannel.prototype, {
    initialize: function() {}
  });

  return CompositeChannel;
};

module.exports = mod(
  require("underscore"),
  require("./channel")
);
