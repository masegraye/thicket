/*global require: false, module: false, process: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options,
  Logger
) {

  var Log = Logger.create("AppContainer");

  var WebAppContainer = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(WebAppContainer.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts)
      this._app = opts.getOrError("app");
    },

    start: Promise.method(function() {
      return Promise
        .bind(this)
        .then(function() {
          return this._app.start();
        });
    }),

    stop: Promise.method(function(reason) {
      return this._app.stop().then(function() {
        if (reason) {
          Log.error("Stopping due to reason:", reason);
        }
      });
    })
  });

  return WebAppContainer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("../logging/logger")
);
