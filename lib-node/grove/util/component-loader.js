"use strict";

var factory = function(
  _,
  Options
) {
  var ComponentLoader = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ComponentLoader.prototype, {
    initialize: function(requireFun) {
      this._requireFun = requireFun;
      this._aliases = {};
    },

    alias: function(opts) {
      opts = Options.fromObject(opts);
      var moduleName = opts.getOrError("module"),
          aliasName  = opts.getOrError("as");
      this._aliases[aliasName] = moduleName;
    },

    bulkAlias: function(aliases) {
      _.each(aliases, function(aliasName, moduleName) {
        this.alias({module: moduleName, as: aliasName});
      }, this);
      console.log(this._aliases);
    },

    component: function(alias) {
      return this._requireFun(this._aliases[alias]);
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
