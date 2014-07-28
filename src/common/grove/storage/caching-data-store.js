"use strict";

var mod = function(
  _,
  Promise,
  Options,
  InMemoryDataStore
) {

  var DEFAULT_TTL = 30 * 1000;

  var CachingDataStore = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(CachingDataStore.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._ttl = opts.getOrElse("ttl", DEFAULT_TTL);
    },

    get: Promise.method(function(key) {

    }),

    put: Promise.method(function(key, val) {

    }),

    remove: Promise.method(function(key) {

    }),

    clear: Promise.method(function() {

    })
  });

  var Entry = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Entry.prototype, {
    initialize: function() {}
  });

  return CachingDataStore;

};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("./in-memory-data-store")
);
