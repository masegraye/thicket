"use strict";

var factory = function(
  _
) {

  /**
   *
   * Helper for dealing with hash-style function arguments, which can be useful
   * in methods with optional/default values.
   *
   * Usage:
   *
   *   var foo = function(opts) {
   *       opts = Options.fromObject(opts);
   *
   *       var one = opts.getOrError("one"),
   *           two = opts.getOrElse("two", 2),
   *           three = opts.getOrElseFn("three", function() {
   *             return 3;
   *           });
   *
   *     console.log(one, two, three);
   *   };
   *
   *   foo({ one: 1 }); // logs "1, 2, 3"
   *   foo(); // throws Error
   *   foo({one: 1, two: false, three: 4}); // logs "1, false, 4"
   *
   */
  var Options = function(opts) {
    this.initialize.apply(this, arguments);
  }

  _.extend(Options.prototype, {
    initialize: function(opts) {
      this._providedOpts = opts || {};
    },

    /**
     * Attempts to return the value for the requested `key`. If the value
     * is undefined or null, instead returns the provided `fallbackValue`.
     *
     * @param key (required) attribute to be read
     * @param fallbackValue  returned if `key` attribute is null or undefined
     *
     * @returns requested value for `key`, or fallbackValue`
     */
    getOrElse: function(key, defaultValue) {
      if (this._isUndefOrNull(key)) {
        return defaultValue;
      } else {
        return this._providedOpts[key];
      }
    },

    /**
     * Attempts to return the value for the requested `key`. If the value
     * is undefined or null, throws an error.
     *
     * @param key (required) attribute to be read
     * @param err            message provided to Error constructor if `key`
     *                       is null or not defined
     *
     * @returns the value for the requested key
     */
    getOrError: function(key, errorMsg) {
      if (this._isUndefOrNull(key)) {
        errorMsg = errorMsg || "Option requested but not found: `"+key+"`";
        throw new Error(errorMsg);
      }

      return this._providedOpts[key];
    },

    /**
     * Attempts to return the value for the requested `key`. If the value
     * is undefined or null, instead evaluates `fallbackValueFn` and returns
     * its value.
     *
     * This is useful for simulating non-strict evaluation.
     *
     * @param key (required)  attribute to be read
     * @param fallbackValueFn evaluated and return value returned if `key`
     *                        attribute is null or undefined
     *
     * @returns requested value for `key` or the return value of evaluated
     *          `fallbackValueFn`
     */
    getOrElseFn: function(key, defaultValueFn) {
      if (typeof defaultValueFn !== "function") {
        throw new Error("Options#getOrElseFn requires a defaultValueFn");
      }

      if (this._isUndefOrNull(key)) {
        return defaultValueFn();
      } else {
        return this._providedOpts[key];
      }
    },

    _isUndefOrNull: function(key) {
      return typeof this._providedOpts[key] === "undefined" || this._providedOpts[key] === null;
    }
  });

  _.extend(Options, {
    fromObject: function(opts) {
      return new Options(opts);
    }
  })

  return Options;
};

module.exports = factory(
  require("underscore")
);
