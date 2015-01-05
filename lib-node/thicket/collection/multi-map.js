/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  DefaultingHashMap
) {

  var MultiMap = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(MultiMap.prototype, {
    initialize: function() {
      this._store = new DefaultingHashMap({
        defaultFn: function(key) {
          return [];
        }
      });
    },
    get: function(key) {
      return this._store.get(key);
    },
    put: function(key, val) {
      var v = this._store.get(key);
      v.push(val);
    },
    remove: function(key, val) {
      var v = this._store.get(key);
      var idx = v.indexOf(val);
      if (idx !== -1) {
        v.splice(idx, 1);
        return v;
      }
      return void 0;
    },
    removeAll: function(key) {
      var v = this._store.get(key);
      this._store.remove(key);
      return v;
    },
    exists: function(key, val) {
      return this._store.exists(key) && _.contains(this._store.get(key), val)
    },
    keys: function() {
      return this._store.keys();
    },
    values: function() {
      return _
        .chain(this._store.keys())
        .map(_.bind(function(key) {
          return this._store.get(key);
        }, this))
        .flatten()
        .value();
    },
    size: function() {
      return _.size(this.values());
    },
    clear: function() {
      this._store.clear();
    }
  });

  return MultiMap;
};

module.exports = mod(
  require("underscore"),
  require("./defaulting-hash-map")
);
