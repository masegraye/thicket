/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Transform
) {

  var MapTransform = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(MapTransform.prototype, Transform.prototype, {
    initialize: function(mapFn) {
      Transform.prototype.initialize.apply(this, arguments);
      this._mapFn = mapFn
    },
    apply: function(element) {
      this.notify("element", this._mapFn(element));
    }
  });

  return MapTransform;
};

module.exports = mod(
  require("underscore"),
  require("./transform")
);
