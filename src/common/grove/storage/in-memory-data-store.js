"use strict";

var mod = function(
  _,
  Promise
) {

  /**
   * Poor man's in-memory data store. Uses a vanilla object as the
   * backing data store. Good for testing, but a production-grade solution
   * should use a proper HashMap implementation.
   *
   * Because this delegates storage to an object's properties, have care
   * when choosing your key. For best results, use a uuid, or pick a consistent
   * key prefix to prevent collision with built-in properties. Also, don't expect
   * to be able to use numbers and their string equivalents as separate
   * keys, as keys are coerced to strings (1 vs "1" - same key).
   */
  var InMemoryDataStore = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(InMemoryDataStore.prototype, {
    initialize: function() {
      this._storage = {};
    },

    get: Promise.method(function(key) {
      if (_.has(this._storage, key)) {
        return this._storage[key];
      }
    }),

    put: Promise.method(function(key, val) {
      this._storage[key] = val;
    }),

    remove: Promise.method(function(key) {
      if (!_.isUndefined(this._storage[key])) {
        delete this._storage[key];
      }
    }),

    exists: Promise.method(function(key){
      return _.has(this._storage, key);
    }),

    clear: Promise.method(function() {
      this._storage = {};
    })
  });

  return InMemoryDataStore;
};

module.exports = mod(
  require("underscore"),
  require("bluebird")
);
