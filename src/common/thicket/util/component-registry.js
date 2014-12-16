/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options
) {

  /**
   * A registry for modules. Allows an NPM package to expose internal modules without needing to know the explicit
   * file path, which may change from release to release. Each module may have one or more aliases which can be
   * used to request it later.
   *
   */
  var ComponentRegistry = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ComponentRegistry.prototype, {
    initialize: function() {
      this._modules = {};
    },


    register: function(opts) {
      opts = Options.fromObject(opts);
      var aliases   = opts.getOrError("as"),
          modObject = opts.getOrError("module");

      if (!_.isArray(aliases)) {
        aliases = [ aliases ];
      }

      _.each(aliases, _.bind(function(alias) {
        this._modules[alias] = modObject;
      }, this));

      return this;
    },

    selfRegister: function(opts) {
      opts = Options.fromObject(opts);

      return this.register({
        as: opts.getOrError("as"),
        module: ComponentRegistry
      });
    },


    registerMany: function(aliasesAry) {
      _.each(aliasesAry, _.bind(function(alias) {
        this.register(alias);
      }, this));
      return this;
    },

    component: function(alias) {
      var m = this._modules[alias];
      if (!m) {
        throw new Error("Invalid alias provided (no such module): `"+alias+"'");
      }
      return m;
    }

  });

  ComponentRegistry.prototype.c = ComponentRegistry.prototype.component;

  return ComponentRegistry;
};

module.exports = mod(
  require("underscore"),
  require("../core/options")
);
