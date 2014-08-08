/*global require: false, module: false */
"use strict";

var mod = function(
  _
) {

  /**
   * Given a raw config, ensures blobs can be fetched regardless of
   * scope union scope (i.e., does union canonicalization).
   *
   * For example, a config with scope union `"bbb+aaa"` can later be
   * fetched using either `"aaa+bbb"` or `"bbb+aaa"`. It does this
   * by uniformly ordering the union's composite scopes.
   *
   * This probably isn't a useful class on its own. Instead, defer to
   * `ScopedConfigurationResolver` or `ConfigurationMagic`.
   */
  var ScopedConfiguration = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(ScopedConfiguration.prototype, {
    initialize: function(rawConfig) {
      rawConfig = rawConfig || {};
      this._scopes = {};
      // Sort the scope strings
      _.each(rawConfig, function(config, scopeString) {
        var scope = scopeString.split("+").sort().join("+");
        this._scopes[scope] = config;
      }, this);
    },

    blobForScope: function(scope) {
      return _.clone(this._scopes[scope.split("+").sort().join("+")] || {});
    }
  });

  return ScopedConfiguration;
};

module.exports = mod(
  require("underscore")
);
