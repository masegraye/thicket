/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Ref,
  DelegatingRef
) {

  var helper = function(val) {
    return new Ref(val);
  };

  helper.delegating = function(ref) {
    return new DelegatingRef(ref);
  };

  return helper;
};

module.exports = mod(
  require("underscore"),
  require("./ref"),
  require("./delegating-ref")
);
