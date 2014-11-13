/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise
) {

  /**
   * A StateGuard does what its name implies. Valid states are provided during instantiation, and are applied, ensured,
   * denied, etc, through the course of the owner's lifetime.
   *
   * For example, if you'd like to ensure that Foo#bar raises an error after Foo#dispose is called, you might do the
   * following:
   *
   *   var Foo = function() {
   *     this.initialize.apply(this, arguments);
   *   };
   *
   *   _.extend(Foo.prototype, {
   *     initialize: function() {
   *       this._expensiveResource = new ExpensiveResource();
   *       this._stateGuard = new StateGuard(["disposed"]);
   *     },
   *     dispose: function() {
   *       // #dispose should be idempotent, so here we just check to see if we've already disposed, and return.
   *       // Note that if dispose were async, we'd need to add a "disposing" state.
   *       if (this._stateGuard.applied("disposed")) {
   *         return;
   *       }
   *
   *       if (this._expensiveResource) {
   *         this._expensiveResource.dispose();
   *         this._expensiveResource = null;
   *       }
   *       this._stateGuard.apply("disposed");
   *     },
   *     bar: function() {
   *       this._stateGuard.deny("disposed"); // Throws exception if #dispose was called
   *
   *       return this._expensiveResource.someMethod();
   *     }
   *   });
   *
   * In this case, where we have only one state, it's useful to simply create a scoped StateGuard, which behaves
   * identically to a regular one, except every enforcement/query method has the scope provided during instantiation
   * as a first, implicit argument:
   *
   *   // Identical to previous version.
   *
   *   var Foo = function() {
   *     this.initialize.apply(this, arguments);
   *   };
   *
   *   _.extend(Foo.prototype, {
   *     initialize: function() {
   *       this._expensiveResource = new ExpensiveResource();
   *       this._stateGuard = StateGuard.scoped("disposed");
   *     },
   *     dispose: function() {
   *       // #dispose should be idempotent, so here we just check to see if we've already disposed, and return.
   *       // Note that if dispose were async, we'd need to add a "disposing" state.
   *       if (this._stateGuard.applied()) {
   *         return;
   *       }
   *
   *       if (this._expensiveResource) {
   *         this._expensiveResource.dispose();
   *         this._expensiveResource = null;
   *       }
   *       this._stateGuard.apply();
   *     },
   *     bar: function() {
   *       this._stateGuard.deny(); // Throws exception if #dispose was called
   *
   *       return this._expensiveResource.someMethod();
   *     }
   *   });
   *
   */
  var StateGuard = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(StateGuard.prototype, {
    initialize: function(states) {
      this._validStates = _.reduce(states, function(memo, state) {
        memo[state] = true;
        return memo;
      }, {});

      this._appliedStates = {};
    },

    scope: function(state) {
      var skip = ["scope", "initialize"],
          self = this,
          scoped = {};

      _.each(StateGuard.prototype, function(fun, methodName) {
        if (_.contains(skip, methodName)) {
          return;
        }

        scoped[methodName] = function() {
          var args = _.toArray(arguments);
          args.unshift(state);
          return fun.apply(self, args);
        };
      });

      return scoped;
    },

    apply: function() {
      var states = aryOrVariadicToArray(arguments);
      checkValidStatesOrThrow(this._validStates, states);

      _.each(states, function(state) {
        this._appliedStates[state] = true;
      }, this);

      return this;
    },

    applyAsync: Promise.method(function() {
      return this.apply.apply(this, arguments);
    }),

    applyAsyncFn: function() {
      var args = arguments;
      return _.bind(function() {
        return this.applyAsync.apply(this, args);
      }, this);
    },

    unapply: function() {
      var states = aryOrVariadicToArray(arguments);
      checkValidStatesOrThrow(this._validStates, states);

      _.each(states, function(state) {
        if (this._appliedStates[state]) {
          delete this._appliedStates[state];
        }
      }, this);

      return this;
    },

    unapplyAsync: Promise.method(function() {
      return this.unapply.apply(this, arguments);
    }),

    unapplyAsyncFn: function(states) {
      var args = arguments;
      return _.bind(function() {
        return this.unapplyAsync.apply(this, args)
      }, this);
    },

    deny: function() {
      var states = aryOrVariadicToArray(arguments);
      checkValidStatesOrThrow(this._validStates, states);

      var applied = _.filter(states, function(state) {
        return this._appliedStates[state];
      }, this);

      if (applied.length > 0) {
        throw new Error("State denial requested, but applied: " + pretty(applied));
      }

      return this;
    },

    denyAsync: Promise.method(function() {
      return this.deny.apply(this, arguments);
    }),

    denyAsyncFn: function() {
      var args = arguments;
      return _.bind(function() {
        return this.denyAsync.apply(this, args)
      }, this);
    },

    ensure: function() {
      var states = aryOrVariadicToArray(arguments);
      checkValidStatesOrThrow(this._validStates, states);
      var missing = _.reject(states, function(state) {
        return this._appliedStates[state];
      }, this);

      if (missing.length > 0) {
        throw new Error("State ensurance requested, but not applied: " + pretty(missing));
      }
      return this;
    },

    ensureAsync: Promise.method(function() {
      return this.ensure.apply(this, arguments);
    }),

    ensureAsyncFn: function() {
      var args = arguments;
      return _.bind(function() {
        return this.ensureAsync.apply(this, args);
      }, this);
    },

    applied: function() {
      var states = aryOrVariadicToArray(arguments);
      checkValidStatesOrThrow(this._validStates, states);

      return _.every(states, function(state) {
        return this._appliedStates[state];
      }, this);
    },

    appliedAsync: Promise.method(function() {
      return this.applied.apply(this, arguments);
    }),

    appliedAsyncFn: function() {
      var args = arguments;
      return _.bind(function() {
        return this.appliedAsync.apply(this, args)
      }, this);
    }
  });

  var aryOrVariadicToArray = function(args) {
    return _.chain(args).toArray().flatten().value();
  };

  var checkValidStatesOrThrow = function(validStatesMap, states) {
    var invalidStates = _.reject(states, function(state) {
      return !!validStatesMap[state];
    });

    if (invalidStates.length > 0) {
      throw new Error("Invalid states provided: " + pretty(invalidStates));
    }
  };

  var pretty = function(states) {
    return "["+states.join(",")+"]";
  };

  _.extend(StateGuard, {
    scoped: function(scope) {
      return (new StateGuard([scope])).scope(scope);
    }
  })

  return StateGuard;
};

module.exports = mod(
  require("underscore"),
  require("bluebird")
);
