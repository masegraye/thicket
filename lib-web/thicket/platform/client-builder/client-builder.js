/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  BaseClient
) {

  var ClientBuilder = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ClientBuilder.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._spec = opts.getOrError("spec");
    },

    build: function(opts) {
      var c = new BaseClient(_.extend({}, this._spec.initOptions(), opts));
      _.each(this._spec.methods(), function(spec) {
        c.__registerMethod(spec);
      });
      return c;
    }
  });

  return ClientBuilder;
};

module.exports = mod(
  require("underscore"),
  require("../../core/options"),
  require("./base-client")
);
