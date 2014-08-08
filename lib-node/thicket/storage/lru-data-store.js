"use strict";

var mod = function(
  _,
  Options,
  InMemoryDataStore,
  LRUHashMap
) {

  var LRUDataStore = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(LRUDataStore.prototype, InMemoryDataStore.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      var map = new LRUHashMap({
        capacity: opts.getOrError("capacity")
      });
      InMemoryDataStore.prototype.initialize.call(this, {
        backingHashMap: map
      });
    }
  });

  return LRUDataStore;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("./in-memory-data-store"),
  require("../collection/lru-hash-map")
);
