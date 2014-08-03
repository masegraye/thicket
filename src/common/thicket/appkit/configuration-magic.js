"use strict";

var mod = function(
  _
) {

  var ConfigurationMagic = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(ConfigurationMagic.prototype, {
    initialize: function() {}
  });

  _.extend(ConfigurationMagic, {});

  return ConfigurationMagic;
};

module.exports = mod(
  require("underscore")
);
