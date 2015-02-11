/*global require: false, module: false */
"use strict";

var factory = function(
  _,
  Promise,
  Options
) {

  /**
   * A utility singleton for "language extensions".
   */
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
    },

    pojoClass: function(attributes, options) {
      if (!_.isArray(attributes)) {
        throw new Error("Lang#pojoClass requires attributes array");
      }

      var options = Options.fromObject(options),
          // optional specifies keys that are optional, with values that are default if not provided
          defaults = options.getOrElse("defaults", {}),
          optionalAttributes = _.keys(defaults);

      var toAttributeName = function(attr) {
            return "_" + attr;
          },
          toGetter = function(attr) {
            return attr;
          },
          toSetter = function(attr) {
            return "set" + attr.charAt(0).toUpperCase() + attr.substr(1);
          };

      var klass = function() {
        this.initialize.apply(this, arguments);
      };

      _.extend(klass.prototype, {
        initialize: function(opts) {
          opts = Options.fromObject(opts);
          _.each(attributes, function(attr) {
            if (_.contains(optionalAttributes, attr)) {
              this[toAttributeName(attr)] = opts.getOrElse(attr, defaults[attr]);
            } else {
              this[toAttributeName(attr)] = opts.getOrError(attr);
            }
          }, this);
        },

        toObj: function() {
          return _.inject(attributes, function(m, k) {
            m[k] = this[k]();
            return m;
          }, {}, this);
        }
      });

      _.each(attributes, function(attr) {
        klass.prototype[toGetter(attr)] = function() {
          return this[toAttributeName(attr)];
        };
        klass.prototype[toSetter(attr)] = function(v) {
          this[toAttributeName(attr)] = v;
        };
      });

      return klass;
    },

    deferred: function(promiseClass) {
      promiseClass = promiseClass || Promise;
      var res = null, rej = null;
      var p = new promiseClass(function() {
        res = arguments[0];
        rej = arguments[1];
      });

      return {
        promise: p,
        resolve: res,
        reject:  rej
      };
    }
  });

  return Lang;
};

module.exports = factory(
  require("underscore"),
  require("bluebird"),
  require("./options")
);
