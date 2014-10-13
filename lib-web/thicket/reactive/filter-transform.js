/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Transform
) {

  var FilterTransform = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(FilterTransform.prototype, Transform.prototype, {
    initialize: function(filterFn) {
      this._filterFn = filterFn;
    },
    apply: function(element) {
      if (this._filterFn(element)) {
        this.notify("element", element);
      }
    }
  });

  return FilterTransform;
};

module.exports = mod(
  require("underscore"),
  require("./transform")
);
