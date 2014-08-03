"use strict";

var mod = function(
  _,
  Promise,
  Options,
  Logger
) {

  var Log = Logger.create("AppContainer");

  var NodeAppContainer = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(NodeAppContainer.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts)
      this._app = opts.getOrError("app");
    },

    start: Promise.method(function() {
      return Promise
        .bind(this)
        .then(function() {
          return this._registerSigInt();
        })
        .then(function() {
          return this._app.start();
        });
    }),

    _registerSigInt: Promise.method(function() {
      var app = this._app;
      process.on("SIGINT", function() {
        Promise
          .attempt(function() {
            Log.info("Received SIGINT, stopping...");
            return app.stop();
          })
          .then(function() {
            process.exit(0);
          })
          .caught(function(err) {
            Log.error("Caught error shutting down:", err);
            process.exit(1);
          });
      });
    })
  });

  return NodeAppContainer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("../logging/logger")
);
