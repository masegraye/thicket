"use strict";

var mod = function(
  _,
  Promise,
  Options
) {

  var App = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(App.prototype, {
    initialize: function(opts) {
      this._config = opts.getOrError("configuration");
    },
    start: Promise.method(function() {}),
    stop: Promise.method(function() {}),

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
  require("../core/options")
);
