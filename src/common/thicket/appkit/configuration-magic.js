/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  ScopedConfigurationResolver
) {

  /**
   * A utility "class" for configuration-related functionality.
   * @constructor
   */
  var ConfigurationMagic = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ConfigurationMagic.prototype, {
    initialize: function() {}
  });

  _.extend(ConfigurationMagic, {
    /**
     * Returns a resolved configuration, given multiple configuration documents and a set of scopes. See
     * `ScopedConfigurationResolver`.
     */
    resolveConfig: function(scopes, configObjects) {
      var r = new ScopedConfigurationResolver();
      _.each(configObjects, function(c) {
        r.add(c);
      });
      return r.resolve(scopes);
    }
  });

  return ConfigurationMagic;
};

module.exports = mod(
  require("underscore"),
  require("./config/scoped-configuration-resolver")
);
