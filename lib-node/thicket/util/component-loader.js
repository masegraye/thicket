/*global require: false, module: false */
"use strict";

var factory = function(
  _,
  Options
) {

  /**
   * Like a `ComponentRegistry`, but modules are loaded on-demand rather than eagerly required and aliased. This is
   * done by providing the top-level `require` method as an initialization parameter, which maintains the appropriate
   * path context for resolving relative imports later.
   *
   * Note this only works in Node, not environments like Browserify, which need to eagerly resolve all required
   * modules via static analysis. For that, use the `ComponentRegistry`.
   */
  var ComponentLoader = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ComponentLoader.prototype, {
    initialize: function(requireFun) {
      this._requireFun = requireFun;
      this._aliases = {};
      this._pathTransform = function(id) { return id;};
    },

    setPathTransform: function(pathTransform) {
      this._pathTransform = pathTransform;
      return this;
    },

    alias: function(opts) {
      opts = Options.fromObject(opts);
      var aliasName  = opts.getOrError("as");
      this._aliases[aliasName] = opts.getOrError("module");
    },

    bulkAlias: function(aliases) {
      _.each(aliases, function(aliasNames, moduleName) {
        if (!_.isArray(aliasNames)) {
          aliasNames = [aliasNames]
        }
        _.each(aliasNames, function(aliasName) {
          this.alias({module: moduleName, as: aliasName});
        }, this);
      }, this);
    },

    component: function(alias) {
      var mod = this._aliases[alias];
      if (!mod) {
        throw new Error("Invalid alias provided (no such module): `"+alias+"'");
      }
      return this._requireFun(this._pathTransform(mod));
    },

    c: function(alias) {
      return this.component.apply(this, arguments);
    }
  });

  return ComponentLoader;
};

module.exports = factory(
  require("underscore"),
  require("../core/options")
);
