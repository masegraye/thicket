;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  ComponentRegistry,
  webAliases,
  nodeAliases
) {
  var c = new ComponentRegistry();


  c.registerMany([
    {
      module: require("./util/component-loader"),
      as: "component-loader"
    },

    {
      module: require("./core/countdown-latch"),
      as: "countdown-latch"
    },

    {
      module: require("./core/options"),
      as: "options"
    },

    {
      module: require("./core/lang"),
      as: "lang"
    },

    {
      module: require("./core/ref"),
      as: "ref"
    },

    {
      module: require("./core/state-guard"),
      as: "state-guard"
    },


    {
      module: require("./core/pub-sub"),
      as: "pub-sub"
    },

    {
      module: require("./core/sequencer/unit-sequencer"),
      as: ["unit-sequencer", "sequencer"]
    },


    {
      module: require("./core/sequencer/clock-sequencer"),
      as: "clock-sequencer"
    },

    {
      module: require("./core/sequencer/delegating-composite-sequencer"),
      as: "delegating-composite-sequencer"
    },

    {
      module: require("./core/sequencer/delegating-forwarding-sequencer"),
      as: "delegating-forwarding-sequencer"
    },

    {
      module: require("./collection/doubly-linked-list"),
      as: "doubly-linked-list"
    },

    {
      module: require("./collection/object-hash-map"),
      as: ["hash-map", "object-hash-map"]
    },

    {
      module: require("./collection/lru-hash-map"),
      as: "lru-hash-map"
    },

    {
      module: require("./storage/caching-data-store"),
      as: "caching-data-store"
    },

    {
      module: require("./storage/in-memory-data-store"),
      as: "in-memory-data-store"
    },

    {
      module: require("./storage/lru-data-store"),
      as: "lru-data-store"
    },

    {
      module: require("./time/clock/logical-clock"),
      as: "logical-clock"
    },

    {
      module: require("./time/clock/system-clock"),
      as: "system-clock"
    },

    {
      module: require("./appkit/configuration-magic"),
      as: "configuration-magic"
    },

    {
      module: require("./appkit/config/scoped-configuration-resolver"),
      as: "scoped-configuration-resolver"
    },

    {
      module: require("./appkit/config/scoped-configuration"),
      as: ["scoped-configuration", "config/scoped-configuration"]
    },

    {
      module: require("./appkit/app"),
      as: "app"
    },

    {
      module: require("./runtime"),
      as: "runtime"
    },

    {
      module: require("./logging/logger"),
      as: "logger"
    },

    {
      module: require("./logging/appenders/console-log-appender"),
      as: ["appenders/console-log", "console-log-appender"]
    },

    {
      module: require("./reactive/reactor"),
      as: "reactor"
    }
  ]);

  c.selfRegister({
    as: "component-registry"
  });

  webAliases(c);
  nodeAliases(c);

  return c;
};

var g = (typeof window === "undefined" ? {} : window);
g.thicket = module.exports = mod(
  require("./util/component-registry"),
  require("./web"),
  require("./node")
);

})()
},{"./util/component-loader":2,"./core/countdown-latch":3,"./core/options":4,"./core/lang":5,"./core/state-guard":6,"./core/pub-sub":7,"./core/sequencer/unit-sequencer":8,"./core/sequencer/clock-sequencer":9,"./core/sequencer/delegating-composite-sequencer":10,"./core/sequencer/delegating-forwarding-sequencer":11,"./collection/doubly-linked-list":12,"./collection/object-hash-map":13,"./collection/lru-hash-map":14,"./storage/caching-data-store":15,"./storage/in-memory-data-store":16,"./storage/lru-data-store":17,"./time/clock/logical-clock":18,"./time/clock/system-clock":19,"./appkit/configuration-magic":20,"./appkit/config/scoped-configuration-resolver":21,"./appkit/config/scoped-configuration":22,"./appkit/app":23,"./logging/logger":24,"./logging/appenders/console-log-appender":25,"./reactive/reactor":26,"./util/component-registry":27,"./web":28,"./node":29,"./core/ref":30,"./runtime":31}],29:[function(require,module,exports){
module.exports = function(c) {};

},{}],28:[function(require,module,exports){
module.exports = function(c) {
  c.registerMany([
    {
      module: require("./appkit/bootstrapper"),
      as: "bootstrapper"
    },
    {
      module: require("./appkit/web-app-container"),
      as: "app-container"
    },
    {
      module: require("./scheduler/web-scheduler"),
      as: "scheduler"
    }
  ]);

  require("./browserify2-list");
};

},{"./appkit/bootstrapper":32,"./appkit/web-app-container":33,"./scheduler/web-scheduler":34,"./browserify2-list":35}],31:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

module.exports = require("./default-runtime");

})()
},{"./default-runtime":36}],35:[function(require,module,exports){
(function(){require("./appkit/app.js");
require("./appkit/bootstrapper.js");
require("./appkit/config/scoped-configuration-resolver.js");
require("./appkit/config/scoped-configuration.js");
require("./appkit/configuration-magic.js");
require("./appkit/internal/process-keep-alive.js");
require("./appkit/web-app-container.js");
require("./collection/doubly-linked-list.js");
require("./collection/lru-hash-map.js");
require("./collection/object-hash-map.js");
require("./core/countdown-latch.js");
require("./core/lang.js");
require("./core/options.js");
require("./core/pub-sub.js");
require("./core/ref/delegating-ref.js");
require("./core/ref/index.js");
require("./core/ref/ref.js");
require("./core/scheduler/set-timeout-scheduler.js");
require("./core/sequencer/clock-sequencer.js");
require("./core/sequencer/delegating-composite-sequencer.js");
require("./core/sequencer/delegating-forwarding-sequencer.js");
require("./core/sequencer/unit-sequencer.js");
require("./core/state-guard.js");
require("./index.js");
require("./logging/appenders/console-log-appender.js");
require("./logging/logger.js");
require("./node.js");
require("./reactive/filter-transform.js");
require("./reactive/map-transform.js");
require("./reactive/reactive-node.js");
require("./reactive/reactor.js");
require("./reactive/transform-chain.js");
require("./reactive/transform.js");
require("./runtime/default-runtime.js");
require("./runtime/index.js");
require("./scheduler/index.js");
require("./scheduler/web-scheduler.js");
require("./storage/caching-data-store.js");
require("./storage/in-memory-data-store.js");
require("./storage/lru-data-store.js");
require("./time/clock/logical-clock.js");
require("./time/clock/system-clock.js");
require("./util/component-loader.js");
require("./util/component-registry.js");
require("./web.js");

})()
},{"./appkit/app.js":23,"./appkit/bootstrapper.js":32,"./appkit/config/scoped-configuration-resolver.js":21,"./appkit/config/scoped-configuration.js":22,"./appkit/configuration-magic.js":20,"./appkit/internal/process-keep-alive.js":37,"./appkit/web-app-container.js":33,"./collection/doubly-linked-list.js":12,"./collection/lru-hash-map.js":14,"./collection/object-hash-map.js":13,"./core/countdown-latch.js":3,"./core/lang.js":5,"./core/options.js":4,"./core/pub-sub.js":7,"./core/ref/delegating-ref.js":38,"./core/ref/index.js":30,"./core/ref/ref.js":39,"./core/scheduler/set-timeout-scheduler.js":40,"./core/sequencer/clock-sequencer.js":9,"./core/sequencer/delegating-composite-sequencer.js":10,"./core/sequencer/delegating-forwarding-sequencer.js":11,"./core/sequencer/unit-sequencer.js":8,"./core/state-guard.js":6,"./index.js":1,"./logging/appenders/console-log-appender.js":25,"./logging/logger.js":24,"./node.js":29,"./reactive/filter-transform.js":41,"./reactive/map-transform.js":42,"./reactive/reactive-node.js":43,"./reactive/reactor.js":26,"./reactive/transform-chain.js":44,"./reactive/transform.js":45,"./runtime/default-runtime.js":36,"./runtime/index.js":31,"./scheduler/index.js":46,"./scheduler/web-scheduler.js":34,"./storage/caching-data-store.js":15,"./storage/in-memory-data-store.js":16,"./storage/lru-data-store.js":17,"./time/clock/logical-clock.js":18,"./time/clock/system-clock.js":19,"./util/component-loader.js":2,"./util/component-registry.js":27,"./web.js":28}],46:[function(require,module,exports){
"use strict";

module.exports = require("./web-scheduler");

},{"./web-scheduler":34}],2:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var factory = function(
  _,
  Options
) {
  var ComponentLoader = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ComponentLoader.prototype, {
    initialize: function(requireFun) {
      this._requireFun = requireFun;
      this._aliases = {};
      this._pathTransform = function(id) { return id;};
    },

    setPathTransform: function(pathTransform) {
      this._pathTransform = pathTransform;
      return this;
    },

    alias: function(opts) {
      opts = Options.fromObject(opts);
      var aliasName  = opts.getOrError("as");
      this._aliases[aliasName] = opts.getOrError("module");
    },

    bulkAlias: function(aliases) {
      _.each(aliases, function(aliasNames, moduleName) {
        if (!_.isArray(aliasNames)) {
          aliasNames = [aliasNames]
        }
        _.each(aliasNames, function(aliasName) {
          this.alias({module: moduleName, as: aliasName});
        }, this);
      }, this);
    },

    component: function(alias) {
      var mod = this._aliases[alias];
      if (!mod) {
        throw new Error("Invalid alias provided (no such module): `"+alias+"'");
      }
      return this._requireFun(this._pathTransform(mod));
    },

    c: function(alias) {
      return this.component.apply(this, arguments);
    }
  });

  return ComponentLoader;
};

module.exports = factory(
  require("underscore"),
  require("../core/options")
);

})()
},{"../core/options":4,"underscore":47}],3:[function(require,module,exports){
(function(){/*global require: false, module: false */

var mod = function (
  _
  ) {

  var CountdownLatch = function () {
        this.initialize.apply(this, arguments);
      },
      noop = function() {};

  _.extend(CountdownLatch.prototype, {
    initialize: function (steps, completionCallback) {
      this._steps = steps || 0;
      this._completionCallback = completionCallback || noop;
      _.bindAll(this, "_completionCallback", "_triggerCompletion");
      if(isNaN(this._steps) || this._steps < 0) {
        throw new Error("CountdownLatch: Number of steps are invalid.");
      }
      this._current = 0;
      this._complete = false;
      this._error = null;
      if(this._steps === 0) {
        _.defer(this._triggerCompletion);
        return;
      }
    },
    step: function (steps) {
      if (this._complete || this._steps === 0) {
        return;
      }
      this._current += steps || 1;
      if (this._current >= this._steps) {
        this._triggerCompletion();
      }
    },
    error: function (err) {
      if (this._complete || this._steps === 0) {
        return;
      }
      this._error = err;
      this._triggerCompletion();
    },
    _triggerCompletion: function () {
      if (this._complete) {
        return;
      }
      this._complete = true;
      if (this._error) {
        _.defer(_.bind(this._completionCallback, null, this._error));
      } else {
        _.defer(this._completionCallback);
      }
    }
  });

  return CountdownLatch;
};

module.exports = mod(
  require("underscore")
);

})()
},{"underscore":47}],4:[function(require,module,exports){
(function(){/*global require: false, module: false */
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

})()
},{"underscore":47}],5:[function(require,module,exports){
(function(){/*global require: false, module: false */
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
    }
  });

  return Lang;
};

module.exports = factory(
  require("underscore")
);

})()
},{"underscore":47}],6:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise
) {

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

  return StateGuard;
};

module.exports = mod(
  require("underscore"),
  require("bluebird")
);

})()
},{"underscore":47,"bluebird":48}],7:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _
) {

  var PubSub = {
    on: function(eventName, handler, context) {
      var bucket = this.__pubSubBucket(eventName);
      bucket.subscribe(handler, context);
    },
    off: function(eventName, handler, context) {
      var bucket = this.__pubSubBucket(eventName);
      bucket.unsubscribe(handler, context);
    },
    notify: function() {
      var args      = _.toArray(arguments),
          eventName = args.shift();

      var bucket = this.__pubSubBucket(eventName);
      bucket.notify(args);
    },
    __pubSubBucket: function(eventName) {
      this.__pubSubEvents = this.__pubSubEvents || {};
      this.__pubSubEvents[eventName] = this.__pubSubEvents[eventName] || new EventBucket(eventName);
      return this.__pubSubEvents[eventName];
    }
  };

  var EventBucket = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(EventBucket.prototype, {
    initialize: function(eventName) {
      this._eventName = eventName;
      this._subscriptions = [];
    },
    subscribe: function(handler, context) {
      if (handler) {
        this._subscriptions.push(new Subscription(handler, context));
      } else {
        throw new Error("Subscription requires handler: " + this._eventName);
      }
    },
    unsubscribe: function(handler, context) {
      var subs;
      if (handler) {
        subs = _.filter(this._subscriptions, function(sub) {
          return sub.matches(handler, context);
        });
      } else {
        subs = this._subscriptions;
      }

      _.each(subs, function(sub) {
        sub.dispose();
      });

      this._subscriptions = _.difference(this._subscriptions, subs);
    },
    notify: function(args) {
      _.invoke(this._subscriptions, "notify", args);
    }
  });

  var Subscription = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Subscription.prototype, {
    initialize: function(handler, context) {
      this._handler = handler;
      this._context = context;
    },
    matches: function(handler, context) {
      if (this._context) {
        // Compare context refs as refs iff we have a context object
        return (handler === this._handler && context === this._context);
      } else {
        // Otherwise, just make sure we don't have a context (null or undefined are fine)
        return (handler === this._handler && !context);
      }
    },
    notify: function(args) {
      // We shouldn't be called after dispose, but
      // just in case...
      if (this._handler) {
        this._handler.apply(this._context, args);
      } else {
        console.log("WTF");
      }
    },
    dispose: function() {
      this._handler = null;
      this._context = null;
    }
  })

  return PubSub;
};

module.exports = mod(
  require("underscore")
);

})()
},{"underscore":47}],12:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options
) {

  var DoublyLinkedList = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(DoublyLinkedList.prototype, {
    initialize: function() {
      this._front = null;
      this._back = null;
      this._size = 0;
    },

    get: function(idx) {
      this._checkElementIdxOrThrow(idx);
      var node = this._walkToIdx(idx);
      return node.value();
    },

    exists: function(value) {
      var node = this._walkToValue(value);
      return !!node;
    },

    size: function() {
      return this._size;
    },

    add: function(value) {
      return this.addBack.apply(this, arguments);
    },

    addFront: function(value) {
      this._linkFront(value);
    },

    addBack: function(value) {
      this._linkBack(value);
    },

    remove: function(value) {
      var node = this._walkToValue(value);
      return this._unlink(node);
    },

    removeFront: function() {
      if (this._front === null) {
        throw new Error("No such element");
      }
      return this._unlinkFront(this._front);
    },

    removeBack: function() {
      if (this._back === null) {
        throw new Error("No such element");
      }
      return this._unlinkBack(this._back);
    },

    insertAtIndex: function(idx, value) {
      this._checkIsElementPositionOrThrow(idx);

      if (idx === this._size) {
        this.addBack(value);
      } else {
        var node = this._walkToIdx(idx);
        this._linkBefore(value, node);
      }
    },

    removeAtIndex: function(idx) {
      this._checkElementIdxOrThrow(idx);
      if (idx === 0) {
        return this._unlinkFront(this._front);
      } else if ( idx === (this._size - 1) ) {
        return this._unlinkBack(this._back);
      } else {
        var node = this._walkToIdx(idx);
        return this._unlink(node);
      }
    },

    clear: function() {
      var node = this._front,
          next;

      while (node !== null) {
        next = node.next();
        node.dispose();
        node = next;
      }
      this._front = null;
      this._back  = null;
      this._size = 0;
    },

    _linkFront: function(value) {
      var oldFront = this._front,
          newNode = new Node({value: value});
      this._front = newNode;

      if (oldFront === null) {
        this._back = newNode;
      } else {
        oldFront.setPrev(newNode);
        newNode.setNext(oldFront);
      }

      this._size++;
      return newNode;
    },

    _linkBack: function(value) {
      var oldBack = this._back,
          newNode = new Node({value: value});

      this._back = newNode;
      if (oldBack === null) {
        this._front = newNode;
      } else {
        oldBack.setNext(newNode);
        newNode.setPrev(oldBack);
      }

      this._size++;
      return newNode;
    },

    _linkBefore: function(value, node) {
      var pred    = node.prev(),
          newNode = new Node({value: value, prev: pred, next: node});

      node.setPrev(newNode);
      if (pred === null) {
        this._front = newNode;
      } else {
        pred.setNext(newNode);
      }
      this._size++;
      return newNode;
    },

    _unlinkFront: function(node) {
      var value    = node.value(),
          newFront = node.next();

      node.dispose();
      this._front = newFront;
      if (newFront === null) {
        this._back = null;
      } else {
        newFront.setPrev(null);
      }
      this._size--;
      return value;
    },

    _unlinkBack: function(node) {
      var value   = node.value(),
          newBack = node.prev();

      node.dispose();
      this._back = newBack;
      if (newBack == null) {
        this._front = null;
      } else {
        newBack.setNext(null);
      }
      this._size--;
      return value;
    },

    _unlink: function(node) {
      var prev  = node.prev(),
          next  = node.next(),
          value = node.value();

      if (prev === null) {
        this._front = next;
      } else {
        prev.setNext(next);
      }

      if (next === null) {
        this._back = prev;
      } else {
        next.setPrev(prev);
      }

      node.dispose();
      this._size--;
      return value;
    },

    _walkToIdx: function(idx) {
      var node, current;
      if (idx < this._size / 2) {
        node = this._front;
        current = 0;
        while(current !== idx) {
          node = node.next();
          current++;
        }
      } else {
        node = this._back;
        current = this._size - 1;

        while(current !== idx) {
          node = node.prev();
          current--;
        }
      }
      return node;
    },

    _walkToValue: function(value) {
      var n = this._front;
      while (n !==null ) {
        if (n.match(value)) {
          return n;
        }
        n = n.next();
      }
      return null;
    },

    _isElementIdx: function(idx) {
      return (idx >= 0 && idx < this._size);
    },

    _isElementPosition: function(idx) {
      return (idx >= 0 && idx <= this._size);
    },

    _checkElementIdxOrThrow: function(idx) {
      if (!this._isElementIdx(idx)) {
        throw new Error("Index out of bounds; size: " + this._size + "; idx: " + idx);
      }
    },

    _checkIsElementPositionOrThrow: function(idx) {
      if (!this._isElementPosition(idx)) {
        throw new Error("Index out of bounds; size: " + this._size + "; idx: " + idx);
      }
    }

  });

  var Node = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Node.prototype, {
    initialize: function(opts) {
      opts        = Options.fromObject(opts);
      this._next  = opts.getOrElse("next", null);
      this._prev  = opts.getOrElse("prev", null);
      this._value = opts.getOrElse("value", null);
    },

    next: function() {
      return this._next;
    },

    prev: function() {
      return this._prev;
    },

    setNext: function(node) {
      this._next = node;
    },

    setPrev: function(node) {
      this._prev = node;
    },

    value: function() {
      return this._value;
    },

    dispose: function() {
      this._next  = null;
      this._prev  = null;
      this._value = null;
    },

    match: function(value) {
      return this._value === value;
    }
  });

  return DoublyLinkedList;
};

module.exports = mod(
  require("underscore"),
  require("../core/options")
);

})()
},{"../core/options":4,"underscore":47}],16:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options,
  ObjectHashMap
) {

  /**
   * InMemoryDataStore delegates to a backing HashMap. By default, this
   * will be a "poor man's HashMap", a.k.a., the ObjectHashMap.
   */
  var InMemoryDataStore = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(InMemoryDataStore.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._map = opts.getOrElseFn("backingHashMap", function() {
        return new ObjectHashMap();
      });
    },

    get: Promise.method(function(key) {
      return this._map.get(key);
    }),

    put: Promise.method(function(key, val) {
      return this._map.put(key, val);
    }),

    remove: Promise.method(function(key) {
      return this._map.remove(key);
    }),

    exists: Promise.method(function(key){
      return this._map.exists(key);
    }),

    clear: Promise.method(function() {
      return this._map.clear();
    })
  });

  return InMemoryDataStore;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("../collection/object-hash-map")
);

})()
},{"../core/options":4,"../collection/object-hash-map":13,"underscore":47,"bluebird":48}],15:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options,
  InMemoryDataStore,
  UnitSequencer
) {

  // Appropriate for the default sequencer (non-temporal)
  var DEFAULT_TTL = 1;


  /**
   * A look-aside caching data store. Note: it's generally not useful to allow
   * null/undefined stored values. When an item is evicted from the cache, a
   * subsequent `get` call will return `undefined`, so it can be difficult to
   * determine if there was a cache miss if the value you're storing is, in fact,
   * `undefined`, unless you prefix every check with `exists`, which also does
   * cache eviction on check.
   */
  var CachingDataStore = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(CachingDataStore.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._ttl = opts.getOrElse("ttl", DEFAULT_TTL);

      // Default sequencer is a linear/unit sequencer. The default TTL is
      // 1. Therefore, all values will expire with single advance of the
      // sequencer. Note that the data store doesn't advance the
      // sequencer itself. The store owner is responsible for doing
      // this.
      //
      // This is especially important to note for time-based sequencers.
      // Time will not advance automatically. The store owner is responsible
      // for scheduling the sequencer to advance with time. This keeps the
      // CachingDataStore's lifecycle simple with respect to time.
      this._sequencer = opts.getOrElseFn("sequencer", function() {
        return new UnitSequencer();
      });

      // By default, we delegate to an in-memory store. Fine for simple
      // cases, but not optimal.
      this._backingStore = opts.getOrElseFn("backingStore", function() {
        return new InMemoryDataStore();
      });

      // Updates the lastUpdated time to "now" on read - keeps entries
      // from expiring when they're being accessed, but can cause
      // staleness issues.
      this._shouldTouchOnRead = opts.getOrElse("touchOnRead", false);
    },

    sequencer: function() {
      return this._sequencer;
    },


    /**
     * Gets the value associated with the provided key. If the object has
     * expired, it will be evicted from the cache, and `undefined` will
     * be returned instead.
     *
     * @param key {string} (required)
     * @async
     * @returns {Promise<Object>} requested value
     */
    get: Promise.method(function(key) {
      return Promise
        .bind(this)
        .then(function() {
          return this._backingStore.get(key);
        })
        .then(function(entry){
          if (!entry) {
            return;
          }

          if (!entry.isExpired(this._sequencer.value(), this._ttl)) {
            if (this._shouldTouchOnRead) {
              entry.touch(this._sequencer.value());
            }
            return Promise
              .bind(this)
              .then(function() {
                return this._backingStore.put(key, entry);
              })
              .return(entry.value());
          } else {
            return Promise
              .bind(this)
              .then(function() {
                return this.remove(key)
              })
              .then(function() {
                // .thenReturn is a lie.
                return;
              });
          }
        });
    }),

    /**
     * Stores the provided `val`, identified by `key`
     *
     * @param `key` {string}  (required) identifier for value to be stored
     * @param `val` {dynamic} (required) value to be stored
     * @async
     * @returns {Promise<>}
     */
    put: Promise.method(function(key, val) {
      return Promise
        .bind(this)
        .then(function() {
          return this._backingStore.get(key);
        })
        .then(function(entry) {
          // If we have an entry, we should just update
          // Else, we make new one.
          // Pesist, then return nothing.
          if (entry) {
            entry.update(val, this._sequencer.value());
          } else {
            entry = new Entry({
              value: val,
              initialSequence: this._sequencer.value()
            });
          }

          return Promise
            .bind(this)
            .then(function() {
              return this._backingStore.put(key, entry)
            })
            .then(function() {
              return;
            });
        });
    }),

    /**
     * Removes the value associated with the provided `key`
     *
     * @param `key` {string} (required) identifier for value to be removed
     * @async
     * @returns {Promise<dynamic>} Removed value, if present in store.
     */
    remove: Promise.method(function(key) {
      var val;
      return this._backingStore
        .remove(key)
        .then(function(entry) {
          if (entry) {
            val = entry.value();
            entry.dispose();
            return val;
          }
        });
    }),

    exists: Promise.method(function(key){
      // It's not sufficient to delegate this call to the underlying
      // backing store. We need to perform eviction, as a subsequent call
      // to get would do the same. If the `exists` check says it exists,
      // bet it doesn't when we `get`, then `exists` is a worthless operation.
      //
      // Note that if you're using a CachingDataStore backed by an InMemoryDataStore
      // backed by an LRUHashMap, this will cause the entry to be "touched", whereas
      // a normal "exists" check would not.
      return Promise
        .bind(this)
        .then(function() {
          return this._backingStore.get(key);
        })
        .then(function(entry) {
            if (!entry) {
              return false;
            } else {
              if (!entry.isExpired(this._sequencer.value(), this._ttl)) {
                return true;
              } else {
                return this._backingStore.remove(key)
                  .then(function() {
                    entry.dispose();
                  })
                  .thenReturn(false);
              }
            }
        });
    }),

    clear: Promise.method(function() {
      return this._backingStore.clear();
    })
  });

  var Entry = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Entry.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      // Perfectly acceptable to pass in undefined...
      this._value = opts.getOrElse("value", undefined);
      this._lastSequence = opts.getOrError("initialSequence");
    },

    isExpired: function(sequence, ttl) {
      // E.g., lastSequence = 4, ttl = 1, sequence = 5: expired
      //       lastSequence = 4, ttl = 1, sequence = 4: not expired
      //       lastSequence = 4, ttl = 2, sequence = 5: not expired
      return this._lastSequence + ttl <= sequence;
    },

    touch: function(sequence) {
      this._lastSequence = sequence;
    },

    update: function(val, sequence) {
      this._value        = val;
      this._lastSequence = sequence;
    },

    dispose: function() {
      this._value        = null;
      this._lastSequence = null;
    },

    value: function() {
      return this._value;
    }
  });

  return CachingDataStore;

};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("./in-memory-data-store"),
  require("../core/sequencer/unit-sequencer")
);

})()
},{"../core/options":4,"./in-memory-data-store":16,"../core/sequencer/unit-sequencer":8,"underscore":47,"bluebird":48}],17:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  InMemoryDataStore,
  LRUHashMap
) {

  var LRUDataStore = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(LRUDataStore.prototype, InMemoryDataStore.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      var map = new LRUHashMap({
        capacity: opts.getOrError("capacity")
      });
      InMemoryDataStore.prototype.initialize.call(this, {
        backingHashMap: map
      });
    }
  });

  return LRUDataStore;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("./in-memory-data-store"),
  require("../collection/lru-hash-map")
);

})()
},{"../core/options":4,"./in-memory-data-store":16,"../collection/lru-hash-map":14,"underscore":47}],20:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  ScopedConfigurationResolver
) {

  var ConfigurationMagic = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ConfigurationMagic.prototype, {
    initialize: function() {}
  });

  _.extend(ConfigurationMagic, {
    resolveConfig: function(scopes, configObjects) {
      var r = new ScopedConfigurationResolver();
      _.each(configObjects, function(c) {
        r.add(c);
      });
      return r.resolve(scopes);
    }
  });

  return ConfigurationMagic;
};

module.exports = mod(
  require("underscore"),
  require("./config/scoped-configuration-resolver")
);

})()
},{"./config/scoped-configuration-resolver":21,"underscore":47}],23:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Logger,
  Options,
  StateGuard,
  Runtime,
  ProcessKeepAlive
) {
  var Log = Logger.create("App");

  var App = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(App.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._guard = new StateGuard(["starting", "started", "stopping", "stopped"]);
      this._rawConfig = opts.getOrError("configuration");
      this._config = Options.fromObject(this._rawConfig);

      // The default Runtime has sensible defaults.
      this._runtime = opts.getOrElseFn("runtime", function() {
        return new Runtime();
      });

      this._keepAlive = new ProcessKeepAlive({
        scheduler: this._runtime.scheduler()
      });

      var up   = opts.getOrElse("up"),
          down = opts.getOrElse("down");

      if (up) {
        this.up = Promise.method(_.bind(function() {
          return up.call(this, this._config);
        }, this));
      }

      if (down) {
        this.down = Promise.method(_.bind(function() {
          return down.call(this, this._config);
        }, this));
      }

    },

    start: Promise.method(function() {
      Log.debug("Starting App");
      this._guard
        .deny("starting")
        .apply("starting");

      this._keepAlive.start();
      Log.debug("Calling App#up()");

      return this.up()
        .then(this._guard.applyAsyncFn("started"));
    }),

    stop: Promise.method(function() {
      Log.debug("Stopping App");
      this._guard
        .deny("stopping")
        .apply("stopping");

      this._keepAlive.stop();
      Log.debug("Calling App#down()");

      return this.down()
        .then(this._guard.applyAsyncFn("stopped"));
    }),

    /**
     * Returns the requested configuration value, or throws an error.
     * @param key the configuration key request from the Configuration.
     * @returns {Object}
     */
    config: function(key) {
      return this._config.getOrError(key);
    },

    /**
     * TODO: Doc. Subclass should override.
     */
    up: Promise.method(function() {}),

    /**
     * TODO: Doc. Subclass should override.
     */
    down: Promise.method(function() {})
  });

  return App;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../logging/logger"),
  require("../core/options"),
  require("../core/state-guard"),
  require("../runtime"),
  require("./internal/process-keep-alive")
);

})()
},{"../logging/logger":24,"../core/options":4,"../core/state-guard":6,"./internal/process-keep-alive":37,"../runtime":31,"underscore":47,"bluebird":48}],24:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Ref,
  Options
) {

  var Logger = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Logger.prototype, {

    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._name         = opts.getOrElse("name", "Default");
      this._logLevel     = opts.getOrElse("logLevel", LogUtil.Level.Info);
      this._parent       = opts.getOrElseFn("refParent", function() { return Ref(null) });

      this._appenders = [];
    },

    trace: function() {
      this._log(LogUtil.Level.Trace, _.toArray(arguments));
    },

    debug: function() {
      this._log(LogUtil.Level.Debug, _.toArray(arguments));
    },

    info: function() {
      this._log(LogUtil.Level.Info, _.toArray(arguments));
    },

    error: function() {
      this._log(LogUtil.Level.Error, _.toArray(arguments));
    },

    fatal: function() {
      this._log(LogUtil.Level.Fatal, _.toArray(arguments));
    },

    isTraceEnabled: function() {
      return this.isLogLevelEnabled(Logger.Level.Trace);
    },

    isDebugEnabled: function() {
      return this.isLogLevelEnabled(Logger.Level.Debug);
    },

    isInfoEnabled: function() {
      return this.isLogLevelEnabled(Logger.Level.Info);
    },

    isErrorEnabled: function() {
      return this.isLogLevelEnabled(Logger.Level.Error);
    },

    isFatalEnabled: function() {
      return this.isLogLevelEnabled(Logger.Level.Fatal);
    },

    isLogLevelEnabled: function(logLevel) {
      var coercedLogLevel = b(logLevel);
      return (this._logLevel & coercedLogLevel) === coercedLogLevel;
    },

    addAppender: function(appender) {
      this._appenders.push(appender);
    },

    setLogLevel: function(logLevel) {
      // Save a copy for the potential error message
      var originalLogLevel = logLevel;

      // If name is specified, e.g., "Info", convert to
      // int
      if (_.isString(logLevel)) {
        logLevel = LogUtil.Level[logLevel]
      }

      var exists = _.detect(LogUtil.Level, function(level, name) {
        return level === logLevel;
      });

      if (!exists) {
        throw new Error("Invalid logLevel: " + originalLogLevel);
      }

      this._logLevel = logLevel;
    },


    _log: function(logLevel, logArgs) {
      this._logWithMetadata([], logLevel, logArgs);
    },

    _logWithMetadata: function(descendants, logLevel, args) {
      if (this.isLogLevelEnabled(logLevel)) {
        _.each(this._appenders, function(appender) {
          appender.log(this._name, descendants, logLevel, LogUtil._Label[logLevel], args);
        }, this);
      }

      if (this._parent.get()) {
        this._parent.get()._logWithMetadata([this._name].concat(descendants), logLevel, args);
      }
    }
  });

  var LogUtil = function() {
    this.initialize.apply(this, arguments);
  };

  // Coerce (just use rightmost 8 bits)!; because JS is dumb, and everything is
  // actually a float with 53-bit precision
  var b = function(v) {
    return 0xFF & v;
  };

  _.extend(LogUtil, {
    Level: {
      Trace: b(parseInt("11111", 2)),
      Debug: b(parseInt("01111", 2)),
      Info:  b(parseInt("00111", 2)),
      Error: b(parseInt("00011", 2)),
      Fatal: b(parseInt("00001", 2))
    }
  });

  _.extend(LogUtil.prototype, {
    Level: LogUtil.Level,
    initialize: function() {
      this._rootLogger = Ref(new Logger({
        name: "Root"
      }));
    },

    create: function(name, opts) {
      opts = _.clone(opts || {});

      var parent;
      if (opts.parent) {
        parent = Ref(opts.parent);
        delete(opts.parent);
      } else {
        parent = Ref.delegating(this._rootLogger);
      }

      opts.refParent = parent;

      opts.name = name;

      return new Logger(opts);
    },

    root: function() {
      return this._rootLogger.get();
    },

    resetRootLogger: function() {
      this._rootLogger.set(new Logger({
        name: "Root"
      }));
    }
  });


  LogUtil._Label = _.reduce(LogUtil.Level, function(memo, val, key) {
    memo[val] = key;
    return memo;
  }, {});

  return new LogUtil();
};

module.exports = mod(
  require("underscore"),
  require("../core/ref"),
  require("../core/options")
);

})()
},{"../core/options":4,"../core/ref":30,"underscore":47}],26:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  Ref,
  ReactiveNode,
  DefaultScheduler
) {

  var Reactor = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Reactor.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._scheduler = opts.getOrElseFn("scheduler", function() {
        return Ref(new DefaultScheduler());
      });
    },
    fromPromise: function(promise) {
      var node = new ReactiveNode();
      promise.then(function(v) {
        node._apply(v);
      }, function(err) {
        node._applyError(err);
      });
      return node;
    },
    fromArray: function(ary) {
      var node = new ReactiveNode();

      this._scheduler.get().schedule(function() {
        _.each(ary, function(element){
          node._apply(element);
        });
      });

      return node;
    }
  });

  return Reactor;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("../core/ref"),
  require("./reactive-node"),
  require("../scheduler")
);

})()
},{"../core/options":4,"./reactive-node":43,"../core/ref":30,"../scheduler":46,"underscore":47}],27:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options
) {

  var ComponentRegistry = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ComponentRegistry.prototype, {
    initialize: function() {
      this._modules = {};
    },


    register: function(opts) {
      opts = Options.fromObject(opts);
      var aliases   = opts.getOrError("as"),
          modObject = opts.getOrError("module");

      if (!_.isArray(aliases)) {
        aliases = [ aliases ];
      }

      _.each(aliases, _.bind(function(alias) {
        this._modules[alias] = modObject;
      }, this));

      return this;
    },

    selfRegister: function(opts) {
      opts = Options.fromObject(opts);

      return this.register({
        as: opts.getOrError("as"),
        module: ComponentRegistry
      });
    },


    registerMany: function(aliasesAry) {
      _.each(aliasesAry, _.bind(function(alias) {
        this.register(alias);
      }, this));
      return this;
    },

    component: function(alias) {
      var m = this._modules[alias];
      if (!m) {
        throw new Error("Invalid alias provided (no such module): `"+alias+"'");
      }
      return m;
    }

  });

  ComponentRegistry.prototype.c = ComponentRegistry.prototype.component;

  return ComponentRegistry;
};

module.exports = mod(
  require("underscore"),
  require("../core/options")
);

})()
},{"../core/options":4,"underscore":47}],13:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options
) {

  /**
   * Delegates storage to a JS object.
   */
  var ObjectHashMap = function() {
    this.initialize.apply(this, arguments);
  };


  _.extend(ObjectHashMap.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._store = {};
      this._keyPrefix = opts.getOrElse("keyPrefix", "ohm-");
    },
    get: function(key){
      return this._store[this._makeKey(key)];
    },
    put: function(key, val) {
      this._store[this._makeKey(key)] = val;
    },
    remove: function(key) {
      var val;
      key = this._makeKey(key);
      if (_.has(this._store, key)) {
        val = this._store[key];
        delete this._store[key];
      }
      return val;
    },
    exists: function(key) {
      return _.has(this._store, this._makeKey(key));
    },
    size: function() {
      return _.size(this._store);
    },
    clear: function() {
      this._store = {};
    },
    _makeKey: function(key) {
      return this._keyPrefix + key;
    }
  });


  return ObjectHashMap;
};

module.exports = mod(
  require("underscore"),
  require("../core/options")
);

})()
},{"../core/options":4,"underscore":47}],14:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  ObjectHashMap,
  DoublyLinkedList
) {

  var LRUHashMap = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(LRUHashMap.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._capacity = opts.getOrError("capacity");
      this._keyAccessList = new DoublyLinkedList();
      // TODO: Really need a proper HashMap at some point...
      this._store = new ObjectHashMap();
    },
    get: function(key) {
      var entry = this._store.get(key);
      if (!entry) {
        return;
      }

      // As a perf optimization, we keep a ref
      // to the node in the entry.
      var node = entry.node();
      this._keyAccessList._unlink(node);

      // Get the new node
      node = this._keyAccessList._linkFront(entry.key());

      // Save it
      entry.setNode(node);
      // Return the value
      return entry.value();
    },

    put: function(key, val) {
      var entry = this._store.get(key),
          node;
      if (!entry) {
        // If no entry, make a new entry
        if (this._keyAccessList.size() >= this._capacity) {
          // Have to make room for it
          var evictedKey = this._keyAccessList.removeBack(),
              evictedEntry = this._store.get(evictedKey);

          evictedEntry.dispose();
          this._store.remove(evictedKey);
        }

        node = this._keyAccessList._linkFront(key);
        entry = new Entry({
          key: key,
          value: val,
          node: node
        });
        this._store.put(key, entry);
      } else {
        // "Touch" the entry, set new value
        node = entry.node();
        this._keyAccessList._unlink(node);
        node = this._keyAccessList._linkFront(entry.key());
        // Update with the new node and value
        entry.setNode(node);
        entry.setValue(val);
      }
    },

    remove: function(key) {
      var entry = this._store.get(key),
          value,
          node;
      if (entry) {
        value = entry.value();
        node = entry.node();
        this._keyAccessList._unlink(node);
        entry.dispose();
        this._store.remove(key);
        return value;
      }
    },

    exists: function(key) {
      return this._store.exists(key);
    },

    size: function() {
      return this._store.size();
    },

    clear: function() {
      this._store.clear();
      this._keyAccessList.clear();
    }
  });

  var Entry = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Entry.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      // Though the Node should have the key, if the node
      // is unlinked from the list, its boxed value will disappear
      this._key   = opts.getOrError("key");
      this._value = opts.getOrError("value");
      this._node  = opts.getOrError("node");
    },
    node: function() {
      return this._node;
    },
    setNode: function(node) {
      this._node = node;
    },
    value: function() {
      return this._value;
    },
    setValue: function(value) {
      this._value = value;
    },
    key: function() {
      return this._key;
    },
    dispose: function() {
      this._key = null;
      this._value = null;
      this._node = null;
    }
  });

  return LRUHashMap;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("./object-hash-map"),
  require("./doubly-linked-list")
);

})()
},{"../core/options":4,"./object-hash-map":13,"./doubly-linked-list":12,"underscore":47}],47:[function(require,module,exports){
(function(){//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.6.0';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, function(value, index, list) {
      return !predicate.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {
      if (!(result = result && predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed > lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed < lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(array, predicate) {
    var pass = [], fail = [];
    each(array, function(elem) {
      (predicate(elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.contains(other, item);
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function () {
      return value;
    };
  };

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj === attrs) return true; //avoid comparing an object to itself.
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}).call(this);

})()
},{}],8:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options
) {

  var UnitSequencer = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(UnitSequencer.prototype, {
    initialize: function(opts) {
      opts           = Options.fromObject(opts);
      this._sequence = opts.getOrElse("initialSequence", 0);
    },

    /**
     * Advances its sequence by `by`, or by `1` if `by` is not provided.
     *
     * @param by {number} the amount to advance by. Defaults to `1`.
     * @async
     * @returns {Promise<undefined>}
     */
    advance: Promise.method(function(by) {
      // Wahh wahh - don't use `by || 1`, or you can't advance by 0, which is silly
      // but potentially necessary.
      by             = _.isUndefined(by) ? 1 : by;

      if (by < 0) {
        throw new Error("UnitSequencer#advance() requires positive `by` offset");
      }

      this._sequence = this._sequence + by;
    }),

    /**
     * Returns the current sequence. This value should always be the same
     * or greater than a value returned previously (in time).
     *
     * @returns {number} the current sequence
     */
    value: function() {
      return this._sequence;
    }
  });

  return UnitSequencer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../options")
);

})()
},{"../options":4,"underscore":47,"bluebird":48}],9:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options
) {

  /**
   * A Sequencer which advances by reading from a Clock.
   * Note that this ClockSequencer relies on the Clock protocol, which
   * only provides `Clock#getTime()`. It does not modify the clock itself.
   * This means if you're using a LogicalClock, it's still up to the clock's
   * owner to advance the clock for the sequencer to advance.
   */
  var ClockSequencer = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(ClockSequencer.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._clock    = opts.getOrError("clock");
      this._sequence = opts.getOrElse("initialSequence", 0);
    },

    /**
     * Advances by setting its sequence to the backing clock's time.
     * Note that if this method is called twice within the same time unit,
     * the sequence will not actually advance, since unique time is not
     * guaranteed by our clocks.
     *
     * @async
     * @returns {Promise<>}
     */
    advance: Promise.method(function() {
      return Promise
        .bind(this)
        .then(function() {
          return this._clock.getTime();
        })
        .then(function(t) {
          this._sequence = t;
        });
    }),

    /**
     * Returns the current sequence. This value should always be the same
     * or greater than a value returned previously (in time).
     *
     * @returns {number} the current sequence
     */
    value: function() {
      return this._sequence;
    }
  });

  return ClockSequencer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../options")
);

})()
},{"../options":4,"underscore":47,"bluebird":48}],11:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options
) {

  var DelegatingForwardingSequencer = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(DelegatingForwardingSequencer.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._delegateSequencer = opts.getOrError("delegate");
      this._forwardTargets = _.clone(opts.getOrElse("targets", []));
    },
    addTarget: function(seq) {
      this._forwardTargets.push(seq);
    },
    advance: Promise.method(function() {
      var s = this._delegateSequencer;
      return s.advance.apply(s, arguments)
      .bind(this)
      .then(function(val) {
        return Promise
          .all(_.invoke(this._forwardTargets, "advance"))
          .then(function() {
            // Return the value returned by the delegate sequencer's
            // advance call (if any). The advancement of the forward
            // targets should be transparent.
            return val;
          });
      });
    }),
    value: function() {
      var s = this._delegateSequencer;
      return s.value.apply(s, arguments);
    }
  });

  return DelegatingForwardingSequencer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../options")
);

})()
},{"../options":4,"underscore":47,"bluebird":48}],10:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options
) {

  /**
   * A UnitSequencer which reports its sequence summed with the sequences
   * of its internal collection of sequencers.
   *
   * This device is useful for tracking the state of data comprised from multiple
   * sources. For instance, you might have CachingDataStore(A) storing data
   * from Source(A), tracked by Sequencer(A), and CachingDataStore(B) storing
   * data from Source(B), tracked by Sequencer(B). Meanwhile, you may have
   * CachingDataStore(C), storing data from Source(A + B), and tracked by
   * Sequencer(C) = Sequencer(A + B) - a DelegatingCompositeSequencer.
   *
   * Thus, if Sequencer(A) is advanced, it may invalidate CachingDataStore(A) or
   * CachingDataStore(C) or both.
   *
   * Note this particular usage is generally only useful for Unit sequencers.
   *
   * If you'd like the above functionality, but with Sequencer(A) and
   * Sequencer(B) as ClockSequencers, and Sequencer(C) merely tracking
   * modification, you'd need to use a DelegatingForwardingSequencer for A and B,
   * forwarding them to UnitSequencer(C).
   *
   * DelegatingCompositeSequencer and DelegatingForwardingSequencer are effectivly
   * opposites of each other. DelegatingCompositeSequencer composes the `value`
   * of multiple underlying sequencers (pull), and DelegatingForwardingSequencer
   * forwards the `advance` call to multiple targets (push).
   */
  var DelegatingCompositeSequencer = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(DelegatingCompositeSequencer.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._delegateSequencer = opts.getOrError("delegate");
      this._sequencers = _.clone(opts.getOrElse("sequencers", []));
    },
    addSequencer: function(seq) {
      this._sequencers.push(seq);
    },
    advance: function() {
      var s = this._delegateSequencer;
      return s.advance.apply(s, arguments);
    },
    value: function() {
      return _
        .chain(this._sequencers)
        .invoke("value")
        .reduce(function(sum, n) {
          return sum + n;
        }, 0)
        .value() + this._delegateSequencer.value();
    }
  });

  return DelegatingCompositeSequencer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../options")
);

})()
},{"../options":4,"underscore":47,"bluebird":48}],18:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options
) {
  /**
   * A Clock which allows manually manipulating the underlying time value,
   * irrespective of real time. Useful for testing.
   */
  var LogicalClock = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(LogicalClock.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._currentTime = opts.getOrElse("initialTime", 0);
    },

    /**
     * @async
     * @returns {Promise<number>} Time in milliseconds since epoch
     * @see Clock#getTime()
     */
    getTime: Promise.method(function() {
      return this._currentTime;
    }),

    /**
     * Advances internal time, either `opts.by` a certain offset, or
     * `opts.to` a particular absolute time. If successful, returns the result
     * of calling `LogicalClock#getTime()` as a convenience.
     *
     * @param opts.to {number} absolute time to set clock to. Must be larger
     *                         than the current time
     * @param opts.by {number} offset to add to current time. Must be positive.
     *                         Defaults to `1` if neither `opts.to` or `opts.by`
     *                         are specified.
     * @async
     * @returns {Promise<number>} result of `LogicalClock#getTime()`
     */
    advanceTime: Promise.method(function(opts){
      opts = Options.fromObject(opts);
      var by = opts.getOrElse("by", 1),
          to = opts.getOrElse("to", undefined);
      if (!_.isUndefined(to)) {
        if (to < this._currentTime) {
          throw new Error("LogicalClock#advanceTime() requires forward movement of time")
        }
        this._currentTime = to;
      } else {
        if (by < 0) {
          throw new Error("LogicalClock#advanceTime() requires forward movement of time");
        }
        this._currentTime = this._currentTime + by;
      }
      return this.getTime();
    })
  });

  return LogicalClock;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../../core/options")
);

})()
},{"../../core/options":4,"underscore":47,"bluebird":48}],19:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise
) {

  /**
   * A Clock which delegates to the system clock.
   */
  var SystemClock = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(SystemClock.prototype, {
    initialize: function() {},
    /**
     * @async
     * @returns {Promise<number>} Time in milliseconds since epoch
     * @see Clock#getTime()
     */
    getTime: Promise.method(function() {
      return Date.now();
    })
  });

  return SystemClock;
};

module.exports = mod(
  require("underscore"),
  require("bluebird")
);

})()
},{"underscore":47,"bluebird":48}],22:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _
) {

  /**
   * Given a raw config, ensures blobs can be fetched regardless of
   * scope union scope (i.e., does union canonicalization).
   *
   * For example, a config with scope union `"bbb+aaa"` can later be
   * fetched using either `"aaa+bbb"` or `"bbb+aaa"`. It does this
   * by uniformly ordering the union's composite scopes.
   *
   * This probably isn't a useful class on its own. Instead, defer to
   * `ScopedConfigurationResolver` or `ConfigurationMagic`.
   */
  var ScopedConfiguration = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(ScopedConfiguration.prototype, {
    initialize: function(rawConfig) {
      rawConfig = rawConfig || {};
      this._scopes = {};
      // Sort the scope strings
      _.each(rawConfig, function(config, scopeString) {
        var scope = scopeString.split("+").sort().join("+");
        this._scopes[scope] = config;
      }, this);
    },

    blobForScope: function(scope) {
      return _.clone(this._scopes[scope.split("+").sort().join("+")] || {});
    }
  });

  return ScopedConfiguration;
};

module.exports = mod(
  require("underscore")
);

})()
},{"underscore":47}],21:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  ScopedConfiguration
) {

  /**
   * A device for resolving a set of raw configurations given a set of
   * scopes.
   *
   * This is useful for having things like region- or stage-specific (and/or both)
   * configurations.
   *
   * Given sets of raw configurations of the form:
   *
   *   {
   *     "scope-1" : {
   *       "key1" : "val1"
   *     },
   *     "scope-1+env1": {
   *       "key2" : "val-env-1"
   *     },
   *     "scope-1+env2": {
   *       "key2" : "val-env-2"
   *     }
   *   }
   *
   * `resolve(["scope-1"])` will return:
   *
   *   {
   *     "key1" : "val2"
   *   }
   *
   * `resolve(["scope-1", "env-1"])` will return:
   *
   *   {
   *     "key1" : "val1",
   *     "key2" : "val-env-1"
   *   }
   *
   * `resolve(["scope-1", "env-2"])` will return:
   *
   *   {
   *     "key1" : "val1",
   *     "key2" : "val-env-2"
   *   }
   *
   * Scopes unions are resolved in the following manner:
   *   1. a given scope union's parts are sorted
   *   2. scope unions as a whole are applied in sorted order
   *   3. repeat the process for a given configuration
   *
   * So, given three configs:
   *
   *  {
   *    "aaa": ... // 1
   *    "ccc": ... // 2
   *  }
   *
   *  {
   *    "aaa+ccc": ... // 3
   *    "ccc"    : ... // 4
   *  }
   *
   *  {
   *    "aaa+bbb": ... // 5
   *    "bbb"    : ... // 6
   *  }
   *
   * The resulting order will be:
   *   1, 2, 4, 3, 6, 5
   *
   * Notice 3 comes before 5 even though it's logically "after" in sorted order,
   * because configuration order overrides scope order. That is, scope unions
   * are ordered within a config, and then in config order.
   *
   */
  var ScopedConfigurationResolver = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(ScopedConfigurationResolver.prototype, {
    initialize: function() {
      this._configs = [];
    },

    /**
     * A rawConfig is a set of configuration scopes and their configuration
     * values, e.g.:
     *
     *   {
     *     "scope-1" : {
     *       "key1" : "val1"
     *     },
     *     "scope-1+env1": {
     *       "key2" : "val-env-1"
     *     },
     *     "scope-1+env2": {
     *       "key2" : "val-env-2"
     *     }
     *   }
     *
     * Note that the plus (+) sign is reserved for specifying scope unions.
     *
     * @param rawConfig {object} (required)
     *
     * @returns this
     */
    add: function(rawConfig) {
      this._configs.push(new ScopedConfiguration(rawConfig));
      return this;
    },

    /**
     * Resolves a computed final configuration given a set of scopes to apply,
     * and a set of configs loaded via `ScopedConfigurationResolver#add()`.
     *
     * @param scopes {Array<string>}
     *
     * @returns {object} the computed configuration
     */
    resolve: function(scopes) {
      scopes = powerset(_.clone(scopes).sort());
      scopes.shift(); // Get rid of the empty set.

      scopes = _.collect(scopes, function(s) {
        return s.join("+");
      });

      var relevantConfigs = _
        .chain(this._configs)
        .collect(function(c) {
          return _.collect(scopes, function(scope) {
            return c.blobForScope(scope);
          })
        }).flatten().value();

      relevantConfigs.unshift({});
      return _.extend.apply(_, relevantConfigs);
    }
  });

  var powerset = function (ary) {
      var ps = [[]];
      for (var i=0; i < ary.length; i++) {
          for (var j = 0, len = ps.length; j < len; j++) {
              ps.push(ps[j].concat(ary[i]));
          }
      }
      return ps;
  }

  return ScopedConfigurationResolver;
};

module.exports = mod(
  require("underscore"),
  require("./scoped-configuration")
);

})()
},{"./scoped-configuration":22,"underscore":47}],25:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options
) {

  var ConsoleLogAppender = function() {
    this.initialize.apply(this, arguments);
  };

  var p = function(num) {
    if (("" + num).length === 1) {
      return "0" + num;
    } else {
      return num;
    }
  };

  _.extend(ConsoleLogAppender.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._console = opts.getOrElse("console", console);
      this._timeDelegate = opts.getOrElse("timeDelegate", function(){
        var d = new Date();
        return [d.getUTCFullYear(), p(d.getUTCMonth()), p(d.getUTCDay())].join("/") +
          " " + [p(d.getUTCHours()), p(d.getUTCMinutes()), p(d.getUTCSeconds())].join(":") +
          "." + d.getUTCMilliseconds();
      });
    },

    log: function(loggerName, descendants, logLevel, logLevelName, args) {
      // Use the furthest ancestor as the logged name (since it originated there)
      var furthestAncestor = descendants[descendants.length - 1];
      if (furthestAncestor) {
        loggerName = furthestAncestor;
      }
      this._log(["["+logLevelName+"]["+this._getTime()+"]["+loggerName+"]"].concat(args));
    },

    _getTime: function() {
      return this._timeDelegate();
    },

    _log: function(logItems) {
      // Why does he do this? Is he insane? Well, yes.
      //
      // But mostly, I do this because console.log isn't, in all cases,
      // something you can call .apply on. Last I checked, in IE calling
      // console.log.apply(console, []) will throw an error. So that's why the
      // big ugly switch.
      //
      // If you need more than 7 items, well, I can't help you (but you can - add another
      // switch case).
      switch(logItems.length) {
        case 0:
          this._console.log();
          break;
        case 1:
          this._console.log(logItems[0]);
          break;
        case 2:
          this._console.log(logItems[0], logItems[1]);
          break;
        case 3:
          this._console.log(logItems[0], logItems[1], logItems[2]);
          break;
        case 4:
          this._console.log(logItems[0], logItems[1], logItems[2], logItems[3]);
          break;
        case 5:
          this._console.log(logItems[0], logItems[1], logItems[2], logItems[3], logItems[4]);
          break;
        case 6:
          this._console.log(logItems[0], logItems[1], logItems[2], logItems[3], logItems[4], logItems[5]);
          break;
        case 7:
          this._console.log(logItems[0], logItems[1], logItems[2], logItems[3], logItems[4], logItems[5], logItems[6]);
          break;
        default:
          var label = logItems.shift();
          this._console.log(label, logItems);
      }
    }
  });

  return ConsoleLogAppender;
};

module.exports = mod(
  require("underscore"),
  require("../../core/options")
);

})()
},{"../../core/options":4,"underscore":47}],30:[function(require,module,exports){
(function(){/*global require: false, module: false */
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

})()
},{"./ref":39,"./delegating-ref":38,"underscore":47}],48:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var Promise = require("./promise.js")();
module.exports = Promise;
},{"./promise.js":49}],32:[function(require,module,exports){
"use strict";

var mod = function(
  _,
  Promise,
  Options,
  Logger,
  ConfigurationMagic,
  AppContainer
) {
  var Log = Logger.create("Bootstrapper");

  var Bootstrapper = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Bootstrapper.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._configs = opts.getOrError("configurations");
      this._scopes = opts.getOrError("scopes");
      this._appKlass = opts.getOrError("applicationConstructor");
    },
    bootstrap: Promise.method(function() {
      return Promise
        .bind(this)
        .then(function() {
          var config       = ConfigurationMagic.resolveConfig(this._scopes, this._configs),
              AppKlass     = this._appKlass;

          Log.info("Using resolved configuration: ", JSON.stringify(config));

          var app          = new AppKlass({configuration: config}),
              appContainer = new AppContainer({app: app});

          return appContainer;
        });
    })
  });

  return Bootstrapper;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("../logging/logger"),
  require("./configuration-magic"),
  require("./web-app-container")
);

},{"../core/options":4,"../logging/logger":24,"./configuration-magic":20,"./web-app-container":33,"underscore":47,"bluebird":48}],33:[function(require,module,exports){
(function(){/*global require: false, module: false, process: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options,
  Logger
) {

  var Log = Logger.create("AppContainer");

  var WebAppContainer = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(WebAppContainer.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts)
      this._app = opts.getOrError("app");
    },

    start: Promise.method(function() {
      return Promise
        .bind(this)
        .then(function() {
          return this._app.start();
        });
    }),

    stop: Promise.method(function(reason) {
      return this._app.stop().then(function() {
        if (reason) {
          Log.error("Stopping due to reason:", reason);
        }
      });
    })
  });

  return WebAppContainer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("../logging/logger")
);

})()
},{"../core/options":4,"../logging/logger":24,"underscore":47,"bluebird":48}],34:[function(require,module,exports){
"use strict";

var mod = function(
  _
) {

  var WebScheduler = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(WebScheduler.prototype, {
    initialize: function() {},

    runSoon: function(fn) {
      this.schedule(fn);
    },

    schedule: function(fn, delay) {
      delay = delay || 1;
      return setTimeout(fn, delay);
    },

    unschedule: function(id) {
      return clearTimeout(id);
    }
  });

  return WebScheduler;
};

module.exports = mod(
  require("underscore")
);

},{"underscore":47}],43:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  PubSub,
  TransformChain,
  MapTransform,
  FilterTransform
) {

  var ReactiveNode = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ReactiveNode.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._chain = new TransformChain();
      this._parent = opts.getOrElse("parent", null);
      this._pubsub = _.extend({}, PubSub);

      var transforms = opts.getOrElse("transforms", [])

      _.each(transforms, function(t) {
        this._chain.addTransform(t);
      }, this);

      _.bindAll(this, "_onParentElement", "_notifySubscribers");

      if (this._parent) {
        this._parent._pubsub.on("element", this._onParentElement);
      }

      this._chain.on("element", this._notifySubscribers);
      this._subscriptions = [];
    },
    map: function(fn) {
      return new ReactiveNode({
        parent: this,
        transforms: [new MapTransform(fn)]
      });
    },
    filter: function(fn) {
      return new ReactiveNode({
        parent: this,
        transforms: [new FilterTransform(fn)]
      });
    },
    _apply: function(element) {
      this._chain.apply(element);
    },
    _applyError: function(err) {
      // TODO: Means of being notified of errors, plz
    },
    _onParentElement: function(element) {
      this._apply(element);
    },
    _notifySubscribers: function(element) {
      this._pubsub.notify("element", element);
    }
  });

  return ReactiveNode;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("../core/pub-sub"),
  require("./transform-chain"),
  require("./map-transform"),
  require("./filter-transform")
);

})()
},{"../core/options":4,"../core/pub-sub":7,"./transform-chain":44,"./map-transform":42,"./filter-transform":41,"underscore":47}],36:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  Ref,
  SetTimeoutScheduler
) {

  var DefaultRuntime = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(DefaultRuntime.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._schedulerRef = Ref(opts.getOrElseFn("scheduler", function() {
        return new SetTimeoutScheduler();
      }));
    },

    /**
     * @returns {Ref<Scheduler>}
     */
    scheduler: function() {
      return Ref.delegating(this._schedulerRef);
    },

    setScheduler: function(scheduler) {
      this._schedulerRef.set(scheduler);
    }
  });

  return DefaultRuntime;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("../core/ref"),
  require("../core/scheduler/set-timeout-scheduler")
);

})()
},{"../core/options":4,"../core/scheduler/set-timeout-scheduler":40,"../core/ref":30,"underscore":47}],37:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Logger,
  Options
) {

  var TEN_MINUTES_IN_MILLISECONDS = 60 * 1000 * 10;

  var Log = Logger.create("ProcessKeepAlive");

  var ProcessKeepAlive = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ProcessKeepAlive.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._scheduler = opts.getOrError("scheduler");
      this._timeoutId = null;

      _.bindAll(this, "_cycle");
    },
    start: function() {
      Log.debug("Starting ProcessKeepAlive");
      this._cycle();
    },
    stop: function() {
      Log.debug("Stopping ProcessKeepAlive");
      if (this._timeoutId) {
        this._scheduler.get().unschedule(this._timeoutId);
        this._timeoutId = null;
      }
    },
    _cycle: function() {
      this._timeoutId = this._scheduler.get().schedule(
        this._cycle,
        TEN_MINUTES_IN_MILLISECONDS
      );
    }
  });

  return ProcessKeepAlive;
};

module.exports = mod(
  require("underscore"),
  require("../../logging/logger"),
  require("../../core/options")
);

})()
},{"../../logging/logger":24,"../../core/options":4,"underscore":47}],39:[function(require,module,exports){
(function(){/*global require: false, module: false */
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
  };

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

})()
},{"underscore":47}],38:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _
) {

  /**
   * A ref whose boxed value is another ref
   */
  var DelegatingRef = function() {
    this.initialize.apply(this, arguments);
  };

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

})()
},{"underscore":47}],50:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],49:[function(require,module,exports){
(function(process){/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict(bluebird) {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
module.exports = function() {
var util = require("./util.js");
var async = require("./async.js");
var errors = require("./errors.js");

var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {e: null};

var cast = require("./thenables.js")(Promise, INTERNAL);
var PromiseArray = require("./promise_array.js")(Promise, INTERNAL, cast);
var CapturedTrace = require("./captured_trace.js")();
var CatchFilter = require("./catch_filter.js")(NEXT_FILTER);
var PromiseResolver = require("./promise_resolver.js");

var isArray = util.isArray;

var errorObj = util.errorObj;
var tryCatch1 = util.tryCatch1;
var tryCatch2 = util.tryCatch2;
var tryCatchApply = util.tryCatchApply;
var RangeError = errors.RangeError;
var TypeError = errors.TypeError;
var CancellationError = errors.CancellationError;
var TimeoutError = errors.TimeoutError;
var OperationalError = errors.OperationalError;
var originatesFromRejection = errors.originatesFromRejection;
var markAsOriginatingFromRejection = errors.markAsOriginatingFromRejection;
var canAttach = errors.canAttach;
var thrower = util.thrower;
var apiRejection = require("./errors_api_rejection")(Promise);


var makeSelfResolutionError = function Promise$_makeSelfResolutionError() {
    return new TypeError("circular promise resolution chain");
};

function Promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("the promise constructor requires a resolver function");
    }
    if (this.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly");
    }
    this._bitField = 0;
    this._fulfillmentHandler0 = void 0;
    this._rejectionHandler0 = void 0;
    this._promise0 = void 0;
    this._receiver0 = void 0;
    this._settledValue = void 0;
    this._boundTo = void 0;
    if (resolver !== INTERNAL) this._resolveFromResolver(resolver);
}

Promise.prototype.bind = function Promise$bind(thisArg) {
    var ret = new Promise(INTERNAL);
    ret._follow(this);
    ret._propagateFrom(this, 2 | 1);
    ret._setBoundTo(thisArg);
    return ret;
};

Promise.prototype.toString = function Promise$toString() {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] =
function Promise$catch(fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (typeof item === "function") {
                catchInstances[j++] = item;
            } else {
                var catchFilterTypeError =
                    new TypeError(
                        "A catch filter must be an error constructor "
                        + "or a filter function");

                this._attachExtraTrace(catchFilterTypeError);
                async.invoke(this._reject, this, catchFilterTypeError);
                return;
            }
        }
        catchInstances.length = j;
        fn = arguments[i];

        this._resetTrace();
        var catchFilter = new CatchFilter(catchInstances, fn, this);
        return this._then(void 0, catchFilter.doFilter, void 0,
            catchFilter, void 0);
    }
    return this._then(void 0, fn, void 0, void 0, void 0);
};

Promise.prototype.then =
function Promise$then(didFulfill, didReject, didProgress) {
    return this._then(didFulfill, didReject, didProgress,
        void 0, void 0);
};


Promise.prototype.done =
function Promise$done(didFulfill, didReject, didProgress) {
    var promise = this._then(didFulfill, didReject, didProgress,
        void 0, void 0);
    promise._setIsFinal();
};

Promise.prototype.spread = function Promise$spread(didFulfill, didReject) {
    return this._then(didFulfill, didReject, void 0,
        APPLY, void 0);
};

Promise.prototype.isCancellable = function Promise$isCancellable() {
    return !this.isResolved() &&
        this._cancellable();
};

Promise.prototype.toJSON = function Promise$toJSON() {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: void 0,
        rejectionReason: void 0
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this._settledValue;
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this._settledValue;
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function Promise$all() {
    return new PromiseArray(this).promise();
};


Promise.is = function Promise$Is(val) {
    return val instanceof Promise;
};

Promise.all = function Promise$All(promises) {
    return new PromiseArray(promises).promise();
};

Promise.prototype.error = function Promise$_error(fn) {
    return this.caught(originatesFromRejection, fn);
};

Promise.prototype._resolveFromSyncValue =
function Promise$_resolveFromSyncValue(value) {
    if (value === errorObj) {
        this._cleanValues();
        this._setRejected();
        this._settledValue = value.e;
        this._ensurePossibleRejectionHandled();
    } else {
        var maybePromise = cast(value, void 0);
        if (maybePromise instanceof Promise) {
            this._follow(maybePromise);
        } else {
            this._cleanValues();
            this._setFulfilled();
            this._settledValue = value;
        }
    }
};

Promise.method = function Promise$_Method(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("fn must be a function");
    }
    return function Promise$_method() {
        var value;
        switch(arguments.length) {
        case 0: value = tryCatch1(fn, this, void 0); break;
        case 1: value = tryCatch1(fn, this, arguments[0]); break;
        case 2: value = tryCatch2(fn, this, arguments[0], arguments[1]); break;
        default:
            var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
            value = tryCatchApply(fn, args, this); break;
        }
        var ret = new Promise(INTERNAL);
        ret._setTrace(void 0);
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function Promise$_Try(fn, args, ctx) {
    if (typeof fn !== "function") {
        return apiRejection("fn must be a function");
    }
    var value = isArray(args)
        ? tryCatchApply(fn, args, ctx)
        : tryCatch1(fn, ctx, args);

    var ret = new Promise(INTERNAL);
    ret._setTrace(void 0);
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.defer = Promise.pending = function Promise$Defer() {
    var promise = new Promise(INTERNAL);
    promise._setTrace(void 0);
    return new PromiseResolver(promise);
};

Promise.bind = function Promise$Bind(thisArg) {
    var ret = new Promise(INTERNAL);
    ret._setTrace(void 0);
    ret._setFulfilled();
    ret._setBoundTo(thisArg);
    return ret;
};

Promise.cast = function Promise$_Cast(obj) {
    var ret = cast(obj, void 0);
    if (!(ret instanceof Promise)) {
        var val = ret;
        ret = new Promise(INTERNAL);
        ret._setTrace(void 0);
        ret._setFulfilled();
        ret._cleanValues();
        ret._settledValue = val;
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function Promise$Reject(reason) {
    var ret = new Promise(INTERNAL);
    ret._setTrace(void 0);
    markAsOriginatingFromRejection(reason);
    ret._cleanValues();
    ret._setRejected();
    ret._settledValue = reason;
    if (!canAttach(reason)) {
        var trace = new Error(reason + "");
        ret._setCarriedStackTrace(trace);
    }
    ret._ensurePossibleRejectionHandled();
    return ret;
};

Promise.onPossiblyUnhandledRejection =
function Promise$OnPossiblyUnhandledRejection(fn) {
        CapturedTrace.possiblyUnhandledRejection = typeof fn === "function"
                                                    ? fn : void 0;
};

var unhandledRejectionHandled;
Promise.onUnhandledRejectionHandled =
function Promise$onUnhandledRejectionHandled(fn) {
    unhandledRejectionHandled = typeof fn === "function" ? fn : void 0;
};

var debugging = false || !!(
    typeof process !== "undefined" &&
    typeof process.execPath === "string" &&
    typeof process.env === "object" &&
    (process.env["BLUEBIRD_DEBUG"] ||
        process.env["NODE_ENV"] === "development")
);


Promise.longStackTraces = function Promise$LongStackTraces() {
    if (async.haveItemsQueued() &&
        debugging === false
   ) {
        throw new Error("cannot enable long stack traces after promises have been created");
    }
    debugging = CapturedTrace.isSupported();
};

Promise.hasLongStackTraces = function Promise$HasLongStackTraces() {
    return debugging && CapturedTrace.isSupported();
};

Promise.prototype._then =
function Promise$_then(
    didFulfill,
    didReject,
    didProgress,
    receiver,
    internalData
) {
    var haveInternalData = internalData !== void 0;
    var ret = haveInternalData ? internalData : new Promise(INTERNAL);

    if (!haveInternalData) {
        if (debugging) {
            var haveSameContext = this._peekContext() === this._traceParent;
            ret._traceParent = haveSameContext ? this._traceParent : this;
        }
        ret._propagateFrom(this, 7);
    }

    var callbackIndex =
        this._addCallbacks(didFulfill, didReject, didProgress, ret, receiver);

    if (this.isResolved()) {
        async.invoke(this._queueSettleAt, this, callbackIndex);
    }

    return ret;
};

Promise.prototype._length = function Promise$_length() {
    return this._bitField & 262143;
};

Promise.prototype._isFollowingOrFulfilledOrRejected =
function Promise$_isFollowingOrFulfilledOrRejected() {
    return (this._bitField & 939524096) > 0;
};

Promise.prototype._isFollowing = function Promise$_isFollowing() {
    return (this._bitField & 536870912) === 536870912;
};

Promise.prototype._setLength = function Promise$_setLength(len) {
    this._bitField = (this._bitField & -262144) |
        (len & 262143);
};

Promise.prototype._setFulfilled = function Promise$_setFulfilled() {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._setRejected = function Promise$_setRejected() {
    this._bitField = this._bitField | 134217728;
};

Promise.prototype._setFollowing = function Promise$_setFollowing() {
    this._bitField = this._bitField | 536870912;
};

Promise.prototype._setIsFinal = function Promise$_setIsFinal() {
    this._bitField = this._bitField | 33554432;
};

Promise.prototype._isFinal = function Promise$_isFinal() {
    return (this._bitField & 33554432) > 0;
};

Promise.prototype._cancellable = function Promise$_cancellable() {
    return (this._bitField & 67108864) > 0;
};

Promise.prototype._setCancellable = function Promise$_setCancellable() {
    this._bitField = this._bitField | 67108864;
};

Promise.prototype._unsetCancellable = function Promise$_unsetCancellable() {
    this._bitField = this._bitField & (~67108864);
};

Promise.prototype._setRejectionIsUnhandled =
function Promise$_setRejectionIsUnhandled() {
    this._bitField = this._bitField | 2097152;
};

Promise.prototype._unsetRejectionIsUnhandled =
function Promise$_unsetRejectionIsUnhandled() {
    this._bitField = this._bitField & (~2097152);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled =
function Promise$_isRejectionUnhandled() {
    return (this._bitField & 2097152) > 0;
};

Promise.prototype._setUnhandledRejectionIsNotified =
function Promise$_setUnhandledRejectionIsNotified() {
    this._bitField = this._bitField | 524288;
};

Promise.prototype._unsetUnhandledRejectionIsNotified =
function Promise$_unsetUnhandledRejectionIsNotified() {
    this._bitField = this._bitField & (~524288);
};

Promise.prototype._isUnhandledRejectionNotified =
function Promise$_isUnhandledRejectionNotified() {
    return (this._bitField & 524288) > 0;
};

Promise.prototype._setCarriedStackTrace =
function Promise$_setCarriedStackTrace(capturedTrace) {
    this._bitField = this._bitField | 1048576;
    this._fulfillmentHandler0 = capturedTrace;
};

Promise.prototype._unsetCarriedStackTrace =
function Promise$_unsetCarriedStackTrace() {
    this._bitField = this._bitField & (~1048576);
    this._fulfillmentHandler0 = void 0;
};

Promise.prototype._isCarryingStackTrace =
function Promise$_isCarryingStackTrace() {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._getCarriedStackTrace =
function Promise$_getCarriedStackTrace() {
    return this._isCarryingStackTrace()
        ? this._fulfillmentHandler0
        : void 0;
};

Promise.prototype._receiverAt = function Promise$_receiverAt(index) {
    var ret = index === 0
        ? this._receiver0
        : this[(index << 2) + index - 5 + 4];
    if (this._isBound() && ret === void 0) {
        return this._boundTo;
    }
    return ret;
};

Promise.prototype._promiseAt = function Promise$_promiseAt(index) {
    return index === 0
        ? this._promise0
        : this[(index << 2) + index - 5 + 3];
};

Promise.prototype._fulfillmentHandlerAt =
function Promise$_fulfillmentHandlerAt(index) {
    return index === 0
        ? this._fulfillmentHandler0
        : this[(index << 2) + index - 5 + 0];
};

Promise.prototype._rejectionHandlerAt =
function Promise$_rejectionHandlerAt(index) {
    return index === 0
        ? this._rejectionHandler0
        : this[(index << 2) + index - 5 + 1];
};

Promise.prototype._addCallbacks = function Promise$_addCallbacks(
    fulfill,
    reject,
    progress,
    promise,
    receiver
) {
    var index = this._length();

    if (index >= 262143 - 5) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        if (receiver !== void 0) this._receiver0 = receiver;
        if (typeof fulfill === "function" && !this._isCarryingStackTrace())
            this._fulfillmentHandler0 = fulfill;
        if (typeof reject === "function") this._rejectionHandler0 = reject;
        if (typeof progress === "function") this._progressHandler0 = progress;
    } else {
        var base = (index << 2) + index - 5;
        this[base + 3] = promise;
        this[base + 4] = receiver;
        this[base + 0] = typeof fulfill === "function"
                                            ? fulfill : void 0;
        this[base + 1] = typeof reject === "function"
                                            ? reject : void 0;
        this[base + 2] = typeof progress === "function"
                                            ? progress : void 0;
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._setProxyHandlers =
function Promise$_setProxyHandlers(receiver, promiseSlotValue) {
    var index = this._length();

    if (index >= 262143 - 5) {
        index = 0;
        this._setLength(0);
    }
    if (index === 0) {
        this._promise0 = promiseSlotValue;
        this._receiver0 = receiver;
    } else {
        var base = (index << 2) + index - 5;
        this[base + 3] = promiseSlotValue;
        this[base + 4] = receiver;
        this[base + 0] =
        this[base + 1] =
        this[base + 2] = void 0;
    }
    this._setLength(index + 1);
};

Promise.prototype._proxyPromiseArray =
function Promise$_proxyPromiseArray(promiseArray, index) {
    this._setProxyHandlers(promiseArray, index);
};

Promise.prototype._proxyPromise = function Promise$_proxyPromise(promise) {
    promise._setProxied();
    this._setProxyHandlers(promise, -1);
};

Promise.prototype._setBoundTo = function Promise$_setBoundTo(obj) {
    if (obj !== void 0) {
        this._bitField = this._bitField | 8388608;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~8388608);
    }
};

Promise.prototype._isBound = function Promise$_isBound() {
    return (this._bitField & 8388608) === 8388608;
};

Promise.prototype._resolveFromResolver =
function Promise$_resolveFromResolver(resolver) {
    var promise = this;
    this._setTrace(void 0);
    this._pushContext();

    function Promise$_resolver(val) {
        if (promise._tryFollow(val)) {
            return;
        }
        promise._fulfill(val);
    }
    function Promise$_rejecter(val) {
        var trace = canAttach(val) ? val : new Error(val + "");
        promise._attachExtraTrace(trace);
        markAsOriginatingFromRejection(val);
        promise._reject(val, trace === val ? void 0 : trace);
    }
    var r = tryCatch2(resolver, void 0, Promise$_resolver, Promise$_rejecter);
    this._popContext();

    if (r !== void 0 && r === errorObj) {
        var e = r.e;
        var trace = canAttach(e) ? e : new Error(e + "");
        promise._reject(e, trace);
    }
};

Promise.prototype._spreadSlowCase =
function Promise$_spreadSlowCase(targetFn, promise, values, boundTo) {
    var promiseForAll = new PromiseArray(values).promise();
    var promise2 = promiseForAll._then(function() {
        return targetFn.apply(boundTo, arguments);
    }, void 0, void 0, APPLY, void 0);
    promise._follow(promise2);
};

Promise.prototype._callSpread =
function Promise$_callSpread(handler, promise, value) {
    var boundTo = this._boundTo;
    if (isArray(value)) {
        for (var i = 0, len = value.length; i < len; ++i) {
            if (cast(value[i], void 0) instanceof Promise) {
                this._spreadSlowCase(handler, promise, value, boundTo);
                return;
            }
        }
    }
    promise._pushContext();
    return tryCatchApply(handler, value, boundTo);
};

Promise.prototype._callHandler =
function Promise$_callHandler(
    handler, receiver, promise, value) {
    var x;
    if (receiver === APPLY && !this.isRejected()) {
        x = this._callSpread(handler, promise, value);
    } else {
        promise._pushContext();
        x = tryCatch1(handler, receiver, value);
    }
    promise._popContext();
    return x;
};

Promise.prototype._settlePromiseFromHandler =
function Promise$_settlePromiseFromHandler(
    handler, receiver, value, promise
) {
    if (!(promise instanceof Promise)) {
        handler.call(receiver, value, promise);
        return;
    }
    var x = this._callHandler(handler, receiver, promise, value);
    if (promise._isFollowing()) return;

    if (x === errorObj || x === promise || x === NEXT_FILTER) {
        var err = x === promise
                    ? makeSelfResolutionError()
                    : x.e;
        var trace = canAttach(err) ? err : new Error(err + "");
        if (x !== NEXT_FILTER) promise._attachExtraTrace(trace);
        promise._rejectUnchecked(err, trace);
    } else {
        var castValue = cast(x, promise);
        if (castValue instanceof Promise) {
            if (castValue.isRejected() &&
                !castValue._isCarryingStackTrace() &&
                !canAttach(castValue._settledValue)) {
                var trace = new Error(castValue._settledValue + "");
                promise._attachExtraTrace(trace);
                castValue._setCarriedStackTrace(trace);
            }
            promise._follow(castValue);
            promise._propagateFrom(castValue, 1);
        } else {
            promise._fulfillUnchecked(x);
        }
    }
};

Promise.prototype._follow =
function Promise$_follow(promise) {
    this._setFollowing();

    if (promise.isPending()) {
        this._propagateFrom(promise, 1);
        promise._proxyPromise(this);
    } else if (promise.isFulfilled()) {
        this._fulfillUnchecked(promise._settledValue);
    } else {
        this._rejectUnchecked(promise._settledValue,
            promise._getCarriedStackTrace());
    }

    if (promise._isRejectionUnhandled()) promise._unsetRejectionIsUnhandled();

    if (debugging &&
        promise._traceParent == null) {
        promise._traceParent = this;
    }
};

Promise.prototype._tryFollow =
function Promise$_tryFollow(value) {
    if (this._isFollowingOrFulfilledOrRejected() ||
        value === this) {
        return false;
    }
    var maybePromise = cast(value, void 0);
    if (!(maybePromise instanceof Promise)) {
        return false;
    }
    this._follow(maybePromise);
    return true;
};

Promise.prototype._resetTrace = function Promise$_resetTrace() {
    if (debugging) {
        this._trace = new CapturedTrace(this._peekContext() === void 0);
    }
};

Promise.prototype._setTrace = function Promise$_setTrace(parent) {
    if (debugging) {
        var context = this._peekContext();
        this._traceParent = context;
        var isTopLevel = context === void 0;
        if (parent !== void 0 &&
            parent._traceParent === context) {
            this._trace = parent._trace;
        } else {
            this._trace = new CapturedTrace(isTopLevel);
        }
    }
    return this;
};

Promise.prototype._attachExtraTrace =
function Promise$_attachExtraTrace(error) {
    if (debugging) {
        var promise = this;
        var stack = error.stack;
        stack = typeof stack === "string" ? stack.split("\n") : [];
        CapturedTrace.protectErrorMessageNewlines(stack);
        var headerLineCount = 1;
        var combinedTraces = 1;
        while(promise != null &&
            promise._trace != null) {
            stack = CapturedTrace.combine(
                stack,
                promise._trace.stack.split("\n")
            );
            promise = promise._traceParent;
            combinedTraces++;
        }

        var stackTraceLimit = Error.stackTraceLimit || 10;
        var max = (stackTraceLimit + headerLineCount) * combinedTraces;
        var len = stack.length;
        if (len > max) {
            stack.length = max;
        }

        if (len > 0)
            stack[0] = stack[0].split("\u0002\u0000\u0001").join("\n");

        if (stack.length <= headerLineCount) {
            error.stack = "(No stack trace)";
        } else {
            error.stack = stack.join("\n");
        }
    }
};

Promise.prototype._cleanValues = function Promise$_cleanValues() {
    if (this._cancellable()) {
        this._cancellationParent = void 0;
    }
};

Promise.prototype._propagateFrom =
function Promise$_propagateFrom(parent, flags) {
    if ((flags & 1) > 0 && parent._cancellable()) {
        this._setCancellable();
        this._cancellationParent = parent;
    }
    if ((flags & 4) > 0) {
        this._setBoundTo(parent._boundTo);
    }
    if ((flags & 2) > 0) {
        this._setTrace(parent);
    }
};

Promise.prototype._fulfill = function Promise$_fulfill(value) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._fulfillUnchecked(value);
};

Promise.prototype._reject =
function Promise$_reject(reason, carriedStackTrace) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._rejectUnchecked(reason, carriedStackTrace);
};

Promise.prototype._settlePromiseAt = function Promise$_settlePromiseAt(index) {
    var handler = this.isFulfilled()
        ? this._fulfillmentHandlerAt(index)
        : this._rejectionHandlerAt(index);

    var value = this._settledValue;
    var receiver = this._receiverAt(index);
    var promise = this._promiseAt(index);

    if (typeof handler === "function") {
        this._settlePromiseFromHandler(handler, receiver, value, promise);
    } else {
        var done = false;
        var isFulfilled = this.isFulfilled();
        if (receiver !== void 0) {
            if (receiver instanceof Promise &&
                receiver._isProxied()) {
                receiver._unsetProxied();

                if (isFulfilled) receiver._fulfillUnchecked(value);
                else receiver._rejectUnchecked(value,
                    this._getCarriedStackTrace());
                done = true;
            } else if (receiver instanceof PromiseArray) {
                if (isFulfilled) receiver._promiseFulfilled(value, promise);
                else receiver._promiseRejected(value, promise);
                done = true;
            }
        }

        if (!done) {
            if (isFulfilled) promise._fulfill(value);
            else promise._reject(value, this._getCarriedStackTrace());
        }
    }

    if (index >= 256) {
        this._queueGC();
    }
};

Promise.prototype._isProxied = function Promise$_isProxied() {
    return (this._bitField & 4194304) === 4194304;
};

Promise.prototype._setProxied = function Promise$_setProxied() {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._unsetProxied = function Promise$_unsetProxied() {
    this._bitField = this._bitField & (~4194304);
};

Promise.prototype._isGcQueued = function Promise$_isGcQueued() {
    return (this._bitField & -1073741824) === -1073741824;
};

Promise.prototype._setGcQueued = function Promise$_setGcQueued() {
    this._bitField = this._bitField | -1073741824;
};

Promise.prototype._unsetGcQueued = function Promise$_unsetGcQueued() {
    this._bitField = this._bitField & (~-1073741824);
};

Promise.prototype._queueGC = function Promise$_queueGC() {
    if (this._isGcQueued()) return;
    this._setGcQueued();
    async.invokeLater(this._gc, this, void 0);
};

Promise.prototype._gc = function Promise$gc() {
    var len = this._length() * 5;
    for (var i = 0; i < len; i++) {
        delete this[i];
    }
    this._setLength(0);
    this._unsetGcQueued();
};

Promise.prototype._queueSettleAt = function Promise$_queueSettleAt(index) {
    if (this._isRejectionUnhandled()) this._unsetRejectionIsUnhandled();
    async.invoke(this._settlePromiseAt, this, index);
};

Promise.prototype._fulfillUnchecked =
function Promise$_fulfillUnchecked(value) {
    if (!this.isPending()) return;
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._rejectUnchecked(err, void 0);
    }
    this._cleanValues();
    this._setFulfilled();
    this._settledValue = value;
    var len = this._length();

    if (len > 0) {
        async.invoke(this._settlePromises, this, len);
    }
};

Promise.prototype._rejectUncheckedCheckError =
function Promise$_rejectUncheckedCheckError(reason) {
    var trace = canAttach(reason) ? reason : new Error(reason + "");
    this._rejectUnchecked(reason, trace === reason ? void 0 : trace);
};

Promise.prototype._rejectUnchecked =
function Promise$_rejectUnchecked(reason, trace) {
    if (!this.isPending()) return;
    if (reason === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._rejectUnchecked(err);
    }
    this._cleanValues();
    this._setRejected();
    this._settledValue = reason;

    if (this._isFinal()) {
        async.invokeLater(thrower, void 0, trace === void 0 ? reason : trace);
        return;
    }
    var len = this._length();

    if (trace !== void 0) this._setCarriedStackTrace(trace);

    if (len > 0) {
        async.invoke(this._rejectPromises, this, null);
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._rejectPromises = function Promise$_rejectPromises() {
    this._settlePromises();
    this._unsetCarriedStackTrace();
};

Promise.prototype._settlePromises = function Promise$_settlePromises() {
    var len = this._length();
    for (var i = 0; i < len; i++) {
        this._settlePromiseAt(i);
    }
};

Promise.prototype._ensurePossibleRejectionHandled =
function Promise$_ensurePossibleRejectionHandled() {
    this._setRejectionIsUnhandled();
    if (CapturedTrace.possiblyUnhandledRejection !== void 0) {
        async.invokeLater(this._notifyUnhandledRejection, this, void 0);
    }
};

Promise.prototype._notifyUnhandledRejectionIsHandled =
function Promise$_notifyUnhandledRejectionIsHandled() {
    if (typeof unhandledRejectionHandled === "function") {
        async.invokeLater(unhandledRejectionHandled, void 0, this);
    }
};

Promise.prototype._notifyUnhandledRejection =
function Promise$_notifyUnhandledRejection() {
    if (this._isRejectionUnhandled()) {
        var reason = this._settledValue;
        var trace = this._getCarriedStackTrace();

        this._setUnhandledRejectionIsNotified();

        if (trace !== void 0) {
            this._unsetCarriedStackTrace();
            reason = trace;
        }
        if (typeof CapturedTrace.possiblyUnhandledRejection === "function") {
            CapturedTrace.possiblyUnhandledRejection(reason, this);
        }
    }
};

var contextStack = [];
Promise.prototype._peekContext = function Promise$_peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return void 0;

};

Promise.prototype._pushContext = function Promise$_pushContext() {
    if (!debugging) return;
    contextStack.push(this);
};

Promise.prototype._popContext = function Promise$_popContext() {
    if (!debugging) return;
    contextStack.pop();
};

Promise.noConflict = function Promise$NoConflict() {
    return noConflict(Promise);
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") throw new TypeError("fn must be a function");
    async._schedule = fn;
};

if (!CapturedTrace.isSupported()) {
    Promise.longStackTraces = function(){};
    debugging = false;
}

Promise._makeSelfResolutionError = makeSelfResolutionError;
require("./finally.js")(Promise, NEXT_FILTER, cast);
require("./direct_resolve.js")(Promise);
require("./synchronous_inspection.js")(Promise);
require("./join.js")(Promise, PromiseArray, cast, INTERNAL);
Promise.RangeError = RangeError;
Promise.CancellationError = CancellationError;
Promise.TimeoutError = TimeoutError;
Promise.TypeError = TypeError;
Promise.OperationalError = OperationalError;
Promise.RejectionError = OperationalError;
Promise.AggregateError = errors.AggregateError;

util.toFastProperties(Promise);
util.toFastProperties(Promise.prototype);
Promise.Promise = Promise;
require('./timers.js')(Promise,INTERNAL,cast);
require('./race.js')(Promise,INTERNAL,cast);
require('./call_get.js')(Promise);
require('./generators.js')(Promise,apiRejection,INTERNAL,cast);
require('./map.js')(Promise,PromiseArray,apiRejection,cast,INTERNAL);
require('./nodeify.js')(Promise);
require('./promisify.js')(Promise,INTERNAL);
require('./props.js')(Promise,PromiseArray,cast);
require('./reduce.js')(Promise,PromiseArray,apiRejection,cast,INTERNAL);
require('./settle.js')(Promise,PromiseArray);
require('./some.js')(Promise,PromiseArray,apiRejection);
require('./progress.js')(Promise,PromiseArray);
require('./cancel.js')(Promise,INTERNAL);
require('./filter.js')(Promise,INTERNAL);
require('./any.js')(Promise,PromiseArray);
require('./each.js')(Promise,INTERNAL);
require('./using.js')(Promise,apiRejection,cast);

Promise.prototype = Promise.prototype;
return Promise;

};

})(require("__browserify_process"))
},{"./util.js":51,"./async.js":52,"./errors.js":53,"./thenables.js":54,"./promise_array.js":55,"./captured_trace.js":56,"./catch_filter.js":57,"./promise_resolver.js":58,"./finally.js":59,"./direct_resolve.js":60,"./synchronous_inspection.js":61,"./join.js":62,"./timers.js":63,"./race.js":64,"./call_get.js":65,"./generators.js":66,"./map.js":67,"./nodeify.js":68,"./promisify.js":69,"./props.js":70,"./reduce.js":71,"./settle.js":72,"./some.js":73,"./progress.js":74,"./cancel.js":75,"./filter.js":76,"./any.js":77,"./each.js":78,"./using.js":79,"./errors_api_rejection":80,"__browserify_process":50}],41:[function(require,module,exports){
(function(){/*global require: false, module: false */
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

})()
},{"./transform":45,"underscore":47}],42:[function(require,module,exports){
(function(){/*global require: false, module: false */
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

})()
},{"./transform":45,"underscore":47}],44:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  PubSub,
  Transform
) {

  var TransformChain = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(TransformChain.prototype, PubSub, {
    initialize: function() {
      this._head = this._tail = new Transform();

      _.bindAll(this, "_onTailElement", "apply");

      this._tail.on("element", this._onTailElement);
    },
    apply: function(element) {
      this._head.apply(element);
    },
    addTransform: function(t) {
      this._tail.off("element", this._onTailElement);
      this._tail.on("element", t.apply, t);
      this._tail = t;
      this._tail.on("element", this._onTailElement);

    },
    _onTailElement: function(element) {
      this.notify("element", element);
    }
  });

  return TransformChain;
};

module.exports = mod(
  require("underscore"),
  require("../core/pub-sub"),
  require("./transform")
);

})()
},{"../core/pub-sub":7,"./transform":45,"underscore":47}],45:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  PubSub
) {

  var Transform = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Transform.prototype, PubSub, {
    initialize: function() {},
    apply: function(element) {
      // Default is identity map
      this.notify("element", element);
    }
  });

  return Transform;
};

module.exports = mod(
  require("underscore"),
  require("../core/pub-sub")
);

})()
},{"../core/pub-sub":7,"underscore":47}],61:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== void 0) {
        this._bitField = promise._bitField;
        this._settledValue = promise.isResolved()
            ? promise._settledValue
            : void 0;
    }
    else {
        this._bitField = 0;
        this._settledValue = void 0;
    }
}

PromiseInspection.prototype.isFulfilled =
Promise.prototype.isFulfilled = function Promise$isFulfilled() {
    return (this._bitField & 268435456) > 0;
};

PromiseInspection.prototype.isRejected =
Promise.prototype.isRejected = function Promise$isRejected() {
    return (this._bitField & 134217728) > 0;
};

PromiseInspection.prototype.isPending =
Promise.prototype.isPending = function Promise$isPending() {
    return (this._bitField & 402653184) === 0;
};

PromiseInspection.prototype.value =
Promise.prototype.value = function Promise$value() {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise");
    }
    return this._settledValue;
};

PromiseInspection.prototype.error =
PromiseInspection.prototype.reason =
Promise.prototype.reason = function Promise$reason() {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise");
    }
    return this._settledValue;
};

PromiseInspection.prototype.isResolved =
Promise.prototype.isResolved = function Promise$isResolved() {
    return (this._bitField & 402653184) > 0;
};

Promise.PromiseInspection = PromiseInspection;
};

},{}],76:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function Promise$filter(fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function Promise$Filter(promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],77:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function Promise$_Any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    if (promise.isRejected()) {
        return promise;
    }
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function Promise$Any(promises) {
    return Promise$_Any(promises);
};

Promise.prototype.any = function Promise$any() {
    return Promise$_Any(this);
};

};

},{}],78:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;

Promise.prototype.each = function Promise$each(fn) {
    return PromiseReduce(this, fn, null, INTERNAL);
};

Promise.each = function Promise$Each(promises, fn) {
    return PromiseReduce(promises, fn, null, INTERNAL);
};
};

},{}],40:[function(require,module,exports){
"use strict";

var mod = function(
  _
) {

  var SetTimeoutScheduler = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(SetTimeoutScheduler.prototype, {
    initialize: function() {},

    runSoon: function(fn) {
      this.schedule(fn);
    },
    schedule: function(fn, delay) {
      delay = delay || 1;
      return setTimeout(fn, delay);
    },

    unschedule: function(id) {
      return clearTimeout(id);
    }
  });

  return SetTimeoutScheduler;
};

module.exports = mod(
  require("underscore")
);

},{"underscore":47}],51:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var es5 = require("./es5.js");
var haveGetters = (function(){
    try {
        var o = {};
        es5.defineProperty(o, "f", {
            get: function () {
                return 3;
            }
        });
        return o.f === 3;
    }
    catch (e) {
        return false;
    }

})();
var canEvaluate = typeof navigator == "undefined";
var errorObj = {e: {}};
function tryCatch1(fn, receiver, arg) {
    try { return fn.call(receiver, arg); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatch2(fn, receiver, arg, arg2) {
    try { return fn.call(receiver, arg, arg2); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatch3(fn, receiver, arg, arg2, arg3) {
    try { return fn.call(receiver, arg, arg2, arg3); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatch4(fn, receiver, arg, arg2, arg3, arg4) {
    try { return fn.call(receiver, arg, arg2, arg3, arg4); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatchApply(fn, args, receiver) {
    try { return fn.apply(receiver, args); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};

function asString(val) {
    return typeof val === "string" ? val : ("" + val);
}

function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return !isPrimitive(value);
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(asString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);
        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : void 0;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}


var wrapsPrimitiveReceiver = (function() {
    return this !== "string";
}).call("string");

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    if (es5.isES5) {
        return function(obj, opts) {
            var ret = [];
            var visitedKeys = Object.create(null);
            var getKeys = Object(opts).includeHidden
                ? Object.getOwnPropertyNames
                : Object.keys;
            while (obj != null) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        return function(obj) {
            var ret = [];
            /*jshint forin:false */
            for (var key in obj) {
                ret.push(key);
            }
            return ret;
        };
    }

})();

function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.keys(fn.prototype);
            return keys.length > 0 &&
                   !(keys.length === 1 && keys[0] === "constructor");
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027*/
    function f() {}
    f.prototype = obj;
    return f;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

var ret = {
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    haveGetters: haveGetters,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch1: tryCatch1,
    tryCatch2: tryCatch2,
    tryCatch3: tryCatch3,
    tryCatch4: tryCatch4,
    tryCatchApply: tryCatchApply,
    inherits: inherits,
    withAppended: withAppended,
    asString: asString,
    maybeWrapAsError: maybeWrapAsError,
    wrapsPrimitiveReceiver: wrapsPrimitiveReceiver,
    toFastProperties: toFastProperties,
    filledRange: filledRange
};

module.exports = ret;

},{"./es5.js":81}],52:[function(require,module,exports){
(function(process){/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var schedule = require("./schedule.js");
var Queue = require("./queue.js");
var errorObj = require("./util.js").errorObj;
var tryCatch1 = require("./util.js").tryCatch1;
var _process = typeof process !== "undefined" ? process : void 0;

function Async() {
    this._isTickUsed = false;
    this._schedule = schedule;
    this._length = 0;
    this._lateBuffer = new Queue(16);
    this._functionBuffer = new Queue(65536);
    var self = this;
    this.consumeFunctionBuffer = function Async$consumeFunctionBuffer() {
        self._consumeFunctionBuffer();
    };
}

Async.prototype.haveItemsQueued = function Async$haveItemsQueued() {
    return this._length > 0;
};

Async.prototype.invokeLater = function Async$invokeLater(fn, receiver, arg) {
    if (_process !== void 0 &&
        _process.domain != null &&
        !fn.domain) {
        fn = _process.domain.bind(fn);
    }
    this._lateBuffer.push(fn, receiver, arg);
    this._queueTick();
};

Async.prototype.invoke = function Async$invoke(fn, receiver, arg) {
    if (_process !== void 0 &&
        _process.domain != null &&
        !fn.domain) {
        fn = _process.domain.bind(fn);
    }
    var functionBuffer = this._functionBuffer;
    functionBuffer.push(fn, receiver, arg);
    this._length = functionBuffer.length();
    this._queueTick();
};

Async.prototype._consumeFunctionBuffer =
function Async$_consumeFunctionBuffer() {
    var functionBuffer = this._functionBuffer;
    while (functionBuffer.length() > 0) {
        var fn = functionBuffer.shift();
        var receiver = functionBuffer.shift();
        var arg = functionBuffer.shift();
        fn.call(receiver, arg);
    }
    this._reset();
    this._consumeLateBuffer();
};

Async.prototype._consumeLateBuffer = function Async$_consumeLateBuffer() {
    var buffer = this._lateBuffer;
    while(buffer.length() > 0) {
        var fn = buffer.shift();
        var receiver = buffer.shift();
        var arg = buffer.shift();
        var res = tryCatch1(fn, receiver, arg);
        if (res === errorObj) {
            this._queueTick();
            if (fn.domain != null) {
                fn.domain.emit("error", res.e);
            } else {
                throw res.e;
            }
        }
    }
};

Async.prototype._queueTick = function Async$_queue() {
    if (!this._isTickUsed) {
        this._schedule(this.consumeFunctionBuffer);
        this._isTickUsed = true;
    }
};

Async.prototype._reset = function Async$_reset() {
    this._isTickUsed = false;
    this._length = 0;
};

module.exports = new Async();

})(require("__browserify_process"))
},{"./schedule.js":82,"./queue.js":83,"./util.js":51,"__browserify_process":50}],53:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var Objectfreeze = require("./es5.js").freeze;
var util = require("./util.js");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof OperationalError) ||
        e["isOperational"] === true);
}

function isError(obj) {
    return obj instanceof Error;
}

function canAttach(obj) {
    return isError(obj);
}

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        this.message = typeof message === "string" ? message : defaultMessage;
        this.name = nameProperty;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

AggregateError.prototype.length = 0;
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    this.name = "OperationalError";
    this.message = message;
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        this.message = message.message;
        this.stack = message.stack;
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var key = "__BluebirdErrorTypes__";
var errorTypes = Error[key];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    notEnumerableProp(Error, key, errorTypes);
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    canAttach: canAttach
};

},{"./es5.js":81,"./util.js":51}],54:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = require("./util.js");
var canAttach = require("./errors.js").canAttach;
var errorObj = util.errorObj;
var isObject = util.isObject;

function getThen(obj) {
    try {
        return obj.then;
    }
    catch(e) {
        errorObj.e = e;
        return errorObj;
    }
}

function Promise$_Cast(obj, originalPromise) {
    if (isObject(obj)) {
        if (obj instanceof Promise) {
            return obj;
        }
        else if (isAnyBluebirdPromise(obj)) {
            var ret = new Promise(INTERNAL);
            ret._setTrace(void 0);
            obj._then(
                ret._fulfillUnchecked,
                ret._rejectUncheckedCheckError,
                ret._progressUnchecked,
                ret,
                null
            );
            ret._setFollowing();
            return ret;
        }
        var then = getThen(obj);
        if (then === errorObj) {
            if (originalPromise !== void 0 && canAttach(then.e)) {
                originalPromise._attachExtraTrace(then.e);
            }
            return Promise.reject(then.e);
        } else if (typeof then === "function") {
            return Promise$_doThenable(obj, then, originalPromise);
        }
    }
    return obj;
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    return hasProp.call(obj, "_promise0");
}

function Promise$_doThenable(x, then, originalPromise) {
    var resolver = Promise.defer();
    var called = false;
    try {
        then.call(
            x,
            Promise$_resolveFromThenable,
            Promise$_rejectFromThenable,
            Promise$_progressFromThenable
        );
    } catch(e) {
        if (!called) {
            called = true;
            var trace = canAttach(e) ? e : new Error(e + "");
            if (originalPromise !== void 0) {
                originalPromise._attachExtraTrace(trace);
            }
            resolver.promise._reject(e, trace);
        }
    }
    return resolver.promise;

    function Promise$_resolveFromThenable(y) {
        if (called) return;
        called = true;

        if (x === y) {
            var e = Promise._makeSelfResolutionError();
            if (originalPromise !== void 0) {
                originalPromise._attachExtraTrace(e);
            }
            resolver.promise._reject(e, void 0);
            return;
        }
        resolver.resolve(y);
    }

    function Promise$_rejectFromThenable(r) {
        if (called) return;
        called = true;
        var trace = canAttach(r) ? r : new Error(r + "");
        if (originalPromise !== void 0) {
            originalPromise._attachExtraTrace(trace);
        }
        resolver.promise._reject(r, trace);
    }

    function Promise$_progressFromThenable(v) {
        if (called) return;
        var promise = resolver.promise;
        if (typeof promise._progress === "function") {
            promise._progress(v);
        }
    }
}

return Promise$_Cast;
};

},{"./util.js":51,"./errors.js":53}],55:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL, cast) {
var canAttach = require("./errors.js").canAttach;
var util = require("./util.js");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -1: return void 0;
    case -2: return [];
    case -3: return {};
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    var parent = void 0;
    if (values instanceof Promise) {
        parent = values;
        promise._propagateFrom(parent, 1 | 4);
    }
    promise._setTrace(parent);
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(void 0, -2);
}
PromiseArray.prototype.length = function PromiseArray$length() {
    return this._length;
};

PromiseArray.prototype.promise = function PromiseArray$promise() {
    return this._promise;
};

PromiseArray.prototype._init =
function PromiseArray$_init(_, resolveValueIfEmpty) {
    var values = cast(this._values, void 0);
    if (values instanceof Promise) {
        this._values = values;
        values._setBoundTo(this._promise._boundTo);
        if (values.isFulfilled()) {
            values = values._settledValue;
            if (!isArray(values)) {
                var err = new Promise.TypeError("expecting an array, a promise or a thenable");
                this.__hardReject__(err);
                return;
            }
        } else if (values.isPending()) {
            values._then(
                PromiseArray$_init,
                this._reject,
                void 0,
                this,
                resolveValueIfEmpty
           );
            return;
        } else {
            values._unsetRejectionIsUnhandled();
            this._reject(values._settledValue);
            return;
        }
    } else if (!isArray(values)) {
        var err = new Promise.TypeError("expecting an array, a promise or a thenable");
        this.__hardReject__(err);
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    var len = this.getActualLength(values.length);
    var newLen = len;
    var newValues = this.shouldCopyValues() ? new Array(len) : this._values;
    var isDirectScanNeeded = false;
    for (var i = 0; i < len; ++i) {
        var maybePromise = cast(values[i], void 0);
        if (maybePromise instanceof Promise) {
            if (maybePromise.isPending()) {
                maybePromise._proxyPromiseArray(this, i);
            } else {
                maybePromise._unsetRejectionIsUnhandled();
                isDirectScanNeeded = true;
            }
        } else {
            isDirectScanNeeded = true;
        }
        newValues[i] = maybePromise;
    }
    this._values = newValues;
    this._length = newLen;
    if (isDirectScanNeeded) {
        this._scanDirectValues(len);
    }
};

PromiseArray.prototype._settlePromiseAt =
function PromiseArray$_settlePromiseAt(index) {
    var value = this._values[index];
    if (!(value instanceof Promise)) {
        this._promiseFulfilled(value, index);
    } else if (value.isFulfilled()) {
        this._promiseFulfilled(value._settledValue, index);
    } else if (value.isRejected()) {
        this._promiseRejected(value._settledValue, index);
    }
};

PromiseArray.prototype._scanDirectValues =
function PromiseArray$_scanDirectValues(len) {
    for (var i = 0; i < len; ++i) {
        if (this._isResolved()) {
            break;
        }
        this._settlePromiseAt(i);
    }
};

PromiseArray.prototype._isResolved = function PromiseArray$_isResolved() {
    return this._values === null;
};

PromiseArray.prototype._resolve = function PromiseArray$_resolve(value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype.__hardReject__ =
PromiseArray.prototype._reject = function PromiseArray$_reject(reason) {
    this._values = null;
    var trace = canAttach(reason) ? reason : new Error(reason + "");
    this._promise._attachExtraTrace(trace);
    this._promise._reject(reason, trace);
};

PromiseArray.prototype._promiseProgressed =
function PromiseArray$_promiseProgressed(progressValue, index) {
    if (this._isResolved()) return;
    this._promise._progress({
        index: index,
        value: progressValue
    });
};


PromiseArray.prototype._promiseFulfilled =
function PromiseArray$_promiseFulfilled(value, index) {
    if (this._isResolved()) return;
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
    }
};

PromiseArray.prototype._promiseRejected =
function PromiseArray$_promiseRejected(reason, index) {
    if (this._isResolved()) return;
    this._totalResolved++;
    this._reject(reason);
};

PromiseArray.prototype.shouldCopyValues =
function PromiseArray$_shouldCopyValues() {
    return true;
};

PromiseArray.prototype.getActualLength =
function PromiseArray$getActualLength(len) {
    return len;
};

return PromiseArray;
};

},{"./errors.js":53,"./util.js":51}],56:[function(require,module,exports){
(function(){/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function() {
var inherits = require("./util.js").inherits;
var defineProperty = require("./es5.js").defineProperty;

var rignore = new RegExp(
    "\\b(?:[a-zA-Z0-9.]+\\$_\\w+|" +
    "tryCatch(?:1|2|3|4|Apply)|new \\w*PromiseArray|" +
    "\\w*PromiseArray\\.\\w*PromiseArray|" +
    "setTimeout|CatchFilter\\$_\\w+|makeNodePromisified|processImmediate|" +
    "process._tickCallback|nextTick|Async\\$\\w+)\\b"
);

var rtraceline = null;
var formatStack = null;

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj.toString();
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

function CapturedTrace(ignoreUntil, isTopLevel) {
    this.captureStackTrace(CapturedTrace, isTopLevel);

}
inherits(CapturedTrace, Error);

CapturedTrace.prototype.captureStackTrace =
function CapturedTrace$captureStackTrace(ignoreUntil, isTopLevel) {
    captureStackTrace(this, ignoreUntil, isTopLevel);
};

CapturedTrace.possiblyUnhandledRejection =
function CapturedTrace$PossiblyUnhandledRejection(reason) {
    if (typeof console === "object") {
        var message;
        if (typeof reason === "object" || typeof reason === "function") {
            var stack = reason.stack;
            message = "Possibly unhandled " + formatStack(stack, reason);
        } else {
            message = "Possibly unhandled " + String(reason);
        }
        if (typeof console.error === "function" ||
            typeof console.error === "object") {
            console.error(message);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
};

CapturedTrace.combine = function CapturedTrace$Combine(current, prev) {
    var curLast = current.length - 1;
    for (var i = prev.length - 1; i >= 0; --i) {
        var line = prev[i];
        if (current[curLast] === line) {
            current.pop();
            curLast--;
        } else {
            break;
        }
    }

    current.push("From previous event:");
    var lines = current.concat(prev);

    var ret = [];

    for (var i = 0, len = lines.length; i < len; ++i) {

        if ((rignore.test(lines[i]) ||
            (i > 0 && !rtraceline.test(lines[i])) &&
            lines[i] !== "From previous event:")
       ) {
            continue;
        }
        ret.push(lines[i]);
    }
    return ret;
};

CapturedTrace.protectErrorMessageNewlines = function(stack) {
    for (var i = 0; i < stack.length; ++i) {
        if (rtraceline.test(stack[i])) {
            break;
        }
    }

    if (i <= 1) return;

    var errorMessageLines = [];
    for (var j = 0; j < i; ++j) {
        errorMessageLines.push(stack.shift());
    }
    stack.unshift(errorMessageLines.join("\u0002\u0000\u0001"));
};

CapturedTrace.isSupported = function CapturedTrace$IsSupported() {
    return typeof captureStackTrace === "function";
};

var captureStackTrace = (function stackDetection() {
    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        rtraceline = /^\s*at\s*/;
        formatStack = function(stack, error) {
            if (typeof stack === "string") return stack;

            if (error.name !== void 0 &&
                error.message !== void 0) {
                return error.name + ". " + error.message;
            }
            return formatNonError(error);


        };
        var captureStackTrace = Error.captureStackTrace;
        return function CapturedTrace$_captureStackTrace(
            receiver, ignoreUntil) {
            captureStackTrace(receiver, ignoreUntil);
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        typeof "".startsWith === "function" &&
        (err.stack.startsWith("stackDetection@")) &&
        stackDetection.name === "stackDetection") {

        defineProperty(Error, "stackTraceLimit", {
            writable: true,
            enumerable: false,
            configurable: false,
            value: 25
        });
        rtraceline = /@/;
        var rline = /[@\n]/;

        formatStack = function(stack, error) {
            if (typeof stack === "string") {
                return (error.name + ". " + error.message + "\n" + stack);
            }

            if (error.name !== void 0 &&
                error.message !== void 0) {
                return error.name + ". " + error.message;
            }
            return formatNonError(error);
        };

        return function captureStackTrace(o) {
            var stack = new Error().stack;
            var split = stack.split(rline);
            var len = split.length;
            var ret = "";
            for (var i = 0; i < len; i += 2) {
                ret += split[i];
                ret += "@";
                ret += split[i + 1];
                ret += "\n";
            }
            o.stack = ret;
        };
    } else {
        formatStack = function(stack, error) {
            if (typeof stack === "string") return stack;

            if ((typeof error === "object" ||
                typeof error === "function") &&
                error.name !== void 0 &&
                error.message !== void 0) {
                return error.name + ". " + error.message;
            }
            return formatNonError(error);
        };

        return null;
    }
})();

return CapturedTrace;
};

})()
},{"./util.js":51,"./es5.js":81}],57:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(NEXT_FILTER) {
var util = require("./util.js");
var errors = require("./errors.js");
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;
var keys = require("./es5.js").keys;
var TypeError = errors.TypeError;

function CatchFilter(instances, callback, promise) {
    this._instances = instances;
    this._callback = callback;
    this._promise = promise;
}

function CatchFilter$_safePredicate(predicate, e) {
    var safeObject = {};
    var retfilter = tryCatch1(predicate, safeObject, e);

    if (retfilter === errorObj) return retfilter;

    var safeKeys = keys(safeObject);
    if (safeKeys.length) {
        errorObj.e = new TypeError(
            "Catch filter must inherit from Error "
          + "or be a simple predicate function");
        return errorObj;
    }
    return retfilter;
}

CatchFilter.prototype.doFilter = function CatchFilter$_doFilter(e) {
    var cb = this._callback;
    var promise = this._promise;
    var boundTo = promise._boundTo;
    for (var i = 0, len = this._instances.length; i < len; ++i) {
        var item = this._instances[i];
        var itemIsErrorType = item === Error ||
            (item != null && item.prototype instanceof Error);

        if (itemIsErrorType && e instanceof item) {
            var ret = tryCatch1(cb, boundTo, e);
            if (ret === errorObj) {
                NEXT_FILTER.e = ret.e;
                return NEXT_FILTER;
            }
            return ret;
        } else if (typeof item === "function" && !itemIsErrorType) {
            var shouldHandle = CatchFilter$_safePredicate(item, e);
            if (shouldHandle === errorObj) {
                var trace = errors.canAttach(errorObj.e)
                    ? errorObj.e
                    : new Error(errorObj.e + "");
                this._promise._attachExtraTrace(trace);
                e = errorObj.e;
                break;
            } else if (shouldHandle) {
                var ret = tryCatch1(cb, boundTo, e);
                if (ret === errorObj) {
                    NEXT_FILTER.e = ret.e;
                    return NEXT_FILTER;
                }
                return ret;
            }
        }
    }
    NEXT_FILTER.e = e;
    return NEXT_FILTER;
};

return CatchFilter;
};

},{"./util.js":51,"./errors.js":53,"./es5.js":81}],59:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, NEXT_FILTER, cast) {
var util = require("./util.js");
var wrapsPrimitiveReceiver = util.wrapsPrimitiveReceiver;
var isPrimitive = util.isPrimitive;
var thrower = util.thrower;

function returnThis() {
    return this;
}
function throwThis() {
    throw this;
}
function return$(r) {
    return function Promise$_returner() {
        return r;
    };
}
function throw$(r) {
    return function Promise$_thrower() {
        throw r;
    };
}
function promisedFinally(ret, reasonOrValue, isFulfilled) {
    var then;
    if (wrapsPrimitiveReceiver && isPrimitive(reasonOrValue)) {
        then = isFulfilled ? return$(reasonOrValue) : throw$(reasonOrValue);
    } else {
        then = isFulfilled ? returnThis : throwThis;
    }
    return ret._then(then, thrower, void 0, reasonOrValue, void 0);
}

function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    var ret = promise._isBound()
                    ? handler.call(promise._boundTo)
                    : handler();

    if (ret !== void 0) {
        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            return promisedFinally(maybePromise, reasonOrValue,
                                    promise.isFulfilled());
        }
    }

    if (promise.isRejected()) {
        NEXT_FILTER.e = reasonOrValue;
        return NEXT_FILTER;
    } else {
        return reasonOrValue;
    }
}

function tapHandler(value) {
    var promise = this.promise;
    var handler = this.handler;

    var ret = promise._isBound()
                    ? handler.call(promise._boundTo, value)
                    : handler(value);

    if (ret !== void 0) {
        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            return promisedFinally(maybePromise, value, true);
        }
    }
    return value;
}

Promise.prototype._passThroughHandler =
function Promise$_passThroughHandler(handler, isFinally) {
    if (typeof handler !== "function") return this.then();

    var promiseAndHandler = {
        promise: this,
        handler: handler
    };

    return this._then(
            isFinally ? finallyHandler : tapHandler,
            isFinally ? finallyHandler : void 0, void 0,
            promiseAndHandler, void 0);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function Promise$finally(handler) {
    return this._passThroughHandler(handler, true);
};

Promise.prototype.tap = function Promise$tap(handler) {
    return this._passThroughHandler(handler, false);
};
};

},{"./util.js":51}],58:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var util = require("./util.js");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = require("./errors.js");
var TimeoutError = errors.TimeoutError;
var OperationalError = errors.OperationalError;
var async = require("./async.js");
var haveGetters = util.haveGetters;
var es5 = require("./es5.js");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
    } else {
        ret = obj;
    }
    errors.markAsOriginatingFromRejection(ret);
    return ret;
}

function nodebackForPromise(promise) {
    function PromiseResolver$_callback(err, value) {
        if (promise === null) return;

        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (arguments.length > 2) {
            var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
            promise._fulfill(args);
        } else {
            promise._fulfill(value);
        }

        promise = null;
    }
    return PromiseResolver$_callback;
}


var PromiseResolver;
if (!haveGetters) {
    PromiseResolver = function PromiseResolver(promise) {
        this.promise = promise;
        this.asCallback = nodebackForPromise(promise);
        this.callback = this.asCallback;
    };
}
else {
    PromiseResolver = function PromiseResolver(promise) {
        this.promise = promise;
    };
}
if (haveGetters) {
    var prop = {
        get: function() {
            return nodebackForPromise(this.promise);
        }
    };
    es5.defineProperty(PromiseResolver.prototype, "asCallback", prop);
    es5.defineProperty(PromiseResolver.prototype, "callback", prop);
}

PromiseResolver._nodebackForPromise = nodebackForPromise;

PromiseResolver.prototype.toString = function PromiseResolver$toString() {
    return "[object PromiseResolver]";
};

PromiseResolver.prototype.resolve =
PromiseResolver.prototype.fulfill = function PromiseResolver$resolve(value) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
    }

    var promise = this.promise;
    if (promise._tryFollow(value)) {
        return;
    }
    async.invoke(promise._fulfill, promise, value);
};

PromiseResolver.prototype.reject = function PromiseResolver$reject(reason) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
    }

    var promise = this.promise;
    errors.markAsOriginatingFromRejection(reason);
    var trace = errors.canAttach(reason) ? reason : new Error(reason + "");
    promise._attachExtraTrace(trace);
    async.invoke(promise._reject, promise, reason);
    if (trace !== reason) {
        async.invoke(this._setCarriedStackTrace, this, trace);
    }
};

PromiseResolver.prototype.progress =
function PromiseResolver$progress(value) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
    }
    async.invoke(this.promise._progress, this.promise, value);
};

PromiseResolver.prototype.cancel = function PromiseResolver$cancel() {
    async.invoke(this.promise.cancel, this.promise, void 0);
};

PromiseResolver.prototype.timeout = function PromiseResolver$timeout() {
    this.reject(new TimeoutError("timeout"));
};

PromiseResolver.prototype.isResolved = function PromiseResolver$isResolved() {
    return this.promise.isResolved();
};

PromiseResolver.prototype.toJSON = function PromiseResolver$toJSON() {
    return this.promise.toJSON();
};

PromiseResolver.prototype._setCarriedStackTrace =
function PromiseResolver$_setCarriedStackTrace(trace) {
    if (this.promise.isRejected()) {
        this.promise._setCarriedStackTrace(trace);
    }
};

module.exports = PromiseResolver;

},{"./util.js":51,"./errors.js":53,"./async.js":52,"./es5.js":81}],60:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var util = require("./util.js");
var isPrimitive = util.isPrimitive;
var wrapsPrimitiveReceiver = util.wrapsPrimitiveReceiver;

module.exports = function(Promise) {
var returner = function Promise$_returner() {
    return this;
};
var thrower = function Promise$_thrower() {
    throw this;
};

var wrapper = function Promise$_wrapper(value, action) {
    if (action === 1) {
        return function Promise$_thrower() {
            throw value;
        };
    } else if (action === 2) {
        return function Promise$_returner() {
            return value;
        };
    }
};


Promise.prototype["return"] =
Promise.prototype.thenReturn =
function Promise$thenReturn(value) {
    if (wrapsPrimitiveReceiver && isPrimitive(value)) {
        return this._then(
            wrapper(value, 2),
            void 0,
            void 0,
            void 0,
            void 0
       );
    }
    return this._then(returner, void 0, void 0, value, void 0);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow =
function Promise$thenThrow(reason) {
    if (wrapsPrimitiveReceiver && isPrimitive(reason)) {
        return this._then(
            wrapper(reason, 1),
            void 0,
            void 0,
            void 0,
            void 0
       );
    }
    return this._then(thrower, void 0, void 0, reason, void 0);
};
};

},{"./util.js":51}],62:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports =
function(Promise, PromiseArray, cast, INTERNAL) {
var util = require("./util.js");
var canEvaluate = util.canEvaluate;
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;


if (canEvaluate) {
    var thenCallback = function(i) {
        return new Function("value", "holder", "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g, i));
    };

    var caller = function(count) {
        var values = [];
        for (var i = 1; i <= count; ++i) values.push("holder.p" + i);
        return new Function("holder", "                                      \n\
            'use strict';                                                    \n\
            var callback = holder.fn;                                        \n\
            return callback(values);                                         \n\
            ".replace(/values/g, values.join(", ")));
    };
    var thenCallbacks = [];
    var callers = [void 0];
    for (var i = 1; i <= 5; ++i) {
        thenCallbacks.push(thenCallback(i));
        callers.push(caller(i));
    }

    var Holder = function(total, fn) {
        this.p1 = this.p2 = this.p3 = this.p4 = this.p5 = null;
        this.fn = fn;
        this.total = total;
        this.now = 0;
    };

    Holder.prototype.callers = callers;
    Holder.prototype.checkFulfillment = function(promise) {
        var now = this.now;
        now++;
        var total = this.total;
        if (now >= total) {
            var handler = this.callers[total];
            var ret = tryCatch1(handler, void 0, this);
            if (ret === errorObj) {
                promise._rejectUnchecked(ret.e);
            } else if (!promise._tryFollow(ret)) {
                promise._fulfillUnchecked(ret);
            }
        } else {
            this.now = now;
        }
    };
}




Promise.join = function Promise$Join() {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        if (last < 6 && canEvaluate) {
            var ret = new Promise(INTERNAL);
            ret._setTrace(void 0);
            var holder = new Holder(last, fn);
            var reject = ret._reject;
            var callbacks = thenCallbacks;
            for (var i = 0; i < last; ++i) {
                var maybePromise = cast(arguments[i], void 0);
                if (maybePromise instanceof Promise) {
                    if (maybePromise.isPending()) {
                        maybePromise._then(callbacks[i], reject,
                                           void 0, ret, holder);
                    } else if (maybePromise.isFulfilled()) {
                        callbacks[i].call(ret,
                                          maybePromise._settledValue, holder);
                    } else {
                        ret._reject(maybePromise._settledValue);
                        maybePromise._unsetRejectionIsUnhandled();
                    }
                } else {
                    callbacks[i].call(ret, maybePromise, holder);
                }
            }
            return ret;
        }
    }
    var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
    var ret = new PromiseArray(args).promise();
    return fn !== void 0 ? ret.spread(fn) : ret;
};

};

},{"./util.js":51}],64:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL, cast) {
var apiRejection = require("./errors_api_rejection.js")(Promise);
var isArray = require("./util.js").isArray;

var raceLater = function Promise$_raceLater(promise) {
    return promise.then(function(array) {
        return Promise$_Race(array, promise);
    });
};

var hasOwn = {}.hasOwnProperty;
function Promise$_Race(promises, parent) {
    var maybePromise = cast(promises, void 0);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else if (!isArray(promises)) {
        return apiRejection("expecting an array, a promise or a thenable");
    }

    var ret = new Promise(INTERNAL);
    if (parent !== void 0) {
        ret._propagateFrom(parent, 7);
    } else {
        ret._setTrace(void 0);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === void 0 && !(hasOwn.call(promises, i))) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, void 0, ret, null);
    }
    return ret;
}

Promise.race = function Promise$Race(promises) {
    return Promise$_Race(promises, void 0);
};

Promise.prototype.race = function Promise$race() {
    return Promise$_Race(this, void 0);
};

};

},{"./errors_api_rejection.js":80,"./util.js":51}],65:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = require("./util.js");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

function makeMethodCaller (methodName) {
    return new Function("obj", "                                             \n\
        'use strict'                                                         \n\
        var len = this.length;                                               \n\
        switch(len) {                                                        \n\
            case 1: return obj.methodName(this[0]);                          \n\
            case 2: return obj.methodName(this[0], this[1]);                 \n\
            case 3: return obj.methodName(this[0], this[1], this[2]);        \n\
            case 0: return obj.methodName();                                 \n\
            default: return obj.methodName.apply(obj, this);                 \n\
        }                                                                    \n\
        ".replace(/methodName/g, methodName));
}

function makeGetter (propertyName) {
    return new Function("obj", "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName", propertyName));
}

function getCompiled(name, compiler, cache) {
    var ret = cache[name];
    if (typeof ret !== "function") {
        if (!isIdentifier(name)) {
            return null;
        }
        ret = compiler(name);
        cache[name] = ret;
        cache[" size"]++;
        if (cache[" size"] > 512) {
            var keys = Object.keys(cache);
            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
            cache[" size"] = keys.length - 256;
        }
    }
    return ret;
}

function getMethodCaller(name) {
    return getCompiled(name, makeMethodCaller, callerCache);
}

function getGetter(name) {
    return getCompiled(name, makeGetter, getterCache);
}

function caller(obj) {
    return obj[this.pop()].apply(obj, this);
}
Promise.prototype.call = function Promise$call(methodName) {
    var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
    if (canEvaluate) {
        var maybeCaller = getMethodCaller(methodName);
        if (maybeCaller !== null) {
            return this._then(maybeCaller, void 0, void 0, args, void 0);
        }
    }
    args.push(methodName);
    return this._then(caller, void 0, void 0, args, void 0);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    return obj[this];
}
Promise.prototype.get = function Promise$get(propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, void 0, void 0, propertyName, void 0);
};
};

},{"./util.js":51}],66:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, apiRejection, INTERNAL, cast) {
var errors = require("./errors.js");
var TypeError = errors.TypeError;
var deprecated = require("./util.js").deprecated;
var util = require("./util.js");
var errorObj = util.errorObj;
var tryCatch1 = util.tryCatch1;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers) {
    var _errorObj = errorObj;
    var _Promise = Promise;
    var len = yieldHandlers.length;
    for (var i = 0; i < len; ++i) {
        var result = tryCatch1(yieldHandlers[i], void 0, value);
        if (result === _errorObj) {
            return _Promise.reject(_errorObj.e);
        }
        var maybePromise = cast(result, promiseFromYieldHandler);
        if (maybePromise instanceof _Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler) {
    var promise = this._promise = new Promise(INTERNAL);
    promise._setTrace(void 0);
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = void 0;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
}

PromiseSpawn.prototype.promise = function PromiseSpawn$promise() {
    return this._promise;
};

PromiseSpawn.prototype._run = function PromiseSpawn$_run() {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = void 0;
    this._next(void 0);
};

PromiseSpawn.prototype._continue = function PromiseSpawn$_continue(result) {
    if (result === errorObj) {
        this._generator = void 0;
        var trace = errors.canAttach(result.e)
            ? result.e : new Error(result.e + "");
        this._promise._attachExtraTrace(trace);
        this._promise._reject(result.e, trace);
        return;
    }

    var value = result.value;
    if (result.done === true) {
        this._generator = void 0;
        if (!this._promise._tryFollow(value)) {
            this._promise._fulfill(value);
        }
    } else {
        var maybePromise = cast(value, void 0);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise, this._yieldHandlers);
            if (maybePromise === null) {
                this._throw(new TypeError("A value was yielded that could not be treated as a promise"));
                return;
            }
        }
        maybePromise._then(
            this._next,
            this._throw,
            void 0,
            this,
            null
       );
    }
};

PromiseSpawn.prototype._throw = function PromiseSpawn$_throw(reason) {
    if (errors.canAttach(reason))
        this._promise._attachExtraTrace(reason);
    this._continue(
        tryCatch1(this._generator["throw"], this._generator, reason)
   );
};

PromiseSpawn.prototype._next = function PromiseSpawn$_next(value) {
    this._continue(
        tryCatch1(this._generator.next, this._generator, value)
   );
};

Promise.coroutine =
function Promise$Coroutine(generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(void 0, void 0, yieldHandler);
        spawn._generator = generator;
        spawn._next(void 0);
        return spawn.promise();
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") throw new TypeError("fn must be a function");
    yieldHandlers.push(fn);
};

Promise.spawn = function Promise$Spawn(generatorFunction) {
    deprecated("Promise.spawn is deprecated. Use Promise.coroutine instead.");
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors.js":53,"./util.js":51}],67:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, cast, INTERNAL) {
var util = require("./util.js");
var tryCatch3 = util.tryCatch3;
var errorObj = util.errorObj;
var PENDING = {};
var EMPTY_ARRAY = [];

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._callback = fn;
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = limit >= 1 ? [] : EMPTY_ARRAY;
    this._init$(void 0, -2);
}
util.inherits(MappingPromiseArray, PromiseArray);

MappingPromiseArray.prototype._init = function MappingPromiseArray$_init() {};

MappingPromiseArray.prototype._promiseFulfilled =
function MappingPromiseArray$_promiseFulfilled(value, index) {
    var values = this._values;
    if (values === null) return;

    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;
    if (values[index] === PENDING) {
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var callback = this._callback;
        var receiver = this._promise._boundTo;
        var ret = tryCatch3(callback, receiver, value, index, length);
        if (ret === errorObj) return this._reject(ret.e);

        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            if (maybePromise.isPending()) {
                if (limit >= 1) this._inFlight++;
                values[index] = PENDING;
                return maybePromise._proxyPromiseArray(this, index);
            } else if (maybePromise.isFulfilled()) {
                ret = maybePromise.value();
            } else {
                maybePromise._unsetRejectionIsUnhandled();
                return this._reject(maybePromise.reason());
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }

    }
};

MappingPromiseArray.prototype._drainQueue =
function MappingPromiseArray$_drainQueue() {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter =
function MappingPromiseArray$_filter(booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues =
function MappingPromiseArray$preserveValues() {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    var limit = typeof options === "object" && options !== null
        ? options.concurrency
        : 0;
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter);
}

Promise.prototype.map = function Promise$map(fn, options) {
    if (typeof fn !== "function") return apiRejection("fn must be a function");

    return map(this, fn, options, null).promise();
};

Promise.map = function Promise$Map(promises, fn, options, _filter) {
    if (typeof fn !== "function") return apiRejection("fn must be a function");
    return map(promises, fn, options, _filter).promise();
};


};

},{"./util.js":51}],68:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
var util = require("./util.js");
var async = require("./async.js");
var tryCatch2 = util.tryCatch2;
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;

function thrower(r) {
    throw r;
}

function Promise$_spreadAdapter(val, receiver) {
    if (!util.isArray(val)) return Promise$_successAdapter(val, receiver);
    var ret = util.tryCatchApply(this, [null].concat(val), receiver);
    if (ret === errorObj) {
        async.invokeLater(thrower, void 0, ret.e);
    }
}

function Promise$_successAdapter(val, receiver) {
    var nodeback = this;
    var ret = val === void 0
        ? tryCatch1(nodeback, receiver, null)
        : tryCatch2(nodeback, receiver, null, val);
    if (ret === errorObj) {
        async.invokeLater(thrower, void 0, ret.e);
    }
}
function Promise$_errorAdapter(reason, receiver) {
    var nodeback = this;
    var ret = tryCatch1(nodeback, receiver, reason);
    if (ret === errorObj) {
        async.invokeLater(thrower, void 0, ret.e);
    }
}

Promise.prototype.nodeify = function Promise$nodeify(nodeback, options) {
    if (typeof nodeback == "function") {
        var adapter = Promise$_successAdapter;
        if (options !== void 0 && Object(options).spread) {
            adapter = Promise$_spreadAdapter;
        }
        this._then(
            adapter,
            Promise$_errorAdapter,
            void 0,
            nodeback,
            this._boundTo
        );
    }
    return this;
};
};

},{"./util.js":51,"./async.js":52}],71:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, cast, INTERNAL) {
var util = require("./util.js");
var tryCatch4 = util.tryCatch4;
var tryCatch3 = util.tryCatch3;
var errorObj = util.errorObj;
function ReductionPromiseArray(promises, fn, accum, _each) {
    this.constructor$(promises);
    this._preservedValues = _each === INTERNAL ? [] : null;
    this._zerothIsAccum = (accum === void 0);
    this._gotAccum = false;
    this._reducingIndex = (this._zerothIsAccum ? 1 : 0);
    this._valuesPhase = undefined;

    var maybePromise = cast(accum, void 0);
    var rejected = false;
    var isPromise = maybePromise instanceof Promise;
    if (isPromise) {
        if (maybePromise.isPending()) {
            maybePromise._proxyPromiseArray(this, -1);
        } else if (maybePromise.isFulfilled()) {
            accum = maybePromise.value();
            this._gotAccum = true;
        } else {
            maybePromise._unsetRejectionIsUnhandled();
            this._reject(maybePromise.reason());
            rejected = true;
        }
    }
    if (!(isPromise || this._zerothIsAccum)) this._gotAccum = true;
    this._callback = fn;
    this._accum = accum;
    if (!rejected) this._init$(void 0, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._init =
function ReductionPromiseArray$_init() {};

ReductionPromiseArray.prototype._resolveEmptyArray =
function ReductionPromiseArray$_resolveEmptyArray() {
    if (this._gotAccum || this._zerothIsAccum) {
        this._resolve(this._preservedValues !== null
                        ? [] : this._accum);
    }
};

ReductionPromiseArray.prototype._promiseFulfilled =
function ReductionPromiseArray$_promiseFulfilled(value, index) {
    var values = this._values;
    if (values === null) return;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var isEach = preservedValues !== null;
    var gotAccum = this._gotAccum;
    var valuesPhase = this._valuesPhase;
    var valuesPhaseIndex;
    if (!valuesPhase) {
        valuesPhase = this._valuesPhase = Array(length);
        for (valuesPhaseIndex=0; valuesPhaseIndex<length; ++valuesPhaseIndex) {
            valuesPhase[valuesPhaseIndex] = 0;
        }
    }
    valuesPhaseIndex = valuesPhase[index];

    if (index === 0 && this._zerothIsAccum) {
        if (!gotAccum) {
            this._accum = value;
            this._gotAccum = gotAccum = true;
        }
        valuesPhase[index] = ((valuesPhaseIndex === 0)
            ? 1 : 2);
    } else if (index === -1) {
        if (!gotAccum) {
            this._accum = value;
            this._gotAccum = gotAccum = true;
        }
    } else {
        if (valuesPhaseIndex === 0) {
            valuesPhase[index] = 1;
        }
        else {
            valuesPhase[index] = 2;
            if (gotAccum) {
                this._accum = value;
            }
        }
    }
    if (!gotAccum) return;

    var callback = this._callback;
    var receiver = this._promise._boundTo;
    var ret;

    for (var i = this._reducingIndex; i < length; ++i) {
        valuesPhaseIndex = valuesPhase[i];
        if (valuesPhaseIndex === 2) {
            this._reducingIndex = i + 1;
            continue;
        }
        if (valuesPhaseIndex !== 1) return;

        value = values[i];
        if (value instanceof Promise) {
            if (value.isFulfilled()) {
                value = value._settledValue;
            } else if (value.isPending()) {
                return;
            } else {
                value._unsetRejectionIsUnhandled();
                return this._reject(value.reason());
            }
        }

        if (isEach) {
            preservedValues.push(value);
            ret = tryCatch3(callback, receiver, value, i, length);
        }
        else {
            ret = tryCatch4(callback, receiver, this._accum, value, i, length);
        }

        if (ret === errorObj) return this._reject(ret.e);

        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            if (maybePromise.isPending()) {
                valuesPhase[i] = 4;
                return maybePromise._proxyPromiseArray(this, i);
            } else if (maybePromise.isFulfilled()) {
                ret = maybePromise.value();
            } else {
                maybePromise._unsetRejectionIsUnhandled();
                return this._reject(maybePromise.reason());
            }
        }

        this._reducingIndex = i + 1;
        this._accum = ret;
    }

    if (this._reducingIndex < length) return;
    this._resolve(isEach ? preservedValues : this._accum);
};

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") return apiRejection("fn must be a function");
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

Promise.prototype.reduce = function Promise$reduce(fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function Promise$Reduce(promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};
};

},{"./util.js":51}],72:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports =
    function(Promise, PromiseArray) {
var PromiseInspection = Promise.PromiseInspection;
var util = require("./util.js");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved =
function SettledPromiseArray$_promiseResolved(index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
    }
};

SettledPromiseArray.prototype._promiseFulfilled =
function SettledPromiseArray$_promiseFulfilled(value, index) {
    if (this._isResolved()) return;
    var ret = new PromiseInspection();
    ret._bitField = 268435456;
    ret._settledValue = value;
    this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected =
function SettledPromiseArray$_promiseRejected(reason, index) {
    if (this._isResolved()) return;
    var ret = new PromiseInspection();
    ret._bitField = 134217728;
    ret._settledValue = reason;
    this._promiseResolved(index, ret);
};

Promise.settle = function Promise$Settle(promises) {
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function Promise$settle() {
    return new SettledPromiseArray(this).promise();
};
};

},{"./util.js":51}],73:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = require("./util.js");
var RangeError = require("./errors.js").RangeError;
var AggregateError = require("./errors.js").AggregateError;
var isArray = util.isArray;


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function SomePromiseArray$_init() {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(void 0, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function SomePromiseArray$init() {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function SomePromiseArray$setUnwrap() {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function SomePromiseArray$howMany() {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany =
function SomePromiseArray$setHowMany(count) {
    if (this._isResolved()) return;
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled =
function SomePromiseArray$_promiseFulfilled(value) {
    if (this._isResolved()) return;
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
    }

};
SomePromiseArray.prototype._promiseRejected =
function SomePromiseArray$_promiseRejected(reason) {
    if (this._isResolved()) return;
    this._addRejected(reason);
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            e.push(this._values[i]);
        }
        this._reject(e);
    }
};

SomePromiseArray.prototype._fulfilled = function SomePromiseArray$_fulfilled() {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function SomePromiseArray$_rejected() {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected =
function SomePromiseArray$_addRejected(reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled =
function SomePromiseArray$_addFulfilled(value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill =
function SomePromiseArray$_canPossiblyFulfill() {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError =
function SomePromiseArray$_getRangeError(count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray =
function SomePromiseArray$_resolveEmptyArray() {
    this._reject(this._getRangeError(0));
};

function Promise$_Some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    if (promise.isRejected()) {
        return promise;
    }
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function Promise$Some(promises, howMany) {
    return Promise$_Some(promises, howMany);
};

Promise.prototype.some = function Promise$some(howMany) {
    return Promise$_Some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./util.js":51,"./errors.js":53}],74:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray) {
var util = require("./util.js");
var async = require("./async.js");
var errors = require("./errors.js");
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;

Promise.prototype.progressed = function Promise$progressed(handler) {
    return this._then(void 0, void 0, handler, void 0, void 0);
};

Promise.prototype._progress = function Promise$_progress(progressValue) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._progressUnchecked(progressValue);

};

Promise.prototype._progressHandlerAt =
function Promise$_progressHandlerAt(index) {
    return index === 0
        ? this._progressHandler0
        : this[(index << 2) + index - 5 + 2];
};

Promise.prototype._doProgressWith =
function Promise$_doProgressWith(progression) {
    var progressValue = progression.value;
    var handler = progression.handler;
    var promise = progression.promise;
    var receiver = progression.receiver;

    var ret = tryCatch1(handler, receiver, progressValue);
    if (ret === errorObj) {
        if (ret.e != null &&
            ret.e.name !== "StopProgressPropagation") {
            var trace = errors.canAttach(ret.e)
                ? ret.e : new Error(ret.e + "");
            promise._attachExtraTrace(trace);
            promise._progress(ret.e);
        }
    } else if (ret instanceof Promise) {
        ret._then(promise._progress, null, null, promise, void 0);
    } else {
        promise._progress(ret);
    }
};


Promise.prototype._progressUnchecked =
function Promise$_progressUnchecked(progressValue) {
    if (!this.isPending()) return;
    var len = this._length();
    var progress = this._progress;
    for (var i = 0; i < len; i++) {
        var handler = this._progressHandlerAt(i);
        var promise = this._promiseAt(i);
        if (!(promise instanceof Promise)) {
            var receiver = this._receiverAt(i);
            if (typeof handler === "function") {
                handler.call(receiver, progressValue, promise);
            } else if (receiver instanceof Promise && receiver._isProxied()) {
                receiver._progressUnchecked(progressValue);
            } else if (receiver instanceof PromiseArray) {
                receiver._promiseProgressed(progressValue, promise);
            }
            continue;
        }

        if (typeof handler === "function") {
            async.invoke(this._doProgressWith, this, {
                handler: handler,
                promise: promise,
                receiver: this._receiverAt(i),
                value: progressValue
            });
        } else {
            async.invoke(progress, promise, progressValue);
        }
    }
};
};

},{"./util.js":51,"./async.js":52,"./errors.js":53}],75:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var errors = require("./errors.js");
var canAttach = errors.canAttach;
var async = require("./async.js");
var CancellationError = errors.CancellationError;

Promise.prototype._cancel = function Promise$_cancel(reason) {
    if (!this.isCancellable()) return this;
    var parent;
    var promiseToReject = this;
    while ((parent = promiseToReject._cancellationParent) !== void 0 &&
        parent.isCancellable()) {
        promiseToReject = parent;
    }
    promiseToReject._attachExtraTrace(reason);
    promiseToReject._rejectUnchecked(reason);
};

Promise.prototype.cancel = function Promise$cancel(reason) {
    if (!this.isCancellable()) return this;
    reason = reason !== void 0
        ? (canAttach(reason) ? reason : new Error(reason + ""))
        : new CancellationError();
    async.invokeLater(this._cancel, this, reason);
    return this;
};

Promise.prototype.cancellable = function Promise$cancellable() {
    if (this._cancellable()) return this;
    this._setCancellable();
    this._cancellationParent = void 0;
    return this;
};

Promise.prototype.uncancellable = function Promise$uncancellable() {
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 2 | 4);
    ret._follow(this);
    ret._unsetCancellable();
    return ret;
};

Promise.prototype.fork =
function Promise$fork(didFulfill, didReject, didProgress) {
    var ret = this._then(didFulfill, didReject, didProgress,
                         void 0, void 0);

    ret._setCancellable();
    ret._cancellationParent = void 0;
    return ret;
};
};

},{"./errors.js":53,"./async.js":52}],79:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function (Promise, apiRejection, cast) {
    var TypeError = require("./errors.js").TypeError;
    var inherits = require("./util.js").inherits;
    var PromiseInspection = Promise.PromiseInspection;

    function inspectionMapper(inspections) {
        var len = inspections.length;
        for (var i = 0; i < len; ++i) {
            var inspection = inspections[i];
            if (inspection.isRejected()) {
                return Promise.reject(inspection.error());
            }
            inspections[i] = inspection.value();
        }
        return inspections;
    }

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = Promise.defer();
        function iterator() {
            if (i >= len) return ret.resolve();
            var maybePromise = cast(resources[i++], void 0);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = cast(maybePromise._getDisposer()
                                        .tryDispose(inspection), void 0);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret.promise;
    }

    function disposerSuccess(value) {
        var inspection = new PromiseInspection();
        inspection._settledValue = value;
        inspection._bitField = 268435456;
        return dispose(this, inspection).thenReturn(value);
    }

    function disposerFail(reason) {
        var inspection = new PromiseInspection();
        inspection._settledValue = reason;
        inspection._bitField = 134217728;
        return dispose(this, inspection).thenThrow(reason);
    }

    function Disposer(data, promise) {
        this._data = data;
        this._promise = promise;
    }

    Disposer.prototype.data = function Disposer$data() {
        return this._data;
    };

    Disposer.prototype.promise = function Disposer$promise() {
        return this._promise;
    };

    Disposer.prototype.resource = function Disposer$resource() {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return null;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var ret = resource !== null
            ? this.doDispose(resource, inspection) : null;
        this._promise._unsetDisposable();
        this._data = this._promise = null;
        return ret;
    };

    function FunctionDisposer(fn, promise) {
        this.constructor$(fn, promise);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    Promise.using = function Promise$using() {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") return apiRejection("fn must be a function");
        len--;
        var resources = new Array(len);
        for (var i = 0; i < len; ++i) {
            var resource = arguments[i];
            if (resource instanceof Disposer) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            }
            resources[i] = resource;
        }

        return Promise.settle(resources)
            .then(inspectionMapper)
            .spread(fn)
            ._then(disposerSuccess, disposerFail, void 0, resources, void 0);
    };

    Promise.prototype._setDisposable =
    function Promise$_setDisposable(disposer) {
        this._bitField = this._bitField | 262144;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function Promise$_isDisposable() {
        return (this._bitField & 262144) > 0;
    };

    Promise.prototype._getDisposer = function Promise$_getDisposer() {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function Promise$_unsetDisposable() {
        this._bitField = this._bitField & (~262144);
        this._disposer = void 0;
    };

    Promise.prototype.disposer = function Promise$disposer(fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this);
        }
        throw new TypeError();
    };

};

},{"./errors.js":53,"./util.js":51}],80:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
var TypeError = require('./errors.js').TypeError;

function apiRejection(msg) {
    var error = new TypeError(msg);
    var ret = Promise.rejected(error);
    var parent = ret._peekContext();
    if (parent != null) {
        parent._attachExtraTrace(error);
    }
    return ret;
}

return apiRejection;
};

},{"./errors.js":53}],63:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var _setTimeout = function(fn, ms) {
    var len = arguments.length;
    var arg0 = arguments[2];
    var arg1 = arguments[3];
    var arg2 = len >= 5 ? arguments[4] : void 0;
    setTimeout(function() {
        fn(arg0, arg1, arg2);
    }, ms);
};

module.exports = function(Promise, INTERNAL, cast) {
var util = require("./util.js");
var errors = require("./errors.js");
var apiRejection = require("./errors_api_rejection")(Promise);
var TimeoutError = Promise.TimeoutError;

var afterTimeout = function Promise$_afterTimeout(promise, message, ms) {
    if (!promise.isPending()) return;
    if (typeof message !== "string") {
        message = "operation timed out after" + " " + ms + " ms"
    }
    var err = new TimeoutError(message);
    errors.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._cancel(err);
};

var afterDelay = function Promise$_afterDelay(value, promise) {
    promise._fulfill(value);
};

var delay = Promise.delay = function Promise$Delay(value, ms) {
    if (ms === void 0) {
        ms = value;
        value = void 0;
    }
    ms = +ms;
    var maybePromise = cast(value, void 0);
    var promise = new Promise(INTERNAL);

    if (maybePromise instanceof Promise) {
        promise._propagateFrom(maybePromise, 7);
        promise._follow(maybePromise);
        return promise.then(function(value) {
            return Promise.delay(value, ms);
        });
    } else {
        promise._setTrace(void 0);
        _setTimeout(afterDelay, ms, value, promise);
    }
    return promise;
};

Promise.prototype.delay = function Promise$delay(ms) {
    return delay(this, ms);
};

Promise.prototype.timeout = function Promise$timeout(ms, message) {
    ms = +ms;

    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 7);
    ret._follow(this);
    _setTimeout(afterTimeout, ms, ret, message, ms);
    return ret.cancellable();
};

};

},{"./util.js":51,"./errors.js":53,"./errors_api_rejection":80}],69:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = require("./util.js");
var nodebackForPromise = require("./promise_resolver.js")
    ._nodebackForPromise;
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = require("./errors").TypeError;
var defaultSuffix = "Async";
var defaultFilter = function(name, func) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        !util.isClass(func);
};
var defaultPromisified = {__isPromisified__: true};


function escapeIdentRegex(str) {
    return str.replace(/([$])/, "\\$");
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API " +
                        "that has normal methods with '"+suffix+"'-suffix");
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

function switchCaseArgumentOrder(likelyArgumentCount) {
    var ret = [likelyArgumentCount];
    var min = Math.max(0, likelyArgumentCount - 1 - 5);
    for(var i = likelyArgumentCount - 1; i >= min; --i) {
        if (i === likelyArgumentCount) continue;
        ret.push(i);
    }
    for(var i = likelyArgumentCount + 1; i <= 5; ++i) {
        ret.push(i);
    }
    return ret;
}

function argumentSequence(argumentCount) {
    return util.filledRange(argumentCount, "arguments[", "]");
}

function parameterDeclaration(parameterCount) {
    return util.filledRange(parameterCount, "_arg", "");
}

function parameterCount(fn) {
    if (typeof fn.length === "number") {
        return Math.max(Math.min(fn.length, 1023 + 1), 0);
    }
    return 0;
}

function generatePropertyAccess(key) {
    if (util.isIdentifier(key)) {
        return "." + key;
    }
    else return "['" + key.replace(/(['\\])/g, "\\$1") + "']";
}

function makeNodePromisifiedEval(callback, receiver, originalName, fn, suffix) {
    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
    var callbackName =
        (typeof originalName === "string" && util.isIdentifier(originalName)
            ? originalName + suffix
            : "promisified");

    function generateCallForArgumentCount(count) {
        var args = argumentSequence(count).join(", ");
        var comma = count > 0 ? ", " : "";
        var ret;
        if (typeof callback === "string") {
            ret = "                                                          \n\
                this.method(args, fn);                                       \n\
                break;                                                       \n\
            ".replace(".method", generatePropertyAccess(callback));
        } else if (receiver === THIS) {
            ret =  "                                                         \n\
                callback.call(this, args, fn);                               \n\
                break;                                                       \n\
            ";
        } else if (receiver !== void 0) {
            ret =  "                                                         \n\
                callback.call(receiver, args, fn);                           \n\
                break;                                                       \n\
            ";
        } else {
            ret =  "                                                         \n\
                callback(args, fn);                                          \n\
                break;                                                       \n\
            ";
        }
        return ret.replace("args", args).replace(", ", comma);
    }

    function generateArgumentSwitchCase() {
        var ret = "";
        for(var i = 0; i < argumentOrder.length; ++i) {
            ret += "case " + argumentOrder[i] +":" +
                generateCallForArgumentCount(argumentOrder[i]);
        }
        var codeForCall;
        if (typeof callback === "string") {
            codeForCall = "                                                  \n\
                this.property.apply(this, args);                             \n\
            "
                .replace(".property", generatePropertyAccess(callback));
        } else if (receiver === THIS) {
            codeForCall = "                                                  \n\
                callback.apply(this, args);                                  \n\
            ";
        } else {
            codeForCall = "                                                  \n\
                callback.apply(receiver, args);                              \n\
            ";
        }

        ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = fn;                                                    \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]", codeForCall);
        return ret;
    }

    return new Function("Promise",
                        "callback",
                        "receiver",
                        "withAppended",
                        "maybeWrapAsError",
                        "nodebackForPromise",
                        "INTERNAL","                                         \n\
        var ret = function FunctionName(Parameters) {                        \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._setTrace(void 0);                                       \n\
            var fn = nodebackForPromise(promise);                            \n\
            try {                                                            \n\
                switch(len) {                                                \n\
                    [CodeForSwitchCase]                                      \n\
                }                                                            \n\
            } catch (e) {                                                    \n\
                var wrapped = maybeWrapAsError(e);                           \n\
                promise._attachExtraTrace(wrapped);                          \n\
                promise._reject(wrapped);                                    \n\
            }                                                                \n\
            return promise;                                                  \n\
        };                                                                   \n\
        ret.__isPromisified__ = true;                                        \n\
        return ret;                                                          \n\
        "
        .replace("FunctionName", callbackName)
        .replace("Parameters", parameterDeclaration(newParameterCount))
        .replace("[CodeForSwitchCase]", generateArgumentSwitchCase()))(
            Promise,
            callback,
            receiver,
            withAppended,
            maybeWrapAsError,
            nodebackForPromise,
            INTERNAL
        );
}

function makeNodePromisifiedClosure(callback, receiver) {
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        if (typeof callback === "string") {
            callback = _receiver[callback];
        }
        var promise = new Promise(INTERNAL);
        promise._setTrace(void 0);
        var fn = nodebackForPromise(promise);
        try {
            callback.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            var wrapped = maybeWrapAsError(e);
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        }
        return promise;
    }
    promisified.__isPromisified__ = true;
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        obj[promisifiedKey] = promisifier === makeNodePromisified
                ? makeNodePromisified(key, THIS, key, fn, suffix)
                : promisifier(fn);
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver) {
    return makeNodePromisified(callback, receiver, void 0, callback);
}

Promise.promisify = function Promise$Promisify(fn, receiver) {
    if (typeof fn !== "function") {
        throw new TypeError("fn must be a function");
    }
    if (isPromisified(fn)) {
        return fn;
    }
    return promisify(fn, arguments.length < 2 ? THIS : receiver);
};

Promise.promisifyAll = function Promise$PromisifyAll(target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function");
    }
    options = Object(options);
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier");
    }

    var keys = util.inheritedDataKeys(target, {includeHidden: true});
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier);
            promisifyAll(value, suffix, filter, promisifier);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier);
};
};


},{"./util.js":51,"./promise_resolver.js":58,"./errors":53}],70:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray, cast) {
var util = require("./util.js");
var apiRejection = require("./errors_api_rejection")(Promise);
var isObject = util.isObject;
var es5 = require("./es5.js");

function PropertiesPromiseArray(obj) {
    var keys = es5.keys(obj);
    var len = keys.length;
    var values = new Array(len * 2);
    for (var i = 0; i < len; ++i) {
        var key = keys[i];
        values[i] = obj[key];
        values[i + len] = key;
    }
    this.constructor$(values);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init =
function PropertiesPromiseArray$_init() {
    this._init$(void 0, -3) ;
};

PropertiesPromiseArray.prototype._promiseFulfilled =
function PropertiesPromiseArray$_promiseFulfilled(value, index) {
    if (this._isResolved()) return;
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val = {};
        var keyOffset = this.length();
        for (var i = 0, len = this.length(); i < len; ++i) {
            val[this._values[i + keyOffset]] = this._values[i];
        }
        this._resolve(val);
    }
};

PropertiesPromiseArray.prototype._promiseProgressed =
function PropertiesPromiseArray$_promiseProgressed(value, index) {
    if (this._isResolved()) return;

    this._promise._progress({
        key: this._values[index + this.length()],
        value: value
    });
};

PropertiesPromiseArray.prototype.shouldCopyValues =
function PropertiesPromiseArray$_shouldCopyValues() {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength =
function PropertiesPromiseArray$getActualLength(len) {
    return len >> 1;
};

function Promise$_Props(promises) {
    var ret;
    var castValue = cast(promises, void 0);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(Promise.props, void 0, void 0, void 0, void 0);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 4);
    }
    return ret;
}

Promise.prototype.props = function Promise$props() {
    return Promise$_Props(this);
};

Promise.props = function Promise$Props(promises) {
    return Promise$_Props(promises);
};
};

},{"./util.js":51,"./es5.js":81,"./errors_api_rejection":80}],81:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
var isES5 = (function(){
    "use strict";
    return this === void 0;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        keys: Object.keys,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function ObjectKeys(o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    }

    var ObjectDefineProperty = function ObjectDefineProperty(o, key, desc) {
        o[key] = desc.value;
        return o;
    }

    var ObjectFreeze = function ObjectFreeze(obj) {
        return obj;
    }

    var ObjectGetPrototypeOf = function ObjectGetPrototypeOf(obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    }

    var ArrayIsArray = function ArrayIsArray(obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    }

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5
    };
}

},{}],82:[function(require,module,exports){
(function(process){/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var schedule;
var _MutationObserver;
if (typeof process === "object" && typeof process.version === "string") {
    schedule = function Promise$_Scheduler(fn) {
        process.nextTick(fn);
    };
}
else if ((typeof MutationObserver !== "undefined" &&
         (_MutationObserver = MutationObserver)) ||
         (typeof WebKitMutationObserver !== "undefined" &&
         (_MutationObserver = WebKitMutationObserver))) {
    schedule = (function() {
        var div = document.createElement("div");
        var queuedFn = void 0;
        var observer = new _MutationObserver(
            function Promise$_Scheduler() {
                var fn = queuedFn;
                queuedFn = void 0;
                fn();
            }
       );
        observer.observe(div, {
            attributes: true
        });
        return function Promise$_Scheduler(fn) {
            queuedFn = fn;
            div.setAttribute("class", "foo");
        };

    })();
}
else if (typeof setTimeout !== "undefined") {
    schedule = function Promise$_Scheduler(fn) {
        setTimeout(fn, 0);
    };
}
else throw new Error("no async scheduler available");
module.exports = schedule;

})(require("__browserify_process"))
},{"__browserify_process":50}],83:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
function arrayCopy(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
    this._makeCapacity();
}

Queue.prototype._willBeOverCapacity =
function Queue$_willBeOverCapacity(size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function Queue$_pushOne(arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype.push = function Queue$push(fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function Queue$shift() {
    var front = this._front,
        ret = this[front];

    this[front] = void 0;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function Queue$length() {
    return this._length;
};

Queue.prototype._makeCapacity = function Queue$_makeCapacity() {
    var len = this._capacity;
    for (var i = 0; i < len; ++i) {
        this[i] = void 0;
    }
};

Queue.prototype._checkCapacity = function Queue$_checkCapacity(size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 3);
    }
};

Queue.prototype._resizeTo = function Queue$_resizeTo(capacity) {
    var oldFront = this._front;
    var oldCapacity = this._capacity;
    var oldQueue = new Array(oldCapacity);
    var length = this.length();

    arrayCopy(this, 0, oldQueue, 0, oldCapacity);
    this._capacity = capacity;
    this._makeCapacity();
    this._front = 0;
    if (oldFront + length <= oldCapacity) {
        arrayCopy(oldQueue, oldFront, this, 0, length);
    } else {        var lengthBeforeWrapping =
            length - ((oldFront + length) & (oldCapacity - 1));

        arrayCopy(oldQueue, oldFront, this, 0, lengthBeforeWrapping);
        arrayCopy(oldQueue, 0, this, lengthBeforeWrapping,
                    length - lengthBeforeWrapping);
    }
};

module.exports = Queue;

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvaW5kZXguanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L25vZGUuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L3dlYi5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvcnVudGltZS9pbmRleC5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvYnJvd3NlcmlmeTItbGlzdC5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvc2NoZWR1bGVyL2luZGV4LmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC91dGlsL2NvbXBvbmVudC1sb2FkZXIuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L2NvcmUvY291bnRkb3duLWxhdGNoLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9jb3JlL29wdGlvbnMuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L2NvcmUvbGFuZy5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvY29yZS9zdGF0ZS1ndWFyZC5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvY29yZS9wdWItc3ViLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9jb2xsZWN0aW9uL2RvdWJseS1saW5rZWQtbGlzdC5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvc3RvcmFnZS9pbi1tZW1vcnktZGF0YS1zdG9yZS5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvc3RvcmFnZS9jYWNoaW5nLWRhdGEtc3RvcmUuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L3N0b3JhZ2UvbHJ1LWRhdGEtc3RvcmUuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L2FwcGtpdC9jb25maWd1cmF0aW9uLW1hZ2ljLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9hcHBraXQvYXBwLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9sb2dnaW5nL2xvZ2dlci5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvcmVhY3RpdmUvcmVhY3Rvci5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvdXRpbC9jb21wb25lbnQtcmVnaXN0cnkuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L2NvbGxlY3Rpb24vb2JqZWN0LWhhc2gtbWFwLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9jb2xsZWN0aW9uL2xydS1oYXNoLW1hcC5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS91bmRlcnNjb3JlLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9jb3JlL3NlcXVlbmNlci91bml0LXNlcXVlbmNlci5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvY29yZS9zZXF1ZW5jZXIvY2xvY2stc2VxdWVuY2VyLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9jb3JlL3NlcXVlbmNlci9kZWxlZ2F0aW5nLWZvcndhcmRpbmctc2VxdWVuY2VyLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9jb3JlL3NlcXVlbmNlci9kZWxlZ2F0aW5nLWNvbXBvc2l0ZS1zZXF1ZW5jZXIuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L3RpbWUvY2xvY2svbG9naWNhbC1jbG9jay5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvdGltZS9jbG9jay9zeXN0ZW0tY2xvY2suanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L2FwcGtpdC9jb25maWcvc2NvcGVkLWNvbmZpZ3VyYXRpb24uanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L2FwcGtpdC9jb25maWcvc2NvcGVkLWNvbmZpZ3VyYXRpb24tcmVzb2x2ZXIuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L2xvZ2dpbmcvYXBwZW5kZXJzL2NvbnNvbGUtbG9nLWFwcGVuZGVyLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9jb3JlL3JlZi9pbmRleC5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9ibHVlYmlyZC5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvYXBwa2l0L2Jvb3RzdHJhcHBlci5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvYXBwa2l0L3dlYi1hcHAtY29udGFpbmVyLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9zY2hlZHVsZXIvd2ViLXNjaGVkdWxlci5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvcmVhY3RpdmUvcmVhY3RpdmUtbm9kZS5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvcnVudGltZS9kZWZhdWx0LXJ1bnRpbWUuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L2FwcGtpdC9pbnRlcm5hbC9wcm9jZXNzLWtlZXAtYWxpdmUuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L2NvcmUvcmVmL3JlZi5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvY29yZS9yZWYvZGVsZWdhdGluZy1yZWYuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkyL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9wcm9taXNlLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9yZWFjdGl2ZS9maWx0ZXItdHJhbnNmb3JtLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9yZWFjdGl2ZS9tYXAtdHJhbnNmb3JtLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9yZWFjdGl2ZS90cmFuc2Zvcm0tY2hhaW4uanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L3JlYWN0aXZlL3RyYW5zZm9ybS5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9zeW5jaHJvbm91c19pbnNwZWN0aW9uLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2ZpbHRlci5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9hbnkuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vZWFjaC5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvY29yZS9zY2hlZHVsZXIvc2V0LXRpbWVvdXQtc2NoZWR1bGVyLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3V0aWwuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vYXN5bmMuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vZXJyb3JzLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3RoZW5hYmxlcy5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9wcm9taXNlX2FycmF5LmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2NhcHR1cmVkX3RyYWNlLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2NhdGNoX2ZpbHRlci5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9maW5hbGx5LmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3Byb21pc2VfcmVzb2x2ZXIuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vZGlyZWN0X3Jlc29sdmUuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vam9pbi5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9yYWNlLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2NhbGxfZ2V0LmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2dlbmVyYXRvcnMuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vbWFwLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL25vZGVpZnkuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vcmVkdWNlLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3NldHRsZS5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9zb21lLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3Byb2dyZXNzLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2NhbmNlbC5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi91c2luZy5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9lcnJvcnNfYXBpX3JlamVjdGlvbi5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi90aW1lcnMuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vcHJvbWlzaWZ5LmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3Byb3BzLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2VzNS5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9zY2hlZHVsZS5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9xdWV1ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZLQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2gwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdmhDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgQ29tcG9uZW50UmVnaXN0cnksXG4gIHdlYkFsaWFzZXMsXG4gIG5vZGVBbGlhc2VzXG4pIHtcbiAgdmFyIGMgPSBuZXcgQ29tcG9uZW50UmVnaXN0cnkoKTtcblxuXG4gIGMucmVnaXN0ZXJNYW55KFtcbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL3V0aWwvY29tcG9uZW50LWxvYWRlclwiKSxcbiAgICAgIGFzOiBcImNvbXBvbmVudC1sb2FkZXJcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2NvcmUvY291bnRkb3duLWxhdGNoXCIpLFxuICAgICAgYXM6IFwiY291bnRkb3duLWxhdGNoXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9jb3JlL29wdGlvbnNcIiksXG4gICAgICBhczogXCJvcHRpb25zXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9jb3JlL2xhbmdcIiksXG4gICAgICBhczogXCJsYW5nXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9jb3JlL3JlZlwiKSxcbiAgICAgIGFzOiBcInJlZlwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIG1vZHVsZTogcmVxdWlyZShcIi4vY29yZS9zdGF0ZS1ndWFyZFwiKSxcbiAgICAgIGFzOiBcInN0YXRlLWd1YXJkXCJcbiAgICB9LFxuXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2NvcmUvcHViLXN1YlwiKSxcbiAgICAgIGFzOiBcInB1Yi1zdWJcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2NvcmUvc2VxdWVuY2VyL3VuaXQtc2VxdWVuY2VyXCIpLFxuICAgICAgYXM6IFtcInVuaXQtc2VxdWVuY2VyXCIsIFwic2VxdWVuY2VyXCJdXG4gICAgfSxcblxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9jb3JlL3NlcXVlbmNlci9jbG9jay1zZXF1ZW5jZXJcIiksXG4gICAgICBhczogXCJjbG9jay1zZXF1ZW5jZXJcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2NvcmUvc2VxdWVuY2VyL2RlbGVnYXRpbmctY29tcG9zaXRlLXNlcXVlbmNlclwiKSxcbiAgICAgIGFzOiBcImRlbGVnYXRpbmctY29tcG9zaXRlLXNlcXVlbmNlclwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIG1vZHVsZTogcmVxdWlyZShcIi4vY29yZS9zZXF1ZW5jZXIvZGVsZWdhdGluZy1mb3J3YXJkaW5nLXNlcXVlbmNlclwiKSxcbiAgICAgIGFzOiBcImRlbGVnYXRpbmctZm9yd2FyZGluZy1zZXF1ZW5jZXJcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2NvbGxlY3Rpb24vZG91Ymx5LWxpbmtlZC1saXN0XCIpLFxuICAgICAgYXM6IFwiZG91Ymx5LWxpbmtlZC1saXN0XCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9jb2xsZWN0aW9uL29iamVjdC1oYXNoLW1hcFwiKSxcbiAgICAgIGFzOiBbXCJoYXNoLW1hcFwiLCBcIm9iamVjdC1oYXNoLW1hcFwiXVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2NvbGxlY3Rpb24vbHJ1LWhhc2gtbWFwXCIpLFxuICAgICAgYXM6IFwibHJ1LWhhc2gtbWFwXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9zdG9yYWdlL2NhY2hpbmctZGF0YS1zdG9yZVwiKSxcbiAgICAgIGFzOiBcImNhY2hpbmctZGF0YS1zdG9yZVwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIG1vZHVsZTogcmVxdWlyZShcIi4vc3RvcmFnZS9pbi1tZW1vcnktZGF0YS1zdG9yZVwiKSxcbiAgICAgIGFzOiBcImluLW1lbW9yeS1kYXRhLXN0b3JlXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9zdG9yYWdlL2xydS1kYXRhLXN0b3JlXCIpLFxuICAgICAgYXM6IFwibHJ1LWRhdGEtc3RvcmVcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL3RpbWUvY2xvY2svbG9naWNhbC1jbG9ja1wiKSxcbiAgICAgIGFzOiBcImxvZ2ljYWwtY2xvY2tcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL3RpbWUvY2xvY2svc3lzdGVtLWNsb2NrXCIpLFxuICAgICAgYXM6IFwic3lzdGVtLWNsb2NrXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9hcHBraXQvY29uZmlndXJhdGlvbi1tYWdpY1wiKSxcbiAgICAgIGFzOiBcImNvbmZpZ3VyYXRpb24tbWFnaWNcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2FwcGtpdC9jb25maWcvc2NvcGVkLWNvbmZpZ3VyYXRpb24tcmVzb2x2ZXJcIiksXG4gICAgICBhczogXCJzY29wZWQtY29uZmlndXJhdGlvbi1yZXNvbHZlclwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIG1vZHVsZTogcmVxdWlyZShcIi4vYXBwa2l0L2NvbmZpZy9zY29wZWQtY29uZmlndXJhdGlvblwiKSxcbiAgICAgIGFzOiBbXCJzY29wZWQtY29uZmlndXJhdGlvblwiLCBcImNvbmZpZy9zY29wZWQtY29uZmlndXJhdGlvblwiXVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2FwcGtpdC9hcHBcIiksXG4gICAgICBhczogXCJhcHBcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL3J1bnRpbWVcIiksXG4gICAgICBhczogXCJydW50aW1lXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9sb2dnaW5nL2xvZ2dlclwiKSxcbiAgICAgIGFzOiBcImxvZ2dlclwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIG1vZHVsZTogcmVxdWlyZShcIi4vbG9nZ2luZy9hcHBlbmRlcnMvY29uc29sZS1sb2ctYXBwZW5kZXJcIiksXG4gICAgICBhczogW1wiYXBwZW5kZXJzL2NvbnNvbGUtbG9nXCIsIFwiY29uc29sZS1sb2ctYXBwZW5kZXJcIl1cbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9yZWFjdGl2ZS9yZWFjdG9yXCIpLFxuICAgICAgYXM6IFwicmVhY3RvclwiXG4gICAgfVxuICBdKTtcblxuICBjLnNlbGZSZWdpc3Rlcih7XG4gICAgYXM6IFwiY29tcG9uZW50LXJlZ2lzdHJ5XCJcbiAgfSk7XG5cbiAgd2ViQWxpYXNlcyhjKTtcbiAgbm9kZUFsaWFzZXMoYyk7XG5cbiAgcmV0dXJuIGM7XG59O1xuXG52YXIgZyA9ICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8ge30gOiB3aW5kb3cpO1xuZy50aGlja2V0ID0gbW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCIuL3V0aWwvY29tcG9uZW50LXJlZ2lzdHJ5XCIpLFxuICByZXF1aXJlKFwiLi93ZWJcIiksXG4gIHJlcXVpcmUoXCIuL25vZGVcIilcbik7XG5cbn0pKCkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGMpIHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjKSB7XG4gIGMucmVnaXN0ZXJNYW55KFtcbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2FwcGtpdC9ib290c3RyYXBwZXJcIiksXG4gICAgICBhczogXCJib290c3RyYXBwZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9hcHBraXQvd2ViLWFwcC1jb250YWluZXJcIiksXG4gICAgICBhczogXCJhcHAtY29udGFpbmVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG1vZHVsZTogcmVxdWlyZShcIi4vc2NoZWR1bGVyL3dlYi1zY2hlZHVsZXJcIiksXG4gICAgICBhczogXCJzY2hlZHVsZXJcIlxuICAgIH1cbiAgXSk7XG5cbiAgcmVxdWlyZShcIi4vYnJvd3NlcmlmeTItbGlzdFwiKTtcbn07XG4iLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZGVmYXVsdC1ydW50aW1lXCIpO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7cmVxdWlyZShcIi4vYXBwa2l0L2FwcC5qc1wiKTtcbnJlcXVpcmUoXCIuL2FwcGtpdC9ib290c3RyYXBwZXIuanNcIik7XG5yZXF1aXJlKFwiLi9hcHBraXQvY29uZmlnL3Njb3BlZC1jb25maWd1cmF0aW9uLXJlc29sdmVyLmpzXCIpO1xucmVxdWlyZShcIi4vYXBwa2l0L2NvbmZpZy9zY29wZWQtY29uZmlndXJhdGlvbi5qc1wiKTtcbnJlcXVpcmUoXCIuL2FwcGtpdC9jb25maWd1cmF0aW9uLW1hZ2ljLmpzXCIpO1xucmVxdWlyZShcIi4vYXBwa2l0L2ludGVybmFsL3Byb2Nlc3Mta2VlcC1hbGl2ZS5qc1wiKTtcbnJlcXVpcmUoXCIuL2FwcGtpdC93ZWItYXBwLWNvbnRhaW5lci5qc1wiKTtcbnJlcXVpcmUoXCIuL2NvbGxlY3Rpb24vZG91Ymx5LWxpbmtlZC1saXN0LmpzXCIpO1xucmVxdWlyZShcIi4vY29sbGVjdGlvbi9scnUtaGFzaC1tYXAuanNcIik7XG5yZXF1aXJlKFwiLi9jb2xsZWN0aW9uL29iamVjdC1oYXNoLW1hcC5qc1wiKTtcbnJlcXVpcmUoXCIuL2NvcmUvY291bnRkb3duLWxhdGNoLmpzXCIpO1xucmVxdWlyZShcIi4vY29yZS9sYW5nLmpzXCIpO1xucmVxdWlyZShcIi4vY29yZS9vcHRpb25zLmpzXCIpO1xucmVxdWlyZShcIi4vY29yZS9wdWItc3ViLmpzXCIpO1xucmVxdWlyZShcIi4vY29yZS9yZWYvZGVsZWdhdGluZy1yZWYuanNcIik7XG5yZXF1aXJlKFwiLi9jb3JlL3JlZi9pbmRleC5qc1wiKTtcbnJlcXVpcmUoXCIuL2NvcmUvcmVmL3JlZi5qc1wiKTtcbnJlcXVpcmUoXCIuL2NvcmUvc2NoZWR1bGVyL3NldC10aW1lb3V0LXNjaGVkdWxlci5qc1wiKTtcbnJlcXVpcmUoXCIuL2NvcmUvc2VxdWVuY2VyL2Nsb2NrLXNlcXVlbmNlci5qc1wiKTtcbnJlcXVpcmUoXCIuL2NvcmUvc2VxdWVuY2VyL2RlbGVnYXRpbmctY29tcG9zaXRlLXNlcXVlbmNlci5qc1wiKTtcbnJlcXVpcmUoXCIuL2NvcmUvc2VxdWVuY2VyL2RlbGVnYXRpbmctZm9yd2FyZGluZy1zZXF1ZW5jZXIuanNcIik7XG5yZXF1aXJlKFwiLi9jb3JlL3NlcXVlbmNlci91bml0LXNlcXVlbmNlci5qc1wiKTtcbnJlcXVpcmUoXCIuL2NvcmUvc3RhdGUtZ3VhcmQuanNcIik7XG5yZXF1aXJlKFwiLi9pbmRleC5qc1wiKTtcbnJlcXVpcmUoXCIuL2xvZ2dpbmcvYXBwZW5kZXJzL2NvbnNvbGUtbG9nLWFwcGVuZGVyLmpzXCIpO1xucmVxdWlyZShcIi4vbG9nZ2luZy9sb2dnZXIuanNcIik7XG5yZXF1aXJlKFwiLi9ub2RlLmpzXCIpO1xucmVxdWlyZShcIi4vcmVhY3RpdmUvZmlsdGVyLXRyYW5zZm9ybS5qc1wiKTtcbnJlcXVpcmUoXCIuL3JlYWN0aXZlL21hcC10cmFuc2Zvcm0uanNcIik7XG5yZXF1aXJlKFwiLi9yZWFjdGl2ZS9yZWFjdGl2ZS1ub2RlLmpzXCIpO1xucmVxdWlyZShcIi4vcmVhY3RpdmUvcmVhY3Rvci5qc1wiKTtcbnJlcXVpcmUoXCIuL3JlYWN0aXZlL3RyYW5zZm9ybS1jaGFpbi5qc1wiKTtcbnJlcXVpcmUoXCIuL3JlYWN0aXZlL3RyYW5zZm9ybS5qc1wiKTtcbnJlcXVpcmUoXCIuL3J1bnRpbWUvZGVmYXVsdC1ydW50aW1lLmpzXCIpO1xucmVxdWlyZShcIi4vcnVudGltZS9pbmRleC5qc1wiKTtcbnJlcXVpcmUoXCIuL3NjaGVkdWxlci9pbmRleC5qc1wiKTtcbnJlcXVpcmUoXCIuL3NjaGVkdWxlci93ZWItc2NoZWR1bGVyLmpzXCIpO1xucmVxdWlyZShcIi4vc3RvcmFnZS9jYWNoaW5nLWRhdGEtc3RvcmUuanNcIik7XG5yZXF1aXJlKFwiLi9zdG9yYWdlL2luLW1lbW9yeS1kYXRhLXN0b3JlLmpzXCIpO1xucmVxdWlyZShcIi4vc3RvcmFnZS9scnUtZGF0YS1zdG9yZS5qc1wiKTtcbnJlcXVpcmUoXCIuL3RpbWUvY2xvY2svbG9naWNhbC1jbG9jay5qc1wiKTtcbnJlcXVpcmUoXCIuL3RpbWUvY2xvY2svc3lzdGVtLWNsb2NrLmpzXCIpO1xucmVxdWlyZShcIi4vdXRpbC9jb21wb25lbnQtbG9hZGVyLmpzXCIpO1xucmVxdWlyZShcIi4vdXRpbC9jb21wb25lbnQtcmVnaXN0cnkuanNcIik7XG5yZXF1aXJlKFwiLi93ZWIuanNcIik7XG5cbn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi93ZWItc2NoZWR1bGVyXCIpO1xuIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgZmFjdG9yeSA9IGZ1bmN0aW9uKFxuICBfLFxuICBPcHRpb25zXG4pIHtcbiAgdmFyIENvbXBvbmVudExvYWRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKENvbXBvbmVudExvYWRlci5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihyZXF1aXJlRnVuKSB7XG4gICAgICB0aGlzLl9yZXF1aXJlRnVuID0gcmVxdWlyZUZ1bjtcbiAgICAgIHRoaXMuX2FsaWFzZXMgPSB7fTtcbiAgICAgIHRoaXMuX3BhdGhUcmFuc2Zvcm0gPSBmdW5jdGlvbihpZCkgeyByZXR1cm4gaWQ7fTtcbiAgICB9LFxuXG4gICAgc2V0UGF0aFRyYW5zZm9ybTogZnVuY3Rpb24ocGF0aFRyYW5zZm9ybSkge1xuICAgICAgdGhpcy5fcGF0aFRyYW5zZm9ybSA9IHBhdGhUcmFuc2Zvcm07XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgYWxpYXM6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIG9wdHMgPSBPcHRpb25zLmZyb21PYmplY3Qob3B0cyk7XG4gICAgICB2YXIgYWxpYXNOYW1lICA9IG9wdHMuZ2V0T3JFcnJvcihcImFzXCIpO1xuICAgICAgdGhpcy5fYWxpYXNlc1thbGlhc05hbWVdID0gb3B0cy5nZXRPckVycm9yKFwibW9kdWxlXCIpO1xuICAgIH0sXG5cbiAgICBidWxrQWxpYXM6IGZ1bmN0aW9uKGFsaWFzZXMpIHtcbiAgICAgIF8uZWFjaChhbGlhc2VzLCBmdW5jdGlvbihhbGlhc05hbWVzLCBtb2R1bGVOYW1lKSB7XG4gICAgICAgIGlmICghXy5pc0FycmF5KGFsaWFzTmFtZXMpKSB7XG4gICAgICAgICAgYWxpYXNOYW1lcyA9IFthbGlhc05hbWVzXVxuICAgICAgICB9XG4gICAgICAgIF8uZWFjaChhbGlhc05hbWVzLCBmdW5jdGlvbihhbGlhc05hbWUpIHtcbiAgICAgICAgICB0aGlzLmFsaWFzKHttb2R1bGU6IG1vZHVsZU5hbWUsIGFzOiBhbGlhc05hbWV9KTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50OiBmdW5jdGlvbihhbGlhcykge1xuICAgICAgdmFyIG1vZCA9IHRoaXMuX2FsaWFzZXNbYWxpYXNdO1xuICAgICAgaWYgKCFtb2QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhbGlhcyBwcm92aWRlZCAobm8gc3VjaCBtb2R1bGUpOiBgXCIrYWxpYXMrXCInXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVGdW4odGhpcy5fcGF0aFRyYW5zZm9ybShtb2QpKTtcbiAgICB9LFxuXG4gICAgYzogZnVuY3Rpb24oYWxpYXMpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIENvbXBvbmVudExvYWRlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL29wdGlvbnNcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG52YXIgbW9kID0gZnVuY3Rpb24gKFxuICBfXG4gICkge1xuXG4gIHZhciBDb3VudGRvd25MYXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9LFxuICAgICAgbm9vcCA9IGZ1bmN0aW9uKCkge307XG5cbiAgXy5leHRlbmQoQ291bnRkb3duTGF0Y2gucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKHN0ZXBzLCBjb21wbGV0aW9uQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuX3N0ZXBzID0gc3RlcHMgfHwgMDtcbiAgICAgIHRoaXMuX2NvbXBsZXRpb25DYWxsYmFjayA9IGNvbXBsZXRpb25DYWxsYmFjayB8fCBub29wO1xuICAgICAgXy5iaW5kQWxsKHRoaXMsIFwiX2NvbXBsZXRpb25DYWxsYmFja1wiLCBcIl90cmlnZ2VyQ29tcGxldGlvblwiKTtcbiAgICAgIGlmKGlzTmFOKHRoaXMuX3N0ZXBzKSB8fCB0aGlzLl9zdGVwcyA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bnRkb3duTGF0Y2g6IE51bWJlciBvZiBzdGVwcyBhcmUgaW52YWxpZC5cIik7XG4gICAgICB9XG4gICAgICB0aGlzLl9jdXJyZW50ID0gMDtcbiAgICAgIHRoaXMuX2NvbXBsZXRlID0gZmFsc2U7XG4gICAgICB0aGlzLl9lcnJvciA9IG51bGw7XG4gICAgICBpZih0aGlzLl9zdGVwcyA9PT0gMCkge1xuICAgICAgICBfLmRlZmVyKHRoaXMuX3RyaWdnZXJDb21wbGV0aW9uKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3RlcDogZnVuY3Rpb24gKHN0ZXBzKSB7XG4gICAgICBpZiAodGhpcy5fY29tcGxldGUgfHwgdGhpcy5fc3RlcHMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY3VycmVudCArPSBzdGVwcyB8fCAxO1xuICAgICAgaWYgKHRoaXMuX2N1cnJlbnQgPj0gdGhpcy5fc3RlcHMpIHtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckNvbXBsZXRpb24oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBpZiAodGhpcy5fY29tcGxldGUgfHwgdGhpcy5fc3RlcHMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fZXJyb3IgPSBlcnI7XG4gICAgICB0aGlzLl90cmlnZ2VyQ29tcGxldGlvbigpO1xuICAgIH0sXG4gICAgX3RyaWdnZXJDb21wbGV0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5fY29tcGxldGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29tcGxldGUgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuX2Vycm9yKSB7XG4gICAgICAgIF8uZGVmZXIoXy5iaW5kKHRoaXMuX2NvbXBsZXRpb25DYWxsYmFjaywgbnVsbCwgdGhpcy5fZXJyb3IpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF8uZGVmZXIodGhpcy5fY29tcGxldGlvbkNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBDb3VudGRvd25MYXRjaDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGZhY3RvcnkgPSBmdW5jdGlvbihcbiAgX1xuKSB7XG5cbiAgLyoqXG4gICAqXG4gICAqIEhlbHBlciBmb3IgZGVhbGluZyB3aXRoIGhhc2gtc3R5bGUgZnVuY3Rpb24gYXJndW1lbnRzLCB3aGljaCBjYW4gYmUgdXNlZnVsXG4gICAqIGluIG1ldGhvZHMgd2l0aCBvcHRpb25hbC9kZWZhdWx0IHZhbHVlcy5cbiAgICpcbiAgICogVXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIGZvbyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICogICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcbiAgICpcbiAgICogICAgICAgdmFyIG9uZSA9IG9wdHMuZ2V0T3JFcnJvcihcIm9uZVwiKSxcbiAgICogICAgICAgICAgIHR3byA9IG9wdHMuZ2V0T3JFbHNlKFwidHdvXCIsIDIpLFxuICAgKiAgICAgICAgICAgdGhyZWUgPSBvcHRzLmdldE9yRWxzZUZuKFwidGhyZWVcIiwgZnVuY3Rpb24oKSB7XG4gICAqICAgICAgICAgICAgIHJldHVybiAzO1xuICAgKiAgICAgICAgICAgfSk7XG4gICAqXG4gICAqICAgICBjb25zb2xlLmxvZyhvbmUsIHR3bywgdGhyZWUpO1xuICAgKiAgIH07XG4gICAqXG4gICAqICAgZm9vKHsgb25lOiAxIH0pOyAvLyBsb2dzIFwiMSwgMiwgM1wiXG4gICAqICAgZm9vKCk7IC8vIHRocm93cyBFcnJvclxuICAgKiAgIGZvbyh7b25lOiAxLCB0d286IGZhbHNlLCB0aHJlZTogNH0pOyAvLyBsb2dzIFwiMSwgZmFsc2UsIDRcIlxuICAgKlxuICAgKi9cbiAgdmFyIE9wdGlvbnMgPSBmdW5jdGlvbihvcHRzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfLmV4dGVuZChPcHRpb25zLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIHRoaXMuX3Byb3ZpZGVkT3B0cyA9IG9wdHMgfHwge307XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIHJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSByZXF1ZXN0ZWQgYGtleWAuIElmIHRoZSB2YWx1ZVxuICAgICAqIGlzIHVuZGVmaW5lZCBvciBudWxsLCBpbnN0ZWFkIHJldHVybnMgdGhlIHByb3ZpZGVkIGBmYWxsYmFja1ZhbHVlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgKHJlcXVpcmVkKSBhdHRyaWJ1dGUgdG8gYmUgcmVhZFxuICAgICAqIEBwYXJhbSBmYWxsYmFja1ZhbHVlICByZXR1cm5lZCBpZiBga2V5YCBhdHRyaWJ1dGUgaXMgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHJlcXVlc3RlZCB2YWx1ZSBmb3IgYGtleWAsIG9yIGZhbGxiYWNrVmFsdWVgXG4gICAgICovXG4gICAgZ2V0T3JFbHNlOiBmdW5jdGlvbihrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMuX2lzVW5kZWZPck51bGwoa2V5KSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3ZpZGVkT3B0c1trZXldO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byByZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIGBrZXlgLiBJZiB0aGUgdmFsdWVcbiAgICAgKiBpcyB1bmRlZmluZWQgb3IgbnVsbCwgdGhyb3dzIGFuIGVycm9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSAocmVxdWlyZWQpIGF0dHJpYnV0ZSB0byBiZSByZWFkXG4gICAgICogQHBhcmFtIGVyciAgICAgICAgICAgIG1lc3NhZ2UgcHJvdmlkZWQgdG8gRXJyb3IgY29uc3RydWN0b3IgaWYgYGtleWBcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgaXMgbnVsbCBvciBub3QgZGVmaW5lZFxuICAgICAqXG4gICAgICogQHJldHVybnMgdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIGtleVxuICAgICAqL1xuICAgIGdldE9yRXJyb3I6IGZ1bmN0aW9uKGtleSwgZXJyb3JNc2cpIHtcbiAgICAgIGlmICh0aGlzLl9pc1VuZGVmT3JOdWxsKGtleSkpIHtcbiAgICAgICAgZXJyb3JNc2cgPSBlcnJvck1zZyB8fCBcIk9wdGlvbiByZXF1ZXN0ZWQgYnV0IG5vdCBmb3VuZDogYFwiK2tleStcImBcIjtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTXNnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3Byb3ZpZGVkT3B0c1trZXldO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byByZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIGBrZXlgLiBJZiB0aGUgdmFsdWVcbiAgICAgKiBpcyB1bmRlZmluZWQgb3IgbnVsbCwgaW5zdGVhZCBldmFsdWF0ZXMgYGZhbGxiYWNrVmFsdWVGbmAgYW5kIHJldHVybnNcbiAgICAgKiBpdHMgdmFsdWUuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3Igc2ltdWxhdGluZyBub24tc3RyaWN0IGV2YWx1YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5IChyZXF1aXJlZCkgIGF0dHJpYnV0ZSB0byBiZSByZWFkXG4gICAgICogQHBhcmFtIGZhbGxiYWNrVmFsdWVGbiBldmFsdWF0ZWQgYW5kIHJldHVybiB2YWx1ZSByZXR1cm5lZCBpZiBga2V5YFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlIGlzIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyByZXF1ZXN0ZWQgdmFsdWUgZm9yIGBrZXlgIG9yIHRoZSByZXR1cm4gdmFsdWUgb2YgZXZhbHVhdGVkXG4gICAgICogICAgICAgICAgYGZhbGxiYWNrVmFsdWVGbmBcbiAgICAgKi9cbiAgICBnZXRPckVsc2VGbjogZnVuY3Rpb24oa2V5LCBkZWZhdWx0VmFsdWVGbikge1xuICAgICAgaWYgKHR5cGVvZiBkZWZhdWx0VmFsdWVGbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9wdGlvbnMjZ2V0T3JFbHNlRm4gcmVxdWlyZXMgYSBkZWZhdWx0VmFsdWVGblwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzVW5kZWZPck51bGwoa2V5KSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlRm4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm92aWRlZE9wdHNba2V5XTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2lzVW5kZWZPck51bGw6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9wcm92aWRlZE9wdHNba2V5XSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0aGlzLl9wcm92aWRlZE9wdHNba2V5XSA9PT0gbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIF8uZXh0ZW5kKE9wdGlvbnMsIHtcbiAgICBmcm9tT2JqZWN0OiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICByZXR1cm4gbmV3IE9wdGlvbnMob3B0cyk7XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBPcHRpb25zO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGZhY3RvcnkgPSBmdW5jdGlvbihcbiAgX1xuKSB7XG5cbiAgdmFyIExhbmcgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChMYW5nLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCl7fVxuICB9KTtcblxuICBfLmV4dGVuZChMYW5nLCB7XG4gICAgbm9vcDogZnVuY3Rpb24oKSB7fSxcblxuICAgIHBhcnRpYWxseUFwcGx5OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gXy50b0FycmF5KGFyZ3VtZW50cyksXG4gICAgICAgICAgZnVuICA9IGFyZ3Muc2hpZnQoKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZnVuLmFwcGx5KG51bGwsIGFyZ3MuY29uY2F0KGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBMYW5nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBQcm9taXNlXG4pIHtcblxuICB2YXIgU3RhdGVHdWFyZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKFN0YXRlR3VhcmQucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oc3RhdGVzKSB7XG4gICAgICB0aGlzLl92YWxpZFN0YXRlcyA9IF8ucmVkdWNlKHN0YXRlcywgZnVuY3Rpb24obWVtbywgc3RhdGUpIHtcbiAgICAgICAgbWVtb1tzdGF0ZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgdGhpcy5fYXBwbGllZFN0YXRlcyA9IHt9O1xuICAgIH0sXG5cbiAgICBhcHBseTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc3RhdGVzID0gYXJ5T3JWYXJpYWRpY1RvQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgIGNoZWNrVmFsaWRTdGF0ZXNPclRocm93KHRoaXMuX3ZhbGlkU3RhdGVzLCBzdGF0ZXMpO1xuXG4gICAgICBfLmVhY2goc3RhdGVzLCBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICB0aGlzLl9hcHBsaWVkU3RhdGVzW3N0YXRlXSA9IHRydWU7XG4gICAgICB9LCB0aGlzKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGFwcGx5QXN5bmM6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXBwbHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9KSxcblxuICAgIGFwcGx5QXN5bmNGbjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiBfLmJpbmQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5QXN5bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgdW5hcHBseTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc3RhdGVzID0gYXJ5T3JWYXJpYWRpY1RvQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgIGNoZWNrVmFsaWRTdGF0ZXNPclRocm93KHRoaXMuX3ZhbGlkU3RhdGVzLCBzdGF0ZXMpO1xuXG4gICAgICBfLmVhY2goc3RhdGVzLCBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fYXBwbGllZFN0YXRlc1tzdGF0ZV0pIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fYXBwbGllZFN0YXRlc1tzdGF0ZV07XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgdW5hcHBseUFzeW5jOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnVuYXBwbHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9KSxcblxuICAgIHVuYXBwbHlBc3luY0ZuOiBmdW5jdGlvbihzdGF0ZXMpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgcmV0dXJuIF8uYmluZChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5hcHBseUFzeW5jLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgZGVueTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc3RhdGVzID0gYXJ5T3JWYXJpYWRpY1RvQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgIGNoZWNrVmFsaWRTdGF0ZXNPclRocm93KHRoaXMuX3ZhbGlkU3RhdGVzLCBzdGF0ZXMpO1xuXG4gICAgICB2YXIgYXBwbGllZCA9IF8uZmlsdGVyKHN0YXRlcywgZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGxpZWRTdGF0ZXNbc3RhdGVdO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGlmIChhcHBsaWVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhdGUgZGVuaWFsIHJlcXVlc3RlZCwgYnV0IGFwcGxpZWQ6IFwiICsgcHJldHR5KGFwcGxpZWQpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGRlbnlBc3luYzogUHJvbWlzZS5tZXRob2QoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZW55LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSksXG5cbiAgICBkZW55QXN5bmNGbjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiBfLmJpbmQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbnlBc3luYy5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgfSwgdGhpcyk7XG4gICAgfSxcblxuICAgIGVuc3VyZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc3RhdGVzID0gYXJ5T3JWYXJpYWRpY1RvQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgIGNoZWNrVmFsaWRTdGF0ZXNPclRocm93KHRoaXMuX3ZhbGlkU3RhdGVzLCBzdGF0ZXMpO1xuICAgICAgdmFyIG1pc3NpbmcgPSBfLnJlamVjdChzdGF0ZXMsIGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBsaWVkU3RhdGVzW3N0YXRlXTtcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICBpZiAobWlzc2luZy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN0YXRlIGVuc3VyYW5jZSByZXF1ZXN0ZWQsIGJ1dCBub3QgYXBwbGllZDogXCIgKyBwcmV0dHkobWlzc2luZykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGVuc3VyZUFzeW5jOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmVuc3VyZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0pLFxuXG4gICAgZW5zdXJlQXN5bmNGbjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiBfLmJpbmQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuc3VyZUFzeW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSxcblxuICAgIGFwcGxpZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHN0YXRlcyA9IGFyeU9yVmFyaWFkaWNUb0FycmF5KGFyZ3VtZW50cyk7XG4gICAgICBjaGVja1ZhbGlkU3RhdGVzT3JUaHJvdyh0aGlzLl92YWxpZFN0YXRlcywgc3RhdGVzKTtcblxuICAgICAgcmV0dXJuIF8uZXZlcnkoc3RhdGVzLCBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbGllZFN0YXRlc1tzdGF0ZV07XG4gICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgYXBwbGllZEFzeW5jOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmFwcGxpZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9KSxcblxuICAgIGFwcGxpZWRBc3luY0ZuOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgcmV0dXJuIF8uYmluZChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbGllZEFzeW5jLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICB9LCB0aGlzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBhcnlPclZhcmlhZGljVG9BcnJheSA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICByZXR1cm4gXy5jaGFpbihhcmdzKS50b0FycmF5KCkuZmxhdHRlbigpLnZhbHVlKCk7XG4gIH07XG5cbiAgdmFyIGNoZWNrVmFsaWRTdGF0ZXNPclRocm93ID0gZnVuY3Rpb24odmFsaWRTdGF0ZXNNYXAsIHN0YXRlcykge1xuICAgIHZhciBpbnZhbGlkU3RhdGVzID0gXy5yZWplY3Qoc3RhdGVzLCBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgcmV0dXJuICEhdmFsaWRTdGF0ZXNNYXBbc3RhdGVdO1xuICAgIH0pO1xuXG4gICAgaWYgKGludmFsaWRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzdGF0ZXMgcHJvdmlkZWQ6IFwiICsgcHJldHR5KGludmFsaWRTdGF0ZXMpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHByZXR0eSA9IGZ1bmN0aW9uKHN0YXRlcykge1xuICAgIHJldHVybiBcIltcIitzdGF0ZXMuam9pbihcIixcIikrXCJdXCI7XG4gIH07XG5cbiAgcmV0dXJuIFN0YXRlR3VhcmQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCJibHVlYmlyZFwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfXG4pIHtcblxuICB2YXIgUHViU3ViID0ge1xuICAgIG9uOiBmdW5jdGlvbihldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICAgIHZhciBidWNrZXQgPSB0aGlzLl9fcHViU3ViQnVja2V0KGV2ZW50TmFtZSk7XG4gICAgICBidWNrZXQuc3Vic2NyaWJlKGhhbmRsZXIsIGNvbnRleHQpO1xuICAgIH0sXG4gICAgb2ZmOiBmdW5jdGlvbihldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICAgIHZhciBidWNrZXQgPSB0aGlzLl9fcHViU3ViQnVja2V0KGV2ZW50TmFtZSk7XG4gICAgICBidWNrZXQudW5zdWJzY3JpYmUoaGFuZGxlciwgY29udGV4dCk7XG4gICAgfSxcbiAgICBub3RpZnk6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgICAgICA9IF8udG9BcnJheShhcmd1bWVudHMpLFxuICAgICAgICAgIGV2ZW50TmFtZSA9IGFyZ3Muc2hpZnQoKTtcblxuICAgICAgdmFyIGJ1Y2tldCA9IHRoaXMuX19wdWJTdWJCdWNrZXQoZXZlbnROYW1lKTtcbiAgICAgIGJ1Y2tldC5ub3RpZnkoYXJncyk7XG4gICAgfSxcbiAgICBfX3B1YlN1YkJ1Y2tldDogZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgICB0aGlzLl9fcHViU3ViRXZlbnRzID0gdGhpcy5fX3B1YlN1YkV2ZW50cyB8fCB7fTtcbiAgICAgIHRoaXMuX19wdWJTdWJFdmVudHNbZXZlbnROYW1lXSA9IHRoaXMuX19wdWJTdWJFdmVudHNbZXZlbnROYW1lXSB8fCBuZXcgRXZlbnRCdWNrZXQoZXZlbnROYW1lKTtcbiAgICAgIHJldHVybiB0aGlzLl9fcHViU3ViRXZlbnRzW2V2ZW50TmFtZV07XG4gICAgfVxuICB9O1xuXG4gIHZhciBFdmVudEJ1Y2tldCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKEV2ZW50QnVja2V0LnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgdGhpcy5fZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbihoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2gobmV3IFN1YnNjcmlwdGlvbihoYW5kbGVyLCBjb250ZXh0KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdWJzY3JpcHRpb24gcmVxdWlyZXMgaGFuZGxlcjogXCIgKyB0aGlzLl9ldmVudE5hbWUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICAgIHZhciBzdWJzO1xuICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgc3VicyA9IF8uZmlsdGVyKHRoaXMuX3N1YnNjcmlwdGlvbnMsIGZ1bmN0aW9uKHN1Yikge1xuICAgICAgICAgIHJldHVybiBzdWIubWF0Y2hlcyhoYW5kbGVyLCBjb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJzID0gdGhpcy5fc3Vic2NyaXB0aW9ucztcbiAgICAgIH1cblxuICAgICAgXy5lYWNoKHN1YnMsIGZ1bmN0aW9uKHN1Yikge1xuICAgICAgICBzdWIuZGlzcG9zZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBfLmRpZmZlcmVuY2UodGhpcy5fc3Vic2NyaXB0aW9ucywgc3Vicyk7XG4gICAgfSxcbiAgICBub3RpZnk6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIF8uaW52b2tlKHRoaXMuX3N1YnNjcmlwdGlvbnMsIFwibm90aWZ5XCIsIGFyZ3MpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKFN1YnNjcmlwdGlvbi5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgICB0aGlzLl9oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgIH0sXG4gICAgbWF0Y2hlczogZnVuY3Rpb24oaGFuZGxlciwgY29udGV4dCkge1xuICAgICAgaWYgKHRoaXMuX2NvbnRleHQpIHtcbiAgICAgICAgLy8gQ29tcGFyZSBjb250ZXh0IHJlZnMgYXMgcmVmcyBpZmYgd2UgaGF2ZSBhIGNvbnRleHQgb2JqZWN0XG4gICAgICAgIHJldHVybiAoaGFuZGxlciA9PT0gdGhpcy5faGFuZGxlciAmJiBjb250ZXh0ID09PSB0aGlzLl9jb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSwganVzdCBtYWtlIHN1cmUgd2UgZG9uJ3QgaGF2ZSBhIGNvbnRleHQgKG51bGwgb3IgdW5kZWZpbmVkIGFyZSBmaW5lKVxuICAgICAgICByZXR1cm4gKGhhbmRsZXIgPT09IHRoaXMuX2hhbmRsZXIgJiYgIWNvbnRleHQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbm90aWZ5OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAvLyBXZSBzaG91bGRuJ3QgYmUgY2FsbGVkIGFmdGVyIGRpc3Bvc2UsIGJ1dFxuICAgICAgLy8ganVzdCBpbiBjYXNlLi4uXG4gICAgICBpZiAodGhpcy5faGFuZGxlcikge1xuICAgICAgICB0aGlzLl9oYW5kbGVyLmFwcGx5KHRoaXMuX2NvbnRleHQsIGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJXVEZcIik7XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2hhbmRsZXIgPSBudWxsO1xuICAgICAgdGhpcy5fY29udGV4dCA9IG51bGw7XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBQdWJTdWI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgT3B0aW9uc1xuKSB7XG5cbiAgdmFyIERvdWJseUxpbmtlZExpc3QgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChEb3VibHlMaW5rZWRMaXN0LnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fZnJvbnQgPSBudWxsO1xuICAgICAgdGhpcy5fYmFjayA9IG51bGw7XG4gICAgICB0aGlzLl9zaXplID0gMDtcbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHRoaXMuX2NoZWNrRWxlbWVudElkeE9yVGhyb3coaWR4KTtcbiAgICAgIHZhciBub2RlID0gdGhpcy5fd2Fsa1RvSWR4KGlkeCk7XG4gICAgICByZXR1cm4gbm9kZS52YWx1ZSgpO1xuICAgIH0sXG5cbiAgICBleGlzdHM6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX3dhbGtUb1ZhbHVlKHZhbHVlKTtcbiAgICAgIHJldHVybiAhIW5vZGU7XG4gICAgfSxcblxuICAgIHNpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfSxcblxuICAgIGFkZDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9LFxuXG4gICAgYWRkRnJvbnQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLl9saW5rRnJvbnQodmFsdWUpO1xuICAgIH0sXG5cbiAgICBhZGRCYWNrOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy5fbGlua0JhY2sodmFsdWUpO1xuICAgIH0sXG5cbiAgICByZW1vdmU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX3dhbGtUb1ZhbHVlKHZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzLl91bmxpbmsobm9kZSk7XG4gICAgfSxcblxuICAgIHJlbW92ZUZyb250OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLl9mcm9udCA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIGVsZW1lbnRcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fdW5saW5rRnJvbnQodGhpcy5fZnJvbnQpO1xuICAgIH0sXG5cbiAgICByZW1vdmVCYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLl9iYWNrID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggZWxlbWVudFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl91bmxpbmtCYWNrKHRoaXMuX2JhY2spO1xuICAgIH0sXG5cbiAgICBpbnNlcnRBdEluZGV4OiBmdW5jdGlvbihpZHgsIHZhbHVlKSB7XG4gICAgICB0aGlzLl9jaGVja0lzRWxlbWVudFBvc2l0aW9uT3JUaHJvdyhpZHgpO1xuXG4gICAgICBpZiAoaWR4ID09PSB0aGlzLl9zaXplKSB7XG4gICAgICAgIHRoaXMuYWRkQmFjayh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuX3dhbGtUb0lkeChpZHgpO1xuICAgICAgICB0aGlzLl9saW5rQmVmb3JlKHZhbHVlLCBub2RlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVtb3ZlQXRJbmRleDogZnVuY3Rpb24oaWR4KSB7XG4gICAgICB0aGlzLl9jaGVja0VsZW1lbnRJZHhPclRocm93KGlkeCk7XG4gICAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91bmxpbmtGcm9udCh0aGlzLl9mcm9udCk7XG4gICAgICB9IGVsc2UgaWYgKCBpZHggPT09ICh0aGlzLl9zaXplIC0gMSkgKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91bmxpbmtCYWNrKHRoaXMuX2JhY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLl93YWxrVG9JZHgoaWR4KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VubGluayhub2RlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9mcm9udCxcbiAgICAgICAgICBuZXh0O1xuXG4gICAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBuZXh0ID0gbm9kZS5uZXh0KCk7XG4gICAgICAgIG5vZGUuZGlzcG9zZSgpO1xuICAgICAgICBub2RlID0gbmV4dDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2Zyb250ID0gbnVsbDtcbiAgICAgIHRoaXMuX2JhY2sgID0gbnVsbDtcbiAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgIH0sXG5cbiAgICBfbGlua0Zyb250OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIG9sZEZyb250ID0gdGhpcy5fZnJvbnQsXG4gICAgICAgICAgbmV3Tm9kZSA9IG5ldyBOb2RlKHt2YWx1ZTogdmFsdWV9KTtcbiAgICAgIHRoaXMuX2Zyb250ID0gbmV3Tm9kZTtcblxuICAgICAgaWYgKG9sZEZyb250ID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2JhY2sgPSBuZXdOb2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2xkRnJvbnQuc2V0UHJldihuZXdOb2RlKTtcbiAgICAgICAgbmV3Tm9kZS5zZXROZXh0KG9sZEZyb250KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2l6ZSsrO1xuICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgfSxcblxuICAgIF9saW5rQmFjazogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBvbGRCYWNrID0gdGhpcy5fYmFjayxcbiAgICAgICAgICBuZXdOb2RlID0gbmV3IE5vZGUoe3ZhbHVlOiB2YWx1ZX0pO1xuXG4gICAgICB0aGlzLl9iYWNrID0gbmV3Tm9kZTtcbiAgICAgIGlmIChvbGRCYWNrID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2Zyb250ID0gbmV3Tm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9sZEJhY2suc2V0TmV4dChuZXdOb2RlKTtcbiAgICAgICAgbmV3Tm9kZS5zZXRQcmV2KG9sZEJhY2spO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zaXplKys7XG4gICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICB9LFxuXG4gICAgX2xpbmtCZWZvcmU6IGZ1bmN0aW9uKHZhbHVlLCBub2RlKSB7XG4gICAgICB2YXIgcHJlZCAgICA9IG5vZGUucHJldigpLFxuICAgICAgICAgIG5ld05vZGUgPSBuZXcgTm9kZSh7dmFsdWU6IHZhbHVlLCBwcmV2OiBwcmVkLCBuZXh0OiBub2RlfSk7XG5cbiAgICAgIG5vZGUuc2V0UHJldihuZXdOb2RlKTtcbiAgICAgIGlmIChwcmVkID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2Zyb250ID0gbmV3Tm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZWQuc2V0TmV4dChuZXdOb2RlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NpemUrKztcbiAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgIH0sXG5cbiAgICBfdW5saW5rRnJvbnQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciB2YWx1ZSAgICA9IG5vZGUudmFsdWUoKSxcbiAgICAgICAgICBuZXdGcm9udCA9IG5vZGUubmV4dCgpO1xuXG4gICAgICBub2RlLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuX2Zyb250ID0gbmV3RnJvbnQ7XG4gICAgICBpZiAobmV3RnJvbnQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fYmFjayA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdGcm9udC5zZXRQcmV2KG51bGwpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2l6ZS0tO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG5cbiAgICBfdW5saW5rQmFjazogZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIHZhbHVlICAgPSBub2RlLnZhbHVlKCksXG4gICAgICAgICAgbmV3QmFjayA9IG5vZGUucHJldigpO1xuXG4gICAgICBub2RlLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuX2JhY2sgPSBuZXdCYWNrO1xuICAgICAgaWYgKG5ld0JhY2sgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9mcm9udCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdCYWNrLnNldE5leHQobnVsbCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9zaXplLS07XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcblxuICAgIF91bmxpbms6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBwcmV2ICA9IG5vZGUucHJldigpLFxuICAgICAgICAgIG5leHQgID0gbm9kZS5uZXh0KCksXG4gICAgICAgICAgdmFsdWUgPSBub2RlLnZhbHVlKCk7XG5cbiAgICAgIGlmIChwcmV2ID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2Zyb250ID0gbmV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXYuc2V0TmV4dChuZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fYmFjayA9IHByZXY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0LnNldFByZXYocHJldik7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fc2l6ZS0tO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG5cbiAgICBfd2Fsa1RvSWR4OiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHZhciBub2RlLCBjdXJyZW50O1xuICAgICAgaWYgKGlkeCA8IHRoaXMuX3NpemUgLyAyKSB7XG4gICAgICAgIG5vZGUgPSB0aGlzLl9mcm9udDtcbiAgICAgICAgY3VycmVudCA9IDA7XG4gICAgICAgIHdoaWxlKGN1cnJlbnQgIT09IGlkeCkge1xuICAgICAgICAgIG5vZGUgPSBub2RlLm5leHQoKTtcbiAgICAgICAgICBjdXJyZW50Kys7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSB0aGlzLl9iYWNrO1xuICAgICAgICBjdXJyZW50ID0gdGhpcy5fc2l6ZSAtIDE7XG5cbiAgICAgICAgd2hpbGUoY3VycmVudCAhPT0gaWR4KSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGUucHJldigpO1xuICAgICAgICAgIGN1cnJlbnQtLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIF93YWxrVG9WYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBuID0gdGhpcy5fZnJvbnQ7XG4gICAgICB3aGlsZSAobiAhPT1udWxsICkge1xuICAgICAgICBpZiAobi5tYXRjaCh2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuICAgICAgICBuID0gbi5uZXh0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgX2lzRWxlbWVudElkeDogZnVuY3Rpb24oaWR4KSB7XG4gICAgICByZXR1cm4gKGlkeCA+PSAwICYmIGlkeCA8IHRoaXMuX3NpemUpO1xuICAgIH0sXG5cbiAgICBfaXNFbGVtZW50UG9zaXRpb246IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgcmV0dXJuIChpZHggPj0gMCAmJiBpZHggPD0gdGhpcy5fc2l6ZSk7XG4gICAgfSxcblxuICAgIF9jaGVja0VsZW1lbnRJZHhPclRocm93OiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIGlmICghdGhpcy5faXNFbGVtZW50SWR4KGlkeCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5kZXggb3V0IG9mIGJvdW5kczsgc2l6ZTogXCIgKyB0aGlzLl9zaXplICsgXCI7IGlkeDogXCIgKyBpZHgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfY2hlY2tJc0VsZW1lbnRQb3NpdGlvbk9yVGhyb3c6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0VsZW1lbnRQb3NpdGlvbihpZHgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluZGV4IG91dCBvZiBib3VuZHM7IHNpemU6IFwiICsgdGhpcy5fc2l6ZSArIFwiOyBpZHg6IFwiICsgaWR4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSk7XG5cbiAgdmFyIE5vZGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChOb2RlLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIG9wdHMgICAgICAgID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdGhpcy5fbmV4dCAgPSBvcHRzLmdldE9yRWxzZShcIm5leHRcIiwgbnVsbCk7XG4gICAgICB0aGlzLl9wcmV2ICA9IG9wdHMuZ2V0T3JFbHNlKFwicHJldlwiLCBudWxsKTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gb3B0cy5nZXRPckVsc2UoXCJ2YWx1ZVwiLCBudWxsKTtcbiAgICB9LFxuXG4gICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmV4dDtcbiAgICB9LFxuXG4gICAgcHJldjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcHJldjtcbiAgICB9LFxuXG4gICAgc2V0TmV4dDogZnVuY3Rpb24obm9kZSkge1xuICAgICAgdGhpcy5fbmV4dCA9IG5vZGU7XG4gICAgfSxcblxuICAgIHNldFByZXY6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHRoaXMuX3ByZXYgPSBub2RlO1xuICAgIH0sXG5cbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfSxcblxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fbmV4dCAgPSBudWxsO1xuICAgICAgdGhpcy5fcHJldiAgPSBudWxsO1xuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgIH0sXG5cbiAgICBtYXRjaDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZSA9PT0gdmFsdWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gRG91Ymx5TGlua2VkTGlzdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcIi4uL2NvcmUvb3B0aW9uc1wiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBQcm9taXNlLFxuICBPcHRpb25zLFxuICBPYmplY3RIYXNoTWFwXG4pIHtcblxuICAvKipcbiAgICogSW5NZW1vcnlEYXRhU3RvcmUgZGVsZWdhdGVzIHRvIGEgYmFja2luZyBIYXNoTWFwLiBCeSBkZWZhdWx0LCB0aGlzXG4gICAqIHdpbGwgYmUgYSBcInBvb3IgbWFuJ3MgSGFzaE1hcFwiLCBhLmsuYS4sIHRoZSBPYmplY3RIYXNoTWFwLlxuICAgKi9cbiAgdmFyIEluTWVtb3J5RGF0YVN0b3JlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoSW5NZW1vcnlEYXRhU3RvcmUucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcbiAgICAgIHRoaXMuX21hcCA9IG9wdHMuZ2V0T3JFbHNlRm4oXCJiYWNraW5nSGFzaE1hcFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYmplY3RIYXNoTWFwKCk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0OiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAuZ2V0KGtleSk7XG4gICAgfSksXG5cbiAgICBwdXQ6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKGtleSwgdmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLnB1dChrZXksIHZhbCk7XG4gICAgfSksXG5cbiAgICByZW1vdmU6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC5yZW1vdmUoa2V5KTtcbiAgICB9KSxcblxuICAgIGV4aXN0czogUHJvbWlzZS5tZXRob2QoZnVuY3Rpb24oa2V5KXtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAuZXhpc3RzKGtleSk7XG4gICAgfSksXG5cbiAgICBjbGVhcjogUHJvbWlzZS5tZXRob2QoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLmNsZWFyKCk7XG4gICAgfSlcbiAgfSk7XG5cbiAgcmV0dXJuIEluTWVtb3J5RGF0YVN0b3JlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiYmx1ZWJpcmRcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL29wdGlvbnNcIiksXG4gIHJlcXVpcmUoXCIuLi9jb2xsZWN0aW9uL29iamVjdC1oYXNoLW1hcFwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBQcm9taXNlLFxuICBPcHRpb25zLFxuICBJbk1lbW9yeURhdGFTdG9yZSxcbiAgVW5pdFNlcXVlbmNlclxuKSB7XG5cbiAgLy8gQXBwcm9wcmlhdGUgZm9yIHRoZSBkZWZhdWx0IHNlcXVlbmNlciAobm9uLXRlbXBvcmFsKVxuICB2YXIgREVGQVVMVF9UVEwgPSAxO1xuXG5cbiAgLyoqXG4gICAqIEEgbG9vay1hc2lkZSBjYWNoaW5nIGRhdGEgc3RvcmUuIE5vdGU6IGl0J3MgZ2VuZXJhbGx5IG5vdCB1c2VmdWwgdG8gYWxsb3dcbiAgICogbnVsbC91bmRlZmluZWQgc3RvcmVkIHZhbHVlcy4gV2hlbiBhbiBpdGVtIGlzIGV2aWN0ZWQgZnJvbSB0aGUgY2FjaGUsIGFcbiAgICogc3Vic2VxdWVudCBgZ2V0YCBjYWxsIHdpbGwgcmV0dXJuIGB1bmRlZmluZWRgLCBzbyBpdCBjYW4gYmUgZGlmZmljdWx0IHRvXG4gICAqIGRldGVybWluZSBpZiB0aGVyZSB3YXMgYSBjYWNoZSBtaXNzIGlmIHRoZSB2YWx1ZSB5b3UncmUgc3RvcmluZyBpcywgaW4gZmFjdCxcbiAgICogYHVuZGVmaW5lZGAsIHVubGVzcyB5b3UgcHJlZml4IGV2ZXJ5IGNoZWNrIHdpdGggYGV4aXN0c2AsIHdoaWNoIGFsc28gZG9lc1xuICAgKiBjYWNoZSBldmljdGlvbiBvbiBjaGVjay5cbiAgICovXG4gIHZhciBDYWNoaW5nRGF0YVN0b3JlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoQ2FjaGluZ0RhdGFTdG9yZS5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdGhpcy5fdHRsID0gb3B0cy5nZXRPckVsc2UoXCJ0dGxcIiwgREVGQVVMVF9UVEwpO1xuXG4gICAgICAvLyBEZWZhdWx0IHNlcXVlbmNlciBpcyBhIGxpbmVhci91bml0IHNlcXVlbmNlci4gVGhlIGRlZmF1bHQgVFRMIGlzXG4gICAgICAvLyAxLiBUaGVyZWZvcmUsIGFsbCB2YWx1ZXMgd2lsbCBleHBpcmUgd2l0aCBzaW5nbGUgYWR2YW5jZSBvZiB0aGVcbiAgICAgIC8vIHNlcXVlbmNlci4gTm90ZSB0aGF0IHRoZSBkYXRhIHN0b3JlIGRvZXNuJ3QgYWR2YW5jZSB0aGVcbiAgICAgIC8vIHNlcXVlbmNlciBpdHNlbGYuIFRoZSBzdG9yZSBvd25lciBpcyByZXNwb25zaWJsZSBmb3IgZG9pbmdcbiAgICAgIC8vIHRoaXMuXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBpcyBlc3BlY2lhbGx5IGltcG9ydGFudCB0byBub3RlIGZvciB0aW1lLWJhc2VkIHNlcXVlbmNlcnMuXG4gICAgICAvLyBUaW1lIHdpbGwgbm90IGFkdmFuY2UgYXV0b21hdGljYWxseS4gVGhlIHN0b3JlIG93bmVyIGlzIHJlc3BvbnNpYmxlXG4gICAgICAvLyBmb3Igc2NoZWR1bGluZyB0aGUgc2VxdWVuY2VyIHRvIGFkdmFuY2Ugd2l0aCB0aW1lLiBUaGlzIGtlZXBzIHRoZVxuICAgICAgLy8gQ2FjaGluZ0RhdGFTdG9yZSdzIGxpZmVjeWNsZSBzaW1wbGUgd2l0aCByZXNwZWN0IHRvIHRpbWUuXG4gICAgICB0aGlzLl9zZXF1ZW5jZXIgPSBvcHRzLmdldE9yRWxzZUZuKFwic2VxdWVuY2VyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV3IFVuaXRTZXF1ZW5jZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBCeSBkZWZhdWx0LCB3ZSBkZWxlZ2F0ZSB0byBhbiBpbi1tZW1vcnkgc3RvcmUuIEZpbmUgZm9yIHNpbXBsZVxuICAgICAgLy8gY2FzZXMsIGJ1dCBub3Qgb3B0aW1hbC5cbiAgICAgIHRoaXMuX2JhY2tpbmdTdG9yZSA9IG9wdHMuZ2V0T3JFbHNlRm4oXCJiYWNraW5nU3RvcmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5NZW1vcnlEYXRhU3RvcmUoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBVcGRhdGVzIHRoZSBsYXN0VXBkYXRlZCB0aW1lIHRvIFwibm93XCIgb24gcmVhZCAtIGtlZXBzIGVudHJpZXNcbiAgICAgIC8vIGZyb20gZXhwaXJpbmcgd2hlbiB0aGV5J3JlIGJlaW5nIGFjY2Vzc2VkLCBidXQgY2FuIGNhdXNlXG4gICAgICAvLyBzdGFsZW5lc3MgaXNzdWVzLlxuICAgICAgdGhpcy5fc2hvdWxkVG91Y2hPblJlYWQgPSBvcHRzLmdldE9yRWxzZShcInRvdWNoT25SZWFkXCIsIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgc2VxdWVuY2VyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZXF1ZW5jZXI7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcm92aWRlZCBrZXkuIElmIHRoZSBvYmplY3QgaGFzXG4gICAgICogZXhwaXJlZCwgaXQgd2lsbCBiZSBldmljdGVkIGZyb20gdGhlIGNhY2hlLCBhbmQgYHVuZGVmaW5lZGAgd2lsbFxuICAgICAqIGJlIHJldHVybmVkIGluc3RlYWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IChyZXF1aXJlZClcbiAgICAgKiBAYXN5bmNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSByZXF1ZXN0ZWQgdmFsdWVcbiAgICAgKi9cbiAgICBnZXQ6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIFByb21pc2VcbiAgICAgICAgLmJpbmQodGhpcylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tpbmdTdG9yZS5nZXQoa2V5KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZW50cnkpe1xuICAgICAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWVudHJ5LmlzRXhwaXJlZCh0aGlzLl9zZXF1ZW5jZXIudmFsdWUoKSwgdGhpcy5fdHRsKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3VsZFRvdWNoT25SZWFkKSB7XG4gICAgICAgICAgICAgIGVudHJ5LnRvdWNoKHRoaXMuX3NlcXVlbmNlci52YWx1ZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlXG4gICAgICAgICAgICAgIC5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9iYWNraW5nU3RvcmUucHV0KGtleSwgZW50cnkpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAucmV0dXJuKGVudHJ5LnZhbHVlKCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZVxuICAgICAgICAgICAgICAuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoa2V5KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyAudGhlblJldHVybiBpcyBhIGxpZS5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiBTdG9yZXMgdGhlIHByb3ZpZGVkIGB2YWxgLCBpZGVudGlmaWVkIGJ5IGBrZXlgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYGtleWAge3N0cmluZ30gIChyZXF1aXJlZCkgaWRlbnRpZmllciBmb3IgdmFsdWUgdG8gYmUgc3RvcmVkXG4gICAgICogQHBhcmFtIGB2YWxgIHtkeW5hbWljfSAocmVxdWlyZWQpIHZhbHVlIHRvIGJlIHN0b3JlZFxuICAgICAqIEBhc3luY1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPD59XG4gICAgICovXG4gICAgcHV0OiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbihrZXksIHZhbCkge1xuICAgICAgcmV0dXJuIFByb21pc2VcbiAgICAgICAgLmJpbmQodGhpcylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tpbmdTdG9yZS5nZXQoa2V5KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGFuIGVudHJ5LCB3ZSBzaG91bGQganVzdCB1cGRhdGVcbiAgICAgICAgICAvLyBFbHNlLCB3ZSBtYWtlIG5ldyBvbmUuXG4gICAgICAgICAgLy8gUGVzaXN0LCB0aGVuIHJldHVybiBub3RoaW5nLlxuICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgZW50cnkudXBkYXRlKHZhbCwgdGhpcy5fc2VxdWVuY2VyLnZhbHVlKCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbnRyeSA9IG5ldyBFbnRyeSh7XG4gICAgICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgICAgIGluaXRpYWxTZXF1ZW5jZTogdGhpcy5fc2VxdWVuY2VyLnZhbHVlKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBQcm9taXNlXG4gICAgICAgICAgICAuYmluZCh0aGlzKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLl9iYWNraW5nU3RvcmUucHV0KGtleSwgZW50cnkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJvdmlkZWQgYGtleWBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBga2V5YCB7c3RyaW5nfSAocmVxdWlyZWQpIGlkZW50aWZpZXIgZm9yIHZhbHVlIHRvIGJlIHJlbW92ZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxkeW5hbWljPn0gUmVtb3ZlZCB2YWx1ZSwgaWYgcHJlc2VudCBpbiBzdG9yZS5cbiAgICAgKi9cbiAgICByZW1vdmU6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIHZhbDtcbiAgICAgIHJldHVybiB0aGlzLl9iYWNraW5nU3RvcmVcbiAgICAgICAgLnJlbW92ZShrZXkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICB2YWwgPSBlbnRyeS52YWx1ZSgpO1xuICAgICAgICAgICAgZW50cnkuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pLFxuXG4gICAgZXhpc3RzOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbihrZXkpe1xuICAgICAgLy8gSXQncyBub3Qgc3VmZmljaWVudCB0byBkZWxlZ2F0ZSB0aGlzIGNhbGwgdG8gdGhlIHVuZGVybHlpbmdcbiAgICAgIC8vIGJhY2tpbmcgc3RvcmUuIFdlIG5lZWQgdG8gcGVyZm9ybSBldmljdGlvbiwgYXMgYSBzdWJzZXF1ZW50IGNhbGxcbiAgICAgIC8vIHRvIGdldCB3b3VsZCBkbyB0aGUgc2FtZS4gSWYgdGhlIGBleGlzdHNgIGNoZWNrIHNheXMgaXQgZXhpc3RzLFxuICAgICAgLy8gYmV0IGl0IGRvZXNuJ3Qgd2hlbiB3ZSBgZ2V0YCwgdGhlbiBgZXhpc3RzYCBpcyBhIHdvcnRobGVzcyBvcGVyYXRpb24uXG4gICAgICAvL1xuICAgICAgLy8gTm90ZSB0aGF0IGlmIHlvdSdyZSB1c2luZyBhIENhY2hpbmdEYXRhU3RvcmUgYmFja2VkIGJ5IGFuIEluTWVtb3J5RGF0YVN0b3JlXG4gICAgICAvLyBiYWNrZWQgYnkgYW4gTFJVSGFzaE1hcCwgdGhpcyB3aWxsIGNhdXNlIHRoZSBlbnRyeSB0byBiZSBcInRvdWNoZWRcIiwgd2hlcmVhc1xuICAgICAgLy8gYSBub3JtYWwgXCJleGlzdHNcIiBjaGVjayB3b3VsZCBub3QuXG4gICAgICByZXR1cm4gUHJvbWlzZVxuICAgICAgICAuYmluZCh0aGlzKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fYmFja2luZ1N0b3JlLmdldChrZXkpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoIWVudHJ5LmlzRXhwaXJlZCh0aGlzLl9zZXF1ZW5jZXIudmFsdWUoKSwgdGhpcy5fdHRsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9iYWNraW5nU3RvcmUucmVtb3ZlKGtleSlcbiAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLnRoZW5SZXR1cm4oZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pLFxuXG4gICAgY2xlYXI6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2JhY2tpbmdTdG9yZS5jbGVhcigpO1xuICAgIH0pXG4gIH0pO1xuXG4gIHZhciBFbnRyeSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKEVudHJ5LnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIG9wdHMgPSBPcHRpb25zLmZyb21PYmplY3Qob3B0cyk7XG4gICAgICAvLyBQZXJmZWN0bHkgYWNjZXB0YWJsZSB0byBwYXNzIGluIHVuZGVmaW5lZC4uLlxuICAgICAgdGhpcy5fdmFsdWUgPSBvcHRzLmdldE9yRWxzZShcInZhbHVlXCIsIHVuZGVmaW5lZCk7XG4gICAgICB0aGlzLl9sYXN0U2VxdWVuY2UgPSBvcHRzLmdldE9yRXJyb3IoXCJpbml0aWFsU2VxdWVuY2VcIik7XG4gICAgfSxcblxuICAgIGlzRXhwaXJlZDogZnVuY3Rpb24oc2VxdWVuY2UsIHR0bCkge1xuICAgICAgLy8gRS5nLiwgbGFzdFNlcXVlbmNlID0gNCwgdHRsID0gMSwgc2VxdWVuY2UgPSA1OiBleHBpcmVkXG4gICAgICAvLyAgICAgICBsYXN0U2VxdWVuY2UgPSA0LCB0dGwgPSAxLCBzZXF1ZW5jZSA9IDQ6IG5vdCBleHBpcmVkXG4gICAgICAvLyAgICAgICBsYXN0U2VxdWVuY2UgPSA0LCB0dGwgPSAyLCBzZXF1ZW5jZSA9IDU6IG5vdCBleHBpcmVkXG4gICAgICByZXR1cm4gdGhpcy5fbGFzdFNlcXVlbmNlICsgdHRsIDw9IHNlcXVlbmNlO1xuICAgIH0sXG5cbiAgICB0b3VjaDogZnVuY3Rpb24oc2VxdWVuY2UpIHtcbiAgICAgIHRoaXMuX2xhc3RTZXF1ZW5jZSA9IHNlcXVlbmNlO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uKHZhbCwgc2VxdWVuY2UpIHtcbiAgICAgIHRoaXMuX3ZhbHVlICAgICAgICA9IHZhbDtcbiAgICAgIHRoaXMuX2xhc3RTZXF1ZW5jZSA9IHNlcXVlbmNlO1xuICAgIH0sXG5cbiAgICBkaXNwb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3ZhbHVlICAgICAgICA9IG51bGw7XG4gICAgICB0aGlzLl9sYXN0U2VxdWVuY2UgPSBudWxsO1xuICAgIH0sXG5cbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gQ2FjaGluZ0RhdGFTdG9yZTtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiYmx1ZWJpcmRcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL29wdGlvbnNcIiksXG4gIHJlcXVpcmUoXCIuL2luLW1lbW9yeS1kYXRhLXN0b3JlXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9zZXF1ZW5jZXIvdW5pdC1zZXF1ZW5jZXJcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgT3B0aW9ucyxcbiAgSW5NZW1vcnlEYXRhU3RvcmUsXG4gIExSVUhhc2hNYXBcbikge1xuXG4gIHZhciBMUlVEYXRhU3RvcmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChMUlVEYXRhU3RvcmUucHJvdG90eXBlLCBJbk1lbW9yeURhdGFTdG9yZS5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdmFyIG1hcCA9IG5ldyBMUlVIYXNoTWFwKHtcbiAgICAgICAgY2FwYWNpdHk6IG9wdHMuZ2V0T3JFcnJvcihcImNhcGFjaXR5XCIpXG4gICAgICB9KTtcbiAgICAgIEluTWVtb3J5RGF0YVN0b3JlLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywge1xuICAgICAgICBiYWNraW5nSGFzaE1hcDogbWFwXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBMUlVEYXRhU3RvcmU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL29wdGlvbnNcIiksXG4gIHJlcXVpcmUoXCIuL2luLW1lbW9yeS1kYXRhLXN0b3JlXCIpLFxuICByZXF1aXJlKFwiLi4vY29sbGVjdGlvbi9scnUtaGFzaC1tYXBcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgU2NvcGVkQ29uZmlndXJhdGlvblJlc29sdmVyXG4pIHtcblxuICB2YXIgQ29uZmlndXJhdGlvbk1hZ2ljID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoQ29uZmlndXJhdGlvbk1hZ2ljLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge31cbiAgfSk7XG5cbiAgXy5leHRlbmQoQ29uZmlndXJhdGlvbk1hZ2ljLCB7XG4gICAgcmVzb2x2ZUNvbmZpZzogZnVuY3Rpb24oc2NvcGVzLCBjb25maWdPYmplY3RzKSB7XG4gICAgICB2YXIgciA9IG5ldyBTY29wZWRDb25maWd1cmF0aW9uUmVzb2x2ZXIoKTtcbiAgICAgIF8uZWFjaChjb25maWdPYmplY3RzLCBmdW5jdGlvbihjKSB7XG4gICAgICAgIHIuYWRkKGMpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gci5yZXNvbHZlKHNjb3Blcyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gQ29uZmlndXJhdGlvbk1hZ2ljO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiLi9jb25maWcvc2NvcGVkLWNvbmZpZ3VyYXRpb24tcmVzb2x2ZXJcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgUHJvbWlzZSxcbiAgTG9nZ2VyLFxuICBPcHRpb25zLFxuICBTdGF0ZUd1YXJkLFxuICBSdW50aW1lLFxuICBQcm9jZXNzS2VlcEFsaXZlXG4pIHtcbiAgdmFyIExvZyA9IExvZ2dlci5jcmVhdGUoXCJBcHBcIik7XG5cbiAgdmFyIEFwcCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKEFwcC5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdGhpcy5fZ3VhcmQgPSBuZXcgU3RhdGVHdWFyZChbXCJzdGFydGluZ1wiLCBcInN0YXJ0ZWRcIiwgXCJzdG9wcGluZ1wiLCBcInN0b3BwZWRcIl0pO1xuICAgICAgdGhpcy5fcmF3Q29uZmlnID0gb3B0cy5nZXRPckVycm9yKFwiY29uZmlndXJhdGlvblwiKTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IE9wdGlvbnMuZnJvbU9iamVjdCh0aGlzLl9yYXdDb25maWcpO1xuXG4gICAgICAvLyBUaGUgZGVmYXVsdCBSdW50aW1lIGhhcyBzZW5zaWJsZSBkZWZhdWx0cy5cbiAgICAgIHRoaXMuX3J1bnRpbWUgPSBvcHRzLmdldE9yRWxzZUZuKFwicnVudGltZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSdW50aW1lKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fa2VlcEFsaXZlID0gbmV3IFByb2Nlc3NLZWVwQWxpdmUoe1xuICAgICAgICBzY2hlZHVsZXI6IHRoaXMuX3J1bnRpbWUuc2NoZWR1bGVyKClcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgdXAgICA9IG9wdHMuZ2V0T3JFbHNlKFwidXBcIiksXG4gICAgICAgICAgZG93biA9IG9wdHMuZ2V0T3JFbHNlKFwiZG93blwiKTtcblxuICAgICAgaWYgKHVwKSB7XG4gICAgICAgIHRoaXMudXAgPSBQcm9taXNlLm1ldGhvZChfLmJpbmQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHVwLmNhbGwodGhpcywgdGhpcy5fY29uZmlnKTtcbiAgICAgICAgfSwgdGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZG93bikge1xuICAgICAgICB0aGlzLmRvd24gPSBQcm9taXNlLm1ldGhvZChfLmJpbmQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGRvd24uY2FsbCh0aGlzLCB0aGlzLl9jb25maWcpO1xuICAgICAgICB9LCB0aGlzKSk7XG4gICAgICB9XG5cbiAgICB9LFxuXG4gICAgc3RhcnQ6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgICAgTG9nLmRlYnVnKFwiU3RhcnRpbmcgQXBwXCIpO1xuICAgICAgdGhpcy5fZ3VhcmRcbiAgICAgICAgLmRlbnkoXCJzdGFydGluZ1wiKVxuICAgICAgICAuYXBwbHkoXCJzdGFydGluZ1wiKTtcblxuICAgICAgdGhpcy5fa2VlcEFsaXZlLnN0YXJ0KCk7XG4gICAgICBMb2cuZGVidWcoXCJDYWxsaW5nIEFwcCN1cCgpXCIpO1xuXG4gICAgICByZXR1cm4gdGhpcy51cCgpXG4gICAgICAgIC50aGVuKHRoaXMuX2d1YXJkLmFwcGx5QXN5bmNGbihcInN0YXJ0ZWRcIikpO1xuICAgIH0pLFxuXG4gICAgc3RvcDogUHJvbWlzZS5tZXRob2QoZnVuY3Rpb24oKSB7XG4gICAgICBMb2cuZGVidWcoXCJTdG9wcGluZyBBcHBcIik7XG4gICAgICB0aGlzLl9ndWFyZFxuICAgICAgICAuZGVueShcInN0b3BwaW5nXCIpXG4gICAgICAgIC5hcHBseShcInN0b3BwaW5nXCIpO1xuXG4gICAgICB0aGlzLl9rZWVwQWxpdmUuc3RvcCgpO1xuICAgICAgTG9nLmRlYnVnKFwiQ2FsbGluZyBBcHAjZG93bigpXCIpO1xuXG4gICAgICByZXR1cm4gdGhpcy5kb3duKClcbiAgICAgICAgLnRoZW4odGhpcy5fZ3VhcmQuYXBwbHlBc3luY0ZuKFwic3RvcHBlZFwiKSk7XG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZXF1ZXN0ZWQgY29uZmlndXJhdGlvbiB2YWx1ZSwgb3IgdGhyb3dzIGFuIGVycm9yLlxuICAgICAqIEBwYXJhbSBrZXkgdGhlIGNvbmZpZ3VyYXRpb24ga2V5IHJlcXVlc3QgZnJvbSB0aGUgQ29uZmlndXJhdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGNvbmZpZzogZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLmdldE9yRXJyb3Ioa2V5KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVE9ETzogRG9jLiBTdWJjbGFzcyBzaG91bGQgb3ZlcnJpZGUuXG4gICAgICovXG4gICAgdXA6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKCkge30pLFxuXG4gICAgLyoqXG4gICAgICogVE9ETzogRG9jLiBTdWJjbGFzcyBzaG91bGQgb3ZlcnJpZGUuXG4gICAgICovXG4gICAgZG93bjogUHJvbWlzZS5tZXRob2QoZnVuY3Rpb24oKSB7fSlcbiAgfSk7XG5cbiAgcmV0dXJuIEFwcDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcImJsdWViaXJkXCIpLFxuICByZXF1aXJlKFwiLi4vbG9nZ2luZy9sb2dnZXJcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL29wdGlvbnNcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL3N0YXRlLWd1YXJkXCIpLFxuICByZXF1aXJlKFwiLi4vcnVudGltZVwiKSxcbiAgcmVxdWlyZShcIi4vaW50ZXJuYWwvcHJvY2Vzcy1rZWVwLWFsaXZlXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIFJlZixcbiAgT3B0aW9uc1xuKSB7XG5cbiAgdmFyIExvZ2dlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKExvZ2dlci5wcm90b3R5cGUsIHtcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIG9wdHMgPSBPcHRpb25zLmZyb21PYmplY3Qob3B0cyk7XG4gICAgICB0aGlzLl9uYW1lICAgICAgICAgPSBvcHRzLmdldE9yRWxzZShcIm5hbWVcIiwgXCJEZWZhdWx0XCIpO1xuICAgICAgdGhpcy5fbG9nTGV2ZWwgICAgID0gb3B0cy5nZXRPckVsc2UoXCJsb2dMZXZlbFwiLCBMb2dVdGlsLkxldmVsLkluZm8pO1xuICAgICAgdGhpcy5fcGFyZW50ICAgICAgID0gb3B0cy5nZXRPckVsc2VGbihcInJlZlBhcmVudFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFJlZihudWxsKSB9KTtcblxuICAgICAgdGhpcy5fYXBwZW5kZXJzID0gW107XG4gICAgfSxcblxuICAgIHRyYWNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2xvZyhMb2dVdGlsLkxldmVsLlRyYWNlLCBfLnRvQXJyYXkoYXJndW1lbnRzKSk7XG4gICAgfSxcblxuICAgIGRlYnVnOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2xvZyhMb2dVdGlsLkxldmVsLkRlYnVnLCBfLnRvQXJyYXkoYXJndW1lbnRzKSk7XG4gICAgfSxcblxuICAgIGluZm86IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fbG9nKExvZ1V0aWwuTGV2ZWwuSW5mbywgXy50b0FycmF5KGFyZ3VtZW50cykpO1xuICAgIH0sXG5cbiAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9sb2coTG9nVXRpbC5MZXZlbC5FcnJvciwgXy50b0FycmF5KGFyZ3VtZW50cykpO1xuICAgIH0sXG5cbiAgICBmYXRhbDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9sb2coTG9nVXRpbC5MZXZlbC5GYXRhbCwgXy50b0FycmF5KGFyZ3VtZW50cykpO1xuICAgIH0sXG5cbiAgICBpc1RyYWNlRW5hYmxlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0xvZ0xldmVsRW5hYmxlZChMb2dnZXIuTGV2ZWwuVHJhY2UpO1xuICAgIH0sXG5cbiAgICBpc0RlYnVnRW5hYmxlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0xvZ0xldmVsRW5hYmxlZChMb2dnZXIuTGV2ZWwuRGVidWcpO1xuICAgIH0sXG5cbiAgICBpc0luZm9FbmFibGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzTG9nTGV2ZWxFbmFibGVkKExvZ2dlci5MZXZlbC5JbmZvKTtcbiAgICB9LFxuXG4gICAgaXNFcnJvckVuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNMb2dMZXZlbEVuYWJsZWQoTG9nZ2VyLkxldmVsLkVycm9yKTtcbiAgICB9LFxuXG4gICAgaXNGYXRhbEVuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNMb2dMZXZlbEVuYWJsZWQoTG9nZ2VyLkxldmVsLkZhdGFsKTtcbiAgICB9LFxuXG4gICAgaXNMb2dMZXZlbEVuYWJsZWQ6IGZ1bmN0aW9uKGxvZ0xldmVsKSB7XG4gICAgICB2YXIgY29lcmNlZExvZ0xldmVsID0gYihsb2dMZXZlbCk7XG4gICAgICByZXR1cm4gKHRoaXMuX2xvZ0xldmVsICYgY29lcmNlZExvZ0xldmVsKSA9PT0gY29lcmNlZExvZ0xldmVsO1xuICAgIH0sXG5cbiAgICBhZGRBcHBlbmRlcjogZnVuY3Rpb24oYXBwZW5kZXIpIHtcbiAgICAgIHRoaXMuX2FwcGVuZGVycy5wdXNoKGFwcGVuZGVyKTtcbiAgICB9LFxuXG4gICAgc2V0TG9nTGV2ZWw6IGZ1bmN0aW9uKGxvZ0xldmVsKSB7XG4gICAgICAvLyBTYXZlIGEgY29weSBmb3IgdGhlIHBvdGVudGlhbCBlcnJvciBtZXNzYWdlXG4gICAgICB2YXIgb3JpZ2luYWxMb2dMZXZlbCA9IGxvZ0xldmVsO1xuXG4gICAgICAvLyBJZiBuYW1lIGlzIHNwZWNpZmllZCwgZS5nLiwgXCJJbmZvXCIsIGNvbnZlcnQgdG9cbiAgICAgIC8vIGludFxuICAgICAgaWYgKF8uaXNTdHJpbmcobG9nTGV2ZWwpKSB7XG4gICAgICAgIGxvZ0xldmVsID0gTG9nVXRpbC5MZXZlbFtsb2dMZXZlbF1cbiAgICAgIH1cblxuICAgICAgdmFyIGV4aXN0cyA9IF8uZGV0ZWN0KExvZ1V0aWwuTGV2ZWwsIGZ1bmN0aW9uKGxldmVsLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBsZXZlbCA9PT0gbG9nTGV2ZWw7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2dMZXZlbDogXCIgKyBvcmlnaW5hbExvZ0xldmVsKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbG9nTGV2ZWwgPSBsb2dMZXZlbDtcbiAgICB9LFxuXG5cbiAgICBfbG9nOiBmdW5jdGlvbihsb2dMZXZlbCwgbG9nQXJncykge1xuICAgICAgdGhpcy5fbG9nV2l0aE1ldGFkYXRhKFtdLCBsb2dMZXZlbCwgbG9nQXJncyk7XG4gICAgfSxcblxuICAgIF9sb2dXaXRoTWV0YWRhdGE6IGZ1bmN0aW9uKGRlc2NlbmRhbnRzLCBsb2dMZXZlbCwgYXJncykge1xuICAgICAgaWYgKHRoaXMuaXNMb2dMZXZlbEVuYWJsZWQobG9nTGV2ZWwpKSB7XG4gICAgICAgIF8uZWFjaCh0aGlzLl9hcHBlbmRlcnMsIGZ1bmN0aW9uKGFwcGVuZGVyKSB7XG4gICAgICAgICAgYXBwZW5kZXIubG9nKHRoaXMuX25hbWUsIGRlc2NlbmRhbnRzLCBsb2dMZXZlbCwgTG9nVXRpbC5fTGFiZWxbbG9nTGV2ZWxdLCBhcmdzKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wYXJlbnQuZ2V0KCkpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50LmdldCgpLl9sb2dXaXRoTWV0YWRhdGEoW3RoaXMuX25hbWVdLmNvbmNhdChkZXNjZW5kYW50cyksIGxvZ0xldmVsLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHZhciBMb2dVdGlsID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLy8gQ29lcmNlIChqdXN0IHVzZSByaWdodG1vc3QgOCBiaXRzKSE7IGJlY2F1c2UgSlMgaXMgZHVtYiwgYW5kIGV2ZXJ5dGhpbmcgaXNcbiAgLy8gYWN0dWFsbHkgYSBmbG9hdCB3aXRoIDUzLWJpdCBwcmVjaXNpb25cbiAgdmFyIGIgPSBmdW5jdGlvbih2KSB7XG4gICAgcmV0dXJuIDB4RkYgJiB2O1xuICB9O1xuXG4gIF8uZXh0ZW5kKExvZ1V0aWwsIHtcbiAgICBMZXZlbDoge1xuICAgICAgVHJhY2U6IGIocGFyc2VJbnQoXCIxMTExMVwiLCAyKSksXG4gICAgICBEZWJ1ZzogYihwYXJzZUludChcIjAxMTExXCIsIDIpKSxcbiAgICAgIEluZm86ICBiKHBhcnNlSW50KFwiMDAxMTFcIiwgMikpLFxuICAgICAgRXJyb3I6IGIocGFyc2VJbnQoXCIwMDAxMVwiLCAyKSksXG4gICAgICBGYXRhbDogYihwYXJzZUludChcIjAwMDAxXCIsIDIpKVxuICAgIH1cbiAgfSk7XG5cbiAgXy5leHRlbmQoTG9nVXRpbC5wcm90b3R5cGUsIHtcbiAgICBMZXZlbDogTG9nVXRpbC5MZXZlbCxcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3Jvb3RMb2dnZXIgPSBSZWYobmV3IExvZ2dlcih7XG4gICAgICAgIG5hbWU6IFwiUm9vdFwiXG4gICAgICB9KSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZTogZnVuY3Rpb24obmFtZSwgb3B0cykge1xuICAgICAgb3B0cyA9IF8uY2xvbmUob3B0cyB8fCB7fSk7XG5cbiAgICAgIHZhciBwYXJlbnQ7XG4gICAgICBpZiAob3B0cy5wYXJlbnQpIHtcbiAgICAgICAgcGFyZW50ID0gUmVmKG9wdHMucGFyZW50KTtcbiAgICAgICAgZGVsZXRlKG9wdHMucGFyZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudCA9IFJlZi5kZWxlZ2F0aW5nKHRoaXMuX3Jvb3RMb2dnZXIpO1xuICAgICAgfVxuXG4gICAgICBvcHRzLnJlZlBhcmVudCA9IHBhcmVudDtcblxuICAgICAgb3B0cy5uYW1lID0gbmFtZTtcblxuICAgICAgcmV0dXJuIG5ldyBMb2dnZXIob3B0cyk7XG4gICAgfSxcblxuICAgIHJvb3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jvb3RMb2dnZXIuZ2V0KCk7XG4gICAgfSxcblxuICAgIHJlc2V0Um9vdExvZ2dlcjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9yb290TG9nZ2VyLnNldChuZXcgTG9nZ2VyKHtcbiAgICAgICAgbmFtZTogXCJSb290XCJcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgTG9nVXRpbC5fTGFiZWwgPSBfLnJlZHVjZShMb2dVdGlsLkxldmVsLCBmdW5jdGlvbihtZW1vLCB2YWwsIGtleSkge1xuICAgIG1lbW9bdmFsXSA9IGtleTtcbiAgICByZXR1cm4gbWVtbztcbiAgfSwge30pO1xuXG4gIHJldHVybiBuZXcgTG9nVXRpbCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9yZWZcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL29wdGlvbnNcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgT3B0aW9ucyxcbiAgUmVmLFxuICBSZWFjdGl2ZU5vZGUsXG4gIERlZmF1bHRTY2hlZHVsZXJcbikge1xuXG4gIHZhciBSZWFjdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoUmVhY3Rvci5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdGhpcy5fc2NoZWR1bGVyID0gb3B0cy5nZXRPckVsc2VGbihcInNjaGVkdWxlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFJlZihuZXcgRGVmYXVsdFNjaGVkdWxlcigpKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZnJvbVByb21pc2U6IGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgIHZhciBub2RlID0gbmV3IFJlYWN0aXZlTm9kZSgpO1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgbm9kZS5fYXBwbHkodik7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgbm9kZS5fYXBwbHlFcnJvcihlcnIpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuICAgIGZyb21BcnJheTogZnVuY3Rpb24oYXJ5KSB7XG4gICAgICB2YXIgbm9kZSA9IG5ldyBSZWFjdGl2ZU5vZGUoKTtcblxuICAgICAgdGhpcy5fc2NoZWR1bGVyLmdldCgpLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICBfLmVhY2goYXJ5LCBmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgICBub2RlLl9hcHBseShlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gUmVhY3Rvcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcIi4uL2NvcmUvb3B0aW9uc1wiKSxcbiAgcmVxdWlyZShcIi4uL2NvcmUvcmVmXCIpLFxuICByZXF1aXJlKFwiLi9yZWFjdGl2ZS1ub2RlXCIpLFxuICByZXF1aXJlKFwiLi4vc2NoZWR1bGVyXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIE9wdGlvbnNcbikge1xuXG4gIHZhciBDb21wb25lbnRSZWdpc3RyeSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKENvbXBvbmVudFJlZ2lzdHJ5LnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fbW9kdWxlcyA9IHt9O1xuICAgIH0sXG5cblxuICAgIHJlZ2lzdGVyOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdmFyIGFsaWFzZXMgICA9IG9wdHMuZ2V0T3JFcnJvcihcImFzXCIpLFxuICAgICAgICAgIG1vZE9iamVjdCA9IG9wdHMuZ2V0T3JFcnJvcihcIm1vZHVsZVwiKTtcblxuICAgICAgaWYgKCFfLmlzQXJyYXkoYWxpYXNlcykpIHtcbiAgICAgICAgYWxpYXNlcyA9IFsgYWxpYXNlcyBdO1xuICAgICAgfVxuXG4gICAgICBfLmVhY2goYWxpYXNlcywgXy5iaW5kKGZ1bmN0aW9uKGFsaWFzKSB7XG4gICAgICAgIHRoaXMuX21vZHVsZXNbYWxpYXNdID0gbW9kT2JqZWN0O1xuICAgICAgfSwgdGhpcykpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgc2VsZlJlZ2lzdGVyOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuXG4gICAgICByZXR1cm4gdGhpcy5yZWdpc3Rlcih7XG4gICAgICAgIGFzOiBvcHRzLmdldE9yRXJyb3IoXCJhc1wiKSxcbiAgICAgICAgbW9kdWxlOiBDb21wb25lbnRSZWdpc3RyeVxuICAgICAgfSk7XG4gICAgfSxcblxuXG4gICAgcmVnaXN0ZXJNYW55OiBmdW5jdGlvbihhbGlhc2VzQXJ5KSB7XG4gICAgICBfLmVhY2goYWxpYXNlc0FyeSwgXy5iaW5kKGZ1bmN0aW9uKGFsaWFzKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoYWxpYXMpO1xuICAgICAgfSwgdGhpcykpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudDogZnVuY3Rpb24oYWxpYXMpIHtcbiAgICAgIHZhciBtID0gdGhpcy5fbW9kdWxlc1thbGlhc107XG4gICAgICBpZiAoIW0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhbGlhcyBwcm92aWRlZCAobm8gc3VjaCBtb2R1bGUpOiBgXCIrYWxpYXMrXCInXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG07XG4gICAgfVxuXG4gIH0pO1xuXG4gIENvbXBvbmVudFJlZ2lzdHJ5LnByb3RvdHlwZS5jID0gQ29tcG9uZW50UmVnaXN0cnkucHJvdG90eXBlLmNvbXBvbmVudDtcblxuICByZXR1cm4gQ29tcG9uZW50UmVnaXN0cnk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL29wdGlvbnNcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgT3B0aW9uc1xuKSB7XG5cbiAgLyoqXG4gICAqIERlbGVnYXRlcyBzdG9yYWdlIHRvIGEgSlMgb2JqZWN0LlxuICAgKi9cbiAgdmFyIE9iamVjdEhhc2hNYXAgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuXG4gIF8uZXh0ZW5kKE9iamVjdEhhc2hNYXAucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcbiAgICAgIHRoaXMuX3N0b3JlID0ge307XG4gICAgICB0aGlzLl9rZXlQcmVmaXggPSBvcHRzLmdldE9yRWxzZShcImtleVByZWZpeFwiLCBcIm9obS1cIik7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKGtleSl7XG4gICAgICByZXR1cm4gdGhpcy5fc3RvcmVbdGhpcy5fbWFrZUtleShrZXkpXTtcbiAgICB9LFxuICAgIHB1dDogZnVuY3Rpb24oa2V5LCB2YWwpIHtcbiAgICAgIHRoaXMuX3N0b3JlW3RoaXMuX21ha2VLZXkoa2V5KV0gPSB2YWw7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIHZhbDtcbiAgICAgIGtleSA9IHRoaXMuX21ha2VLZXkoa2V5KTtcbiAgICAgIGlmIChfLmhhcyh0aGlzLl9zdG9yZSwga2V5KSkge1xuICAgICAgICB2YWwgPSB0aGlzLl9zdG9yZVtrZXldO1xuICAgICAgICBkZWxldGUgdGhpcy5fc3RvcmVba2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcbiAgICBleGlzdHM6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIF8uaGFzKHRoaXMuX3N0b3JlLCB0aGlzLl9tYWtlS2V5KGtleSkpO1xuICAgIH0sXG4gICAgc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXy5zaXplKHRoaXMuX3N0b3JlKTtcbiAgICB9LFxuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3N0b3JlID0ge307XG4gICAgfSxcbiAgICBfbWFrZUtleTogZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fa2V5UHJlZml4ICsga2V5O1xuICAgIH1cbiAgfSk7XG5cblxuICByZXR1cm4gT2JqZWN0SGFzaE1hcDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcIi4uL2NvcmUvb3B0aW9uc1wiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBPcHRpb25zLFxuICBPYmplY3RIYXNoTWFwLFxuICBEb3VibHlMaW5rZWRMaXN0XG4pIHtcblxuICB2YXIgTFJVSGFzaE1hcCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKExSVUhhc2hNYXAucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcbiAgICAgIHRoaXMuX2NhcGFjaXR5ID0gb3B0cy5nZXRPckVycm9yKFwiY2FwYWNpdHlcIik7XG4gICAgICB0aGlzLl9rZXlBY2Nlc3NMaXN0ID0gbmV3IERvdWJseUxpbmtlZExpc3QoKTtcbiAgICAgIC8vIFRPRE86IFJlYWxseSBuZWVkIGEgcHJvcGVyIEhhc2hNYXAgYXQgc29tZSBwb2ludC4uLlxuICAgICAgdGhpcy5fc3RvcmUgPSBuZXcgT2JqZWN0SGFzaE1hcCgpO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciBlbnRyeSA9IHRoaXMuX3N0b3JlLmdldChrZXkpO1xuICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEFzIGEgcGVyZiBvcHRpbWl6YXRpb24sIHdlIGtlZXAgYSByZWZcbiAgICAgIC8vIHRvIHRoZSBub2RlIGluIHRoZSBlbnRyeS5cbiAgICAgIHZhciBub2RlID0gZW50cnkubm9kZSgpO1xuICAgICAgdGhpcy5fa2V5QWNjZXNzTGlzdC5fdW5saW5rKG5vZGUpO1xuXG4gICAgICAvLyBHZXQgdGhlIG5ldyBub2RlXG4gICAgICBub2RlID0gdGhpcy5fa2V5QWNjZXNzTGlzdC5fbGlua0Zyb250KGVudHJ5LmtleSgpKTtcblxuICAgICAgLy8gU2F2ZSBpdFxuICAgICAgZW50cnkuc2V0Tm9kZShub2RlKTtcbiAgICAgIC8vIFJldHVybiB0aGUgdmFsdWVcbiAgICAgIHJldHVybiBlbnRyeS52YWx1ZSgpO1xuICAgIH0sXG5cbiAgICBwdXQ6IGZ1bmN0aW9uKGtleSwgdmFsKSB7XG4gICAgICB2YXIgZW50cnkgPSB0aGlzLl9zdG9yZS5nZXQoa2V5KSxcbiAgICAgICAgICBub2RlO1xuICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAvLyBJZiBubyBlbnRyeSwgbWFrZSBhIG5ldyBlbnRyeVxuICAgICAgICBpZiAodGhpcy5fa2V5QWNjZXNzTGlzdC5zaXplKCkgPj0gdGhpcy5fY2FwYWNpdHkpIHtcbiAgICAgICAgICAvLyBIYXZlIHRvIG1ha2Ugcm9vbSBmb3IgaXRcbiAgICAgICAgICB2YXIgZXZpY3RlZEtleSA9IHRoaXMuX2tleUFjY2Vzc0xpc3QucmVtb3ZlQmFjaygpLFxuICAgICAgICAgICAgICBldmljdGVkRW50cnkgPSB0aGlzLl9zdG9yZS5nZXQoZXZpY3RlZEtleSk7XG5cbiAgICAgICAgICBldmljdGVkRW50cnkuZGlzcG9zZSgpO1xuICAgICAgICAgIHRoaXMuX3N0b3JlLnJlbW92ZShldmljdGVkS2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGUgPSB0aGlzLl9rZXlBY2Nlc3NMaXN0Ll9saW5rRnJvbnQoa2V5KTtcbiAgICAgICAgZW50cnkgPSBuZXcgRW50cnkoe1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgbm9kZTogbm9kZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc3RvcmUucHV0KGtleSwgZW50cnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gXCJUb3VjaFwiIHRoZSBlbnRyeSwgc2V0IG5ldyB2YWx1ZVxuICAgICAgICBub2RlID0gZW50cnkubm9kZSgpO1xuICAgICAgICB0aGlzLl9rZXlBY2Nlc3NMaXN0Ll91bmxpbmsobm9kZSk7XG4gICAgICAgIG5vZGUgPSB0aGlzLl9rZXlBY2Nlc3NMaXN0Ll9saW5rRnJvbnQoZW50cnkua2V5KCkpO1xuICAgICAgICAvLyBVcGRhdGUgd2l0aCB0aGUgbmV3IG5vZGUgYW5kIHZhbHVlXG4gICAgICAgIGVudHJ5LnNldE5vZGUobm9kZSk7XG4gICAgICAgIGVudHJ5LnNldFZhbHVlKHZhbCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbW92ZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgZW50cnkgPSB0aGlzLl9zdG9yZS5nZXQoa2V5KSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBub2RlO1xuICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIHZhbHVlID0gZW50cnkudmFsdWUoKTtcbiAgICAgICAgbm9kZSA9IGVudHJ5Lm5vZGUoKTtcbiAgICAgICAgdGhpcy5fa2V5QWNjZXNzTGlzdC5fdW5saW5rKG5vZGUpO1xuICAgICAgICBlbnRyeS5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX3N0b3JlLnJlbW92ZShrZXkpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGV4aXN0czogZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RvcmUuZXhpc3RzKGtleSk7XG4gICAgfSxcblxuICAgIHNpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLnNpemUoKTtcbiAgICB9LFxuXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fc3RvcmUuY2xlYXIoKTtcbiAgICAgIHRoaXMuX2tleUFjY2Vzc0xpc3QuY2xlYXIoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBFbnRyeSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKEVudHJ5LnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIG9wdHMgPSBPcHRpb25zLmZyb21PYmplY3Qob3B0cyk7XG4gICAgICAvLyBUaG91Z2ggdGhlIE5vZGUgc2hvdWxkIGhhdmUgdGhlIGtleSwgaWYgdGhlIG5vZGVcbiAgICAgIC8vIGlzIHVubGlua2VkIGZyb20gdGhlIGxpc3QsIGl0cyBib3hlZCB2YWx1ZSB3aWxsIGRpc2FwcGVhclxuICAgICAgdGhpcy5fa2V5ICAgPSBvcHRzLmdldE9yRXJyb3IoXCJrZXlcIik7XG4gICAgICB0aGlzLl92YWx1ZSA9IG9wdHMuZ2V0T3JFcnJvcihcInZhbHVlXCIpO1xuICAgICAgdGhpcy5fbm9kZSAgPSBvcHRzLmdldE9yRXJyb3IoXCJub2RlXCIpO1xuICAgIH0sXG4gICAgbm9kZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICB9LFxuICAgIHNldE5vZGU6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHRoaXMuX25vZGUgPSBub2RlO1xuICAgIH0sXG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH0sXG4gICAgc2V0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH0sXG4gICAga2V5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9rZXk7XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2tleSA9IG51bGw7XG4gICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLl9ub2RlID0gbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBMUlVIYXNoTWFwO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9vcHRpb25zXCIpLFxuICByZXF1aXJlKFwiLi9vYmplY3QtaGFzaC1tYXBcIiksXG4gIHJlcXVpcmUoXCIuL2RvdWJseS1saW5rZWQtbGlzdFwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8vICAgICBVbmRlcnNjb3JlLmpzIDEuNi4wXG4vLyAgICAgaHR0cDovL3VuZGVyc2NvcmVqcy5vcmdcbi8vICAgICAoYykgMjAwOS0yMDE0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4vLyAgICAgVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuKGZ1bmN0aW9uKCkge1xuXG4gIC8vIEJhc2VsaW5lIHNldHVwXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRXN0YWJsaXNoIHRoZSByb290IG9iamVjdCwgYHdpbmRvd2AgaW4gdGhlIGJyb3dzZXIsIG9yIGBleHBvcnRzYCBvbiB0aGUgc2VydmVyLlxuICB2YXIgcm9vdCA9IHRoaXM7XG5cbiAgLy8gU2F2ZSB0aGUgcHJldmlvdXMgdmFsdWUgb2YgdGhlIGBfYCB2YXJpYWJsZS5cbiAgdmFyIHByZXZpb3VzVW5kZXJzY29yZSA9IHJvb3QuXztcblxuICAvLyBFc3RhYmxpc2ggdGhlIG9iamVjdCB0aGF0IGdldHMgcmV0dXJuZWQgdG8gYnJlYWsgb3V0IG9mIGEgbG9vcCBpdGVyYXRpb24uXG4gIHZhciBicmVha2VyID0ge307XG5cbiAgLy8gU2F2ZSBieXRlcyBpbiB0aGUgbWluaWZpZWQgKGJ1dCBub3QgZ3ppcHBlZCkgdmVyc2lvbjpcbiAgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZSwgRnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIC8vIENyZWF0ZSBxdWljayByZWZlcmVuY2UgdmFyaWFibGVzIGZvciBzcGVlZCBhY2Nlc3MgdG8gY29yZSBwcm90b3R5cGVzLlxuICB2YXJcbiAgICBwdXNoICAgICAgICAgICAgID0gQXJyYXlQcm90by5wdXNoLFxuICAgIHNsaWNlICAgICAgICAgICAgPSBBcnJheVByb3RvLnNsaWNlLFxuICAgIGNvbmNhdCAgICAgICAgICAgPSBBcnJheVByb3RvLmNvbmNhdCxcbiAgICB0b1N0cmluZyAgICAgICAgID0gT2JqUHJvdG8udG9TdHJpbmcsXG4gICAgaGFzT3duUHJvcGVydHkgICA9IE9ialByb3RvLmhhc093blByb3BlcnR5O1xuXG4gIC8vIEFsbCAqKkVDTUFTY3JpcHQgNSoqIG5hdGl2ZSBmdW5jdGlvbiBpbXBsZW1lbnRhdGlvbnMgdGhhdCB3ZSBob3BlIHRvIHVzZVxuICAvLyBhcmUgZGVjbGFyZWQgaGVyZS5cbiAgdmFyXG4gICAgbmF0aXZlRm9yRWFjaCAgICAgID0gQXJyYXlQcm90by5mb3JFYWNoLFxuICAgIG5hdGl2ZU1hcCAgICAgICAgICA9IEFycmF5UHJvdG8ubWFwLFxuICAgIG5hdGl2ZVJlZHVjZSAgICAgICA9IEFycmF5UHJvdG8ucmVkdWNlLFxuICAgIG5hdGl2ZVJlZHVjZVJpZ2h0ICA9IEFycmF5UHJvdG8ucmVkdWNlUmlnaHQsXG4gICAgbmF0aXZlRmlsdGVyICAgICAgID0gQXJyYXlQcm90by5maWx0ZXIsXG4gICAgbmF0aXZlRXZlcnkgICAgICAgID0gQXJyYXlQcm90by5ldmVyeSxcbiAgICBuYXRpdmVTb21lICAgICAgICAgPSBBcnJheVByb3RvLnNvbWUsXG4gICAgbmF0aXZlSW5kZXhPZiAgICAgID0gQXJyYXlQcm90by5pbmRleE9mLFxuICAgIG5hdGl2ZUxhc3RJbmRleE9mICA9IEFycmF5UHJvdG8ubGFzdEluZGV4T2YsXG4gICAgbmF0aXZlSXNBcnJheSAgICAgID0gQXJyYXkuaXNBcnJheSxcbiAgICBuYXRpdmVLZXlzICAgICAgICAgPSBPYmplY3Qua2V5cyxcbiAgICBuYXRpdmVCaW5kICAgICAgICAgPSBGdW5jUHJvdG8uYmluZDtcblxuICAvLyBDcmVhdGUgYSBzYWZlIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yIHVzZSBiZWxvdy5cbiAgdmFyIF8gPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgXykgcmV0dXJuIG9iajtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgXykpIHJldHVybiBuZXcgXyhvYmopO1xuICAgIHRoaXMuX3dyYXBwZWQgPSBvYmo7XG4gIH07XG5cbiAgLy8gRXhwb3J0IHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgKipOb2RlLmpzKiosIHdpdGhcbiAgLy8gYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgZm9yIHRoZSBvbGQgYHJlcXVpcmUoKWAgQVBJLiBJZiB3ZSdyZSBpblxuICAvLyB0aGUgYnJvd3NlciwgYWRkIGBfYCBhcyBhIGdsb2JhbCBvYmplY3QgdmlhIGEgc3RyaW5nIGlkZW50aWZpZXIsXG4gIC8vIGZvciBDbG9zdXJlIENvbXBpbGVyIFwiYWR2YW5jZWRcIiBtb2RlLlxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfO1xuICAgIH1cbiAgICBleHBvcnRzLl8gPSBfO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuXyA9IF87XG4gIH1cblxuICAvLyBDdXJyZW50IHZlcnNpb24uXG4gIF8uVkVSU0lPTiA9ICcxLjYuMCc7XG5cbiAgLy8gQ29sbGVjdGlvbiBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBUaGUgY29ybmVyc3RvbmUsIGFuIGBlYWNoYCBpbXBsZW1lbnRhdGlvbiwgYWthIGBmb3JFYWNoYC5cbiAgLy8gSGFuZGxlcyBvYmplY3RzIHdpdGggdGhlIGJ1aWx0LWluIGBmb3JFYWNoYCwgYXJyYXlzLCBhbmQgcmF3IG9iamVjdHMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBmb3JFYWNoYCBpZiBhdmFpbGFibGUuXG4gIHZhciBlYWNoID0gXy5lYWNoID0gXy5mb3JFYWNoID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIG9iajtcbiAgICBpZiAobmF0aXZlRm9yRWFjaCAmJiBvYmouZm9yRWFjaCA9PT0gbmF0aXZlRm9yRWFjaCkge1xuICAgICAgb2JqLmZvckVhY2goaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2ldLCBpLCBvYmopID09PSBicmVha2VyKSByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5c1tpXV0sIGtleXNbaV0sIG9iaikgPT09IGJyZWFrZXIpIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdG9yIHRvIGVhY2ggZWxlbWVudC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYG1hcGAgaWYgYXZhaWxhYmxlLlxuICBfLm1hcCA9IF8uY29sbGVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdHM7XG4gICAgaWYgKG5hdGl2ZU1hcCAmJiBvYmoubWFwID09PSBuYXRpdmVNYXApIHJldHVybiBvYmoubWFwKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICByZXN1bHRzLnB1c2goaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICB2YXIgcmVkdWNlRXJyb3IgPSAnUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZSc7XG5cbiAgLy8gKipSZWR1Y2UqKiBidWlsZHMgdXAgYSBzaW5nbGUgcmVzdWx0IGZyb20gYSBsaXN0IG9mIHZhbHVlcywgYWthIGBpbmplY3RgLFxuICAvLyBvciBgZm9sZGxgLiBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgcmVkdWNlYCBpZiBhdmFpbGFibGUuXG4gIF8ucmVkdWNlID0gXy5mb2xkbCA9IF8uaW5qZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgbWVtbywgY29udGV4dCkge1xuICAgIHZhciBpbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgaWYgKG9iaiA9PSBudWxsKSBvYmogPSBbXTtcbiAgICBpZiAobmF0aXZlUmVkdWNlICYmIG9iai5yZWR1Y2UgPT09IG5hdGl2ZVJlZHVjZSkge1xuICAgICAgaWYgKGNvbnRleHQpIGl0ZXJhdG9yID0gXy5iaW5kKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBpbml0aWFsID8gb2JqLnJlZHVjZShpdGVyYXRvciwgbWVtbykgOiBvYmoucmVkdWNlKGl0ZXJhdG9yKTtcbiAgICB9XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgIG1lbW8gPSB2YWx1ZTtcbiAgICAgICAgaW5pdGlhbCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBtZW1vLCB2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghaW5pdGlhbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihyZWR1Y2VFcnJvcik7XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG5cbiAgLy8gVGhlIHJpZ2h0LWFzc29jaWF0aXZlIHZlcnNpb24gb2YgcmVkdWNlLCBhbHNvIGtub3duIGFzIGBmb2xkcmAuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGByZWR1Y2VSaWdodGAgaWYgYXZhaWxhYmxlLlxuICBfLnJlZHVjZVJpZ2h0ID0gXy5mb2xkciA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIG1lbW8sIGNvbnRleHQpIHtcbiAgICB2YXIgaW5pdGlhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIGlmIChvYmogPT0gbnVsbCkgb2JqID0gW107XG4gICAgaWYgKG5hdGl2ZVJlZHVjZVJpZ2h0ICYmIG9iai5yZWR1Y2VSaWdodCA9PT0gbmF0aXZlUmVkdWNlUmlnaHQpIHtcbiAgICAgIGlmIChjb250ZXh0KSBpdGVyYXRvciA9IF8uYmluZChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgICByZXR1cm4gaW5pdGlhbCA/IG9iai5yZWR1Y2VSaWdodChpdGVyYXRvciwgbWVtbykgOiBvYmoucmVkdWNlUmlnaHQoaXRlcmF0b3IpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gb2JqLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSArbGVuZ3RoKSB7XG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgfVxuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGluZGV4ID0ga2V5cyA/IGtleXNbLS1sZW5ndGhdIDogLS1sZW5ndGg7XG4gICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgbWVtbyA9IG9ialtpbmRleF07XG4gICAgICAgIGluaXRpYWwgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtbyA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgbWVtbywgb2JqW2luZGV4XSwgaW5kZXgsIGxpc3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghaW5pdGlhbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihyZWR1Y2VFcnJvcik7XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBmaXJzdCB2YWx1ZSB3aGljaCBwYXNzZXMgYSB0cnV0aCB0ZXN0LiBBbGlhc2VkIGFzIGBkZXRlY3RgLlxuICBfLmZpbmQgPSBfLmRldGVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBhbnkob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgcGFzcyBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBmaWx0ZXJgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgc2VsZWN0YC5cbiAgXy5maWx0ZXIgPSBfLnNlbGVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHRzO1xuICAgIGlmIChuYXRpdmVGaWx0ZXIgJiYgb2JqLmZpbHRlciA9PT0gbmF0aXZlRmlsdGVyKSByZXR1cm4gb2JqLmZpbHRlcihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSByZXN1bHRzLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGZvciB3aGljaCBhIHRydXRoIHRlc3QgZmFpbHMuXG4gIF8ucmVqZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJldHVybiAhcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgd2hldGhlciBhbGwgb2YgdGhlIGVsZW1lbnRzIG1hdGNoIGEgdHJ1dGggdGVzdC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGV2ZXJ5YCBpZiBhdmFpbGFibGUuXG4gIC8vIEFsaWFzZWQgYXMgYGFsbGAuXG4gIF8uZXZlcnkgPSBfLmFsbCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcHJlZGljYXRlIHx8IChwcmVkaWNhdGUgPSBfLmlkZW50aXR5KTtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKG5hdGl2ZUV2ZXJ5ICYmIG9iai5ldmVyeSA9PT0gbmF0aXZlRXZlcnkpIHJldHVybiBvYmouZXZlcnkocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoIShyZXN1bHQgPSByZXN1bHQgJiYgcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkpIHJldHVybiBicmVha2VyO1xuICAgIH0pO1xuICAgIHJldHVybiAhIXJlc3VsdDtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgYXQgbGVhc3Qgb25lIGVsZW1lbnQgaW4gdGhlIG9iamVjdCBtYXRjaGVzIGEgdHJ1dGggdGVzdC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYHNvbWVgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgYW55YC5cbiAgdmFyIGFueSA9IF8uc29tZSA9IF8uYW55ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgfHwgKHByZWRpY2F0ZSA9IF8uaWRlbnRpdHkpO1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKG5hdGl2ZVNvbWUgJiYgb2JqLnNvbWUgPT09IG5hdGl2ZVNvbWUpIHJldHVybiBvYmouc29tZShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChyZXN1bHQgfHwgKHJlc3VsdCA9IHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpKSByZXR1cm4gYnJlYWtlcjtcbiAgICB9KTtcbiAgICByZXR1cm4gISFyZXN1bHQ7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBhcnJheSBvciBvYmplY3QgY29udGFpbnMgYSBnaXZlbiB2YWx1ZSAodXNpbmcgYD09PWApLlxuICAvLyBBbGlhc2VkIGFzIGBpbmNsdWRlYC5cbiAgXy5jb250YWlucyA9IF8uaW5jbHVkZSA9IGZ1bmN0aW9uKG9iaiwgdGFyZ2V0KSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG5hdGl2ZUluZGV4T2YgJiYgb2JqLmluZGV4T2YgPT09IG5hdGl2ZUluZGV4T2YpIHJldHVybiBvYmouaW5kZXhPZih0YXJnZXQpICE9IC0xO1xuICAgIHJldHVybiBhbnkob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSB0YXJnZXQ7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gSW52b2tlIGEgbWV0aG9kICh3aXRoIGFyZ3VtZW50cykgb24gZXZlcnkgaXRlbSBpbiBhIGNvbGxlY3Rpb24uXG4gIF8uaW52b2tlID0gZnVuY3Rpb24ob2JqLCBtZXRob2QpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgaXNGdW5jID0gXy5pc0Z1bmN0aW9uKG1ldGhvZCk7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiAoaXNGdW5jID8gbWV0aG9kIDogdmFsdWVbbWV0aG9kXSkuYXBwbHkodmFsdWUsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYG1hcGA6IGZldGNoaW5nIGEgcHJvcGVydHkuXG4gIF8ucGx1Y2sgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBfLm1hcChvYmosIF8ucHJvcGVydHkoa2V5KSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmlsdGVyYDogc2VsZWN0aW5nIG9ubHkgb2JqZWN0c1xuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLndoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycykge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIF8ubWF0Y2hlcyhhdHRycykpO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbmRgOiBnZXR0aW5nIHRoZSBmaXJzdCBvYmplY3RcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5maW5kV2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8uZmluZChvYmosIF8ubWF0Y2hlcyhhdHRycykpO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWF4aW11bSBlbGVtZW50IG9yIChlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgLy8gQ2FuJ3Qgb3B0aW1pemUgYXJyYXlzIG9mIGludGVnZXJzIGxvbmdlciB0aGFuIDY1LDUzNSBlbGVtZW50cy5cbiAgLy8gU2VlIFtXZWJLaXQgQnVnIDgwNzk3XShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODA3OTcpXG4gIF8ubWF4ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0FycmF5KG9iaikgJiYgb2JqWzBdID09PSArb2JqWzBdICYmIG9iai5sZW5ndGggPCA2NTUzNSkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KE1hdGgsIG9iaik7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAtSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IC1JbmZpbml0eTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICB2YXIgY29tcHV0ZWQgPSBpdGVyYXRvciA/IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSA6IHZhbHVlO1xuICAgICAgaWYgKGNvbXB1dGVkID4gbGFzdENvbXB1dGVkKSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWluaW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgXy5taW4gPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzQXJyYXkob2JqKSAmJiBvYmpbMF0gPT09ICtvYmpbMF0gJiYgb2JqLmxlbmd0aCA8IDY1NTM1KSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkoTWF0aCwgb2JqKTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IEluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSBJbmZpbml0eTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICB2YXIgY29tcHV0ZWQgPSBpdGVyYXRvciA/IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSA6IHZhbHVlO1xuICAgICAgaWYgKGNvbXB1dGVkIDwgbGFzdENvbXB1dGVkKSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFNodWZmbGUgYW4gYXJyYXksIHVzaW5nIHRoZSBtb2Rlcm4gdmVyc2lvbiBvZiB0aGVcbiAgLy8gW0Zpc2hlci1ZYXRlcyBzaHVmZmxlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlcuKAk1lhdGVzX3NodWZmbGUpLlxuICBfLnNodWZmbGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmFuZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzaHVmZmxlZCA9IFtdO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmFuZCA9IF8ucmFuZG9tKGluZGV4KyspO1xuICAgICAgc2h1ZmZsZWRbaW5kZXggLSAxXSA9IHNodWZmbGVkW3JhbmRdO1xuICAgICAgc2h1ZmZsZWRbcmFuZF0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gIH07XG5cbiAgLy8gU2FtcGxlICoqbioqIHJhbmRvbSB2YWx1ZXMgZnJvbSBhIGNvbGxlY3Rpb24uXG4gIC8vIElmICoqbioqIGlzIG5vdCBzcGVjaWZpZWQsIHJldHVybnMgYSBzaW5nbGUgcmFuZG9tIGVsZW1lbnQuXG4gIC8vIFRoZSBpbnRlcm5hbCBgZ3VhcmRgIGFyZ3VtZW50IGFsbG93cyBpdCB0byB3b3JrIHdpdGggYG1hcGAuXG4gIF8uc2FtcGxlID0gZnVuY3Rpb24ob2JqLCBuLCBndWFyZCkge1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHtcbiAgICAgIGlmIChvYmoubGVuZ3RoICE9PSArb2JqLmxlbmd0aCkgb2JqID0gXy52YWx1ZXMob2JqKTtcbiAgICAgIHJldHVybiBvYmpbXy5yYW5kb20ob2JqLmxlbmd0aCAtIDEpXTtcbiAgICB9XG4gICAgcmV0dXJuIF8uc2h1ZmZsZShvYmopLnNsaWNlKDAsIE1hdGgubWF4KDAsIG4pKTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB0byBnZW5lcmF0ZSBsb29rdXAgaXRlcmF0b3JzLlxuICB2YXIgbG9va3VwSXRlcmF0b3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gXy5pZGVudGl0eTtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIHJldHVybiBfLnByb3BlcnR5KHZhbHVlKTtcbiAgfTtcblxuICAvLyBTb3J0IHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24gcHJvZHVjZWQgYnkgYW4gaXRlcmF0b3IuXG4gIF8uc29ydEJ5ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGl0ZXJhdG9yID0gbG9va3VwSXRlcmF0b3IoaXRlcmF0b3IpO1xuICAgIHJldHVybiBfLnBsdWNrKF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgY3JpdGVyaWE6IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KVxuICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWE7XG4gICAgICB2YXIgYiA9IHJpZ2h0LmNyaXRlcmlhO1xuICAgICAgaWYgKGEgIT09IGIpIHtcbiAgICAgICAgaWYgKGEgPiBiIHx8IGEgPT09IHZvaWQgMCkgcmV0dXJuIDE7XG4gICAgICAgIGlmIChhIDwgYiB8fCBiID09PSB2b2lkIDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsZWZ0LmluZGV4IC0gcmlnaHQuaW5kZXg7XG4gICAgfSksICd2YWx1ZScpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHVzZWQgZm9yIGFnZ3JlZ2F0ZSBcImdyb3VwIGJ5XCIgb3BlcmF0aW9ucy5cbiAgdmFyIGdyb3VwID0gZnVuY3Rpb24oYmVoYXZpb3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgaXRlcmF0b3IgPSBsb29rdXBJdGVyYXRvcihpdGVyYXRvcik7XG4gICAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHZhciBrZXkgPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgb2JqKTtcbiAgICAgICAgYmVoYXZpb3IocmVzdWx0LCBrZXksIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEdyb3VwcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLiBQYXNzIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGVcbiAgLy8gdG8gZ3JvdXAgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjcml0ZXJpb24uXG4gIF8uZ3JvdXBCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwga2V5LCB2YWx1ZSkge1xuICAgIF8uaGFzKHJlc3VsdCwga2V5KSA/IHJlc3VsdFtrZXldLnB1c2godmFsdWUpIDogcmVzdWx0W2tleV0gPSBbdmFsdWVdO1xuICB9KTtcblxuICAvLyBJbmRleGVzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24sIHNpbWlsYXIgdG8gYGdyb3VwQnlgLCBidXQgZm9yXG4gIC8vIHdoZW4geW91IGtub3cgdGhhdCB5b3VyIGluZGV4IHZhbHVlcyB3aWxsIGJlIHVuaXF1ZS5cbiAgXy5pbmRleEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCBrZXksIHZhbHVlKSB7XG4gICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfSk7XG5cbiAgLy8gQ291bnRzIGluc3RhbmNlcyBvZiBhbiBvYmplY3QgdGhhdCBncm91cCBieSBhIGNlcnRhaW4gY3JpdGVyaW9uLiBQYXNzXG4gIC8vIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGUgdG8gY291bnQgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAvLyBjcml0ZXJpb24uXG4gIF8uY291bnRCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwga2V5KSB7XG4gICAgXy5oYXMocmVzdWx0LCBrZXkpID8gcmVzdWx0W2tleV0rKyA6IHJlc3VsdFtrZXldID0gMTtcbiAgfSk7XG5cbiAgLy8gVXNlIGEgY29tcGFyYXRvciBmdW5jdGlvbiB0byBmaWd1cmUgb3V0IHRoZSBzbWFsbGVzdCBpbmRleCBhdCB3aGljaFxuICAvLyBhbiBvYmplY3Qgc2hvdWxkIGJlIGluc2VydGVkIHNvIGFzIHRvIG1haW50YWluIG9yZGVyLiBVc2VzIGJpbmFyeSBzZWFyY2guXG4gIF8uc29ydGVkSW5kZXggPSBmdW5jdGlvbihhcnJheSwgb2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGl0ZXJhdG9yID0gbG9va3VwSXRlcmF0b3IoaXRlcmF0b3IpO1xuICAgIHZhciB2YWx1ZSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqKTtcbiAgICB2YXIgbG93ID0gMCwgaGlnaCA9IGFycmF5Lmxlbmd0aDtcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgdmFyIG1pZCA9IChsb3cgKyBoaWdoKSA+Pj4gMTtcbiAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgYXJyYXlbbWlkXSkgPCB2YWx1ZSA/IGxvdyA9IG1pZCArIDEgOiBoaWdoID0gbWlkO1xuICAgIH1cbiAgICByZXR1cm4gbG93O1xuICB9O1xuXG4gIC8vIFNhZmVseSBjcmVhdGUgYSByZWFsLCBsaXZlIGFycmF5IGZyb20gYW55dGhpbmcgaXRlcmFibGUuXG4gIF8udG9BcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghb2JqKSByZXR1cm4gW107XG4gICAgaWYgKF8uaXNBcnJheShvYmopKSByZXR1cm4gc2xpY2UuY2FsbChvYmopO1xuICAgIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkgcmV0dXJuIF8ubWFwKG9iaiwgXy5pZGVudGl0eSk7XG4gICAgcmV0dXJuIF8udmFsdWVzKG9iaik7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gYW4gb2JqZWN0LlxuICBfLnNpemUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiAwO1xuICAgIHJldHVybiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpID8gb2JqLmxlbmd0aCA6IF8ua2V5cyhvYmopLmxlbmd0aDtcbiAgfTtcblxuICAvLyBBcnJheSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYGhlYWRgIGFuZCBgdGFrZWAuIFRoZSAqKmd1YXJkKiogY2hlY2tcbiAgLy8gYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLmZpcnN0ID0gXy5oZWFkID0gXy50YWtlID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgaWYgKChuID09IG51bGwpIHx8IGd1YXJkKSByZXR1cm4gYXJyYXlbMF07XG4gICAgaWYgKG4gPCAwKSByZXR1cm4gW107XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIG4pO1xuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGxhc3QgZW50cnkgb2YgdGhlIGFycmF5LiBFc3BlY2lhbGx5IHVzZWZ1bCBvblxuICAvLyB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiBhbGwgdGhlIHZhbHVlcyBpblxuICAvLyB0aGUgYXJyYXksIGV4Y2x1ZGluZyB0aGUgbGFzdCBOLiBUaGUgKipndWFyZCoqIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGhcbiAgLy8gYF8ubWFwYC5cbiAgXy5pbml0aWFsID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIGFycmF5Lmxlbmd0aCAtICgobiA9PSBudWxsKSB8fCBndWFyZCA/IDEgOiBuKSk7XG4gIH07XG5cbiAgLy8gR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGxhc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBUaGUgKipndWFyZCoqIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5sYXN0ID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgaWYgKChuID09IG51bGwpIHx8IGd1YXJkKSByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIE1hdGgubWF4KGFycmF5Lmxlbmd0aCAtIG4sIDApKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBmaXJzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYHRhaWxgIGFuZCBgZHJvcGAuXG4gIC8vIEVzcGVjaWFsbHkgdXNlZnVsIG9uIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nIGFuICoqbioqIHdpbGwgcmV0dXJuXG4gIC8vIHRoZSByZXN0IE4gdmFsdWVzIGluIHRoZSBhcnJheS4gVGhlICoqZ3VhcmQqKlxuICAvLyBjaGVjayBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8ucmVzdCA9IF8udGFpbCA9IF8uZHJvcCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCAobiA9PSBudWxsKSB8fCBndWFyZCA/IDEgOiBuKTtcbiAgfTtcblxuICAvLyBUcmltIG91dCBhbGwgZmFsc3kgdmFsdWVzIGZyb20gYW4gYXJyYXkuXG4gIF8uY29tcGFjdCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBfLmlkZW50aXR5KTtcbiAgfTtcblxuICAvLyBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBvZiBhIHJlY3Vyc2l2ZSBgZmxhdHRlbmAgZnVuY3Rpb24uXG4gIHZhciBmbGF0dGVuID0gZnVuY3Rpb24oaW5wdXQsIHNoYWxsb3csIG91dHB1dCkge1xuICAgIGlmIChzaGFsbG93ICYmIF8uZXZlcnkoaW5wdXQsIF8uaXNBcnJheSkpIHtcbiAgICAgIHJldHVybiBjb25jYXQuYXBwbHkob3V0cHV0LCBpbnB1dCk7XG4gICAgfVxuICAgIGVhY2goaW5wdXQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoXy5pc0FycmF5KHZhbHVlKSB8fCBfLmlzQXJndW1lbnRzKHZhbHVlKSkge1xuICAgICAgICBzaGFsbG93ID8gcHVzaC5hcHBseShvdXRwdXQsIHZhbHVlKSA6IGZsYXR0ZW4odmFsdWUsIHNoYWxsb3csIG91dHB1dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICAvLyBGbGF0dGVuIG91dCBhbiBhcnJheSwgZWl0aGVyIHJlY3Vyc2l2ZWx5IChieSBkZWZhdWx0KSwgb3IganVzdCBvbmUgbGV2ZWwuXG4gIF8uZmxhdHRlbiA9IGZ1bmN0aW9uKGFycmF5LCBzaGFsbG93KSB7XG4gICAgcmV0dXJuIGZsYXR0ZW4oYXJyYXksIHNoYWxsb3csIFtdKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSB2ZXJzaW9uIG9mIHRoZSBhcnJheSB0aGF0IGRvZXMgbm90IGNvbnRhaW4gdGhlIHNwZWNpZmllZCB2YWx1ZShzKS5cbiAgXy53aXRob3V0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5kaWZmZXJlbmNlKGFycmF5LCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICB9O1xuXG4gIC8vIFNwbGl0IGFuIGFycmF5IGludG8gdHdvIGFycmF5czogb25lIHdob3NlIGVsZW1lbnRzIGFsbCBzYXRpc2Z5IHRoZSBnaXZlblxuICAvLyBwcmVkaWNhdGUsIGFuZCBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIGRvIG5vdCBzYXRpc2Z5IHRoZSBwcmVkaWNhdGUuXG4gIF8ucGFydGl0aW9uID0gZnVuY3Rpb24oYXJyYXksIHByZWRpY2F0ZSkge1xuICAgIHZhciBwYXNzID0gW10sIGZhaWwgPSBbXTtcbiAgICBlYWNoKGFycmF5LCBmdW5jdGlvbihlbGVtKSB7XG4gICAgICAocHJlZGljYXRlKGVsZW0pID8gcGFzcyA6IGZhaWwpLnB1c2goZWxlbSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtwYXNzLCBmYWlsXTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiB0aGUgYXJyYXkuIElmIHRoZSBhcnJheSBoYXMgYWxyZWFkeVxuICAvLyBiZWVuIHNvcnRlZCwgeW91IGhhdmUgdGhlIG9wdGlvbiBvZiB1c2luZyBhIGZhc3RlciBhbGdvcml0aG0uXG4gIC8vIEFsaWFzZWQgYXMgYHVuaXF1ZWAuXG4gIF8udW5pcSA9IF8udW5pcXVlID0gZnVuY3Rpb24oYXJyYXksIGlzU29ydGVkLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmIChfLmlzRnVuY3Rpb24oaXNTb3J0ZWQpKSB7XG4gICAgICBjb250ZXh0ID0gaXRlcmF0b3I7XG4gICAgICBpdGVyYXRvciA9IGlzU29ydGVkO1xuICAgICAgaXNTb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGluaXRpYWwgPSBpdGVyYXRvciA/IF8ubWFwKGFycmF5LCBpdGVyYXRvciwgY29udGV4dCkgOiBhcnJheTtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHZhciBzZWVuID0gW107XG4gICAgZWFjaChpbml0aWFsLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIGlmIChpc1NvcnRlZCA/ICghaW5kZXggfHwgc2VlbltzZWVuLmxlbmd0aCAtIDFdICE9PSB2YWx1ZSkgOiAhXy5jb250YWlucyhzZWVuLCB2YWx1ZSkpIHtcbiAgICAgICAgc2Vlbi5wdXNoKHZhbHVlKTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGFycmF5W2luZGV4XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSB1bmlvbjogZWFjaCBkaXN0aW5jdCBlbGVtZW50IGZyb20gYWxsIG9mXG4gIC8vIHRoZSBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLnVuaW9uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF8udW5pcShfLmZsYXR0ZW4oYXJndW1lbnRzLCB0cnVlKSk7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGV2ZXJ5IGl0ZW0gc2hhcmVkIGJldHdlZW4gYWxsIHRoZVxuICAvLyBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3QgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKF8udW5pcShhcnJheSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfLmV2ZXJ5KHJlc3QsIGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBfLmNvbnRhaW5zKG90aGVyLCBpdGVtKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFRha2UgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBvbmUgYXJyYXkgYW5kIGEgbnVtYmVyIG9mIG90aGVyIGFycmF5cy5cbiAgLy8gT25seSB0aGUgZWxlbWVudHMgcHJlc2VudCBpbiBqdXN0IHRoZSBmaXJzdCBhcnJheSB3aWxsIHJlbWFpbi5cbiAgXy5kaWZmZXJlbmNlID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdCA9IGNvbmNhdC5hcHBseShBcnJheVByb3RvLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgZnVuY3Rpb24odmFsdWUpeyByZXR1cm4gIV8uY29udGFpbnMocmVzdCwgdmFsdWUpOyB9KTtcbiAgfTtcblxuICAvLyBaaXAgdG9nZXRoZXIgbXVsdGlwbGUgbGlzdHMgaW50byBhIHNpbmdsZSBhcnJheSAtLSBlbGVtZW50cyB0aGF0IHNoYXJlXG4gIC8vIGFuIGluZGV4IGdvIHRvZ2V0aGVyLlxuICBfLnppcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW5ndGggPSBfLm1heChfLnBsdWNrKGFyZ3VtZW50cywgJ2xlbmd0aCcpLmNvbmNhdCgwKSk7XG4gICAgdmFyIHJlc3VsdHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRzW2ldID0gXy5wbHVjayhhcmd1bWVudHMsICcnICsgaSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIENvbnZlcnRzIGxpc3RzIGludG8gb2JqZWN0cy4gUGFzcyBlaXRoZXIgYSBzaW5nbGUgYXJyYXkgb2YgYFtrZXksIHZhbHVlXWBcbiAgLy8gcGFpcnMsIG9yIHR3byBwYXJhbGxlbCBhcnJheXMgb2YgdGhlIHNhbWUgbGVuZ3RoIC0tIG9uZSBvZiBrZXlzLCBhbmQgb25lIG9mXG4gIC8vIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcy5cbiAgXy5vYmplY3QgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZXMpIHtcbiAgICBpZiAobGlzdCA9PSBudWxsKSByZXR1cm4ge307XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldXSA9IHZhbHVlc1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldWzBdXSA9IGxpc3RbaV1bMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gSWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwbHkgdXMgd2l0aCBpbmRleE9mIChJJ20gbG9va2luZyBhdCB5b3UsICoqTVNJRSoqKSxcbiAgLy8gd2UgbmVlZCB0aGlzIGZ1bmN0aW9uLiBSZXR1cm4gdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGFuXG4gIC8vIGl0ZW0gaW4gYW4gYXJyYXksIG9yIC0xIGlmIHRoZSBpdGVtIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXkuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBpbmRleE9mYCBpZiBhdmFpbGFibGUuXG4gIC8vIElmIHRoZSBhcnJheSBpcyBsYXJnZSBhbmQgYWxyZWFkeSBpbiBzb3J0IG9yZGVyLCBwYXNzIGB0cnVlYFxuICAvLyBmb3IgKippc1NvcnRlZCoqIHRvIHVzZSBiaW5hcnkgc2VhcmNoLlxuICBfLmluZGV4T2YgPSBmdW5jdGlvbihhcnJheSwgaXRlbSwgaXNTb3J0ZWQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIC0xO1xuICAgIHZhciBpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIGlmIChpc1NvcnRlZCkge1xuICAgICAgaWYgKHR5cGVvZiBpc1NvcnRlZCA9PSAnbnVtYmVyJykge1xuICAgICAgICBpID0gKGlzU29ydGVkIDwgMCA/IE1hdGgubWF4KDAsIGxlbmd0aCArIGlzU29ydGVkKSA6IGlzU29ydGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkgPSBfLnNvcnRlZEluZGV4KGFycmF5LCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFycmF5W2ldID09PSBpdGVtID8gaSA6IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBhcnJheS5pbmRleE9mID09PSBuYXRpdmVJbmRleE9mKSByZXR1cm4gYXJyYXkuaW5kZXhPZihpdGVtLCBpc1NvcnRlZCk7XG4gICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykgaWYgKGFycmF5W2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICByZXR1cm4gLTE7XG4gIH07XG5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGxhc3RJbmRleE9mYCBpZiBhdmFpbGFibGUuXG4gIF8ubGFzdEluZGV4T2YgPSBmdW5jdGlvbihhcnJheSwgaXRlbSwgZnJvbSkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gLTE7XG4gICAgdmFyIGhhc0luZGV4ID0gZnJvbSAhPSBudWxsO1xuICAgIGlmIChuYXRpdmVMYXN0SW5kZXhPZiAmJiBhcnJheS5sYXN0SW5kZXhPZiA9PT0gbmF0aXZlTGFzdEluZGV4T2YpIHtcbiAgICAgIHJldHVybiBoYXNJbmRleCA/IGFycmF5Lmxhc3RJbmRleE9mKGl0ZW0sIGZyb20pIDogYXJyYXkubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfVxuICAgIHZhciBpID0gKGhhc0luZGV4ID8gZnJvbSA6IGFycmF5Lmxlbmd0aCk7XG4gICAgd2hpbGUgKGktLSkgaWYgKGFycmF5W2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICByZXR1cm4gLTE7XG4gIH07XG5cbiAgLy8gR2VuZXJhdGUgYW4gaW50ZWdlciBBcnJheSBjb250YWluaW5nIGFuIGFyaXRobWV0aWMgcHJvZ3Jlc3Npb24uIEEgcG9ydCBvZlxuICAvLyB0aGUgbmF0aXZlIFB5dGhvbiBgcmFuZ2UoKWAgZnVuY3Rpb24uIFNlZVxuICAvLyBbdGhlIFB5dGhvbiBkb2N1bWVudGF0aW9uXShodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvZnVuY3Rpb25zLmh0bWwjcmFuZ2UpLlxuICBfLnJhbmdlID0gZnVuY3Rpb24oc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSAxKSB7XG4gICAgICBzdG9wID0gc3RhcnQgfHwgMDtcbiAgICAgIHN0YXJ0ID0gMDtcbiAgICB9XG4gICAgc3RlcCA9IGFyZ3VtZW50c1syXSB8fCAxO1xuXG4gICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApLCAwKTtcbiAgICB2YXIgaWR4ID0gMDtcbiAgICB2YXIgcmFuZ2UgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlKGlkeCA8IGxlbmd0aCkge1xuICAgICAgcmFuZ2VbaWR4KytdID0gc3RhcnQ7XG4gICAgICBzdGFydCArPSBzdGVwO1xuICAgIH1cblxuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiAoYWhlbSkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJldXNhYmxlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGZvciBwcm90b3R5cGUgc2V0dGluZy5cbiAgdmFyIGN0b3IgPSBmdW5jdGlvbigpe307XG5cbiAgLy8gQ3JlYXRlIGEgZnVuY3Rpb24gYm91bmQgdG8gYSBnaXZlbiBvYmplY3QgKGFzc2lnbmluZyBgdGhpc2AsIGFuZCBhcmd1bWVudHMsXG4gIC8vIG9wdGlvbmFsbHkpLiBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgRnVuY3Rpb24uYmluZGAgaWZcbiAgLy8gYXZhaWxhYmxlLlxuICBfLmJpbmQgPSBmdW5jdGlvbihmdW5jLCBjb250ZXh0KSB7XG4gICAgdmFyIGFyZ3MsIGJvdW5kO1xuICAgIGlmIChuYXRpdmVCaW5kICYmIGZ1bmMuYmluZCA9PT0gbmF0aXZlQmluZCkgcmV0dXJuIG5hdGl2ZUJpbmQuYXBwbHkoZnVuYywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBpZiAoIV8uaXNGdW5jdGlvbihmdW5jKSkgdGhyb3cgbmV3IFR5cGVFcnJvcjtcbiAgICBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBib3VuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSkgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICBjdG9yLnByb3RvdHlwZSA9IGZ1bmMucHJvdG90eXBlO1xuICAgICAgdmFyIHNlbGYgPSBuZXcgY3RvcjtcbiAgICAgIGN0b3IucHJvdG90eXBlID0gbnVsbDtcbiAgICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHNlbGYsIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFBhcnRpYWxseSBhcHBseSBhIGZ1bmN0aW9uIGJ5IGNyZWF0aW5nIGEgdmVyc2lvbiB0aGF0IGhhcyBoYWQgc29tZSBvZiBpdHNcbiAgLy8gYXJndW1lbnRzIHByZS1maWxsZWQsIHdpdGhvdXQgY2hhbmdpbmcgaXRzIGR5bmFtaWMgYHRoaXNgIGNvbnRleHQuIF8gYWN0c1xuICAvLyBhcyBhIHBsYWNlaG9sZGVyLCBhbGxvd2luZyBhbnkgY29tYmluYXRpb24gb2YgYXJndW1lbnRzIHRvIGJlIHByZS1maWxsZWQuXG4gIF8ucGFydGlhbCA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICB2YXIgYm91bmRBcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IDA7XG4gICAgICB2YXIgYXJncyA9IGJvdW5kQXJncy5zbGljZSgpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFyZ3NbaV0gPT09IF8pIGFyZ3NbaV0gPSBhcmd1bWVudHNbcG9zaXRpb24rK107XG4gICAgICB9XG4gICAgICB3aGlsZSAocG9zaXRpb24gPCBhcmd1bWVudHMubGVuZ3RoKSBhcmdzLnB1c2goYXJndW1lbnRzW3Bvc2l0aW9uKytdKTtcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gQmluZCBhIG51bWJlciBvZiBhbiBvYmplY3QncyBtZXRob2RzIHRvIHRoYXQgb2JqZWN0LiBSZW1haW5pbmcgYXJndW1lbnRzXG4gIC8vIGFyZSB0aGUgbWV0aG9kIG5hbWVzIHRvIGJlIGJvdW5kLiBVc2VmdWwgZm9yIGVuc3VyaW5nIHRoYXQgYWxsIGNhbGxiYWNrc1xuICAvLyBkZWZpbmVkIG9uIGFuIG9iamVjdCBiZWxvbmcgdG8gaXQuXG4gIF8uYmluZEFsbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBmdW5jcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBbGwgbXVzdCBiZSBwYXNzZWQgZnVuY3Rpb24gbmFtZXMnKTtcbiAgICBlYWNoKGZ1bmNzLCBmdW5jdGlvbihmKSB7IG9ialtmXSA9IF8uYmluZChvYmpbZl0sIG9iaik7IH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gTWVtb2l6ZSBhbiBleHBlbnNpdmUgZnVuY3Rpb24gYnkgc3RvcmluZyBpdHMgcmVzdWx0cy5cbiAgXy5tZW1vaXplID0gZnVuY3Rpb24oZnVuYywgaGFzaGVyKSB7XG4gICAgdmFyIG1lbW8gPSB7fTtcbiAgICBoYXNoZXIgfHwgKGhhc2hlciA9IF8uaWRlbnRpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBrZXkgPSBoYXNoZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBfLmhhcyhtZW1vLCBrZXkpID8gbWVtb1trZXldIDogKG1lbW9ba2V5XSA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBEZWxheXMgYSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIGFuZCB0aGVuIGNhbGxzXG4gIC8vIGl0IHdpdGggdGhlIGFyZ3VtZW50cyBzdXBwbGllZC5cbiAgXy5kZWxheSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpeyByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTsgfSwgd2FpdCk7XG4gIH07XG5cbiAgLy8gRGVmZXJzIGEgZnVuY3Rpb24sIHNjaGVkdWxpbmcgaXQgdG8gcnVuIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwgc3RhY2sgaGFzXG4gIC8vIGNsZWFyZWQuXG4gIF8uZGVmZXIgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgcmV0dXJuIF8uZGVsYXkuYXBwbHkoXywgW2Z1bmMsIDFdLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAgLy8gZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuIE5vcm1hbGx5LCB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHdpbGwgcnVuXG4gIC8vIGFzIG11Y2ggYXMgaXQgY2FuLCB3aXRob3V0IGV2ZXIgZ29pbmcgbW9yZSB0aGFuIG9uY2UgcGVyIGB3YWl0YCBkdXJhdGlvbjtcbiAgLy8gYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAgLy8gYHtsZWFkaW5nOiBmYWxzZX1gLiBUbyBkaXNhYmxlIGV4ZWN1dGlvbiBvbiB0aGUgdHJhaWxpbmcgZWRnZSwgZGl0dG8uXG4gIF8udGhyb3R0bGUgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcbiAgICB2YXIgdGltZW91dCA9IG51bGw7XG4gICAgdmFyIHByZXZpb3VzID0gMDtcbiAgICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IF8ubm93KCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm93ID0gXy5ub3coKTtcbiAgICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBpZiAocmVtYWluaW5nIDw9IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICAvLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gIC8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuICAvLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuICBfLmRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgdmFyIHRpbWVvdXQsIGFyZ3MsIGNvbnRleHQsIHRpbWVzdGFtcCwgcmVzdWx0O1xuXG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGFzdCA9IF8ubm93KCkgLSB0aW1lc3RhbXA7XG4gICAgICBpZiAobGFzdCA8IHdhaXQpIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHRpbWVzdGFtcCA9IF8ubm93KCk7XG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgIGlmICghdGltZW91dCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICB9XG4gICAgICBpZiAoY2FsbE5vdykge1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGF0IG1vc3Qgb25lIHRpbWUsIG5vIG1hdHRlciBob3dcbiAgLy8gb2Z0ZW4geW91IGNhbGwgaXQuIFVzZWZ1bCBmb3IgbGF6eSBpbml0aWFsaXphdGlvbi5cbiAgXy5vbmNlID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHZhciByYW4gPSBmYWxzZSwgbWVtbztcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocmFuKSByZXR1cm4gbWVtbztcbiAgICAgIHJhbiA9IHRydWU7XG4gICAgICBtZW1vID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgZnVuYyA9IG51bGw7XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGZ1bmN0aW9uIHBhc3NlZCBhcyBhbiBhcmd1bWVudCB0byB0aGUgc2Vjb25kLFxuICAvLyBhbGxvd2luZyB5b3UgdG8gYWRqdXN0IGFyZ3VtZW50cywgcnVuIGNvZGUgYmVmb3JlIGFuZCBhZnRlciwgYW5kXG4gIC8vIGNvbmRpdGlvbmFsbHkgZXhlY3V0ZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXG4gIF8ud3JhcCA9IGZ1bmN0aW9uKGZ1bmMsIHdyYXBwZXIpIHtcbiAgICByZXR1cm4gXy5wYXJ0aWFsKHdyYXBwZXIsIGZ1bmMpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGlzIHRoZSBjb21wb3NpdGlvbiBvZiBhIGxpc3Qgb2YgZnVuY3Rpb25zLCBlYWNoXG4gIC8vIGNvbnN1bWluZyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGZvbGxvd3MuXG4gIF8uY29tcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmdW5jcyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGZvciAodmFyIGkgPSBmdW5jcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBhcmdzID0gW2Z1bmNzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIGFmdGVyIGJlaW5nIGNhbGxlZCBOIHRpbWVzLlxuICBfLmFmdGVyID0gZnVuY3Rpb24odGltZXMsIGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aW1lcyA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIE9iamVjdCBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJldHJpZXZlIHRoZSBuYW1lcyBvZiBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgT2JqZWN0LmtleXNgXG4gIF8ua2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gW107XG4gICAgaWYgKG5hdGl2ZUtleXMpIHJldHVybiBuYXRpdmVLZXlzKG9iaik7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSBrZXlzLnB1c2goa2V5KTtcbiAgICByZXR1cm4ga2V5cztcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgdmFsdWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIF8udmFsdWVzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlc1tpXSA9IG9ialtrZXlzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICAvLyBDb252ZXJ0IGFuIG9iamVjdCBpbnRvIGEgbGlzdCBvZiBgW2tleSwgdmFsdWVdYCBwYWlycy5cbiAgXy5wYWlycyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBwYWlycyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHBhaXJzW2ldID0gW2tleXNbaV0sIG9ialtrZXlzW2ldXV07XG4gICAgfVxuICAgIHJldHVybiBwYWlycztcbiAgfTtcblxuICAvLyBJbnZlcnQgdGhlIGtleXMgYW5kIHZhbHVlcyBvZiBhbiBvYmplY3QuIFRoZSB2YWx1ZXMgbXVzdCBiZSBzZXJpYWxpemFibGUuXG4gIF8uaW52ZXJ0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdFtvYmpba2V5c1tpXV1dID0ga2V5c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBzb3J0ZWQgbGlzdCBvZiB0aGUgZnVuY3Rpb24gbmFtZXMgYXZhaWxhYmxlIG9uIHRoZSBvYmplY3QuXG4gIC8vIEFsaWFzZWQgYXMgYG1ldGhvZHNgXG4gIF8uZnVuY3Rpb25zID0gXy5tZXRob2RzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihvYmpba2V5XSkpIG5hbWVzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVzLnNvcnQoKTtcbiAgfTtcblxuICAvLyBFeHRlbmQgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gcGFzc2VkLWluIG9iamVjdChzKS5cbiAgXy5leHRlbmQgPSBmdW5jdGlvbihvYmopIHtcbiAgICBlYWNoKHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSwgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgICAgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgb25seSBjb250YWluaW5nIHRoZSB3aGl0ZWxpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLnBpY2sgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgY29weSA9IHt9O1xuICAgIHZhciBrZXlzID0gY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgZWFjaChrZXlzLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkgaW4gb2JqKSBjb3B5W2tleV0gPSBvYmpba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29weTtcbiAgfTtcblxuICAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IHdpdGhvdXQgdGhlIGJsYWNrbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ub21pdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBjb3B5ID0ge307XG4gICAgdmFyIGtleXMgPSBjb25jYXQuYXBwbHkoQXJyYXlQcm90bywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoIV8uY29udGFpbnMoa2V5cywga2V5KSkgY29weVtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICAgIHJldHVybiBjb3B5O1xuICB9O1xuXG4gIC8vIEZpbGwgaW4gYSBnaXZlbiBvYmplY3Qgd2l0aCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gIF8uZGVmYXVsdHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBlYWNoKHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSwgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgICAgaWYgKG9ialtwcm9wXSA9PT0gdm9pZCAwKSBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIChzaGFsbG93LWNsb25lZCkgZHVwbGljYXRlIG9mIGFuIG9iamVjdC5cbiAgXy5jbG9uZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICAgIHJldHVybiBfLmlzQXJyYXkob2JqKSA/IG9iai5zbGljZSgpIDogXy5leHRlbmQoe30sIG9iaik7XG4gIH07XG5cbiAgLy8gSW52b2tlcyBpbnRlcmNlcHRvciB3aXRoIHRoZSBvYmosIGFuZCB0aGVuIHJldHVybnMgb2JqLlxuICAvLyBUaGUgcHJpbWFyeSBwdXJwb3NlIG9mIHRoaXMgbWV0aG9kIGlzIHRvIFwidGFwIGludG9cIiBhIG1ldGhvZCBjaGFpbiwgaW5cbiAgLy8gb3JkZXIgdG8gcGVyZm9ybSBvcGVyYXRpb25zIG9uIGludGVybWVkaWF0ZSByZXN1bHRzIHdpdGhpbiB0aGUgY2hhaW4uXG4gIF8udGFwID0gZnVuY3Rpb24ob2JqLCBpbnRlcmNlcHRvcikge1xuICAgIGludGVyY2VwdG9yKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuICB2YXIgZXEgPSBmdW5jdGlvbihhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgICAvLyBTZWUgdGhlIFtIYXJtb255IGBlZ2FsYCBwcm9wb3NhbF0oaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsKS5cbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT0gMSAvIGI7XG4gICAgLy8gQSBzdHJpY3QgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkgYmVjYXVzZSBgbnVsbCA9PSB1bmRlZmluZWRgLlxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gYSA9PT0gYjtcbiAgICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgICBpZiAoYSBpbnN0YW5jZW9mIF8pIGEgPSBhLl93cmFwcGVkO1xuICAgIGlmIChiIGluc3RhbmNlb2YgXykgYiA9IGIuX3dyYXBwZWQ7XG4gICAgLy8gQ29tcGFyZSBgW1tDbGFzc11dYCBuYW1lcy5cbiAgICB2YXIgY2xhc3NOYW1lID0gdG9TdHJpbmcuY2FsbChhKTtcbiAgICBpZiAoY2xhc3NOYW1lICE9IHRvU3RyaW5nLmNhbGwoYikpIHJldHVybiBmYWxzZTtcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgLy8gU3RyaW5ncywgbnVtYmVycywgZGF0ZXMsIGFuZCBib29sZWFucyBhcmUgY29tcGFyZWQgYnkgdmFsdWUuXG4gICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgICAvLyBlcXVpdmFsZW50IHRvIGBuZXcgU3RyaW5nKFwiNVwiKWAuXG4gICAgICAgIHJldHVybiBhID09IFN0cmluZyhiKTtcbiAgICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3JcbiAgICAgICAgLy8gb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICAgIHJldHVybiBhICE9ICthID8gYiAhPSArYiA6IChhID09IDAgPyAxIC8gYSA9PSAxIC8gYiA6IGEgPT0gK2IpO1xuICAgICAgY2FzZSAnW29iamVjdCBEYXRlXSc6XG4gICAgICBjYXNlICdbb2JqZWN0IEJvb2xlYW5dJzpcbiAgICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZSBjb21wYXJlZCBieSB0aGVpclxuICAgICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXG4gICAgICAgIC8vIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cbiAgICAgICAgcmV0dXJuICthID09ICtiO1xuICAgICAgLy8gUmVnRXhwcyBhcmUgY29tcGFyZWQgYnkgdGhlaXIgc291cmNlIHBhdHRlcm5zIGFuZCBmbGFncy5cbiAgICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6XG4gICAgICAgIHJldHVybiBhLnNvdXJjZSA9PSBiLnNvdXJjZSAmJlxuICAgICAgICAgICAgICAgYS5nbG9iYWwgPT0gYi5nbG9iYWwgJiZcbiAgICAgICAgICAgICAgIGEubXVsdGlsaW5lID09IGIubXVsdGlsaW5lICYmXG4gICAgICAgICAgICAgICBhLmlnbm9yZUNhc2UgPT0gYi5pZ25vcmVDYXNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGEgIT0gJ29iamVjdCcgfHwgdHlwZW9mIGIgIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcbiAgICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gICAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG4gICAgdmFyIGxlbmd0aCA9IGFTdGFjay5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICAgIGlmIChhU3RhY2tbbGVuZ3RoXSA9PSBhKSByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT0gYjtcbiAgICB9XG4gICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzXG4gICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cbiAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG4gICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJiAhKF8uaXNGdW5jdGlvbihhQ3RvcikgJiYgKGFDdG9yIGluc3RhbmNlb2YgYUN0b3IpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uaXNGdW5jdGlvbihiQ3RvcikgJiYgKGJDdG9yIGluc3RhbmNlb2YgYkN0b3IpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCdjb25zdHJ1Y3RvcicgaW4gYSAmJiAnY29uc3RydWN0b3InIGluIGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucHVzaChhKTtcbiAgICBiU3RhY2sucHVzaChiKTtcbiAgICB2YXIgc2l6ZSA9IDAsIHJlc3VsdCA9IHRydWU7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gICAgaWYgKGNsYXNzTmFtZSA9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cbiAgICAgIHNpemUgPSBhLmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpemUgPT0gYi5sZW5ndGg7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXG4gICAgICAgIHdoaWxlIChzaXplLS0pIHtcbiAgICAgICAgICBpZiAoIShyZXN1bHQgPSBlcShhW3NpemVdLCBiW3NpemVdLCBhU3RhY2ssIGJTdGFjaykpKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgb2JqZWN0cy5cbiAgICAgIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgICAgIGlmIChfLmhhcyhhLCBrZXkpKSB7XG4gICAgICAgICAgLy8gQ291bnQgdGhlIGV4cGVjdGVkIG51bWJlciBvZiBwcm9wZXJ0aWVzLlxuICAgICAgICAgIHNpemUrKztcbiAgICAgICAgICAvLyBEZWVwIGNvbXBhcmUgZWFjaCBtZW1iZXIuXG4gICAgICAgICAgaWYgKCEocmVzdWx0ID0gXy5oYXMoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgYVN0YWNrLCBiU3RhY2spKSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzLlxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBmb3IgKGtleSBpbiBiKSB7XG4gICAgICAgICAgaWYgKF8uaGFzKGIsIGtleSkgJiYgIShzaXplLS0pKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSAhc2l6ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBvYmplY3QgZnJvbSB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnBvcCgpO1xuICAgIGJTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gYSBkZWVwIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLlxuICBfLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIsIFtdLCBbXSk7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiBhcnJheSwgc3RyaW5nLCBvciBvYmplY3QgZW1wdHk/XG4gIC8vIEFuIFwiZW1wdHlcIiBvYmplY3QgaGFzIG5vIGVudW1lcmFibGUgb3duLXByb3BlcnRpZXMuXG4gIF8uaXNFbXB0eSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgaWYgKF8uaXNBcnJheShvYmopIHx8IF8uaXNTdHJpbmcob2JqKSkgcmV0dXJuIG9iai5sZW5ndGggPT09IDA7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBET00gZWxlbWVudD9cbiAgXy5pc0VsZW1lbnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gISEob2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMSk7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhbiBhcnJheT9cbiAgLy8gRGVsZWdhdGVzIHRvIEVDTUE1J3MgbmF0aXZlIEFycmF5LmlzQXJyYXlcbiAgXy5pc0FycmF5ID0gbmF0aXZlSXNBcnJheSB8fCBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSBhbiBvYmplY3Q/XG4gIF8uaXNPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbiAgfTtcblxuICAvLyBBZGQgc29tZSBpc1R5cGUgbWV0aG9kczogaXNBcmd1bWVudHMsIGlzRnVuY3Rpb24sIGlzU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc1JlZ0V4cC5cbiAgZWFjaChbJ0FyZ3VtZW50cycsICdGdW5jdGlvbicsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0RhdGUnLCAnUmVnRXhwJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBfWydpcycgKyBuYW1lXSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCAnICsgbmFtZSArICddJztcbiAgICB9O1xuICB9KTtcblxuICAvLyBEZWZpbmUgYSBmYWxsYmFjayB2ZXJzaW9uIG9mIHRoZSBtZXRob2QgaW4gYnJvd3NlcnMgKGFoZW0sIElFKSwgd2hlcmVcbiAgLy8gdGhlcmUgaXNuJ3QgYW55IGluc3BlY3RhYmxlIFwiQXJndW1lbnRzXCIgdHlwZS5cbiAgaWYgKCFfLmlzQXJndW1lbnRzKGFyZ3VtZW50cykpIHtcbiAgICBfLmlzQXJndW1lbnRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gISEob2JqICYmIF8uaGFzKG9iaiwgJ2NhbGxlZScpKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gT3B0aW1pemUgYGlzRnVuY3Rpb25gIGlmIGFwcHJvcHJpYXRlLlxuICBpZiAodHlwZW9mICgvLi8pICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgXy5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9O1xuICB9XG5cbiAgLy8gSXMgYSBnaXZlbiBvYmplY3QgYSBmaW5pdGUgbnVtYmVyP1xuICBfLmlzRmluaXRlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIGlzRmluaXRlKG9iaikgJiYgIWlzTmFOKHBhcnNlRmxvYXQob2JqKSk7XG4gIH07XG5cbiAgLy8gSXMgdGhlIGdpdmVuIHZhbHVlIGBOYU5gPyAoTmFOIGlzIHRoZSBvbmx5IG51bWJlciB3aGljaCBkb2VzIG5vdCBlcXVhbCBpdHNlbGYpLlxuICBfLmlzTmFOID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIF8uaXNOdW1iZXIob2JqKSAmJiBvYmogIT0gK29iajtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgYm9vbGVhbj9cbiAgXy5pc0Jvb2xlYW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlIHx8IG9iaiA9PT0gZmFsc2UgfHwgdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0IEJvb2xlYW5dJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGVxdWFsIHRvIG51bGw/XG4gIF8uaXNOdWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIHVuZGVmaW5lZD9cbiAgXy5pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHZvaWQgMDtcbiAgfTtcblxuICAvLyBTaG9ydGN1dCBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgaWYgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5IGRpcmVjdGx5XG4gIC8vIG9uIGl0c2VsZiAoaW4gb3RoZXIgd29yZHMsIG5vdCBvbiBhIHByb3RvdHlwZSkuXG4gIF8uaGFzID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG4gIH07XG5cbiAgLy8gVXRpbGl0eSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSdW4gVW5kZXJzY29yZS5qcyBpbiAqbm9Db25mbGljdCogbW9kZSwgcmV0dXJuaW5nIHRoZSBgX2AgdmFyaWFibGUgdG8gaXRzXG4gIC8vIHByZXZpb3VzIG93bmVyLiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcm9vdC5fID0gcHJldmlvdXNVbmRlcnNjb3JlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIEtlZXAgdGhlIGlkZW50aXR5IGZ1bmN0aW9uIGFyb3VuZCBmb3IgZGVmYXVsdCBpdGVyYXRvcnMuXG4gIF8uaWRlbnRpdHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBfLmNvbnN0YW50ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gIH07XG5cbiAgXy5wcm9wZXJ0eSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBwcmVkaWNhdGUgZm9yIGNoZWNraW5nIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHNldCBvZiBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5tYXRjaGVzID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICBpZiAob2JqID09PSBhdHRycykgcmV0dXJuIHRydWU7IC8vYXZvaWQgY29tcGFyaW5nIGFuIG9iamVjdCB0byBpdHNlbGYuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgaWYgKGF0dHJzW2tleV0gIT09IG9ialtrZXldKVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvLyBSdW4gYSBmdW5jdGlvbiAqKm4qKiB0aW1lcy5cbiAgXy50aW1lcyA9IGZ1bmN0aW9uKG4sIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIGFjY3VtID0gQXJyYXkoTWF0aC5tYXgoMCwgbikpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSBhY2N1bVtpXSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgaSk7XG4gICAgcmV0dXJuIGFjY3VtO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXggKGluY2x1c2l2ZSkuXG4gIF8ucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICBpZiAobWF4ID09IG51bGwpIHtcbiAgICAgIG1heCA9IG1pbjtcbiAgICAgIG1pbiA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xuICB9O1xuXG4gIC8vIEEgKHBvc3NpYmx5IGZhc3Rlcikgd2F5IHRvIGdldCB0aGUgY3VycmVudCB0aW1lc3RhbXAgYXMgYW4gaW50ZWdlci5cbiAgXy5ub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9O1xuXG4gIC8vIExpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgZXNjYXBpbmcuXG4gIHZhciBlbnRpdHlNYXAgPSB7XG4gICAgZXNjYXBlOiB7XG4gICAgICAnJic6ICcmYW1wOycsXG4gICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICc+JzogJyZndDsnLFxuICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICBcIidcIjogJyYjeDI3OydcbiAgICB9XG4gIH07XG4gIGVudGl0eU1hcC51bmVzY2FwZSA9IF8uaW52ZXJ0KGVudGl0eU1hcC5lc2NhcGUpO1xuXG4gIC8vIFJlZ2V4ZXMgY29udGFpbmluZyB0aGUga2V5cyBhbmQgdmFsdWVzIGxpc3RlZCBpbW1lZGlhdGVseSBhYm92ZS5cbiAgdmFyIGVudGl0eVJlZ2V4ZXMgPSB7XG4gICAgZXNjYXBlOiAgIG5ldyBSZWdFeHAoJ1snICsgXy5rZXlzKGVudGl0eU1hcC5lc2NhcGUpLmpvaW4oJycpICsgJ10nLCAnZycpLFxuICAgIHVuZXNjYXBlOiBuZXcgUmVnRXhwKCcoJyArIF8ua2V5cyhlbnRpdHlNYXAudW5lc2NhcGUpLmpvaW4oJ3wnKSArICcpJywgJ2cnKVxuICB9O1xuXG4gIC8vIEZ1bmN0aW9ucyBmb3IgZXNjYXBpbmcgYW5kIHVuZXNjYXBpbmcgc3RyaW5ncyB0by9mcm9tIEhUTUwgaW50ZXJwb2xhdGlvbi5cbiAgXy5lYWNoKFsnZXNjYXBlJywgJ3VuZXNjYXBlJ10sIGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIF9bbWV0aG9kXSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgaWYgKHN0cmluZyA9PSBudWxsKSByZXR1cm4gJyc7XG4gICAgICByZXR1cm4gKCcnICsgc3RyaW5nKS5yZXBsYWNlKGVudGl0eVJlZ2V4ZXNbbWV0aG9kXSwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGVudGl0eU1hcFttZXRob2RdW21hdGNoXTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIElmIHRoZSB2YWx1ZSBvZiB0aGUgbmFtZWQgYHByb3BlcnR5YCBpcyBhIGZ1bmN0aW9uIHRoZW4gaW52b2tlIGl0IHdpdGggdGhlXG4gIC8vIGBvYmplY3RgIGFzIGNvbnRleHQ7IG90aGVyd2lzZSwgcmV0dXJuIGl0LlxuICBfLnJlc3VsdCA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgdmFyIHZhbHVlID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICByZXR1cm4gXy5pc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlLmNhbGwob2JqZWN0KSA6IHZhbHVlO1xuICB9O1xuXG4gIC8vIEFkZCB5b3VyIG93biBjdXN0b20gZnVuY3Rpb25zIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5taXhpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGVhY2goXy5mdW5jdGlvbnMob2JqKSwgZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIGZ1bmMgPSBfW25hbWVdID0gb2JqW25hbWVdO1xuICAgICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbdGhpcy5fd3JhcHBlZF07XG4gICAgICAgIHB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jYWxsKHRoaXMsIGZ1bmMuYXBwbHkoXywgYXJncykpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBpbnRlZ2VyIGlkICh1bmlxdWUgd2l0aGluIHRoZSBlbnRpcmUgY2xpZW50IHNlc3Npb24pLlxuICAvLyBVc2VmdWwgZm9yIHRlbXBvcmFyeSBET00gaWRzLlxuICB2YXIgaWRDb3VudGVyID0gMDtcbiAgXy51bmlxdWVJZCA9IGZ1bmN0aW9uKHByZWZpeCkge1xuICAgIHZhciBpZCA9ICsraWRDb3VudGVyICsgJyc7XG4gICAgcmV0dXJuIHByZWZpeCA/IHByZWZpeCArIGlkIDogaWQ7XG4gIH07XG5cbiAgLy8gQnkgZGVmYXVsdCwgVW5kZXJzY29yZSB1c2VzIEVSQi1zdHlsZSB0ZW1wbGF0ZSBkZWxpbWl0ZXJzLCBjaGFuZ2UgdGhlXG4gIC8vIGZvbGxvd2luZyB0ZW1wbGF0ZSBzZXR0aW5ncyB0byB1c2UgYWx0ZXJuYXRpdmUgZGVsaW1pdGVycy5cbiAgXy50ZW1wbGF0ZVNldHRpbmdzID0ge1xuICAgIGV2YWx1YXRlICAgIDogLzwlKFtcXHNcXFNdKz8pJT4vZyxcbiAgICBpbnRlcnBvbGF0ZSA6IC88JT0oW1xcc1xcU10rPyklPi9nLFxuICAgIGVzY2FwZSAgICAgIDogLzwlLShbXFxzXFxTXSs/KSU+L2dcbiAgfTtcblxuICAvLyBXaGVuIGN1c3RvbWl6aW5nIGB0ZW1wbGF0ZVNldHRpbmdzYCwgaWYgeW91IGRvbid0IHdhbnQgdG8gZGVmaW5lIGFuXG4gIC8vIGludGVycG9sYXRpb24sIGV2YWx1YXRpb24gb3IgZXNjYXBpbmcgcmVnZXgsIHdlIG5lZWQgb25lIHRoYXQgaXNcbiAgLy8gZ3VhcmFudGVlZCBub3QgdG8gbWF0Y2guXG4gIHZhciBub01hdGNoID0gLyguKV4vO1xuXG4gIC8vIENlcnRhaW4gY2hhcmFjdGVycyBuZWVkIHRvIGJlIGVzY2FwZWQgc28gdGhhdCB0aGV5IGNhbiBiZSBwdXQgaW50byBhXG4gIC8vIHN0cmluZyBsaXRlcmFsLlxuICB2YXIgZXNjYXBlcyA9IHtcbiAgICBcIidcIjogICAgICBcIidcIixcbiAgICAnXFxcXCc6ICAgICAnXFxcXCcsXG4gICAgJ1xccic6ICAgICAncicsXG4gICAgJ1xcbic6ICAgICAnbicsXG4gICAgJ1xcdCc6ICAgICAndCcsXG4gICAgJ1xcdTIwMjgnOiAndTIwMjgnLFxuICAgICdcXHUyMDI5JzogJ3UyMDI5J1xuICB9O1xuXG4gIHZhciBlc2NhcGVyID0gL1xcXFx8J3xcXHJ8XFxufFxcdHxcXHUyMDI4fFxcdTIwMjkvZztcblxuICAvLyBKYXZhU2NyaXB0IG1pY3JvLXRlbXBsYXRpbmcsIHNpbWlsYXIgdG8gSm9obiBSZXNpZydzIGltcGxlbWVudGF0aW9uLlxuICAvLyBVbmRlcnNjb3JlIHRlbXBsYXRpbmcgaGFuZGxlcyBhcmJpdHJhcnkgZGVsaW1pdGVycywgcHJlc2VydmVzIHdoaXRlc3BhY2UsXG4gIC8vIGFuZCBjb3JyZWN0bHkgZXNjYXBlcyBxdW90ZXMgd2l0aGluIGludGVycG9sYXRlZCBjb2RlLlxuICBfLnRlbXBsYXRlID0gZnVuY3Rpb24odGV4dCwgZGF0YSwgc2V0dGluZ3MpIHtcbiAgICB2YXIgcmVuZGVyO1xuICAgIHNldHRpbmdzID0gXy5kZWZhdWx0cyh7fSwgc2V0dGluZ3MsIF8udGVtcGxhdGVTZXR0aW5ncyk7XG5cbiAgICAvLyBDb21iaW5lIGRlbGltaXRlcnMgaW50byBvbmUgcmVndWxhciBleHByZXNzaW9uIHZpYSBhbHRlcm5hdGlvbi5cbiAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoW1xuICAgICAgKHNldHRpbmdzLmVzY2FwZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuaW50ZXJwb2xhdGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmV2YWx1YXRlIHx8IG5vTWF0Y2gpLnNvdXJjZVxuICAgIF0uam9pbignfCcpICsgJ3wkJywgJ2cnKTtcblxuICAgIC8vIENvbXBpbGUgdGhlIHRlbXBsYXRlIHNvdXJjZSwgZXNjYXBpbmcgc3RyaW5nIGxpdGVyYWxzIGFwcHJvcHJpYXRlbHkuXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgc291cmNlID0gXCJfX3ArPSdcIjtcbiAgICB0ZXh0LnJlcGxhY2UobWF0Y2hlciwgZnVuY3Rpb24obWF0Y2gsIGVzY2FwZSwgaW50ZXJwb2xhdGUsIGV2YWx1YXRlLCBvZmZzZXQpIHtcbiAgICAgIHNvdXJjZSArPSB0ZXh0LnNsaWNlKGluZGV4LCBvZmZzZXQpXG4gICAgICAgIC5yZXBsYWNlKGVzY2FwZXIsIGZ1bmN0aW9uKG1hdGNoKSB7IHJldHVybiAnXFxcXCcgKyBlc2NhcGVzW21hdGNoXTsgfSk7XG5cbiAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBlc2NhcGUgKyBcIikpPT1udWxsPycnOl8uZXNjYXBlKF9fdCkpK1xcbidcIjtcbiAgICAgIH1cbiAgICAgIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGludGVycG9sYXRlICsgXCIpKT09bnVsbD8nJzpfX3QpK1xcbidcIjtcbiAgICAgIH1cbiAgICAgIGlmIChldmFsdWF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInO1xcblwiICsgZXZhbHVhdGUgKyBcIlxcbl9fcCs9J1wiO1xuICAgICAgfVxuICAgICAgaW5kZXggPSBvZmZzZXQgKyBtYXRjaC5sZW5ndGg7XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gICAgc291cmNlICs9IFwiJztcXG5cIjtcblxuICAgIC8vIElmIGEgdmFyaWFibGUgaXMgbm90IHNwZWNpZmllZCwgcGxhY2UgZGF0YSB2YWx1ZXMgaW4gbG9jYWwgc2NvcGUuXG4gICAgaWYgKCFzZXR0aW5ncy52YXJpYWJsZSkgc291cmNlID0gJ3dpdGgob2JqfHx7fSl7XFxuJyArIHNvdXJjZSArICd9XFxuJztcblxuICAgIHNvdXJjZSA9IFwidmFyIF9fdCxfX3A9JycsX19qPUFycmF5LnByb3RvdHlwZS5qb2luLFwiICtcbiAgICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgICBzb3VyY2UgKyBcInJldHVybiBfX3A7XFxuXCI7XG5cbiAgICB0cnkge1xuICAgICAgcmVuZGVyID0gbmV3IEZ1bmN0aW9uKHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonLCAnXycsIHNvdXJjZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZS5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIGlmIChkYXRhKSByZXR1cm4gcmVuZGVyKGRhdGEsIF8pO1xuICAgIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiByZW5kZXIuY2FsbCh0aGlzLCBkYXRhLCBfKTtcbiAgICB9O1xuXG4gICAgLy8gUHJvdmlkZSB0aGUgY29tcGlsZWQgZnVuY3Rpb24gc291cmNlIGFzIGEgY29udmVuaWVuY2UgZm9yIHByZWNvbXBpbGF0aW9uLlxuICAgIHRlbXBsYXRlLnNvdXJjZSA9ICdmdW5jdGlvbignICsgKHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonKSArICcpe1xcbicgKyBzb3VyY2UgKyAnfSc7XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH07XG5cbiAgLy8gQWRkIGEgXCJjaGFpblwiIGZ1bmN0aW9uLCB3aGljaCB3aWxsIGRlbGVnYXRlIHRvIHRoZSB3cmFwcGVyLlxuICBfLmNoYWluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIF8ob2JqKS5jaGFpbigpO1xuICB9O1xuXG4gIC8vIE9PUFxuICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgLy8gSWYgVW5kZXJzY29yZSBpcyBjYWxsZWQgYXMgYSBmdW5jdGlvbiwgaXQgcmV0dXJucyBhIHdyYXBwZWQgb2JqZWN0IHRoYXRcbiAgLy8gY2FuIGJlIHVzZWQgT08tc3R5bGUuIFRoaXMgd3JhcHBlciBob2xkcyBhbHRlcmVkIHZlcnNpb25zIG9mIGFsbCB0aGVcbiAgLy8gdW5kZXJzY29yZSBmdW5jdGlvbnMuIFdyYXBwZWQgb2JqZWN0cyBtYXkgYmUgY2hhaW5lZC5cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udGludWUgY2hhaW5pbmcgaW50ZXJtZWRpYXRlIHJlc3VsdHMuXG4gIHZhciByZXN1bHQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhaW4gPyBfKG9iaikuY2hhaW4oKSA6IG9iajtcbiAgfTtcblxuICAvLyBBZGQgYWxsIG9mIHRoZSBVbmRlcnNjb3JlIGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlciBvYmplY3QuXG4gIF8ubWl4aW4oXyk7XG5cbiAgLy8gQWRkIGFsbCBtdXRhdG9yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgZWFjaChbJ3BvcCcsICdwdXNoJywgJ3JldmVyc2UnLCAnc2hpZnQnLCAnc29ydCcsICdzcGxpY2UnLCAndW5zaGlmdCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvYmogPSB0aGlzLl93cmFwcGVkO1xuICAgICAgbWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgIGlmICgobmFtZSA9PSAnc2hpZnQnIHx8IG5hbWUgPT0gJ3NwbGljZScpICYmIG9iai5sZW5ndGggPT09IDApIGRlbGV0ZSBvYmpbMF07XG4gICAgICByZXR1cm4gcmVzdWx0LmNhbGwodGhpcywgb2JqKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBBZGQgYWxsIGFjY2Vzc29yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgZWFjaChbJ2NvbmNhdCcsICdqb2luJywgJ3NsaWNlJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5jYWxsKHRoaXMsIG1ldGhvZC5hcHBseSh0aGlzLl93cmFwcGVkLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcblxuICBfLmV4dGVuZChfLnByb3RvdHlwZSwge1xuXG4gICAgLy8gU3RhcnQgY2hhaW5pbmcgYSB3cmFwcGVkIFVuZGVyc2NvcmUgb2JqZWN0LlxuICAgIGNoYWluOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2NoYWluID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gYSB3cmFwcGVkIGFuZCBjaGFpbmVkIG9iamVjdC5cbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd3JhcHBlZDtcbiAgICB9XG5cbiAgfSk7XG5cbiAgLy8gQU1EIHJlZ2lzdHJhdGlvbiBoYXBwZW5zIGF0IHRoZSBlbmQgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBTUQgbG9hZGVyc1xuICAvLyB0aGF0IG1heSBub3QgZW5mb3JjZSBuZXh0LXR1cm4gc2VtYW50aWNzIG9uIG1vZHVsZXMuIEV2ZW4gdGhvdWdoIGdlbmVyYWxcbiAgLy8gcHJhY3RpY2UgZm9yIEFNRCByZWdpc3RyYXRpb24gaXMgdG8gYmUgYW5vbnltb3VzLCB1bmRlcnNjb3JlIHJlZ2lzdGVyc1xuICAvLyBhcyBhIG5hbWVkIG1vZHVsZSBiZWNhdXNlLCBsaWtlIGpRdWVyeSwgaXQgaXMgYSBiYXNlIGxpYnJhcnkgdGhhdCBpc1xuICAvLyBwb3B1bGFyIGVub3VnaCB0byBiZSBidW5kbGVkIGluIGEgdGhpcmQgcGFydHkgbGliLCBidXQgbm90IGJlIHBhcnQgb2ZcbiAgLy8gYW4gQU1EIGxvYWQgcmVxdWVzdC4gVGhvc2UgY2FzZXMgY291bGQgZ2VuZXJhdGUgYW4gZXJyb3Igd2hlbiBhblxuICAvLyBhbm9ueW1vdXMgZGVmaW5lKCkgaXMgY2FsbGVkIG91dHNpZGUgb2YgYSBsb2FkZXIgcmVxdWVzdC5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZSgndW5kZXJzY29yZScsIFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfO1xuICAgIH0pO1xuICB9XG59KS5jYWxsKHRoaXMpO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIFByb21pc2UsXG4gIE9wdGlvbnNcbikge1xuXG4gIHZhciBVbml0U2VxdWVuY2VyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoVW5pdFNlcXVlbmNlci5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzICAgICAgICAgICA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcbiAgICAgIHRoaXMuX3NlcXVlbmNlID0gb3B0cy5nZXRPckVsc2UoXCJpbml0aWFsU2VxdWVuY2VcIiwgMCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkdmFuY2VzIGl0cyBzZXF1ZW5jZSBieSBgYnlgLCBvciBieSBgMWAgaWYgYGJ5YCBpcyBub3QgcHJvdmlkZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYnkge251bWJlcn0gdGhlIGFtb3VudCB0byBhZHZhbmNlIGJ5LiBEZWZhdWx0cyB0byBgMWAuXG4gICAgICogQGFzeW5jXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5kZWZpbmVkPn1cbiAgICAgKi9cbiAgICBhZHZhbmNlOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbihieSkge1xuICAgICAgLy8gV2FoaCB3YWhoIC0gZG9uJ3QgdXNlIGBieSB8fCAxYCwgb3IgeW91IGNhbid0IGFkdmFuY2UgYnkgMCwgd2hpY2ggaXMgc2lsbHlcbiAgICAgIC8vIGJ1dCBwb3RlbnRpYWxseSBuZWNlc3NhcnkuXG4gICAgICBieSAgICAgICAgICAgICA9IF8uaXNVbmRlZmluZWQoYnkpID8gMSA6IGJ5O1xuXG4gICAgICBpZiAoYnkgPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuaXRTZXF1ZW5jZXIjYWR2YW5jZSgpIHJlcXVpcmVzIHBvc2l0aXZlIGBieWAgb2Zmc2V0XCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXF1ZW5jZSA9IHRoaXMuX3NlcXVlbmNlICsgYnk7XG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHNlcXVlbmNlLiBUaGlzIHZhbHVlIHNob3VsZCBhbHdheXMgYmUgdGhlIHNhbWVcbiAgICAgKiBvciBncmVhdGVyIHRoYW4gYSB2YWx1ZSByZXR1cm5lZCBwcmV2aW91c2x5IChpbiB0aW1lKS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBjdXJyZW50IHNlcXVlbmNlXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlcXVlbmNlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFVuaXRTZXF1ZW5jZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCJibHVlYmlyZFwiKSxcbiAgcmVxdWlyZShcIi4uL29wdGlvbnNcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgUHJvbWlzZSxcbiAgT3B0aW9uc1xuKSB7XG5cbiAgLyoqXG4gICAqIEEgU2VxdWVuY2VyIHdoaWNoIGFkdmFuY2VzIGJ5IHJlYWRpbmcgZnJvbSBhIENsb2NrLlxuICAgKiBOb3RlIHRoYXQgdGhpcyBDbG9ja1NlcXVlbmNlciByZWxpZXMgb24gdGhlIENsb2NrIHByb3RvY29sLCB3aGljaFxuICAgKiBvbmx5IHByb3ZpZGVzIGBDbG9jayNnZXRUaW1lKClgLiBJdCBkb2VzIG5vdCBtb2RpZnkgdGhlIGNsb2NrIGl0c2VsZi5cbiAgICogVGhpcyBtZWFucyBpZiB5b3UncmUgdXNpbmcgYSBMb2dpY2FsQ2xvY2ssIGl0J3Mgc3RpbGwgdXAgdG8gdGhlIGNsb2NrJ3NcbiAgICogb3duZXIgdG8gYWR2YW5jZSB0aGUgY2xvY2sgZm9yIHRoZSBzZXF1ZW5jZXIgdG8gYWR2YW5jZS5cbiAgICovXG4gIHZhciBDbG9ja1NlcXVlbmNlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgXy5leHRlbmQoQ2xvY2tTZXF1ZW5jZXIucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcblxuICAgICAgdGhpcy5fY2xvY2sgICAgPSBvcHRzLmdldE9yRXJyb3IoXCJjbG9ja1wiKTtcbiAgICAgIHRoaXMuX3NlcXVlbmNlID0gb3B0cy5nZXRPckVsc2UoXCJpbml0aWFsU2VxdWVuY2VcIiwgMCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkdmFuY2VzIGJ5IHNldHRpbmcgaXRzIHNlcXVlbmNlIHRvIHRoZSBiYWNraW5nIGNsb2NrJ3MgdGltZS5cbiAgICAgKiBOb3RlIHRoYXQgaWYgdGhpcyBtZXRob2QgaXMgY2FsbGVkIHR3aWNlIHdpdGhpbiB0aGUgc2FtZSB0aW1lIHVuaXQsXG4gICAgICogdGhlIHNlcXVlbmNlIHdpbGwgbm90IGFjdHVhbGx5IGFkdmFuY2UsIHNpbmNlIHVuaXF1ZSB0aW1lIGlzIG5vdFxuICAgICAqIGd1YXJhbnRlZWQgYnkgb3VyIGNsb2Nrcy5cbiAgICAgKlxuICAgICAqIEBhc3luY1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPD59XG4gICAgICovXG4gICAgYWR2YW5jZTogUHJvbWlzZS5tZXRob2QoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZVxuICAgICAgICAuYmluZCh0aGlzKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fY2xvY2suZ2V0VGltZSgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdGhpcy5fc2VxdWVuY2UgPSB0O1xuICAgICAgICB9KTtcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2VxdWVuY2UuIFRoaXMgdmFsdWUgc2hvdWxkIGFsd2F5cyBiZSB0aGUgc2FtZVxuICAgICAqIG9yIGdyZWF0ZXIgdGhhbiBhIHZhbHVlIHJldHVybmVkIHByZXZpb3VzbHkgKGluIHRpbWUpLlxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn0gdGhlIGN1cnJlbnQgc2VxdWVuY2VcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VxdWVuY2U7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gQ2xvY2tTZXF1ZW5jZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCJibHVlYmlyZFwiKSxcbiAgcmVxdWlyZShcIi4uL29wdGlvbnNcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgUHJvbWlzZSxcbiAgT3B0aW9uc1xuKSB7XG5cbiAgdmFyIERlbGVnYXRpbmdGb3J3YXJkaW5nU2VxdWVuY2VyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoRGVsZWdhdGluZ0ZvcndhcmRpbmdTZXF1ZW5jZXIucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcbiAgICAgIHRoaXMuX2RlbGVnYXRlU2VxdWVuY2VyID0gb3B0cy5nZXRPckVycm9yKFwiZGVsZWdhdGVcIik7XG4gICAgICB0aGlzLl9mb3J3YXJkVGFyZ2V0cyA9IF8uY2xvbmUob3B0cy5nZXRPckVsc2UoXCJ0YXJnZXRzXCIsIFtdKSk7XG4gICAgfSxcbiAgICBhZGRUYXJnZXQ6IGZ1bmN0aW9uKHNlcSkge1xuICAgICAgdGhpcy5fZm9yd2FyZFRhcmdldHMucHVzaChzZXEpO1xuICAgIH0sXG4gICAgYWR2YW5jZTogUHJvbWlzZS5tZXRob2QoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcyA9IHRoaXMuX2RlbGVnYXRlU2VxdWVuY2VyO1xuICAgICAgcmV0dXJuIHMuYWR2YW5jZS5hcHBseShzLCBhcmd1bWVudHMpXG4gICAgICAuYmluZCh0aGlzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlXG4gICAgICAgICAgLmFsbChfLmludm9rZSh0aGlzLl9mb3J3YXJkVGFyZ2V0cywgXCJhZHZhbmNlXCIpKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgc2VxdWVuY2VyJ3NcbiAgICAgICAgICAgIC8vIGFkdmFuY2UgY2FsbCAoaWYgYW55KS4gVGhlIGFkdmFuY2VtZW50IG9mIHRoZSBmb3J3YXJkXG4gICAgICAgICAgICAvLyB0YXJnZXRzIHNob3VsZCBiZSB0cmFuc3BhcmVudC5cbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KSxcbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcyA9IHRoaXMuX2RlbGVnYXRlU2VxdWVuY2VyO1xuICAgICAgcmV0dXJuIHMudmFsdWUuYXBwbHkocywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBEZWxlZ2F0aW5nRm9yd2FyZGluZ1NlcXVlbmNlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcImJsdWViaXJkXCIpLFxuICByZXF1aXJlKFwiLi4vb3B0aW9uc1wiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBQcm9taXNlLFxuICBPcHRpb25zXG4pIHtcblxuICAvKipcbiAgICogQSBVbml0U2VxdWVuY2VyIHdoaWNoIHJlcG9ydHMgaXRzIHNlcXVlbmNlIHN1bW1lZCB3aXRoIHRoZSBzZXF1ZW5jZXNcbiAgICogb2YgaXRzIGludGVybmFsIGNvbGxlY3Rpb24gb2Ygc2VxdWVuY2Vycy5cbiAgICpcbiAgICogVGhpcyBkZXZpY2UgaXMgdXNlZnVsIGZvciB0cmFja2luZyB0aGUgc3RhdGUgb2YgZGF0YSBjb21wcmlzZWQgZnJvbSBtdWx0aXBsZVxuICAgKiBzb3VyY2VzLiBGb3IgaW5zdGFuY2UsIHlvdSBtaWdodCBoYXZlIENhY2hpbmdEYXRhU3RvcmUoQSkgc3RvcmluZyBkYXRhXG4gICAqIGZyb20gU291cmNlKEEpLCB0cmFja2VkIGJ5IFNlcXVlbmNlcihBKSwgYW5kIENhY2hpbmdEYXRhU3RvcmUoQikgc3RvcmluZ1xuICAgKiBkYXRhIGZyb20gU291cmNlKEIpLCB0cmFja2VkIGJ5IFNlcXVlbmNlcihCKS4gTWVhbndoaWxlLCB5b3UgbWF5IGhhdmVcbiAgICogQ2FjaGluZ0RhdGFTdG9yZShDKSwgc3RvcmluZyBkYXRhIGZyb20gU291cmNlKEEgKyBCKSwgYW5kIHRyYWNrZWQgYnlcbiAgICogU2VxdWVuY2VyKEMpID0gU2VxdWVuY2VyKEEgKyBCKSAtIGEgRGVsZWdhdGluZ0NvbXBvc2l0ZVNlcXVlbmNlci5cbiAgICpcbiAgICogVGh1cywgaWYgU2VxdWVuY2VyKEEpIGlzIGFkdmFuY2VkLCBpdCBtYXkgaW52YWxpZGF0ZSBDYWNoaW5nRGF0YVN0b3JlKEEpIG9yXG4gICAqIENhY2hpbmdEYXRhU3RvcmUoQykgb3IgYm90aC5cbiAgICpcbiAgICogTm90ZSB0aGlzIHBhcnRpY3VsYXIgdXNhZ2UgaXMgZ2VuZXJhbGx5IG9ubHkgdXNlZnVsIGZvciBVbml0IHNlcXVlbmNlcnMuXG4gICAqXG4gICAqIElmIHlvdSdkIGxpa2UgdGhlIGFib3ZlIGZ1bmN0aW9uYWxpdHksIGJ1dCB3aXRoIFNlcXVlbmNlcihBKSBhbmRcbiAgICogU2VxdWVuY2VyKEIpIGFzIENsb2NrU2VxdWVuY2VycywgYW5kIFNlcXVlbmNlcihDKSBtZXJlbHkgdHJhY2tpbmdcbiAgICogbW9kaWZpY2F0aW9uLCB5b3UnZCBuZWVkIHRvIHVzZSBhIERlbGVnYXRpbmdGb3J3YXJkaW5nU2VxdWVuY2VyIGZvciBBIGFuZCBCLFxuICAgKiBmb3J3YXJkaW5nIHRoZW0gdG8gVW5pdFNlcXVlbmNlcihDKS5cbiAgICpcbiAgICogRGVsZWdhdGluZ0NvbXBvc2l0ZVNlcXVlbmNlciBhbmQgRGVsZWdhdGluZ0ZvcndhcmRpbmdTZXF1ZW5jZXIgYXJlIGVmZmVjdGl2bHlcbiAgICogb3Bwb3NpdGVzIG9mIGVhY2ggb3RoZXIuIERlbGVnYXRpbmdDb21wb3NpdGVTZXF1ZW5jZXIgY29tcG9zZXMgdGhlIGB2YWx1ZWBcbiAgICogb2YgbXVsdGlwbGUgdW5kZXJseWluZyBzZXF1ZW5jZXJzIChwdWxsKSwgYW5kIERlbGVnYXRpbmdGb3J3YXJkaW5nU2VxdWVuY2VyXG4gICAqIGZvcndhcmRzIHRoZSBgYWR2YW5jZWAgY2FsbCB0byBtdWx0aXBsZSB0YXJnZXRzIChwdXNoKS5cbiAgICovXG4gIHZhciBEZWxlZ2F0aW5nQ29tcG9zaXRlU2VxdWVuY2VyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoRGVsZWdhdGluZ0NvbXBvc2l0ZVNlcXVlbmNlci5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdGhpcy5fZGVsZWdhdGVTZXF1ZW5jZXIgPSBvcHRzLmdldE9yRXJyb3IoXCJkZWxlZ2F0ZVwiKTtcbiAgICAgIHRoaXMuX3NlcXVlbmNlcnMgPSBfLmNsb25lKG9wdHMuZ2V0T3JFbHNlKFwic2VxdWVuY2Vyc1wiLCBbXSkpO1xuICAgIH0sXG4gICAgYWRkU2VxdWVuY2VyOiBmdW5jdGlvbihzZXEpIHtcbiAgICAgIHRoaXMuX3NlcXVlbmNlcnMucHVzaChzZXEpO1xuICAgIH0sXG4gICAgYWR2YW5jZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcyA9IHRoaXMuX2RlbGVnYXRlU2VxdWVuY2VyO1xuICAgICAgcmV0dXJuIHMuYWR2YW5jZS5hcHBseShzLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9cbiAgICAgICAgLmNoYWluKHRoaXMuX3NlcXVlbmNlcnMpXG4gICAgICAgIC5pbnZva2UoXCJ2YWx1ZVwiKVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKHN1bSwgbikge1xuICAgICAgICAgIHJldHVybiBzdW0gKyBuO1xuICAgICAgICB9LCAwKVxuICAgICAgICAudmFsdWUoKSArIHRoaXMuX2RlbGVnYXRlU2VxdWVuY2VyLnZhbHVlKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gRGVsZWdhdGluZ0NvbXBvc2l0ZVNlcXVlbmNlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcImJsdWViaXJkXCIpLFxuICByZXF1aXJlKFwiLi4vb3B0aW9uc1wiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBQcm9taXNlLFxuICBPcHRpb25zXG4pIHtcbiAgLyoqXG4gICAqIEEgQ2xvY2sgd2hpY2ggYWxsb3dzIG1hbnVhbGx5IG1hbmlwdWxhdGluZyB0aGUgdW5kZXJseWluZyB0aW1lIHZhbHVlLFxuICAgKiBpcnJlc3BlY3RpdmUgb2YgcmVhbCB0aW1lLiBVc2VmdWwgZm9yIHRlc3RpbmcuXG4gICAqL1xuICB2YXIgTG9naWNhbENsb2NrID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoTG9naWNhbENsb2NrLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIG9wdHMgPSBPcHRpb25zLmZyb21PYmplY3Qob3B0cyk7XG4gICAgICB0aGlzLl9jdXJyZW50VGltZSA9IG9wdHMuZ2V0T3JFbHNlKFwiaW5pdGlhbFRpbWVcIiwgMCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBhc3luY1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IFRpbWUgaW4gbWlsbGlzZWNvbmRzIHNpbmNlIGVwb2NoXG4gICAgICogQHNlZSBDbG9jayNnZXRUaW1lKClcbiAgICAgKi9cbiAgICBnZXRUaW1lOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50VGltZTtcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIEFkdmFuY2VzIGludGVybmFsIHRpbWUsIGVpdGhlciBgb3B0cy5ieWAgYSBjZXJ0YWluIG9mZnNldCwgb3JcbiAgICAgKiBgb3B0cy50b2AgYSBwYXJ0aWN1bGFyIGFic29sdXRlIHRpbWUuIElmIHN1Y2Nlc3NmdWwsIHJldHVybnMgdGhlIHJlc3VsdFxuICAgICAqIG9mIGNhbGxpbmcgYExvZ2ljYWxDbG9jayNnZXRUaW1lKClgIGFzIGEgY29udmVuaWVuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0cy50byB7bnVtYmVyfSBhYnNvbHV0ZSB0aW1lIHRvIHNldCBjbG9jayB0by4gTXVzdCBiZSBsYXJnZXJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICB0aGFuIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgKiBAcGFyYW0gb3B0cy5ieSB7bnVtYmVyfSBvZmZzZXQgdG8gYWRkIHRvIGN1cnJlbnQgdGltZS4gTXVzdCBiZSBwb3NpdGl2ZS5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBEZWZhdWx0cyB0byBgMWAgaWYgbmVpdGhlciBgb3B0cy50b2Agb3IgYG9wdHMuYnlgXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgYXJlIHNwZWNpZmllZC5cbiAgICAgKiBAYXN5bmNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSByZXN1bHQgb2YgYExvZ2ljYWxDbG9jayNnZXRUaW1lKClgXG4gICAgICovXG4gICAgYWR2YW5jZVRpbWU6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKG9wdHMpe1xuICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcbiAgICAgIHZhciBieSA9IG9wdHMuZ2V0T3JFbHNlKFwiYnlcIiwgMSksXG4gICAgICAgICAgdG8gPSBvcHRzLmdldE9yRWxzZShcInRvXCIsIHVuZGVmaW5lZCk7XG4gICAgICBpZiAoIV8uaXNVbmRlZmluZWQodG8pKSB7XG4gICAgICAgIGlmICh0byA8IHRoaXMuX2N1cnJlbnRUaW1lKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTG9naWNhbENsb2NrI2FkdmFuY2VUaW1lKCkgcmVxdWlyZXMgZm9yd2FyZCBtb3ZlbWVudCBvZiB0aW1lXCIpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY3VycmVudFRpbWUgPSB0bztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChieSA8IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMb2dpY2FsQ2xvY2sjYWR2YW5jZVRpbWUoKSByZXF1aXJlcyBmb3J3YXJkIG1vdmVtZW50IG9mIHRpbWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY3VycmVudFRpbWUgPSB0aGlzLl9jdXJyZW50VGltZSArIGJ5O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZ2V0VGltZSgpO1xuICAgIH0pXG4gIH0pO1xuXG4gIHJldHVybiBMb2dpY2FsQ2xvY2s7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCJibHVlYmlyZFwiKSxcbiAgcmVxdWlyZShcIi4uLy4uL2NvcmUvb3B0aW9uc1wiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBQcm9taXNlXG4pIHtcblxuICAvKipcbiAgICogQSBDbG9jayB3aGljaCBkZWxlZ2F0ZXMgdG8gdGhlIHN5c3RlbSBjbG9jay5cbiAgICovXG4gIHZhciBTeXN0ZW1DbG9jayA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKFN5c3RlbUNsb2NrLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge30sXG4gICAgLyoqXG4gICAgICogQGFzeW5jXG4gICAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gVGltZSBpbiBtaWxsaXNlY29uZHMgc2luY2UgZXBvY2hcbiAgICAgKiBAc2VlIENsb2NrI2dldFRpbWUoKVxuICAgICAqL1xuICAgIGdldFRpbWU6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCk7XG4gICAgfSlcbiAgfSk7XG5cbiAgcmV0dXJuIFN5c3RlbUNsb2NrO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiYmx1ZWJpcmRcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgX1xuKSB7XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgcmF3IGNvbmZpZywgZW5zdXJlcyBibG9icyBjYW4gYmUgZmV0Y2hlZCByZWdhcmRsZXNzIG9mXG4gICAqIHNjb3BlIHVuaW9uIHNjb3BlIChpLmUuLCBkb2VzIHVuaW9uIGNhbm9uaWNhbGl6YXRpb24pLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSwgYSBjb25maWcgd2l0aCBzY29wZSB1bmlvbiBgXCJiYmIrYWFhXCJgIGNhbiBsYXRlciBiZVxuICAgKiBmZXRjaGVkIHVzaW5nIGVpdGhlciBgXCJhYWErYmJiXCJgIG9yIGBcImJiYithYWFcImAuIEl0IGRvZXMgdGhpc1xuICAgKiBieSB1bmlmb3JtbHkgb3JkZXJpbmcgdGhlIHVuaW9uJ3MgY29tcG9zaXRlIHNjb3Blcy5cbiAgICpcbiAgICogVGhpcyBwcm9iYWJseSBpc24ndCBhIHVzZWZ1bCBjbGFzcyBvbiBpdHMgb3duLiBJbnN0ZWFkLCBkZWZlciB0b1xuICAgKiBgU2NvcGVkQ29uZmlndXJhdGlvblJlc29sdmVyYCBvciBgQ29uZmlndXJhdGlvbk1hZ2ljYC5cbiAgICovXG4gIHZhciBTY29wZWRDb25maWd1cmF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfLmV4dGVuZChTY29wZWRDb25maWd1cmF0aW9uLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKHJhd0NvbmZpZykge1xuICAgICAgcmF3Q29uZmlnID0gcmF3Q29uZmlnIHx8IHt9O1xuICAgICAgdGhpcy5fc2NvcGVzID0ge307XG4gICAgICAvLyBTb3J0IHRoZSBzY29wZSBzdHJpbmdzXG4gICAgICBfLmVhY2gocmF3Q29uZmlnLCBmdW5jdGlvbihjb25maWcsIHNjb3BlU3RyaW5nKSB7XG4gICAgICAgIHZhciBzY29wZSA9IHNjb3BlU3RyaW5nLnNwbGl0KFwiK1wiKS5zb3J0KCkuam9pbihcIitcIik7XG4gICAgICAgIHRoaXMuX3Njb3Blc1tzY29wZV0gPSBjb25maWc7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgYmxvYkZvclNjb3BlOiBmdW5jdGlvbihzY29wZSkge1xuICAgICAgcmV0dXJuIF8uY2xvbmUodGhpcy5fc2NvcGVzW3Njb3BlLnNwbGl0KFwiK1wiKS5zb3J0KCkuam9pbihcIitcIildIHx8IHt9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBTY29wZWRDb25maWd1cmF0aW9uO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIFNjb3BlZENvbmZpZ3VyYXRpb25cbikge1xuXG4gIC8qKlxuICAgKiBBIGRldmljZSBmb3IgcmVzb2x2aW5nIGEgc2V0IG9mIHJhdyBjb25maWd1cmF0aW9ucyBnaXZlbiBhIHNldCBvZlxuICAgKiBzY29wZXMuXG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZnVsIGZvciBoYXZpbmcgdGhpbmdzIGxpa2UgcmVnaW9uLSBvciBzdGFnZS1zcGVjaWZpYyAoYW5kL29yIGJvdGgpXG4gICAqIGNvbmZpZ3VyYXRpb25zLlxuICAgKlxuICAgKiBHaXZlbiBzZXRzIG9mIHJhdyBjb25maWd1cmF0aW9ucyBvZiB0aGUgZm9ybTpcbiAgICpcbiAgICogICB7XG4gICAqICAgICBcInNjb3BlLTFcIiA6IHtcbiAgICogICAgICAgXCJrZXkxXCIgOiBcInZhbDFcIlxuICAgKiAgICAgfSxcbiAgICogICAgIFwic2NvcGUtMStlbnYxXCI6IHtcbiAgICogICAgICAgXCJrZXkyXCIgOiBcInZhbC1lbnYtMVwiXG4gICAqICAgICB9LFxuICAgKiAgICAgXCJzY29wZS0xK2VudjJcIjoge1xuICAgKiAgICAgICBcImtleTJcIiA6IFwidmFsLWVudi0yXCJcbiAgICogICAgIH1cbiAgICogICB9XG4gICAqXG4gICAqIGByZXNvbHZlKFtcInNjb3BlLTFcIl0pYCB3aWxsIHJldHVybjpcbiAgICpcbiAgICogICB7XG4gICAqICAgICBcImtleTFcIiA6IFwidmFsMlwiXG4gICAqICAgfVxuICAgKlxuICAgKiBgcmVzb2x2ZShbXCJzY29wZS0xXCIsIFwiZW52LTFcIl0pYCB3aWxsIHJldHVybjpcbiAgICpcbiAgICogICB7XG4gICAqICAgICBcImtleTFcIiA6IFwidmFsMVwiLFxuICAgKiAgICAgXCJrZXkyXCIgOiBcInZhbC1lbnYtMVwiXG4gICAqICAgfVxuICAgKlxuICAgKiBgcmVzb2x2ZShbXCJzY29wZS0xXCIsIFwiZW52LTJcIl0pYCB3aWxsIHJldHVybjpcbiAgICpcbiAgICogICB7XG4gICAqICAgICBcImtleTFcIiA6IFwidmFsMVwiLFxuICAgKiAgICAgXCJrZXkyXCIgOiBcInZhbC1lbnYtMlwiXG4gICAqICAgfVxuICAgKlxuICAgKiBTY29wZXMgdW5pb25zIGFyZSByZXNvbHZlZCBpbiB0aGUgZm9sbG93aW5nIG1hbm5lcjpcbiAgICogICAxLiBhIGdpdmVuIHNjb3BlIHVuaW9uJ3MgcGFydHMgYXJlIHNvcnRlZFxuICAgKiAgIDIuIHNjb3BlIHVuaW9ucyBhcyBhIHdob2xlIGFyZSBhcHBsaWVkIGluIHNvcnRlZCBvcmRlclxuICAgKiAgIDMuIHJlcGVhdCB0aGUgcHJvY2VzcyBmb3IgYSBnaXZlbiBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIFNvLCBnaXZlbiB0aHJlZSBjb25maWdzOlxuICAgKlxuICAgKiAge1xuICAgKiAgICBcImFhYVwiOiAuLi4gLy8gMVxuICAgKiAgICBcImNjY1wiOiAuLi4gLy8gMlxuICAgKiAgfVxuICAgKlxuICAgKiAge1xuICAgKiAgICBcImFhYStjY2NcIjogLi4uIC8vIDNcbiAgICogICAgXCJjY2NcIiAgICA6IC4uLiAvLyA0XG4gICAqICB9XG4gICAqXG4gICAqICB7XG4gICAqICAgIFwiYWFhK2JiYlwiOiAuLi4gLy8gNVxuICAgKiAgICBcImJiYlwiICAgIDogLi4uIC8vIDZcbiAgICogIH1cbiAgICpcbiAgICogVGhlIHJlc3VsdGluZyBvcmRlciB3aWxsIGJlOlxuICAgKiAgIDEsIDIsIDQsIDMsIDYsIDVcbiAgICpcbiAgICogTm90aWNlIDMgY29tZXMgYmVmb3JlIDUgZXZlbiB0aG91Z2ggaXQncyBsb2dpY2FsbHkgXCJhZnRlclwiIGluIHNvcnRlZCBvcmRlcixcbiAgICogYmVjYXVzZSBjb25maWd1cmF0aW9uIG9yZGVyIG92ZXJyaWRlcyBzY29wZSBvcmRlci4gVGhhdCBpcywgc2NvcGUgdW5pb25zXG4gICAqIGFyZSBvcmRlcmVkIHdpdGhpbiBhIGNvbmZpZywgYW5kIHRoZW4gaW4gY29uZmlnIG9yZGVyLlxuICAgKlxuICAgKi9cbiAgdmFyIFNjb3BlZENvbmZpZ3VyYXRpb25SZXNvbHZlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgXy5leHRlbmQoU2NvcGVkQ29uZmlndXJhdGlvblJlc29sdmVyLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fY29uZmlncyA9IFtdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIHJhd0NvbmZpZyBpcyBhIHNldCBvZiBjb25maWd1cmF0aW9uIHNjb3BlcyBhbmQgdGhlaXIgY29uZmlndXJhdGlvblxuICAgICAqIHZhbHVlcywgZS5nLjpcbiAgICAgKlxuICAgICAqICAge1xuICAgICAqICAgICBcInNjb3BlLTFcIiA6IHtcbiAgICAgKiAgICAgICBcImtleTFcIiA6IFwidmFsMVwiXG4gICAgICogICAgIH0sXG4gICAgICogICAgIFwic2NvcGUtMStlbnYxXCI6IHtcbiAgICAgKiAgICAgICBcImtleTJcIiA6IFwidmFsLWVudi0xXCJcbiAgICAgKiAgICAgfSxcbiAgICAgKiAgICAgXCJzY29wZS0xK2VudjJcIjoge1xuICAgICAqICAgICAgIFwia2V5MlwiIDogXCJ2YWwtZW52LTJcIlxuICAgICAqICAgICB9XG4gICAgICogICB9XG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgdGhlIHBsdXMgKCspIHNpZ24gaXMgcmVzZXJ2ZWQgZm9yIHNwZWNpZnlpbmcgc2NvcGUgdW5pb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJhd0NvbmZpZyB7b2JqZWN0fSAocmVxdWlyZWQpXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB0aGlzXG4gICAgICovXG4gICAgYWRkOiBmdW5jdGlvbihyYXdDb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZ3MucHVzaChuZXcgU2NvcGVkQ29uZmlndXJhdGlvbihyYXdDb25maWcpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNvbHZlcyBhIGNvbXB1dGVkIGZpbmFsIGNvbmZpZ3VyYXRpb24gZ2l2ZW4gYSBzZXQgb2Ygc2NvcGVzIHRvIGFwcGx5LFxuICAgICAqIGFuZCBhIHNldCBvZiBjb25maWdzIGxvYWRlZCB2aWEgYFNjb3BlZENvbmZpZ3VyYXRpb25SZXNvbHZlciNhZGQoKWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGVzIHtBcnJheTxzdHJpbmc+fVxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gdGhlIGNvbXB1dGVkIGNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICByZXNvbHZlOiBmdW5jdGlvbihzY29wZXMpIHtcbiAgICAgIHNjb3BlcyA9IHBvd2Vyc2V0KF8uY2xvbmUoc2NvcGVzKS5zb3J0KCkpO1xuICAgICAgc2NvcGVzLnNoaWZ0KCk7IC8vIEdldCByaWQgb2YgdGhlIGVtcHR5IHNldC5cblxuICAgICAgc2NvcGVzID0gXy5jb2xsZWN0KHNjb3BlcywgZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gcy5qb2luKFwiK1wiKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgcmVsZXZhbnRDb25maWdzID0gX1xuICAgICAgICAuY2hhaW4odGhpcy5fY29uZmlncylcbiAgICAgICAgLmNvbGxlY3QoZnVuY3Rpb24oYykge1xuICAgICAgICAgIHJldHVybiBfLmNvbGxlY3Qoc2NvcGVzLCBmdW5jdGlvbihzY29wZSkge1xuICAgICAgICAgICAgcmV0dXJuIGMuYmxvYkZvclNjb3BlKHNjb3BlKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9KS5mbGF0dGVuKCkudmFsdWUoKTtcblxuICAgICAgcmVsZXZhbnRDb25maWdzLnVuc2hpZnQoe30pO1xuICAgICAgcmV0dXJuIF8uZXh0ZW5kLmFwcGx5KF8sIHJlbGV2YW50Q29uZmlncyk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgcG93ZXJzZXQgPSBmdW5jdGlvbiAoYXJ5KSB7XG4gICAgICB2YXIgcHMgPSBbW11dO1xuICAgICAgZm9yICh2YXIgaT0wOyBpIDwgYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGxlbiA9IHBzLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICAgIHBzLnB1c2gocHNbal0uY29uY2F0KGFyeVtpXSkpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBwcztcbiAgfVxuXG4gIHJldHVybiBTY29wZWRDb25maWd1cmF0aW9uUmVzb2x2ZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCIuL3Njb3BlZC1jb25maWd1cmF0aW9uXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIE9wdGlvbnNcbikge1xuXG4gIHZhciBDb25zb2xlTG9nQXBwZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICB2YXIgcCA9IGZ1bmN0aW9uKG51bSkge1xuICAgIGlmICgoXCJcIiArIG51bSkubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gXCIwXCIgKyBudW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudW07XG4gICAgfVxuICB9O1xuXG4gIF8uZXh0ZW5kKENvbnNvbGVMb2dBcHBlbmRlci5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdGhpcy5fY29uc29sZSA9IG9wdHMuZ2V0T3JFbHNlKFwiY29uc29sZVwiLCBjb25zb2xlKTtcbiAgICAgIHRoaXMuX3RpbWVEZWxlZ2F0ZSA9IG9wdHMuZ2V0T3JFbHNlKFwidGltZURlbGVnYXRlXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIFtkLmdldFVUQ0Z1bGxZZWFyKCksIHAoZC5nZXRVVENNb250aCgpKSwgcChkLmdldFVUQ0RheSgpKV0uam9pbihcIi9cIikgK1xuICAgICAgICAgIFwiIFwiICsgW3AoZC5nZXRVVENIb3VycygpKSwgcChkLmdldFVUQ01pbnV0ZXMoKSksIHAoZC5nZXRVVENTZWNvbmRzKCkpXS5qb2luKFwiOlwiKSArXG4gICAgICAgICAgXCIuXCIgKyBkLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGxvZzogZnVuY3Rpb24obG9nZ2VyTmFtZSwgZGVzY2VuZGFudHMsIGxvZ0xldmVsLCBsb2dMZXZlbE5hbWUsIGFyZ3MpIHtcbiAgICAgIC8vIFVzZSB0aGUgZnVydGhlc3QgYW5jZXN0b3IgYXMgdGhlIGxvZ2dlZCBuYW1lIChzaW5jZSBpdCBvcmlnaW5hdGVkIHRoZXJlKVxuICAgICAgdmFyIGZ1cnRoZXN0QW5jZXN0b3IgPSBkZXNjZW5kYW50c1tkZXNjZW5kYW50cy5sZW5ndGggLSAxXTtcbiAgICAgIGlmIChmdXJ0aGVzdEFuY2VzdG9yKSB7XG4gICAgICAgIGxvZ2dlck5hbWUgPSBmdXJ0aGVzdEFuY2VzdG9yO1xuICAgICAgfVxuICAgICAgdGhpcy5fbG9nKFtcIltcIitsb2dMZXZlbE5hbWUrXCJdW1wiK3RoaXMuX2dldFRpbWUoKStcIl1bXCIrbG9nZ2VyTmFtZStcIl1cIl0uY29uY2F0KGFyZ3MpKTtcbiAgICB9LFxuXG4gICAgX2dldFRpbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RpbWVEZWxlZ2F0ZSgpO1xuICAgIH0sXG5cbiAgICBfbG9nOiBmdW5jdGlvbihsb2dJdGVtcykge1xuICAgICAgLy8gV2h5IGRvZXMgaGUgZG8gdGhpcz8gSXMgaGUgaW5zYW5lPyBXZWxsLCB5ZXMuXG4gICAgICAvL1xuICAgICAgLy8gQnV0IG1vc3RseSwgSSBkbyB0aGlzIGJlY2F1c2UgY29uc29sZS5sb2cgaXNuJ3QsIGluIGFsbCBjYXNlcyxcbiAgICAgIC8vIHNvbWV0aGluZyB5b3UgY2FuIGNhbGwgLmFwcGx5IG9uLiBMYXN0IEkgY2hlY2tlZCwgaW4gSUUgY2FsbGluZ1xuICAgICAgLy8gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgW10pIHdpbGwgdGhyb3cgYW4gZXJyb3IuIFNvIHRoYXQncyB3aHkgdGhlXG4gICAgICAvLyBiaWcgdWdseSBzd2l0Y2guXG4gICAgICAvL1xuICAgICAgLy8gSWYgeW91IG5lZWQgbW9yZSB0aGFuIDcgaXRlbXMsIHdlbGwsIEkgY2FuJ3QgaGVscCB5b3UgKGJ1dCB5b3UgY2FuIC0gYWRkIGFub3RoZXJcbiAgICAgIC8vIHN3aXRjaCBjYXNlKS5cbiAgICAgIHN3aXRjaChsb2dJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHRoaXMuX2NvbnNvbGUubG9nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLl9jb25zb2xlLmxvZyhsb2dJdGVtc1swXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLl9jb25zb2xlLmxvZyhsb2dJdGVtc1swXSwgbG9nSXRlbXNbMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5fY29uc29sZS5sb2cobG9nSXRlbXNbMF0sIGxvZ0l0ZW1zWzFdLCBsb2dJdGVtc1syXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLl9jb25zb2xlLmxvZyhsb2dJdGVtc1swXSwgbG9nSXRlbXNbMV0sIGxvZ0l0ZW1zWzJdLCBsb2dJdGVtc1szXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLl9jb25zb2xlLmxvZyhsb2dJdGVtc1swXSwgbG9nSXRlbXNbMV0sIGxvZ0l0ZW1zWzJdLCBsb2dJdGVtc1szXSwgbG9nSXRlbXNbNF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgdGhpcy5fY29uc29sZS5sb2cobG9nSXRlbXNbMF0sIGxvZ0l0ZW1zWzFdLCBsb2dJdGVtc1syXSwgbG9nSXRlbXNbM10sIGxvZ0l0ZW1zWzRdLCBsb2dJdGVtc1s1XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICB0aGlzLl9jb25zb2xlLmxvZyhsb2dJdGVtc1swXSwgbG9nSXRlbXNbMV0sIGxvZ0l0ZW1zWzJdLCBsb2dJdGVtc1szXSwgbG9nSXRlbXNbNF0sIGxvZ0l0ZW1zWzVdLCBsb2dJdGVtc1s2XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdmFyIGxhYmVsID0gbG9nSXRlbXMuc2hpZnQoKTtcbiAgICAgICAgICB0aGlzLl9jb25zb2xlLmxvZyhsYWJlbCwgbG9nSXRlbXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIENvbnNvbGVMb2dBcHBlbmRlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcIi4uLy4uL2NvcmUvb3B0aW9uc1wiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBSZWYsXG4gIERlbGVnYXRpbmdSZWZcbikge1xuXG4gIHZhciBoZWxwZXIgPSBmdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gbmV3IFJlZih2YWwpO1xuICB9O1xuXG4gIGhlbHBlci5kZWxlZ2F0aW5nID0gZnVuY3Rpb24ocmVmKSB7XG4gICAgcmV0dXJuIG5ldyBEZWxlZ2F0aW5nUmVmKHJlZik7XG4gIH07XG5cbiAgcmV0dXJuIGhlbHBlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcIi4vcmVmXCIpLFxuICByZXF1aXJlKFwiLi9kZWxlZ2F0aW5nLXJlZlwiKVxuKTtcblxufSkoKSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoXCIuL3Byb21pc2UuanNcIikoKTtcbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBQcm9taXNlLFxuICBPcHRpb25zLFxuICBMb2dnZXIsXG4gIENvbmZpZ3VyYXRpb25NYWdpYyxcbiAgQXBwQ29udGFpbmVyXG4pIHtcbiAgdmFyIExvZyA9IExvZ2dlci5jcmVhdGUoXCJCb290c3RyYXBwZXJcIik7XG5cbiAgdmFyIEJvb3RzdHJhcHBlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKEJvb3RzdHJhcHBlci5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdGhpcy5fY29uZmlncyA9IG9wdHMuZ2V0T3JFcnJvcihcImNvbmZpZ3VyYXRpb25zXCIpO1xuICAgICAgdGhpcy5fc2NvcGVzID0gb3B0cy5nZXRPckVycm9yKFwic2NvcGVzXCIpO1xuICAgICAgdGhpcy5fYXBwS2xhc3MgPSBvcHRzLmdldE9yRXJyb3IoXCJhcHBsaWNhdGlvbkNvbnN0cnVjdG9yXCIpO1xuICAgIH0sXG4gICAgYm9vdHN0cmFwOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBQcm9taXNlXG4gICAgICAgIC5iaW5kKHRoaXMpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBjb25maWcgICAgICAgPSBDb25maWd1cmF0aW9uTWFnaWMucmVzb2x2ZUNvbmZpZyh0aGlzLl9zY29wZXMsIHRoaXMuX2NvbmZpZ3MpLFxuICAgICAgICAgICAgICBBcHBLbGFzcyAgICAgPSB0aGlzLl9hcHBLbGFzcztcblxuICAgICAgICAgIExvZy5pbmZvKFwiVXNpbmcgcmVzb2x2ZWQgY29uZmlndXJhdGlvbjogXCIsIEpTT04uc3RyaW5naWZ5KGNvbmZpZykpO1xuXG4gICAgICAgICAgdmFyIGFwcCAgICAgICAgICA9IG5ldyBBcHBLbGFzcyh7Y29uZmlndXJhdGlvbjogY29uZmlnfSksXG4gICAgICAgICAgICAgIGFwcENvbnRhaW5lciA9IG5ldyBBcHBDb250YWluZXIoe2FwcDogYXBwfSk7XG5cbiAgICAgICAgICByZXR1cm4gYXBwQ29udGFpbmVyO1xuICAgICAgICB9KTtcbiAgICB9KVxuICB9KTtcblxuICByZXR1cm4gQm9vdHN0cmFwcGVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiYmx1ZWJpcmRcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL29wdGlvbnNcIiksXG4gIHJlcXVpcmUoXCIuLi9sb2dnaW5nL2xvZ2dlclwiKSxcbiAgcmVxdWlyZShcIi4vY29uZmlndXJhdGlvbi1tYWdpY1wiKSxcbiAgcmVxdWlyZShcIi4vd2ViLWFwcC1jb250YWluZXJcIilcbik7XG4iLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSwgcHJvY2VzczogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIFByb21pc2UsXG4gIE9wdGlvbnMsXG4gIExvZ2dlclxuKSB7XG5cbiAgdmFyIExvZyA9IExvZ2dlci5jcmVhdGUoXCJBcHBDb250YWluZXJcIik7XG5cbiAgdmFyIFdlYkFwcENvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKFdlYkFwcENvbnRhaW5lci5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpXG4gICAgICB0aGlzLl9hcHAgPSBvcHRzLmdldE9yRXJyb3IoXCJhcHBcIik7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBQcm9taXNlXG4gICAgICAgIC5iaW5kKHRoaXMpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9hcHAuc3RhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgfSksXG5cbiAgICBzdG9wOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgIHJldHVybiB0aGlzLl9hcHAuc3RvcCgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChyZWFzb24pIHtcbiAgICAgICAgICBMb2cuZXJyb3IoXCJTdG9wcGluZyBkdWUgdG8gcmVhc29uOlwiLCByZWFzb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuICB9KTtcblxuICByZXR1cm4gV2ViQXBwQ29udGFpbmVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiYmx1ZWJpcmRcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL29wdGlvbnNcIiksXG4gIHJlcXVpcmUoXCIuLi9sb2dnaW5nL2xvZ2dlclwiKVxuKTtcblxufSkoKSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF9cbikge1xuXG4gIHZhciBXZWJTY2hlZHVsZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChXZWJTY2hlZHVsZXIucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7fSxcblxuICAgIHJ1blNvb246IGZ1bmN0aW9uKGZuKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlKGZuKTtcbiAgICB9LFxuXG4gICAgc2NoZWR1bGU6IGZ1bmN0aW9uKGZuLCBkZWxheSkge1xuICAgICAgZGVsYXkgPSBkZWxheSB8fCAxO1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIGRlbGF5KTtcbiAgICB9LFxuXG4gICAgdW5zY2hlZHVsZTogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFdlYlNjaGVkdWxlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKVxuKTtcbiIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBPcHRpb25zLFxuICBQdWJTdWIsXG4gIFRyYW5zZm9ybUNoYWluLFxuICBNYXBUcmFuc2Zvcm0sXG4gIEZpbHRlclRyYW5zZm9ybVxuKSB7XG5cbiAgdmFyIFJlYWN0aXZlTm9kZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKFJlYWN0aXZlTm9kZS5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdGhpcy5fY2hhaW4gPSBuZXcgVHJhbnNmb3JtQ2hhaW4oKTtcbiAgICAgIHRoaXMuX3BhcmVudCA9IG9wdHMuZ2V0T3JFbHNlKFwicGFyZW50XCIsIG51bGwpO1xuICAgICAgdGhpcy5fcHVic3ViID0gXy5leHRlbmQoe30sIFB1YlN1Yik7XG5cbiAgICAgIHZhciB0cmFuc2Zvcm1zID0gb3B0cy5nZXRPckVsc2UoXCJ0cmFuc2Zvcm1zXCIsIFtdKVxuXG4gICAgICBfLmVhY2godHJhbnNmb3JtcywgZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLl9jaGFpbi5hZGRUcmFuc2Zvcm0odCk7XG4gICAgICB9LCB0aGlzKTtcblxuICAgICAgXy5iaW5kQWxsKHRoaXMsIFwiX29uUGFyZW50RWxlbWVudFwiLCBcIl9ub3RpZnlTdWJzY3JpYmVyc1wiKTtcblxuICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQuX3B1YnN1Yi5vbihcImVsZW1lbnRcIiwgdGhpcy5fb25QYXJlbnRFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2hhaW4ub24oXCJlbGVtZW50XCIsIHRoaXMuX25vdGlmeVN1YnNjcmliZXJzKTtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICB9LFxuICAgIG1hcDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIHJldHVybiBuZXcgUmVhY3RpdmVOb2RlKHtcbiAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICB0cmFuc2Zvcm1zOiBbbmV3IE1hcFRyYW5zZm9ybShmbildXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZpbHRlcjogZnVuY3Rpb24oZm4pIHtcbiAgICAgIHJldHVybiBuZXcgUmVhY3RpdmVOb2RlKHtcbiAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICB0cmFuc2Zvcm1zOiBbbmV3IEZpbHRlclRyYW5zZm9ybShmbildXG4gICAgICB9KTtcbiAgICB9LFxuICAgIF9hcHBseTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdGhpcy5fY2hhaW4uYXBwbHkoZWxlbWVudCk7XG4gICAgfSxcbiAgICBfYXBwbHlFcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAvLyBUT0RPOiBNZWFucyBvZiBiZWluZyBub3RpZmllZCBvZiBlcnJvcnMsIHBselxuICAgIH0sXG4gICAgX29uUGFyZW50RWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdGhpcy5fYXBwbHkoZWxlbWVudCk7XG4gICAgfSxcbiAgICBfbm90aWZ5U3Vic2NyaWJlcnM6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3B1YnN1Yi5ub3RpZnkoXCJlbGVtZW50XCIsIGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFJlYWN0aXZlTm9kZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcIi4uL2NvcmUvb3B0aW9uc1wiKSxcbiAgcmVxdWlyZShcIi4uL2NvcmUvcHViLXN1YlwiKSxcbiAgcmVxdWlyZShcIi4vdHJhbnNmb3JtLWNoYWluXCIpLFxuICByZXF1aXJlKFwiLi9tYXAtdHJhbnNmb3JtXCIpLFxuICByZXF1aXJlKFwiLi9maWx0ZXItdHJhbnNmb3JtXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIE9wdGlvbnMsXG4gIFJlZixcbiAgU2V0VGltZW91dFNjaGVkdWxlclxuKSB7XG5cbiAgdmFyIERlZmF1bHRSdW50aW1lID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoRGVmYXVsdFJ1bnRpbWUucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcblxuICAgICAgdGhpcy5fc2NoZWR1bGVyUmVmID0gUmVmKG9wdHMuZ2V0T3JFbHNlRm4oXCJzY2hlZHVsZXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2V0VGltZW91dFNjaGVkdWxlcigpO1xuICAgICAgfSkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7UmVmPFNjaGVkdWxlcj59XG4gICAgICovXG4gICAgc2NoZWR1bGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBSZWYuZGVsZWdhdGluZyh0aGlzLl9zY2hlZHVsZXJSZWYpO1xuICAgIH0sXG5cbiAgICBzZXRTY2hlZHVsZXI6IGZ1bmN0aW9uKHNjaGVkdWxlcikge1xuICAgICAgdGhpcy5fc2NoZWR1bGVyUmVmLnNldChzY2hlZHVsZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIERlZmF1bHRSdW50aW1lO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9vcHRpb25zXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9yZWZcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL3NjaGVkdWxlci9zZXQtdGltZW91dC1zY2hlZHVsZXJcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgTG9nZ2VyLFxuICBPcHRpb25zXG4pIHtcblxuICB2YXIgVEVOX01JTlVURVNfSU5fTUlMTElTRUNPTkRTID0gNjAgKiAxMDAwICogMTA7XG5cbiAgdmFyIExvZyA9IExvZ2dlci5jcmVhdGUoXCJQcm9jZXNzS2VlcEFsaXZlXCIpO1xuXG4gIHZhciBQcm9jZXNzS2VlcEFsaXZlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoUHJvY2Vzc0tlZXBBbGl2ZS5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdGhpcy5fc2NoZWR1bGVyID0gb3B0cy5nZXRPckVycm9yKFwic2NoZWR1bGVyXCIpO1xuICAgICAgdGhpcy5fdGltZW91dElkID0gbnVsbDtcblxuICAgICAgXy5iaW5kQWxsKHRoaXMsIFwiX2N5Y2xlXCIpO1xuICAgIH0sXG4gICAgc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgTG9nLmRlYnVnKFwiU3RhcnRpbmcgUHJvY2Vzc0tlZXBBbGl2ZVwiKTtcbiAgICAgIHRoaXMuX2N5Y2xlKCk7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIExvZy5kZWJ1ZyhcIlN0b3BwaW5nIFByb2Nlc3NLZWVwQWxpdmVcIik7XG4gICAgICBpZiAodGhpcy5fdGltZW91dElkKSB7XG4gICAgICAgIHRoaXMuX3NjaGVkdWxlci5nZXQoKS51bnNjaGVkdWxlKHRoaXMuX3RpbWVvdXRJZCk7XG4gICAgICAgIHRoaXMuX3RpbWVvdXRJZCA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBfY3ljbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fdGltZW91dElkID0gdGhpcy5fc2NoZWR1bGVyLmdldCgpLnNjaGVkdWxlKFxuICAgICAgICB0aGlzLl9jeWNsZSxcbiAgICAgICAgVEVOX01JTlVURVNfSU5fTUlMTElTRUNPTkRTXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFByb2Nlc3NLZWVwQWxpdmU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCIuLi8uLi9sb2dnaW5nL2xvZ2dlclwiKSxcbiAgcmVxdWlyZShcIi4uLy4uL2NvcmUvb3B0aW9uc1wiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfXG4pIHtcblxuICAvKipcbiAgICogQSBiYXNpYyBSZWYgc2VydmVzIGFzIGEgbWVhbnMgb2YgaW5kaXJlY3Rpb24gYmV0d2VlbiByZWZlcmVuY2VzIGFuZCB0aGVpclxuICAgKiB2YWx1ZXMsIGFsbG93aW5nIGFuIG91dHNpZGUgYWdlbnQgdG8gbW9kaWZ5IHRoZSB1bmRlcmx5aW5nIHZhbHVlLlxuICAgKi9cbiAgdmFyIFJlZiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKFJlZi5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHRoaXMuX3ZhbCA9IHZhbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSB2YWx1ZSBib3hlZCBieSB0aGlzIFJlZlxuICAgICAqXG4gICAgICogQHJldHVybnMge2R5bmFtaWN9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBhIG5ldyBib3hlZCB2YWx1ZS4gTm90ZSB0aGlzIG1ldGhvZCBpcyBzcGVjaWZpYyB0byB0aGlzIFJlZlxuICAgICAqIGltcGxlbWVudGF0aW9uLCBhbmQgbm90IHRoZSBSZWYgcHJvdG9jb2wsIHdoaWNoIG9ubHkgZGVmaW5lc1xuICAgICAqIGBSZWYjZ2V0KClgLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5ld1ZhbCB7ZHluYW1pY30gdGhlIHZhbHVlIHRvIGJveFxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24obmV3VmFsKSB7XG4gICAgICBpZiAobmV3VmFsIGluc3RhbmNlb2YgUmVmKSB7XG4gICAgICAgIHRoaXMuX3ZhbCA9IG5ld1ZhbC5nZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3ZhbCA9IG5ld1ZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBSZWY7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgX1xuKSB7XG5cbiAgLyoqXG4gICAqIEEgcmVmIHdob3NlIGJveGVkIHZhbHVlIGlzIGFub3RoZXIgcmVmXG4gICAqL1xuICB2YXIgRGVsZWdhdGluZ1JlZiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKERlbGVnYXRpbmdSZWYucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ocmVmKSB7XG4gICAgICB0aGlzLl9kZWxlZ2F0ZVJlZiA9IHJlZjtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGVSZWYuZ2V0KCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gRGVsZWdhdGluZ1JlZjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKVxuKTtcblxufSkoKSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbiIsIihmdW5jdGlvbihwcm9jZXNzKXsvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIG9sZDtcbmlmICh0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIikgb2xkID0gUHJvbWlzZTtcbmZ1bmN0aW9uIG5vQ29uZmxpY3QoYmx1ZWJpcmQpIHtcbiAgICB0cnkgeyBpZiAoUHJvbWlzZSA9PT0gYmx1ZWJpcmQpIFByb21pc2UgPSBvbGQ7IH1cbiAgICBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gYmx1ZWJpcmQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGFzeW5jID0gcmVxdWlyZShcIi4vYXN5bmMuanNcIik7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpO1xuXG52YXIgSU5URVJOQUwgPSBmdW5jdGlvbigpe307XG52YXIgQVBQTFkgPSB7fTtcbnZhciBORVhUX0ZJTFRFUiA9IHtlOiBudWxsfTtcblxudmFyIGNhc3QgPSByZXF1aXJlKFwiLi90aGVuYWJsZXMuanNcIikoUHJvbWlzZSwgSU5URVJOQUwpO1xudmFyIFByb21pc2VBcnJheSA9IHJlcXVpcmUoXCIuL3Byb21pc2VfYXJyYXkuanNcIikoUHJvbWlzZSwgSU5URVJOQUwsIGNhc3QpO1xudmFyIENhcHR1cmVkVHJhY2UgPSByZXF1aXJlKFwiLi9jYXB0dXJlZF90cmFjZS5qc1wiKSgpO1xudmFyIENhdGNoRmlsdGVyID0gcmVxdWlyZShcIi4vY2F0Y2hfZmlsdGVyLmpzXCIpKE5FWFRfRklMVEVSKTtcbnZhciBQcm9taXNlUmVzb2x2ZXIgPSByZXF1aXJlKFwiLi9wcm9taXNlX3Jlc29sdmVyLmpzXCIpO1xuXG52YXIgaXNBcnJheSA9IHV0aWwuaXNBcnJheTtcblxudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciB0cnlDYXRjaDEgPSB1dGlsLnRyeUNhdGNoMTtcbnZhciB0cnlDYXRjaDIgPSB1dGlsLnRyeUNhdGNoMjtcbnZhciB0cnlDYXRjaEFwcGx5ID0gdXRpbC50cnlDYXRjaEFwcGx5O1xudmFyIFJhbmdlRXJyb3IgPSBlcnJvcnMuUmFuZ2VFcnJvcjtcbnZhciBUeXBlRXJyb3IgPSBlcnJvcnMuVHlwZUVycm9yO1xudmFyIENhbmNlbGxhdGlvbkVycm9yID0gZXJyb3JzLkNhbmNlbGxhdGlvbkVycm9yO1xudmFyIFRpbWVvdXRFcnJvciA9IGVycm9ycy5UaW1lb3V0RXJyb3I7XG52YXIgT3BlcmF0aW9uYWxFcnJvciA9IGVycm9ycy5PcGVyYXRpb25hbEVycm9yO1xudmFyIG9yaWdpbmF0ZXNGcm9tUmVqZWN0aW9uID0gZXJyb3JzLm9yaWdpbmF0ZXNGcm9tUmVqZWN0aW9uO1xudmFyIG1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbiA9IGVycm9ycy5tYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb247XG52YXIgY2FuQXR0YWNoID0gZXJyb3JzLmNhbkF0dGFjaDtcbnZhciB0aHJvd2VyID0gdXRpbC50aHJvd2VyO1xudmFyIGFwaVJlamVjdGlvbiA9IHJlcXVpcmUoXCIuL2Vycm9yc19hcGlfcmVqZWN0aW9uXCIpKFByb21pc2UpO1xuXG5cbnZhciBtYWtlU2VsZlJlc29sdXRpb25FcnJvciA9IGZ1bmN0aW9uIFByb21pc2UkX21ha2VTZWxmUmVzb2x1dGlvbkVycm9yKCkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiY2lyY3VsYXIgcHJvbWlzZSByZXNvbHV0aW9uIGNoYWluXCIpO1xufTtcblxuZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICAgIGlmICh0eXBlb2YgcmVzb2x2ZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwidGhlIHByb21pc2UgY29uc3RydWN0b3IgcmVxdWlyZXMgYSByZXNvbHZlciBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IgIT09IFByb21pc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInRoZSBwcm9taXNlIGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBpbnZva2VkIGRpcmVjdGx5XCIpO1xuICAgIH1cbiAgICB0aGlzLl9iaXRGaWVsZCA9IDA7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9IHZvaWQgMDtcbiAgICB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMCA9IHZvaWQgMDtcbiAgICB0aGlzLl9wcm9taXNlMCA9IHZvaWQgMDtcbiAgICB0aGlzLl9yZWNlaXZlcjAgPSB2b2lkIDA7XG4gICAgdGhpcy5fc2V0dGxlZFZhbHVlID0gdm9pZCAwO1xuICAgIHRoaXMuX2JvdW5kVG8gPSB2b2lkIDA7XG4gICAgaWYgKHJlc29sdmVyICE9PSBJTlRFUk5BTCkgdGhpcy5fcmVzb2x2ZUZyb21SZXNvbHZlcihyZXNvbHZlcik7XG59XG5cblByb21pc2UucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBQcm9taXNlJGJpbmQodGhpc0FyZykge1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcmV0Ll9mb2xsb3codGhpcyk7XG4gICAgcmV0Ll9wcm9wYWdhdGVGcm9tKHRoaXMsIDIgfCAxKTtcbiAgICByZXQuX3NldEJvdW5kVG8odGhpc0FyZyk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gUHJvbWlzZSR0b1N0cmluZygpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IFByb21pc2VdXCI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5jYXVnaHQgPSBQcm9taXNlLnByb3RvdHlwZVtcImNhdGNoXCJdID1cbmZ1bmN0aW9uIFByb21pc2UkY2F0Y2goZm4pIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobGVuID4gMSkge1xuICAgICAgICB2YXIgY2F0Y2hJbnN0YW5jZXMgPSBuZXcgQXJyYXkobGVuIC0gMSksXG4gICAgICAgICAgICBqID0gMCwgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbiAtIDE7ICsraSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGNhdGNoSW5zdGFuY2VzW2orK10gPSBpdGVtO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2F0Y2hGaWx0ZXJUeXBlRXJyb3IgPVxuICAgICAgICAgICAgICAgICAgICBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBIGNhdGNoIGZpbHRlciBtdXN0IGJlIGFuIGVycm9yIGNvbnN0cnVjdG9yIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwib3IgYSBmaWx0ZXIgZnVuY3Rpb25cIik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9hdHRhY2hFeHRyYVRyYWNlKGNhdGNoRmlsdGVyVHlwZUVycm9yKTtcbiAgICAgICAgICAgICAgICBhc3luYy5pbnZva2UodGhpcy5fcmVqZWN0LCB0aGlzLCBjYXRjaEZpbHRlclR5cGVFcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoSW5zdGFuY2VzLmxlbmd0aCA9IGo7XG4gICAgICAgIGZuID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgIHRoaXMuX3Jlc2V0VHJhY2UoKTtcbiAgICAgICAgdmFyIGNhdGNoRmlsdGVyID0gbmV3IENhdGNoRmlsdGVyKGNhdGNoSW5zdGFuY2VzLCBmbiwgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLl90aGVuKHZvaWQgMCwgY2F0Y2hGaWx0ZXIuZG9GaWx0ZXIsIHZvaWQgMCxcbiAgICAgICAgICAgIGNhdGNoRmlsdGVyLCB2b2lkIDApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbih2b2lkIDAsIGZuLCB2b2lkIDAsIHZvaWQgMCwgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPVxuZnVuY3Rpb24gUHJvbWlzZSR0aGVuKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbihkaWRGdWxmaWxsLCBkaWRSZWplY3QsIGRpZFByb2dyZXNzLFxuICAgICAgICB2b2lkIDAsIHZvaWQgMCk7XG59O1xuXG5cblByb21pc2UucHJvdG90eXBlLmRvbmUgPVxuZnVuY3Rpb24gUHJvbWlzZSRkb25lKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3RoZW4oZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCBkaWRQcm9ncmVzcyxcbiAgICAgICAgdm9pZCAwLCB2b2lkIDApO1xuICAgIHByb21pc2UuX3NldElzRmluYWwoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnNwcmVhZCA9IGZ1bmN0aW9uIFByb21pc2Ukc3ByZWFkKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCkge1xuICAgIHJldHVybiB0aGlzLl90aGVuKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgdm9pZCAwLFxuICAgICAgICBBUFBMWSwgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmlzQ2FuY2VsbGFibGUgPSBmdW5jdGlvbiBQcm9taXNlJGlzQ2FuY2VsbGFibGUoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzUmVzb2x2ZWQoKSAmJlxuICAgICAgICB0aGlzLl9jYW5jZWxsYWJsZSgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gUHJvbWlzZSR0b0pTT04oKSB7XG4gICAgdmFyIHJldCA9IHtcbiAgICAgICAgaXNGdWxmaWxsZWQ6IGZhbHNlLFxuICAgICAgICBpc1JlamVjdGVkOiBmYWxzZSxcbiAgICAgICAgZnVsZmlsbG1lbnRWYWx1ZTogdm9pZCAwLFxuICAgICAgICByZWplY3Rpb25SZWFzb246IHZvaWQgMFxuICAgIH07XG4gICAgaWYgKHRoaXMuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICByZXQuZnVsZmlsbG1lbnRWYWx1ZSA9IHRoaXMuX3NldHRsZWRWYWx1ZTtcbiAgICAgICAgcmV0LmlzRnVsZmlsbGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIHJldC5yZWplY3Rpb25SZWFzb24gPSB0aGlzLl9zZXR0bGVkVmFsdWU7XG4gICAgICAgIHJldC5pc1JlamVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uIFByb21pc2UkYWxsKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZUFycmF5KHRoaXMpLnByb21pc2UoKTtcbn07XG5cblxuUHJvbWlzZS5pcyA9IGZ1bmN0aW9uIFByb21pc2UkSXModmFsKSB7XG4gICAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIFByb21pc2U7XG59O1xuXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uIFByb21pc2UkQWxsKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQXJyYXkocHJvbWlzZXMpLnByb21pc2UoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gUHJvbWlzZSRfZXJyb3IoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5jYXVnaHQob3JpZ2luYXRlc0Zyb21SZWplY3Rpb24sIGZuKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXNvbHZlRnJvbVN5bmNWYWx1ZSA9XG5mdW5jdGlvbiBQcm9taXNlJF9yZXNvbHZlRnJvbVN5bmNWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgdGhpcy5fY2xlYW5WYWx1ZXMoKTtcbiAgICAgICAgdGhpcy5fc2V0UmVqZWN0ZWQoKTtcbiAgICAgICAgdGhpcy5fc2V0dGxlZFZhbHVlID0gdmFsdWUuZTtcbiAgICAgICAgdGhpcy5fZW5zdXJlUG9zc2libGVSZWplY3Rpb25IYW5kbGVkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QodmFsdWUsIHZvaWQgMCk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9mb2xsb3cobWF5YmVQcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFuVmFsdWVzKCk7XG4gICAgICAgICAgICB0aGlzLl9zZXRGdWxmaWxsZWQoKTtcbiAgICAgICAgICAgIHRoaXMuX3NldHRsZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZS5tZXRob2QgPSBmdW5jdGlvbiBQcm9taXNlJF9NZXRob2QoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFByb21pc2UkX21ldGhvZCgpIHtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6IHZhbHVlID0gdHJ5Q2F0Y2gxKGZuLCB0aGlzLCB2b2lkIDApOyBicmVhaztcbiAgICAgICAgY2FzZSAxOiB2YWx1ZSA9IHRyeUNhdGNoMShmbiwgdGhpcywgYXJndW1lbnRzWzBdKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogdmFsdWUgPSB0cnlDYXRjaDIoZm4sIHRoaXMsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoO3ZhciBhcmdzID0gbmV3IEFycmF5KCRfbGVuKTsgZm9yKHZhciAkX2kgPSAwOyAkX2kgPCAkX2xlbjsgKyskX2kpIHthcmdzWyRfaV0gPSBhcmd1bWVudHNbJF9pXTt9XG4gICAgICAgICAgICB2YWx1ZSA9IHRyeUNhdGNoQXBwbHkoZm4sIGFyZ3MsIHRoaXMpOyBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICByZXQuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgICAgIHJldC5fcmVzb2x2ZUZyb21TeW5jVmFsdWUodmFsdWUpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59O1xuXG5Qcm9taXNlLmF0dGVtcHQgPSBQcm9taXNlW1widHJ5XCJdID0gZnVuY3Rpb24gUHJvbWlzZSRfVHJ5KGZuLCBhcmdzLCBjdHgpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgdmFyIHZhbHVlID0gaXNBcnJheShhcmdzKVxuICAgICAgICA/IHRyeUNhdGNoQXBwbHkoZm4sIGFyZ3MsIGN0eClcbiAgICAgICAgOiB0cnlDYXRjaDEoZm4sIGN0eCwgYXJncyk7XG5cbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICByZXQuX3Jlc29sdmVGcm9tU3luY1ZhbHVlKHZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5kZWZlciA9IFByb21pc2UucGVuZGluZyA9IGZ1bmN0aW9uIFByb21pc2UkRGVmZXIoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcHJvbWlzZS5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2VSZXNvbHZlcihwcm9taXNlKTtcbn07XG5cblByb21pc2UuYmluZCA9IGZ1bmN0aW9uIFByb21pc2UkQmluZCh0aGlzQXJnKSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXQuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgcmV0Ll9zZXRGdWxmaWxsZWQoKTtcbiAgICByZXQuX3NldEJvdW5kVG8odGhpc0FyZyk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UuY2FzdCA9IGZ1bmN0aW9uIFByb21pc2UkX0Nhc3Qob2JqKSB7XG4gICAgdmFyIHJldCA9IGNhc3Qob2JqLCB2b2lkIDApO1xuICAgIGlmICghKHJldCBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAgIHZhciB2YWwgPSByZXQ7XG4gICAgICAgIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgcmV0Ll9zZXRUcmFjZSh2b2lkIDApO1xuICAgICAgICByZXQuX3NldEZ1bGZpbGxlZCgpO1xuICAgICAgICByZXQuX2NsZWFuVmFsdWVzKCk7XG4gICAgICAgIHJldC5fc2V0dGxlZFZhbHVlID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5yZXNvbHZlID0gUHJvbWlzZS5mdWxmaWxsZWQgPSBQcm9taXNlLmNhc3Q7XG5cblByb21pc2UucmVqZWN0ID0gUHJvbWlzZS5yZWplY3RlZCA9IGZ1bmN0aW9uIFByb21pc2UkUmVqZWN0KHJlYXNvbikge1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcmV0Ll9zZXRUcmFjZSh2b2lkIDApO1xuICAgIG1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbihyZWFzb24pO1xuICAgIHJldC5fY2xlYW5WYWx1ZXMoKTtcbiAgICByZXQuX3NldFJlamVjdGVkKCk7XG4gICAgcmV0Ll9zZXR0bGVkVmFsdWUgPSByZWFzb247XG4gICAgaWYgKCFjYW5BdHRhY2gocmVhc29uKSkge1xuICAgICAgICB2YXIgdHJhY2UgPSBuZXcgRXJyb3IocmVhc29uICsgXCJcIik7XG4gICAgICAgIHJldC5fc2V0Q2FycmllZFN0YWNrVHJhY2UodHJhY2UpO1xuICAgIH1cbiAgICByZXQuX2Vuc3VyZVBvc3NpYmxlUmVqZWN0aW9uSGFuZGxlZCgpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLm9uUG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24gPVxuZnVuY3Rpb24gUHJvbWlzZSRPblBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uKGZuKSB7XG4gICAgICAgIENhcHR1cmVkVHJhY2UucG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24gPSB0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZm4gOiB2b2lkIDA7XG59O1xuXG52YXIgdW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZDtcblByb21pc2Uub25VbmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkID1cbmZ1bmN0aW9uIFByb21pc2Ukb25VbmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkKGZuKSB7XG4gICAgdW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZCA9IHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiID8gZm4gOiB2b2lkIDA7XG59O1xuXG52YXIgZGVidWdnaW5nID0gZmFsc2UgfHwgISEoXG4gICAgdHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICB0eXBlb2YgcHJvY2Vzcy5leGVjUGF0aCA9PT0gXCJzdHJpbmdcIiAmJlxuICAgIHR5cGVvZiBwcm9jZXNzLmVudiA9PT0gXCJvYmplY3RcIiAmJlxuICAgIChwcm9jZXNzLmVudltcIkJMVUVCSVJEX0RFQlVHXCJdIHx8XG4gICAgICAgIHByb2Nlc3MuZW52W1wiTk9ERV9FTlZcIl0gPT09IFwiZGV2ZWxvcG1lbnRcIilcbik7XG5cblxuUHJvbWlzZS5sb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbiBQcm9taXNlJExvbmdTdGFja1RyYWNlcygpIHtcbiAgICBpZiAoYXN5bmMuaGF2ZUl0ZW1zUXVldWVkKCkgJiZcbiAgICAgICAgZGVidWdnaW5nID09PSBmYWxzZVxuICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbm5vdCBlbmFibGUgbG9uZyBzdGFjayB0cmFjZXMgYWZ0ZXIgcHJvbWlzZXMgaGF2ZSBiZWVuIGNyZWF0ZWRcIik7XG4gICAgfVxuICAgIGRlYnVnZ2luZyA9IENhcHR1cmVkVHJhY2UuaXNTdXBwb3J0ZWQoKTtcbn07XG5cblByb21pc2UuaGFzTG9uZ1N0YWNrVHJhY2VzID0gZnVuY3Rpb24gUHJvbWlzZSRIYXNMb25nU3RhY2tUcmFjZXMoKSB7XG4gICAgcmV0dXJuIGRlYnVnZ2luZyAmJiBDYXB0dXJlZFRyYWNlLmlzU3VwcG9ydGVkKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdGhlbiA9XG5mdW5jdGlvbiBQcm9taXNlJF90aGVuKFxuICAgIGRpZEZ1bGZpbGwsXG4gICAgZGlkUmVqZWN0LFxuICAgIGRpZFByb2dyZXNzLFxuICAgIHJlY2VpdmVyLFxuICAgIGludGVybmFsRGF0YVxuKSB7XG4gICAgdmFyIGhhdmVJbnRlcm5hbERhdGEgPSBpbnRlcm5hbERhdGEgIT09IHZvaWQgMDtcbiAgICB2YXIgcmV0ID0gaGF2ZUludGVybmFsRGF0YSA/IGludGVybmFsRGF0YSA6IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcblxuICAgIGlmICghaGF2ZUludGVybmFsRGF0YSkge1xuICAgICAgICBpZiAoZGVidWdnaW5nKSB7XG4gICAgICAgICAgICB2YXIgaGF2ZVNhbWVDb250ZXh0ID0gdGhpcy5fcGVla0NvbnRleHQoKSA9PT0gdGhpcy5fdHJhY2VQYXJlbnQ7XG4gICAgICAgICAgICByZXQuX3RyYWNlUGFyZW50ID0gaGF2ZVNhbWVDb250ZXh0ID8gdGhpcy5fdHJhY2VQYXJlbnQgOiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldC5fcHJvcGFnYXRlRnJvbSh0aGlzLCA3KTtcbiAgICB9XG5cbiAgICB2YXIgY2FsbGJhY2tJbmRleCA9XG4gICAgICAgIHRoaXMuX2FkZENhbGxiYWNrcyhkaWRGdWxmaWxsLCBkaWRSZWplY3QsIGRpZFByb2dyZXNzLCByZXQsIHJlY2VpdmVyKTtcblxuICAgIGlmICh0aGlzLmlzUmVzb2x2ZWQoKSkge1xuICAgICAgICBhc3luYy5pbnZva2UodGhpcy5fcXVldWVTZXR0bGVBdCwgdGhpcywgY2FsbGJhY2tJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9sZW5ndGggPSBmdW5jdGlvbiBQcm9taXNlJF9sZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JpdEZpZWxkICYgMjYyMTQzO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzRm9sbG93aW5nT3JGdWxmaWxsZWRPclJlamVjdGVkID1cbmZ1bmN0aW9uIFByb21pc2UkX2lzRm9sbG93aW5nT3JGdWxmaWxsZWRPclJlamVjdGVkKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA5Mzk1MjQwOTYpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0ZvbGxvd2luZyA9IGZ1bmN0aW9uIFByb21pc2UkX2lzRm9sbG93aW5nKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA1MzY4NzA5MTIpID09PSA1MzY4NzA5MTI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0TGVuZ3RoID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0TGVuZ3RoKGxlbikge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gKHRoaXMuX2JpdEZpZWxkICYgLTI2MjE0NCkgfFxuICAgICAgICAobGVuICYgMjYyMTQzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRGdWxmaWxsZWQgPSBmdW5jdGlvbiBQcm9taXNlJF9zZXRGdWxmaWxsZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDI2ODQzNTQ1Njtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRSZWplY3RlZCA9IGZ1bmN0aW9uIFByb21pc2UkX3NldFJlamVjdGVkKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAxMzQyMTc3Mjg7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0Rm9sbG93aW5nID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0Rm9sbG93aW5nKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCA1MzY4NzA5MTI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0SXNGaW5hbCA9IGZ1bmN0aW9uIFByb21pc2UkX3NldElzRmluYWwoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDMzNTU0NDMyO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzRmluYWwgPSBmdW5jdGlvbiBQcm9taXNlJF9pc0ZpbmFsKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAzMzU1NDQzMikgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2NhbmNlbGxhYmxlID0gZnVuY3Rpb24gUHJvbWlzZSRfY2FuY2VsbGFibGUoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDY3MTA4ODY0KSA+IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0Q2FuY2VsbGFibGUgPSBmdW5jdGlvbiBQcm9taXNlJF9zZXRDYW5jZWxsYWJsZSgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgNjcxMDg4NjQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRDYW5jZWxsYWJsZSA9IGZ1bmN0aW9uIFByb21pc2UkX3Vuc2V0Q2FuY2VsbGFibGUoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+NjcxMDg4NjQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFJlamVjdGlvbklzVW5oYW5kbGVkID1cbmZ1bmN0aW9uIFByb21pc2UkX3NldFJlamVjdGlvbklzVW5oYW5kbGVkKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAyMDk3MTUyO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH4yMDk3MTUyKTtcbiAgICBpZiAodGhpcy5faXNVbmhhbmRsZWRSZWplY3Rpb25Ob3RpZmllZCgpKSB7XG4gICAgICAgIHRoaXMuX3Vuc2V0VW5oYW5kbGVkUmVqZWN0aW9uSXNOb3RpZmllZCgpO1xuICAgICAgICB0aGlzLl9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb25Jc0hhbmRsZWQoKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNSZWplY3Rpb25VbmhhbmRsZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfaXNSZWplY3Rpb25VbmhhbmRsZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDIwOTcxNTIpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkID1cbmZ1bmN0aW9uIFByb21pc2UkX3NldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDUyNDI4ODtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfdW5zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjUyNDI4OCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNVbmhhbmRsZWRSZWplY3Rpb25Ob3RpZmllZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9pc1VuaGFuZGxlZFJlamVjdGlvbk5vdGlmaWVkKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA1MjQyODgpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRDYXJyaWVkU3RhY2tUcmFjZSA9XG5mdW5jdGlvbiBQcm9taXNlJF9zZXRDYXJyaWVkU3RhY2tUcmFjZShjYXB0dXJlZFRyYWNlKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDEwNDg1NzY7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9IGNhcHR1cmVkVHJhY2U7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRDYXJyaWVkU3RhY2tUcmFjZSA9XG5mdW5jdGlvbiBQcm9taXNlJF91bnNldENhcnJpZWRTdGFja1RyYWNlKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjEwNDg1NzYpO1xuICAgIHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjAgPSB2b2lkIDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNDYXJyeWluZ1N0YWNrVHJhY2UgPVxuZnVuY3Rpb24gUHJvbWlzZSRfaXNDYXJyeWluZ1N0YWNrVHJhY2UoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDEwNDg1NzYpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9nZXRDYXJyaWVkU3RhY2tUcmFjZSA9XG5mdW5jdGlvbiBQcm9taXNlJF9nZXRDYXJyaWVkU3RhY2tUcmFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNDYXJyeWluZ1N0YWNrVHJhY2UoKVxuICAgICAgICA/IHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjBcbiAgICAgICAgOiB2b2lkIDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVjZWl2ZXJBdCA9IGZ1bmN0aW9uIFByb21pc2UkX3JlY2VpdmVyQXQoaW5kZXgpIHtcbiAgICB2YXIgcmV0ID0gaW5kZXggPT09IDBcbiAgICAgICAgPyB0aGlzLl9yZWNlaXZlcjBcbiAgICAgICAgOiB0aGlzWyhpbmRleCA8PCAyKSArIGluZGV4IC0gNSArIDRdO1xuICAgIGlmICh0aGlzLl9pc0JvdW5kKCkgJiYgcmV0ID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kVG87XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcHJvbWlzZUF0ID0gZnVuY3Rpb24gUHJvbWlzZSRfcHJvbWlzZUF0KGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4ID09PSAwXG4gICAgICAgID8gdGhpcy5fcHJvbWlzZTBcbiAgICAgICAgOiB0aGlzWyhpbmRleCA8PCAyKSArIGluZGV4IC0gNSArIDNdO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2Z1bGZpbGxtZW50SGFuZGxlckF0ID1cbmZ1bmN0aW9uIFByb21pc2UkX2Z1bGZpbGxtZW50SGFuZGxlckF0KGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4ID09PSAwXG4gICAgICAgID8gdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMFxuICAgICAgICA6IHRoaXNbKGluZGV4IDw8IDIpICsgaW5kZXggLSA1ICsgMF07XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0aW9uSGFuZGxlckF0ID1cbmZ1bmN0aW9uIFByb21pc2UkX3JlamVjdGlvbkhhbmRsZXJBdChpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA9PT0gMFxuICAgICAgICA/IHRoaXMuX3JlamVjdGlvbkhhbmRsZXIwXG4gICAgICAgIDogdGhpc1soaW5kZXggPDwgMikgKyBpbmRleCAtIDUgKyAxXTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9hZGRDYWxsYmFja3MgPSBmdW5jdGlvbiBQcm9taXNlJF9hZGRDYWxsYmFja3MoXG4gICAgZnVsZmlsbCxcbiAgICByZWplY3QsXG4gICAgcHJvZ3Jlc3MsXG4gICAgcHJvbWlzZSxcbiAgICByZWNlaXZlclxuKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5fbGVuZ3RoKCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMjYyMTQzIC0gNSkge1xuICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIHRoaXMuX3NldExlbmd0aCgwKTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZTAgPSBwcm9taXNlO1xuICAgICAgICBpZiAocmVjZWl2ZXIgIT09IHZvaWQgMCkgdGhpcy5fcmVjZWl2ZXIwID0gcmVjZWl2ZXI7XG4gICAgICAgIGlmICh0eXBlb2YgZnVsZmlsbCA9PT0gXCJmdW5jdGlvblwiICYmICF0aGlzLl9pc0NhcnJ5aW5nU3RhY2tUcmFjZSgpKVxuICAgICAgICAgICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9IGZ1bGZpbGw7XG4gICAgICAgIGlmICh0eXBlb2YgcmVqZWN0ID09PSBcImZ1bmN0aW9uXCIpIHRoaXMuX3JlamVjdGlvbkhhbmRsZXIwID0gcmVqZWN0O1xuICAgICAgICBpZiAodHlwZW9mIHByb2dyZXNzID09PSBcImZ1bmN0aW9uXCIpIHRoaXMuX3Byb2dyZXNzSGFuZGxlcjAgPSBwcm9ncmVzcztcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYmFzZSA9IChpbmRleCA8PCAyKSArIGluZGV4IC0gNTtcbiAgICAgICAgdGhpc1tiYXNlICsgM10gPSBwcm9taXNlO1xuICAgICAgICB0aGlzW2Jhc2UgKyA0XSA9IHJlY2VpdmVyO1xuICAgICAgICB0aGlzW2Jhc2UgKyAwXSA9IHR5cGVvZiBmdWxmaWxsID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmdWxmaWxsIDogdm9pZCAwO1xuICAgICAgICB0aGlzW2Jhc2UgKyAxXSA9IHR5cGVvZiByZWplY3QgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJlamVjdCA6IHZvaWQgMDtcbiAgICAgICAgdGhpc1tiYXNlICsgMl0gPSB0eXBlb2YgcHJvZ3Jlc3MgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb2dyZXNzIDogdm9pZCAwO1xuICAgIH1cbiAgICB0aGlzLl9zZXRMZW5ndGgoaW5kZXggKyAxKTtcbiAgICByZXR1cm4gaW5kZXg7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0UHJveHlIYW5kbGVycyA9XG5mdW5jdGlvbiBQcm9taXNlJF9zZXRQcm94eUhhbmRsZXJzKHJlY2VpdmVyLCBwcm9taXNlU2xvdFZhbHVlKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5fbGVuZ3RoKCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMjYyMTQzIC0gNSkge1xuICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIHRoaXMuX3NldExlbmd0aCgwKTtcbiAgICB9XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2UwID0gcHJvbWlzZVNsb3RWYWx1ZTtcbiAgICAgICAgdGhpcy5fcmVjZWl2ZXIwID0gcmVjZWl2ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGJhc2UgPSAoaW5kZXggPDwgMikgKyBpbmRleCAtIDU7XG4gICAgICAgIHRoaXNbYmFzZSArIDNdID0gcHJvbWlzZVNsb3RWYWx1ZTtcbiAgICAgICAgdGhpc1tiYXNlICsgNF0gPSByZWNlaXZlcjtcbiAgICAgICAgdGhpc1tiYXNlICsgMF0gPVxuICAgICAgICB0aGlzW2Jhc2UgKyAxXSA9XG4gICAgICAgIHRoaXNbYmFzZSArIDJdID0gdm9pZCAwO1xuICAgIH1cbiAgICB0aGlzLl9zZXRMZW5ndGgoaW5kZXggKyAxKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm94eVByb21pc2VBcnJheSA9XG5mdW5jdGlvbiBQcm9taXNlJF9wcm94eVByb21pc2VBcnJheShwcm9taXNlQXJyYXksIGluZGV4KSB7XG4gICAgdGhpcy5fc2V0UHJveHlIYW5kbGVycyhwcm9taXNlQXJyYXksIGluZGV4KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm94eVByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlJF9wcm94eVByb21pc2UocHJvbWlzZSkge1xuICAgIHByb21pc2UuX3NldFByb3hpZWQoKTtcbiAgICB0aGlzLl9zZXRQcm94eUhhbmRsZXJzKHByb21pc2UsIC0xKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRCb3VuZFRvID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0Qm91bmRUbyhvYmopIHtcbiAgICBpZiAob2JqICE9PSB2b2lkIDApIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDgzODg2MDg7XG4gICAgICAgIHRoaXMuX2JvdW5kVG8gPSBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+ODM4ODYwOCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzQm91bmQgPSBmdW5jdGlvbiBQcm9taXNlJF9pc0JvdW5kKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA4Mzg4NjA4KSA9PT0gODM4ODYwODtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXNvbHZlRnJvbVJlc29sdmVyID1cbmZ1bmN0aW9uIFByb21pc2UkX3Jlc29sdmVGcm9tUmVzb2x2ZXIocmVzb2x2ZXIpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgdGhpcy5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICB0aGlzLl9wdXNoQ29udGV4dCgpO1xuXG4gICAgZnVuY3Rpb24gUHJvbWlzZSRfcmVzb2x2ZXIodmFsKSB7XG4gICAgICAgIGlmIChwcm9taXNlLl90cnlGb2xsb3codmFsKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByb21pc2UuX2Z1bGZpbGwodmFsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gUHJvbWlzZSRfcmVqZWN0ZXIodmFsKSB7XG4gICAgICAgIHZhciB0cmFjZSA9IGNhbkF0dGFjaCh2YWwpID8gdmFsIDogbmV3IEVycm9yKHZhbCArIFwiXCIpO1xuICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICAgICAgbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKHZhbCk7XG4gICAgICAgIHByb21pc2UuX3JlamVjdCh2YWwsIHRyYWNlID09PSB2YWwgPyB2b2lkIDAgOiB0cmFjZSk7XG4gICAgfVxuICAgIHZhciByID0gdHJ5Q2F0Y2gyKHJlc29sdmVyLCB2b2lkIDAsIFByb21pc2UkX3Jlc29sdmVyLCBQcm9taXNlJF9yZWplY3Rlcik7XG4gICAgdGhpcy5fcG9wQ29udGV4dCgpO1xuXG4gICAgaWYgKHIgIT09IHZvaWQgMCAmJiByID09PSBlcnJvck9iaikge1xuICAgICAgICB2YXIgZSA9IHIuZTtcbiAgICAgICAgdmFyIHRyYWNlID0gY2FuQXR0YWNoKGUpID8gZSA6IG5ldyBFcnJvcihlICsgXCJcIik7XG4gICAgICAgIHByb21pc2UuX3JlamVjdChlLCB0cmFjZSk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NwcmVhZFNsb3dDYXNlID1cbmZ1bmN0aW9uIFByb21pc2UkX3NwcmVhZFNsb3dDYXNlKHRhcmdldEZuLCBwcm9taXNlLCB2YWx1ZXMsIGJvdW5kVG8pIHtcbiAgICB2YXIgcHJvbWlzZUZvckFsbCA9IG5ldyBQcm9taXNlQXJyYXkodmFsdWVzKS5wcm9taXNlKCk7XG4gICAgdmFyIHByb21pc2UyID0gcHJvbWlzZUZvckFsbC5fdGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldEZuLmFwcGx5KGJvdW5kVG8sIGFyZ3VtZW50cyk7XG4gICAgfSwgdm9pZCAwLCB2b2lkIDAsIEFQUExZLCB2b2lkIDApO1xuICAgIHByb21pc2UuX2ZvbGxvdyhwcm9taXNlMik7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FsbFNwcmVhZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9jYWxsU3ByZWFkKGhhbmRsZXIsIHByb21pc2UsIHZhbHVlKSB7XG4gICAgdmFyIGJvdW5kVG8gPSB0aGlzLl9ib3VuZFRvO1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChjYXN0KHZhbHVlW2ldLCB2b2lkIDApIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NwcmVhZFNsb3dDYXNlKGhhbmRsZXIsIHByb21pc2UsIHZhbHVlLCBib3VuZFRvKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICByZXR1cm4gdHJ5Q2F0Y2hBcHBseShoYW5kbGVyLCB2YWx1ZSwgYm91bmRUbyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FsbEhhbmRsZXIgPVxuZnVuY3Rpb24gUHJvbWlzZSRfY2FsbEhhbmRsZXIoXG4gICAgaGFuZGxlciwgcmVjZWl2ZXIsIHByb21pc2UsIHZhbHVlKSB7XG4gICAgdmFyIHg7XG4gICAgaWYgKHJlY2VpdmVyID09PSBBUFBMWSAmJiAhdGhpcy5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgeCA9IHRoaXMuX2NhbGxTcHJlYWQoaGFuZGxlciwgcHJvbWlzZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2UuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgIHggPSB0cnlDYXRjaDEoaGFuZGxlciwgcmVjZWl2ZXIsIHZhbHVlKTtcbiAgICB9XG4gICAgcHJvbWlzZS5fcG9wQ29udGV4dCgpO1xuICAgIHJldHVybiB4O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldHRsZVByb21pc2VGcm9tSGFuZGxlciA9XG5mdW5jdGlvbiBQcm9taXNlJF9zZXR0bGVQcm9taXNlRnJvbUhhbmRsZXIoXG4gICAgaGFuZGxlciwgcmVjZWl2ZXIsIHZhbHVlLCBwcm9taXNlXG4pIHtcbiAgICBpZiAoIShwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgaGFuZGxlci5jYWxsKHJlY2VpdmVyLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHggPSB0aGlzLl9jYWxsSGFuZGxlcihoYW5kbGVyLCByZWNlaXZlciwgcHJvbWlzZSwgdmFsdWUpO1xuICAgIGlmIChwcm9taXNlLl9pc0ZvbGxvd2luZygpKSByZXR1cm47XG5cbiAgICBpZiAoeCA9PT0gZXJyb3JPYmogfHwgeCA9PT0gcHJvbWlzZSB8fCB4ID09PSBORVhUX0ZJTFRFUikge1xuICAgICAgICB2YXIgZXJyID0geCA9PT0gcHJvbWlzZVxuICAgICAgICAgICAgICAgICAgICA/IG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yKClcbiAgICAgICAgICAgICAgICAgICAgOiB4LmU7XG4gICAgICAgIHZhciB0cmFjZSA9IGNhbkF0dGFjaChlcnIpID8gZXJyIDogbmV3IEVycm9yKGVyciArIFwiXCIpO1xuICAgICAgICBpZiAoeCAhPT0gTkVYVF9GSUxURVIpIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UpO1xuICAgICAgICBwcm9taXNlLl9yZWplY3RVbmNoZWNrZWQoZXJyLCB0cmFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNhc3RWYWx1ZSA9IGNhc3QoeCwgcHJvbWlzZSk7XG4gICAgICAgIGlmIChjYXN0VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAoY2FzdFZhbHVlLmlzUmVqZWN0ZWQoKSAmJlxuICAgICAgICAgICAgICAgICFjYXN0VmFsdWUuX2lzQ2FycnlpbmdTdGFja1RyYWNlKCkgJiZcbiAgICAgICAgICAgICAgICAhY2FuQXR0YWNoKGNhc3RWYWx1ZS5fc2V0dGxlZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhciB0cmFjZSA9IG5ldyBFcnJvcihjYXN0VmFsdWUuX3NldHRsZWRWYWx1ZSArIFwiXCIpO1xuICAgICAgICAgICAgICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UpO1xuICAgICAgICAgICAgICAgIGNhc3RWYWx1ZS5fc2V0Q2FycmllZFN0YWNrVHJhY2UodHJhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvbWlzZS5fZm9sbG93KGNhc3RWYWx1ZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9wcm9wYWdhdGVGcm9tKGNhc3RWYWx1ZSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLl9mdWxmaWxsVW5jaGVja2VkKHgpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2ZvbGxvdyA9XG5mdW5jdGlvbiBQcm9taXNlJF9mb2xsb3cocHJvbWlzZSkge1xuICAgIHRoaXMuX3NldEZvbGxvd2luZygpO1xuXG4gICAgaWYgKHByb21pc2UuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgdGhpcy5fcHJvcGFnYXRlRnJvbShwcm9taXNlLCAxKTtcbiAgICAgICAgcHJvbWlzZS5fcHJveHlQcm9taXNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAocHJvbWlzZS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgIHRoaXMuX2Z1bGZpbGxVbmNoZWNrZWQocHJvbWlzZS5fc2V0dGxlZFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZWplY3RVbmNoZWNrZWQocHJvbWlzZS5fc2V0dGxlZFZhbHVlLFxuICAgICAgICAgICAgcHJvbWlzZS5fZ2V0Q2FycmllZFN0YWNrVHJhY2UoKSk7XG4gICAgfVxuXG4gICAgaWYgKHByb21pc2UuX2lzUmVqZWN0aW9uVW5oYW5kbGVkKCkpIHByb21pc2UuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcblxuICAgIGlmIChkZWJ1Z2dpbmcgJiZcbiAgICAgICAgcHJvbWlzZS5fdHJhY2VQYXJlbnQgPT0gbnVsbCkge1xuICAgICAgICBwcm9taXNlLl90cmFjZVBhcmVudCA9IHRoaXM7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3RyeUZvbGxvdyA9XG5mdW5jdGlvbiBQcm9taXNlJF90cnlGb2xsb3codmFsdWUpIHtcbiAgICBpZiAodGhpcy5faXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQoKSB8fFxuICAgICAgICB2YWx1ZSA9PT0gdGhpcykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHZhbHVlLCB2b2lkIDApO1xuICAgIGlmICghKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fZm9sbG93KG1heWJlUHJvbWlzZSk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVzZXRUcmFjZSA9IGZ1bmN0aW9uIFByb21pc2UkX3Jlc2V0VHJhY2UoKSB7XG4gICAgaWYgKGRlYnVnZ2luZykge1xuICAgICAgICB0aGlzLl90cmFjZSA9IG5ldyBDYXB0dXJlZFRyYWNlKHRoaXMuX3BlZWtDb250ZXh0KCkgPT09IHZvaWQgMCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFRyYWNlID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0VHJhY2UocGFyZW50KSB7XG4gICAgaWYgKGRlYnVnZ2luZykge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuX3BlZWtDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuX3RyYWNlUGFyZW50ID0gY29udGV4dDtcbiAgICAgICAgdmFyIGlzVG9wTGV2ZWwgPSBjb250ZXh0ID09PSB2b2lkIDA7XG4gICAgICAgIGlmIChwYXJlbnQgIT09IHZvaWQgMCAmJlxuICAgICAgICAgICAgcGFyZW50Ll90cmFjZVBhcmVudCA9PT0gY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UgPSBwYXJlbnQuX3RyYWNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UgPSBuZXcgQ2FwdHVyZWRUcmFjZShpc1RvcExldmVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9hdHRhY2hFeHRyYVRyYWNlID1cbmZ1bmN0aW9uIFByb21pc2UkX2F0dGFjaEV4dHJhVHJhY2UoZXJyb3IpIHtcbiAgICBpZiAoZGVidWdnaW5nKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICAgICAgdmFyIHN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgICAgIHN0YWNrID0gdHlwZW9mIHN0YWNrID09PSBcInN0cmluZ1wiID8gc3RhY2suc3BsaXQoXCJcXG5cIikgOiBbXTtcbiAgICAgICAgQ2FwdHVyZWRUcmFjZS5wcm90ZWN0RXJyb3JNZXNzYWdlTmV3bGluZXMoc3RhY2spO1xuICAgICAgICB2YXIgaGVhZGVyTGluZUNvdW50ID0gMTtcbiAgICAgICAgdmFyIGNvbWJpbmVkVHJhY2VzID0gMTtcbiAgICAgICAgd2hpbGUocHJvbWlzZSAhPSBudWxsICYmXG4gICAgICAgICAgICBwcm9taXNlLl90cmFjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzdGFjayA9IENhcHR1cmVkVHJhY2UuY29tYmluZShcbiAgICAgICAgICAgICAgICBzdGFjayxcbiAgICAgICAgICAgICAgICBwcm9taXNlLl90cmFjZS5zdGFjay5zcGxpdChcIlxcblwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHByb21pc2UgPSBwcm9taXNlLl90cmFjZVBhcmVudDtcbiAgICAgICAgICAgIGNvbWJpbmVkVHJhY2VzKys7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhY2tUcmFjZUxpbWl0ID0gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0IHx8IDEwO1xuICAgICAgICB2YXIgbWF4ID0gKHN0YWNrVHJhY2VMaW1pdCArIGhlYWRlckxpbmVDb3VudCkgKiBjb21iaW5lZFRyYWNlcztcbiAgICAgICAgdmFyIGxlbiA9IHN0YWNrLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA+IG1heCkge1xuICAgICAgICAgICAgc3RhY2subGVuZ3RoID0gbWF4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlbiA+IDApXG4gICAgICAgICAgICBzdGFja1swXSA9IHN0YWNrWzBdLnNwbGl0KFwiXFx1MDAwMlxcdTAwMDBcXHUwMDAxXCIpLmpvaW4oXCJcXG5cIik7XG5cbiAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA8PSBoZWFkZXJMaW5lQ291bnQpIHtcbiAgICAgICAgICAgIGVycm9yLnN0YWNrID0gXCIoTm8gc3RhY2sgdHJhY2UpXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvci5zdGFjayA9IHN0YWNrLmpvaW4oXCJcXG5cIik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2xlYW5WYWx1ZXMgPSBmdW5jdGlvbiBQcm9taXNlJF9jbGVhblZhbHVlcygpIHtcbiAgICBpZiAodGhpcy5fY2FuY2VsbGFibGUoKSkge1xuICAgICAgICB0aGlzLl9jYW5jZWxsYXRpb25QYXJlbnQgPSB2b2lkIDA7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb3BhZ2F0ZUZyb20gPVxuZnVuY3Rpb24gUHJvbWlzZSRfcHJvcGFnYXRlRnJvbShwYXJlbnQsIGZsYWdzKSB7XG4gICAgaWYgKChmbGFncyAmIDEpID4gMCAmJiBwYXJlbnQuX2NhbmNlbGxhYmxlKCkpIHtcbiAgICAgICAgdGhpcy5fc2V0Q2FuY2VsbGFibGUoKTtcbiAgICAgICAgdGhpcy5fY2FuY2VsbGF0aW9uUGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgICBpZiAoKGZsYWdzICYgNCkgPiAwKSB7XG4gICAgICAgIHRoaXMuX3NldEJvdW5kVG8ocGFyZW50Ll9ib3VuZFRvKTtcbiAgICB9XG4gICAgaWYgKChmbGFncyAmIDIpID4gMCkge1xuICAgICAgICB0aGlzLl9zZXRUcmFjZShwYXJlbnQpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9mdWxmaWxsID0gZnVuY3Rpb24gUHJvbWlzZSRfZnVsZmlsbCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9pc0ZvbGxvd2luZ09yRnVsZmlsbGVkT3JSZWplY3RlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fZnVsZmlsbFVuY2hlY2tlZCh2YWx1ZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0ID1cbmZ1bmN0aW9uIFByb21pc2UkX3JlamVjdChyZWFzb24sIGNhcnJpZWRTdGFja1RyYWNlKSB7XG4gICAgaWYgKHRoaXMuX2lzRm9sbG93aW5nT3JGdWxmaWxsZWRPclJlamVjdGVkKCkpIHJldHVybjtcbiAgICB0aGlzLl9yZWplY3RVbmNoZWNrZWQocmVhc29uLCBjYXJyaWVkU3RhY2tUcmFjZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZUF0ID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0dGxlUHJvbWlzZUF0KGluZGV4KSB7XG4gICAgdmFyIGhhbmRsZXIgPSB0aGlzLmlzRnVsZmlsbGVkKClcbiAgICAgICAgPyB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXJBdChpbmRleClcbiAgICAgICAgOiB0aGlzLl9yZWplY3Rpb25IYW5kbGVyQXQoaW5kZXgpO1xuXG4gICAgdmFyIHZhbHVlID0gdGhpcy5fc2V0dGxlZFZhbHVlO1xuICAgIHZhciByZWNlaXZlciA9IHRoaXMuX3JlY2VpdmVyQXQoaW5kZXgpO1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZUF0KGluZGV4KTtcblxuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMuX3NldHRsZVByb21pc2VGcm9tSGFuZGxlcihoYW5kbGVyLCByZWNlaXZlciwgdmFsdWUsIHByb21pc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICAgIHZhciBpc0Z1bGZpbGxlZCA9IHRoaXMuaXNGdWxmaWxsZWQoKTtcbiAgICAgICAgaWYgKHJlY2VpdmVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGlmIChyZWNlaXZlciBpbnN0YW5jZW9mIFByb21pc2UgJiZcbiAgICAgICAgICAgICAgICByZWNlaXZlci5faXNQcm94aWVkKCkpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlci5fdW5zZXRQcm94aWVkKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdWxmaWxsZWQpIHJlY2VpdmVyLl9mdWxmaWxsVW5jaGVja2VkKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBlbHNlIHJlY2VpdmVyLl9yZWplY3RVbmNoZWNrZWQodmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldENhcnJpZWRTdGFja1RyYWNlKCkpO1xuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNlaXZlciBpbnN0YW5jZW9mIFByb21pc2VBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0Z1bGZpbGxlZCkgcmVjZWl2ZXIuX3Byb21pc2VGdWxmaWxsZWQodmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgICAgIGVsc2UgcmVjZWl2ZXIuX3Byb21pc2VSZWplY3RlZCh2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc0Z1bGZpbGxlZCkgcHJvbWlzZS5fZnVsZmlsbCh2YWx1ZSk7XG4gICAgICAgICAgICBlbHNlIHByb21pc2UuX3JlamVjdCh2YWx1ZSwgdGhpcy5fZ2V0Q2FycmllZFN0YWNrVHJhY2UoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gMjU2KSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlR0MoKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNQcm94aWVkID0gZnVuY3Rpb24gUHJvbWlzZSRfaXNQcm94aWVkKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA0MTk0MzA0KSA9PT0gNDE5NDMwNDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRQcm94aWVkID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0UHJveGllZCgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgNDE5NDMwNDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldFByb3hpZWQgPSBmdW5jdGlvbiBQcm9taXNlJF91bnNldFByb3hpZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+NDE5NDMwNCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNHY1F1ZXVlZCA9IGZ1bmN0aW9uIFByb21pc2UkX2lzR2NRdWV1ZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIC0xMDczNzQxODI0KSA9PT0gLTEwNzM3NDE4MjQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0R2NRdWV1ZWQgPSBmdW5jdGlvbiBQcm9taXNlJF9zZXRHY1F1ZXVlZCgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgLTEwNzM3NDE4MjQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRHY1F1ZXVlZCA9IGZ1bmN0aW9uIFByb21pc2UkX3Vuc2V0R2NRdWV1ZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+LTEwNzM3NDE4MjQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3F1ZXVlR0MgPSBmdW5jdGlvbiBQcm9taXNlJF9xdWV1ZUdDKCkge1xuICAgIGlmICh0aGlzLl9pc0djUXVldWVkKCkpIHJldHVybjtcbiAgICB0aGlzLl9zZXRHY1F1ZXVlZCgpO1xuICAgIGFzeW5jLmludm9rZUxhdGVyKHRoaXMuX2djLCB0aGlzLCB2b2lkIDApO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2djID0gZnVuY3Rpb24gUHJvbWlzZSRnYygpIHtcbiAgICB2YXIgbGVuID0gdGhpcy5fbGVuZ3RoKCkgKiA1O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZGVsZXRlIHRoaXNbaV07XG4gICAgfVxuICAgIHRoaXMuX3NldExlbmd0aCgwKTtcbiAgICB0aGlzLl91bnNldEdjUXVldWVkKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcXVldWVTZXR0bGVBdCA9IGZ1bmN0aW9uIFByb21pc2UkX3F1ZXVlU2V0dGxlQXQoaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZWplY3Rpb25VbmhhbmRsZWQoKSkgdGhpcy5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgIGFzeW5jLmludm9rZSh0aGlzLl9zZXR0bGVQcm9taXNlQXQsIHRoaXMsIGluZGV4KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9mdWxmaWxsVW5jaGVja2VkID1cbmZ1bmN0aW9uIFByb21pc2UkX2Z1bGZpbGxVbmNoZWNrZWQodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuaXNQZW5kaW5nKCkpIHJldHVybjtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMpIHtcbiAgICAgICAgdmFyIGVyciA9IG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yKCk7XG4gICAgICAgIHRoaXMuX2F0dGFjaEV4dHJhVHJhY2UoZXJyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlamVjdFVuY2hlY2tlZChlcnIsIHZvaWQgMCk7XG4gICAgfVxuICAgIHRoaXMuX2NsZWFuVmFsdWVzKCk7XG4gICAgdGhpcy5fc2V0RnVsZmlsbGVkKCk7XG4gICAgdGhpcy5fc2V0dGxlZFZhbHVlID0gdmFsdWU7XG4gICAgdmFyIGxlbiA9IHRoaXMuX2xlbmd0aCgpO1xuXG4gICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgYXN5bmMuaW52b2tlKHRoaXMuX3NldHRsZVByb21pc2VzLCB0aGlzLCBsZW4pO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3RVbmNoZWNrZWRDaGVja0Vycm9yID1cbmZ1bmN0aW9uIFByb21pc2UkX3JlamVjdFVuY2hlY2tlZENoZWNrRXJyb3IocmVhc29uKSB7XG4gICAgdmFyIHRyYWNlID0gY2FuQXR0YWNoKHJlYXNvbikgPyByZWFzb24gOiBuZXcgRXJyb3IocmVhc29uICsgXCJcIik7XG4gICAgdGhpcy5fcmVqZWN0VW5jaGVja2VkKHJlYXNvbiwgdHJhY2UgPT09IHJlYXNvbiA/IHZvaWQgMCA6IHRyYWNlKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3RVbmNoZWNrZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfcmVqZWN0VW5jaGVja2VkKHJlYXNvbiwgdHJhY2UpIHtcbiAgICBpZiAoIXRoaXMuaXNQZW5kaW5nKCkpIHJldHVybjtcbiAgICBpZiAocmVhc29uID09PSB0aGlzKSB7XG4gICAgICAgIHZhciBlcnIgPSBtYWtlU2VsZlJlc29sdXRpb25FcnJvcigpO1xuICAgICAgICB0aGlzLl9hdHRhY2hFeHRyYVRyYWNlKGVycik7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWplY3RVbmNoZWNrZWQoZXJyKTtcbiAgICB9XG4gICAgdGhpcy5fY2xlYW5WYWx1ZXMoKTtcbiAgICB0aGlzLl9zZXRSZWplY3RlZCgpO1xuICAgIHRoaXMuX3NldHRsZWRWYWx1ZSA9IHJlYXNvbjtcblxuICAgIGlmICh0aGlzLl9pc0ZpbmFsKCkpIHtcbiAgICAgICAgYXN5bmMuaW52b2tlTGF0ZXIodGhyb3dlciwgdm9pZCAwLCB0cmFjZSA9PT0gdm9pZCAwID8gcmVhc29uIDogdHJhY2UpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBsZW4gPSB0aGlzLl9sZW5ndGgoKTtcblxuICAgIGlmICh0cmFjZSAhPT0gdm9pZCAwKSB0aGlzLl9zZXRDYXJyaWVkU3RhY2tUcmFjZSh0cmFjZSk7XG5cbiAgICBpZiAobGVuID4gMCkge1xuICAgICAgICBhc3luYy5pbnZva2UodGhpcy5fcmVqZWN0UHJvbWlzZXMsIHRoaXMsIG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Vuc3VyZVBvc3NpYmxlUmVqZWN0aW9uSGFuZGxlZCgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3RQcm9taXNlcyA9IGZ1bmN0aW9uIFByb21pc2UkX3JlamVjdFByb21pc2VzKCkge1xuICAgIHRoaXMuX3NldHRsZVByb21pc2VzKCk7XG4gICAgdGhpcy5fdW5zZXRDYXJyaWVkU3RhY2tUcmFjZSgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldHRsZVByb21pc2VzID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0dGxlUHJvbWlzZXMoKSB7XG4gICAgdmFyIGxlbiA9IHRoaXMuX2xlbmd0aCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdGhpcy5fc2V0dGxlUHJvbWlzZUF0KGkpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9lbnN1cmVQb3NzaWJsZVJlamVjdGlvbkhhbmRsZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfZW5zdXJlUG9zc2libGVSZWplY3Rpb25IYW5kbGVkKCkge1xuICAgIHRoaXMuX3NldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgaWYgKENhcHR1cmVkVHJhY2UucG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24gIT09IHZvaWQgMCkge1xuICAgICAgICBhc3luYy5pbnZva2VMYXRlcih0aGlzLl9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb24sIHRoaXMsIHZvaWQgMCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbklzSGFuZGxlZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb25Jc0hhbmRsZWQoKSB7XG4gICAgaWYgKHR5cGVvZiB1bmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgYXN5bmMuaW52b2tlTGF0ZXIodW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZCwgdm9pZCAwLCB0aGlzKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fbm90aWZ5VW5oYW5kbGVkUmVqZWN0aW9uID1cbmZ1bmN0aW9uIFByb21pc2UkX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNSZWplY3Rpb25VbmhhbmRsZWQoKSkge1xuICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5fc2V0dGxlZFZhbHVlO1xuICAgICAgICB2YXIgdHJhY2UgPSB0aGlzLl9nZXRDYXJyaWVkU3RhY2tUcmFjZSgpO1xuXG4gICAgICAgIHRoaXMuX3NldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQoKTtcblxuICAgICAgICBpZiAodHJhY2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgdGhpcy5fdW5zZXRDYXJyaWVkU3RhY2tUcmFjZSgpO1xuICAgICAgICAgICAgcmVhc29uID0gdHJhY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBDYXB0dXJlZFRyYWNlLnBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIENhcHR1cmVkVHJhY2UucG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24ocmVhc29uLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBjb250ZXh0U3RhY2sgPSBbXTtcblByb21pc2UucHJvdG90eXBlLl9wZWVrQ29udGV4dCA9IGZ1bmN0aW9uIFByb21pc2UkX3BlZWtDb250ZXh0KCkge1xuICAgIHZhciBsYXN0SW5kZXggPSBjb250ZXh0U3RhY2subGVuZ3RoIC0gMTtcbiAgICBpZiAobGFzdEluZGV4ID49IDApIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHRTdGFja1tsYXN0SW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4gdm9pZCAwO1xuXG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcHVzaENvbnRleHQgPSBmdW5jdGlvbiBQcm9taXNlJF9wdXNoQ29udGV4dCgpIHtcbiAgICBpZiAoIWRlYnVnZ2luZykgcmV0dXJuO1xuICAgIGNvbnRleHRTdGFjay5wdXNoKHRoaXMpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3BvcENvbnRleHQgPSBmdW5jdGlvbiBQcm9taXNlJF9wb3BDb250ZXh0KCkge1xuICAgIGlmICghZGVidWdnaW5nKSByZXR1cm47XG4gICAgY29udGV4dFN0YWNrLnBvcCgpO1xufTtcblxuUHJvbWlzZS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gUHJvbWlzZSROb0NvbmZsaWN0KCkge1xuICAgIHJldHVybiBub0NvbmZsaWN0KFByb21pc2UpO1xufTtcblxuUHJvbWlzZS5zZXRTY2hlZHVsZXIgPSBmdW5jdGlvbihmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICBhc3luYy5fc2NoZWR1bGUgPSBmbjtcbn07XG5cbmlmICghQ2FwdHVyZWRUcmFjZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgUHJvbWlzZS5sb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbigpe307XG4gICAgZGVidWdnaW5nID0gZmFsc2U7XG59XG5cblByb21pc2UuX21ha2VTZWxmUmVzb2x1dGlvbkVycm9yID0gbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3I7XG5yZXF1aXJlKFwiLi9maW5hbGx5LmpzXCIpKFByb21pc2UsIE5FWFRfRklMVEVSLCBjYXN0KTtcbnJlcXVpcmUoXCIuL2RpcmVjdF9yZXNvbHZlLmpzXCIpKFByb21pc2UpO1xucmVxdWlyZShcIi4vc3luY2hyb25vdXNfaW5zcGVjdGlvbi5qc1wiKShQcm9taXNlKTtcbnJlcXVpcmUoXCIuL2pvaW4uanNcIikoUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBjYXN0LCBJTlRFUk5BTCk7XG5Qcm9taXNlLlJhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xuUHJvbWlzZS5DYW5jZWxsYXRpb25FcnJvciA9IENhbmNlbGxhdGlvbkVycm9yO1xuUHJvbWlzZS5UaW1lb3V0RXJyb3IgPSBUaW1lb3V0RXJyb3I7XG5Qcm9taXNlLlR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblByb21pc2UuT3BlcmF0aW9uYWxFcnJvciA9IE9wZXJhdGlvbmFsRXJyb3I7XG5Qcm9taXNlLlJlamVjdGlvbkVycm9yID0gT3BlcmF0aW9uYWxFcnJvcjtcblByb21pc2UuQWdncmVnYXRlRXJyb3IgPSBlcnJvcnMuQWdncmVnYXRlRXJyb3I7XG5cbnV0aWwudG9GYXN0UHJvcGVydGllcyhQcm9taXNlKTtcbnV0aWwudG9GYXN0UHJvcGVydGllcyhQcm9taXNlLnByb3RvdHlwZSk7XG5Qcm9taXNlLlByb21pc2UgPSBQcm9taXNlO1xucmVxdWlyZSgnLi90aW1lcnMuanMnKShQcm9taXNlLElOVEVSTkFMLGNhc3QpO1xucmVxdWlyZSgnLi9yYWNlLmpzJykoUHJvbWlzZSxJTlRFUk5BTCxjYXN0KTtcbnJlcXVpcmUoJy4vY2FsbF9nZXQuanMnKShQcm9taXNlKTtcbnJlcXVpcmUoJy4vZ2VuZXJhdG9ycy5qcycpKFByb21pc2UsYXBpUmVqZWN0aW9uLElOVEVSTkFMLGNhc3QpO1xucmVxdWlyZSgnLi9tYXAuanMnKShQcm9taXNlLFByb21pc2VBcnJheSxhcGlSZWplY3Rpb24sY2FzdCxJTlRFUk5BTCk7XG5yZXF1aXJlKCcuL25vZGVpZnkuanMnKShQcm9taXNlKTtcbnJlcXVpcmUoJy4vcHJvbWlzaWZ5LmpzJykoUHJvbWlzZSxJTlRFUk5BTCk7XG5yZXF1aXJlKCcuL3Byb3BzLmpzJykoUHJvbWlzZSxQcm9taXNlQXJyYXksY2FzdCk7XG5yZXF1aXJlKCcuL3JlZHVjZS5qcycpKFByb21pc2UsUHJvbWlzZUFycmF5LGFwaVJlamVjdGlvbixjYXN0LElOVEVSTkFMKTtcbnJlcXVpcmUoJy4vc2V0dGxlLmpzJykoUHJvbWlzZSxQcm9taXNlQXJyYXkpO1xucmVxdWlyZSgnLi9zb21lLmpzJykoUHJvbWlzZSxQcm9taXNlQXJyYXksYXBpUmVqZWN0aW9uKTtcbnJlcXVpcmUoJy4vcHJvZ3Jlc3MuanMnKShQcm9taXNlLFByb21pc2VBcnJheSk7XG5yZXF1aXJlKCcuL2NhbmNlbC5qcycpKFByb21pc2UsSU5URVJOQUwpO1xucmVxdWlyZSgnLi9maWx0ZXIuanMnKShQcm9taXNlLElOVEVSTkFMKTtcbnJlcXVpcmUoJy4vYW55LmpzJykoUHJvbWlzZSxQcm9taXNlQXJyYXkpO1xucmVxdWlyZSgnLi9lYWNoLmpzJykoUHJvbWlzZSxJTlRFUk5BTCk7XG5yZXF1aXJlKCcuL3VzaW5nLmpzJykoUHJvbWlzZSxhcGlSZWplY3Rpb24sY2FzdCk7XG5cblByb21pc2UucHJvdG90eXBlID0gUHJvbWlzZS5wcm90b3R5cGU7XG5yZXR1cm4gUHJvbWlzZTtcblxufTtcblxufSkocmVxdWlyZShcIl9fYnJvd3NlcmlmeV9wcm9jZXNzXCIpKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBUcmFuc2Zvcm1cbikge1xuXG4gIHZhciBGaWx0ZXJUcmFuc2Zvcm0gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChGaWx0ZXJUcmFuc2Zvcm0ucHJvdG90eXBlLCBUcmFuc2Zvcm0ucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oZmlsdGVyRm4pIHtcbiAgICAgIHRoaXMuX2ZpbHRlckZuID0gZmlsdGVyRm47XG4gICAgfSxcbiAgICBhcHBseTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuX2ZpbHRlckZuKGVsZW1lbnQpKSB7XG4gICAgICAgIHRoaXMubm90aWZ5KFwiZWxlbWVudFwiLCBlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBGaWx0ZXJUcmFuc2Zvcm07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCIuL3RyYW5zZm9ybVwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBUcmFuc2Zvcm1cbikge1xuXG4gIHZhciBNYXBUcmFuc2Zvcm0gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChNYXBUcmFuc2Zvcm0ucHJvdG90eXBlLCBUcmFuc2Zvcm0ucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24obWFwRm4pIHtcbiAgICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgdGhpcy5fbWFwRm4gPSBtYXBGblxuICAgIH0sXG4gICAgYXBwbHk6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMubm90aWZ5KFwiZWxlbWVudFwiLCB0aGlzLl9tYXBGbihlbGVtZW50KSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gTWFwVHJhbnNmb3JtO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiLi90cmFuc2Zvcm1cIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgUHViU3ViLFxuICBUcmFuc2Zvcm1cbikge1xuXG4gIHZhciBUcmFuc2Zvcm1DaGFpbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKFRyYW5zZm9ybUNoYWluLnByb3RvdHlwZSwgUHViU3ViLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9oZWFkID0gdGhpcy5fdGFpbCA9IG5ldyBUcmFuc2Zvcm0oKTtcblxuICAgICAgXy5iaW5kQWxsKHRoaXMsIFwiX29uVGFpbEVsZW1lbnRcIiwgXCJhcHBseVwiKTtcblxuICAgICAgdGhpcy5fdGFpbC5vbihcImVsZW1lbnRcIiwgdGhpcy5fb25UYWlsRWxlbWVudCk7XG4gICAgfSxcbiAgICBhcHBseTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdGhpcy5faGVhZC5hcHBseShlbGVtZW50KTtcbiAgICB9LFxuICAgIGFkZFRyYW5zZm9ybTogZnVuY3Rpb24odCkge1xuICAgICAgdGhpcy5fdGFpbC5vZmYoXCJlbGVtZW50XCIsIHRoaXMuX29uVGFpbEVsZW1lbnQpO1xuICAgICAgdGhpcy5fdGFpbC5vbihcImVsZW1lbnRcIiwgdC5hcHBseSwgdCk7XG4gICAgICB0aGlzLl90YWlsID0gdDtcbiAgICAgIHRoaXMuX3RhaWwub24oXCJlbGVtZW50XCIsIHRoaXMuX29uVGFpbEVsZW1lbnQpO1xuXG4gICAgfSxcbiAgICBfb25UYWlsRWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdGhpcy5ub3RpZnkoXCJlbGVtZW50XCIsIGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFRyYW5zZm9ybUNoYWluO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9wdWItc3ViXCIpLFxuICByZXF1aXJlKFwiLi90cmFuc2Zvcm1cIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgUHViU3ViXG4pIHtcblxuICB2YXIgVHJhbnNmb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoVHJhbnNmb3JtLnByb3RvdHlwZSwgUHViU3ViLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7fSxcbiAgICBhcHBseTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgLy8gRGVmYXVsdCBpcyBpZGVudGl0eSBtYXBcbiAgICAgIHRoaXMubm90aWZ5KFwiZWxlbWVudFwiLCBlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBUcmFuc2Zvcm07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL3B1Yi1zdWJcIilcbik7XG5cbn0pKCkiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG5mdW5jdGlvbiBQcm9taXNlSW5zcGVjdGlvbihwcm9taXNlKSB7XG4gICAgaWYgKHByb21pc2UgIT09IHZvaWQgMCkge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHByb21pc2UuX2JpdEZpZWxkO1xuICAgICAgICB0aGlzLl9zZXR0bGVkVmFsdWUgPSBwcm9taXNlLmlzUmVzb2x2ZWQoKVxuICAgICAgICAgICAgPyBwcm9taXNlLl9zZXR0bGVkVmFsdWVcbiAgICAgICAgICAgIDogdm9pZCAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSAwO1xuICAgICAgICB0aGlzLl9zZXR0bGVkVmFsdWUgPSB2b2lkIDA7XG4gICAgfVxufVxuXG5Qcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuaXNGdWxmaWxsZWQgPVxuUHJvbWlzZS5wcm90b3R5cGUuaXNGdWxmaWxsZWQgPSBmdW5jdGlvbiBQcm9taXNlJGlzRnVsZmlsbGVkKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAyNjg0MzU0NTYpID4gMDtcbn07XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5pc1JlamVjdGVkID1cblByb21pc2UucHJvdG90eXBlLmlzUmVqZWN0ZWQgPSBmdW5jdGlvbiBQcm9taXNlJGlzUmVqZWN0ZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDEzNDIxNzcyOCkgPiAwO1xufTtcblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmlzUGVuZGluZyA9XG5Qcm9taXNlLnByb3RvdHlwZS5pc1BlbmRpbmcgPSBmdW5jdGlvbiBQcm9taXNlJGlzUGVuZGluZygpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNDAyNjUzMTg0KSA9PT0gMDtcbn07XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS52YWx1ZSA9XG5Qcm9taXNlLnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uIFByb21pc2UkdmFsdWUoKSB7XG4gICAgaWYgKCF0aGlzLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbm5vdCBnZXQgZnVsZmlsbG1lbnQgdmFsdWUgb2YgYSBub24tZnVsZmlsbGVkIHByb21pc2VcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zZXR0bGVkVmFsdWU7XG59O1xuXG5Qcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuZXJyb3IgPVxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLnJlYXNvbiA9XG5Qcm9taXNlLnByb3RvdHlwZS5yZWFzb24gPSBmdW5jdGlvbiBQcm9taXNlJHJlYXNvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYW5ub3QgZ2V0IHJlamVjdGlvbiByZWFzb24gb2YgYSBub24tcmVqZWN0ZWQgcHJvbWlzZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3NldHRsZWRWYWx1ZTtcbn07XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5pc1Jlc29sdmVkID1cblByb21pc2UucHJvdG90eXBlLmlzUmVzb2x2ZWQgPSBmdW5jdGlvbiBQcm9taXNlJGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDQwMjY1MzE4NCkgPiAwO1xufTtcblxuUHJvbWlzZS5Qcm9taXNlSW5zcGVjdGlvbiA9IFByb21pc2VJbnNwZWN0aW9uO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMKSB7XG52YXIgUHJvbWlzZU1hcCA9IFByb21pc2UubWFwO1xuXG5Qcm9taXNlLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiBQcm9taXNlJGZpbHRlcihmbiwgb3B0aW9ucykge1xuICAgIHJldHVybiBQcm9taXNlTWFwKHRoaXMsIGZuLCBvcHRpb25zLCBJTlRFUk5BTCk7XG59O1xuXG5Qcm9taXNlLmZpbHRlciA9IGZ1bmN0aW9uIFByb21pc2UkRmlsdGVyKHByb21pc2VzLCBmbiwgb3B0aW9ucykge1xuICAgIHJldHVybiBQcm9taXNlTWFwKHByb21pc2VzLCBmbiwgb3B0aW9ucywgSU5URVJOQUwpO1xufTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgU29tZVByb21pc2VBcnJheSA9IFByb21pc2UuX1NvbWVQcm9taXNlQXJyYXk7XG5mdW5jdGlvbiBQcm9taXNlJF9BbnkocHJvbWlzZXMpIHtcbiAgICB2YXIgcmV0ID0gbmV3IFNvbWVQcm9taXNlQXJyYXkocHJvbWlzZXMpO1xuICAgIHZhciBwcm9taXNlID0gcmV0LnByb21pc2UoKTtcbiAgICBpZiAocHJvbWlzZS5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHJldC5zZXRIb3dNYW55KDEpO1xuICAgIHJldC5zZXRVbndyYXAoKTtcbiAgICByZXQuaW5pdCgpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5Qcm9taXNlLmFueSA9IGZ1bmN0aW9uIFByb21pc2UkQW55KHByb21pc2VzKSB7XG4gICAgcmV0dXJuIFByb21pc2UkX0FueShwcm9taXNlcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5hbnkgPSBmdW5jdGlvbiBQcm9taXNlJGFueSgpIHtcbiAgICByZXR1cm4gUHJvbWlzZSRfQW55KHRoaXMpO1xufTtcblxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMKSB7XG52YXIgUHJvbWlzZVJlZHVjZSA9IFByb21pc2UucmVkdWNlO1xuXG5Qcm9taXNlLnByb3RvdHlwZS5lYWNoID0gZnVuY3Rpb24gUHJvbWlzZSRlYWNoKGZuKSB7XG4gICAgcmV0dXJuIFByb21pc2VSZWR1Y2UodGhpcywgZm4sIG51bGwsIElOVEVSTkFMKTtcbn07XG5cblByb21pc2UuZWFjaCA9IGZ1bmN0aW9uIFByb21pc2UkRWFjaChwcm9taXNlcywgZm4pIHtcbiAgICByZXR1cm4gUHJvbWlzZVJlZHVjZShwcm9taXNlcywgZm4sIG51bGwsIElOVEVSTkFMKTtcbn07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgX1xuKSB7XG5cbiAgdmFyIFNldFRpbWVvdXRTY2hlZHVsZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF8uZXh0ZW5kKFNldFRpbWVvdXRTY2hlZHVsZXIucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7fSxcblxuICAgIHJ1blNvb246IGZ1bmN0aW9uKGZuKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlKGZuKTtcbiAgICB9LFxuICAgIHNjaGVkdWxlOiBmdW5jdGlvbihmbiwgZGVsYXkpIHtcbiAgICAgIGRlbGF5ID0gZGVsYXkgfHwgMTtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZuLCBkZWxheSk7XG4gICAgfSxcblxuICAgIHVuc2NoZWR1bGU6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBTZXRUaW1lb3V0U2NoZWR1bGVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpXG4pO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBlczUgPSByZXF1aXJlKFwiLi9lczUuanNcIik7XG52YXIgaGF2ZUdldHRlcnMgPSAoZnVuY3Rpb24oKXtcbiAgICB0cnkge1xuICAgICAgICB2YXIgbyA9IHt9O1xuICAgICAgICBlczUuZGVmaW5lUHJvcGVydHkobywgXCJmXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG8uZiA9PT0gMztcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufSkoKTtcbnZhciBjYW5FdmFsdWF0ZSA9IHR5cGVvZiBuYXZpZ2F0b3IgPT0gXCJ1bmRlZmluZWRcIjtcbnZhciBlcnJvck9iaiA9IHtlOiB7fX07XG5mdW5jdGlvbiB0cnlDYXRjaDEoZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICB0cnkgeyByZXR1cm4gZm4uY2FsbChyZWNlaXZlciwgYXJnKTsgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYXRjaDIoZm4sIHJlY2VpdmVyLCBhcmcsIGFyZzIpIHtcbiAgICB0cnkgeyByZXR1cm4gZm4uY2FsbChyZWNlaXZlciwgYXJnLCBhcmcyKTsgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYXRjaDMoZm4sIHJlY2VpdmVyLCBhcmcsIGFyZzIsIGFyZzMpIHtcbiAgICB0cnkgeyByZXR1cm4gZm4uY2FsbChyZWNlaXZlciwgYXJnLCBhcmcyLCBhcmczKTsgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYXRjaDQoZm4sIHJlY2VpdmVyLCBhcmcsIGFyZzIsIGFyZzMsIGFyZzQpIHtcbiAgICB0cnkgeyByZXR1cm4gZm4uY2FsbChyZWNlaXZlciwgYXJnLCBhcmcyLCBhcmczLCBhcmc0KTsgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYXRjaEFwcGx5KGZuLCBhcmdzLCByZWNlaXZlcikge1xuICAgIHRyeSB7IHJldHVybiBmbi5hcHBseShyZWNlaXZlciwgYXJncyk7IH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBlcnJvck9iai5lID0gZTtcbiAgICAgICAgcmV0dXJuIGVycm9yT2JqO1xuICAgIH1cbn1cblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24oQ2hpbGQsIFBhcmVudCkge1xuICAgIHZhciBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgICBmdW5jdGlvbiBUKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gQ2hpbGQ7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IkID0gUGFyZW50O1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gUGFyZW50LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3AuY2FsbChQYXJlbnQucHJvdG90eXBlLCBwcm9wZXJ0eU5hbWUpICYmXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLmNoYXJBdChwcm9wZXJ0eU5hbWUubGVuZ3RoLTEpICE9PSBcIiRcIlxuICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZSArIFwiJFwiXSA9IFBhcmVudC5wcm90b3R5cGVbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBULnByb3RvdHlwZSA9IFBhcmVudC5wcm90b3R5cGU7XG4gICAgQ2hpbGQucHJvdG90eXBlID0gbmV3IFQoKTtcbiAgICByZXR1cm4gQ2hpbGQucHJvdG90eXBlO1xufTtcblxuZnVuY3Rpb24gYXNTdHJpbmcodmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiAoXCJcIiArIHZhbCk7XG59XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbCkge1xuICAgIHJldHVybiB2YWwgPT0gbnVsbCB8fCB2YWwgPT09IHRydWUgfHwgdmFsID09PSBmYWxzZSB8fFxuICAgICAgICB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCI7XG5cbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzUHJpbWl0aXZlKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gbWF5YmVXcmFwQXNFcnJvcihtYXliZUVycm9yKSB7XG4gICAgaWYgKCFpc1ByaW1pdGl2ZShtYXliZUVycm9yKSkgcmV0dXJuIG1heWJlRXJyb3I7XG5cbiAgICByZXR1cm4gbmV3IEVycm9yKGFzU3RyaW5nKG1heWJlRXJyb3IpKTtcbn1cblxuZnVuY3Rpb24gd2l0aEFwcGVuZGVkKHRhcmdldCwgYXBwZW5kZWUpIHtcbiAgICB2YXIgbGVuID0gdGFyZ2V0Lmxlbmd0aDtcbiAgICB2YXIgcmV0ID0gbmV3IEFycmF5KGxlbiArIDEpO1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICByZXRbaV0gPSB0YXJnZXRbaV07XG4gICAgfVxuICAgIHJldFtpXSA9IGFwcGVuZGVlO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdChvYmosIGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKGVzNS5pc0VTNSkge1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuICAgICAgICBpZiAoZGVzYyAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVzYy5nZXQgPT0gbnVsbCAmJiBkZXNjLnNldCA9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gZGVzYy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSA/IG9ialtrZXldIDogdm9pZCAwO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm90RW51bWVyYWJsZVByb3Aob2JqLCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChpc1ByaW1pdGl2ZShvYmopKSByZXR1cm4gb2JqO1xuICAgIHZhciBkZXNjcmlwdG9yID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfTtcbiAgICBlczUuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICByZXR1cm4gb2JqO1xufVxuXG5cbnZhciB3cmFwc1ByaW1pdGl2ZVJlY2VpdmVyID0gKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzICE9PSBcInN0cmluZ1wiO1xufSkuY2FsbChcInN0cmluZ1wiKTtcblxuZnVuY3Rpb24gdGhyb3dlcihyKSB7XG4gICAgdGhyb3cgcjtcbn1cblxudmFyIGluaGVyaXRlZERhdGFLZXlzID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmIChlczUuaXNFUzUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgb3B0cykge1xuICAgICAgICAgICAgdmFyIHJldCA9IFtdO1xuICAgICAgICAgICAgdmFyIHZpc2l0ZWRLZXlzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHZhciBnZXRLZXlzID0gT2JqZWN0KG9wdHMpLmluY2x1ZGVIaWRkZW5cbiAgICAgICAgICAgICAgICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cztcbiAgICAgICAgICAgIHdoaWxlIChvYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBrZXlzO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMgPSBnZXRLZXlzKG9iaik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh2aXNpdGVkS2V5c1trZXldKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdmlzaXRlZEtleXNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjICE9IG51bGwgJiYgZGVzYy5nZXQgPT0gbnVsbCAmJiBkZXNjLnNldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9iaiA9IGVzNS5nZXRQcm90b3R5cGVPZihvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gW107XG4gICAgICAgICAgICAvKmpzaGludCBmb3JpbjpmYWxzZSAqL1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9O1xuICAgIH1cblxufSkoKTtcblxuZnVuY3Rpb24gaXNDbGFzcyhmbikge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBlczUua2V5cyhmbi5wcm90b3R5cGUpO1xuICAgICAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICEoa2V5cy5sZW5ndGggPT09IDEgJiYga2V5c1swXSA9PT0gXCJjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b0Zhc3RQcm9wZXJ0aWVzKG9iaikge1xuICAgIC8qanNoaW50IC1XMDI3Ki9cbiAgICBmdW5jdGlvbiBmKCkge31cbiAgICBmLnByb3RvdHlwZSA9IG9iajtcbiAgICByZXR1cm4gZjtcbiAgICBldmFsKG9iaik7XG59XG5cbnZhciByaWRlbnQgPSAvXlthLXokX11bYS16JF8wLTldKiQvaTtcbmZ1bmN0aW9uIGlzSWRlbnRpZmllcihzdHIpIHtcbiAgICByZXR1cm4gcmlkZW50LnRlc3Qoc3RyKTtcbn1cblxuZnVuY3Rpb24gZmlsbGVkUmFuZ2UoY291bnQsIHByZWZpeCwgc3VmZml4KSB7XG4gICAgdmFyIHJldCA9IG5ldyBBcnJheShjb3VudCk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgcmV0W2ldID0gcHJlZml4ICsgaSArIHN1ZmZpeDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxudmFyIHJldCA9IHtcbiAgICBpc0NsYXNzOiBpc0NsYXNzLFxuICAgIGlzSWRlbnRpZmllcjogaXNJZGVudGlmaWVyLFxuICAgIGluaGVyaXRlZERhdGFLZXlzOiBpbmhlcml0ZWREYXRhS2V5cyxcbiAgICBnZXREYXRhUHJvcGVydHlPckRlZmF1bHQ6IGdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdCxcbiAgICB0aHJvd2VyOiB0aHJvd2VyLFxuICAgIGlzQXJyYXk6IGVzNS5pc0FycmF5LFxuICAgIGhhdmVHZXR0ZXJzOiBoYXZlR2V0dGVycyxcbiAgICBub3RFbnVtZXJhYmxlUHJvcDogbm90RW51bWVyYWJsZVByb3AsXG4gICAgaXNQcmltaXRpdmU6IGlzUHJpbWl0aXZlLFxuICAgIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgICBjYW5FdmFsdWF0ZTogY2FuRXZhbHVhdGUsXG4gICAgZXJyb3JPYmo6IGVycm9yT2JqLFxuICAgIHRyeUNhdGNoMTogdHJ5Q2F0Y2gxLFxuICAgIHRyeUNhdGNoMjogdHJ5Q2F0Y2gyLFxuICAgIHRyeUNhdGNoMzogdHJ5Q2F0Y2gzLFxuICAgIHRyeUNhdGNoNDogdHJ5Q2F0Y2g0LFxuICAgIHRyeUNhdGNoQXBwbHk6IHRyeUNhdGNoQXBwbHksXG4gICAgaW5oZXJpdHM6IGluaGVyaXRzLFxuICAgIHdpdGhBcHBlbmRlZDogd2l0aEFwcGVuZGVkLFxuICAgIGFzU3RyaW5nOiBhc1N0cmluZyxcbiAgICBtYXliZVdyYXBBc0Vycm9yOiBtYXliZVdyYXBBc0Vycm9yLFxuICAgIHdyYXBzUHJpbWl0aXZlUmVjZWl2ZXI6IHdyYXBzUHJpbWl0aXZlUmVjZWl2ZXIsXG4gICAgdG9GYXN0UHJvcGVydGllczogdG9GYXN0UHJvcGVydGllcyxcbiAgICBmaWxsZWRSYW5nZTogZmlsbGVkUmFuZ2Vcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmV0O1xuIiwiKGZ1bmN0aW9uKHByb2Nlc3Mpey8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc2NoZWR1bGUgPSByZXF1aXJlKFwiLi9zY2hlZHVsZS5qc1wiKTtcbnZhciBRdWV1ZSA9IHJlcXVpcmUoXCIuL3F1ZXVlLmpzXCIpO1xudmFyIGVycm9yT2JqID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKS5lcnJvck9iajtcbnZhciB0cnlDYXRjaDEgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpLnRyeUNhdGNoMTtcbnZhciBfcHJvY2VzcyA9IHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiID8gcHJvY2VzcyA6IHZvaWQgMDtcblxuZnVuY3Rpb24gQXN5bmMoKSB7XG4gICAgdGhpcy5faXNUaWNrVXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3NjaGVkdWxlID0gc2NoZWR1bGU7XG4gICAgdGhpcy5fbGVuZ3RoID0gMDtcbiAgICB0aGlzLl9sYXRlQnVmZmVyID0gbmV3IFF1ZXVlKDE2KTtcbiAgICB0aGlzLl9mdW5jdGlvbkJ1ZmZlciA9IG5ldyBRdWV1ZSg2NTUzNik7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuY29uc3VtZUZ1bmN0aW9uQnVmZmVyID0gZnVuY3Rpb24gQXN5bmMkY29uc3VtZUZ1bmN0aW9uQnVmZmVyKCkge1xuICAgICAgICBzZWxmLl9jb25zdW1lRnVuY3Rpb25CdWZmZXIoKTtcbiAgICB9O1xufVxuXG5Bc3luYy5wcm90b3R5cGUuaGF2ZUl0ZW1zUXVldWVkID0gZnVuY3Rpb24gQXN5bmMkaGF2ZUl0ZW1zUXVldWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGggPiAwO1xufTtcblxuQXN5bmMucHJvdG90eXBlLmludm9rZUxhdGVyID0gZnVuY3Rpb24gQXN5bmMkaW52b2tlTGF0ZXIoZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICBpZiAoX3Byb2Nlc3MgIT09IHZvaWQgMCAmJlxuICAgICAgICBfcHJvY2Vzcy5kb21haW4gIT0gbnVsbCAmJlxuICAgICAgICAhZm4uZG9tYWluKSB7XG4gICAgICAgIGZuID0gX3Byb2Nlc3MuZG9tYWluLmJpbmQoZm4pO1xuICAgIH1cbiAgICB0aGlzLl9sYXRlQnVmZmVyLnB1c2goZm4sIHJlY2VpdmVyLCBhcmcpO1xuICAgIHRoaXMuX3F1ZXVlVGljaygpO1xufTtcblxuQXN5bmMucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uIEFzeW5jJGludm9rZShmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgIGlmIChfcHJvY2VzcyAhPT0gdm9pZCAwICYmXG4gICAgICAgIF9wcm9jZXNzLmRvbWFpbiAhPSBudWxsICYmXG4gICAgICAgICFmbi5kb21haW4pIHtcbiAgICAgICAgZm4gPSBfcHJvY2Vzcy5kb21haW4uYmluZChmbik7XG4gICAgfVxuICAgIHZhciBmdW5jdGlvbkJ1ZmZlciA9IHRoaXMuX2Z1bmN0aW9uQnVmZmVyO1xuICAgIGZ1bmN0aW9uQnVmZmVyLnB1c2goZm4sIHJlY2VpdmVyLCBhcmcpO1xuICAgIHRoaXMuX2xlbmd0aCA9IGZ1bmN0aW9uQnVmZmVyLmxlbmd0aCgpO1xuICAgIHRoaXMuX3F1ZXVlVGljaygpO1xufTtcblxuQXN5bmMucHJvdG90eXBlLl9jb25zdW1lRnVuY3Rpb25CdWZmZXIgPVxuZnVuY3Rpb24gQXN5bmMkX2NvbnN1bWVGdW5jdGlvbkJ1ZmZlcigpIHtcbiAgICB2YXIgZnVuY3Rpb25CdWZmZXIgPSB0aGlzLl9mdW5jdGlvbkJ1ZmZlcjtcbiAgICB3aGlsZSAoZnVuY3Rpb25CdWZmZXIubGVuZ3RoKCkgPiAwKSB7XG4gICAgICAgIHZhciBmbiA9IGZ1bmN0aW9uQnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgIHZhciByZWNlaXZlciA9IGZ1bmN0aW9uQnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgIHZhciBhcmcgPSBmdW5jdGlvbkJ1ZmZlci5zaGlmdCgpO1xuICAgICAgICBmbi5jYWxsKHJlY2VpdmVyLCBhcmcpO1xuICAgIH1cbiAgICB0aGlzLl9yZXNldCgpO1xuICAgIHRoaXMuX2NvbnN1bWVMYXRlQnVmZmVyKCk7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuX2NvbnN1bWVMYXRlQnVmZmVyID0gZnVuY3Rpb24gQXN5bmMkX2NvbnN1bWVMYXRlQnVmZmVyKCkge1xuICAgIHZhciBidWZmZXIgPSB0aGlzLl9sYXRlQnVmZmVyO1xuICAgIHdoaWxlKGJ1ZmZlci5sZW5ndGgoKSA+IDApIHtcbiAgICAgICAgdmFyIGZuID0gYnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgIHZhciByZWNlaXZlciA9IGJ1ZmZlci5zaGlmdCgpO1xuICAgICAgICB2YXIgYXJnID0gYnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgIHZhciByZXMgPSB0cnlDYXRjaDEoZm4sIHJlY2VpdmVyLCBhcmcpO1xuICAgICAgICBpZiAocmVzID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgdGhpcy5fcXVldWVUaWNrKCk7XG4gICAgICAgICAgICBpZiAoZm4uZG9tYWluICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmbi5kb21haW4uZW1pdChcImVycm9yXCIsIHJlcy5lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVzLmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuX3F1ZXVlVGljayA9IGZ1bmN0aW9uIEFzeW5jJF9xdWV1ZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzVGlja1VzZWQpIHtcbiAgICAgICAgdGhpcy5fc2NoZWR1bGUodGhpcy5jb25zdW1lRnVuY3Rpb25CdWZmZXIpO1xuICAgICAgICB0aGlzLl9pc1RpY2tVc2VkID0gdHJ1ZTtcbiAgICB9XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuX3Jlc2V0ID0gZnVuY3Rpb24gQXN5bmMkX3Jlc2V0KCkge1xuICAgIHRoaXMuX2lzVGlja1VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9sZW5ndGggPSAwO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgQXN5bmMoKTtcblxufSkocmVxdWlyZShcIl9fYnJvd3NlcmlmeV9wcm9jZXNzXCIpKSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JqZWN0ZnJlZXplID0gcmVxdWlyZShcIi4vZXM1LmpzXCIpLmZyZWV6ZTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBpbmhlcml0cyA9IHV0aWwuaW5oZXJpdHM7XG52YXIgbm90RW51bWVyYWJsZVByb3AgPSB1dGlsLm5vdEVudW1lcmFibGVQcm9wO1xuXG5mdW5jdGlvbiBtYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb24oZSkge1xuICAgIHRyeSB7XG4gICAgICAgIG5vdEVudW1lcmFibGVQcm9wKGUsIFwiaXNPcGVyYXRpb25hbFwiLCB0cnVlKTtcbiAgICB9XG4gICAgY2F0Y2goaWdub3JlKSB7fVxufVxuXG5mdW5jdGlvbiBvcmlnaW5hdGVzRnJvbVJlamVjdGlvbihlKSB7XG4gICAgaWYgKGUgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAoKGUgaW5zdGFuY2VvZiBPcGVyYXRpb25hbEVycm9yKSB8fFxuICAgICAgICBlW1wiaXNPcGVyYXRpb25hbFwiXSA9PT0gdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzRXJyb3Iob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEVycm9yO1xufVxuXG5mdW5jdGlvbiBjYW5BdHRhY2gob2JqKSB7XG4gICAgcmV0dXJuIGlzRXJyb3Iob2JqKTtcbn1cblxuZnVuY3Rpb24gc3ViRXJyb3IobmFtZVByb3BlcnR5LCBkZWZhdWx0TWVzc2FnZSkge1xuICAgIGZ1bmN0aW9uIFN1YkVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFN1YkVycm9yKSkgcmV0dXJuIG5ldyBTdWJFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgPyBtZXNzYWdlIDogZGVmYXVsdE1lc3NhZ2U7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVQcm9wZXJ0eTtcbiAgICAgICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbmhlcml0cyhTdWJFcnJvciwgRXJyb3IpO1xuICAgIHJldHVybiBTdWJFcnJvcjtcbn1cblxudmFyIF9UeXBlRXJyb3IsIF9SYW5nZUVycm9yO1xudmFyIENhbmNlbGxhdGlvbkVycm9yID0gc3ViRXJyb3IoXCJDYW5jZWxsYXRpb25FcnJvclwiLCBcImNhbmNlbGxhdGlvbiBlcnJvclwiKTtcbnZhciBUaW1lb3V0RXJyb3IgPSBzdWJFcnJvcihcIlRpbWVvdXRFcnJvclwiLCBcInRpbWVvdXQgZXJyb3JcIik7XG52YXIgQWdncmVnYXRlRXJyb3IgPSBzdWJFcnJvcihcIkFnZ3JlZ2F0ZUVycm9yXCIsIFwiYWdncmVnYXRlIGVycm9yXCIpO1xudHJ5IHtcbiAgICBfVHlwZUVycm9yID0gVHlwZUVycm9yO1xuICAgIF9SYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcbn0gY2F0Y2goZSkge1xuICAgIF9UeXBlRXJyb3IgPSBzdWJFcnJvcihcIlR5cGVFcnJvclwiLCBcInR5cGUgZXJyb3JcIik7XG4gICAgX1JhbmdlRXJyb3IgPSBzdWJFcnJvcihcIlJhbmdlRXJyb3JcIiwgXCJyYW5nZSBlcnJvclwiKTtcbn1cblxudmFyIG1ldGhvZHMgPSAoXCJqb2luIHBvcCBwdXNoIHNoaWZ0IHVuc2hpZnQgc2xpY2UgZmlsdGVyIGZvckVhY2ggc29tZSBcIiArXG4gICAgXCJldmVyeSBtYXAgaW5kZXhPZiBsYXN0SW5kZXhPZiByZWR1Y2UgcmVkdWNlUmlnaHQgc29ydCByZXZlcnNlXCIpLnNwbGl0KFwiIFwiKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHR5cGVvZiBBcnJheS5wcm90b3R5cGVbbWV0aG9kc1tpXV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBBZ2dyZWdhdGVFcnJvci5wcm90b3R5cGVbbWV0aG9kc1tpXV0gPSBBcnJheS5wcm90b3R5cGVbbWV0aG9kc1tpXV07XG4gICAgfVxufVxuXG5BZ2dyZWdhdGVFcnJvci5wcm90b3R5cGUubGVuZ3RoID0gMDtcbkFnZ3JlZ2F0ZUVycm9yLnByb3RvdHlwZVtcImlzT3BlcmF0aW9uYWxcIl0gPSB0cnVlO1xudmFyIGxldmVsID0gMDtcbkFnZ3JlZ2F0ZUVycm9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbmRlbnQgPSBBcnJheShsZXZlbCAqIDQgKyAxKS5qb2luKFwiIFwiKTtcbiAgICB2YXIgcmV0ID0gXCJcXG5cIiArIGluZGVudCArIFwiQWdncmVnYXRlRXJyb3Igb2Y6XCIgKyBcIlxcblwiO1xuICAgIGxldmVsKys7XG4gICAgaW5kZW50ID0gQXJyYXkobGV2ZWwgKiA0ICsgMSkuam9pbihcIiBcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBzdHIgPSB0aGlzW2ldID09PSB0aGlzID8gXCJbQ2lyY3VsYXIgQWdncmVnYXRlRXJyb3JdXCIgOiB0aGlzW2ldICsgXCJcIjtcbiAgICAgICAgdmFyIGxpbmVzID0gc3RyLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGxpbmVzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBsaW5lc1tqXSA9IGluZGVudCArIGxpbmVzW2pdO1xuICAgICAgICB9XG4gICAgICAgIHN0ciA9IGxpbmVzLmpvaW4oXCJcXG5cIik7XG4gICAgICAgIHJldCArPSBzdHIgKyBcIlxcblwiO1xuICAgIH1cbiAgICBsZXZlbC0tO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5mdW5jdGlvbiBPcGVyYXRpb25hbEVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm5hbWUgPSBcIk9wZXJhdGlvbmFsRXJyb3JcIjtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuY2F1c2UgPSBtZXNzYWdlO1xuICAgIHRoaXNbXCJpc09wZXJhdGlvbmFsXCJdID0gdHJ1ZTtcblxuICAgIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZS5tZXNzYWdlO1xuICAgICAgICB0aGlzLnN0YWNrID0gbWVzc2FnZS5zdGFjaztcbiAgICB9IGVsc2UgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH1cblxufVxuaW5oZXJpdHMoT3BlcmF0aW9uYWxFcnJvciwgRXJyb3IpO1xuXG52YXIga2V5ID0gXCJfX0JsdWViaXJkRXJyb3JUeXBlc19fXCI7XG52YXIgZXJyb3JUeXBlcyA9IEVycm9yW2tleV07XG5pZiAoIWVycm9yVHlwZXMpIHtcbiAgICBlcnJvclR5cGVzID0gT2JqZWN0ZnJlZXplKHtcbiAgICAgICAgQ2FuY2VsbGF0aW9uRXJyb3I6IENhbmNlbGxhdGlvbkVycm9yLFxuICAgICAgICBUaW1lb3V0RXJyb3I6IFRpbWVvdXRFcnJvcixcbiAgICAgICAgT3BlcmF0aW9uYWxFcnJvcjogT3BlcmF0aW9uYWxFcnJvcixcbiAgICAgICAgUmVqZWN0aW9uRXJyb3I6IE9wZXJhdGlvbmFsRXJyb3IsXG4gICAgICAgIEFnZ3JlZ2F0ZUVycm9yOiBBZ2dyZWdhdGVFcnJvclxuICAgIH0pO1xuICAgIG5vdEVudW1lcmFibGVQcm9wKEVycm9yLCBrZXksIGVycm9yVHlwZXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBFcnJvcjogRXJyb3IsXG4gICAgVHlwZUVycm9yOiBfVHlwZUVycm9yLFxuICAgIFJhbmdlRXJyb3I6IF9SYW5nZUVycm9yLFxuICAgIENhbmNlbGxhdGlvbkVycm9yOiBlcnJvclR5cGVzLkNhbmNlbGxhdGlvbkVycm9yLFxuICAgIE9wZXJhdGlvbmFsRXJyb3I6IGVycm9yVHlwZXMuT3BlcmF0aW9uYWxFcnJvcixcbiAgICBUaW1lb3V0RXJyb3I6IGVycm9yVHlwZXMuVGltZW91dEVycm9yLFxuICAgIEFnZ3JlZ2F0ZUVycm9yOiBlcnJvclR5cGVzLkFnZ3JlZ2F0ZUVycm9yLFxuICAgIG9yaWdpbmF0ZXNGcm9tUmVqZWN0aW9uOiBvcmlnaW5hdGVzRnJvbVJlamVjdGlvbixcbiAgICBtYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb246IG1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbixcbiAgICBjYW5BdHRhY2g6IGNhbkF0dGFjaFxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMKSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgY2FuQXR0YWNoID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpLmNhbkF0dGFjaDtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgaXNPYmplY3QgPSB1dGlsLmlzT2JqZWN0O1xuXG5mdW5jdGlvbiBnZXRUaGVuKG9iaikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBvYmoudGhlbjtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgICBlcnJvck9iai5lID0gZTtcbiAgICAgICAgcmV0dXJuIGVycm9yT2JqO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gUHJvbWlzZSRfQ2FzdChvYmosIG9yaWdpbmFsUHJvbWlzZSkge1xuICAgIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQW55Qmx1ZWJpcmRQcm9taXNlKG9iaikpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgICAgICByZXQuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgICAgICAgICBvYmouX3RoZW4oXG4gICAgICAgICAgICAgICAgcmV0Ll9mdWxmaWxsVW5jaGVja2VkLFxuICAgICAgICAgICAgICAgIHJldC5fcmVqZWN0VW5jaGVja2VkQ2hlY2tFcnJvcixcbiAgICAgICAgICAgICAgICByZXQuX3Byb2dyZXNzVW5jaGVja2VkLFxuICAgICAgICAgICAgICAgIHJldCxcbiAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0Ll9zZXRGb2xsb3dpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRoZW4gPSBnZXRUaGVuKG9iaik7XG4gICAgICAgIGlmICh0aGVuID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsUHJvbWlzZSAhPT0gdm9pZCAwICYmIGNhbkF0dGFjaCh0aGVuLmUpKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxQcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRoZW4uZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QodGhlbi5lKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZSRfZG9UaGVuYWJsZShvYmosIHRoZW4sIG9yaWdpbmFsUHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cblxudmFyIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGlzQW55Qmx1ZWJpcmRQcm9taXNlKG9iaikge1xuICAgIHJldHVybiBoYXNQcm9wLmNhbGwob2JqLCBcIl9wcm9taXNlMFwiKTtcbn1cblxuZnVuY3Rpb24gUHJvbWlzZSRfZG9UaGVuYWJsZSh4LCB0aGVuLCBvcmlnaW5hbFByb21pc2UpIHtcbiAgICB2YXIgcmVzb2x2ZXIgPSBQcm9taXNlLmRlZmVyKCk7XG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIHRoZW4uY2FsbChcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICBQcm9taXNlJF9yZXNvbHZlRnJvbVRoZW5hYmxlLFxuICAgICAgICAgICAgUHJvbWlzZSRfcmVqZWN0RnJvbVRoZW5hYmxlLFxuICAgICAgICAgICAgUHJvbWlzZSRfcHJvZ3Jlc3NGcm9tVGhlbmFibGVcbiAgICAgICAgKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgdHJhY2UgPSBjYW5BdHRhY2goZSkgPyBlIDogbmV3IEVycm9yKGUgKyBcIlwiKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFByb21pc2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsUHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh0cmFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlci5wcm9taXNlLl9yZWplY3QoZSwgdHJhY2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlci5wcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gUHJvbWlzZSRfcmVzb2x2ZUZyb21UaGVuYWJsZSh5KSB7XG4gICAgICAgIGlmIChjYWxsZWQpIHJldHVybjtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoeCA9PT0geSkge1xuICAgICAgICAgICAgdmFyIGUgPSBQcm9taXNlLl9tYWtlU2VsZlJlc29sdXRpb25FcnJvcigpO1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsUHJvbWlzZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxQcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZXIucHJvbWlzZS5fcmVqZWN0KGUsIHZvaWQgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZXIucmVzb2x2ZSh5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBQcm9taXNlJF9yZWplY3RGcm9tVGhlbmFibGUocikge1xuICAgICAgICBpZiAoY2FsbGVkKSByZXR1cm47XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIHZhciB0cmFjZSA9IGNhbkF0dGFjaChyKSA/IHIgOiBuZXcgRXJyb3IociArIFwiXCIpO1xuICAgICAgICBpZiAob3JpZ2luYWxQcm9taXNlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG9yaWdpbmFsUHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh0cmFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZXIucHJvbWlzZS5fcmVqZWN0KHIsIHRyYWNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBQcm9taXNlJF9wcm9ncmVzc0Zyb21UaGVuYWJsZSh2KSB7XG4gICAgICAgIGlmIChjYWxsZWQpIHJldHVybjtcbiAgICAgICAgdmFyIHByb21pc2UgPSByZXNvbHZlci5wcm9taXNlO1xuICAgICAgICBpZiAodHlwZW9mIHByb21pc2UuX3Byb2dyZXNzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHByb21pc2UuX3Byb2dyZXNzKHYpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5yZXR1cm4gUHJvbWlzZSRfQ2FzdDtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCwgY2FzdCkge1xudmFyIGNhbkF0dGFjaCA9IHJlcXVpcmUoXCIuL2Vycm9ycy5qc1wiKS5jYW5BdHRhY2g7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgaXNBcnJheSA9IHV0aWwuaXNBcnJheTtcblxuZnVuY3Rpb24gdG9SZXNvbHV0aW9uVmFsdWUodmFsKSB7XG4gICAgc3dpdGNoKHZhbCkge1xuICAgIGNhc2UgLTE6IHJldHVybiB2b2lkIDA7XG4gICAgY2FzZSAtMjogcmV0dXJuIFtdO1xuICAgIGNhc2UgLTM6IHJldHVybiB7fTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFByb21pc2VBcnJheSh2YWx1ZXMpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgdmFyIHBhcmVudCA9IHZvaWQgMDtcbiAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBwYXJlbnQgPSB2YWx1ZXM7XG4gICAgICAgIHByb21pc2UuX3Byb3BhZ2F0ZUZyb20ocGFyZW50LCAxIHwgNCk7XG4gICAgfVxuICAgIHByb21pc2UuX3NldFRyYWNlKHBhcmVudCk7XG4gICAgdGhpcy5fdmFsdWVzID0gdmFsdWVzO1xuICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgdGhpcy5fdG90YWxSZXNvbHZlZCA9IDA7XG4gICAgdGhpcy5faW5pdCh2b2lkIDAsIC0yKTtcbn1cblByb21pc2VBcnJheS5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JHByb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfaW5pdChfLCByZXNvbHZlVmFsdWVJZkVtcHR5KSB7XG4gICAgdmFyIHZhbHVlcyA9IGNhc3QodGhpcy5fdmFsdWVzLCB2b2lkIDApO1xuICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgdmFsdWVzLl9zZXRCb3VuZFRvKHRoaXMuX3Byb21pc2UuX2JvdW5kVG8pO1xuICAgICAgICBpZiAodmFsdWVzLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5fc2V0dGxlZFZhbHVlO1xuICAgICAgICAgICAgaWYgKCFpc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyID0gbmV3IFByb21pc2UuVHlwZUVycm9yKFwiZXhwZWN0aW5nIGFuIGFycmF5LCBhIHByb21pc2Ugb3IgYSB0aGVuYWJsZVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9faGFyZFJlamVjdF9fKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlcy5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgdmFsdWVzLl90aGVuKFxuICAgICAgICAgICAgICAgIFByb21pc2VBcnJheSRfaW5pdCxcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWplY3QsXG4gICAgICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZVZhbHVlSWZFbXB0eVxuICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzLl91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3QodmFsdWVzLl9zZXR0bGVkVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgIHZhciBlcnIgPSBuZXcgUHJvbWlzZS5UeXBlRXJyb3IoXCJleHBlY3RpbmcgYW4gYXJyYXksIGEgcHJvbWlzZSBvciBhIHRoZW5hYmxlXCIpO1xuICAgICAgICB0aGlzLl9faGFyZFJlamVjdF9fKGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAocmVzb2x2ZVZhbHVlSWZFbXB0eSA9PT0gLTUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVFbXB0eUFycmF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlKHRvUmVzb2x1dGlvblZhbHVlKHJlc29sdmVWYWx1ZUlmRW1wdHkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBsZW4gPSB0aGlzLmdldEFjdHVhbExlbmd0aCh2YWx1ZXMubGVuZ3RoKTtcbiAgICB2YXIgbmV3TGVuID0gbGVuO1xuICAgIHZhciBuZXdWYWx1ZXMgPSB0aGlzLnNob3VsZENvcHlWYWx1ZXMoKSA/IG5ldyBBcnJheShsZW4pIDogdGhpcy5fdmFsdWVzO1xuICAgIHZhciBpc0RpcmVjdFNjYW5OZWVkZWQgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHZhbHVlc1tpXSwgdm9pZCAwKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3Byb3h5UHJvbWlzZUFycmF5KHRoaXMsIGkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICAgICAgICAgICAgICBpc0RpcmVjdFNjYW5OZWVkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNEaXJlY3RTY2FuTmVlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBuZXdWYWx1ZXNbaV0gPSBtYXliZVByb21pc2U7XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlcyA9IG5ld1ZhbHVlcztcbiAgICB0aGlzLl9sZW5ndGggPSBuZXdMZW47XG4gICAgaWYgKGlzRGlyZWN0U2Nhbk5lZWRlZCkge1xuICAgICAgICB0aGlzLl9zY2FuRGlyZWN0VmFsdWVzKGxlbik7XG4gICAgfVxufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZUF0ID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfc2V0dGxlUHJvbWlzZUF0KGluZGV4KSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5fdmFsdWVzW2luZGV4XTtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2VGdWxmaWxsZWQodmFsdWUsIGluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZS5fc2V0dGxlZFZhbHVlLCBpbmRleCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZVJlamVjdGVkKHZhbHVlLl9zZXR0bGVkVmFsdWUsIGluZGV4KTtcbiAgICB9XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9zY2FuRGlyZWN0VmFsdWVzID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfc2NhbkRpcmVjdFZhbHVlcyhsZW4pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NldHRsZVByb21pc2VBdChpKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9pc1Jlc29sdmVkID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9pc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXMgPT09IG51bGw7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXNvbHZlID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9yZXNvbHZlKHZhbHVlKSB7XG4gICAgdGhpcy5fdmFsdWVzID0gbnVsbDtcbiAgICB0aGlzLl9wcm9taXNlLl9mdWxmaWxsKHZhbHVlKTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX19oYXJkUmVqZWN0X18gPVxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVqZWN0ID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9yZWplY3QocmVhc29uKSB7XG4gICAgdGhpcy5fdmFsdWVzID0gbnVsbDtcbiAgICB2YXIgdHJhY2UgPSBjYW5BdHRhY2gocmVhc29uKSA/IHJlYXNvbiA6IG5ldyBFcnJvcihyZWFzb24gKyBcIlwiKTtcbiAgICB0aGlzLl9wcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICB0aGlzLl9wcm9taXNlLl9yZWplY3QocmVhc29uLCB0cmFjZSk7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlUHJvZ3Jlc3NlZCA9XG5mdW5jdGlvbiBQcm9taXNlQXJyYXkkX3Byb21pc2VQcm9ncmVzc2VkKHByb2dyZXNzVmFsdWUsIGluZGV4KSB7XG4gICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX3Byb21pc2UuX3Byb2dyZXNzKHtcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICB2YWx1ZTogcHJvZ3Jlc3NWYWx1ZVxuICAgIH0pO1xufTtcblxuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ZhbHVlcyk7XG4gICAgfVxufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVJlamVjdGVkID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfcHJvbWlzZVJlamVjdGVkKHJlYXNvbiwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fdG90YWxSZXNvbHZlZCsrO1xuICAgIHRoaXMuX3JlamVjdChyZWFzb24pO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5zaG91bGRDb3B5VmFsdWVzID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfc2hvdWxkQ29weVZhbHVlcygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuZ2V0QWN0dWFsTGVuZ3RoID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRnZXRBY3R1YWxMZW5ndGgobGVuKSB7XG4gICAgcmV0dXJuIGxlbjtcbn07XG5cbnJldHVybiBQcm9taXNlQXJyYXk7XG59O1xuIiwiKGZ1bmN0aW9uKCl7LyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpLmluaGVyaXRzO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZXM1LmpzXCIpLmRlZmluZVByb3BlcnR5O1xuXG52YXIgcmlnbm9yZSA9IG5ldyBSZWdFeHAoXG4gICAgXCJcXFxcYig/OlthLXpBLVowLTkuXStcXFxcJF9cXFxcdyt8XCIgK1xuICAgIFwidHJ5Q2F0Y2goPzoxfDJ8M3w0fEFwcGx5KXxuZXcgXFxcXHcqUHJvbWlzZUFycmF5fFwiICtcbiAgICBcIlxcXFx3KlByb21pc2VBcnJheVxcXFwuXFxcXHcqUHJvbWlzZUFycmF5fFwiICtcbiAgICBcInNldFRpbWVvdXR8Q2F0Y2hGaWx0ZXJcXFxcJF9cXFxcdyt8bWFrZU5vZGVQcm9taXNpZmllZHxwcm9jZXNzSW1tZWRpYXRlfFwiICtcbiAgICBcInByb2Nlc3MuX3RpY2tDYWxsYmFja3xuZXh0VGlja3xBc3luY1xcXFwkXFxcXHcrKVxcXFxiXCJcbik7XG5cbnZhciBydHJhY2VsaW5lID0gbnVsbDtcbnZhciBmb3JtYXRTdGFjayA9IG51bGw7XG5cbmZ1bmN0aW9uIGZvcm1hdE5vbkVycm9yKG9iaikge1xuICAgIHZhciBzdHI7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBzdHIgPSBcIltmdW5jdGlvbiBcIiArXG4gICAgICAgICAgICAob2JqLm5hbWUgfHwgXCJhbm9ueW1vdXNcIikgK1xuICAgICAgICAgICAgXCJdXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gb2JqLnRvU3RyaW5nKCk7XG4gICAgICAgIHZhciBydXNlbGVzc1RvU3RyaW5nID0gL1xcW29iamVjdCBbYS16QS1aMC05JF9dK1xcXS87XG4gICAgICAgIGlmIChydXNlbGVzc1RvU3RyaW5nLnRlc3Qoc3RyKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3U3RyID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICAgICAgICAgICAgICBzdHIgPSBuZXdTdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc3RyID0gXCIoZW1wdHkgYXJyYXkpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcIig8XCIgKyBzbmlwKHN0cikgKyBcIj4sIG5vIHN0YWNrIHRyYWNlKVwiKTtcbn1cblxuZnVuY3Rpb24gc25pcChzdHIpIHtcbiAgICB2YXIgbWF4Q2hhcnMgPSA0MTtcbiAgICBpZiAoc3RyLmxlbmd0aCA8IG1heENoYXJzKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIG1heENoYXJzIC0gMykgKyBcIi4uLlwiO1xufVxuXG5mdW5jdGlvbiBDYXB0dXJlZFRyYWNlKGlnbm9yZVVudGlsLCBpc1RvcExldmVsKSB7XG4gICAgdGhpcy5jYXB0dXJlU3RhY2tUcmFjZShDYXB0dXJlZFRyYWNlLCBpc1RvcExldmVsKTtcblxufVxuaW5oZXJpdHMoQ2FwdHVyZWRUcmFjZSwgRXJyb3IpO1xuXG5DYXB0dXJlZFRyYWNlLnByb3RvdHlwZS5jYXB0dXJlU3RhY2tUcmFjZSA9XG5mdW5jdGlvbiBDYXB0dXJlZFRyYWNlJGNhcHR1cmVTdGFja1RyYWNlKGlnbm9yZVVudGlsLCBpc1RvcExldmVsKSB7XG4gICAgY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgaWdub3JlVW50aWwsIGlzVG9wTGV2ZWwpO1xufTtcblxuQ2FwdHVyZWRUcmFjZS5wb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbiA9XG5mdW5jdGlvbiBDYXB0dXJlZFRyYWNlJFBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICB2YXIgbWVzc2FnZTtcbiAgICAgICAgaWYgKHR5cGVvZiByZWFzb24gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHJlYXNvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgc3RhY2sgPSByZWFzb24uc3RhY2s7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJQb3NzaWJseSB1bmhhbmRsZWQgXCIgKyBmb3JtYXRTdGFjayhzdGFjaywgcmVhc29uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlBvc3NpYmx5IHVuaGFuZGxlZCBcIiArIFN0cmluZyhyZWFzb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgICAgICAgICB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uc29sZS5sb2cgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUubG9nID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbkNhcHR1cmVkVHJhY2UuY29tYmluZSA9IGZ1bmN0aW9uIENhcHR1cmVkVHJhY2UkQ29tYmluZShjdXJyZW50LCBwcmV2KSB7XG4gICAgdmFyIGN1ckxhc3QgPSBjdXJyZW50Lmxlbmd0aCAtIDE7XG4gICAgZm9yICh2YXIgaSA9IHByZXYubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBwcmV2W2ldO1xuICAgICAgICBpZiAoY3VycmVudFtjdXJMYXN0XSA9PT0gbGluZSkge1xuICAgICAgICAgICAgY3VycmVudC5wb3AoKTtcbiAgICAgICAgICAgIGN1ckxhc3QtLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3VycmVudC5wdXNoKFwiRnJvbSBwcmV2aW91cyBldmVudDpcIik7XG4gICAgdmFyIGxpbmVzID0gY3VycmVudC5jb25jYXQocHJldik7XG5cbiAgICB2YXIgcmV0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcblxuICAgICAgICBpZiAoKHJpZ25vcmUudGVzdChsaW5lc1tpXSkgfHxcbiAgICAgICAgICAgIChpID4gMCAmJiAhcnRyYWNlbGluZS50ZXN0KGxpbmVzW2ldKSkgJiZcbiAgICAgICAgICAgIGxpbmVzW2ldICE9PSBcIkZyb20gcHJldmlvdXMgZXZlbnQ6XCIpXG4gICAgICAgKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXQucHVzaChsaW5lc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5DYXB0dXJlZFRyYWNlLnByb3RlY3RFcnJvck1lc3NhZ2VOZXdsaW5lcyA9IGZ1bmN0aW9uKHN0YWNrKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAocnRyYWNlbGluZS50ZXN0KHN0YWNrW2ldKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA8PSAxKSByZXR1cm47XG5cbiAgICB2YXIgZXJyb3JNZXNzYWdlTGluZXMgPSBbXTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGk7ICsraikge1xuICAgICAgICBlcnJvck1lc3NhZ2VMaW5lcy5wdXNoKHN0YWNrLnNoaWZ0KCkpO1xuICAgIH1cbiAgICBzdGFjay51bnNoaWZ0KGVycm9yTWVzc2FnZUxpbmVzLmpvaW4oXCJcXHUwMDAyXFx1MDAwMFxcdTAwMDFcIikpO1xufTtcblxuQ2FwdHVyZWRUcmFjZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uIENhcHR1cmVkVHJhY2UkSXNTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBjYXB0dXJlU3RhY2tUcmFjZSA9PT0gXCJmdW5jdGlvblwiO1xufTtcblxudmFyIGNhcHR1cmVTdGFja1RyYWNlID0gKGZ1bmN0aW9uIHN0YWNrRGV0ZWN0aW9uKCkge1xuICAgIGlmICh0eXBlb2YgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID09PSBcIm51bWJlclwiICYmXG4gICAgICAgIHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJ0cmFjZWxpbmUgPSAvXlxccyphdFxccyovO1xuICAgICAgICBmb3JtYXRTdGFjayA9IGZ1bmN0aW9uKHN0YWNrLCBlcnJvcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHN0YWNrO1xuXG4gICAgICAgICAgICBpZiAoZXJyb3IubmFtZSAhPT0gdm9pZCAwICYmXG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm5hbWUgKyBcIi4gXCIgKyBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE5vbkVycm9yKGVycm9yKTtcblxuXG4gICAgICAgIH07XG4gICAgICAgIHZhciBjYXB0dXJlU3RhY2tUcmFjZSA9IEVycm9yLmNhcHR1cmVTdGFja1RyYWNlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gQ2FwdHVyZWRUcmFjZSRfY2FwdHVyZVN0YWNrVHJhY2UoXG4gICAgICAgICAgICByZWNlaXZlciwgaWdub3JlVW50aWwpIHtcbiAgICAgICAgICAgIGNhcHR1cmVTdGFja1RyYWNlKHJlY2VpdmVyLCBpZ25vcmVVbnRpbCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoKTtcblxuICAgIGlmICh0eXBlb2YgZXJyLnN0YWNrID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgIHR5cGVvZiBcIlwiLnN0YXJ0c1dpdGggPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAoZXJyLnN0YWNrLnN0YXJ0c1dpdGgoXCJzdGFja0RldGVjdGlvbkBcIikpICYmXG4gICAgICAgIHN0YWNrRGV0ZWN0aW9uLm5hbWUgPT09IFwic3RhY2tEZXRlY3Rpb25cIikge1xuXG4gICAgICAgIGRlZmluZVByb3BlcnR5KEVycm9yLCBcInN0YWNrVHJhY2VMaW1pdFwiLCB7XG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiAyNVxuICAgICAgICB9KTtcbiAgICAgICAgcnRyYWNlbGluZSA9IC9ALztcbiAgICAgICAgdmFyIHJsaW5lID0gL1tAXFxuXS87XG5cbiAgICAgICAgZm9ybWF0U3RhY2sgPSBmdW5jdGlvbihzdGFjaywgZXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhY2sgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGVycm9yLm5hbWUgKyBcIi4gXCIgKyBlcnJvci5tZXNzYWdlICsgXCJcXG5cIiArIHN0YWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVycm9yLm5hbWUgIT09IHZvaWQgMCAmJlxuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5uYW1lICsgXCIuIFwiICsgZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXROb25FcnJvcihlcnJvcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNhcHR1cmVTdGFja1RyYWNlKG8pIHtcbiAgICAgICAgICAgIHZhciBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgICAgICAgICAgdmFyIHNwbGl0ID0gc3RhY2suc3BsaXQocmxpbmUpO1xuICAgICAgICAgICAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcbiAgICAgICAgICAgIHZhciByZXQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgICAgICAgICAgICAgIHJldCArPSBzcGxpdFtpXTtcbiAgICAgICAgICAgICAgICByZXQgKz0gXCJAXCI7XG4gICAgICAgICAgICAgICAgcmV0ICs9IHNwbGl0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICByZXQgKz0gXCJcXG5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8uc3RhY2sgPSByZXQ7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybWF0U3RhY2sgPSBmdW5jdGlvbihzdGFjaywgZXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhY2sgPT09IFwic3RyaW5nXCIpIHJldHVybiBzdGFjaztcblxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgZXJyb3IgPT09IFwib2JqZWN0XCIgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXJyb3IgPT09IFwiZnVuY3Rpb25cIikgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5uYW1lICE9PSB2b2lkIDAgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubmFtZSArIFwiLiBcIiArIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0Tm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0pKCk7XG5cbnJldHVybiBDYXB0dXJlZFRyYWNlO1xufTtcblxufSkoKSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5FWFRfRklMVEVSKSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpO1xudmFyIHRyeUNhdGNoMSA9IHV0aWwudHJ5Q2F0Y2gxO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciBrZXlzID0gcmVxdWlyZShcIi4vZXM1LmpzXCIpLmtleXM7XG52YXIgVHlwZUVycm9yID0gZXJyb3JzLlR5cGVFcnJvcjtcblxuZnVuY3Rpb24gQ2F0Y2hGaWx0ZXIoaW5zdGFuY2VzLCBjYWxsYmFjaywgcHJvbWlzZSkge1xuICAgIHRoaXMuX2luc3RhbmNlcyA9IGluc3RhbmNlcztcbiAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuX3Byb21pc2UgPSBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBDYXRjaEZpbHRlciRfc2FmZVByZWRpY2F0ZShwcmVkaWNhdGUsIGUpIHtcbiAgICB2YXIgc2FmZU9iamVjdCA9IHt9O1xuICAgIHZhciByZXRmaWx0ZXIgPSB0cnlDYXRjaDEocHJlZGljYXRlLCBzYWZlT2JqZWN0LCBlKTtcblxuICAgIGlmIChyZXRmaWx0ZXIgPT09IGVycm9yT2JqKSByZXR1cm4gcmV0ZmlsdGVyO1xuXG4gICAgdmFyIHNhZmVLZXlzID0ga2V5cyhzYWZlT2JqZWN0KTtcbiAgICBpZiAoc2FmZUtleXMubGVuZ3RoKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgXCJDYXRjaCBmaWx0ZXIgbXVzdCBpbmhlcml0IGZyb20gRXJyb3IgXCJcbiAgICAgICAgICArIFwib3IgYmUgYSBzaW1wbGUgcHJlZGljYXRlIGZ1bmN0aW9uXCIpO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxuICAgIHJldHVybiByZXRmaWx0ZXI7XG59XG5cbkNhdGNoRmlsdGVyLnByb3RvdHlwZS5kb0ZpbHRlciA9IGZ1bmN0aW9uIENhdGNoRmlsdGVyJF9kb0ZpbHRlcihlKSB7XG4gICAgdmFyIGNiID0gdGhpcy5fY2FsbGJhY2s7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlO1xuICAgIHZhciBib3VuZFRvID0gcHJvbWlzZS5fYm91bmRUbztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5faW5zdGFuY2VzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5faW5zdGFuY2VzW2ldO1xuICAgICAgICB2YXIgaXRlbUlzRXJyb3JUeXBlID0gaXRlbSA9PT0gRXJyb3IgfHxcbiAgICAgICAgICAgIChpdGVtICE9IG51bGwgJiYgaXRlbS5wcm90b3R5cGUgaW5zdGFuY2VvZiBFcnJvcik7XG5cbiAgICAgICAgaWYgKGl0ZW1Jc0Vycm9yVHlwZSAmJiBlIGluc3RhbmNlb2YgaXRlbSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IHRyeUNhdGNoMShjYiwgYm91bmRUbywgZSk7XG4gICAgICAgICAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgICAgIE5FWFRfRklMVEVSLmUgPSByZXQuZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTkVYVF9GSUxURVI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSBcImZ1bmN0aW9uXCIgJiYgIWl0ZW1Jc0Vycm9yVHlwZSkge1xuICAgICAgICAgICAgdmFyIHNob3VsZEhhbmRsZSA9IENhdGNoRmlsdGVyJF9zYWZlUHJlZGljYXRlKGl0ZW0sIGUpO1xuICAgICAgICAgICAgaWYgKHNob3VsZEhhbmRsZSA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJhY2UgPSBlcnJvcnMuY2FuQXR0YWNoKGVycm9yT2JqLmUpXG4gICAgICAgICAgICAgICAgICAgID8gZXJyb3JPYmouZVxuICAgICAgICAgICAgICAgICAgICA6IG5ldyBFcnJvcihlcnJvck9iai5lICsgXCJcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh0cmFjZSk7XG4gICAgICAgICAgICAgICAgZSA9IGVycm9yT2JqLmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSB0cnlDYXRjaDEoY2IsIGJvdW5kVG8sIGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIE5FWFRfRklMVEVSLmUgPSByZXQuZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5FWFRfRklMVEVSO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIE5FWFRfRklMVEVSLmUgPSBlO1xuICAgIHJldHVybiBORVhUX0ZJTFRFUjtcbn07XG5cbnJldHVybiBDYXRjaEZpbHRlcjtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBORVhUX0ZJTFRFUiwgY2FzdCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIHdyYXBzUHJpbWl0aXZlUmVjZWl2ZXIgPSB1dGlsLndyYXBzUHJpbWl0aXZlUmVjZWl2ZXI7XG52YXIgaXNQcmltaXRpdmUgPSB1dGlsLmlzUHJpbWl0aXZlO1xudmFyIHRocm93ZXIgPSB1dGlsLnRocm93ZXI7XG5cbmZ1bmN0aW9uIHJldHVyblRoaXMoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiB0aHJvd1RoaXMoKSB7XG4gICAgdGhyb3cgdGhpcztcbn1cbmZ1bmN0aW9uIHJldHVybiQocikge1xuICAgIHJldHVybiBmdW5jdGlvbiBQcm9taXNlJF9yZXR1cm5lcigpIHtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRocm93JChyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFByb21pc2UkX3Rocm93ZXIoKSB7XG4gICAgICAgIHRocm93IHI7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHByb21pc2VkRmluYWxseShyZXQsIHJlYXNvbk9yVmFsdWUsIGlzRnVsZmlsbGVkKSB7XG4gICAgdmFyIHRoZW47XG4gICAgaWYgKHdyYXBzUHJpbWl0aXZlUmVjZWl2ZXIgJiYgaXNQcmltaXRpdmUocmVhc29uT3JWYWx1ZSkpIHtcbiAgICAgICAgdGhlbiA9IGlzRnVsZmlsbGVkID8gcmV0dXJuJChyZWFzb25PclZhbHVlKSA6IHRocm93JChyZWFzb25PclZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGVuID0gaXNGdWxmaWxsZWQgPyByZXR1cm5UaGlzIDogdGhyb3dUaGlzO1xuICAgIH1cbiAgICByZXR1cm4gcmV0Ll90aGVuKHRoZW4sIHRocm93ZXIsIHZvaWQgMCwgcmVhc29uT3JWYWx1ZSwgdm9pZCAwKTtcbn1cblxuZnVuY3Rpb24gZmluYWxseUhhbmRsZXIocmVhc29uT3JWYWx1ZSkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgIHZhciBoYW5kbGVyID0gdGhpcy5oYW5kbGVyO1xuXG4gICAgdmFyIHJldCA9IHByb21pc2UuX2lzQm91bmQoKVxuICAgICAgICAgICAgICAgICAgICA/IGhhbmRsZXIuY2FsbChwcm9taXNlLl9ib3VuZFRvKVxuICAgICAgICAgICAgICAgICAgICA6IGhhbmRsZXIoKTtcblxuICAgIGlmIChyZXQgIT09IHZvaWQgMCkge1xuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gY2FzdChyZXQsIHZvaWQgMCk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZWRGaW5hbGx5KG1heWJlUHJvbWlzZSwgcmVhc29uT3JWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UuaXNGdWxmaWxsZWQoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvbWlzZS5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgTkVYVF9GSUxURVIuZSA9IHJlYXNvbk9yVmFsdWU7XG4gICAgICAgIHJldHVybiBORVhUX0ZJTFRFUjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVhc29uT3JWYWx1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRhcEhhbmRsZXIodmFsdWUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcbiAgICB2YXIgaGFuZGxlciA9IHRoaXMuaGFuZGxlcjtcblxuICAgIHZhciByZXQgPSBwcm9taXNlLl9pc0JvdW5kKClcbiAgICAgICAgICAgICAgICAgICAgPyBoYW5kbGVyLmNhbGwocHJvbWlzZS5fYm91bmRUbywgdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIDogaGFuZGxlcih2YWx1ZSk7XG5cbiAgICBpZiAocmV0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QocmV0LCB2b2lkIDApO1xuICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VkRmluYWxseShtYXliZVByb21pc2UsIHZhbHVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cblByb21pc2UucHJvdG90eXBlLl9wYXNzVGhyb3VnaEhhbmRsZXIgPVxuZnVuY3Rpb24gUHJvbWlzZSRfcGFzc1Rocm91Z2hIYW5kbGVyKGhhbmRsZXIsIGlzRmluYWxseSkge1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdGhpcy50aGVuKCk7XG5cbiAgICB2YXIgcHJvbWlzZUFuZEhhbmRsZXIgPSB7XG4gICAgICAgIHByb21pc2U6IHRoaXMsXG4gICAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX3RoZW4oXG4gICAgICAgICAgICBpc0ZpbmFsbHkgPyBmaW5hbGx5SGFuZGxlciA6IHRhcEhhbmRsZXIsXG4gICAgICAgICAgICBpc0ZpbmFsbHkgPyBmaW5hbGx5SGFuZGxlciA6IHZvaWQgMCwgdm9pZCAwLFxuICAgICAgICAgICAgcHJvbWlzZUFuZEhhbmRsZXIsIHZvaWQgMCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5sYXN0bHkgPVxuUHJvbWlzZS5wcm90b3R5cGVbXCJmaW5hbGx5XCJdID0gZnVuY3Rpb24gUHJvbWlzZSRmaW5hbGx5KGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc1Rocm91Z2hIYW5kbGVyKGhhbmRsZXIsIHRydWUpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGFwID0gZnVuY3Rpb24gUHJvbWlzZSR0YXAoaGFuZGxlcikge1xuICAgIHJldHVybiB0aGlzLl9wYXNzVGhyb3VnaEhhbmRsZXIoaGFuZGxlciwgZmFsc2UpO1xufTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIG1heWJlV3JhcEFzRXJyb3IgPSB1dGlsLm1heWJlV3JhcEFzRXJyb3I7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpO1xudmFyIFRpbWVvdXRFcnJvciA9IGVycm9ycy5UaW1lb3V0RXJyb3I7XG52YXIgT3BlcmF0aW9uYWxFcnJvciA9IGVycm9ycy5PcGVyYXRpb25hbEVycm9yO1xudmFyIGFzeW5jID0gcmVxdWlyZShcIi4vYXN5bmMuanNcIik7XG52YXIgaGF2ZUdldHRlcnMgPSB1dGlsLmhhdmVHZXR0ZXJzO1xudmFyIGVzNSA9IHJlcXVpcmUoXCIuL2VzNS5qc1wiKTtcblxuZnVuY3Rpb24gaXNVbnR5cGVkRXJyb3Iob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEVycm9yICYmXG4gICAgICAgIGVzNS5nZXRQcm90b3R5cGVPZihvYmopID09PSBFcnJvci5wcm90b3R5cGU7XG59XG5cbmZ1bmN0aW9uIHdyYXBBc09wZXJhdGlvbmFsRXJyb3Iob2JqKSB7XG4gICAgdmFyIHJldDtcbiAgICBpZiAoaXNVbnR5cGVkRXJyb3Iob2JqKSkge1xuICAgICAgICByZXQgPSBuZXcgT3BlcmF0aW9uYWxFcnJvcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IG9iajtcbiAgICB9XG4gICAgZXJyb3JzLm1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbihyZXQpO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlKSB7XG4gICAgZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJF9jYWxsYmFjayhlcnIsIHZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9taXNlID09PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgdmFyIHdyYXBwZWQgPSB3cmFwQXNPcGVyYXRpb25hbEVycm9yKG1heWJlV3JhcEFzRXJyb3IoZXJyKSk7XG4gICAgICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHdyYXBwZWQpO1xuICAgICAgICAgICAgcHJvbWlzZS5fcmVqZWN0KHdyYXBwZWQpO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICB2YXIgJF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoO3ZhciBhcmdzID0gbmV3IEFycmF5KCRfbGVuIC0gMSk7IGZvcih2YXIgJF9pID0gMTsgJF9pIDwgJF9sZW47ICsrJF9pKSB7YXJnc1skX2kgLSAxXSA9IGFyZ3VtZW50c1skX2ldO31cbiAgICAgICAgICAgIHByb21pc2UuX2Z1bGZpbGwoYXJncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLl9mdWxmaWxsKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZVJlc29sdmVyJF9jYWxsYmFjaztcbn1cblxuXG52YXIgUHJvbWlzZVJlc29sdmVyO1xuaWYgKCFoYXZlR2V0dGVycykge1xuICAgIFByb21pc2VSZXNvbHZlciA9IGZ1bmN0aW9uIFByb21pc2VSZXNvbHZlcihwcm9taXNlKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMuYXNDYWxsYmFjayA9IG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IHRoaXMuYXNDYWxsYmFjaztcbiAgICB9O1xufVxuZWxzZSB7XG4gICAgUHJvbWlzZVJlc29sdmVyID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyKHByb21pc2UpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB9O1xufVxuaWYgKGhhdmVHZXR0ZXJzKSB7XG4gICAgdmFyIHByb3AgPSB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZWJhY2tGb3JQcm9taXNlKHRoaXMucHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGVzNS5kZWZpbmVQcm9wZXJ0eShQcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLCBcImFzQ2FsbGJhY2tcIiwgcHJvcCk7XG4gICAgZXM1LmRlZmluZVByb3BlcnR5KFByb21pc2VSZXNvbHZlci5wcm90b3R5cGUsIFwiY2FsbGJhY2tcIiwgcHJvcCk7XG59XG5cblByb21pc2VSZXNvbHZlci5fbm9kZWJhY2tGb3JQcm9taXNlID0gbm9kZWJhY2tGb3JQcm9taXNlO1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgUHJvbWlzZVJlc29sdmVyXVwiO1xufTtcblxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS5yZXNvbHZlID1cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUuZnVsZmlsbCA9IGZ1bmN0aW9uIFByb21pc2VSZXNvbHZlciRyZXNvbHZlKHZhbHVlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VSZXNvbHZlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgaW52b2NhdGlvbiwgcmVzb2x2ZXIgcmVzb2x2ZS9yZWplY3QgbXVzdCBiZSBjYWxsZWQgd2l0aGluIGEgcmVzb2x2ZXIgY29udGV4dC4gQ29uc2lkZXIgdXNpbmcgdGhlIHByb21pc2UgY29uc3RydWN0b3IgaW5zdGVhZC5cIik7XG4gICAgfVxuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG4gICAgaWYgKHByb21pc2UuX3RyeUZvbGxvdyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhc3luYy5pbnZva2UocHJvbWlzZS5fZnVsZmlsbCwgcHJvbWlzZSwgdmFsdWUpO1xufTtcblxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS5yZWplY3QgPSBmdW5jdGlvbiBQcm9taXNlUmVzb2x2ZXIkcmVqZWN0KHJlYXNvbikge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlUmVzb2x2ZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGludm9jYXRpb24sIHJlc29sdmVyIHJlc29sdmUvcmVqZWN0IG11c3QgYmUgY2FsbGVkIHdpdGhpbiBhIHJlc29sdmVyIGNvbnRleHQuIENvbnNpZGVyIHVzaW5nIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yIGluc3RlYWQuXCIpO1xuICAgIH1cblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgIGVycm9ycy5tYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb24ocmVhc29uKTtcbiAgICB2YXIgdHJhY2UgPSBlcnJvcnMuY2FuQXR0YWNoKHJlYXNvbikgPyByZWFzb24gOiBuZXcgRXJyb3IocmVhc29uICsgXCJcIik7XG4gICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh0cmFjZSk7XG4gICAgYXN5bmMuaW52b2tlKHByb21pc2UuX3JlamVjdCwgcHJvbWlzZSwgcmVhc29uKTtcbiAgICBpZiAodHJhY2UgIT09IHJlYXNvbikge1xuICAgICAgICBhc3luYy5pbnZva2UodGhpcy5fc2V0Q2FycmllZFN0YWNrVHJhY2UsIHRoaXMsIHRyYWNlKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnByb2dyZXNzID1cbmZ1bmN0aW9uIFByb21pc2VSZXNvbHZlciRwcm9ncmVzcyh2YWx1ZSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlUmVzb2x2ZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGludm9jYXRpb24sIHJlc29sdmVyIHJlc29sdmUvcmVqZWN0IG11c3QgYmUgY2FsbGVkIHdpdGhpbiBhIHJlc29sdmVyIGNvbnRleHQuIENvbnNpZGVyIHVzaW5nIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yIGluc3RlYWQuXCIpO1xuICAgIH1cbiAgICBhc3luYy5pbnZva2UodGhpcy5wcm9taXNlLl9wcm9ncmVzcywgdGhpcy5wcm9taXNlLCB2YWx1ZSk7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uIFByb21pc2VSZXNvbHZlciRjYW5jZWwoKSB7XG4gICAgYXN5bmMuaW52b2tlKHRoaXMucHJvbWlzZS5jYW5jZWwsIHRoaXMucHJvbWlzZSwgdm9pZCAwKTtcbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uIFByb21pc2VSZXNvbHZlciR0aW1lb3V0KCkge1xuICAgIHRoaXMucmVqZWN0KG5ldyBUaW1lb3V0RXJyb3IoXCJ0aW1lb3V0XCIpKTtcbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUuaXNSZXNvbHZlZCA9IGZ1bmN0aW9uIFByb21pc2VSZXNvbHZlciRpc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb21pc2UuaXNSZXNvbHZlZCgpO1xufTtcblxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiBQcm9taXNlUmVzb2x2ZXIkdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnByb21pc2UudG9KU09OKCk7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLl9zZXRDYXJyaWVkU3RhY2tUcmFjZSA9XG5mdW5jdGlvbiBQcm9taXNlUmVzb2x2ZXIkX3NldENhcnJpZWRTdGFja1RyYWNlKHRyYWNlKSB7XG4gICAgaWYgKHRoaXMucHJvbWlzZS5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlLl9zZXRDYXJyaWVkU3RhY2tUcmFjZSh0cmFjZSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlUmVzb2x2ZXI7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGlzUHJpbWl0aXZlID0gdXRpbC5pc1ByaW1pdGl2ZTtcbnZhciB3cmFwc1ByaW1pdGl2ZVJlY2VpdmVyID0gdXRpbC53cmFwc1ByaW1pdGl2ZVJlY2VpdmVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UpIHtcbnZhciByZXR1cm5lciA9IGZ1bmN0aW9uIFByb21pc2UkX3JldHVybmVyKCkge1xuICAgIHJldHVybiB0aGlzO1xufTtcbnZhciB0aHJvd2VyID0gZnVuY3Rpb24gUHJvbWlzZSRfdGhyb3dlcigpIHtcbiAgICB0aHJvdyB0aGlzO1xufTtcblxudmFyIHdyYXBwZXIgPSBmdW5jdGlvbiBQcm9taXNlJF93cmFwcGVyKHZhbHVlLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uID09PSAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBQcm9taXNlJF90aHJvd2VyKCkge1xuICAgICAgICAgICAgdGhyb3cgdmFsdWU7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIFByb21pc2UkX3JldHVybmVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5cblxuUHJvbWlzZS5wcm90b3R5cGVbXCJyZXR1cm5cIl0gPVxuUHJvbWlzZS5wcm90b3R5cGUudGhlblJldHVybiA9XG5mdW5jdGlvbiBQcm9taXNlJHRoZW5SZXR1cm4odmFsdWUpIHtcbiAgICBpZiAod3JhcHNQcmltaXRpdmVSZWNlaXZlciAmJiBpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RoZW4oXG4gICAgICAgICAgICB3cmFwcGVyKHZhbHVlLCAyKSxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIHZvaWQgMFxuICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90aGVuKHJldHVybmVyLCB2b2lkIDAsIHZvaWQgMCwgdmFsdWUsIHZvaWQgMCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZVtcInRocm93XCJdID1cblByb21pc2UucHJvdG90eXBlLnRoZW5UaHJvdyA9XG5mdW5jdGlvbiBQcm9taXNlJHRoZW5UaHJvdyhyZWFzb24pIHtcbiAgICBpZiAod3JhcHNQcmltaXRpdmVSZWNlaXZlciAmJiBpc1ByaW1pdGl2ZShyZWFzb24pKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aGVuKFxuICAgICAgICAgICAgd3JhcHBlcihyZWFzb24sIDEpLFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgdm9pZCAwXG4gICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4odGhyb3dlciwgdm9pZCAwLCB2b2lkIDAsIHJlYXNvbiwgdm9pZCAwKTtcbn07XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbmZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgY2FzdCwgSU5URVJOQUwpIHtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBjYW5FdmFsdWF0ZSA9IHV0aWwuY2FuRXZhbHVhdGU7XG52YXIgdHJ5Q2F0Y2gxID0gdXRpbC50cnlDYXRjaDE7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuXG5cbmlmIChjYW5FdmFsdWF0ZSkge1xuICAgIHZhciB0aGVuQ2FsbGJhY2sgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJ2YWx1ZVwiLCBcImhvbGRlclwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGhvbGRlci5wSW5kZXggPSB2YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGhvbGRlci5jaGVja0Z1bGZpbGxtZW50KHRoaXMpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiLnJlcGxhY2UoL0luZGV4L2csIGkpKTtcbiAgICB9O1xuXG4gICAgdmFyIGNhbGxlciA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gY291bnQ7ICsraSkgdmFsdWVzLnB1c2goXCJob2xkZXIucFwiICsgaSk7XG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJob2xkZXJcIiwgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAndXNlIHN0cmljdCc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBob2xkZXIuZm47ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sodmFsdWVzKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIi5yZXBsYWNlKC92YWx1ZXMvZywgdmFsdWVzLmpvaW4oXCIsIFwiKSkpO1xuICAgIH07XG4gICAgdmFyIHRoZW5DYWxsYmFja3MgPSBbXTtcbiAgICB2YXIgY2FsbGVycyA9IFt2b2lkIDBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDU7ICsraSkge1xuICAgICAgICB0aGVuQ2FsbGJhY2tzLnB1c2godGhlbkNhbGxiYWNrKGkpKTtcbiAgICAgICAgY2FsbGVycy5wdXNoKGNhbGxlcihpKSk7XG4gICAgfVxuXG4gICAgdmFyIEhvbGRlciA9IGZ1bmN0aW9uKHRvdGFsLCBmbikge1xuICAgICAgICB0aGlzLnAxID0gdGhpcy5wMiA9IHRoaXMucDMgPSB0aGlzLnA0ID0gdGhpcy5wNSA9IG51bGw7XG4gICAgICAgIHRoaXMuZm4gPSBmbjtcbiAgICAgICAgdGhpcy50b3RhbCA9IHRvdGFsO1xuICAgICAgICB0aGlzLm5vdyA9IDA7XG4gICAgfTtcblxuICAgIEhvbGRlci5wcm90b3R5cGUuY2FsbGVycyA9IGNhbGxlcnM7XG4gICAgSG9sZGVyLnByb3RvdHlwZS5jaGVja0Z1bGZpbGxtZW50ID0gZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICB2YXIgbm93ID0gdGhpcy5ub3c7XG4gICAgICAgIG5vdysrO1xuICAgICAgICB2YXIgdG90YWwgPSB0aGlzLnRvdGFsO1xuICAgICAgICBpZiAobm93ID49IHRvdGFsKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IHRoaXMuY2FsbGVyc1t0b3RhbF07XG4gICAgICAgICAgICB2YXIgcmV0ID0gdHJ5Q2F0Y2gxKGhhbmRsZXIsIHZvaWQgMCwgdGhpcyk7XG4gICAgICAgICAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgICAgIHByb21pc2UuX3JlamVjdFVuY2hlY2tlZChyZXQuZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFwcm9taXNlLl90cnlGb2xsb3cocmV0KSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UuX2Z1bGZpbGxVbmNoZWNrZWQocmV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm93ID0gbm93O1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5cblxuUHJvbWlzZS5qb2luID0gZnVuY3Rpb24gUHJvbWlzZSRKb2luKCkge1xuICAgIHZhciBsYXN0ID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgdmFyIGZuO1xuICAgIGlmIChsYXN0ID4gMCAmJiB0eXBlb2YgYXJndW1lbnRzW2xhc3RdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZm4gPSBhcmd1bWVudHNbbGFzdF07XG4gICAgICAgIGlmIChsYXN0IDwgNiAmJiBjYW5FdmFsdWF0ZSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgICAgIHJldC5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICAgICAgICAgIHZhciBob2xkZXIgPSBuZXcgSG9sZGVyKGxhc3QsIGZuKTtcbiAgICAgICAgICAgIHZhciByZWplY3QgPSByZXQuX3JlamVjdDtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSB0aGVuQ2FsbGJhY2tzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0OyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gY2FzdChhcmd1bWVudHNbaV0sIHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZS5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl90aGVuKGNhbGxiYWNrc1tpXSwgcmVqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCwgcmV0LCBob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0uY2FsbChyZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3NldHRsZWRWYWx1ZSwgaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5fcmVqZWN0KG1heWJlUHJvbWlzZS5fc2V0dGxlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldLmNhbGwocmV0LCBtYXliZVByb21pc2UsIGhvbGRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgJF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoO3ZhciBhcmdzID0gbmV3IEFycmF5KCRfbGVuKTsgZm9yKHZhciAkX2kgPSAwOyAkX2kgPCAkX2xlbjsgKyskX2kpIHthcmdzWyRfaV0gPSBhcmd1bWVudHNbJF9pXTt9XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlQXJyYXkoYXJncykucHJvbWlzZSgpO1xuICAgIHJldHVybiBmbiAhPT0gdm9pZCAwID8gcmV0LnNwcmVhZChmbikgOiByZXQ7XG59O1xuXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwsIGNhc3QpIHtcbnZhciBhcGlSZWplY3Rpb24gPSByZXF1aXJlKFwiLi9lcnJvcnNfYXBpX3JlamVjdGlvbi5qc1wiKShQcm9taXNlKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKS5pc0FycmF5O1xuXG52YXIgcmFjZUxhdGVyID0gZnVuY3Rpb24gUHJvbWlzZSRfcmFjZUxhdGVyKHByb21pc2UpIHtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlJF9SYWNlKGFycmF5LCBwcm9taXNlKTtcbiAgICB9KTtcbn07XG5cbnZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIFByb21pc2UkX1JhY2UocHJvbWlzZXMsIHBhcmVudCkge1xuICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHByb21pc2VzLCB2b2lkIDApO1xuXG4gICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHJhY2VMYXRlcihtYXliZVByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoIWlzQXJyYXkocHJvbWlzZXMpKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJleHBlY3RpbmcgYW4gYXJyYXksIGEgcHJvbWlzZSBvciBhIHRoZW5hYmxlXCIpO1xuICAgIH1cblxuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgaWYgKHBhcmVudCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldC5fcHJvcGFnYXRlRnJvbShwYXJlbnQsIDcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldC5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICB9XG4gICAgdmFyIGZ1bGZpbGwgPSByZXQuX2Z1bGZpbGw7XG4gICAgdmFyIHJlamVjdCA9IHJldC5fcmVqZWN0O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwcm9taXNlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICB2YXIgdmFsID0gcHJvbWlzZXNbaV07XG5cbiAgICAgICAgaWYgKHZhbCA9PT0gdm9pZCAwICYmICEoaGFzT3duLmNhbGwocHJvbWlzZXMsIGkpKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBQcm9taXNlLmNhc3QodmFsKS5fdGhlbihmdWxmaWxsLCByZWplY3QsIHZvaWQgMCwgcmV0LCBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gUHJvbWlzZSRSYWNlKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIFByb21pc2UkX1JhY2UocHJvbWlzZXMsIHZvaWQgMCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5yYWNlID0gZnVuY3Rpb24gUHJvbWlzZSRyYWNlKCkge1xuICAgIHJldHVybiBQcm9taXNlJF9SYWNlKHRoaXMsIHZvaWQgMCk7XG59O1xuXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBjciA9IE9iamVjdC5jcmVhdGU7XG5pZiAoY3IpIHtcbiAgICB2YXIgY2FsbGVyQ2FjaGUgPSBjcihudWxsKTtcbiAgICB2YXIgZ2V0dGVyQ2FjaGUgPSBjcihudWxsKTtcbiAgICBjYWxsZXJDYWNoZVtcIiBzaXplXCJdID0gZ2V0dGVyQ2FjaGVbXCIgc2l6ZVwiXSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGNhbkV2YWx1YXRlID0gdXRpbC5jYW5FdmFsdWF0ZTtcbnZhciBpc0lkZW50aWZpZXIgPSB1dGlsLmlzSWRlbnRpZmllcjtcblxuZnVuY3Rpb24gbWFrZU1ldGhvZENhbGxlciAobWV0aG9kTmFtZSkge1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJvYmpcIiwgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAndXNlIHN0cmljdCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICB2YXIgbGVuID0gdGhpcy5sZW5ndGg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBzd2l0Y2gobGVuKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gb2JqLm1ldGhvZE5hbWUodGhpc1swXSk7ICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gb2JqLm1ldGhvZE5hbWUodGhpc1swXSwgdGhpc1sxXSk7ICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gb2JqLm1ldGhvZE5hbWUodGhpc1swXSwgdGhpc1sxXSwgdGhpc1syXSk7ICAgICAgICBcXG5cXFxuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gb2JqLm1ldGhvZE5hbWUoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIG9iai5tZXRob2ROYW1lLmFwcGx5KG9iaiwgdGhpcyk7ICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBcIi5yZXBsYWNlKC9tZXRob2ROYW1lL2csIG1ldGhvZE5hbWUpKTtcbn1cblxuZnVuY3Rpb24gbWFrZUdldHRlciAocHJvcGVydHlOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcIm9ialwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHJldHVybiBvYmoucHJvcGVydHlOYW1lOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIFwiLnJlcGxhY2UoXCJwcm9wZXJ0eU5hbWVcIiwgcHJvcGVydHlOYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBpbGVkKG5hbWUsIGNvbXBpbGVyLCBjYWNoZSkge1xuICAgIHZhciByZXQgPSBjYWNoZVtuYW1lXTtcbiAgICBpZiAodHlwZW9mIHJldCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGlmICghaXNJZGVudGlmaWVyKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXQgPSBjb21waWxlcihuYW1lKTtcbiAgICAgICAgY2FjaGVbbmFtZV0gPSByZXQ7XG4gICAgICAgIGNhY2hlW1wiIHNpemVcIl0rKztcbiAgICAgICAgaWYgKGNhY2hlW1wiIHNpemVcIl0gPiA1MTIpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY2FjaGUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkgZGVsZXRlIGNhY2hlW2tleXNbaV1dO1xuICAgICAgICAgICAgY2FjaGVbXCIgc2l6ZVwiXSA9IGtleXMubGVuZ3RoIC0gMjU2O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldE1ldGhvZENhbGxlcihuYW1lKSB7XG4gICAgcmV0dXJuIGdldENvbXBpbGVkKG5hbWUsIG1ha2VNZXRob2RDYWxsZXIsIGNhbGxlckNhY2hlKTtcbn1cblxuZnVuY3Rpb24gZ2V0R2V0dGVyKG5hbWUpIHtcbiAgICByZXR1cm4gZ2V0Q29tcGlsZWQobmFtZSwgbWFrZUdldHRlciwgZ2V0dGVyQ2FjaGUpO1xufVxuXG5mdW5jdGlvbiBjYWxsZXIob2JqKSB7XG4gICAgcmV0dXJuIG9ialt0aGlzLnBvcCgpXS5hcHBseShvYmosIHRoaXMpO1xufVxuUHJvbWlzZS5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIFByb21pc2UkY2FsbChtZXRob2ROYW1lKSB7XG4gICAgdmFyICRfbGVuID0gYXJndW1lbnRzLmxlbmd0aDt2YXIgYXJncyA9IG5ldyBBcnJheSgkX2xlbiAtIDEpOyBmb3IodmFyICRfaSA9IDE7ICRfaSA8ICRfbGVuOyArKyRfaSkge2FyZ3NbJF9pIC0gMV0gPSBhcmd1bWVudHNbJF9pXTt9XG4gICAgaWYgKGNhbkV2YWx1YXRlKSB7XG4gICAgICAgIHZhciBtYXliZUNhbGxlciA9IGdldE1ldGhvZENhbGxlcihtZXRob2ROYW1lKTtcbiAgICAgICAgaWYgKG1heWJlQ2FsbGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGhlbihtYXliZUNhbGxlciwgdm9pZCAwLCB2b2lkIDAsIGFyZ3MsIHZvaWQgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXJncy5wdXNoKG1ldGhvZE5hbWUpO1xuICAgIHJldHVybiB0aGlzLl90aGVuKGNhbGxlciwgdm9pZCAwLCB2b2lkIDAsIGFyZ3MsIHZvaWQgMCk7XG59O1xuXG5mdW5jdGlvbiBuYW1lZEdldHRlcihvYmopIHtcbiAgICByZXR1cm4gb2JqW3RoaXNdO1xufVxuZnVuY3Rpb24gaW5kZXhlZEdldHRlcihvYmopIHtcbiAgICByZXR1cm4gb2JqW3RoaXNdO1xufVxuUHJvbWlzZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gUHJvbWlzZSRnZXQocHJvcGVydHlOYW1lKSB7XG4gICAgdmFyIGlzSW5kZXggPSAodHlwZW9mIHByb3BlcnR5TmFtZSA9PT0gXCJudW1iZXJcIik7XG4gICAgdmFyIGdldHRlcjtcbiAgICBpZiAoIWlzSW5kZXgpIHtcbiAgICAgICAgaWYgKGNhbkV2YWx1YXRlKSB7XG4gICAgICAgICAgICB2YXIgbWF5YmVHZXR0ZXIgPSBnZXRHZXR0ZXIocHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgIGdldHRlciA9IG1heWJlR2V0dGVyICE9PSBudWxsID8gbWF5YmVHZXR0ZXIgOiBuYW1lZEdldHRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldHRlciA9IG5hbWVkR2V0dGVyO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0dGVyID0gaW5kZXhlZEdldHRlcjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4oZ2V0dGVyLCB2b2lkIDAsIHZvaWQgMCwgcHJvcGVydHlOYW1lLCB2b2lkIDApO1xufTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBhcGlSZWplY3Rpb24sIElOVEVSTkFMLCBjYXN0KSB7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpO1xudmFyIFR5cGVFcnJvciA9IGVycm9ycy5UeXBlRXJyb3I7XG52YXIgZGVwcmVjYXRlZCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIikuZGVwcmVjYXRlZDtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgdHJ5Q2F0Y2gxID0gdXRpbC50cnlDYXRjaDE7XG52YXIgeWllbGRIYW5kbGVycyA9IFtdO1xuXG5mdW5jdGlvbiBwcm9taXNlRnJvbVlpZWxkSGFuZGxlcih2YWx1ZSwgeWllbGRIYW5kbGVycykge1xuICAgIHZhciBfZXJyb3JPYmogPSBlcnJvck9iajtcbiAgICB2YXIgX1Byb21pc2UgPSBQcm9taXNlO1xuICAgIHZhciBsZW4gPSB5aWVsZEhhbmRsZXJzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaDEoeWllbGRIYW5kbGVyc1tpXSwgdm9pZCAwLCB2YWx1ZSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IF9lcnJvck9iaikge1xuICAgICAgICAgICAgcmV0dXJuIF9Qcm9taXNlLnJlamVjdChfZXJyb3JPYmouZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QocmVzdWx0LCBwcm9taXNlRnJvbVlpZWxkSGFuZGxlcik7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBfUHJvbWlzZSkgcmV0dXJuIG1heWJlUHJvbWlzZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIFByb21pc2VTcGF3bihnZW5lcmF0b3JGdW5jdGlvbiwgcmVjZWl2ZXIsIHlpZWxkSGFuZGxlcikge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICBwcm9taXNlLl9zZXRUcmFjZSh2b2lkIDApO1xuICAgIHRoaXMuX2dlbmVyYXRvckZ1bmN0aW9uID0gZ2VuZXJhdG9yRnVuY3Rpb247XG4gICAgdGhpcy5fcmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICB0aGlzLl9nZW5lcmF0b3IgPSB2b2lkIDA7XG4gICAgdGhpcy5feWllbGRIYW5kbGVycyA9IHR5cGVvZiB5aWVsZEhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IFt5aWVsZEhhbmRsZXJdLmNvbmNhdCh5aWVsZEhhbmRsZXJzKVxuICAgICAgICA6IHlpZWxkSGFuZGxlcnM7XG59XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2VTcGF3biRwcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fcnVuID0gZnVuY3Rpb24gUHJvbWlzZVNwYXduJF9ydW4oKSB7XG4gICAgdGhpcy5fZ2VuZXJhdG9yID0gdGhpcy5fZ2VuZXJhdG9yRnVuY3Rpb24uY2FsbCh0aGlzLl9yZWNlaXZlcik7XG4gICAgdGhpcy5fcmVjZWl2ZXIgPVxuICAgICAgICB0aGlzLl9nZW5lcmF0b3JGdW5jdGlvbiA9IHZvaWQgMDtcbiAgICB0aGlzLl9uZXh0KHZvaWQgMCk7XG59O1xuXG5Qcm9taXNlU3Bhd24ucHJvdG90eXBlLl9jb250aW51ZSA9IGZ1bmN0aW9uIFByb21pc2VTcGF3biRfY29udGludWUocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgdGhpcy5fZ2VuZXJhdG9yID0gdm9pZCAwO1xuICAgICAgICB2YXIgdHJhY2UgPSBlcnJvcnMuY2FuQXR0YWNoKHJlc3VsdC5lKVxuICAgICAgICAgICAgPyByZXN1bHQuZSA6IG5ldyBFcnJvcihyZXN1bHQuZSArIFwiXCIpO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZS5fcmVqZWN0KHJlc3VsdC5lLCB0cmFjZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgaWYgKHJlc3VsdC5kb25lID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX2dlbmVyYXRvciA9IHZvaWQgMDtcbiAgICAgICAgaWYgKCF0aGlzLl9wcm9taXNlLl90cnlGb2xsb3codmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9taXNlLl9mdWxmaWxsKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHZhbHVlLCB2b2lkIDApO1xuICAgICAgICBpZiAoIShtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgICAgICAgbWF5YmVQcm9taXNlID1cbiAgICAgICAgICAgICAgICBwcm9taXNlRnJvbVlpZWxkSGFuZGxlcihtYXliZVByb21pc2UsIHRoaXMuX3lpZWxkSGFuZGxlcnMpO1xuICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Rocm93KG5ldyBUeXBlRXJyb3IoXCJBIHZhbHVlIHdhcyB5aWVsZGVkIHRoYXQgY291bGQgbm90IGJlIHRyZWF0ZWQgYXMgYSBwcm9taXNlXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWF5YmVQcm9taXNlLl90aGVuKFxuICAgICAgICAgICAgdGhpcy5fbmV4dCxcbiAgICAgICAgICAgIHRoaXMuX3Rocm93LFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICApO1xuICAgIH1cbn07XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUuX3Rocm93ID0gZnVuY3Rpb24gUHJvbWlzZVNwYXduJF90aHJvdyhyZWFzb24pIHtcbiAgICBpZiAoZXJyb3JzLmNhbkF0dGFjaChyZWFzb24pKVxuICAgICAgICB0aGlzLl9wcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHJlYXNvbik7XG4gICAgdGhpcy5fY29udGludWUoXG4gICAgICAgIHRyeUNhdGNoMSh0aGlzLl9nZW5lcmF0b3JbXCJ0aHJvd1wiXSwgdGhpcy5fZ2VuZXJhdG9yLCByZWFzb24pXG4gICApO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uIFByb21pc2VTcGF3biRfbmV4dCh2YWx1ZSkge1xuICAgIHRoaXMuX2NvbnRpbnVlKFxuICAgICAgICB0cnlDYXRjaDEodGhpcy5fZ2VuZXJhdG9yLm5leHQsIHRoaXMuX2dlbmVyYXRvciwgdmFsdWUpXG4gICApO1xufTtcblxuUHJvbWlzZS5jb3JvdXRpbmUgPVxuZnVuY3Rpb24gUHJvbWlzZSRDb3JvdXRpbmUoZ2VuZXJhdG9yRnVuY3Rpb24sIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGdlbmVyYXRvckZ1bmN0aW9uICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImdlbmVyYXRvckZ1bmN0aW9uIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgdmFyIHlpZWxkSGFuZGxlciA9IE9iamVjdChvcHRpb25zKS55aWVsZEhhbmRsZXI7XG4gICAgdmFyIFByb21pc2VTcGF3biQgPSBQcm9taXNlU3Bhd247XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdlbmVyYXRvciA9IGdlbmVyYXRvckZ1bmN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciBzcGF3biA9IG5ldyBQcm9taXNlU3Bhd24kKHZvaWQgMCwgdm9pZCAwLCB5aWVsZEhhbmRsZXIpO1xuICAgICAgICBzcGF3bi5fZ2VuZXJhdG9yID0gZ2VuZXJhdG9yO1xuICAgICAgICBzcGF3bi5fbmV4dCh2b2lkIDApO1xuICAgICAgICByZXR1cm4gc3Bhd24ucHJvbWlzZSgpO1xuICAgIH07XG59O1xuXG5Qcm9taXNlLmNvcm91dGluZS5hZGRZaWVsZEhhbmRsZXIgPSBmdW5jdGlvbihmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB5aWVsZEhhbmRsZXJzLnB1c2goZm4pO1xufTtcblxuUHJvbWlzZS5zcGF3biA9IGZ1bmN0aW9uIFByb21pc2UkU3Bhd24oZ2VuZXJhdG9yRnVuY3Rpb24pIHtcbiAgICBkZXByZWNhdGVkKFwiUHJvbWlzZS5zcGF3biBpcyBkZXByZWNhdGVkLiBVc2UgUHJvbWlzZS5jb3JvdXRpbmUgaW5zdGVhZC5cIik7XG4gICAgaWYgKHR5cGVvZiBnZW5lcmF0b3JGdW5jdGlvbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJnZW5lcmF0b3JGdW5jdGlvbiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIHZhciBzcGF3biA9IG5ldyBQcm9taXNlU3Bhd24oZ2VuZXJhdG9yRnVuY3Rpb24sIHRoaXMpO1xuICAgIHZhciByZXQgPSBzcGF3bi5wcm9taXNlKCk7XG4gICAgc3Bhd24uX3J1bihQcm9taXNlLnNwYXduKTtcbiAgICByZXR1cm4gcmV0O1xufTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBQcm9taXNlQXJyYXksIGFwaVJlamVjdGlvbiwgY2FzdCwgSU5URVJOQUwpIHtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciB0cnlDYXRjaDMgPSB1dGlsLnRyeUNhdGNoMztcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgUEVORElORyA9IHt9O1xudmFyIEVNUFRZX0FSUkFZID0gW107XG5cbmZ1bmN0aW9uIE1hcHBpbmdQcm9taXNlQXJyYXkocHJvbWlzZXMsIGZuLCBsaW1pdCwgX2ZpbHRlcikge1xuICAgIHRoaXMuY29uc3RydWN0b3IkKHByb21pc2VzKTtcbiAgICB0aGlzLl9jYWxsYmFjayA9IGZuO1xuICAgIHRoaXMuX3ByZXNlcnZlZFZhbHVlcyA9IF9maWx0ZXIgPT09IElOVEVSTkFMXG4gICAgICAgID8gbmV3IEFycmF5KHRoaXMubGVuZ3RoKCkpXG4gICAgICAgIDogbnVsbDtcbiAgICB0aGlzLl9saW1pdCA9IGxpbWl0O1xuICAgIHRoaXMuX2luRmxpZ2h0ID0gMDtcbiAgICB0aGlzLl9xdWV1ZSA9IGxpbWl0ID49IDEgPyBbXSA6IEVNUFRZX0FSUkFZO1xuICAgIHRoaXMuX2luaXQkKHZvaWQgMCwgLTIpO1xufVxudXRpbC5pbmhlcml0cyhNYXBwaW5nUHJvbWlzZUFycmF5LCBQcm9taXNlQXJyYXkpO1xuXG5NYXBwaW5nUHJvbWlzZUFycmF5LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIE1hcHBpbmdQcm9taXNlQXJyYXkkX2luaXQoKSB7fTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPVxuZnVuY3Rpb24gTWFwcGluZ1Byb21pc2VBcnJheSRfcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgaW5kZXgpIHtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIGlmICh2YWx1ZXMgPT09IG51bGwpIHJldHVybjtcblxuICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICAgIHZhciBwcmVzZXJ2ZWRWYWx1ZXMgPSB0aGlzLl9wcmVzZXJ2ZWRWYWx1ZXM7XG4gICAgdmFyIGxpbWl0ID0gdGhpcy5fbGltaXQ7XG4gICAgaWYgKHZhbHVlc1tpbmRleF0gPT09IFBFTkRJTkcpIHtcbiAgICAgICAgdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICBpZiAobGltaXQgPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5faW5GbGlnaHQtLTtcbiAgICAgICAgICAgIHRoaXMuX2RyYWluUXVldWUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChsaW1pdCA+PSAxICYmIHRoaXMuX2luRmxpZ2h0ID49IGxpbWl0KSB7XG4gICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlc2VydmVkVmFsdWVzICE9PSBudWxsKSBwcmVzZXJ2ZWRWYWx1ZXNbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2s7XG4gICAgICAgIHZhciByZWNlaXZlciA9IHRoaXMuX3Byb21pc2UuX2JvdW5kVG87XG4gICAgICAgIHZhciByZXQgPSB0cnlDYXRjaDMoY2FsbGJhY2ssIHJlY2VpdmVyLCB2YWx1ZSwgaW5kZXgsIGxlbmd0aCk7XG4gICAgICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSByZXR1cm4gdGhpcy5fcmVqZWN0KHJldC5lKTtcblxuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gY2FzdChyZXQsIHZvaWQgMCk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlLmlzUGVuZGluZygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpbWl0ID49IDEpIHRoaXMuX2luRmxpZ2h0Kys7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2luZGV4XSA9IFBFTkRJTkc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1heWJlUHJvbWlzZS5fcHJveHlQcm9taXNlQXJyYXkodGhpcywgaW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXliZVByb21pc2UuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgIHJldCA9IG1heWJlUHJvbWlzZS52YWx1ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVqZWN0KG1heWJlUHJvbWlzZS5yZWFzb24oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzW2luZGV4XSA9IHJldDtcbiAgICB9XG4gICAgdmFyIHRvdGFsUmVzb2x2ZWQgPSArK3RoaXMuX3RvdGFsUmVzb2x2ZWQ7XG4gICAgaWYgKHRvdGFsUmVzb2x2ZWQgPj0gbGVuZ3RoKSB7XG4gICAgICAgIGlmIChwcmVzZXJ2ZWRWYWx1ZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcih2YWx1ZXMsIHByZXNlcnZlZFZhbHVlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH1cblxuICAgIH1cbn07XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9kcmFpblF1ZXVlID1cbmZ1bmN0aW9uIE1hcHBpbmdQcm9taXNlQXJyYXkkX2RyYWluUXVldWUoKSB7XG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIGxpbWl0ID0gdGhpcy5fbGltaXQ7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCAmJiB0aGlzLl9pbkZsaWdodCA8IGxpbWl0KSB7XG4gICAgICAgIHZhciBpbmRleCA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICB0aGlzLl9wcm9taXNlRnVsZmlsbGVkKHZhbHVlc1tpbmRleF0sIGluZGV4KTtcbiAgICB9XG59O1xuXG5NYXBwaW5nUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZmlsdGVyID1cbmZ1bmN0aW9uIE1hcHBpbmdQcm9taXNlQXJyYXkkX2ZpbHRlcihib29sZWFucywgdmFsdWVzKSB7XG4gICAgdmFyIGxlbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgdmFyIHJldCA9IG5ldyBBcnJheShsZW4pO1xuICAgIHZhciBqID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIGlmIChib29sZWFuc1tpXSkgcmV0W2orK10gPSB2YWx1ZXNbaV07XG4gICAgfVxuICAgIHJldC5sZW5ndGggPSBqO1xuICAgIHRoaXMuX3Jlc29sdmUocmV0KTtcbn07XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLnByZXNlcnZlZFZhbHVlcyA9XG5mdW5jdGlvbiBNYXBwaW5nUHJvbWlzZUFycmF5JHByZXNlcnZlVmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVzZXJ2ZWRWYWx1ZXM7XG59O1xuXG5mdW5jdGlvbiBtYXAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBfZmlsdGVyKSB7XG4gICAgdmFyIGxpbWl0ID0gdHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucyAhPT0gbnVsbFxuICAgICAgICA/IG9wdGlvbnMuY29uY3VycmVuY3lcbiAgICAgICAgOiAwO1xuICAgIGxpbWl0ID0gdHlwZW9mIGxpbWl0ID09PSBcIm51bWJlclwiICYmXG4gICAgICAgIGlzRmluaXRlKGxpbWl0KSAmJiBsaW1pdCA+PSAxID8gbGltaXQgOiAwO1xuICAgIHJldHVybiBuZXcgTWFwcGluZ1Byb21pc2VBcnJheShwcm9taXNlcywgZm4sIGxpbWl0LCBfZmlsdGVyKTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gUHJvbWlzZSRtYXAoZm4sIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBhcGlSZWplY3Rpb24oXCJmbiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG5cbiAgICByZXR1cm4gbWFwKHRoaXMsIGZuLCBvcHRpb25zLCBudWxsKS5wcm9taXNlKCk7XG59O1xuXG5Qcm9taXNlLm1hcCA9IGZ1bmN0aW9uIFByb21pc2UkTWFwKHByb21pc2VzLCBmbiwgb3B0aW9ucywgX2ZpbHRlcikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGFwaVJlamVjdGlvbihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICByZXR1cm4gbWFwKHByb21pc2VzLCBmbiwgb3B0aW9ucywgX2ZpbHRlcikucHJvbWlzZSgpO1xufTtcblxuXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGFzeW5jID0gcmVxdWlyZShcIi4vYXN5bmMuanNcIik7XG52YXIgdHJ5Q2F0Y2gyID0gdXRpbC50cnlDYXRjaDI7XG52YXIgdHJ5Q2F0Y2gxID0gdXRpbC50cnlDYXRjaDE7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuXG5mdW5jdGlvbiB0aHJvd2VyKHIpIHtcbiAgICB0aHJvdyByO1xufVxuXG5mdW5jdGlvbiBQcm9taXNlJF9zcHJlYWRBZGFwdGVyKHZhbCwgcmVjZWl2ZXIpIHtcbiAgICBpZiAoIXV0aWwuaXNBcnJheSh2YWwpKSByZXR1cm4gUHJvbWlzZSRfc3VjY2Vzc0FkYXB0ZXIodmFsLCByZWNlaXZlcik7XG4gICAgdmFyIHJldCA9IHV0aWwudHJ5Q2F0Y2hBcHBseSh0aGlzLCBbbnVsbF0uY29uY2F0KHZhbCksIHJlY2VpdmVyKTtcbiAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICBhc3luYy5pbnZva2VMYXRlcih0aHJvd2VyLCB2b2lkIDAsIHJldC5lKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFByb21pc2UkX3N1Y2Nlc3NBZGFwdGVyKHZhbCwgcmVjZWl2ZXIpIHtcbiAgICB2YXIgbm9kZWJhY2sgPSB0aGlzO1xuICAgIHZhciByZXQgPSB2YWwgPT09IHZvaWQgMFxuICAgICAgICA/IHRyeUNhdGNoMShub2RlYmFjaywgcmVjZWl2ZXIsIG51bGwpXG4gICAgICAgIDogdHJ5Q2F0Y2gyKG5vZGViYWNrLCByZWNlaXZlciwgbnVsbCwgdmFsKTtcbiAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICBhc3luYy5pbnZva2VMYXRlcih0aHJvd2VyLCB2b2lkIDAsIHJldC5lKTtcbiAgICB9XG59XG5mdW5jdGlvbiBQcm9taXNlJF9lcnJvckFkYXB0ZXIocmVhc29uLCByZWNlaXZlcikge1xuICAgIHZhciBub2RlYmFjayA9IHRoaXM7XG4gICAgdmFyIHJldCA9IHRyeUNhdGNoMShub2RlYmFjaywgcmVjZWl2ZXIsIHJlYXNvbik7XG4gICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgYXN5bmMuaW52b2tlTGF0ZXIodGhyb3dlciwgdm9pZCAwLCByZXQuZSk7XG4gICAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5ub2RlaWZ5ID0gZnVuY3Rpb24gUHJvbWlzZSRub2RlaWZ5KG5vZGViYWNrLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBub2RlYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmFyIGFkYXB0ZXIgPSBQcm9taXNlJF9zdWNjZXNzQWRhcHRlcjtcbiAgICAgICAgaWYgKG9wdGlvbnMgIT09IHZvaWQgMCAmJiBPYmplY3Qob3B0aW9ucykuc3ByZWFkKSB7XG4gICAgICAgICAgICBhZGFwdGVyID0gUHJvbWlzZSRfc3ByZWFkQWRhcHRlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90aGVuKFxuICAgICAgICAgICAgYWRhcHRlcixcbiAgICAgICAgICAgIFByb21pc2UkX2Vycm9yQWRhcHRlcixcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIG5vZGViYWNrLFxuICAgICAgICAgICAgdGhpcy5fYm91bmRUb1xuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBhcGlSZWplY3Rpb24sIGNhc3QsIElOVEVSTkFMKSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgdHJ5Q2F0Y2g0ID0gdXRpbC50cnlDYXRjaDQ7XG52YXIgdHJ5Q2F0Y2gzID0gdXRpbC50cnlDYXRjaDM7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuZnVuY3Rpb24gUmVkdWN0aW9uUHJvbWlzZUFycmF5KHByb21pc2VzLCBmbiwgYWNjdW0sIF9lYWNoKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciQocHJvbWlzZXMpO1xuICAgIHRoaXMuX3ByZXNlcnZlZFZhbHVlcyA9IF9lYWNoID09PSBJTlRFUk5BTCA/IFtdIDogbnVsbDtcbiAgICB0aGlzLl96ZXJvdGhJc0FjY3VtID0gKGFjY3VtID09PSB2b2lkIDApO1xuICAgIHRoaXMuX2dvdEFjY3VtID0gZmFsc2U7XG4gICAgdGhpcy5fcmVkdWNpbmdJbmRleCA9ICh0aGlzLl96ZXJvdGhJc0FjY3VtID8gMSA6IDApO1xuICAgIHRoaXMuX3ZhbHVlc1BoYXNlID0gdW5kZWZpbmVkO1xuXG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QoYWNjdW0sIHZvaWQgMCk7XG4gICAgdmFyIHJlamVjdGVkID0gZmFsc2U7XG4gICAgdmFyIGlzUHJvbWlzZSA9IG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2U7XG4gICAgaWYgKGlzUHJvbWlzZSkge1xuICAgICAgICBpZiAobWF5YmVQcm9taXNlLmlzUGVuZGluZygpKSB7XG4gICAgICAgICAgICBtYXliZVByb21pc2UuX3Byb3h5UHJvbWlzZUFycmF5KHRoaXMsIC0xKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXliZVByb21pc2UuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgYWNjdW0gPSBtYXliZVByb21pc2UudmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMuX2dvdEFjY3VtID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0KG1heWJlUHJvbWlzZS5yZWFzb24oKSk7XG4gICAgICAgICAgICByZWplY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCEoaXNQcm9taXNlIHx8IHRoaXMuX3plcm90aElzQWNjdW0pKSB0aGlzLl9nb3RBY2N1bSA9IHRydWU7XG4gICAgdGhpcy5fY2FsbGJhY2sgPSBmbjtcbiAgICB0aGlzLl9hY2N1bSA9IGFjY3VtO1xuICAgIGlmICghcmVqZWN0ZWQpIHRoaXMuX2luaXQkKHZvaWQgMCwgLTUpO1xufVxudXRpbC5pbmhlcml0cyhSZWR1Y3Rpb25Qcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuX2luaXQgPVxuZnVuY3Rpb24gUmVkdWN0aW9uUHJvbWlzZUFycmF5JF9pbml0KCkge307XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Jlc29sdmVFbXB0eUFycmF5ID1cbmZ1bmN0aW9uIFJlZHVjdGlvblByb21pc2VBcnJheSRfcmVzb2x2ZUVtcHR5QXJyYXkoKSB7XG4gICAgaWYgKHRoaXMuX2dvdEFjY3VtIHx8IHRoaXMuX3plcm90aElzQWNjdW0pIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSh0aGlzLl9wcmVzZXJ2ZWRWYWx1ZXMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW10gOiB0aGlzLl9hY2N1bSk7XG4gICAgfVxufTtcblxuUmVkdWN0aW9uUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9XG5mdW5jdGlvbiBSZWR1Y3Rpb25Qcm9taXNlQXJyYXkkX3Byb21pc2VGdWxmaWxsZWQodmFsdWUsIGluZGV4KSB7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICBpZiAodmFsdWVzID09PSBudWxsKSByZXR1cm47XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgdmFyIHByZXNlcnZlZFZhbHVlcyA9IHRoaXMuX3ByZXNlcnZlZFZhbHVlcztcbiAgICB2YXIgaXNFYWNoID0gcHJlc2VydmVkVmFsdWVzICE9PSBudWxsO1xuICAgIHZhciBnb3RBY2N1bSA9IHRoaXMuX2dvdEFjY3VtO1xuICAgIHZhciB2YWx1ZXNQaGFzZSA9IHRoaXMuX3ZhbHVlc1BoYXNlO1xuICAgIHZhciB2YWx1ZXNQaGFzZUluZGV4O1xuICAgIGlmICghdmFsdWVzUGhhc2UpIHtcbiAgICAgICAgdmFsdWVzUGhhc2UgPSB0aGlzLl92YWx1ZXNQaGFzZSA9IEFycmF5KGxlbmd0aCk7XG4gICAgICAgIGZvciAodmFsdWVzUGhhc2VJbmRleD0wOyB2YWx1ZXNQaGFzZUluZGV4PGxlbmd0aDsgKyt2YWx1ZXNQaGFzZUluZGV4KSB7XG4gICAgICAgICAgICB2YWx1ZXNQaGFzZVt2YWx1ZXNQaGFzZUluZGV4XSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFsdWVzUGhhc2VJbmRleCA9IHZhbHVlc1BoYXNlW2luZGV4XTtcblxuICAgIGlmIChpbmRleCA9PT0gMCAmJiB0aGlzLl96ZXJvdGhJc0FjY3VtKSB7XG4gICAgICAgIGlmICghZ290QWNjdW0pIHtcbiAgICAgICAgICAgIHRoaXMuX2FjY3VtID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9nb3RBY2N1bSA9IGdvdEFjY3VtID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZXNQaGFzZVtpbmRleF0gPSAoKHZhbHVlc1BoYXNlSW5kZXggPT09IDApXG4gICAgICAgICAgICA/IDEgOiAyKTtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpZiAoIWdvdEFjY3VtKSB7XG4gICAgICAgICAgICB0aGlzLl9hY2N1bSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fZ290QWNjdW0gPSBnb3RBY2N1bSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmFsdWVzUGhhc2VJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdmFsdWVzUGhhc2VbaW5kZXhdID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlc1BoYXNlW2luZGV4XSA9IDI7XG4gICAgICAgICAgICBpZiAoZ290QWNjdW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2N1bSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZ290QWNjdW0pIHJldHVybjtcblxuICAgIHZhciBjYWxsYmFjayA9IHRoaXMuX2NhbGxiYWNrO1xuICAgIHZhciByZWNlaXZlciA9IHRoaXMuX3Byb21pc2UuX2JvdW5kVG87XG4gICAgdmFyIHJldDtcblxuICAgIGZvciAodmFyIGkgPSB0aGlzLl9yZWR1Y2luZ0luZGV4OyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFsdWVzUGhhc2VJbmRleCA9IHZhbHVlc1BoYXNlW2ldO1xuICAgICAgICBpZiAodmFsdWVzUGhhc2VJbmRleCA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5fcmVkdWNpbmdJbmRleCA9IGkgKyAxO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlc1BoYXNlSW5kZXggIT09IDEpIHJldHVybjtcblxuICAgICAgICB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLl9zZXR0bGVkVmFsdWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmlzUGVuZGluZygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWplY3QodmFsdWUucmVhc29uKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRWFjaCkge1xuICAgICAgICAgICAgcHJlc2VydmVkVmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgcmV0ID0gdHJ5Q2F0Y2gzKGNhbGxiYWNrLCByZWNlaXZlciwgdmFsdWUsIGksIGxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXQgPSB0cnlDYXRjaDQoY2FsbGJhY2ssIHJlY2VpdmVyLCB0aGlzLl9hY2N1bSwgdmFsdWUsIGksIGxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmV0ID09PSBlcnJvck9iaikgcmV0dXJuIHRoaXMuX3JlamVjdChyZXQuZSk7XG5cbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QocmV0LCB2b2lkIDApO1xuICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZS5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1BoYXNlW2ldID0gNDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF5YmVQcm9taXNlLl9wcm94eVByb21pc2VBcnJheSh0aGlzLCBpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWF5YmVQcm9taXNlLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgICAgICByZXQgPSBtYXliZVByb21pc2UudmFsdWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlamVjdChtYXliZVByb21pc2UucmVhc29uKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmVkdWNpbmdJbmRleCA9IGkgKyAxO1xuICAgICAgICB0aGlzLl9hY2N1bSA9IHJldDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcmVkdWNpbmdJbmRleCA8IGxlbmd0aCkgcmV0dXJuO1xuICAgIHRoaXMuX3Jlc29sdmUoaXNFYWNoID8gcHJlc2VydmVkVmFsdWVzIDogdGhpcy5fYWNjdW0pO1xufTtcblxuZnVuY3Rpb24gcmVkdWNlKHByb21pc2VzLCBmbiwgaW5pdGlhbFZhbHVlLCBfZWFjaCkge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGFwaVJlamVjdGlvbihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB2YXIgYXJyYXkgPSBuZXcgUmVkdWN0aW9uUHJvbWlzZUFycmF5KHByb21pc2VzLCBmbiwgaW5pdGlhbFZhbHVlLCBfZWFjaCk7XG4gICAgcmV0dXJuIGFycmF5LnByb21pc2UoKTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24gUHJvbWlzZSRyZWR1Y2UoZm4sIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiByZWR1Y2UodGhpcywgZm4sIGluaXRpYWxWYWx1ZSwgbnVsbCk7XG59O1xuXG5Qcm9taXNlLnJlZHVjZSA9IGZ1bmN0aW9uIFByb21pc2UkUmVkdWNlKHByb21pc2VzLCBmbiwgaW5pdGlhbFZhbHVlLCBfZWFjaCkge1xuICAgIHJldHVybiByZWR1Y2UocHJvbWlzZXMsIGZuLCBpbml0aWFsVmFsdWUsIF9lYWNoKTtcbn07XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbiAgICBmdW5jdGlvbihQcm9taXNlLCBQcm9taXNlQXJyYXkpIHtcbnZhciBQcm9taXNlSW5zcGVjdGlvbiA9IFByb21pc2UuUHJvbWlzZUluc3BlY3Rpb247XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG5cbmZ1bmN0aW9uIFNldHRsZWRQcm9taXNlQXJyYXkodmFsdWVzKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciQodmFsdWVzKTtcbn1cbnV0aWwuaW5oZXJpdHMoU2V0dGxlZFByb21pc2VBcnJheSwgUHJvbWlzZUFycmF5KTtcblxuU2V0dGxlZFByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VSZXNvbHZlZCA9XG5mdW5jdGlvbiBTZXR0bGVkUHJvbWlzZUFycmF5JF9wcm9taXNlUmVzb2x2ZWQoaW5kZXgsIGluc3BlY3Rpb24pIHtcbiAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gaW5zcGVjdGlvbjtcbiAgICB2YXIgdG90YWxSZXNvbHZlZCA9ICsrdGhpcy5fdG90YWxSZXNvbHZlZDtcbiAgICBpZiAodG90YWxSZXNvbHZlZCA+PSB0aGlzLl9sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSh0aGlzLl92YWx1ZXMpO1xuICAgIH1cbn07XG5cblNldHRsZWRQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID1cbmZ1bmN0aW9uIFNldHRsZWRQcm9taXNlQXJyYXkkX3Byb21pc2VGdWxmaWxsZWQodmFsdWUsIGluZGV4KSB7XG4gICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZUluc3BlY3Rpb24oKTtcbiAgICByZXQuX2JpdEZpZWxkID0gMjY4NDM1NDU2O1xuICAgIHJldC5fc2V0dGxlZFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fcHJvbWlzZVJlc29sdmVkKGluZGV4LCByZXQpO1xufTtcblNldHRsZWRQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlUmVqZWN0ZWQgPVxuZnVuY3Rpb24gU2V0dGxlZFByb21pc2VBcnJheSRfcHJvbWlzZVJlamVjdGVkKHJlYXNvbiwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlSW5zcGVjdGlvbigpO1xuICAgIHJldC5fYml0RmllbGQgPSAxMzQyMTc3Mjg7XG4gICAgcmV0Ll9zZXR0bGVkVmFsdWUgPSByZWFzb247XG4gICAgdGhpcy5fcHJvbWlzZVJlc29sdmVkKGluZGV4LCByZXQpO1xufTtcblxuUHJvbWlzZS5zZXR0bGUgPSBmdW5jdGlvbiBQcm9taXNlJFNldHRsZShwcm9taXNlcykge1xuICAgIHJldHVybiBuZXcgU2V0dGxlZFByb21pc2VBcnJheShwcm9taXNlcykucHJvbWlzZSgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuc2V0dGxlID0gZnVuY3Rpb24gUHJvbWlzZSRzZXR0bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTZXR0bGVkUHJvbWlzZUFycmF5KHRoaXMpLnByb21pc2UoKTtcbn07XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbmZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uKSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgUmFuZ2VFcnJvciA9IHJlcXVpcmUoXCIuL2Vycm9ycy5qc1wiKS5SYW5nZUVycm9yO1xudmFyIEFnZ3JlZ2F0ZUVycm9yID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpLkFnZ3JlZ2F0ZUVycm9yO1xudmFyIGlzQXJyYXkgPSB1dGlsLmlzQXJyYXk7XG5cblxuZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSh2YWx1ZXMpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yJCh2YWx1ZXMpO1xuICAgIHRoaXMuX2hvd01hbnkgPSAwO1xuICAgIHRoaXMuX3Vud3JhcCA9IGZhbHNlO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XG59XG51dGlsLmluaGVyaXRzKFNvbWVQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRfaW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvd01hbnkgPT09IDApIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZShbXSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faW5pdCQodm9pZCAwLCAtNSk7XG4gICAgdmFyIGlzQXJyYXlSZXNvbHZlZCA9IGlzQXJyYXkodGhpcy5fdmFsdWVzKTtcbiAgICBpZiAoIXRoaXMuX2lzUmVzb2x2ZWQoKSAmJlxuICAgICAgICBpc0FycmF5UmVzb2x2ZWQgJiZcbiAgICAgICAgdGhpcy5faG93TWFueSA+IHRoaXMuX2NhblBvc3NpYmx5RnVsZmlsbCgpKSB7XG4gICAgICAgIHRoaXMuX3JlamVjdCh0aGlzLl9nZXRSYW5nZUVycm9yKHRoaXMubGVuZ3RoKCkpKTtcbiAgICB9XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRpbml0KCkge1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLl9pbml0KCk7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5zZXRVbndyYXAgPSBmdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5JHNldFVud3JhcCgpIHtcbiAgICB0aGlzLl91bndyYXAgPSB0cnVlO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuaG93TWFueSA9IGZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkaG93TWFueSgpIHtcbiAgICByZXR1cm4gdGhpcy5faG93TWFueTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLnNldEhvd01hbnkgPVxuZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRzZXRIb3dNYW55KGNvdW50KSB7XG4gICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX2hvd01hbnkgPSBjb3VudDtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX3Byb21pc2VGdWxmaWxsZWQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fYWRkRnVsZmlsbGVkKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fZnVsZmlsbGVkKCkgPT09IHRoaXMuaG93TWFueSgpKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlcy5sZW5ndGggPSB0aGlzLmhvd01hbnkoKTtcbiAgICAgICAgaWYgKHRoaXMuaG93TWFueSgpID09PSAxICYmIHRoaXMuX3Vud3JhcCkge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSh0aGlzLl92YWx1ZXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSh0aGlzLl92YWx1ZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VSZWplY3RlZCA9XG5mdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5JF9wcm9taXNlUmVqZWN0ZWQocmVhc29uKSB7XG4gICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX2FkZFJlamVjdGVkKHJlYXNvbik7XG4gICAgaWYgKHRoaXMuaG93TWFueSgpID4gdGhpcy5fY2FuUG9zc2libHlGdWxmaWxsKCkpIHtcbiAgICAgICAgdmFyIGUgPSBuZXcgQWdncmVnYXRlRXJyb3IoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoKCk7IGkgPCB0aGlzLl92YWx1ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGUucHVzaCh0aGlzLl92YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlamVjdChlKTtcbiAgICB9XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZnVsZmlsbGVkID0gZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRfZnVsZmlsbGVkKCkge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFJlc29sdmVkO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3JlamVjdGVkID0gZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRfcmVqZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcy5sZW5ndGggLSB0aGlzLmxlbmd0aCgpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX2FkZFJlamVjdGVkID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX2FkZFJlamVjdGVkKHJlYXNvbikge1xuICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHJlYXNvbik7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fYWRkRnVsZmlsbGVkID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX2FkZEZ1bGZpbGxlZCh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlc1t0aGlzLl90b3RhbFJlc29sdmVkKytdID0gdmFsdWU7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fY2FuUG9zc2libHlGdWxmaWxsID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX2NhblBvc3NpYmx5RnVsZmlsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGgoKSAtIHRoaXMuX3JlamVjdGVkKCk7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZ2V0UmFuZ2VFcnJvciA9XG5mdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5JF9nZXRSYW5nZUVycm9yKGNvdW50KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBcIklucHV0IGFycmF5IG11c3QgY29udGFpbiBhdCBsZWFzdCBcIiArXG4gICAgICAgICAgICB0aGlzLl9ob3dNYW55ICsgXCIgaXRlbXMgYnV0IGNvbnRhaW5zIG9ubHkgXCIgKyBjb3VudCArIFwiIGl0ZW1zXCI7XG4gICAgcmV0dXJuIG5ldyBSYW5nZUVycm9yKG1lc3NhZ2UpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3Jlc29sdmVFbXB0eUFycmF5ID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX3Jlc29sdmVFbXB0eUFycmF5KCkge1xuICAgIHRoaXMuX3JlamVjdCh0aGlzLl9nZXRSYW5nZUVycm9yKDApKTtcbn07XG5cbmZ1bmN0aW9uIFByb21pc2UkX1NvbWUocHJvbWlzZXMsIGhvd01hbnkpIHtcbiAgICBpZiAoKGhvd01hbnkgfCAwKSAhPT0gaG93TWFueSB8fCBob3dNYW55IDwgMCkge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZXhwZWN0aW5nIGEgcG9zaXRpdmUgaW50ZWdlclwiKTtcbiAgICB9XG4gICAgdmFyIHJldCA9IG5ldyBTb21lUHJvbWlzZUFycmF5KHByb21pc2VzKTtcbiAgICB2YXIgcHJvbWlzZSA9IHJldC5wcm9taXNlKCk7XG4gICAgaWYgKHByb21pc2UuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICByZXQuc2V0SG93TWFueShob3dNYW55KTtcbiAgICByZXQuaW5pdCgpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5Qcm9taXNlLnNvbWUgPSBmdW5jdGlvbiBQcm9taXNlJFNvbWUocHJvbWlzZXMsIGhvd01hbnkpIHtcbiAgICByZXR1cm4gUHJvbWlzZSRfU29tZShwcm9taXNlcywgaG93TWFueSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zb21lID0gZnVuY3Rpb24gUHJvbWlzZSRzb21lKGhvd01hbnkpIHtcbiAgICByZXR1cm4gUHJvbWlzZSRfU29tZSh0aGlzLCBob3dNYW55KTtcbn07XG5cblByb21pc2UuX1NvbWVQcm9taXNlQXJyYXkgPSBTb21lUHJvbWlzZUFycmF5O1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGFzeW5jID0gcmVxdWlyZShcIi4vYXN5bmMuanNcIik7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpO1xudmFyIHRyeUNhdGNoMSA9IHV0aWwudHJ5Q2F0Y2gxO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcblxuUHJvbWlzZS5wcm90b3R5cGUucHJvZ3Jlc3NlZCA9IGZ1bmN0aW9uIFByb21pc2UkcHJvZ3Jlc3NlZChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4odm9pZCAwLCB2b2lkIDAsIGhhbmRsZXIsIHZvaWQgMCwgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm9ncmVzcyA9IGZ1bmN0aW9uIFByb21pc2UkX3Byb2dyZXNzKHByb2dyZXNzVmFsdWUpIHtcbiAgICBpZiAodGhpcy5faXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX3Byb2dyZXNzVW5jaGVja2VkKHByb2dyZXNzVmFsdWUpO1xuXG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcHJvZ3Jlc3NIYW5kbGVyQXQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfcHJvZ3Jlc3NIYW5kbGVyQXQoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPT09IDBcbiAgICAgICAgPyB0aGlzLl9wcm9ncmVzc0hhbmRsZXIwXG4gICAgICAgIDogdGhpc1soaW5kZXggPDwgMikgKyBpbmRleCAtIDUgKyAyXTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9kb1Byb2dyZXNzV2l0aCA9XG5mdW5jdGlvbiBQcm9taXNlJF9kb1Byb2dyZXNzV2l0aChwcm9ncmVzc2lvbikge1xuICAgIHZhciBwcm9ncmVzc1ZhbHVlID0gcHJvZ3Jlc3Npb24udmFsdWU7XG4gICAgdmFyIGhhbmRsZXIgPSBwcm9ncmVzc2lvbi5oYW5kbGVyO1xuICAgIHZhciBwcm9taXNlID0gcHJvZ3Jlc3Npb24ucHJvbWlzZTtcbiAgICB2YXIgcmVjZWl2ZXIgPSBwcm9ncmVzc2lvbi5yZWNlaXZlcjtcblxuICAgIHZhciByZXQgPSB0cnlDYXRjaDEoaGFuZGxlciwgcmVjZWl2ZXIsIHByb2dyZXNzVmFsdWUpO1xuICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIGlmIChyZXQuZSAhPSBudWxsICYmXG4gICAgICAgICAgICByZXQuZS5uYW1lICE9PSBcIlN0b3BQcm9ncmVzc1Byb3BhZ2F0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciB0cmFjZSA9IGVycm9ycy5jYW5BdHRhY2gocmV0LmUpXG4gICAgICAgICAgICAgICAgPyByZXQuZSA6IG5ldyBFcnJvcihyZXQuZSArIFwiXCIpO1xuICAgICAgICAgICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh0cmFjZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9wcm9ncmVzcyhyZXQuZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJldCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0Ll90aGVuKHByb21pc2UuX3Byb2dyZXNzLCBudWxsLCBudWxsLCBwcm9taXNlLCB2b2lkIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2UuX3Byb2dyZXNzKHJldCk7XG4gICAgfVxufTtcblxuXG5Qcm9taXNlLnByb3RvdHlwZS5fcHJvZ3Jlc3NVbmNoZWNrZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfcHJvZ3Jlc3NVbmNoZWNrZWQocHJvZ3Jlc3NWYWx1ZSkge1xuICAgIGlmICghdGhpcy5pc1BlbmRpbmcoKSkgcmV0dXJuO1xuICAgIHZhciBsZW4gPSB0aGlzLl9sZW5ndGgoKTtcbiAgICB2YXIgcHJvZ3Jlc3MgPSB0aGlzLl9wcm9ncmVzcztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gdGhpcy5fcHJvZ3Jlc3NIYW5kbGVyQXQoaSk7XG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZUF0KGkpO1xuICAgICAgICBpZiAoIShwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHZhciByZWNlaXZlciA9IHRoaXMuX3JlY2VpdmVyQXQoaSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbChyZWNlaXZlciwgcHJvZ3Jlc3NWYWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY2VpdmVyIGluc3RhbmNlb2YgUHJvbWlzZSAmJiByZWNlaXZlci5faXNQcm94aWVkKCkpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlci5fcHJvZ3Jlc3NVbmNoZWNrZWQocHJvZ3Jlc3NWYWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY2VpdmVyIGluc3RhbmNlb2YgUHJvbWlzZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIuX3Byb21pc2VQcm9ncmVzc2VkKHByb2dyZXNzVmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgYXN5bmMuaW52b2tlKHRoaXMuX2RvUHJvZ3Jlc3NXaXRoLCB0aGlzLCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgICAgICAgICAgICBwcm9taXNlOiBwcm9taXNlLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVyOiB0aGlzLl9yZWNlaXZlckF0KGkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9ncmVzc1ZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFzeW5jLmludm9rZShwcm9ncmVzcywgcHJvbWlzZSwgcHJvZ3Jlc3NWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMKSB7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpO1xudmFyIGNhbkF0dGFjaCA9IGVycm9ycy5jYW5BdHRhY2g7XG52YXIgYXN5bmMgPSByZXF1aXJlKFwiLi9hc3luYy5qc1wiKTtcbnZhciBDYW5jZWxsYXRpb25FcnJvciA9IGVycm9ycy5DYW5jZWxsYXRpb25FcnJvcjtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2NhbmNlbCA9IGZ1bmN0aW9uIFByb21pc2UkX2NhbmNlbChyZWFzb24pIHtcbiAgICBpZiAoIXRoaXMuaXNDYW5jZWxsYWJsZSgpKSByZXR1cm4gdGhpcztcbiAgICB2YXIgcGFyZW50O1xuICAgIHZhciBwcm9taXNlVG9SZWplY3QgPSB0aGlzO1xuICAgIHdoaWxlICgocGFyZW50ID0gcHJvbWlzZVRvUmVqZWN0Ll9jYW5jZWxsYXRpb25QYXJlbnQpICE9PSB2b2lkIDAgJiZcbiAgICAgICAgcGFyZW50LmlzQ2FuY2VsbGFibGUoKSkge1xuICAgICAgICBwcm9taXNlVG9SZWplY3QgPSBwYXJlbnQ7XG4gICAgfVxuICAgIHByb21pc2VUb1JlamVjdC5fYXR0YWNoRXh0cmFUcmFjZShyZWFzb24pO1xuICAgIHByb21pc2VUb1JlamVjdC5fcmVqZWN0VW5jaGVja2VkKHJlYXNvbik7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiBQcm9taXNlJGNhbmNlbChyZWFzb24pIHtcbiAgICBpZiAoIXRoaXMuaXNDYW5jZWxsYWJsZSgpKSByZXR1cm4gdGhpcztcbiAgICByZWFzb24gPSByZWFzb24gIT09IHZvaWQgMFxuICAgICAgICA/IChjYW5BdHRhY2gocmVhc29uKSA/IHJlYXNvbiA6IG5ldyBFcnJvcihyZWFzb24gKyBcIlwiKSlcbiAgICAgICAgOiBuZXcgQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICBhc3luYy5pbnZva2VMYXRlcih0aGlzLl9jYW5jZWwsIHRoaXMsIHJlYXNvbik7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5jYW5jZWxsYWJsZSA9IGZ1bmN0aW9uIFByb21pc2UkY2FuY2VsbGFibGUoKSB7XG4gICAgaWYgKHRoaXMuX2NhbmNlbGxhYmxlKCkpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuX3NldENhbmNlbGxhYmxlKCk7XG4gICAgdGhpcy5fY2FuY2VsbGF0aW9uUGFyZW50ID0gdm9pZCAwO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudW5jYW5jZWxsYWJsZSA9IGZ1bmN0aW9uIFByb21pc2UkdW5jYW5jZWxsYWJsZSgpIHtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fcHJvcGFnYXRlRnJvbSh0aGlzLCAyIHwgNCk7XG4gICAgcmV0Ll9mb2xsb3codGhpcyk7XG4gICAgcmV0Ll91bnNldENhbmNlbGxhYmxlKCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmZvcmsgPVxuZnVuY3Rpb24gUHJvbWlzZSRmb3JrKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MpIHtcbiAgICB2YXIgcmV0ID0gdGhpcy5fdGhlbihkaWRGdWxmaWxsLCBkaWRSZWplY3QsIGRpZFByb2dyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCwgdm9pZCAwKTtcblxuICAgIHJldC5fc2V0Q2FuY2VsbGFibGUoKTtcbiAgICByZXQuX2NhbmNlbGxhdGlvblBhcmVudCA9IHZvaWQgMDtcbiAgICByZXR1cm4gcmV0O1xufTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUHJvbWlzZSwgYXBpUmVqZWN0aW9uLCBjYXN0KSB7XG4gICAgdmFyIFR5cGVFcnJvciA9IHJlcXVpcmUoXCIuL2Vycm9ycy5qc1wiKS5UeXBlRXJyb3I7XG4gICAgdmFyIGluaGVyaXRzID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKS5pbmhlcml0cztcbiAgICB2YXIgUHJvbWlzZUluc3BlY3Rpb24gPSBQcm9taXNlLlByb21pc2VJbnNwZWN0aW9uO1xuXG4gICAgZnVuY3Rpb24gaW5zcGVjdGlvbk1hcHBlcihpbnNwZWN0aW9ucykge1xuICAgICAgICB2YXIgbGVuID0gaW5zcGVjdGlvbnMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgaW5zcGVjdGlvbiA9IGluc3BlY3Rpb25zW2ldO1xuICAgICAgICAgICAgaWYgKGluc3BlY3Rpb24uaXNSZWplY3RlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGluc3BlY3Rpb24uZXJyb3IoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnNwZWN0aW9uc1tpXSA9IGluc3BlY3Rpb24udmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zcGVjdGlvbnM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGhyb3dlcihlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlO30sIDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UocmVzb3VyY2VzLCBpbnNwZWN0aW9uKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGxlbiA9IHJlc291cmNlcy5sZW5ndGg7XG4gICAgICAgIHZhciByZXQgPSBQcm9taXNlLmRlZmVyKCk7XG4gICAgICAgIGZ1bmN0aW9uIGl0ZXJhdG9yKCkge1xuICAgICAgICAgICAgaWYgKGkgPj0gbGVuKSByZXR1cm4gcmV0LnJlc29sdmUoKTtcbiAgICAgICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHJlc291cmNlc1tpKytdLCB2b2lkIDApO1xuICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgJiZcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX2lzRGlzcG9zYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlID0gY2FzdChtYXliZVByb21pc2UuX2dldERpc3Bvc2VyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJ5RGlzcG9zZShpbnNwZWN0aW9uKSwgdm9pZCAwKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd2VyKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF5YmVQcm9taXNlLl90aGVuKGl0ZXJhdG9yLCB0aHJvd2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZXJhdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlcmF0b3IoKTtcbiAgICAgICAgcmV0dXJuIHJldC5wcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2VyU3VjY2Vzcyh2YWx1ZSkge1xuICAgICAgICB2YXIgaW5zcGVjdGlvbiA9IG5ldyBQcm9taXNlSW5zcGVjdGlvbigpO1xuICAgICAgICBpbnNwZWN0aW9uLl9zZXR0bGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaW5zcGVjdGlvbi5fYml0RmllbGQgPSAyNjg0MzU0NTY7XG4gICAgICAgIHJldHVybiBkaXNwb3NlKHRoaXMsIGluc3BlY3Rpb24pLnRoZW5SZXR1cm4odmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2VyRmFpbChyZWFzb24pIHtcbiAgICAgICAgdmFyIGluc3BlY3Rpb24gPSBuZXcgUHJvbWlzZUluc3BlY3Rpb24oKTtcbiAgICAgICAgaW5zcGVjdGlvbi5fc2V0dGxlZFZhbHVlID0gcmVhc29uO1xuICAgICAgICBpbnNwZWN0aW9uLl9iaXRGaWVsZCA9IDEzNDIxNzcyODtcbiAgICAgICAgcmV0dXJuIGRpc3Bvc2UodGhpcywgaW5zcGVjdGlvbikudGhlblRocm93KHJlYXNvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRGlzcG9zZXIoZGF0YSwgcHJvbWlzZSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IHByb21pc2U7XG4gICAgfVxuXG4gICAgRGlzcG9zZXIucHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbiBEaXNwb3NlciRkYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9O1xuXG4gICAgRGlzcG9zZXIucHJvdG90eXBlLnByb21pc2UgPSBmdW5jdGlvbiBEaXNwb3NlciRwcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgRGlzcG9zZXIucHJvdG90eXBlLnJlc291cmNlID0gZnVuY3Rpb24gRGlzcG9zZXIkcmVzb3VyY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb21pc2UoKS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlKCkudmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgRGlzcG9zZXIucHJvdG90eXBlLnRyeURpc3Bvc2UgPSBmdW5jdGlvbihpbnNwZWN0aW9uKSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2UoKTtcbiAgICAgICAgdmFyIHJldCA9IHJlc291cmNlICE9PSBudWxsXG4gICAgICAgICAgICA/IHRoaXMuZG9EaXNwb3NlKHJlc291cmNlLCBpbnNwZWN0aW9uKSA6IG51bGw7XG4gICAgICAgIHRoaXMuX3Byb21pc2UuX3Vuc2V0RGlzcG9zYWJsZSgpO1xuICAgICAgICB0aGlzLl9kYXRhID0gdGhpcy5fcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIEZ1bmN0aW9uRGlzcG9zZXIoZm4sIHByb21pc2UpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciQoZm4sIHByb21pc2UpO1xuICAgIH1cbiAgICBpbmhlcml0cyhGdW5jdGlvbkRpc3Bvc2VyLCBEaXNwb3Nlcik7XG5cbiAgICBGdW5jdGlvbkRpc3Bvc2VyLnByb3RvdHlwZS5kb0Rpc3Bvc2UgPSBmdW5jdGlvbiAocmVzb3VyY2UsIGluc3BlY3Rpb24pIHtcbiAgICAgICAgdmFyIGZuID0gdGhpcy5kYXRhKCk7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHJlc291cmNlLCByZXNvdXJjZSwgaW5zcGVjdGlvbik7XG4gICAgfTtcblxuICAgIFByb21pc2UudXNpbmcgPSBmdW5jdGlvbiBQcm9taXNlJHVzaW5nKCkge1xuICAgICAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA8IDIpIHJldHVybiBhcGlSZWplY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlvdSBtdXN0IHBhc3MgYXQgbGVhc3QgMiBhcmd1bWVudHMgdG8gUHJvbWlzZS51c2luZ1wiKTtcbiAgICAgICAgdmFyIGZuID0gYXJndW1lbnRzW2xlbiAtIDFdO1xuICAgICAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBhcGlSZWplY3Rpb24oXCJmbiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIGxlbi0tO1xuICAgICAgICB2YXIgcmVzb3VyY2VzID0gbmV3IEFycmF5KGxlbik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHZhciByZXNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSBpbnN0YW5jZW9mIERpc3Bvc2VyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3Bvc2VyID0gcmVzb3VyY2U7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UgPSByZXNvdXJjZS5wcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UuX3NldERpc3Bvc2FibGUoZGlzcG9zZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb3VyY2VzW2ldID0gcmVzb3VyY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5zZXR0bGUocmVzb3VyY2VzKVxuICAgICAgICAgICAgLnRoZW4oaW5zcGVjdGlvbk1hcHBlcilcbiAgICAgICAgICAgIC5zcHJlYWQoZm4pXG4gICAgICAgICAgICAuX3RoZW4oZGlzcG9zZXJTdWNjZXNzLCBkaXNwb3NlckZhaWwsIHZvaWQgMCwgcmVzb3VyY2VzLCB2b2lkIDApO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnByb3RvdHlwZS5fc2V0RGlzcG9zYWJsZSA9XG4gICAgZnVuY3Rpb24gUHJvbWlzZSRfc2V0RGlzcG9zYWJsZShkaXNwb3Nlcikge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMjYyMTQ0O1xuICAgICAgICB0aGlzLl9kaXNwb3NlciA9IGRpc3Bvc2VyO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnByb3RvdHlwZS5faXNEaXNwb3NhYmxlID0gZnVuY3Rpb24gUHJvbWlzZSRfaXNEaXNwb3NhYmxlKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMjYyMTQ0KSA+IDA7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLl9nZXREaXNwb3NlciA9IGZ1bmN0aW9uIFByb21pc2UkX2dldERpc3Bvc2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzcG9zZXI7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLl91bnNldERpc3Bvc2FibGUgPSBmdW5jdGlvbiBQcm9taXNlJF91bnNldERpc3Bvc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjI2MjE0NCk7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VyID0gdm9pZCAwO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnByb3RvdHlwZS5kaXNwb3NlciA9IGZ1bmN0aW9uIFByb21pc2UkZGlzcG9zZXIoZm4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uRGlzcG9zZXIoZm4sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICB9O1xuXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIFR5cGVFcnJvciA9IHJlcXVpcmUoJy4vZXJyb3JzLmpzJykuVHlwZUVycm9yO1xuXG5mdW5jdGlvbiBhcGlSZWplY3Rpb24obXNnKSB7XG4gICAgdmFyIGVycm9yID0gbmV3IFR5cGVFcnJvcihtc2cpO1xuICAgIHZhciByZXQgPSBQcm9taXNlLnJlamVjdGVkKGVycm9yKTtcbiAgICB2YXIgcGFyZW50ID0gcmV0Ll9wZWVrQ29udGV4dCgpO1xuICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnQuX2F0dGFjaEV4dHJhVHJhY2UoZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5yZXR1cm4gYXBpUmVqZWN0aW9uO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX3NldFRpbWVvdXQgPSBmdW5jdGlvbihmbiwgbXMpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgYXJnMCA9IGFyZ3VtZW50c1syXTtcbiAgICB2YXIgYXJnMSA9IGFyZ3VtZW50c1szXTtcbiAgICB2YXIgYXJnMiA9IGxlbiA+PSA1ID8gYXJndW1lbnRzWzRdIDogdm9pZCAwO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZuKGFyZzAsIGFyZzEsIGFyZzIpO1xuICAgIH0sIG1zKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwsIGNhc3QpIHtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBlcnJvcnMgPSByZXF1aXJlKFwiLi9lcnJvcnMuanNcIik7XG52YXIgYXBpUmVqZWN0aW9uID0gcmVxdWlyZShcIi4vZXJyb3JzX2FwaV9yZWplY3Rpb25cIikoUHJvbWlzZSk7XG52YXIgVGltZW91dEVycm9yID0gUHJvbWlzZS5UaW1lb3V0RXJyb3I7XG5cbnZhciBhZnRlclRpbWVvdXQgPSBmdW5jdGlvbiBQcm9taXNlJF9hZnRlclRpbWVvdXQocHJvbWlzZSwgbWVzc2FnZSwgbXMpIHtcbiAgICBpZiAoIXByb21pc2UuaXNQZW5kaW5nKCkpIHJldHVybjtcbiAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbWVzc2FnZSA9IFwib3BlcmF0aW9uIHRpbWVkIG91dCBhZnRlclwiICsgXCIgXCIgKyBtcyArIFwiIG1zXCJcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBUaW1lb3V0RXJyb3IobWVzc2FnZSk7XG4gICAgZXJyb3JzLm1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbihlcnIpO1xuICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UoZXJyKTtcbiAgICBwcm9taXNlLl9jYW5jZWwoZXJyKTtcbn07XG5cbnZhciBhZnRlckRlbGF5ID0gZnVuY3Rpb24gUHJvbWlzZSRfYWZ0ZXJEZWxheSh2YWx1ZSwgcHJvbWlzZSkge1xuICAgIHByb21pc2UuX2Z1bGZpbGwodmFsdWUpO1xufTtcblxudmFyIGRlbGF5ID0gUHJvbWlzZS5kZWxheSA9IGZ1bmN0aW9uIFByb21pc2UkRGVsYXkodmFsdWUsIG1zKSB7XG4gICAgaWYgKG1zID09PSB2b2lkIDApIHtcbiAgICAgICAgbXMgPSB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSB2b2lkIDA7XG4gICAgfVxuICAgIG1zID0gK21zO1xuICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHZhbHVlLCB2b2lkIDApO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuXG4gICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZS5fcHJvcGFnYXRlRnJvbShtYXliZVByb21pc2UsIDcpO1xuICAgICAgICBwcm9taXNlLl9mb2xsb3cobWF5YmVQcm9taXNlKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuZGVsYXkodmFsdWUsIG1zKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZS5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICAgICAgX3NldFRpbWVvdXQoYWZ0ZXJEZWxheSwgbXMsIHZhbHVlLCBwcm9taXNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5kZWxheSA9IGZ1bmN0aW9uIFByb21pc2UkZGVsYXkobXMpIHtcbiAgICByZXR1cm4gZGVsYXkodGhpcywgbXMpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uIFByb21pc2UkdGltZW91dChtcywgbWVzc2FnZSkge1xuICAgIG1zID0gK21zO1xuXG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXQuX3Byb3BhZ2F0ZUZyb20odGhpcywgNyk7XG4gICAgcmV0Ll9mb2xsb3codGhpcyk7XG4gICAgX3NldFRpbWVvdXQoYWZ0ZXJUaW1lb3V0LCBtcywgcmV0LCBtZXNzYWdlLCBtcyk7XG4gICAgcmV0dXJuIHJldC5jYW5jZWxsYWJsZSgpO1xufTtcblxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMKSB7XG52YXIgVEhJUyA9IHt9O1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIG5vZGViYWNrRm9yUHJvbWlzZSA9IHJlcXVpcmUoXCIuL3Byb21pc2VfcmVzb2x2ZXIuanNcIilcbiAgICAuX25vZGViYWNrRm9yUHJvbWlzZTtcbnZhciB3aXRoQXBwZW5kZWQgPSB1dGlsLndpdGhBcHBlbmRlZDtcbnZhciBtYXliZVdyYXBBc0Vycm9yID0gdXRpbC5tYXliZVdyYXBBc0Vycm9yO1xudmFyIGNhbkV2YWx1YXRlID0gdXRpbC5jYW5FdmFsdWF0ZTtcbnZhciBUeXBlRXJyb3IgPSByZXF1aXJlKFwiLi9lcnJvcnNcIikuVHlwZUVycm9yO1xudmFyIGRlZmF1bHRTdWZmaXggPSBcIkFzeW5jXCI7XG52YXIgZGVmYXVsdEZpbHRlciA9IGZ1bmN0aW9uKG5hbWUsIGZ1bmMpIHtcbiAgICByZXR1cm4gdXRpbC5pc0lkZW50aWZpZXIobmFtZSkgJiZcbiAgICAgICAgbmFtZS5jaGFyQXQoMCkgIT09IFwiX1wiICYmXG4gICAgICAgICF1dGlsLmlzQ2xhc3MoZnVuYyk7XG59O1xudmFyIGRlZmF1bHRQcm9taXNpZmllZCA9IHtfX2lzUHJvbWlzaWZpZWRfXzogdHJ1ZX07XG5cblxuZnVuY3Rpb24gZXNjYXBlSWRlbnRSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbJF0pLywgXCJcXFxcJFwiKTtcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNpZmllZChmbikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmbi5fX2lzUHJvbWlzaWZpZWRfXyA9PT0gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFzUHJvbWlzaWZpZWQob2JqLCBrZXksIHN1ZmZpeCkge1xuICAgIHZhciB2YWwgPSB1dGlsLmdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdChvYmosIGtleSArIHN1ZmZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFByb21pc2lmaWVkKTtcbiAgICByZXR1cm4gdmFsID8gaXNQcm9taXNpZmllZCh2YWwpIDogZmFsc2U7XG59XG5mdW5jdGlvbiBjaGVja1ZhbGlkKHJldCwgc3VmZml4LCBzdWZmaXhSZWdleHApIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICB2YXIga2V5ID0gcmV0W2ldO1xuICAgICAgICBpZiAoc3VmZml4UmVnZXhwLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgdmFyIGtleVdpdGhvdXRBc3luY1N1ZmZpeCA9IGtleS5yZXBsYWNlKHN1ZmZpeFJlZ2V4cCwgXCJcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJldC5sZW5ndGg7IGogKz0gMikge1xuICAgICAgICAgICAgICAgIGlmIChyZXRbal0gPT09IGtleVdpdGhvdXRBc3luY1N1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHByb21pc2lmeSBhbiBBUEkgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aGF0IGhhcyBub3JtYWwgbWV0aG9kcyB3aXRoICdcIitzdWZmaXgrXCInLXN1ZmZpeFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByb21pc2lmaWFibGVNZXRob2RzKG9iaiwgc3VmZml4LCBzdWZmaXhSZWdleHAsIGZpbHRlcikge1xuICAgIHZhciBrZXlzID0gdXRpbC5pbmhlcml0ZWREYXRhS2V5cyhvYmopO1xuICAgIHZhciByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICFpc1Byb21pc2lmaWVkKHZhbHVlKSAmJlxuICAgICAgICAgICAgIWhhc1Byb21pc2lmaWVkKG9iaiwga2V5LCBzdWZmaXgpICYmXG4gICAgICAgICAgICBmaWx0ZXIoa2V5LCB2YWx1ZSwgb2JqKSkge1xuICAgICAgICAgICAgcmV0LnB1c2goa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tWYWxpZChyZXQsIHN1ZmZpeCwgc3VmZml4UmVnZXhwKTtcbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hDYXNlQXJndW1lbnRPcmRlcihsaWtlbHlBcmd1bWVudENvdW50KSB7XG4gICAgdmFyIHJldCA9IFtsaWtlbHlBcmd1bWVudENvdW50XTtcbiAgICB2YXIgbWluID0gTWF0aC5tYXgoMCwgbGlrZWx5QXJndW1lbnRDb3VudCAtIDEgLSA1KTtcbiAgICBmb3IodmFyIGkgPSBsaWtlbHlBcmd1bWVudENvdW50IC0gMTsgaSA+PSBtaW47IC0taSkge1xuICAgICAgICBpZiAoaSA9PT0gbGlrZWx5QXJndW1lbnRDb3VudCkgY29udGludWU7XG4gICAgICAgIHJldC5wdXNoKGkpO1xuICAgIH1cbiAgICBmb3IodmFyIGkgPSBsaWtlbHlBcmd1bWVudENvdW50ICsgMTsgaSA8PSA1OyArK2kpIHtcbiAgICAgICAgcmV0LnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGFyZ3VtZW50U2VxdWVuY2UoYXJndW1lbnRDb3VudCkge1xuICAgIHJldHVybiB1dGlsLmZpbGxlZFJhbmdlKGFyZ3VtZW50Q291bnQsIFwiYXJndW1lbnRzW1wiLCBcIl1cIik7XG59XG5cbmZ1bmN0aW9uIHBhcmFtZXRlckRlY2xhcmF0aW9uKHBhcmFtZXRlckNvdW50KSB7XG4gICAgcmV0dXJuIHV0aWwuZmlsbGVkUmFuZ2UocGFyYW1ldGVyQ291bnQsIFwiX2FyZ1wiLCBcIlwiKTtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyQ291bnQoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oZm4ubGVuZ3RoLCAxMDIzICsgMSksIDApO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9wZXJ0eUFjY2VzcyhrZXkpIHtcbiAgICBpZiAodXRpbC5pc0lkZW50aWZpZXIoa2V5KSkge1xuICAgICAgICByZXR1cm4gXCIuXCIgKyBrZXk7XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIFwiWydcIiArIGtleS5yZXBsYWNlKC8oWydcXFxcXSkvZywgXCJcXFxcJDFcIikgKyBcIiddXCI7XG59XG5cbmZ1bmN0aW9uIG1ha2VOb2RlUHJvbWlzaWZpZWRFdmFsKGNhbGxiYWNrLCByZWNlaXZlciwgb3JpZ2luYWxOYW1lLCBmbiwgc3VmZml4KSB7XG4gICAgdmFyIG5ld1BhcmFtZXRlckNvdW50ID0gTWF0aC5tYXgoMCwgcGFyYW1ldGVyQ291bnQoZm4pIC0gMSk7XG4gICAgdmFyIGFyZ3VtZW50T3JkZXIgPSBzd2l0Y2hDYXNlQXJndW1lbnRPcmRlcihuZXdQYXJhbWV0ZXJDb3VudCk7XG4gICAgdmFyIGNhbGxiYWNrTmFtZSA9XG4gICAgICAgICh0eXBlb2Ygb3JpZ2luYWxOYW1lID09PSBcInN0cmluZ1wiICYmIHV0aWwuaXNJZGVudGlmaWVyKG9yaWdpbmFsTmFtZSlcbiAgICAgICAgICAgID8gb3JpZ2luYWxOYW1lICsgc3VmZml4XG4gICAgICAgICAgICA6IFwicHJvbWlzaWZpZWRcIik7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNhbGxGb3JBcmd1bWVudENvdW50KGNvdW50KSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRTZXF1ZW5jZShjb3VudCkuam9pbihcIiwgXCIpO1xuICAgICAgICB2YXIgY29tbWEgPSBjb3VudCA+IDAgPyBcIiwgXCIgOiBcIlwiO1xuICAgICAgICB2YXIgcmV0O1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXQgPSBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kKGFyZ3MsIGZuKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgXCIucmVwbGFjZShcIi5tZXRob2RcIiwgZ2VuZXJhdGVQcm9wZXJ0eUFjY2VzcyhjYWxsYmFjaykpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlY2VpdmVyID09PSBUSElTKSB7XG4gICAgICAgICAgICByZXQgPSAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgYXJncywgZm4pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgXCI7XG4gICAgICAgIH0gZWxzZSBpZiAocmVjZWl2ZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0ID0gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHJlY2VpdmVyLCBhcmdzLCBmbik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0ID0gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhhcmdzLCBmbik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQucmVwbGFjZShcImFyZ3NcIiwgYXJncykucmVwbGFjZShcIiwgXCIsIGNvbW1hKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUFyZ3VtZW50U3dpdGNoQ2FzZSgpIHtcbiAgICAgICAgdmFyIHJldCA9IFwiXCI7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhcmd1bWVudE9yZGVyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICByZXQgKz0gXCJjYXNlIFwiICsgYXJndW1lbnRPcmRlcltpXSArXCI6XCIgK1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlQ2FsbEZvckFyZ3VtZW50Q291bnQoYXJndW1lbnRPcmRlcltpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvZGVGb3JDYWxsO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb2RlRm9yQ2FsbCA9IFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcGVydHkuYXBwbHkodGhpcywgYXJncyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAucmVwbGFjZShcIi5wcm9wZXJ0eVwiLCBnZW5lcmF0ZVByb3BlcnR5QWNjZXNzKGNhbGxiYWNrKSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVjZWl2ZXIgPT09IFRISVMpIHtcbiAgICAgICAgICAgIGNvZGVGb3JDYWxsID0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJncyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvZGVGb3JDYWxsID0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkocmVjZWl2ZXIsIGFyZ3MpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCArPSBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBkZWZhdWx0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkobGVuICsgMSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIGkgPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgYXJnc1tpXSA9IGZuOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgW0NvZGVGb3JDYWxsXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBcIi5yZXBsYWNlKFwiW0NvZGVGb3JDYWxsXVwiLCBjb2RlRm9yQ2FsbCk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcIlByb21pc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGJhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjZWl2ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2l0aEFwcGVuZGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1heWJlV3JhcEFzRXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm9kZWJhY2tGb3JQcm9taXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIklOVEVSTkFMXCIsXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHZhciByZXQgPSBmdW5jdGlvbiBGdW5jdGlvbk5hbWUoUGFyYW1ldGVycykgeyAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAndXNlIHN0cmljdCc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBwcm9taXNlLl9zZXRUcmFjZSh2b2lkIDApOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgZm4gPSBub2RlYmFja0ZvclByb21pc2UocHJvbWlzZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB0cnkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgc3dpdGNoKGxlbikgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgICAgIFtDb2RlRm9yU3dpdGNoQ2FzZV0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZWQgPSBtYXliZVdyYXBBc0Vycm9yKGUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh3cmFwcGVkKTsgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fcmVqZWN0KHdyYXBwZWQpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIH07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHJldC5fX2lzUHJvbWlzaWZpZWRfXyA9IHRydWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHJldHVybiByZXQ7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIFwiXG4gICAgICAgIC5yZXBsYWNlKFwiRnVuY3Rpb25OYW1lXCIsIGNhbGxiYWNrTmFtZSlcbiAgICAgICAgLnJlcGxhY2UoXCJQYXJhbWV0ZXJzXCIsIHBhcmFtZXRlckRlY2xhcmF0aW9uKG5ld1BhcmFtZXRlckNvdW50KSlcbiAgICAgICAgLnJlcGxhY2UoXCJbQ29kZUZvclN3aXRjaENhc2VdXCIsIGdlbmVyYXRlQXJndW1lbnRTd2l0Y2hDYXNlKCkpKShcbiAgICAgICAgICAgIFByb21pc2UsXG4gICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgIHJlY2VpdmVyLFxuICAgICAgICAgICAgd2l0aEFwcGVuZGVkLFxuICAgICAgICAgICAgbWF5YmVXcmFwQXNFcnJvcixcbiAgICAgICAgICAgIG5vZGViYWNrRm9yUHJvbWlzZSxcbiAgICAgICAgICAgIElOVEVSTkFMXG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIG1ha2VOb2RlUHJvbWlzaWZpZWRDbG9zdXJlKGNhbGxiYWNrLCByZWNlaXZlcikge1xuICAgIGZ1bmN0aW9uIHByb21pc2lmaWVkKCkge1xuICAgICAgICB2YXIgX3JlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgICAgIGlmIChyZWNlaXZlciA9PT0gVEhJUykgX3JlY2VpdmVyID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBfcmVjZWl2ZXJbY2FsbGJhY2tdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICBwcm9taXNlLl9zZXRUcmFjZSh2b2lkIDApO1xuICAgICAgICB2YXIgZm4gPSBub2RlYmFja0ZvclByb21pc2UocHJvbWlzZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShfcmVjZWl2ZXIsIHdpdGhBcHBlbmRlZChhcmd1bWVudHMsIGZuKSk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgdmFyIHdyYXBwZWQgPSBtYXliZVdyYXBBc0Vycm9yKGUpO1xuICAgICAgICAgICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh3cmFwcGVkKTtcbiAgICAgICAgICAgIHByb21pc2UuX3JlamVjdCh3cmFwcGVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgcHJvbWlzaWZpZWQuX19pc1Byb21pc2lmaWVkX18gPSB0cnVlO1xuICAgIHJldHVybiBwcm9taXNpZmllZDtcbn1cblxudmFyIG1ha2VOb2RlUHJvbWlzaWZpZWQgPSBjYW5FdmFsdWF0ZVxuICAgID8gbWFrZU5vZGVQcm9taXNpZmllZEV2YWxcbiAgICA6IG1ha2VOb2RlUHJvbWlzaWZpZWRDbG9zdXJlO1xuXG5mdW5jdGlvbiBwcm9taXNpZnlBbGwob2JqLCBzdWZmaXgsIGZpbHRlciwgcHJvbWlzaWZpZXIpIHtcbiAgICB2YXIgc3VmZml4UmVnZXhwID0gbmV3IFJlZ0V4cChlc2NhcGVJZGVudFJlZ2V4KHN1ZmZpeCkgKyBcIiRcIik7XG4gICAgdmFyIG1ldGhvZHMgPVxuICAgICAgICBwcm9taXNpZmlhYmxlTWV0aG9kcyhvYmosIHN1ZmZpeCwgc3VmZml4UmVnZXhwLCBmaWx0ZXIpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKz0gMikge1xuICAgICAgICB2YXIga2V5ID0gbWV0aG9kc1tpXTtcbiAgICAgICAgdmFyIGZuID0gbWV0aG9kc1tpKzFdO1xuICAgICAgICB2YXIgcHJvbWlzaWZpZWRLZXkgPSBrZXkgKyBzdWZmaXg7XG4gICAgICAgIG9ialtwcm9taXNpZmllZEtleV0gPSBwcm9taXNpZmllciA9PT0gbWFrZU5vZGVQcm9taXNpZmllZFxuICAgICAgICAgICAgICAgID8gbWFrZU5vZGVQcm9taXNpZmllZChrZXksIFRISVMsIGtleSwgZm4sIHN1ZmZpeClcbiAgICAgICAgICAgICAgICA6IHByb21pc2lmaWVyKGZuKTtcbiAgICB9XG4gICAgdXRpbC50b0Zhc3RQcm9wZXJ0aWVzKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gcHJvbWlzaWZ5KGNhbGxiYWNrLCByZWNlaXZlcikge1xuICAgIHJldHVybiBtYWtlTm9kZVByb21pc2lmaWVkKGNhbGxiYWNrLCByZWNlaXZlciwgdm9pZCAwLCBjYWxsYmFjayk7XG59XG5cblByb21pc2UucHJvbWlzaWZ5ID0gZnVuY3Rpb24gUHJvbWlzZSRQcm9taXNpZnkoZm4sIHJlY2VpdmVyKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJmbiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGlmIChpc1Byb21pc2lmaWVkKGZuKSkge1xuICAgICAgICByZXR1cm4gZm47XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNpZnkoZm4sIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gVEhJUyA6IHJlY2VpdmVyKTtcbn07XG5cblByb21pc2UucHJvbWlzaWZ5QWxsID0gZnVuY3Rpb24gUHJvbWlzZSRQcm9taXNpZnlBbGwodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ0aGUgdGFyZ2V0IG9mIHByb21pc2lmeUFsbCBtdXN0IGJlIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBvcHRpb25zID0gT2JqZWN0KG9wdGlvbnMpO1xuICAgIHZhciBzdWZmaXggPSBvcHRpb25zLnN1ZmZpeDtcbiAgICBpZiAodHlwZW9mIHN1ZmZpeCAhPT0gXCJzdHJpbmdcIikgc3VmZml4ID0gZGVmYXVsdFN1ZmZpeDtcbiAgICB2YXIgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgIT09IFwiZnVuY3Rpb25cIikgZmlsdGVyID0gZGVmYXVsdEZpbHRlcjtcbiAgICB2YXIgcHJvbWlzaWZpZXIgPSBvcHRpb25zLnByb21pc2lmaWVyO1xuICAgIGlmICh0eXBlb2YgcHJvbWlzaWZpZXIgIT09IFwiZnVuY3Rpb25cIikgcHJvbWlzaWZpZXIgPSBtYWtlTm9kZVByb21pc2lmaWVkO1xuXG4gICAgaWYgKCF1dGlsLmlzSWRlbnRpZmllcihzdWZmaXgpKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwic3VmZml4IG11c3QgYmUgYSB2YWxpZCBpZGVudGlmaWVyXCIpO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gdXRpbC5pbmhlcml0ZWREYXRhS2V5cyh0YXJnZXQsIHtpbmNsdWRlSGlkZGVuOiB0cnVlfSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXlzW2ldXTtcbiAgICAgICAgaWYgKGtleXNbaV0gIT09IFwiY29uc3RydWN0b3JcIiAmJlxuICAgICAgICAgICAgdXRpbC5pc0NsYXNzKHZhbHVlKSkge1xuICAgICAgICAgICAgcHJvbWlzaWZ5QWxsKHZhbHVlLnByb3RvdHlwZSwgc3VmZml4LCBmaWx0ZXIsIHByb21pc2lmaWVyKTtcbiAgICAgICAgICAgIHByb21pc2lmeUFsbCh2YWx1ZSwgc3VmZml4LCBmaWx0ZXIsIHByb21pc2lmaWVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNpZnlBbGwodGFyZ2V0LCBzdWZmaXgsIGZpbHRlciwgcHJvbWlzaWZpZXIpO1xufTtcbn07XG5cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgY2FzdCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGFwaVJlamVjdGlvbiA9IHJlcXVpcmUoXCIuL2Vycm9yc19hcGlfcmVqZWN0aW9uXCIpKFByb21pc2UpO1xudmFyIGlzT2JqZWN0ID0gdXRpbC5pc09iamVjdDtcbnZhciBlczUgPSByZXF1aXJlKFwiLi9lczUuanNcIik7XG5cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkob2JqKSB7XG4gICAgdmFyIGtleXMgPSBlczUua2V5cyhvYmopO1xuICAgIHZhciBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbiAqIDIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhbHVlc1tpXSA9IG9ialtrZXldO1xuICAgICAgICB2YWx1ZXNbaSArIGxlbl0gPSBrZXk7XG4gICAgfVxuICAgIHRoaXMuY29uc3RydWN0b3IkKHZhbHVlcyk7XG59XG51dGlsLmluaGVyaXRzKFByb3BlcnRpZXNQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblByb3BlcnRpZXNQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID1cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkkX2luaXQoKSB7XG4gICAgdGhpcy5faW5pdCQodm9pZCAwLCAtMykgO1xufTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPVxuZnVuY3Rpb24gUHJvcGVydGllc1Byb21pc2VBcnJheSRfcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB2YXIgdmFsID0ge307XG4gICAgICAgIHZhciBrZXlPZmZzZXQgPSB0aGlzLmxlbmd0aCgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5sZW5ndGgoKTsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YWxbdGhpcy5fdmFsdWVzW2kgKyBrZXlPZmZzZXRdXSA9IHRoaXMuX3ZhbHVlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXNvbHZlKHZhbCk7XG4gICAgfVxufTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VQcm9ncmVzc2VkID1cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkkX3Byb21pc2VQcm9ncmVzc2VkKHZhbHVlLCBpbmRleCkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcblxuICAgIHRoaXMuX3Byb21pc2UuX3Byb2dyZXNzKHtcbiAgICAgICAga2V5OiB0aGlzLl92YWx1ZXNbaW5kZXggKyB0aGlzLmxlbmd0aCgpXSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59O1xuXG5Qcm9wZXJ0aWVzUHJvbWlzZUFycmF5LnByb3RvdHlwZS5zaG91bGRDb3B5VmFsdWVzID1cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkkX3Nob3VsZENvcHlWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuZ2V0QWN0dWFsTGVuZ3RoID1cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkkZ2V0QWN0dWFsTGVuZ3RoKGxlbikge1xuICAgIHJldHVybiBsZW4gPj4gMTtcbn07XG5cbmZ1bmN0aW9uIFByb21pc2UkX1Byb3BzKHByb21pc2VzKSB7XG4gICAgdmFyIHJldDtcbiAgICB2YXIgY2FzdFZhbHVlID0gY2FzdChwcm9taXNlcywgdm9pZCAwKTtcblxuICAgIGlmICghaXNPYmplY3QoY2FzdFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiY2Fubm90IGF3YWl0IHByb3BlcnRpZXMgb2YgYSBub24tb2JqZWN0XCIpO1xuICAgIH0gZWxzZSBpZiAoY2FzdFZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXQgPSBjYXN0VmFsdWUuX3RoZW4oUHJvbWlzZS5wcm9wcywgdm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgdm9pZCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBuZXcgUHJvcGVydGllc1Byb21pc2VBcnJheShjYXN0VmFsdWUpLnByb21pc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoY2FzdFZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXQuX3Byb3BhZ2F0ZUZyb20oY2FzdFZhbHVlLCA0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUucHJvcHMgPSBmdW5jdGlvbiBQcm9taXNlJHByb3BzKCkge1xuICAgIHJldHVybiBQcm9taXNlJF9Qcm9wcyh0aGlzKTtcbn07XG5cblByb21pc2UucHJvcHMgPSBmdW5jdGlvbiBQcm9taXNlJFByb3BzKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIFByb21pc2UkX1Byb3BzKHByb21pc2VzKTtcbn07XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG52YXIgaXNFUzUgPSAoZnVuY3Rpb24oKXtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICByZXR1cm4gdGhpcyA9PT0gdm9pZCAwO1xufSkoKTtcblxuaWYgKGlzRVM1KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGZyZWV6ZTogT2JqZWN0LmZyZWV6ZSxcbiAgICAgICAgZGVmaW5lUHJvcGVydHk6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgICAgICAga2V5czogT2JqZWN0LmtleXMsXG4gICAgICAgIGdldFByb3RvdHlwZU9mOiBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgICAgIGlzQXJyYXk6IEFycmF5LmlzQXJyYXksXG4gICAgICAgIGlzRVM1OiBpc0VTNVxuICAgIH07XG59IGVsc2Uge1xuICAgIHZhciBoYXMgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbiAgICB2YXIgc3RyID0ge30udG9TdHJpbmc7XG4gICAgdmFyIHByb3RvID0ge30uY29uc3RydWN0b3IucHJvdG90eXBlO1xuXG4gICAgdmFyIE9iamVjdEtleXMgPSBmdW5jdGlvbiBPYmplY3RLZXlzKG8pIHtcbiAgICAgICAgdmFyIHJldCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gbykge1xuICAgICAgICAgICAgaWYgKGhhcy5jYWxsKG8sIGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgdmFyIE9iamVjdERlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gT2JqZWN0RGVmaW5lUHJvcGVydHkobywga2V5LCBkZXNjKSB7XG4gICAgICAgIG9ba2V5XSA9IGRlc2MudmFsdWU7XG4gICAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIHZhciBPYmplY3RGcmVlemUgPSBmdW5jdGlvbiBPYmplY3RGcmVlemUob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgdmFyIE9iamVjdEdldFByb3RvdHlwZU9mID0gZnVuY3Rpb24gT2JqZWN0R2V0UHJvdG90eXBlT2Yob2JqKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0KG9iaikuY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgQXJyYXlJc0FycmF5ID0gZnVuY3Rpb24gQXJyYXlJc0FycmF5KG9iaikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgaXNBcnJheTogQXJyYXlJc0FycmF5LFxuICAgICAgICBrZXlzOiBPYmplY3RLZXlzLFxuICAgICAgICBkZWZpbmVQcm9wZXJ0eTogT2JqZWN0RGVmaW5lUHJvcGVydHksXG4gICAgICAgIGZyZWV6ZTogT2JqZWN0RnJlZXplLFxuICAgICAgICBnZXRQcm90b3R5cGVPZjogT2JqZWN0R2V0UHJvdG90eXBlT2YsXG4gICAgICAgIGlzRVM1OiBpc0VTNVxuICAgIH07XG59XG4iLCIoZnVuY3Rpb24ocHJvY2Vzcyl7LyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzY2hlZHVsZTtcbnZhciBfTXV0YXRpb25PYnNlcnZlcjtcbmlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcHJvY2Vzcy52ZXJzaW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgc2NoZWR1bGUgPSBmdW5jdGlvbiBQcm9taXNlJF9TY2hlZHVsZXIoZm4pIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbik7XG4gICAgfTtcbn1cbmVsc2UgaWYgKCh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgKF9NdXRhdGlvbk9ic2VydmVyID0gTXV0YXRpb25PYnNlcnZlcikpIHx8XG4gICAgICAgICAodHlwZW9mIFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgIChfTXV0YXRpb25PYnNlcnZlciA9IFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIpKSkge1xuICAgIHNjaGVkdWxlID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIHF1ZXVlZEZuID0gdm9pZCAwO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgX011dGF0aW9uT2JzZXJ2ZXIoXG4gICAgICAgICAgICBmdW5jdGlvbiBQcm9taXNlJF9TY2hlZHVsZXIoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWVkRm47XG4gICAgICAgICAgICAgICAgcXVldWVkRm4gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICApO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRpdiwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIFByb21pc2UkX1NjaGVkdWxlcihmbikge1xuICAgICAgICAgICAgcXVldWVkRm4gPSBmbjtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvb1wiKTtcbiAgICAgICAgfTtcblxuICAgIH0pKCk7XG59XG5lbHNlIGlmICh0eXBlb2Ygc2V0VGltZW91dCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHNjaGVkdWxlID0gZnVuY3Rpb24gUHJvbWlzZSRfU2NoZWR1bGVyKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59XG5lbHNlIHRocm93IG5ldyBFcnJvcihcIm5vIGFzeW5jIHNjaGVkdWxlciBhdmFpbGFibGVcIik7XG5tb2R1bGUuZXhwb3J0cyA9IHNjaGVkdWxlO1xuXG59KShyZXF1aXJlKFwiX19icm93c2VyaWZ5X3Byb2Nlc3NcIikpIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIGFycmF5Q29weShzcmMsIHNyY0luZGV4LCBkc3QsIGRzdEluZGV4LCBsZW4pIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGxlbjsgKytqKSB7XG4gICAgICAgIGRzdFtqICsgZHN0SW5kZXhdID0gc3JjW2ogKyBzcmNJbmRleF07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBRdWV1ZShjYXBhY2l0eSkge1xuICAgIHRoaXMuX2NhcGFjaXR5ID0gY2FwYWNpdHk7XG4gICAgdGhpcy5fbGVuZ3RoID0gMDtcbiAgICB0aGlzLl9mcm9udCA9IDA7XG4gICAgdGhpcy5fbWFrZUNhcGFjaXR5KCk7XG59XG5cblF1ZXVlLnByb3RvdHlwZS5fd2lsbEJlT3ZlckNhcGFjaXR5ID1cbmZ1bmN0aW9uIFF1ZXVlJF93aWxsQmVPdmVyQ2FwYWNpdHkoc2l6ZSkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eSA8IHNpemU7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUuX3B1c2hPbmUgPSBmdW5jdGlvbiBRdWV1ZSRfcHVzaE9uZShhcmcpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcbiAgICB0aGlzLl9jaGVja0NhcGFjaXR5KGxlbmd0aCArIDEpO1xuICAgIHZhciBpID0gKHRoaXMuX2Zyb250ICsgbGVuZ3RoKSAmICh0aGlzLl9jYXBhY2l0eSAtIDEpO1xuICAgIHRoaXNbaV0gPSBhcmc7XG4gICAgdGhpcy5fbGVuZ3RoID0gbGVuZ3RoICsgMTtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gUXVldWUkcHVzaChmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpICsgMztcbiAgICBpZiAodGhpcy5fd2lsbEJlT3ZlckNhcGFjaXR5KGxlbmd0aCkpIHtcbiAgICAgICAgdGhpcy5fcHVzaE9uZShmbik7XG4gICAgICAgIHRoaXMuX3B1c2hPbmUocmVjZWl2ZXIpO1xuICAgICAgICB0aGlzLl9wdXNoT25lKGFyZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGogPSB0aGlzLl9mcm9udCArIGxlbmd0aCAtIDM7XG4gICAgdGhpcy5fY2hlY2tDYXBhY2l0eShsZW5ndGgpO1xuICAgIHZhciB3cmFwTWFzayA9IHRoaXMuX2NhcGFjaXR5IC0gMTtcbiAgICB0aGlzWyhqICsgMCkgJiB3cmFwTWFza10gPSBmbjtcbiAgICB0aGlzWyhqICsgMSkgJiB3cmFwTWFza10gPSByZWNlaXZlcjtcbiAgICB0aGlzWyhqICsgMikgJiB3cmFwTWFza10gPSBhcmc7XG4gICAgdGhpcy5fbGVuZ3RoID0gbGVuZ3RoO1xufTtcblxuUXVldWUucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gUXVldWUkc2hpZnQoKSB7XG4gICAgdmFyIGZyb250ID0gdGhpcy5fZnJvbnQsXG4gICAgICAgIHJldCA9IHRoaXNbZnJvbnRdO1xuXG4gICAgdGhpc1tmcm9udF0gPSB2b2lkIDA7XG4gICAgdGhpcy5fZnJvbnQgPSAoZnJvbnQgKyAxKSAmICh0aGlzLl9jYXBhY2l0eSAtIDEpO1xuICAgIHRoaXMuX2xlbmd0aC0tO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24gUXVldWUkbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUuX21ha2VDYXBhY2l0eSA9IGZ1bmN0aW9uIFF1ZXVlJF9tYWtlQ2FwYWNpdHkoKSB7XG4gICAgdmFyIGxlbiA9IHRoaXMuX2NhcGFjaXR5O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgdGhpc1tpXSA9IHZvaWQgMDtcbiAgICB9XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUuX2NoZWNrQ2FwYWNpdHkgPSBmdW5jdGlvbiBRdWV1ZSRfY2hlY2tDYXBhY2l0eShzaXplKSB7XG4gICAgaWYgKHRoaXMuX2NhcGFjaXR5IDwgc2l6ZSkge1xuICAgICAgICB0aGlzLl9yZXNpemVUbyh0aGlzLl9jYXBhY2l0eSA8PCAzKTtcbiAgICB9XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUuX3Jlc2l6ZVRvID0gZnVuY3Rpb24gUXVldWUkX3Jlc2l6ZVRvKGNhcGFjaXR5KSB7XG4gICAgdmFyIG9sZEZyb250ID0gdGhpcy5fZnJvbnQ7XG4gICAgdmFyIG9sZENhcGFjaXR5ID0gdGhpcy5fY2FwYWNpdHk7XG4gICAgdmFyIG9sZFF1ZXVlID0gbmV3IEFycmF5KG9sZENhcGFjaXR5KTtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcblxuICAgIGFycmF5Q29weSh0aGlzLCAwLCBvbGRRdWV1ZSwgMCwgb2xkQ2FwYWNpdHkpO1xuICAgIHRoaXMuX2NhcGFjaXR5ID0gY2FwYWNpdHk7XG4gICAgdGhpcy5fbWFrZUNhcGFjaXR5KCk7XG4gICAgdGhpcy5fZnJvbnQgPSAwO1xuICAgIGlmIChvbGRGcm9udCArIGxlbmd0aCA8PSBvbGRDYXBhY2l0eSkge1xuICAgICAgICBhcnJheUNvcHkob2xkUXVldWUsIG9sZEZyb250LCB0aGlzLCAwLCBsZW5ndGgpO1xuICAgIH0gZWxzZSB7ICAgICAgICB2YXIgbGVuZ3RoQmVmb3JlV3JhcHBpbmcgPVxuICAgICAgICAgICAgbGVuZ3RoIC0gKChvbGRGcm9udCArIGxlbmd0aCkgJiAob2xkQ2FwYWNpdHkgLSAxKSk7XG5cbiAgICAgICAgYXJyYXlDb3B5KG9sZFF1ZXVlLCBvbGRGcm9udCwgdGhpcywgMCwgbGVuZ3RoQmVmb3JlV3JhcHBpbmcpO1xuICAgICAgICBhcnJheUNvcHkob2xkUXVldWUsIDAsIHRoaXMsIGxlbmd0aEJlZm9yZVdyYXBwaW5nLFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGggLSBsZW5ndGhCZWZvcmVXcmFwcGluZyk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcbiJdfQ==
;