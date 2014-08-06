"use strict";

var mod = function(
  _,
  Options
) {

  /**
   * Delegates storage to a JS object.
   */
  var ObjectHashMap = function() {
    this.initialize.apply(this, arguments);
  };


  _.extend(ObjectHashMap.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._store = {};
      this._keyPrefix = opts.getOrElse("keyPrefix", "ohm-");
    },
    get: function(key){
      return this._store[this._makeKey(key)];
    },
    put: function(key, val) {
      this._store[this._makeKey(key)] = val;
    },
    remove: function(key) {
      var val;
      key = this._makeKey(key);
      if (_.has(this._store, key)) {
        val = this._store[key];
        delete this._store[key];
      }
      return val;
    },
    exists: function(key) {
      return _.has(this._store, this._makeKey(key));
    },
    size: function() {
      return _.size(this._store);
    },
    clear: function() {
      this._store = {};
    },
    _makeKey: function(key) {
      return this._keyPrefix + key;
    }
  });


  return ObjectHashMap;
};

module.exports = mod(
  require("underscore"),
  require("../core/options")
);
