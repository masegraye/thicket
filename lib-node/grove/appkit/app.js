"use strict";

var mod = function(
  _,
  Promise,
  Options,
  Runtime,

  ProcessKeepAlive
) {

  var App = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(App.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._config = opts.getOrError("configuration");

      // The default Runtime has sensible defaults.
      this._runtime = opts.getOrElseFn("runtime", function() {
        return new Runtime();
      });

      this._keepAlive = new ProcessKeepAlive({
        scheduler: this._runtime.scheduler()
      });
    },

    start: Promise.method(function() {
      this._keepAlive.start();
      return this.up();
    }),

    stop: Promise.method(function() {
      this._keepAlive.stop();
      return this.down();
    }),

    /**
     * TODO: Doc. Subclass should override.
     */
    up: Promise.method(function() {}),

    /**
     * TODO: Doc. Subclass should override.
     */
    down: Promise.method(function() {})
  });

  return App;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("../runtime"),
  require("./internal/process-keep-alive")
);
