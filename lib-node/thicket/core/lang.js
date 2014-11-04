/*global require: false, module: false */
"use strict";

var factory = function(
  _
) {

  var Lang = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Lang.prototype, {
    initialize: function(){}
  });

  _.extend(Lang, {
    noop: function() {},

    partiallyApply: function() {
      var args = _.toArray(arguments),
          fun  = args.shift();

      return function() {
        return fun.apply(null, args.concat(arguments));
      };
    },

    makeErrorClass: function(name, defaultMessage) {
      if (!name) {
        throw new Error("makeErrorClass requires `name`");
      }

      var klass = function(message) {
        this.name    = name;
        this.message = this.name + ": " + (message || defaultMessage || "An unexpected error occurred");

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, klass);
        }
      };

      klass.prototype = Object.create(Error.prototype);
      klass.prototype.constructor = klass;
      return klass;
    }
  });

  return Lang;
};

module.exports = factory(
  require("underscore")
);
