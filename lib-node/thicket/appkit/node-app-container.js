/*global require: false, module: false, process: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options,
  Logger,
  CountdownLatch
) {

  var Log = Logger.create("AppContainer");

  var NodeAppContainer = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(NodeAppContainer.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts)
      this._app = opts.getOrError("app");

      var shutdownLatch = new CountdownLatch(1, _.bind(function() {
        Promise
          .bind(this)
          .then(function() {
            Log.info("Received shutdown request, stopping...");
            return this._app.stop();
          })
          .then(function() {
            process.exit(0);
          })
          .caught(function(err) {
            Log.error("Caught error shutting down:", err);
            process.exit(1);
          });
      }, this));

      this._requestShutdown = shutdownLatch.step.bind(shutdownLatch);
    },

    start: Promise.method(function() {
      return Promise
        .bind(this)
        .then(function() {
          return this._registerSig();
        })
        .then(function() {
          return this._app.start();
        });
    }),

    stop: Promise.method(function(reason) {
      return this._app.stop().then(function() {
        if (reason) {
          Log.error("Stopping due to reason:", reason);
          process.exit(1);
        } else {
          process.exit(0)
        }
      });
    }),

    _registerSig: Promise.method(function() {
      process.on("SIGINT", _.bind(function() {
        this._requestShutdown()
      }, this));

      process.on("SIGTERM", _.bind(function() {
        this._requestShutdown()
      }, this));
    })
  });

  return NodeAppContainer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("../core/logging/logger"),
  require("../core/countdown-latch")
);
