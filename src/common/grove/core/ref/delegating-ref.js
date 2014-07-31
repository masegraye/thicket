"use strict";

var mod = function(
  _
) {

  /**
   * A ref whose boxed value is
   */
  var DelegatingRef = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(DelegatingRef.prototype, {
    initialize: function(ref) {
      this._delegateRef = ref;
    },
    get: function() {
      return this._delegateRef.get();
    }
  });

  return DelegatingRef;
};

module.exports = mod(
  require("underscore")
);
