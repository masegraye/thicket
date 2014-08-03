"use strict";

var mod = function(
  _
) {

  /**
   * A basic Ref serves as a means of indirection between references and their
   * values, allowing an outside agent to modify the underlying value.
   */
  var Ref = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(Ref.prototype, {
    initialize: function(val) {
      this._val = val;
    },

    /**
     * Return the value boxed by this Ref
     *
     * @returns {dynamic}
     */
    get: function() {
      return this._val;
    },

    /**
     * Set a new boxed value. Note this method is specific to this Ref
     * implementation, and not the Ref protocol, which only defines
     * `Ref#get()`.
     *
     * @param newVal {dynamic} the value to box
     */
    set: function(newVal) {
      if (newVal instanceof Ref) {
        this._val = newVal.get();
      } else {
        this._val = newVal;
      }
    }
  });

  return Ref;
};

module.exports = mod(
  require("underscore")
);
