/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  MethodSpec
) {

  var ClientSpec = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ClientSpec.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._methodSpecs = _.reduce(opts.getOrElse("methods", {}), function(memo, spec, name) {
        memo[name] = new MethodSpec(spec);
        return memo;
      }, {});
      this._initOptions = opts.getOrElse("initOptions", {});
    },

    methods: function() {
      return this._methodSpecs;
    },

    initOptions: function() {
      return this._initOptions;
    }
  });

  return ClientSpec;
};

module.exports = mod(
  require("underscore"),
  require("../../core/options"),
  require("./method-spec")
);
