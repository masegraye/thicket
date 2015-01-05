/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  ObjectHashMap
) {

  var DEFAULT_DEFAULT_FN = function(key) {
    return null;
  };

  var DefaultingHashmap = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(DefaultingHashmap.prototype, ObjectHashMap.prototype, {
    initialize: function(opts) {
      ObjectHashMap.prototype.initialize.apply(this, arguments);
      opts = Options.fromObject(opts);
      this._defaultFn = opts.getOrElse("defaultFn", DEFAULT_DEFAULT_FN);
    },
    get: function(key) {
      var realKey = this._makeKey(key);
      var v = this._store[realKey];
      if (typeof v === "undefined") {
        v = this._store[realKey] = this._defaultFn(key);
      }
      return v;
    }
  });

  return DefaultingHashmap;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("./object-hash-map")
);
