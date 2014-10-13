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
},{"./util/component-loader":2,"./core/options":3,"./core/lang":4,"./core/state-guard":5,"./core/pub-sub":6,"./core/sequencer/unit-sequencer":7,"./core/sequencer/clock-sequencer":8,"./core/sequencer/delegating-composite-sequencer":9,"./core/sequencer/delegating-forwarding-sequencer":10,"./collection/doubly-linked-list":11,"./collection/object-hash-map":12,"./collection/lru-hash-map":13,"./storage/caching-data-store":14,"./storage/in-memory-data-store":15,"./storage/lru-data-store":16,"./time/clock/logical-clock":17,"./time/clock/system-clock":18,"./appkit/configuration-magic":19,"./appkit/config/scoped-configuration-resolver":20,"./appkit/config/scoped-configuration":21,"./appkit/app":22,"./logging/logger":23,"./logging/appenders/console-log-appender":24,"./reactive/reactor":25,"./util/component-registry":26,"./web":27,"./node":28,"./core/ref":29,"./runtime":30}],28:[function(require,module,exports){
module.exports = function(c) {};

},{}],27:[function(require,module,exports){
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

},{"./appkit/bootstrapper":31,"./appkit/web-app-container":32,"./scheduler/web-scheduler":33,"./browserify2-list":34}],30:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

module.exports = require("./default-runtime");

})()
},{"./default-runtime":35}],34:[function(require,module,exports){
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
},{"./appkit/app.js":22,"./appkit/bootstrapper.js":31,"./appkit/config/scoped-configuration-resolver.js":20,"./appkit/config/scoped-configuration.js":21,"./appkit/configuration-magic.js":19,"./appkit/internal/process-keep-alive.js":36,"./appkit/web-app-container.js":32,"./collection/doubly-linked-list.js":11,"./collection/lru-hash-map.js":13,"./collection/object-hash-map.js":12,"./core/lang.js":4,"./core/options.js":3,"./core/pub-sub.js":6,"./core/ref/delegating-ref.js":37,"./core/ref/index.js":29,"./core/ref/ref.js":38,"./core/scheduler/set-timeout-scheduler.js":39,"./core/sequencer/clock-sequencer.js":8,"./core/sequencer/delegating-composite-sequencer.js":9,"./core/sequencer/delegating-forwarding-sequencer.js":10,"./core/sequencer/unit-sequencer.js":7,"./core/state-guard.js":5,"./index.js":1,"./logging/appenders/console-log-appender.js":24,"./logging/logger.js":23,"./node.js":28,"./reactive/filter-transform.js":40,"./reactive/map-transform.js":41,"./reactive/reactive-node.js":42,"./reactive/reactor.js":25,"./reactive/transform-chain.js":43,"./reactive/transform.js":44,"./runtime/default-runtime.js":35,"./runtime/index.js":30,"./scheduler/index.js":45,"./scheduler/web-scheduler.js":33,"./storage/caching-data-store.js":14,"./storage/in-memory-data-store.js":15,"./storage/lru-data-store.js":16,"./time/clock/logical-clock.js":17,"./time/clock/system-clock.js":18,"./util/component-loader.js":2,"./util/component-registry.js":26,"./web.js":27}],45:[function(require,module,exports){
"use strict";

module.exports = require("./web-scheduler");

},{"./web-scheduler":33}],2:[function(require,module,exports){
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
},{"../core/options":3,"underscore":46}],3:[function(require,module,exports){
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
},{"underscore":46}],4:[function(require,module,exports){
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
},{"underscore":46}],5:[function(require,module,exports){
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
},{"underscore":46,"bluebird":47}],6:[function(require,module,exports){
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
},{"underscore":46}],11:[function(require,module,exports){
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
},{"../core/options":3,"underscore":46}],12:[function(require,module,exports){
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
},{"../core/options":3,"underscore":46}],13:[function(require,module,exports){
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
},{"../core/options":3,"./object-hash-map":12,"./doubly-linked-list":11,"underscore":46}],14:[function(require,module,exports){
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
},{"../core/options":3,"./in-memory-data-store":15,"../core/sequencer/unit-sequencer":7,"underscore":46,"bluebird":47}],15:[function(require,module,exports){
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
},{"../core/options":3,"../collection/object-hash-map":12,"underscore":46,"bluebird":47}],16:[function(require,module,exports){
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
},{"../core/options":3,"./in-memory-data-store":15,"../collection/lru-hash-map":13,"underscore":46}],19:[function(require,module,exports){
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
},{"./config/scoped-configuration-resolver":20,"underscore":46}],22:[function(require,module,exports){
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
},{"../logging/logger":23,"../core/options":3,"../core/state-guard":5,"./internal/process-keep-alive":36,"../runtime":30,"underscore":46,"bluebird":47}],23:[function(require,module,exports){
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
},{"../core/options":3,"../core/ref":29,"underscore":46}],25:[function(require,module,exports){
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
},{"../core/options":3,"./reactive-node":42,"../core/ref":29,"../scheduler":45,"underscore":46}],26:[function(require,module,exports){
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
},{"../core/options":3,"underscore":46}],46:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{"../options":3,"underscore":46,"bluebird":47}],8:[function(require,module,exports){
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
},{"../options":3,"underscore":46,"bluebird":47}],9:[function(require,module,exports){
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
},{"../options":3,"underscore":46,"bluebird":47}],10:[function(require,module,exports){
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
},{"../options":3,"underscore":46,"bluebird":47}],17:[function(require,module,exports){
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
},{"../../core/options":3,"underscore":46,"bluebird":47}],18:[function(require,module,exports){
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
},{"underscore":46,"bluebird":47}],20:[function(require,module,exports){
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
},{"./scoped-configuration":21,"underscore":46}],21:[function(require,module,exports){
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
},{"underscore":46}],24:[function(require,module,exports){
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
},{"../../core/options":3,"underscore":46}],29:[function(require,module,exports){
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
},{"./ref":38,"./delegating-ref":37,"underscore":46}],47:[function(require,module,exports){
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
},{"./promise.js":48}],31:[function(require,module,exports){
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

},{"../core/options":3,"../logging/logger":23,"./configuration-magic":19,"./web-app-container":32,"underscore":46,"bluebird":47}],32:[function(require,module,exports){
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
},{"../core/options":3,"../logging/logger":23,"underscore":46,"bluebird":47}],33:[function(require,module,exports){
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

},{"underscore":46}],42:[function(require,module,exports){
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
},{"../core/options":3,"../core/pub-sub":6,"./transform-chain":43,"./map-transform":41,"./filter-transform":40,"underscore":46}],35:[function(require,module,exports){
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
},{"../core/options":3,"../core/scheduler/set-timeout-scheduler":39,"../core/ref":29,"underscore":46}],36:[function(require,module,exports){
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
},{"../../logging/logger":23,"../../core/options":3,"underscore":46}],38:[function(require,module,exports){
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
},{"underscore":46}],37:[function(require,module,exports){
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
},{"underscore":46}],49:[function(require,module,exports){
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

},{}],48:[function(require,module,exports){
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
},{"./util.js":50,"./async.js":51,"./errors.js":52,"./thenables.js":53,"./promise_array.js":54,"./captured_trace.js":55,"./catch_filter.js":56,"./promise_resolver.js":57,"./finally.js":58,"./direct_resolve.js":59,"./synchronous_inspection.js":60,"./join.js":61,"./timers.js":62,"./race.js":63,"./call_get.js":64,"./generators.js":65,"./map.js":66,"./nodeify.js":67,"./promisify.js":68,"./props.js":69,"./reduce.js":70,"./settle.js":71,"./some.js":72,"./progress.js":73,"./cancel.js":74,"./filter.js":75,"./any.js":76,"./each.js":77,"./using.js":78,"./errors_api_rejection":79,"__browserify_process":49}],40:[function(require,module,exports){
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
},{"./transform":44,"underscore":46}],41:[function(require,module,exports){
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
},{"./transform":44,"underscore":46}],43:[function(require,module,exports){
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
},{"../core/pub-sub":6,"./transform":44,"underscore":46}],44:[function(require,module,exports){
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
},{"../core/pub-sub":6,"underscore":46}],60:[function(require,module,exports){
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

},{}],75:[function(require,module,exports){
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
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;

Promise.prototype.each = function Promise$each(fn) {
    return PromiseReduce(this, fn, null, INTERNAL);
};

Promise.each = function Promise$Each(promises, fn) {
    return PromiseReduce(promises, fn, null, INTERNAL);
};
};

},{}],39:[function(require,module,exports){
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

},{"underscore":46}],50:[function(require,module,exports){
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

},{"./es5.js":80}],51:[function(require,module,exports){
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
},{"./schedule.js":81,"./queue.js":82,"./util.js":50,"__browserify_process":49}],52:[function(require,module,exports){
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

},{"./es5.js":80,"./util.js":50}],53:[function(require,module,exports){
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

},{"./util.js":50,"./errors.js":52}],54:[function(require,module,exports){
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

},{"./errors.js":52,"./util.js":50}],55:[function(require,module,exports){
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
},{"./util.js":50,"./es5.js":80}],56:[function(require,module,exports){
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

},{"./util.js":50,"./errors.js":52,"./es5.js":80}],57:[function(require,module,exports){
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

},{"./util.js":50,"./errors.js":52,"./async.js":51,"./es5.js":80}],58:[function(require,module,exports){
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

},{"./util.js":50}],59:[function(require,module,exports){
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

},{"./util.js":50}],61:[function(require,module,exports){
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

},{"./util.js":50}],63:[function(require,module,exports){
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

},{"./errors_api_rejection.js":79,"./util.js":50}],64:[function(require,module,exports){
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

},{"./util.js":50}],65:[function(require,module,exports){
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

},{"./errors.js":52,"./util.js":50}],66:[function(require,module,exports){
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

},{"./util.js":50}],67:[function(require,module,exports){
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

},{"./util.js":50,"./async.js":51}],70:[function(require,module,exports){
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

},{"./util.js":50}],71:[function(require,module,exports){
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

},{"./util.js":50}],72:[function(require,module,exports){
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

},{"./util.js":50,"./errors.js":52}],73:[function(require,module,exports){
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

},{"./util.js":50,"./async.js":51,"./errors.js":52}],74:[function(require,module,exports){
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

},{"./errors.js":52,"./async.js":51}],78:[function(require,module,exports){
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

},{"./errors.js":52,"./util.js":50}],79:[function(require,module,exports){
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

},{"./errors.js":52}],62:[function(require,module,exports){
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

},{"./util.js":50,"./errors.js":52,"./errors_api_rejection":79}],68:[function(require,module,exports){
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


},{"./util.js":50,"./promise_resolver.js":57,"./errors":52}],69:[function(require,module,exports){
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

},{"./util.js":50,"./es5.js":80,"./errors_api_rejection":79}],80:[function(require,module,exports){
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

},{}],81:[function(require,module,exports){
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
},{"__browserify_process":49}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvaW5kZXguanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L25vZGUuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L3dlYi5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvcnVudGltZS9pbmRleC5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvYnJvd3NlcmlmeTItbGlzdC5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvc2NoZWR1bGVyL2luZGV4LmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC91dGlsL2NvbXBvbmVudC1sb2FkZXIuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L2NvcmUvb3B0aW9ucy5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvY29yZS9sYW5nLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9jb3JlL3N0YXRlLWd1YXJkLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9jb3JlL3B1Yi1zdWIuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L2NvbGxlY3Rpb24vZG91Ymx5LWxpbmtlZC1saXN0LmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9jb2xsZWN0aW9uL29iamVjdC1oYXNoLW1hcC5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvY29sbGVjdGlvbi9scnUtaGFzaC1tYXAuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L3N0b3JhZ2UvY2FjaGluZy1kYXRhLXN0b3JlLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9zdG9yYWdlL2luLW1lbW9yeS1kYXRhLXN0b3JlLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9zdG9yYWdlL2xydS1kYXRhLXN0b3JlLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9hcHBraXQvY29uZmlndXJhdGlvbi1tYWdpYy5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvYXBwa2l0L2FwcC5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvbG9nZ2luZy9sb2dnZXIuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L3JlYWN0aXZlL3JlYWN0b3IuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L3V0aWwvY29tcG9uZW50LXJlZ2lzdHJ5LmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL3VuZGVyc2NvcmUuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L2NvcmUvc2VxdWVuY2VyL3VuaXQtc2VxdWVuY2VyLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9jb3JlL3NlcXVlbmNlci9jbG9jay1zZXF1ZW5jZXIuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L2NvcmUvc2VxdWVuY2VyL2RlbGVnYXRpbmctY29tcG9zaXRlLXNlcXVlbmNlci5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvY29yZS9zZXF1ZW5jZXIvZGVsZWdhdGluZy1mb3J3YXJkaW5nLXNlcXVlbmNlci5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvdGltZS9jbG9jay9sb2dpY2FsLWNsb2NrLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC90aW1lL2Nsb2NrL3N5c3RlbS1jbG9jay5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvYXBwa2l0L2NvbmZpZy9zY29wZWQtY29uZmlndXJhdGlvbi1yZXNvbHZlci5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvYXBwa2l0L2NvbmZpZy9zY29wZWQtY29uZmlndXJhdGlvbi5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvbG9nZ2luZy9hcHBlbmRlcnMvY29uc29sZS1sb2ctYXBwZW5kZXIuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L2NvcmUvcmVmL2luZGV4LmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2JsdWViaXJkLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9hcHBraXQvYm9vdHN0cmFwcGVyLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9hcHBraXQvd2ViLWFwcC1jb250YWluZXIuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L3NjaGVkdWxlci93ZWItc2NoZWR1bGVyLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9yZWFjdGl2ZS9yZWFjdGl2ZS1ub2RlLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9ydW50aW1lL2RlZmF1bHQtcnVudGltZS5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvYXBwa2l0L2ludGVybmFsL3Byb2Nlc3Mta2VlcC1hbGl2ZS5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvY29yZS9yZWYvcmVmLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9jb3JlL3JlZi9kZWxlZ2F0aW5nLXJlZi5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvZ3J1bnQtYnJvd3NlcmlmeTIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3Byb21pc2UuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L3JlYWN0aXZlL2ZpbHRlci10cmFuc2Zvcm0uanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L3JlYWN0aXZlL21hcC10cmFuc2Zvcm0uanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbGliLXdlYi90aGlja2V0L3JlYWN0aXZlL3RyYW5zZm9ybS1jaGFpbi5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9saWItd2ViL3RoaWNrZXQvcmVhY3RpdmUvdHJhbnNmb3JtLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3N5bmNocm9ub3VzX2luc3BlY3Rpb24uanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vZmlsdGVyLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2FueS5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9lYWNoLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L2xpYi13ZWIvdGhpY2tldC9jb3JlL3NjaGVkdWxlci9zZXQtdGltZW91dC1zY2hlZHVsZXIuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vdXRpbC5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9hc3luYy5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9lcnJvcnMuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vdGhlbmFibGVzLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3Byb21pc2VfYXJyYXkuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vY2FwdHVyZWRfdHJhY2UuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vY2F0Y2hfZmlsdGVyLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3Byb21pc2VfcmVzb2x2ZXIuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vZmluYWxseS5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9kaXJlY3RfcmVzb2x2ZS5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9qb2luLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3JhY2UuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vY2FsbF9nZXQuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vZ2VuZXJhdG9ycy5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9tYXAuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vbm9kZWlmeS5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9yZWR1Y2UuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vc2V0dGxlLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3NvbWUuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vcHJvZ3Jlc3MuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vY2FuY2VsLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3VzaW5nLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2Vycm9yc19hcGlfcmVqZWN0aW9uLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3RpbWVycy5qcyIsIi9Vc2Vycy9tYXNlYi9JZGVhUHJvamVjdHMvdGhpY2tldC9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9wcm9taXNpZnkuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vcHJvcHMuanMiLCIvVXNlcnMvbWFzZWIvSWRlYVByb2plY3RzL3RoaWNrZXQvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vZXM1LmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3F1ZXVlLmpzIiwiL1VzZXJzL21hc2ViL0lkZWFQcm9qZWN0cy90aGlja2V0L25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3NjaGVkdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsS0E7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIENvbXBvbmVudFJlZ2lzdHJ5LFxuICB3ZWJBbGlhc2VzLFxuICBub2RlQWxpYXNlc1xuKSB7XG4gIHZhciBjID0gbmV3IENvbXBvbmVudFJlZ2lzdHJ5KCk7XG5cblxuICBjLnJlZ2lzdGVyTWFueShbXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi91dGlsL2NvbXBvbmVudC1sb2FkZXJcIiksXG4gICAgICBhczogXCJjb21wb25lbnQtbG9hZGVyXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9jb3JlL29wdGlvbnNcIiksXG4gICAgICBhczogXCJvcHRpb25zXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9jb3JlL2xhbmdcIiksXG4gICAgICBhczogXCJsYW5nXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9jb3JlL3JlZlwiKSxcbiAgICAgIGFzOiBcInJlZlwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIG1vZHVsZTogcmVxdWlyZShcIi4vY29yZS9zdGF0ZS1ndWFyZFwiKSxcbiAgICAgIGFzOiBcInN0YXRlLWd1YXJkXCJcbiAgICB9LFxuXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2NvcmUvcHViLXN1YlwiKSxcbiAgICAgIGFzOiBcInB1Yi1zdWJcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2NvcmUvc2VxdWVuY2VyL3VuaXQtc2VxdWVuY2VyXCIpLFxuICAgICAgYXM6IFtcInVuaXQtc2VxdWVuY2VyXCIsIFwic2VxdWVuY2VyXCJdXG4gICAgfSxcblxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9jb3JlL3NlcXVlbmNlci9jbG9jay1zZXF1ZW5jZXJcIiksXG4gICAgICBhczogXCJjbG9jay1zZXF1ZW5jZXJcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2NvcmUvc2VxdWVuY2VyL2RlbGVnYXRpbmctY29tcG9zaXRlLXNlcXVlbmNlclwiKSxcbiAgICAgIGFzOiBcImRlbGVnYXRpbmctY29tcG9zaXRlLXNlcXVlbmNlclwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIG1vZHVsZTogcmVxdWlyZShcIi4vY29yZS9zZXF1ZW5jZXIvZGVsZWdhdGluZy1mb3J3YXJkaW5nLXNlcXVlbmNlclwiKSxcbiAgICAgIGFzOiBcImRlbGVnYXRpbmctZm9yd2FyZGluZy1zZXF1ZW5jZXJcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2NvbGxlY3Rpb24vZG91Ymx5LWxpbmtlZC1saXN0XCIpLFxuICAgICAgYXM6IFwiZG91Ymx5LWxpbmtlZC1saXN0XCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9jb2xsZWN0aW9uL29iamVjdC1oYXNoLW1hcFwiKSxcbiAgICAgIGFzOiBbXCJoYXNoLW1hcFwiLCBcIm9iamVjdC1oYXNoLW1hcFwiXVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2NvbGxlY3Rpb24vbHJ1LWhhc2gtbWFwXCIpLFxuICAgICAgYXM6IFwibHJ1LWhhc2gtbWFwXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9zdG9yYWdlL2NhY2hpbmctZGF0YS1zdG9yZVwiKSxcbiAgICAgIGFzOiBcImNhY2hpbmctZGF0YS1zdG9yZVwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIG1vZHVsZTogcmVxdWlyZShcIi4vc3RvcmFnZS9pbi1tZW1vcnktZGF0YS1zdG9yZVwiKSxcbiAgICAgIGFzOiBcImluLW1lbW9yeS1kYXRhLXN0b3JlXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9zdG9yYWdlL2xydS1kYXRhLXN0b3JlXCIpLFxuICAgICAgYXM6IFwibHJ1LWRhdGEtc3RvcmVcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL3RpbWUvY2xvY2svbG9naWNhbC1jbG9ja1wiKSxcbiAgICAgIGFzOiBcImxvZ2ljYWwtY2xvY2tcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL3RpbWUvY2xvY2svc3lzdGVtLWNsb2NrXCIpLFxuICAgICAgYXM6IFwic3lzdGVtLWNsb2NrXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9hcHBraXQvY29uZmlndXJhdGlvbi1tYWdpY1wiKSxcbiAgICAgIGFzOiBcImNvbmZpZ3VyYXRpb24tbWFnaWNcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2FwcGtpdC9jb25maWcvc2NvcGVkLWNvbmZpZ3VyYXRpb24tcmVzb2x2ZXJcIiksXG4gICAgICBhczogXCJzY29wZWQtY29uZmlndXJhdGlvbi1yZXNvbHZlclwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIG1vZHVsZTogcmVxdWlyZShcIi4vYXBwa2l0L2NvbmZpZy9zY29wZWQtY29uZmlndXJhdGlvblwiKSxcbiAgICAgIGFzOiBbXCJzY29wZWQtY29uZmlndXJhdGlvblwiLCBcImNvbmZpZy9zY29wZWQtY29uZmlndXJhdGlvblwiXVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2FwcGtpdC9hcHBcIiksXG4gICAgICBhczogXCJhcHBcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL3J1bnRpbWVcIiksXG4gICAgICBhczogXCJydW50aW1lXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9sb2dnaW5nL2xvZ2dlclwiKSxcbiAgICAgIGFzOiBcImxvZ2dlclwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIG1vZHVsZTogcmVxdWlyZShcIi4vbG9nZ2luZy9hcHBlbmRlcnMvY29uc29sZS1sb2ctYXBwZW5kZXJcIiksXG4gICAgICBhczogW1wiYXBwZW5kZXJzL2NvbnNvbGUtbG9nXCIsIFwiY29uc29sZS1sb2ctYXBwZW5kZXJcIl1cbiAgICB9LFxuXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9yZWFjdGl2ZS9yZWFjdG9yXCIpLFxuICAgICAgYXM6IFwicmVhY3RvclwiXG4gICAgfVxuICBdKTtcblxuICBjLnNlbGZSZWdpc3Rlcih7XG4gICAgYXM6IFwiY29tcG9uZW50LXJlZ2lzdHJ5XCJcbiAgfSk7XG5cbiAgd2ViQWxpYXNlcyhjKTtcbiAgbm9kZUFsaWFzZXMoYyk7XG5cbiAgcmV0dXJuIGM7XG59O1xuXG52YXIgZyA9ICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8ge30gOiB3aW5kb3cpO1xuZy50aGlja2V0ID0gbW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCIuL3V0aWwvY29tcG9uZW50LXJlZ2lzdHJ5XCIpLFxuICByZXF1aXJlKFwiLi93ZWJcIiksXG4gIHJlcXVpcmUoXCIuL25vZGVcIilcbik7XG5cbn0pKCkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGMpIHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjKSB7XG4gIGMucmVnaXN0ZXJNYW55KFtcbiAgICB7XG4gICAgICBtb2R1bGU6IHJlcXVpcmUoXCIuL2FwcGtpdC9ib290c3RyYXBwZXJcIiksXG4gICAgICBhczogXCJib290c3RyYXBwZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgbW9kdWxlOiByZXF1aXJlKFwiLi9hcHBraXQvd2ViLWFwcC1jb250YWluZXJcIiksXG4gICAgICBhczogXCJhcHAtY29udGFpbmVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG1vZHVsZTogcmVxdWlyZShcIi4vc2NoZWR1bGVyL3dlYi1zY2hlZHVsZXJcIiksXG4gICAgICBhczogXCJzY2hlZHVsZXJcIlxuICAgIH1cbiAgXSk7XG5cbiAgcmVxdWlyZShcIi4vYnJvd3NlcmlmeTItbGlzdFwiKTtcbn07XG4iLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZGVmYXVsdC1ydW50aW1lXCIpO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7cmVxdWlyZShcIi4vYXBwa2l0L2FwcC5qc1wiKTtcbnJlcXVpcmUoXCIuL2FwcGtpdC9ib290c3RyYXBwZXIuanNcIik7XG5yZXF1aXJlKFwiLi9hcHBraXQvY29uZmlnL3Njb3BlZC1jb25maWd1cmF0aW9uLXJlc29sdmVyLmpzXCIpO1xucmVxdWlyZShcIi4vYXBwa2l0L2NvbmZpZy9zY29wZWQtY29uZmlndXJhdGlvbi5qc1wiKTtcbnJlcXVpcmUoXCIuL2FwcGtpdC9jb25maWd1cmF0aW9uLW1hZ2ljLmpzXCIpO1xucmVxdWlyZShcIi4vYXBwa2l0L2ludGVybmFsL3Byb2Nlc3Mta2VlcC1hbGl2ZS5qc1wiKTtcbnJlcXVpcmUoXCIuL2FwcGtpdC93ZWItYXBwLWNvbnRhaW5lci5qc1wiKTtcbnJlcXVpcmUoXCIuL2NvbGxlY3Rpb24vZG91Ymx5LWxpbmtlZC1saXN0LmpzXCIpO1xucmVxdWlyZShcIi4vY29sbGVjdGlvbi9scnUtaGFzaC1tYXAuanNcIik7XG5yZXF1aXJlKFwiLi9jb2xsZWN0aW9uL29iamVjdC1oYXNoLW1hcC5qc1wiKTtcbnJlcXVpcmUoXCIuL2NvcmUvbGFuZy5qc1wiKTtcbnJlcXVpcmUoXCIuL2NvcmUvb3B0aW9ucy5qc1wiKTtcbnJlcXVpcmUoXCIuL2NvcmUvcHViLXN1Yi5qc1wiKTtcbnJlcXVpcmUoXCIuL2NvcmUvcmVmL2RlbGVnYXRpbmctcmVmLmpzXCIpO1xucmVxdWlyZShcIi4vY29yZS9yZWYvaW5kZXguanNcIik7XG5yZXF1aXJlKFwiLi9jb3JlL3JlZi9yZWYuanNcIik7XG5yZXF1aXJlKFwiLi9jb3JlL3NjaGVkdWxlci9zZXQtdGltZW91dC1zY2hlZHVsZXIuanNcIik7XG5yZXF1aXJlKFwiLi9jb3JlL3NlcXVlbmNlci9jbG9jay1zZXF1ZW5jZXIuanNcIik7XG5yZXF1aXJlKFwiLi9jb3JlL3NlcXVlbmNlci9kZWxlZ2F0aW5nLWNvbXBvc2l0ZS1zZXF1ZW5jZXIuanNcIik7XG5yZXF1aXJlKFwiLi9jb3JlL3NlcXVlbmNlci9kZWxlZ2F0aW5nLWZvcndhcmRpbmctc2VxdWVuY2VyLmpzXCIpO1xucmVxdWlyZShcIi4vY29yZS9zZXF1ZW5jZXIvdW5pdC1zZXF1ZW5jZXIuanNcIik7XG5yZXF1aXJlKFwiLi9jb3JlL3N0YXRlLWd1YXJkLmpzXCIpO1xucmVxdWlyZShcIi4vaW5kZXguanNcIik7XG5yZXF1aXJlKFwiLi9sb2dnaW5nL2FwcGVuZGVycy9jb25zb2xlLWxvZy1hcHBlbmRlci5qc1wiKTtcbnJlcXVpcmUoXCIuL2xvZ2dpbmcvbG9nZ2VyLmpzXCIpO1xucmVxdWlyZShcIi4vbm9kZS5qc1wiKTtcbnJlcXVpcmUoXCIuL3JlYWN0aXZlL2ZpbHRlci10cmFuc2Zvcm0uanNcIik7XG5yZXF1aXJlKFwiLi9yZWFjdGl2ZS9tYXAtdHJhbnNmb3JtLmpzXCIpO1xucmVxdWlyZShcIi4vcmVhY3RpdmUvcmVhY3RpdmUtbm9kZS5qc1wiKTtcbnJlcXVpcmUoXCIuL3JlYWN0aXZlL3JlYWN0b3IuanNcIik7XG5yZXF1aXJlKFwiLi9yZWFjdGl2ZS90cmFuc2Zvcm0tY2hhaW4uanNcIik7XG5yZXF1aXJlKFwiLi9yZWFjdGl2ZS90cmFuc2Zvcm0uanNcIik7XG5yZXF1aXJlKFwiLi9ydW50aW1lL2RlZmF1bHQtcnVudGltZS5qc1wiKTtcbnJlcXVpcmUoXCIuL3J1bnRpbWUvaW5kZXguanNcIik7XG5yZXF1aXJlKFwiLi9zY2hlZHVsZXIvaW5kZXguanNcIik7XG5yZXF1aXJlKFwiLi9zY2hlZHVsZXIvd2ViLXNjaGVkdWxlci5qc1wiKTtcbnJlcXVpcmUoXCIuL3N0b3JhZ2UvY2FjaGluZy1kYXRhLXN0b3JlLmpzXCIpO1xucmVxdWlyZShcIi4vc3RvcmFnZS9pbi1tZW1vcnktZGF0YS1zdG9yZS5qc1wiKTtcbnJlcXVpcmUoXCIuL3N0b3JhZ2UvbHJ1LWRhdGEtc3RvcmUuanNcIik7XG5yZXF1aXJlKFwiLi90aW1lL2Nsb2NrL2xvZ2ljYWwtY2xvY2suanNcIik7XG5yZXF1aXJlKFwiLi90aW1lL2Nsb2NrL3N5c3RlbS1jbG9jay5qc1wiKTtcbnJlcXVpcmUoXCIuL3V0aWwvY29tcG9uZW50LWxvYWRlci5qc1wiKTtcbnJlcXVpcmUoXCIuL3V0aWwvY29tcG9uZW50LXJlZ2lzdHJ5LmpzXCIpO1xucmVxdWlyZShcIi4vd2ViLmpzXCIpO1xuXG59KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vd2ViLXNjaGVkdWxlclwiKTtcbiIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGZhY3RvcnkgPSBmdW5jdGlvbihcbiAgXyxcbiAgT3B0aW9uc1xuKSB7XG4gIHZhciBDb21wb25lbnRMb2FkZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChDb21wb25lbnRMb2FkZXIucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ocmVxdWlyZUZ1bikge1xuICAgICAgdGhpcy5fcmVxdWlyZUZ1biA9IHJlcXVpcmVGdW47XG4gICAgICB0aGlzLl9hbGlhc2VzID0ge307XG4gICAgICB0aGlzLl9wYXRoVHJhbnNmb3JtID0gZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGlkO307XG4gICAgfSxcblxuICAgIHNldFBhdGhUcmFuc2Zvcm06IGZ1bmN0aW9uKHBhdGhUcmFuc2Zvcm0pIHtcbiAgICAgIHRoaXMuX3BhdGhUcmFuc2Zvcm0gPSBwYXRoVHJhbnNmb3JtO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGFsaWFzOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdmFyIGFsaWFzTmFtZSAgPSBvcHRzLmdldE9yRXJyb3IoXCJhc1wiKTtcbiAgICAgIHRoaXMuX2FsaWFzZXNbYWxpYXNOYW1lXSA9IG9wdHMuZ2V0T3JFcnJvcihcIm1vZHVsZVwiKTtcbiAgICB9LFxuXG4gICAgYnVsa0FsaWFzOiBmdW5jdGlvbihhbGlhc2VzKSB7XG4gICAgICBfLmVhY2goYWxpYXNlcywgZnVuY3Rpb24oYWxpYXNOYW1lcywgbW9kdWxlTmFtZSkge1xuICAgICAgICBpZiAoIV8uaXNBcnJheShhbGlhc05hbWVzKSkge1xuICAgICAgICAgIGFsaWFzTmFtZXMgPSBbYWxpYXNOYW1lc11cbiAgICAgICAgfVxuICAgICAgICBfLmVhY2goYWxpYXNOYW1lcywgZnVuY3Rpb24oYWxpYXNOYW1lKSB7XG4gICAgICAgICAgdGhpcy5hbGlhcyh7bW9kdWxlOiBtb2R1bGVOYW1lLCBhczogYWxpYXNOYW1lfSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudDogZnVuY3Rpb24oYWxpYXMpIHtcbiAgICAgIHZhciBtb2QgPSB0aGlzLl9hbGlhc2VzW2FsaWFzXTtcbiAgICAgIGlmICghbW9kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYWxpYXMgcHJvdmlkZWQgKG5vIHN1Y2ggbW9kdWxlKTogYFwiK2FsaWFzK1wiJ1wiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9yZXF1aXJlRnVuKHRoaXMuX3BhdGhUcmFuc2Zvcm0obW9kKSk7XG4gICAgfSxcblxuICAgIGM6IGZ1bmN0aW9uKGFsaWFzKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBDb21wb25lbnRMb2FkZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9vcHRpb25zXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgZmFjdG9yeSA9IGZ1bmN0aW9uKFxuICBfXG4pIHtcblxuICAvKipcbiAgICpcbiAgICogSGVscGVyIGZvciBkZWFsaW5nIHdpdGggaGFzaC1zdHlsZSBmdW5jdGlvbiBhcmd1bWVudHMsIHdoaWNoIGNhbiBiZSB1c2VmdWxcbiAgICogaW4gbWV0aG9kcyB3aXRoIG9wdGlvbmFsL2RlZmF1bHQgdmFsdWVzLlxuICAgKlxuICAgKiBVc2FnZTpcbiAgICpcbiAgICogICB2YXIgZm9vID0gZnVuY3Rpb24ob3B0cykge1xuICAgKiAgICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgKlxuICAgKiAgICAgICB2YXIgb25lID0gb3B0cy5nZXRPckVycm9yKFwib25lXCIpLFxuICAgKiAgICAgICAgICAgdHdvID0gb3B0cy5nZXRPckVsc2UoXCJ0d29cIiwgMiksXG4gICAqICAgICAgICAgICB0aHJlZSA9IG9wdHMuZ2V0T3JFbHNlRm4oXCJ0aHJlZVwiLCBmdW5jdGlvbigpIHtcbiAgICogICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAqICAgICAgICAgICB9KTtcbiAgICpcbiAgICogICAgIGNvbnNvbGUubG9nKG9uZSwgdHdvLCB0aHJlZSk7XG4gICAqICAgfTtcbiAgICpcbiAgICogICBmb28oeyBvbmU6IDEgfSk7IC8vIGxvZ3MgXCIxLCAyLCAzXCJcbiAgICogICBmb28oKTsgLy8gdGhyb3dzIEVycm9yXG4gICAqICAgZm9vKHtvbmU6IDEsIHR3bzogZmFsc2UsIHRocmVlOiA0fSk7IC8vIGxvZ3MgXCIxLCBmYWxzZSwgNFwiXG4gICAqXG4gICAqL1xuICB2YXIgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF8uZXh0ZW5kKE9wdGlvbnMucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgdGhpcy5fcHJvdmlkZWRPcHRzID0gb3B0cyB8fCB7fTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCBga2V5YC4gSWYgdGhlIHZhbHVlXG4gICAgICogaXMgdW5kZWZpbmVkIG9yIG51bGwsIGluc3RlYWQgcmV0dXJucyB0aGUgcHJvdmlkZWQgYGZhbGxiYWNrVmFsdWVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSAocmVxdWlyZWQpIGF0dHJpYnV0ZSB0byBiZSByZWFkXG4gICAgICogQHBhcmFtIGZhbGxiYWNrVmFsdWUgIHJldHVybmVkIGlmIGBrZXlgIGF0dHJpYnV0ZSBpcyBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAqXG4gICAgICogQHJldHVybnMgcmVxdWVzdGVkIHZhbHVlIGZvciBga2V5YCwgb3IgZmFsbGJhY2tWYWx1ZWBcbiAgICAgKi9cbiAgICBnZXRPckVsc2U6IGZ1bmN0aW9uKGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5faXNVbmRlZk9yTnVsbChrZXkpKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvdmlkZWRPcHRzW2tleV07XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIHJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSByZXF1ZXN0ZWQgYGtleWAuIElmIHRoZSB2YWx1ZVxuICAgICAqIGlzIHVuZGVmaW5lZCBvciBudWxsLCB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5IChyZXF1aXJlZCkgYXR0cmlidXRlIHRvIGJlIHJlYWRcbiAgICAgKiBAcGFyYW0gZXJyICAgICAgICAgICAgbWVzc2FnZSBwcm92aWRlZCB0byBFcnJvciBjb25zdHJ1Y3RvciBpZiBga2V5YFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICBpcyBudWxsIG9yIG5vdCBkZWZpbmVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB0aGUgdmFsdWUgZm9yIHRoZSByZXF1ZXN0ZWQga2V5XG4gICAgICovXG4gICAgZ2V0T3JFcnJvcjogZnVuY3Rpb24oa2V5LCBlcnJvck1zZykge1xuICAgICAgaWYgKHRoaXMuX2lzVW5kZWZPck51bGwoa2V5KSkge1xuICAgICAgICBlcnJvck1zZyA9IGVycm9yTXNnIHx8IFwiT3B0aW9uIHJlcXVlc3RlZCBidXQgbm90IGZvdW5kOiBgXCIra2V5K1wiYFwiO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNc2cpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcHJvdmlkZWRPcHRzW2tleV07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIHJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSByZXF1ZXN0ZWQgYGtleWAuIElmIHRoZSB2YWx1ZVxuICAgICAqIGlzIHVuZGVmaW5lZCBvciBudWxsLCBpbnN0ZWFkIGV2YWx1YXRlcyBgZmFsbGJhY2tWYWx1ZUZuYCBhbmQgcmV0dXJuc1xuICAgICAqIGl0cyB2YWx1ZS5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGZvciBzaW11bGF0aW5nIG5vbi1zdHJpY3QgZXZhbHVhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgKHJlcXVpcmVkKSAgYXR0cmlidXRlIHRvIGJlIHJlYWRcbiAgICAgKiBAcGFyYW0gZmFsbGJhY2tWYWx1ZUZuIGV2YWx1YXRlZCBhbmQgcmV0dXJuIHZhbHVlIHJldHVybmVkIGlmIGBrZXlgXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgaXMgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHJlcXVlc3RlZCB2YWx1ZSBmb3IgYGtleWAgb3IgdGhlIHJldHVybiB2YWx1ZSBvZiBldmFsdWF0ZWRcbiAgICAgKiAgICAgICAgICBgZmFsbGJhY2tWYWx1ZUZuYFxuICAgICAqL1xuICAgIGdldE9yRWxzZUZuOiBmdW5jdGlvbihrZXksIGRlZmF1bHRWYWx1ZUZuKSB7XG4gICAgICBpZiAodHlwZW9mIGRlZmF1bHRWYWx1ZUZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT3B0aW9ucyNnZXRPckVsc2VGbiByZXF1aXJlcyBhIGRlZmF1bHRWYWx1ZUZuXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faXNVbmRlZk9yTnVsbChrZXkpKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVGbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3ZpZGVkT3B0c1trZXldO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfaXNVbmRlZk9yTnVsbDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3Byb3ZpZGVkT3B0c1trZXldID09PSBcInVuZGVmaW5lZFwiIHx8IHRoaXMuX3Byb3ZpZGVkT3B0c1trZXldID09PSBudWxsO1xuICAgIH1cbiAgfSk7XG5cbiAgXy5leHRlbmQoT3B0aW9ucywge1xuICAgIGZyb21PYmplY3Q6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIHJldHVybiBuZXcgT3B0aW9ucyhvcHRzKTtcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIE9wdGlvbnM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgZmFjdG9yeSA9IGZ1bmN0aW9uKFxuICBfXG4pIHtcblxuICB2YXIgTGFuZyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKExhbmcucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKXt9XG4gIH0pO1xuXG4gIF8uZXh0ZW5kKExhbmcsIHtcbiAgICBub29wOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgcGFydGlhbGx5QXBwbHk6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBfLnRvQXJyYXkoYXJndW1lbnRzKSxcbiAgICAgICAgICBmdW4gID0gYXJncy5zaGlmdCgpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBmdW4uYXBwbHkobnVsbCwgYXJncy5jb25jYXQoYXJndW1lbnRzKSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIExhbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIFByb21pc2Vcbikge1xuXG4gIHZhciBTdGF0ZUd1YXJkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoU3RhdGVHdWFyZC5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihzdGF0ZXMpIHtcbiAgICAgIHRoaXMuX3ZhbGlkU3RhdGVzID0gXy5yZWR1Y2Uoc3RhdGVzLCBmdW5jdGlvbihtZW1vLCBzdGF0ZSkge1xuICAgICAgICBtZW1vW3N0YXRlXSA9IHRydWU7XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgfSwge30pO1xuXG4gICAgICB0aGlzLl9hcHBsaWVkU3RhdGVzID0ge307XG4gICAgfSxcblxuICAgIGFwcGx5OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzdGF0ZXMgPSBhcnlPclZhcmlhZGljVG9BcnJheShhcmd1bWVudHMpO1xuICAgICAgY2hlY2tWYWxpZFN0YXRlc09yVGhyb3codGhpcy5fdmFsaWRTdGF0ZXMsIHN0YXRlcyk7XG5cbiAgICAgIF8uZWFjaChzdGF0ZXMsIGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuX2FwcGxpZWRTdGF0ZXNbc3RhdGVdID0gdHJ1ZTtcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgYXBwbHlBc3luYzogUHJvbWlzZS5tZXRob2QoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcHBseS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0pLFxuXG4gICAgYXBwbHlBc3luY0ZuOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgcmV0dXJuIF8uYmluZChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlBc3luYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG5cbiAgICB1bmFwcGx5OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzdGF0ZXMgPSBhcnlPclZhcmlhZGljVG9BcnJheShhcmd1bWVudHMpO1xuICAgICAgY2hlY2tWYWxpZFN0YXRlc09yVGhyb3codGhpcy5fdmFsaWRTdGF0ZXMsIHN0YXRlcyk7XG5cbiAgICAgIF8uZWFjaChzdGF0ZXMsIGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLl9hcHBsaWVkU3RhdGVzW3N0YXRlXSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9hcHBsaWVkU3RhdGVzW3N0YXRlXTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICB1bmFwcGx5QXN5bmM6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudW5hcHBseS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0pLFxuXG4gICAgdW5hcHBseUFzeW5jRm46IGZ1bmN0aW9uKHN0YXRlcykge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICByZXR1cm4gXy5iaW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bmFwcGx5QXN5bmMuYXBwbHkodGhpcywgYXJncylcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBkZW55OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzdGF0ZXMgPSBhcnlPclZhcmlhZGljVG9BcnJheShhcmd1bWVudHMpO1xuICAgICAgY2hlY2tWYWxpZFN0YXRlc09yVGhyb3codGhpcy5fdmFsaWRTdGF0ZXMsIHN0YXRlcyk7XG5cbiAgICAgIHZhciBhcHBsaWVkID0gXy5maWx0ZXIoc3RhdGVzLCBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbGllZFN0YXRlc1tzdGF0ZV07XG4gICAgICB9LCB0aGlzKTtcblxuICAgICAgaWYgKGFwcGxpZWQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGF0ZSBkZW5pYWwgcmVxdWVzdGVkLCBidXQgYXBwbGllZDogXCIgKyBwcmV0dHkoYXBwbGllZCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZGVueUFzeW5jOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbnkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9KSxcblxuICAgIGRlbnlBc3luY0ZuOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgcmV0dXJuIF8uYmluZChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVueUFzeW5jLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgZW5zdXJlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzdGF0ZXMgPSBhcnlPclZhcmlhZGljVG9BcnJheShhcmd1bWVudHMpO1xuICAgICAgY2hlY2tWYWxpZFN0YXRlc09yVGhyb3codGhpcy5fdmFsaWRTdGF0ZXMsIHN0YXRlcyk7XG4gICAgICB2YXIgbWlzc2luZyA9IF8ucmVqZWN0KHN0YXRlcywgZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGxpZWRTdGF0ZXNbc3RhdGVdO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGlmIChtaXNzaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhdGUgZW5zdXJhbmNlIHJlcXVlc3RlZCwgYnV0IG5vdCBhcHBsaWVkOiBcIiArIHByZXR0eShtaXNzaW5nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZW5zdXJlQXN5bmM6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW5zdXJlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSksXG5cbiAgICBlbnN1cmVBc3luY0ZuOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgcmV0dXJuIF8uYmluZChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5zdXJlQXN5bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgYXBwbGllZDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc3RhdGVzID0gYXJ5T3JWYXJpYWRpY1RvQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgIGNoZWNrVmFsaWRTdGF0ZXNPclRocm93KHRoaXMuX3ZhbGlkU3RhdGVzLCBzdGF0ZXMpO1xuXG4gICAgICByZXR1cm4gXy5ldmVyeShzdGF0ZXMsIGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBsaWVkU3RhdGVzW3N0YXRlXTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBhcHBsaWVkQXN5bmM6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXBwbGllZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0pLFxuXG4gICAgYXBwbGllZEFzeW5jRm46IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICByZXR1cm4gXy5iaW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBsaWVkQXN5bmMuYXBwbHkodGhpcywgYXJncylcbiAgICAgIH0sIHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGFyeU9yVmFyaWFkaWNUb0FycmF5ID0gZnVuY3Rpb24oYXJncykge1xuICAgIHJldHVybiBfLmNoYWluKGFyZ3MpLnRvQXJyYXkoKS5mbGF0dGVuKCkudmFsdWUoKTtcbiAgfTtcblxuICB2YXIgY2hlY2tWYWxpZFN0YXRlc09yVGhyb3cgPSBmdW5jdGlvbih2YWxpZFN0YXRlc01hcCwgc3RhdGVzKSB7XG4gICAgdmFyIGludmFsaWRTdGF0ZXMgPSBfLnJlamVjdChzdGF0ZXMsIGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICByZXR1cm4gISF2YWxpZFN0YXRlc01hcFtzdGF0ZV07XG4gICAgfSk7XG5cbiAgICBpZiAoaW52YWxpZFN0YXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0YXRlcyBwcm92aWRlZDogXCIgKyBwcmV0dHkoaW52YWxpZFN0YXRlcykpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcHJldHR5ID0gZnVuY3Rpb24oc3RhdGVzKSB7XG4gICAgcmV0dXJuIFwiW1wiK3N0YXRlcy5qb2luKFwiLFwiKStcIl1cIjtcbiAgfTtcblxuICByZXR1cm4gU3RhdGVHdWFyZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcImJsdWViaXJkXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF9cbikge1xuXG4gIHZhciBQdWJTdWIgPSB7XG4gICAgb246IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkge1xuICAgICAgdmFyIGJ1Y2tldCA9IHRoaXMuX19wdWJTdWJCdWNrZXQoZXZlbnROYW1lKTtcbiAgICAgIGJ1Y2tldC5zdWJzY3JpYmUoaGFuZGxlciwgY29udGV4dCk7XG4gICAgfSxcbiAgICBvZmY6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkge1xuICAgICAgdmFyIGJ1Y2tldCA9IHRoaXMuX19wdWJTdWJCdWNrZXQoZXZlbnROYW1lKTtcbiAgICAgIGJ1Y2tldC51bnN1YnNjcmliZShoYW5kbGVyLCBjb250ZXh0KTtcbiAgICB9LFxuICAgIG5vdGlmeTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncyAgICAgID0gXy50b0FycmF5KGFyZ3VtZW50cyksXG4gICAgICAgICAgZXZlbnROYW1lID0gYXJncy5zaGlmdCgpO1xuXG4gICAgICB2YXIgYnVja2V0ID0gdGhpcy5fX3B1YlN1YkJ1Y2tldChldmVudE5hbWUpO1xuICAgICAgYnVja2V0Lm5vdGlmeShhcmdzKTtcbiAgICB9LFxuICAgIF9fcHViU3ViQnVja2V0OiBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICAgIHRoaXMuX19wdWJTdWJFdmVudHMgPSB0aGlzLl9fcHViU3ViRXZlbnRzIHx8IHt9O1xuICAgICAgdGhpcy5fX3B1YlN1YkV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5fX3B1YlN1YkV2ZW50c1tldmVudE5hbWVdIHx8IG5ldyBFdmVudEJ1Y2tldChldmVudE5hbWUpO1xuICAgICAgcmV0dXJuIHRoaXMuX19wdWJTdWJFdmVudHNbZXZlbnROYW1lXTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIEV2ZW50QnVja2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoRXZlbnRCdWNrZXQucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgICB0aGlzLl9ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gW107XG4gICAgfSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChuZXcgU3Vic2NyaXB0aW9uKGhhbmRsZXIsIGNvbnRleHQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN1YnNjcmlwdGlvbiByZXF1aXJlcyBoYW5kbGVyOiBcIiArIHRoaXMuX2V2ZW50TmFtZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24oaGFuZGxlciwgY29udGV4dCkge1xuICAgICAgdmFyIHN1YnM7XG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICBzdWJzID0gXy5maWx0ZXIodGhpcy5fc3Vic2NyaXB0aW9ucywgZnVuY3Rpb24oc3ViKSB7XG4gICAgICAgICAgcmV0dXJuIHN1Yi5tYXRjaGVzKGhhbmRsZXIsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnMgPSB0aGlzLl9zdWJzY3JpcHRpb25zO1xuICAgICAgfVxuXG4gICAgICBfLmVhY2goc3VicywgZnVuY3Rpb24oc3ViKSB7XG4gICAgICAgIHN1Yi5kaXNwb3NlKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IF8uZGlmZmVyZW5jZSh0aGlzLl9zdWJzY3JpcHRpb25zLCBzdWJzKTtcbiAgICB9LFxuICAgIG5vdGlmeTogZnVuY3Rpb24oYXJncykge1xuICAgICAgXy5pbnZva2UodGhpcy5fc3Vic2NyaXB0aW9ucywgXCJub3RpZnlcIiwgYXJncyk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoU3Vic2NyaXB0aW9uLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfSxcbiAgICBtYXRjaGVzOiBmdW5jdGlvbihoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgICBpZiAodGhpcy5fY29udGV4dCkge1xuICAgICAgICAvLyBDb21wYXJlIGNvbnRleHQgcmVmcyBhcyByZWZzIGlmZiB3ZSBoYXZlIGEgY29udGV4dCBvYmplY3RcbiAgICAgICAgcmV0dXJuIChoYW5kbGVyID09PSB0aGlzLl9oYW5kbGVyICYmIGNvbnRleHQgPT09IHRoaXMuX2NvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IG1ha2Ugc3VyZSB3ZSBkb24ndCBoYXZlIGEgY29udGV4dCAobnVsbCBvciB1bmRlZmluZWQgYXJlIGZpbmUpXG4gICAgICAgIHJldHVybiAoaGFuZGxlciA9PT0gdGhpcy5faGFuZGxlciAmJiAhY29udGV4dCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBub3RpZnk6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIC8vIFdlIHNob3VsZG4ndCBiZSBjYWxsZWQgYWZ0ZXIgZGlzcG9zZSwgYnV0XG4gICAgICAvLyBqdXN0IGluIGNhc2UuLi5cbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIuYXBwbHkodGhpcy5fY29udGV4dCwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIldURlwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5faGFuZGxlciA9IG51bGw7XG4gICAgICB0aGlzLl9jb250ZXh0ID0gbnVsbDtcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIFB1YlN1Yjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBPcHRpb25zXG4pIHtcblxuICB2YXIgRG91Ymx5TGlua2VkTGlzdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKERvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9mcm9udCA9IG51bGw7XG4gICAgICB0aGlzLl9iYWNrID0gbnVsbDtcbiAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgdGhpcy5fY2hlY2tFbGVtZW50SWR4T3JUaHJvdyhpZHgpO1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl93YWxrVG9JZHgoaWR4KTtcbiAgICAgIHJldHVybiBub2RlLnZhbHVlKCk7XG4gICAgfSxcblxuICAgIGV4aXN0czogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBub2RlID0gdGhpcy5fd2Fsa1RvVmFsdWUodmFsdWUpO1xuICAgICAgcmV0dXJuICEhbm9kZTtcbiAgICB9LFxuXG4gICAgc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICB9LFxuXG4gICAgYWRkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkQmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICBhZGRGcm9udDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXMuX2xpbmtGcm9udCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIGFkZEJhY2s6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLl9saW5rQmFjayh2YWx1ZSk7XG4gICAgfSxcblxuICAgIHJlbW92ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBub2RlID0gdGhpcy5fd2Fsa1RvVmFsdWUodmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXMuX3VubGluayhub2RlKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlRnJvbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX2Zyb250ID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggZWxlbWVudFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl91bmxpbmtGcm9udCh0aGlzLl9mcm9udCk7XG4gICAgfSxcblxuICAgIHJlbW92ZUJhY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX2JhY2sgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCBlbGVtZW50XCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3VubGlua0JhY2sodGhpcy5fYmFjayk7XG4gICAgfSxcblxuICAgIGluc2VydEF0SW5kZXg6IGZ1bmN0aW9uKGlkeCwgdmFsdWUpIHtcbiAgICAgIHRoaXMuX2NoZWNrSXNFbGVtZW50UG9zaXRpb25PclRocm93KGlkeCk7XG5cbiAgICAgIGlmIChpZHggPT09IHRoaXMuX3NpemUpIHtcbiAgICAgICAgdGhpcy5hZGRCYWNrKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5fd2Fsa1RvSWR4KGlkeCk7XG4gICAgICAgIHRoaXMuX2xpbmtCZWZvcmUodmFsdWUsIG5vZGUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW1vdmVBdEluZGV4OiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHRoaXMuX2NoZWNrRWxlbWVudElkeE9yVGhyb3coaWR4KTtcbiAgICAgIGlmIChpZHggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VubGlua0Zyb250KHRoaXMuX2Zyb250KTtcbiAgICAgIH0gZWxzZSBpZiAoIGlkeCA9PT0gKHRoaXMuX3NpemUgLSAxKSApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VubGlua0JhY2sodGhpcy5fYmFjayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuX3dhbGtUb0lkeChpZHgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdW5saW5rKG5vZGUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2Zyb250LFxuICAgICAgICAgIG5leHQ7XG5cbiAgICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIG5leHQgPSBub2RlLm5leHQoKTtcbiAgICAgICAgbm9kZS5kaXNwb3NlKCk7XG4gICAgICAgIG5vZGUgPSBuZXh0O1xuICAgICAgfVxuICAgICAgdGhpcy5fZnJvbnQgPSBudWxsO1xuICAgICAgdGhpcy5fYmFjayAgPSBudWxsO1xuICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgfSxcblxuICAgIF9saW5rRnJvbnQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgb2xkRnJvbnQgPSB0aGlzLl9mcm9udCxcbiAgICAgICAgICBuZXdOb2RlID0gbmV3IE5vZGUoe3ZhbHVlOiB2YWx1ZX0pO1xuICAgICAgdGhpcy5fZnJvbnQgPSBuZXdOb2RlO1xuXG4gICAgICBpZiAob2xkRnJvbnQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fYmFjayA9IG5ld05vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbGRGcm9udC5zZXRQcmV2KG5ld05vZGUpO1xuICAgICAgICBuZXdOb2RlLnNldE5leHQob2xkRnJvbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zaXplKys7XG4gICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICB9LFxuXG4gICAgX2xpbmtCYWNrOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIG9sZEJhY2sgPSB0aGlzLl9iYWNrLFxuICAgICAgICAgIG5ld05vZGUgPSBuZXcgTm9kZSh7dmFsdWU6IHZhbHVlfSk7XG5cbiAgICAgIHRoaXMuX2JhY2sgPSBuZXdOb2RlO1xuICAgICAgaWYgKG9sZEJhY2sgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fZnJvbnQgPSBuZXdOb2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2xkQmFjay5zZXROZXh0KG5ld05vZGUpO1xuICAgICAgICBuZXdOb2RlLnNldFByZXYob2xkQmFjayk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NpemUrKztcbiAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgIH0sXG5cbiAgICBfbGlua0JlZm9yZTogZnVuY3Rpb24odmFsdWUsIG5vZGUpIHtcbiAgICAgIHZhciBwcmVkICAgID0gbm9kZS5wcmV2KCksXG4gICAgICAgICAgbmV3Tm9kZSA9IG5ldyBOb2RlKHt2YWx1ZTogdmFsdWUsIHByZXY6IHByZWQsIG5leHQ6IG5vZGV9KTtcblxuICAgICAgbm9kZS5zZXRQcmV2KG5ld05vZGUpO1xuICAgICAgaWYgKHByZWQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fZnJvbnQgPSBuZXdOb2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJlZC5zZXROZXh0KG5ld05vZGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2l6ZSsrO1xuICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgfSxcblxuICAgIF91bmxpbmtGcm9udDogZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIHZhbHVlICAgID0gbm9kZS52YWx1ZSgpLFxuICAgICAgICAgIG5ld0Zyb250ID0gbm9kZS5uZXh0KCk7XG5cbiAgICAgIG5vZGUuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fZnJvbnQgPSBuZXdGcm9udDtcbiAgICAgIGlmIChuZXdGcm9udCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9iYWNrID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0Zyb250LnNldFByZXYobnVsbCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9zaXplLS07XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcblxuICAgIF91bmxpbmtCYWNrOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICB2YXIgdmFsdWUgICA9IG5vZGUudmFsdWUoKSxcbiAgICAgICAgICBuZXdCYWNrID0gbm9kZS5wcmV2KCk7XG5cbiAgICAgIG5vZGUuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fYmFjayA9IG5ld0JhY2s7XG4gICAgICBpZiAobmV3QmFjayA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2Zyb250ID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0JhY2suc2V0TmV4dChudWxsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NpemUtLTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuXG4gICAgX3VubGluazogZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIHByZXYgID0gbm9kZS5wcmV2KCksXG4gICAgICAgICAgbmV4dCAgPSBub2RlLm5leHQoKSxcbiAgICAgICAgICB2YWx1ZSA9IG5vZGUudmFsdWUoKTtcblxuICAgICAgaWYgKHByZXYgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fZnJvbnQgPSBuZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJldi5zZXROZXh0KG5leHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9iYWNrID0gcHJldjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQuc2V0UHJldihwcmV2KTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9zaXplLS07XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcblxuICAgIF93YWxrVG9JZHg6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgdmFyIG5vZGUsIGN1cnJlbnQ7XG4gICAgICBpZiAoaWR4IDwgdGhpcy5fc2l6ZSAvIDIpIHtcbiAgICAgICAgbm9kZSA9IHRoaXMuX2Zyb250O1xuICAgICAgICBjdXJyZW50ID0gMDtcbiAgICAgICAgd2hpbGUoY3VycmVudCAhPT0gaWR4KSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGUubmV4dCgpO1xuICAgICAgICAgIGN1cnJlbnQrKztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IHRoaXMuX2JhY2s7XG4gICAgICAgIGN1cnJlbnQgPSB0aGlzLl9zaXplIC0gMTtcblxuICAgICAgICB3aGlsZShjdXJyZW50ICE9PSBpZHgpIHtcbiAgICAgICAgICBub2RlID0gbm9kZS5wcmV2KCk7XG4gICAgICAgICAgY3VycmVudC0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgX3dhbGtUb1ZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIG4gPSB0aGlzLl9mcm9udDtcbiAgICAgIHdoaWxlIChuICE9PW51bGwgKSB7XG4gICAgICAgIGlmIChuLm1hdGNoKHZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9XG4gICAgICAgIG4gPSBuLm5leHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICBfaXNFbGVtZW50SWR4OiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHJldHVybiAoaWR4ID49IDAgJiYgaWR4IDwgdGhpcy5fc2l6ZSk7XG4gICAgfSxcblxuICAgIF9pc0VsZW1lbnRQb3NpdGlvbjogZnVuY3Rpb24oaWR4KSB7XG4gICAgICByZXR1cm4gKGlkeCA+PSAwICYmIGlkeCA8PSB0aGlzLl9zaXplKTtcbiAgICB9LFxuXG4gICAgX2NoZWNrRWxlbWVudElkeE9yVGhyb3c6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0VsZW1lbnRJZHgoaWR4KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmRleCBvdXQgb2YgYm91bmRzOyBzaXplOiBcIiArIHRoaXMuX3NpemUgKyBcIjsgaWR4OiBcIiArIGlkeCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9jaGVja0lzRWxlbWVudFBvc2l0aW9uT3JUaHJvdzogZnVuY3Rpb24oaWR4KSB7XG4gICAgICBpZiAoIXRoaXMuX2lzRWxlbWVudFBvc2l0aW9uKGlkeCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5kZXggb3V0IG9mIGJvdW5kczsgc2l6ZTogXCIgKyB0aGlzLl9zaXplICsgXCI7IGlkeDogXCIgKyBpZHgpO1xuICAgICAgfVxuICAgIH1cblxuICB9KTtcblxuICB2YXIgTm9kZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKE5vZGUucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgb3B0cyAgICAgICAgPSBPcHRpb25zLmZyb21PYmplY3Qob3B0cyk7XG4gICAgICB0aGlzLl9uZXh0ICA9IG9wdHMuZ2V0T3JFbHNlKFwibmV4dFwiLCBudWxsKTtcbiAgICAgIHRoaXMuX3ByZXYgID0gb3B0cy5nZXRPckVsc2UoXCJwcmV2XCIsIG51bGwpO1xuICAgICAgdGhpcy5fdmFsdWUgPSBvcHRzLmdldE9yRWxzZShcInZhbHVlXCIsIG51bGwpO1xuICAgIH0sXG5cbiAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uZXh0O1xuICAgIH0sXG5cbiAgICBwcmV2OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wcmV2O1xuICAgIH0sXG5cbiAgICBzZXROZXh0OiBmdW5jdGlvbihub2RlKSB7XG4gICAgICB0aGlzLl9uZXh0ID0gbm9kZTtcbiAgICB9LFxuXG4gICAgc2V0UHJldjogZnVuY3Rpb24obm9kZSkge1xuICAgICAgdGhpcy5fcHJldiA9IG5vZGU7XG4gICAgfSxcblxuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9LFxuXG4gICAgZGlzcG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9uZXh0ICA9IG51bGw7XG4gICAgICB0aGlzLl9wcmV2ICA9IG51bGw7XG4gICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgfSxcblxuICAgIG1hdGNoOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlID09PSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBEb3VibHlMaW5rZWRMaXN0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9vcHRpb25zXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIE9wdGlvbnNcbikge1xuXG4gIC8qKlxuICAgKiBEZWxlZ2F0ZXMgc3RvcmFnZSB0byBhIEpTIG9iamVjdC5cbiAgICovXG4gIHZhciBPYmplY3RIYXNoTWFwID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cblxuICBfLmV4dGVuZChPYmplY3RIYXNoTWFwLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIG9wdHMgPSBPcHRpb25zLmZyb21PYmplY3Qob3B0cyk7XG4gICAgICB0aGlzLl9zdG9yZSA9IHt9O1xuICAgICAgdGhpcy5fa2V5UHJlZml4ID0gb3B0cy5nZXRPckVsc2UoXCJrZXlQcmVmaXhcIiwgXCJvaG0tXCIpO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbihrZXkpe1xuICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlW3RoaXMuX21ha2VLZXkoa2V5KV07XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uKGtleSwgdmFsKSB7XG4gICAgICB0aGlzLl9zdG9yZVt0aGlzLl9tYWtlS2V5KGtleSldID0gdmFsO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciB2YWw7XG4gICAgICBrZXkgPSB0aGlzLl9tYWtlS2V5KGtleSk7XG4gICAgICBpZiAoXy5oYXModGhpcy5fc3RvcmUsIGtleSkpIHtcbiAgICAgICAgdmFsID0gdGhpcy5fc3RvcmVba2V5XTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3N0b3JlW2tleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH0sXG4gICAgZXhpc3RzOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBfLmhhcyh0aGlzLl9zdG9yZSwgdGhpcy5fbWFrZUtleShrZXkpKTtcbiAgICB9LFxuICAgIHNpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF8uc2l6ZSh0aGlzLl9zdG9yZSk7XG4gICAgfSxcbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9zdG9yZSA9IHt9O1xuICAgIH0sXG4gICAgX21ha2VLZXk6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2tleVByZWZpeCArIGtleTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgcmV0dXJuIE9iamVjdEhhc2hNYXA7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL29wdGlvbnNcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgT3B0aW9ucyxcbiAgT2JqZWN0SGFzaE1hcCxcbiAgRG91Ymx5TGlua2VkTGlzdFxuKSB7XG5cbiAgdmFyIExSVUhhc2hNYXAgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChMUlVIYXNoTWFwLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIG9wdHMgPSBPcHRpb25zLmZyb21PYmplY3Qob3B0cyk7XG4gICAgICB0aGlzLl9jYXBhY2l0eSA9IG9wdHMuZ2V0T3JFcnJvcihcImNhcGFjaXR5XCIpO1xuICAgICAgdGhpcy5fa2V5QWNjZXNzTGlzdCA9IG5ldyBEb3VibHlMaW5rZWRMaXN0KCk7XG4gICAgICAvLyBUT0RPOiBSZWFsbHkgbmVlZCBhIHByb3BlciBIYXNoTWFwIGF0IHNvbWUgcG9pbnQuLi5cbiAgICAgIHRoaXMuX3N0b3JlID0gbmV3IE9iamVjdEhhc2hNYXAoKTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgZW50cnkgPSB0aGlzLl9zdG9yZS5nZXQoa2V5KTtcbiAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBBcyBhIHBlcmYgb3B0aW1pemF0aW9uLCB3ZSBrZWVwIGEgcmVmXG4gICAgICAvLyB0byB0aGUgbm9kZSBpbiB0aGUgZW50cnkuXG4gICAgICB2YXIgbm9kZSA9IGVudHJ5Lm5vZGUoKTtcbiAgICAgIHRoaXMuX2tleUFjY2Vzc0xpc3QuX3VubGluayhub2RlKTtcblxuICAgICAgLy8gR2V0IHRoZSBuZXcgbm9kZVxuICAgICAgbm9kZSA9IHRoaXMuX2tleUFjY2Vzc0xpc3QuX2xpbmtGcm9udChlbnRyeS5rZXkoKSk7XG5cbiAgICAgIC8vIFNhdmUgaXRcbiAgICAgIGVudHJ5LnNldE5vZGUobm9kZSk7XG4gICAgICAvLyBSZXR1cm4gdGhlIHZhbHVlXG4gICAgICByZXR1cm4gZW50cnkudmFsdWUoKTtcbiAgICB9LFxuXG4gICAgcHV0OiBmdW5jdGlvbihrZXksIHZhbCkge1xuICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fc3RvcmUuZ2V0KGtleSksXG4gICAgICAgICAgbm9kZTtcbiAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgLy8gSWYgbm8gZW50cnksIG1ha2UgYSBuZXcgZW50cnlcbiAgICAgICAgaWYgKHRoaXMuX2tleUFjY2Vzc0xpc3Quc2l6ZSgpID49IHRoaXMuX2NhcGFjaXR5KSB7XG4gICAgICAgICAgLy8gSGF2ZSB0byBtYWtlIHJvb20gZm9yIGl0XG4gICAgICAgICAgdmFyIGV2aWN0ZWRLZXkgPSB0aGlzLl9rZXlBY2Nlc3NMaXN0LnJlbW92ZUJhY2soKSxcbiAgICAgICAgICAgICAgZXZpY3RlZEVudHJ5ID0gdGhpcy5fc3RvcmUuZ2V0KGV2aWN0ZWRLZXkpO1xuXG4gICAgICAgICAgZXZpY3RlZEVudHJ5LmRpc3Bvc2UoKTtcbiAgICAgICAgICB0aGlzLl9zdG9yZS5yZW1vdmUoZXZpY3RlZEtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlID0gdGhpcy5fa2V5QWNjZXNzTGlzdC5fbGlua0Zyb250KGtleSk7XG4gICAgICAgIGVudHJ5ID0gbmV3IEVudHJ5KHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICAgIG5vZGU6IG5vZGVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3N0b3JlLnB1dChrZXksIGVudHJ5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFwiVG91Y2hcIiB0aGUgZW50cnksIHNldCBuZXcgdmFsdWVcbiAgICAgICAgbm9kZSA9IGVudHJ5Lm5vZGUoKTtcbiAgICAgICAgdGhpcy5fa2V5QWNjZXNzTGlzdC5fdW5saW5rKG5vZGUpO1xuICAgICAgICBub2RlID0gdGhpcy5fa2V5QWNjZXNzTGlzdC5fbGlua0Zyb250KGVudHJ5LmtleSgpKTtcbiAgICAgICAgLy8gVXBkYXRlIHdpdGggdGhlIG5ldyBub2RlIGFuZCB2YWx1ZVxuICAgICAgICBlbnRyeS5zZXROb2RlKG5vZGUpO1xuICAgICAgICBlbnRyeS5zZXRWYWx1ZSh2YWwpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW1vdmU6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fc3RvcmUuZ2V0KGtleSksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgbm9kZTtcbiAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICB2YWx1ZSA9IGVudHJ5LnZhbHVlKCk7XG4gICAgICAgIG5vZGUgPSBlbnRyeS5ub2RlKCk7XG4gICAgICAgIHRoaXMuX2tleUFjY2Vzc0xpc3QuX3VubGluayhub2RlKTtcbiAgICAgICAgZW50cnkuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9zdG9yZS5yZW1vdmUoa2V5KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBleGlzdHM6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLmV4aXN0cyhrZXkpO1xuICAgIH0sXG5cbiAgICBzaXplOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdG9yZS5zaXplKCk7XG4gICAgfSxcblxuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3N0b3JlLmNsZWFyKCk7XG4gICAgICB0aGlzLl9rZXlBY2Nlc3NMaXN0LmNsZWFyKCk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgRW50cnkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChFbnRyeS5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgLy8gVGhvdWdoIHRoZSBOb2RlIHNob3VsZCBoYXZlIHRoZSBrZXksIGlmIHRoZSBub2RlXG4gICAgICAvLyBpcyB1bmxpbmtlZCBmcm9tIHRoZSBsaXN0LCBpdHMgYm94ZWQgdmFsdWUgd2lsbCBkaXNhcHBlYXJcbiAgICAgIHRoaXMuX2tleSAgID0gb3B0cy5nZXRPckVycm9yKFwia2V5XCIpO1xuICAgICAgdGhpcy5fdmFsdWUgPSBvcHRzLmdldE9yRXJyb3IoXCJ2YWx1ZVwiKTtcbiAgICAgIHRoaXMuX25vZGUgID0gb3B0cy5nZXRPckVycm9yKFwibm9kZVwiKTtcbiAgICB9LFxuICAgIG5vZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gICAgfSxcbiAgICBzZXROb2RlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICB0aGlzLl9ub2RlID0gbm9kZTtcbiAgICB9LFxuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9LFxuICAgIHNldFZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGtleTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fa2V5O1xuICAgIH0sXG4gICAgZGlzcG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9rZXkgPSBudWxsO1xuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5fbm9kZSA9IG51bGw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gTFJVSGFzaE1hcDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcIi4uL2NvcmUvb3B0aW9uc1wiKSxcbiAgcmVxdWlyZShcIi4vb2JqZWN0LWhhc2gtbWFwXCIpLFxuICByZXF1aXJlKFwiLi9kb3VibHktbGlua2VkLWxpc3RcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgUHJvbWlzZSxcbiAgT3B0aW9ucyxcbiAgSW5NZW1vcnlEYXRhU3RvcmUsXG4gIFVuaXRTZXF1ZW5jZXJcbikge1xuXG4gIC8vIEFwcHJvcHJpYXRlIGZvciB0aGUgZGVmYXVsdCBzZXF1ZW5jZXIgKG5vbi10ZW1wb3JhbClcbiAgdmFyIERFRkFVTFRfVFRMID0gMTtcblxuXG4gIC8qKlxuICAgKiBBIGxvb2stYXNpZGUgY2FjaGluZyBkYXRhIHN0b3JlLiBOb3RlOiBpdCdzIGdlbmVyYWxseSBub3QgdXNlZnVsIHRvIGFsbG93XG4gICAqIG51bGwvdW5kZWZpbmVkIHN0b3JlZCB2YWx1ZXMuIFdoZW4gYW4gaXRlbSBpcyBldmljdGVkIGZyb20gdGhlIGNhY2hlLCBhXG4gICAqIHN1YnNlcXVlbnQgYGdldGAgY2FsbCB3aWxsIHJldHVybiBgdW5kZWZpbmVkYCwgc28gaXQgY2FuIGJlIGRpZmZpY3VsdCB0b1xuICAgKiBkZXRlcm1pbmUgaWYgdGhlcmUgd2FzIGEgY2FjaGUgbWlzcyBpZiB0aGUgdmFsdWUgeW91J3JlIHN0b3JpbmcgaXMsIGluIGZhY3QsXG4gICAqIGB1bmRlZmluZWRgLCB1bmxlc3MgeW91IHByZWZpeCBldmVyeSBjaGVjayB3aXRoIGBleGlzdHNgLCB3aGljaCBhbHNvIGRvZXNcbiAgICogY2FjaGUgZXZpY3Rpb24gb24gY2hlY2suXG4gICAqL1xuICB2YXIgQ2FjaGluZ0RhdGFTdG9yZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKENhY2hpbmdEYXRhU3RvcmUucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcbiAgICAgIHRoaXMuX3R0bCA9IG9wdHMuZ2V0T3JFbHNlKFwidHRsXCIsIERFRkFVTFRfVFRMKTtcblxuICAgICAgLy8gRGVmYXVsdCBzZXF1ZW5jZXIgaXMgYSBsaW5lYXIvdW5pdCBzZXF1ZW5jZXIuIFRoZSBkZWZhdWx0IFRUTCBpc1xuICAgICAgLy8gMS4gVGhlcmVmb3JlLCBhbGwgdmFsdWVzIHdpbGwgZXhwaXJlIHdpdGggc2luZ2xlIGFkdmFuY2Ugb2YgdGhlXG4gICAgICAvLyBzZXF1ZW5jZXIuIE5vdGUgdGhhdCB0aGUgZGF0YSBzdG9yZSBkb2Vzbid0IGFkdmFuY2UgdGhlXG4gICAgICAvLyBzZXF1ZW5jZXIgaXRzZWxmLiBUaGUgc3RvcmUgb3duZXIgaXMgcmVzcG9uc2libGUgZm9yIGRvaW5nXG4gICAgICAvLyB0aGlzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgaXMgZXNwZWNpYWxseSBpbXBvcnRhbnQgdG8gbm90ZSBmb3IgdGltZS1iYXNlZCBzZXF1ZW5jZXJzLlxuICAgICAgLy8gVGltZSB3aWxsIG5vdCBhZHZhbmNlIGF1dG9tYXRpY2FsbHkuIFRoZSBzdG9yZSBvd25lciBpcyByZXNwb25zaWJsZVxuICAgICAgLy8gZm9yIHNjaGVkdWxpbmcgdGhlIHNlcXVlbmNlciB0byBhZHZhbmNlIHdpdGggdGltZS4gVGhpcyBrZWVwcyB0aGVcbiAgICAgIC8vIENhY2hpbmdEYXRhU3RvcmUncyBsaWZlY3ljbGUgc2ltcGxlIHdpdGggcmVzcGVjdCB0byB0aW1lLlxuICAgICAgdGhpcy5fc2VxdWVuY2VyID0gb3B0cy5nZXRPckVsc2VGbihcInNlcXVlbmNlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVbml0U2VxdWVuY2VyKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQnkgZGVmYXVsdCwgd2UgZGVsZWdhdGUgdG8gYW4gaW4tbWVtb3J5IHN0b3JlLiBGaW5lIGZvciBzaW1wbGVcbiAgICAgIC8vIGNhc2VzLCBidXQgbm90IG9wdGltYWwuXG4gICAgICB0aGlzLl9iYWNraW5nU3RvcmUgPSBvcHRzLmdldE9yRWxzZUZuKFwiYmFja2luZ1N0b3JlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV3IEluTWVtb3J5RGF0YVN0b3JlKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gVXBkYXRlcyB0aGUgbGFzdFVwZGF0ZWQgdGltZSB0byBcIm5vd1wiIG9uIHJlYWQgLSBrZWVwcyBlbnRyaWVzXG4gICAgICAvLyBmcm9tIGV4cGlyaW5nIHdoZW4gdGhleSdyZSBiZWluZyBhY2Nlc3NlZCwgYnV0IGNhbiBjYXVzZVxuICAgICAgLy8gc3RhbGVuZXNzIGlzc3Vlcy5cbiAgICAgIHRoaXMuX3Nob3VsZFRvdWNoT25SZWFkID0gb3B0cy5nZXRPckVsc2UoXCJ0b3VjaE9uUmVhZFwiLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIHNlcXVlbmNlcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VxdWVuY2VyO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJvdmlkZWQga2V5LiBJZiB0aGUgb2JqZWN0IGhhc1xuICAgICAqIGV4cGlyZWQsIGl0IHdpbGwgYmUgZXZpY3RlZCBmcm9tIHRoZSBjYWNoZSwgYW5kIGB1bmRlZmluZWRgIHdpbGxcbiAgICAgKiBiZSByZXR1cm5lZCBpbnN0ZWFkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSAocmVxdWlyZWQpXG4gICAgICogQGFzeW5jXG4gICAgICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gcmVxdWVzdGVkIHZhbHVlXG4gICAgICovXG4gICAgZ2V0OiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlXG4gICAgICAgIC5iaW5kKHRoaXMpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9iYWNraW5nU3RvcmUuZ2V0KGtleSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGVudHJ5KXtcbiAgICAgICAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFlbnRyeS5pc0V4cGlyZWQodGhpcy5fc2VxdWVuY2VyLnZhbHVlKCksIHRoaXMuX3R0bCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaG91bGRUb3VjaE9uUmVhZCkge1xuICAgICAgICAgICAgICBlbnRyeS50b3VjaCh0aGlzLl9zZXF1ZW5jZXIudmFsdWUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZVxuICAgICAgICAgICAgICAuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmFja2luZ1N0b3JlLnB1dChrZXksIGVudHJ5KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnJldHVybihlbnRyeS52YWx1ZSgpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2VcbiAgICAgICAgICAgICAgLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGtleSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gLnRoZW5SZXR1cm4gaXMgYSBsaWUuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogU3RvcmVzIHRoZSBwcm92aWRlZCBgdmFsYCwgaWRlbnRpZmllZCBieSBga2V5YFxuICAgICAqXG4gICAgICogQHBhcmFtIGBrZXlgIHtzdHJpbmd9ICAocmVxdWlyZWQpIGlkZW50aWZpZXIgZm9yIHZhbHVlIHRvIGJlIHN0b3JlZFxuICAgICAqIEBwYXJhbSBgdmFsYCB7ZHluYW1pY30gKHJlcXVpcmVkKSB2YWx1ZSB0byBiZSBzdG9yZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTw+fVxuICAgICAqL1xuICAgIHB1dDogUHJvbWlzZS5tZXRob2QoZnVuY3Rpb24oa2V5LCB2YWwpIHtcbiAgICAgIHJldHVybiBQcm9taXNlXG4gICAgICAgIC5iaW5kKHRoaXMpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9iYWNraW5nU3RvcmUuZ2V0KGtleSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbiBlbnRyeSwgd2Ugc2hvdWxkIGp1c3QgdXBkYXRlXG4gICAgICAgICAgLy8gRWxzZSwgd2UgbWFrZSBuZXcgb25lLlxuICAgICAgICAgIC8vIFBlc2lzdCwgdGhlbiByZXR1cm4gbm90aGluZy5cbiAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgIGVudHJ5LnVwZGF0ZSh2YWwsIHRoaXMuX3NlcXVlbmNlci52YWx1ZSgpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW50cnkgPSBuZXcgRW50cnkoe1xuICAgICAgICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICAgICAgICBpbml0aWFsU2VxdWVuY2U6IHRoaXMuX3NlcXVlbmNlci52YWx1ZSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gUHJvbWlzZVxuICAgICAgICAgICAgLmJpbmQodGhpcylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmFja2luZ1N0b3JlLnB1dChrZXksIGVudHJ5KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHByb3ZpZGVkIGBrZXlgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYGtleWAge3N0cmluZ30gKHJlcXVpcmVkKSBpZGVudGlmaWVyIGZvciB2YWx1ZSB0byBiZSByZW1vdmVkXG4gICAgICogQGFzeW5jXG4gICAgICogQHJldHVybnMge1Byb21pc2U8ZHluYW1pYz59IFJlbW92ZWQgdmFsdWUsIGlmIHByZXNlbnQgaW4gc3RvcmUuXG4gICAgICovXG4gICAgcmVtb3ZlOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciB2YWw7XG4gICAgICByZXR1cm4gdGhpcy5fYmFja2luZ1N0b3JlXG4gICAgICAgIC5yZW1vdmUoa2V5KVxuICAgICAgICAudGhlbihmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgdmFsID0gZW50cnkudmFsdWUoKTtcbiAgICAgICAgICAgIGVudHJ5LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KSxcblxuICAgIGV4aXN0czogUHJvbWlzZS5tZXRob2QoZnVuY3Rpb24oa2V5KXtcbiAgICAgIC8vIEl0J3Mgbm90IHN1ZmZpY2llbnQgdG8gZGVsZWdhdGUgdGhpcyBjYWxsIHRvIHRoZSB1bmRlcmx5aW5nXG4gICAgICAvLyBiYWNraW5nIHN0b3JlLiBXZSBuZWVkIHRvIHBlcmZvcm0gZXZpY3Rpb24sIGFzIGEgc3Vic2VxdWVudCBjYWxsXG4gICAgICAvLyB0byBnZXQgd291bGQgZG8gdGhlIHNhbWUuIElmIHRoZSBgZXhpc3RzYCBjaGVjayBzYXlzIGl0IGV4aXN0cyxcbiAgICAgIC8vIGJldCBpdCBkb2Vzbid0IHdoZW4gd2UgYGdldGAsIHRoZW4gYGV4aXN0c2AgaXMgYSB3b3J0aGxlc3Mgb3BlcmF0aW9uLlxuICAgICAgLy9cbiAgICAgIC8vIE5vdGUgdGhhdCBpZiB5b3UncmUgdXNpbmcgYSBDYWNoaW5nRGF0YVN0b3JlIGJhY2tlZCBieSBhbiBJbk1lbW9yeURhdGFTdG9yZVxuICAgICAgLy8gYmFja2VkIGJ5IGFuIExSVUhhc2hNYXAsIHRoaXMgd2lsbCBjYXVzZSB0aGUgZW50cnkgdG8gYmUgXCJ0b3VjaGVkXCIsIHdoZXJlYXNcbiAgICAgIC8vIGEgbm9ybWFsIFwiZXhpc3RzXCIgY2hlY2sgd291bGQgbm90LlxuICAgICAgcmV0dXJuIFByb21pc2VcbiAgICAgICAgLmJpbmQodGhpcylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tpbmdTdG9yZS5nZXQoa2V5KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKCFlbnRyeS5pc0V4cGlyZWQodGhpcy5fc2VxdWVuY2VyLnZhbHVlKCksIHRoaXMuX3R0bCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmFja2luZ1N0b3JlLnJlbW92ZShrZXkpXG4gICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC50aGVuUmV0dXJuKGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KSxcblxuICAgIGNsZWFyOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9iYWNraW5nU3RvcmUuY2xlYXIoKTtcbiAgICB9KVxuICB9KTtcblxuICB2YXIgRW50cnkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChFbnRyeS5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgLy8gUGVyZmVjdGx5IGFjY2VwdGFibGUgdG8gcGFzcyBpbiB1bmRlZmluZWQuLi5cbiAgICAgIHRoaXMuX3ZhbHVlID0gb3B0cy5nZXRPckVsc2UoXCJ2YWx1ZVwiLCB1bmRlZmluZWQpO1xuICAgICAgdGhpcy5fbGFzdFNlcXVlbmNlID0gb3B0cy5nZXRPckVycm9yKFwiaW5pdGlhbFNlcXVlbmNlXCIpO1xuICAgIH0sXG5cbiAgICBpc0V4cGlyZWQ6IGZ1bmN0aW9uKHNlcXVlbmNlLCB0dGwpIHtcbiAgICAgIC8vIEUuZy4sIGxhc3RTZXF1ZW5jZSA9IDQsIHR0bCA9IDEsIHNlcXVlbmNlID0gNTogZXhwaXJlZFxuICAgICAgLy8gICAgICAgbGFzdFNlcXVlbmNlID0gNCwgdHRsID0gMSwgc2VxdWVuY2UgPSA0OiBub3QgZXhwaXJlZFxuICAgICAgLy8gICAgICAgbGFzdFNlcXVlbmNlID0gNCwgdHRsID0gMiwgc2VxdWVuY2UgPSA1OiBub3QgZXhwaXJlZFxuICAgICAgcmV0dXJuIHRoaXMuX2xhc3RTZXF1ZW5jZSArIHR0bCA8PSBzZXF1ZW5jZTtcbiAgICB9LFxuXG4gICAgdG91Y2g6IGZ1bmN0aW9uKHNlcXVlbmNlKSB7XG4gICAgICB0aGlzLl9sYXN0U2VxdWVuY2UgPSBzZXF1ZW5jZTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbih2YWwsIHNlcXVlbmNlKSB7XG4gICAgICB0aGlzLl92YWx1ZSAgICAgICAgPSB2YWw7XG4gICAgICB0aGlzLl9sYXN0U2VxdWVuY2UgPSBzZXF1ZW5jZTtcbiAgICB9LFxuXG4gICAgZGlzcG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl92YWx1ZSAgICAgICAgPSBudWxsO1xuICAgICAgdGhpcy5fbGFzdFNlcXVlbmNlID0gbnVsbDtcbiAgICB9LFxuXG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIENhY2hpbmdEYXRhU3RvcmU7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcImJsdWViaXJkXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9vcHRpb25zXCIpLFxuICByZXF1aXJlKFwiLi9pbi1tZW1vcnktZGF0YS1zdG9yZVwiKSxcbiAgcmVxdWlyZShcIi4uL2NvcmUvc2VxdWVuY2VyL3VuaXQtc2VxdWVuY2VyXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIFByb21pc2UsXG4gIE9wdGlvbnMsXG4gIE9iamVjdEhhc2hNYXBcbikge1xuXG4gIC8qKlxuICAgKiBJbk1lbW9yeURhdGFTdG9yZSBkZWxlZ2F0ZXMgdG8gYSBiYWNraW5nIEhhc2hNYXAuIEJ5IGRlZmF1bHQsIHRoaXNcbiAgICogd2lsbCBiZSBhIFwicG9vciBtYW4ncyBIYXNoTWFwXCIsIGEuay5hLiwgdGhlIE9iamVjdEhhc2hNYXAuXG4gICAqL1xuICB2YXIgSW5NZW1vcnlEYXRhU3RvcmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChJbk1lbW9yeURhdGFTdG9yZS5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdGhpcy5fbWFwID0gb3B0cy5nZXRPckVsc2VGbihcImJhY2tpbmdIYXNoTWFwXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV3IE9iamVjdEhhc2hNYXAoKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXQ6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC5nZXQoa2V5KTtcbiAgICB9KSxcblxuICAgIHB1dDogUHJvbWlzZS5tZXRob2QoZnVuY3Rpb24oa2V5LCB2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAucHV0KGtleSwgdmFsKTtcbiAgICB9KSxcblxuICAgIHJlbW92ZTogUHJvbWlzZS5tZXRob2QoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLnJlbW92ZShrZXkpO1xuICAgIH0pLFxuXG4gICAgZXhpc3RzOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbihrZXkpe1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC5leGlzdHMoa2V5KTtcbiAgICB9KSxcblxuICAgIGNsZWFyOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAuY2xlYXIoKTtcbiAgICB9KVxuICB9KTtcblxuICByZXR1cm4gSW5NZW1vcnlEYXRhU3RvcmU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCJibHVlYmlyZFwiKSxcbiAgcmVxdWlyZShcIi4uL2NvcmUvb3B0aW9uc1wiKSxcbiAgcmVxdWlyZShcIi4uL2NvbGxlY3Rpb24vb2JqZWN0LWhhc2gtbWFwXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIE9wdGlvbnMsXG4gIEluTWVtb3J5RGF0YVN0b3JlLFxuICBMUlVIYXNoTWFwXG4pIHtcblxuICB2YXIgTFJVRGF0YVN0b3JlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoTFJVRGF0YVN0b3JlLnByb3RvdHlwZSwgSW5NZW1vcnlEYXRhU3RvcmUucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcbiAgICAgIHZhciBtYXAgPSBuZXcgTFJVSGFzaE1hcCh7XG4gICAgICAgIGNhcGFjaXR5OiBvcHRzLmdldE9yRXJyb3IoXCJjYXBhY2l0eVwiKVxuICAgICAgfSk7XG4gICAgICBJbk1lbW9yeURhdGFTdG9yZS5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgYmFja2luZ0hhc2hNYXA6IG1hcFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gTFJVRGF0YVN0b3JlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9vcHRpb25zXCIpLFxuICByZXF1aXJlKFwiLi9pbi1tZW1vcnktZGF0YS1zdG9yZVwiKSxcbiAgcmVxdWlyZShcIi4uL2NvbGxlY3Rpb24vbHJ1LWhhc2gtbWFwXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIFNjb3BlZENvbmZpZ3VyYXRpb25SZXNvbHZlclxuKSB7XG5cbiAgdmFyIENvbmZpZ3VyYXRpb25NYWdpYyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKENvbmZpZ3VyYXRpb25NYWdpYy5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHt9XG4gIH0pO1xuXG4gIF8uZXh0ZW5kKENvbmZpZ3VyYXRpb25NYWdpYywge1xuICAgIHJlc29sdmVDb25maWc6IGZ1bmN0aW9uKHNjb3BlcywgY29uZmlnT2JqZWN0cykge1xuICAgICAgdmFyIHIgPSBuZXcgU2NvcGVkQ29uZmlndXJhdGlvblJlc29sdmVyKCk7XG4gICAgICBfLmVhY2goY29uZmlnT2JqZWN0cywgZnVuY3Rpb24oYykge1xuICAgICAgICByLmFkZChjKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHIucmVzb2x2ZShzY29wZXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIENvbmZpZ3VyYXRpb25NYWdpYztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcIi4vY29uZmlnL3Njb3BlZC1jb25maWd1cmF0aW9uLXJlc29sdmVyXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIFByb21pc2UsXG4gIExvZ2dlcixcbiAgT3B0aW9ucyxcbiAgU3RhdGVHdWFyZCxcbiAgUnVudGltZSxcbiAgUHJvY2Vzc0tlZXBBbGl2ZVxuKSB7XG4gIHZhciBMb2cgPSBMb2dnZXIuY3JlYXRlKFwiQXBwXCIpO1xuXG4gIHZhciBBcHAgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChBcHAucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcbiAgICAgIHRoaXMuX2d1YXJkID0gbmV3IFN0YXRlR3VhcmQoW1wic3RhcnRpbmdcIiwgXCJzdGFydGVkXCIsIFwic3RvcHBpbmdcIiwgXCJzdG9wcGVkXCJdKTtcbiAgICAgIHRoaXMuX3Jhd0NvbmZpZyA9IG9wdHMuZ2V0T3JFcnJvcihcImNvbmZpZ3VyYXRpb25cIik7XG4gICAgICB0aGlzLl9jb25maWcgPSBPcHRpb25zLmZyb21PYmplY3QodGhpcy5fcmF3Q29uZmlnKTtcblxuICAgICAgLy8gVGhlIGRlZmF1bHQgUnVudGltZSBoYXMgc2Vuc2libGUgZGVmYXVsdHMuXG4gICAgICB0aGlzLl9ydW50aW1lID0gb3B0cy5nZXRPckVsc2VGbihcInJ1bnRpbWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUnVudGltZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2tlZXBBbGl2ZSA9IG5ldyBQcm9jZXNzS2VlcEFsaXZlKHtcbiAgICAgICAgc2NoZWR1bGVyOiB0aGlzLl9ydW50aW1lLnNjaGVkdWxlcigpXG4gICAgICB9KTtcblxuICAgICAgdmFyIHVwICAgPSBvcHRzLmdldE9yRWxzZShcInVwXCIpLFxuICAgICAgICAgIGRvd24gPSBvcHRzLmdldE9yRWxzZShcImRvd25cIik7XG5cbiAgICAgIGlmICh1cCkge1xuICAgICAgICB0aGlzLnVwID0gUHJvbWlzZS5tZXRob2QoXy5iaW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB1cC5jYWxsKHRoaXMsIHRoaXMuX2NvbmZpZyk7XG4gICAgICAgIH0sIHRoaXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRvd24pIHtcbiAgICAgICAgdGhpcy5kb3duID0gUHJvbWlzZS5tZXRob2QoXy5iaW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBkb3duLmNhbGwodGhpcywgdGhpcy5fY29uZmlnKTtcbiAgICAgICAgfSwgdGhpcykpO1xuICAgICAgfVxuXG4gICAgfSxcblxuICAgIHN0YXJ0OiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIExvZy5kZWJ1ZyhcIlN0YXJ0aW5nIEFwcFwiKTtcbiAgICAgIHRoaXMuX2d1YXJkXG4gICAgICAgIC5kZW55KFwic3RhcnRpbmdcIilcbiAgICAgICAgLmFwcGx5KFwic3RhcnRpbmdcIik7XG5cbiAgICAgIHRoaXMuX2tlZXBBbGl2ZS5zdGFydCgpO1xuICAgICAgTG9nLmRlYnVnKFwiQ2FsbGluZyBBcHAjdXAoKVwiKTtcblxuICAgICAgcmV0dXJuIHRoaXMudXAoKVxuICAgICAgICAudGhlbih0aGlzLl9ndWFyZC5hcHBseUFzeW5jRm4oXCJzdGFydGVkXCIpKTtcbiAgICB9KSxcblxuICAgIHN0b3A6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgICAgTG9nLmRlYnVnKFwiU3RvcHBpbmcgQXBwXCIpO1xuICAgICAgdGhpcy5fZ3VhcmRcbiAgICAgICAgLmRlbnkoXCJzdG9wcGluZ1wiKVxuICAgICAgICAuYXBwbHkoXCJzdG9wcGluZ1wiKTtcblxuICAgICAgdGhpcy5fa2VlcEFsaXZlLnN0b3AoKTtcbiAgICAgIExvZy5kZWJ1ZyhcIkNhbGxpbmcgQXBwI2Rvd24oKVwiKTtcblxuICAgICAgcmV0dXJuIHRoaXMuZG93bigpXG4gICAgICAgIC50aGVuKHRoaXMuX2d1YXJkLmFwcGx5QXN5bmNGbihcInN0b3BwZWRcIikpO1xuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVxdWVzdGVkIGNvbmZpZ3VyYXRpb24gdmFsdWUsIG9yIHRocm93cyBhbiBlcnJvci5cbiAgICAgKiBAcGFyYW0ga2V5IHRoZSBjb25maWd1cmF0aW9uIGtleSByZXF1ZXN0IGZyb20gdGhlIENvbmZpZ3VyYXRpb24uXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBjb25maWc6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5nZXRPckVycm9yKGtleSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRPRE86IERvYy4gU3ViY2xhc3Mgc2hvdWxkIG92ZXJyaWRlLlxuICAgICAqL1xuICAgIHVwOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbigpIHt9KSxcblxuICAgIC8qKlxuICAgICAqIFRPRE86IERvYy4gU3ViY2xhc3Mgc2hvdWxkIG92ZXJyaWRlLlxuICAgICAqL1xuICAgIGRvd246IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKCkge30pXG4gIH0pO1xuXG4gIHJldHVybiBBcHA7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCJibHVlYmlyZFwiKSxcbiAgcmVxdWlyZShcIi4uL2xvZ2dpbmcvbG9nZ2VyXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9vcHRpb25zXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9zdGF0ZS1ndWFyZFwiKSxcbiAgcmVxdWlyZShcIi4uL3J1bnRpbWVcIiksXG4gIHJlcXVpcmUoXCIuL2ludGVybmFsL3Byb2Nlc3Mta2VlcC1hbGl2ZVwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBSZWYsXG4gIE9wdGlvbnNcbikge1xuXG4gIHZhciBMb2dnZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChMb2dnZXIucHJvdG90eXBlLCB7XG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdGhpcy5fbmFtZSAgICAgICAgID0gb3B0cy5nZXRPckVsc2UoXCJuYW1lXCIsIFwiRGVmYXVsdFwiKTtcbiAgICAgIHRoaXMuX2xvZ0xldmVsICAgICA9IG9wdHMuZ2V0T3JFbHNlKFwibG9nTGV2ZWxcIiwgTG9nVXRpbC5MZXZlbC5JbmZvKTtcbiAgICAgIHRoaXMuX3BhcmVudCAgICAgICA9IG9wdHMuZ2V0T3JFbHNlRm4oXCJyZWZQYXJlbnRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBSZWYobnVsbCkgfSk7XG5cbiAgICAgIHRoaXMuX2FwcGVuZGVycyA9IFtdO1xuICAgIH0sXG5cbiAgICB0cmFjZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9sb2coTG9nVXRpbC5MZXZlbC5UcmFjZSwgXy50b0FycmF5KGFyZ3VtZW50cykpO1xuICAgIH0sXG5cbiAgICBkZWJ1ZzogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9sb2coTG9nVXRpbC5MZXZlbC5EZWJ1ZywgXy50b0FycmF5KGFyZ3VtZW50cykpO1xuICAgIH0sXG5cbiAgICBpbmZvOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2xvZyhMb2dVdGlsLkxldmVsLkluZm8sIF8udG9BcnJheShhcmd1bWVudHMpKTtcbiAgICB9LFxuXG4gICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fbG9nKExvZ1V0aWwuTGV2ZWwuRXJyb3IsIF8udG9BcnJheShhcmd1bWVudHMpKTtcbiAgICB9LFxuXG4gICAgZmF0YWw6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fbG9nKExvZ1V0aWwuTGV2ZWwuRmF0YWwsIF8udG9BcnJheShhcmd1bWVudHMpKTtcbiAgICB9LFxuXG4gICAgaXNUcmFjZUVuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNMb2dMZXZlbEVuYWJsZWQoTG9nZ2VyLkxldmVsLlRyYWNlKTtcbiAgICB9LFxuXG4gICAgaXNEZWJ1Z0VuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNMb2dMZXZlbEVuYWJsZWQoTG9nZ2VyLkxldmVsLkRlYnVnKTtcbiAgICB9LFxuXG4gICAgaXNJbmZvRW5hYmxlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0xvZ0xldmVsRW5hYmxlZChMb2dnZXIuTGV2ZWwuSW5mbyk7XG4gICAgfSxcblxuICAgIGlzRXJyb3JFbmFibGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzTG9nTGV2ZWxFbmFibGVkKExvZ2dlci5MZXZlbC5FcnJvcik7XG4gICAgfSxcblxuICAgIGlzRmF0YWxFbmFibGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzTG9nTGV2ZWxFbmFibGVkKExvZ2dlci5MZXZlbC5GYXRhbCk7XG4gICAgfSxcblxuICAgIGlzTG9nTGV2ZWxFbmFibGVkOiBmdW5jdGlvbihsb2dMZXZlbCkge1xuICAgICAgdmFyIGNvZXJjZWRMb2dMZXZlbCA9IGIobG9nTGV2ZWwpO1xuICAgICAgcmV0dXJuICh0aGlzLl9sb2dMZXZlbCAmIGNvZXJjZWRMb2dMZXZlbCkgPT09IGNvZXJjZWRMb2dMZXZlbDtcbiAgICB9LFxuXG4gICAgYWRkQXBwZW5kZXI6IGZ1bmN0aW9uKGFwcGVuZGVyKSB7XG4gICAgICB0aGlzLl9hcHBlbmRlcnMucHVzaChhcHBlbmRlcik7XG4gICAgfSxcblxuICAgIHNldExvZ0xldmVsOiBmdW5jdGlvbihsb2dMZXZlbCkge1xuICAgICAgLy8gU2F2ZSBhIGNvcHkgZm9yIHRoZSBwb3RlbnRpYWwgZXJyb3IgbWVzc2FnZVxuICAgICAgdmFyIG9yaWdpbmFsTG9nTGV2ZWwgPSBsb2dMZXZlbDtcblxuICAgICAgLy8gSWYgbmFtZSBpcyBzcGVjaWZpZWQsIGUuZy4sIFwiSW5mb1wiLCBjb252ZXJ0IHRvXG4gICAgICAvLyBpbnRcbiAgICAgIGlmIChfLmlzU3RyaW5nKGxvZ0xldmVsKSkge1xuICAgICAgICBsb2dMZXZlbCA9IExvZ1V0aWwuTGV2ZWxbbG9nTGV2ZWxdXG4gICAgICB9XG5cbiAgICAgIHZhciBleGlzdHMgPSBfLmRldGVjdChMb2dVdGlsLkxldmVsLCBmdW5jdGlvbihsZXZlbCwgbmFtZSkge1xuICAgICAgICByZXR1cm4gbGV2ZWwgPT09IGxvZ0xldmVsO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9nTGV2ZWw6IFwiICsgb3JpZ2luYWxMb2dMZXZlbCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xvZ0xldmVsID0gbG9nTGV2ZWw7XG4gICAgfSxcblxuXG4gICAgX2xvZzogZnVuY3Rpb24obG9nTGV2ZWwsIGxvZ0FyZ3MpIHtcbiAgICAgIHRoaXMuX2xvZ1dpdGhNZXRhZGF0YShbXSwgbG9nTGV2ZWwsIGxvZ0FyZ3MpO1xuICAgIH0sXG5cbiAgICBfbG9nV2l0aE1ldGFkYXRhOiBmdW5jdGlvbihkZXNjZW5kYW50cywgbG9nTGV2ZWwsIGFyZ3MpIHtcbiAgICAgIGlmICh0aGlzLmlzTG9nTGV2ZWxFbmFibGVkKGxvZ0xldmVsKSkge1xuICAgICAgICBfLmVhY2godGhpcy5fYXBwZW5kZXJzLCBmdW5jdGlvbihhcHBlbmRlcikge1xuICAgICAgICAgIGFwcGVuZGVyLmxvZyh0aGlzLl9uYW1lLCBkZXNjZW5kYW50cywgbG9nTGV2ZWwsIExvZ1V0aWwuX0xhYmVsW2xvZ0xldmVsXSwgYXJncyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcGFyZW50LmdldCgpKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudC5nZXQoKS5fbG9nV2l0aE1ldGFkYXRhKFt0aGlzLl9uYW1lXS5jb25jYXQoZGVzY2VuZGFudHMpLCBsb2dMZXZlbCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB2YXIgTG9nVXRpbCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIC8vIENvZXJjZSAoanVzdCB1c2UgcmlnaHRtb3N0IDggYml0cykhOyBiZWNhdXNlIEpTIGlzIGR1bWIsIGFuZCBldmVyeXRoaW5nIGlzXG4gIC8vIGFjdHVhbGx5IGEgZmxvYXQgd2l0aCA1My1iaXQgcHJlY2lzaW9uXG4gIHZhciBiID0gZnVuY3Rpb24odikge1xuICAgIHJldHVybiAweEZGICYgdjtcbiAgfTtcblxuICBfLmV4dGVuZChMb2dVdGlsLCB7XG4gICAgTGV2ZWw6IHtcbiAgICAgIFRyYWNlOiBiKHBhcnNlSW50KFwiMTExMTFcIiwgMikpLFxuICAgICAgRGVidWc6IGIocGFyc2VJbnQoXCIwMTExMVwiLCAyKSksXG4gICAgICBJbmZvOiAgYihwYXJzZUludChcIjAwMTExXCIsIDIpKSxcbiAgICAgIEVycm9yOiBiKHBhcnNlSW50KFwiMDAwMTFcIiwgMikpLFxuICAgICAgRmF0YWw6IGIocGFyc2VJbnQoXCIwMDAwMVwiLCAyKSlcbiAgICB9XG4gIH0pO1xuXG4gIF8uZXh0ZW5kKExvZ1V0aWwucHJvdG90eXBlLCB7XG4gICAgTGV2ZWw6IExvZ1V0aWwuTGV2ZWwsXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9yb290TG9nZ2VyID0gUmVmKG5ldyBMb2dnZXIoe1xuICAgICAgICBuYW1lOiBcIlJvb3RcIlxuICAgICAgfSkpO1xuICAgIH0sXG5cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKG5hbWUsIG9wdHMpIHtcbiAgICAgIG9wdHMgPSBfLmNsb25lKG9wdHMgfHwge30pO1xuXG4gICAgICB2YXIgcGFyZW50O1xuICAgICAgaWYgKG9wdHMucGFyZW50KSB7XG4gICAgICAgIHBhcmVudCA9IFJlZihvcHRzLnBhcmVudCk7XG4gICAgICAgIGRlbGV0ZShvcHRzLnBhcmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQgPSBSZWYuZGVsZWdhdGluZyh0aGlzLl9yb290TG9nZ2VyKTtcbiAgICAgIH1cblxuICAgICAgb3B0cy5yZWZQYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgIG9wdHMubmFtZSA9IG5hbWU7XG5cbiAgICAgIHJldHVybiBuZXcgTG9nZ2VyKG9wdHMpO1xuICAgIH0sXG5cbiAgICByb290OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yb290TG9nZ2VyLmdldCgpO1xuICAgIH0sXG5cbiAgICByZXNldFJvb3RMb2dnZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fcm9vdExvZ2dlci5zZXQobmV3IExvZ2dlcih7XG4gICAgICAgIG5hbWU6IFwiUm9vdFwiXG4gICAgICB9KSk7XG4gICAgfVxuICB9KTtcblxuXG4gIExvZ1V0aWwuX0xhYmVsID0gXy5yZWR1Y2UoTG9nVXRpbC5MZXZlbCwgZnVuY3Rpb24obWVtbywgdmFsLCBrZXkpIHtcbiAgICBtZW1vW3ZhbF0gPSBrZXk7XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIHt9KTtcblxuICByZXR1cm4gbmV3IExvZ1V0aWwoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcIi4uL2NvcmUvcmVmXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9vcHRpb25zXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIE9wdGlvbnMsXG4gIFJlZixcbiAgUmVhY3RpdmVOb2RlLFxuICBEZWZhdWx0U2NoZWR1bGVyXG4pIHtcblxuICB2YXIgUmVhY3RvciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKFJlYWN0b3IucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcbiAgICAgIHRoaXMuX3NjaGVkdWxlciA9IG9wdHMuZ2V0T3JFbHNlRm4oXCJzY2hlZHVsZXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBSZWYobmV3IERlZmF1bHRTY2hlZHVsZXIoKSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZyb21Qcm9taXNlOiBmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICB2YXIgbm9kZSA9IG5ldyBSZWFjdGl2ZU5vZGUoKTtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2KSB7XG4gICAgICAgIG5vZGUuX2FwcGx5KHYpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIG5vZGUuX2FwcGx5RXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcbiAgICBmcm9tQXJyYXk6IGZ1bmN0aW9uKGFyeSkge1xuICAgICAgdmFyIG5vZGUgPSBuZXcgUmVhY3RpdmVOb2RlKCk7XG5cbiAgICAgIHRoaXMuX3NjaGVkdWxlci5nZXQoKS5zY2hlZHVsZShmdW5jdGlvbigpIHtcbiAgICAgICAgXy5lYWNoKGFyeSwgZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICAgICAgbm9kZS5fYXBwbHkoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFJlYWN0b3I7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL29wdGlvbnNcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL3JlZlwiKSxcbiAgcmVxdWlyZShcIi4vcmVhY3RpdmUtbm9kZVwiKSxcbiAgcmVxdWlyZShcIi4uL3NjaGVkdWxlclwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBPcHRpb25zXG4pIHtcblxuICB2YXIgQ29tcG9uZW50UmVnaXN0cnkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChDb21wb25lbnRSZWdpc3RyeS5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX21vZHVsZXMgPSB7fTtcbiAgICB9LFxuXG5cbiAgICByZWdpc3RlcjogZnVuY3Rpb24ob3B0cykge1xuICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcbiAgICAgIHZhciBhbGlhc2VzICAgPSBvcHRzLmdldE9yRXJyb3IoXCJhc1wiKSxcbiAgICAgICAgICBtb2RPYmplY3QgPSBvcHRzLmdldE9yRXJyb3IoXCJtb2R1bGVcIik7XG5cbiAgICAgIGlmICghXy5pc0FycmF5KGFsaWFzZXMpKSB7XG4gICAgICAgIGFsaWFzZXMgPSBbIGFsaWFzZXMgXTtcbiAgICAgIH1cblxuICAgICAgXy5lYWNoKGFsaWFzZXMsIF8uYmluZChmdW5jdGlvbihhbGlhcykge1xuICAgICAgICB0aGlzLl9tb2R1bGVzW2FsaWFzXSA9IG1vZE9iamVjdDtcbiAgICAgIH0sIHRoaXMpKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHNlbGZSZWdpc3RlcjogZnVuY3Rpb24ob3B0cykge1xuICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcblxuICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoe1xuICAgICAgICBhczogb3B0cy5nZXRPckVycm9yKFwiYXNcIiksXG4gICAgICAgIG1vZHVsZTogQ29tcG9uZW50UmVnaXN0cnlcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIHJlZ2lzdGVyTWFueTogZnVuY3Rpb24oYWxpYXNlc0FyeSkge1xuICAgICAgXy5lYWNoKGFsaWFzZXNBcnksIF8uYmluZChmdW5jdGlvbihhbGlhcykge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKGFsaWFzKTtcbiAgICAgIH0sIHRoaXMpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnQ6IGZ1bmN0aW9uKGFsaWFzKSB7XG4gICAgICB2YXIgbSA9IHRoaXMuX21vZHVsZXNbYWxpYXNdO1xuICAgICAgaWYgKCFtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYWxpYXMgcHJvdmlkZWQgKG5vIHN1Y2ggbW9kdWxlKTogYFwiK2FsaWFzK1wiJ1wiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtO1xuICAgIH1cblxuICB9KTtcblxuICBDb21wb25lbnRSZWdpc3RyeS5wcm90b3R5cGUuYyA9IENvbXBvbmVudFJlZ2lzdHJ5LnByb3RvdHlwZS5jb21wb25lbnQ7XG5cbiAgcmV0dXJuIENvbXBvbmVudFJlZ2lzdHJ5O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9vcHRpb25zXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7Ly8gICAgIFVuZGVyc2NvcmUuanMgMS42LjBcbi8vICAgICBodHRwOi8vdW5kZXJzY29yZWpzLm9yZ1xuLy8gICAgIChjKSAyMDA5LTIwMTQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbi8vICAgICBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4oZnVuY3Rpb24oKSB7XG5cbiAgLy8gQmFzZWxpbmUgc2V0dXBcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICAvLyBFc3RhYmxpc2ggdGhlIHJvb3Qgb2JqZWN0LCBgd2luZG93YCBpbiB0aGUgYnJvd3Nlciwgb3IgYGV4cG9ydHNgIG9uIHRoZSBzZXJ2ZXIuXG4gIHZhciByb290ID0gdGhpcztcblxuICAvLyBTYXZlIHRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgYF9gIHZhcmlhYmxlLlxuICB2YXIgcHJldmlvdXNVbmRlcnNjb3JlID0gcm9vdC5fO1xuXG4gIC8vIEVzdGFibGlzaCB0aGUgb2JqZWN0IHRoYXQgZ2V0cyByZXR1cm5lZCB0byBicmVhayBvdXQgb2YgYSBsb29wIGl0ZXJhdGlvbi5cbiAgdmFyIGJyZWFrZXIgPSB7fTtcblxuICAvLyBTYXZlIGJ5dGVzIGluIHRoZSBtaW5pZmllZCAoYnV0IG5vdCBnemlwcGVkKSB2ZXJzaW9uOlxuICB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSwgT2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlLCBGdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgLy8gQ3JlYXRlIHF1aWNrIHJlZmVyZW5jZSB2YXJpYWJsZXMgZm9yIHNwZWVkIGFjY2VzcyB0byBjb3JlIHByb3RvdHlwZXMuXG4gIHZhclxuICAgIHB1c2ggICAgICAgICAgICAgPSBBcnJheVByb3RvLnB1c2gsXG4gICAgc2xpY2UgICAgICAgICAgICA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgY29uY2F0ICAgICAgICAgICA9IEFycmF5UHJvdG8uY29uY2F0LFxuICAgIHRvU3RyaW5nICAgICAgICAgPSBPYmpQcm90by50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSAgID0gT2JqUHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbiAgLy8gQWxsICoqRUNNQVNjcmlwdCA1KiogbmF0aXZlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9ucyB0aGF0IHdlIGhvcGUgdG8gdXNlXG4gIC8vIGFyZSBkZWNsYXJlZCBoZXJlLlxuICB2YXJcbiAgICBuYXRpdmVGb3JFYWNoICAgICAgPSBBcnJheVByb3RvLmZvckVhY2gsXG4gICAgbmF0aXZlTWFwICAgICAgICAgID0gQXJyYXlQcm90by5tYXAsXG4gICAgbmF0aXZlUmVkdWNlICAgICAgID0gQXJyYXlQcm90by5yZWR1Y2UsXG4gICAgbmF0aXZlUmVkdWNlUmlnaHQgID0gQXJyYXlQcm90by5yZWR1Y2VSaWdodCxcbiAgICBuYXRpdmVGaWx0ZXIgICAgICAgPSBBcnJheVByb3RvLmZpbHRlcixcbiAgICBuYXRpdmVFdmVyeSAgICAgICAgPSBBcnJheVByb3RvLmV2ZXJ5LFxuICAgIG5hdGl2ZVNvbWUgICAgICAgICA9IEFycmF5UHJvdG8uc29tZSxcbiAgICBuYXRpdmVJbmRleE9mICAgICAgPSBBcnJheVByb3RvLmluZGV4T2YsXG4gICAgbmF0aXZlTGFzdEluZGV4T2YgID0gQXJyYXlQcm90by5sYXN0SW5kZXhPZixcbiAgICBuYXRpdmVJc0FycmF5ICAgICAgPSBBcnJheS5pc0FycmF5LFxuICAgIG5hdGl2ZUtleXMgICAgICAgICA9IE9iamVjdC5rZXlzLFxuICAgIG5hdGl2ZUJpbmQgICAgICAgICA9IEZ1bmNQcm90by5iaW5kO1xuXG4gIC8vIENyZWF0ZSBhIHNhZmUgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgdXNlIGJlbG93LlxuICB2YXIgXyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBfKSByZXR1cm4gb2JqO1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBfKSkgcmV0dXJuIG5ldyBfKG9iaik7XG4gICAgdGhpcy5fd3JhcHBlZCA9IG9iajtcbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciAqKk5vZGUuanMqKiwgd2l0aFxuICAvLyBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBmb3IgdGhlIG9sZCBgcmVxdWlyZSgpYCBBUEkuIElmIHdlJ3JlIGluXG4gIC8vIHRoZSBicm93c2VyLCBhZGQgYF9gIGFzIGEgZ2xvYmFsIG9iamVjdCB2aWEgYSBzdHJpbmcgaWRlbnRpZmllcixcbiAgLy8gZm9yIENsb3N1cmUgQ29tcGlsZXIgXCJhZHZhbmNlZFwiIG1vZGUuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IF87XG4gICAgfVxuICAgIGV4cG9ydHMuXyA9IF87XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5fID0gXztcbiAgfVxuXG4gIC8vIEN1cnJlbnQgdmVyc2lvbi5cbiAgXy5WRVJTSU9OID0gJzEuNi4wJztcblxuICAvLyBDb2xsZWN0aW9uIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFRoZSBjb3JuZXJzdG9uZSwgYW4gYGVhY2hgIGltcGxlbWVudGF0aW9uLCBha2EgYGZvckVhY2hgLlxuICAvLyBIYW5kbGVzIG9iamVjdHMgd2l0aCB0aGUgYnVpbHQtaW4gYGZvckVhY2hgLCBhcnJheXMsIGFuZCByYXcgb2JqZWN0cy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGZvckVhY2hgIGlmIGF2YWlsYWJsZS5cbiAgdmFyIGVhY2ggPSBfLmVhY2ggPSBfLmZvckVhY2ggPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gb2JqO1xuICAgIGlmIChuYXRpdmVGb3JFYWNoICYmIG9iai5mb3JFYWNoID09PSBuYXRpdmVGb3JFYWNoKSB7XG4gICAgICBvYmouZm9yRWFjaChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpbaV0sIGksIG9iaikgPT09IGJyZWFrZXIpIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXlzW2ldXSwga2V5c1tpXSwgb2JqKSA9PT0gYnJlYWtlcikgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgaXRlcmF0b3IgdG8gZWFjaCBlbGVtZW50LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgbWFwYCBpZiBhdmFpbGFibGUuXG4gIF8ubWFwID0gXy5jb2xsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0cztcbiAgICBpZiAobmF0aXZlTWFwICYmIG9iai5tYXAgPT09IG5hdGl2ZU1hcCkgcmV0dXJuIG9iai5tYXAoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJlc3VsdHMucHVzaChpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHZhciByZWR1Y2VFcnJvciA9ICdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJztcblxuICAvLyAqKlJlZHVjZSoqIGJ1aWxkcyB1cCBhIHNpbmdsZSByZXN1bHQgZnJvbSBhIGxpc3Qgb2YgdmFsdWVzLCBha2EgYGluamVjdGAsXG4gIC8vIG9yIGBmb2xkbGAuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGByZWR1Y2VgIGlmIGF2YWlsYWJsZS5cbiAgXy5yZWR1Y2UgPSBfLmZvbGRsID0gXy5pbmplY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBtZW1vLCBjb250ZXh0KSB7XG4gICAgdmFyIGluaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICBpZiAob2JqID09IG51bGwpIG9iaiA9IFtdO1xuICAgIGlmIChuYXRpdmVSZWR1Y2UgJiYgb2JqLnJlZHVjZSA9PT0gbmF0aXZlUmVkdWNlKSB7XG4gICAgICBpZiAoY29udGV4dCkgaXRlcmF0b3IgPSBfLmJpbmQoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGluaXRpYWwgPyBvYmoucmVkdWNlKGl0ZXJhdG9yLCBtZW1vKSA6IG9iai5yZWR1Y2UoaXRlcmF0b3IpO1xuICAgIH1cbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgbWVtbyA9IHZhbHVlO1xuICAgICAgICBpbml0aWFsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG1lbW8sIHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFpbml0aWFsKSB0aHJvdyBuZXcgVHlwZUVycm9yKHJlZHVjZUVycm9yKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfTtcblxuICAvLyBUaGUgcmlnaHQtYXNzb2NpYXRpdmUgdmVyc2lvbiBvZiByZWR1Y2UsIGFsc28ga25vd24gYXMgYGZvbGRyYC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYHJlZHVjZVJpZ2h0YCBpZiBhdmFpbGFibGUuXG4gIF8ucmVkdWNlUmlnaHQgPSBfLmZvbGRyID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgbWVtbywgY29udGV4dCkge1xuICAgIHZhciBpbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgaWYgKG9iaiA9PSBudWxsKSBvYmogPSBbXTtcbiAgICBpZiAobmF0aXZlUmVkdWNlUmlnaHQgJiYgb2JqLnJlZHVjZVJpZ2h0ID09PSBuYXRpdmVSZWR1Y2VSaWdodCkge1xuICAgICAgaWYgKGNvbnRleHQpIGl0ZXJhdG9yID0gXy5iaW5kKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBpbml0aWFsID8gb2JqLnJlZHVjZVJpZ2h0KGl0ZXJhdG9yLCBtZW1vKSA6IG9iai5yZWR1Y2VSaWdodChpdGVyYXRvcik7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSBvYmoubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09ICtsZW5ndGgpIHtcbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB9XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaW5kZXggPSBrZXlzID8ga2V5c1stLWxlbmd0aF0gOiAtLWxlbmd0aDtcbiAgICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgICBtZW1vID0gb2JqW2luZGV4XTtcbiAgICAgICAgaW5pdGlhbCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBtZW1vLCBvYmpbaW5kZXhdLCBpbmRleCwgbGlzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFpbml0aWFsKSB0aHJvdyBuZXcgVHlwZUVycm9yKHJlZHVjZUVycm9yKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IHZhbHVlIHdoaWNoIHBhc3NlcyBhIHRydXRoIHRlc3QuIEFsaWFzZWQgYXMgYGRldGVjdGAuXG4gIF8uZmluZCA9IF8uZGV0ZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGFueShvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBwYXNzIGEgdHJ1dGggdGVzdC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGZpbHRlcmAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBzZWxlY3RgLlxuICBfLmZpbHRlciA9IF8uc2VsZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdHM7XG4gICAgaWYgKG5hdGl2ZUZpbHRlciAmJiBvYmouZmlsdGVyID09PSBuYXRpdmVGaWx0ZXIpIHJldHVybiBvYmouZmlsdGVyKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpIHJlc3VsdHMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgZm9yIHdoaWNoIGEgdHJ1dGggdGVzdCBmYWlscy5cbiAgXy5yZWplY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmV0dXJuICFwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgIH0sIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIGFsbCBvZiB0aGUgZWxlbWVudHMgbWF0Y2ggYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgZXZlcnlgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgYWxsYC5cbiAgXy5ldmVyeSA9IF8uYWxsID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgfHwgKHByZWRpY2F0ZSA9IF8uaWRlbnRpdHkpO1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICBpZiAobmF0aXZlRXZlcnkgJiYgb2JqLmV2ZXJ5ID09PSBuYXRpdmVFdmVyeSkgcmV0dXJuIG9iai5ldmVyeShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmICghKHJlc3VsdCA9IHJlc3VsdCAmJiBwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSkgcmV0dXJuIGJyZWFrZXI7XG4gICAgfSk7XG4gICAgcmV0dXJuICEhcmVzdWx0O1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiBhdCBsZWFzdCBvbmUgZWxlbWVudCBpbiB0aGUgb2JqZWN0IG1hdGNoZXMgYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgc29tZWAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBhbnlgLlxuICB2YXIgYW55ID0gXy5zb21lID0gXy5hbnkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSB8fCAocHJlZGljYXRlID0gXy5pZGVudGl0eSk7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICBpZiAobmF0aXZlU29tZSAmJiBvYmouc29tZSA9PT0gbmF0aXZlU29tZSkgcmV0dXJuIG9iai5zb21lKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHJlc3VsdCB8fCAocmVzdWx0ID0gcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkpIHJldHVybiBicmVha2VyO1xuICAgIH0pO1xuICAgIHJldHVybiAhIXJlc3VsdDtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIGFycmF5IG9yIG9iamVjdCBjb250YWlucyBhIGdpdmVuIHZhbHVlICh1c2luZyBgPT09YCkuXG4gIC8vIEFsaWFzZWQgYXMgYGluY2x1ZGVgLlxuICBfLmNvbnRhaW5zID0gXy5pbmNsdWRlID0gZnVuY3Rpb24ob2JqLCB0YXJnZXQpIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBvYmouaW5kZXhPZiA9PT0gbmF0aXZlSW5kZXhPZikgcmV0dXJuIG9iai5pbmRleE9mKHRhcmdldCkgIT0gLTE7XG4gICAgcmV0dXJuIGFueShvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IHRhcmdldDtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBJbnZva2UgYSBtZXRob2QgKHdpdGggYXJndW1lbnRzKSBvbiBldmVyeSBpdGVtIGluIGEgY29sbGVjdGlvbi5cbiAgXy5pbnZva2UgPSBmdW5jdGlvbihvYmosIG1ldGhvZCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciBpc0Z1bmMgPSBfLmlzRnVuY3Rpb24obWV0aG9kKTtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIChpc0Z1bmMgPyBtZXRob2QgOiB2YWx1ZVttZXRob2RdKS5hcHBseSh2YWx1ZSwgYXJncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgbWFwYDogZmV0Y2hpbmcgYSBwcm9wZXJ0eS5cbiAgXy5wbHVjayA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgXy5wcm9wZXJ0eShrZXkpKTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaWx0ZXJgOiBzZWxlY3Rpbmcgb25seSBvYmplY3RzXG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ud2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgXy5tYXRjaGVzKGF0dHJzKSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmluZGA6IGdldHRpbmcgdGhlIGZpcnN0IG9iamVjdFxuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLmZpbmRXaGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy5maW5kKG9iaiwgXy5tYXRjaGVzKGF0dHJzKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtYXhpbXVtIGVsZW1lbnQgb3IgKGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICAvLyBDYW4ndCBvcHRpbWl6ZSBhcnJheXMgb2YgaW50ZWdlcnMgbG9uZ2VyIHRoYW4gNjUsNTM1IGVsZW1lbnRzLlxuICAvLyBTZWUgW1dlYktpdCBCdWcgODA3OTddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD04MDc5NylcbiAgXy5tYXggPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzQXJyYXkob2JqKSAmJiBvYmpbMF0gPT09ICtvYmpbMF0gJiYgb2JqLmxlbmd0aCA8IDY1NTM1KSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkoTWF0aCwgb2JqKTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IC1JbmZpbml0eSwgbGFzdENvbXB1dGVkID0gLUluZmluaXR5O1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHZhciBjb21wdXRlZCA9IGl0ZXJhdG9yID8gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpIDogdmFsdWU7XG4gICAgICBpZiAoY29tcHV0ZWQgPiBsYXN0Q29tcHV0ZWQpIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIGxhc3RDb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtaW5pbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICBfLm1pbiA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNBcnJheShvYmopICYmIG9ialswXSA9PT0gK29ialswXSAmJiBvYmoubGVuZ3RoIDwgNjU1MzUpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShNYXRoLCBvYmopO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IEluZmluaXR5O1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHZhciBjb21wdXRlZCA9IGl0ZXJhdG9yID8gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpIDogdmFsdWU7XG4gICAgICBpZiAoY29tcHV0ZWQgPCBsYXN0Q29tcHV0ZWQpIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIGxhc3RDb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gU2h1ZmZsZSBhbiBhcnJheSwgdXNpbmcgdGhlIG1vZGVybiB2ZXJzaW9uIG9mIHRoZVxuICAvLyBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlzaGVy4oCTWWF0ZXNfc2h1ZmZsZSkuXG4gIF8uc2h1ZmZsZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciByYW5kO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNodWZmbGVkID0gW107XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByYW5kID0gXy5yYW5kb20oaW5kZXgrKyk7XG4gICAgICBzaHVmZmxlZFtpbmRleCAtIDFdID0gc2h1ZmZsZWRbcmFuZF07XG4gICAgICBzaHVmZmxlZFtyYW5kXSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbiAgfTtcblxuICAvLyBTYW1wbGUgKipuKiogcmFuZG9tIHZhbHVlcyBmcm9tIGEgY29sbGVjdGlvbi5cbiAgLy8gSWYgKipuKiogaXMgbm90IHNwZWNpZmllZCwgcmV0dXJucyBhIHNpbmdsZSByYW5kb20gZWxlbWVudC5cbiAgLy8gVGhlIGludGVybmFsIGBndWFyZGAgYXJndW1lbnQgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgbWFwYC5cbiAgXy5zYW1wbGUgPSBmdW5jdGlvbihvYmosIG4sIGd1YXJkKSB7XG4gICAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkge1xuICAgICAgaWYgKG9iai5sZW5ndGggIT09ICtvYmoubGVuZ3RoKSBvYmogPSBfLnZhbHVlcyhvYmopO1xuICAgICAgcmV0dXJuIG9ialtfLnJhbmRvbShvYmoubGVuZ3RoIC0gMSldO1xuICAgIH1cbiAgICByZXR1cm4gXy5zaHVmZmxlKG9iaikuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbikpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGxvb2t1cCBpdGVyYXRvcnMuXG4gIHZhciBsb29rdXBJdGVyYXRvciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBfLmlkZW50aXR5O1xuICAgIGlmIChfLmlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgcmV0dXJuIF8ucHJvcGVydHkodmFsdWUpO1xuICB9O1xuXG4gIC8vIFNvcnQgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiBwcm9kdWNlZCBieSBhbiBpdGVyYXRvci5cbiAgXy5zb3J0QnkgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgPSBsb29rdXBJdGVyYXRvcihpdGVyYXRvcik7XG4gICAgcmV0dXJuIF8ucGx1Y2soXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBjcml0ZXJpYTogaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpXG4gICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYTtcbiAgICAgIHZhciBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICBpZiAoYSA+IGIgfHwgYSA9PT0gdm9pZCAwKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGEgPCBiIHx8IGIgPT09IHZvaWQgMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxlZnQuaW5kZXggLSByaWdodC5pbmRleDtcbiAgICB9KSwgJ3ZhbHVlJyk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCBmb3IgYWdncmVnYXRlIFwiZ3JvdXAgYnlcIiBvcGVyYXRpb25zLlxuICB2YXIgZ3JvdXAgPSBmdW5jdGlvbihiZWhhdmlvcikge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICBpdGVyYXRvciA9IGxvb2t1cEl0ZXJhdG9yKGl0ZXJhdG9yKTtcbiAgICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGtleSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBvYmopO1xuICAgICAgICBiZWhhdmlvcihyZXN1bHQsIGtleSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gR3JvdXBzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24uIFBhc3MgZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZVxuICAvLyB0byBncm91cCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNyaXRlcmlvbi5cbiAgXy5ncm91cEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCBrZXksIHZhbHVlKSB7XG4gICAgXy5oYXMocmVzdWx0LCBrZXkpID8gcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSkgOiByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG4gIH0pO1xuXG4gIC8vIEluZGV4ZXMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiwgc2ltaWxhciB0byBgZ3JvdXBCeWAsIGJ1dCBmb3JcbiAgLy8gd2hlbiB5b3Uga25vdyB0aGF0IHlvdXIgaW5kZXggdmFsdWVzIHdpbGwgYmUgdW5pcXVlLlxuICBfLmluZGV4QnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIGtleSwgdmFsdWUpIHtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9KTtcblxuICAvLyBDb3VudHMgaW5zdGFuY2VzIG9mIGFuIG9iamVjdCB0aGF0IGdyb3VwIGJ5IGEgY2VydGFpbiBjcml0ZXJpb24uIFBhc3NcbiAgLy8gZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZSB0byBjb3VudCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gIC8vIGNyaXRlcmlvbi5cbiAgXy5jb3VudEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCBrZXkpIHtcbiAgICBfLmhhcyhyZXN1bHQsIGtleSkgPyByZXN1bHRba2V5XSsrIDogcmVzdWx0W2tleV0gPSAxO1xuICB9KTtcblxuICAvLyBVc2UgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgdGhlIHNtYWxsZXN0IGluZGV4IGF0IHdoaWNoXG4gIC8vIGFuIG9iamVjdCBzaG91bGQgYmUgaW5zZXJ0ZWQgc28gYXMgdG8gbWFpbnRhaW4gb3JkZXIuIFVzZXMgYmluYXJ5IHNlYXJjaC5cbiAgXy5zb3J0ZWRJbmRleCA9IGZ1bmN0aW9uKGFycmF5LCBvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgPSBsb29rdXBJdGVyYXRvcihpdGVyYXRvcik7XG4gICAgdmFyIHZhbHVlID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmopO1xuICAgIHZhciBsb3cgPSAwLCBoaWdoID0gYXJyYXkubGVuZ3RoO1xuICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgICB2YXIgbWlkID0gKGxvdyArIGhpZ2gpID4+PiAxO1xuICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBhcnJheVttaWRdKSA8IHZhbHVlID8gbG93ID0gbWlkICsgMSA6IGhpZ2ggPSBtaWQ7XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG4gIH07XG5cbiAgLy8gU2FmZWx5IGNyZWF0ZSBhIHJlYWwsIGxpdmUgYXJyYXkgZnJvbSBhbnl0aGluZyBpdGVyYWJsZS5cbiAgXy50b0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBbXTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikpIHJldHVybiBzbGljZS5jYWxsKG9iaik7XG4gICAgaWYgKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSByZXR1cm4gXy5tYXAob2JqLCBfLmlkZW50aXR5KTtcbiAgICByZXR1cm4gXy52YWx1ZXMob2JqKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhbiBvYmplY3QuXG4gIF8uc2l6ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkgPyBvYmoubGVuZ3RoIDogXy5rZXlzKG9iaikubGVuZ3RoO1xuICB9O1xuXG4gIC8vIEFycmF5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS1cblxuICAvLyBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGZpcnN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgaGVhZGAgYW5kIGB0YWtlYC4gVGhlICoqZ3VhcmQqKiBjaGVja1xuICAvLyBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8uZmlyc3QgPSBfLmhlYWQgPSBfLnRha2UgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBpZiAoKG4gPT0gbnVsbCkgfHwgZ3VhcmQpIHJldHVybiBhcnJheVswXTtcbiAgICBpZiAobiA8IDApIHJldHVybiBbXTtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgMCwgbik7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgbGFzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEVzcGVjaWFsbHkgdXNlZnVsIG9uXG4gIC8vIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIGFsbCB0aGUgdmFsdWVzIGluXG4gIC8vIHRoZSBhcnJheSwgZXhjbHVkaW5nIHRoZSBsYXN0IE4uIFRoZSAqKmd1YXJkKiogY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aFxuICAvLyBgXy5tYXBgLlxuICBfLmluaXRpYWwgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgMCwgYXJyYXkubGVuZ3RoIC0gKChuID09IG51bGwpIHx8IGd1YXJkID8gMSA6IG4pKTtcbiAgfTtcblxuICAvLyBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgbGFzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuIFRoZSAqKmd1YXJkKiogY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLmxhc3QgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBpZiAoKG4gPT0gbnVsbCkgfHwgZ3VhcmQpIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgTWF0aC5tYXgoYXJyYXkubGVuZ3RoIC0gbiwgMCkpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGZpcnN0IGVudHJ5IG9mIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgdGFpbGAgYW5kIGBkcm9wYC5cbiAgLy8gRXNwZWNpYWxseSB1c2VmdWwgb24gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgYW4gKipuKiogd2lsbCByZXR1cm5cbiAgLy8gdGhlIHJlc3QgTiB2YWx1ZXMgaW4gdGhlIGFycmF5LiBUaGUgKipndWFyZCoqXG4gIC8vIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5yZXN0ID0gXy50YWlsID0gXy5kcm9wID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIChuID09IG51bGwpIHx8IGd1YXJkID8gMSA6IG4pO1xuICB9O1xuXG4gIC8vIFRyaW0gb3V0IGFsbCBmYWxzeSB2YWx1ZXMgZnJvbSBhbiBhcnJheS5cbiAgXy5jb21wYWN0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIF8uaWRlbnRpdHkpO1xuICB9O1xuXG4gIC8vIEludGVybmFsIGltcGxlbWVudGF0aW9uIG9mIGEgcmVjdXJzaXZlIGBmbGF0dGVuYCBmdW5jdGlvbi5cbiAgdmFyIGZsYXR0ZW4gPSBmdW5jdGlvbihpbnB1dCwgc2hhbGxvdywgb3V0cHV0KSB7XG4gICAgaWYgKHNoYWxsb3cgJiYgXy5ldmVyeShpbnB1dCwgXy5pc0FycmF5KSkge1xuICAgICAgcmV0dXJuIGNvbmNhdC5hcHBseShvdXRwdXQsIGlucHV0KTtcbiAgICB9XG4gICAgZWFjaChpbnB1dCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmIChfLmlzQXJyYXkodmFsdWUpIHx8IF8uaXNBcmd1bWVudHModmFsdWUpKSB7XG4gICAgICAgIHNoYWxsb3cgPyBwdXNoLmFwcGx5KG91dHB1dCwgdmFsdWUpIDogZmxhdHRlbih2YWx1ZSwgc2hhbGxvdywgb3V0cHV0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIC8vIEZsYXR0ZW4gb3V0IGFuIGFycmF5LCBlaXRoZXIgcmVjdXJzaXZlbHkgKGJ5IGRlZmF1bHQpLCBvciBqdXN0IG9uZSBsZXZlbC5cbiAgXy5mbGF0dGVuID0gZnVuY3Rpb24oYXJyYXksIHNoYWxsb3cpIHtcbiAgICByZXR1cm4gZmxhdHRlbihhcnJheSwgc2hhbGxvdywgW10pO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHZlcnNpb24gb2YgdGhlIGFycmF5IHRoYXQgZG9lcyBub3QgY29udGFpbiB0aGUgc3BlY2lmaWVkIHZhbHVlKHMpLlxuICBfLndpdGhvdXQgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmRpZmZlcmVuY2UoYXJyYXksIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIH07XG5cbiAgLy8gU3BsaXQgYW4gYXJyYXkgaW50byB0d28gYXJyYXlzOiBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIHNhdGlzZnkgdGhlIGdpdmVuXG4gIC8vIHByZWRpY2F0ZSwgYW5kIG9uZSB3aG9zZSBlbGVtZW50cyBhbGwgZG8gbm90IHNhdGlzZnkgdGhlIHByZWRpY2F0ZS5cbiAgXy5wYXJ0aXRpb24gPSBmdW5jdGlvbihhcnJheSwgcHJlZGljYXRlKSB7XG4gICAgdmFyIHBhc3MgPSBbXSwgZmFpbCA9IFtdO1xuICAgIGVhY2goYXJyYXksIGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgIChwcmVkaWNhdGUoZWxlbSkgPyBwYXNzIDogZmFpbCkucHVzaChlbGVtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW3Bhc3MsIGZhaWxdO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIHRoZSBhcnJheS4gSWYgdGhlIGFycmF5IGhhcyBhbHJlYWR5XG4gIC8vIGJlZW4gc29ydGVkLCB5b3UgaGF2ZSB0aGUgb3B0aW9uIG9mIHVzaW5nIGEgZmFzdGVyIGFsZ29yaXRobS5cbiAgLy8gQWxpYXNlZCBhcyBgdW5pcXVlYC5cbiAgXy51bmlxID0gXy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSwgaXNTb3J0ZWQsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpc1NvcnRlZCkpIHtcbiAgICAgIGNvbnRleHQgPSBpdGVyYXRvcjtcbiAgICAgIGl0ZXJhdG9yID0gaXNTb3J0ZWQ7XG4gICAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgaW5pdGlhbCA9IGl0ZXJhdG9yID8gXy5tYXAoYXJyYXksIGl0ZXJhdG9yLCBjb250ZXh0KSA6IGFycmF5O1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHNlZW4gPSBbXTtcbiAgICBlYWNoKGluaXRpYWwsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgaWYgKGlzU29ydGVkID8gKCFpbmRleCB8fCBzZWVuW3NlZW4ubGVuZ3RoIC0gMV0gIT09IHZhbHVlKSA6ICFfLmNvbnRhaW5zKHNlZW4sIHZhbHVlKSkge1xuICAgICAgICBzZWVuLnB1c2godmFsdWUpO1xuICAgICAgICByZXN1bHRzLnB1c2goYXJyYXlbaW5kZXhdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIHVuaW9uOiBlYWNoIGRpc3RpbmN0IGVsZW1lbnQgZnJvbSBhbGwgb2ZcbiAgLy8gdGhlIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8udW5pb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXy51bmlxKF8uZmxhdHRlbihhcmd1bWVudHMsIHRydWUpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgZXZlcnkgaXRlbSBzaGFyZWQgYmV0d2VlbiBhbGwgdGhlXG4gIC8vIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8uaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdCA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICByZXR1cm4gXy5maWx0ZXIoXy51bmlxKGFycmF5KSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIF8uZXZlcnkocmVzdCwgZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIF8uY29udGFpbnMob3RoZXIsIGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gVGFrZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIG9uZSBhcnJheSBhbmQgYSBudW1iZXIgb2Ygb3RoZXIgYXJyYXlzLlxuICAvLyBPbmx5IHRoZSBlbGVtZW50cyBwcmVzZW50IGluIGp1c3QgdGhlIGZpcnN0IGFycmF5IHdpbGwgcmVtYWluLlxuICBfLmRpZmZlcmVuY2UgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN0ID0gY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBmdW5jdGlvbih2YWx1ZSl7IHJldHVybiAhXy5jb250YWlucyhyZXN0LCB2YWx1ZSk7IH0pO1xuICB9O1xuXG4gIC8vIFppcCB0b2dldGhlciBtdWx0aXBsZSBsaXN0cyBpbnRvIGEgc2luZ2xlIGFycmF5IC0tIGVsZW1lbnRzIHRoYXQgc2hhcmVcbiAgLy8gYW4gaW5kZXggZ28gdG9nZXRoZXIuXG4gIF8uemlwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IF8ubWF4KF8ucGx1Y2soYXJndW1lbnRzLCAnbGVuZ3RoJykuY29uY2F0KDApKTtcbiAgICB2YXIgcmVzdWx0cyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdHNbaV0gPSBfLnBsdWNrKGFyZ3VtZW50cywgJycgKyBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ29udmVydHMgbGlzdHMgaW50byBvYmplY3RzLiBQYXNzIGVpdGhlciBhIHNpbmdsZSBhcnJheSBvZiBgW2tleSwgdmFsdWVdYFxuICAvLyBwYWlycywgb3IgdHdvIHBhcmFsbGVsIGFycmF5cyBvZiB0aGUgc2FtZSBsZW5ndGggLS0gb25lIG9mIGtleXMsIGFuZCBvbmUgb2ZcbiAgLy8gdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzLlxuICBfLm9iamVjdCA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlcykge1xuICAgIGlmIChsaXN0ID09IG51bGwpIHJldHVybiB7fTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1dID0gdmFsdWVzW2ldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1bMF1dID0gbGlzdFtpXVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBJZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBseSB1cyB3aXRoIGluZGV4T2YgKEknbSBsb29raW5nIGF0IHlvdSwgKipNU0lFKiopLFxuICAvLyB3ZSBuZWVkIHRoaXMgZnVuY3Rpb24uIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW5cbiAgLy8gaXRlbSBpbiBhbiBhcnJheSwgb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGluZGV4T2ZgIGlmIGF2YWlsYWJsZS5cbiAgLy8gSWYgdGhlIGFycmF5IGlzIGxhcmdlIGFuZCBhbHJlYWR5IGluIHNvcnQgb3JkZXIsIHBhc3MgYHRydWVgXG4gIC8vIGZvciAqKmlzU29ydGVkKiogdG8gdXNlIGJpbmFyeSBzZWFyY2guXG4gIF8uaW5kZXhPZiA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBpc1NvcnRlZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gLTE7XG4gICAgdmFyIGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgaWYgKGlzU29ydGVkKSB7XG4gICAgICBpZiAodHlwZW9mIGlzU29ydGVkID09ICdudW1iZXInKSB7XG4gICAgICAgIGkgPSAoaXNTb3J0ZWQgPCAwID8gTWF0aC5tYXgoMCwgbGVuZ3RoICsgaXNTb3J0ZWQpIDogaXNTb3J0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSA9IF8uc29ydGVkSW5kZXgoYXJyYXksIGl0ZW0pO1xuICAgICAgICByZXR1cm4gYXJyYXlbaV0gPT09IGl0ZW0gPyBpIDogLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuYXRpdmVJbmRleE9mICYmIGFycmF5LmluZGV4T2YgPT09IG5hdGl2ZUluZGV4T2YpIHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW0sIGlzU29ydGVkKTtcbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgIHJldHVybiAtMTtcbiAgfTtcblxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgbGFzdEluZGV4T2ZgIGlmIGF2YWlsYWJsZS5cbiAgXy5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBmcm9tKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiAtMTtcbiAgICB2YXIgaGFzSW5kZXggPSBmcm9tICE9IG51bGw7XG4gICAgaWYgKG5hdGl2ZUxhc3RJbmRleE9mICYmIGFycmF5Lmxhc3RJbmRleE9mID09PSBuYXRpdmVMYXN0SW5kZXhPZikge1xuICAgICAgcmV0dXJuIGhhc0luZGV4ID8gYXJyYXkubGFzdEluZGV4T2YoaXRlbSwgZnJvbSkgOiBhcnJheS5sYXN0SW5kZXhPZihpdGVtKTtcbiAgICB9XG4gICAgdmFyIGkgPSAoaGFzSW5kZXggPyBmcm9tIDogYXJyYXkubGVuZ3RoKTtcbiAgICB3aGlsZSAoaS0tKSBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgIHJldHVybiAtMTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBhbiBpbnRlZ2VyIEFycmF5IGNvbnRhaW5pbmcgYW4gYXJpdGhtZXRpYyBwcm9ncmVzc2lvbi4gQSBwb3J0IG9mXG4gIC8vIHRoZSBuYXRpdmUgUHl0aG9uIGByYW5nZSgpYCBmdW5jdGlvbi4gU2VlXG4gIC8vIFt0aGUgUHl0aG9uIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS9mdW5jdGlvbnMuaHRtbCNyYW5nZSkuXG4gIF8ucmFuZ2UgPSBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHN0b3AgPSBzdGFydCB8fCAwO1xuICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICBzdGVwID0gYXJndW1lbnRzWzJdIHx8IDE7XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCksIDApO1xuICAgIHZhciBpZHggPSAwO1xuICAgIHZhciByYW5nZSA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUoaWR4IDwgbGVuZ3RoKSB7XG4gICAgICByYW5nZVtpZHgrK10gPSBzdGFydDtcbiAgICAgIHN0YXJ0ICs9IHN0ZXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIChhaGVtKSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUmV1c2FibGUgY29uc3RydWN0b3IgZnVuY3Rpb24gZm9yIHByb3RvdHlwZSBzZXR0aW5nLlxuICB2YXIgY3RvciA9IGZ1bmN0aW9uKCl7fTtcblxuICAvLyBDcmVhdGUgYSBmdW5jdGlvbiBib3VuZCB0byBhIGdpdmVuIG9iamVjdCAoYXNzaWduaW5nIGB0aGlzYCwgYW5kIGFyZ3VtZW50cyxcbiAgLy8gb3B0aW9uYWxseSkuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBGdW5jdGlvbi5iaW5kYCBpZlxuICAvLyBhdmFpbGFibGUuXG4gIF8uYmluZCA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQpIHtcbiAgICB2YXIgYXJncywgYm91bmQ7XG4gICAgaWYgKG5hdGl2ZUJpbmQgJiYgZnVuYy5iaW5kID09PSBuYXRpdmVCaW5kKSByZXR1cm4gbmF0aXZlQmluZC5hcHBseShmdW5jLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIGlmICghXy5pc0Z1bmN0aW9uKGZ1bmMpKSB0aHJvdyBuZXcgVHlwZUVycm9yO1xuICAgIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIGJvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgYm91bmQpKSByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgIGN0b3IucHJvdG90eXBlID0gZnVuYy5wcm90b3R5cGU7XG4gICAgICB2YXIgc2VsZiA9IG5ldyBjdG9yO1xuICAgICAgY3Rvci5wcm90b3R5cGUgPSBudWxsO1xuICAgICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkoc2VsZiwgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUGFydGlhbGx5IGFwcGx5IGEgZnVuY3Rpb24gYnkgY3JlYXRpbmcgYSB2ZXJzaW9uIHRoYXQgaGFzIGhhZCBzb21lIG9mIGl0c1xuICAvLyBhcmd1bWVudHMgcHJlLWZpbGxlZCwgd2l0aG91dCBjaGFuZ2luZyBpdHMgZHluYW1pYyBgdGhpc2AgY29udGV4dC4gXyBhY3RzXG4gIC8vIGFzIGEgcGxhY2Vob2xkZXIsIGFsbG93aW5nIGFueSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMgdG8gYmUgcHJlLWZpbGxlZC5cbiAgXy5wYXJ0aWFsID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBvc2l0aW9uID0gMDtcbiAgICAgIHZhciBhcmdzID0gYm91bmRBcmdzLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gYXJncy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJnc1tpXSA9PT0gXykgYXJnc1tpXSA9IGFyZ3VtZW50c1twb3NpdGlvbisrXTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChwb3NpdGlvbiA8IGFyZ3VtZW50cy5sZW5ndGgpIGFyZ3MucHVzaChhcmd1bWVudHNbcG9zaXRpb24rK10pO1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBCaW5kIGEgbnVtYmVyIG9mIGFuIG9iamVjdCdzIG1ldGhvZHMgdG8gdGhhdCBvYmplY3QuIFJlbWFpbmluZyBhcmd1bWVudHNcbiAgLy8gYXJlIHRoZSBtZXRob2QgbmFtZXMgdG8gYmUgYm91bmQuIFVzZWZ1bCBmb3IgZW5zdXJpbmcgdGhhdCBhbGwgY2FsbGJhY2tzXG4gIC8vIGRlZmluZWQgb24gYW4gb2JqZWN0IGJlbG9uZyB0byBpdC5cbiAgXy5iaW5kQWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGZ1bmNzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcignYmluZEFsbCBtdXN0IGJlIHBhc3NlZCBmdW5jdGlvbiBuYW1lcycpO1xuICAgIGVhY2goZnVuY3MsIGZ1bmN0aW9uKGYpIHsgb2JqW2ZdID0gXy5iaW5kKG9ialtmXSwgb2JqKTsgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBNZW1vaXplIGFuIGV4cGVuc2l2ZSBmdW5jdGlvbiBieSBzdG9yaW5nIGl0cyByZXN1bHRzLlxuICBfLm1lbW9pemUgPSBmdW5jdGlvbihmdW5jLCBoYXNoZXIpIHtcbiAgICB2YXIgbWVtbyA9IHt9O1xuICAgIGhhc2hlciB8fCAoaGFzaGVyID0gXy5pZGVudGl0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGtleSA9IGhhc2hlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIF8uaGFzKG1lbW8sIGtleSkgPyBtZW1vW2tleV0gOiAobWVtb1trZXldID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIERlbGF5cyBhIGZ1bmN0aW9uIGZvciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgYW5kIHRoZW4gY2FsbHNcbiAgLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuICBfLmRlbGF5ID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpOyB9LCB3YWl0KTtcbiAgfTtcblxuICAvLyBEZWZlcnMgYSBmdW5jdGlvbiwgc2NoZWR1bGluZyBpdCB0byBydW4gYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbCBzdGFjayBoYXNcbiAgLy8gY2xlYXJlZC5cbiAgXy5kZWZlciA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICByZXR1cm4gXy5kZWxheS5hcHBseShfLCBbZnVuYywgMV0uY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSkpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIGF0IG1vc3Qgb25jZVxuICAvLyBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS4gTm9ybWFsbHksIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gd2lsbCBydW5cbiAgLy8gYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuICAvLyBidXQgaWYgeW91J2QgbGlrZSB0byBkaXNhYmxlIHRoZSBleGVjdXRpb24gb24gdGhlIGxlYWRpbmcgZWRnZSwgcGFzc1xuICAvLyBge2xlYWRpbmc6IGZhbHNlfWAuIFRvIGRpc2FibGUgZXhlY3V0aW9uIG9uIHRoZSB0cmFpbGluZyBlZGdlLCBkaXR0by5cbiAgXy50aHJvdHRsZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCwgYXJncywgcmVzdWx0O1xuICAgIHZhciB0aW1lb3V0ID0gbnVsbDtcbiAgICB2YXIgcHJldmlvdXMgPSAwO1xuICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogXy5ub3coKTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBub3cgPSBfLm5vdygpO1xuICAgICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcbiAgICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gIC8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAgLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gIC8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4gIF8uZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG5cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsYXN0ID0gXy5ub3coKSAtIHRpbWVzdGFtcDtcbiAgICAgIGlmIChsYXN0IDwgd2FpdCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdGltZXN0YW1wID0gXy5ub3coKTtcbiAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgIH1cbiAgICAgIGlmIChjYWxsTm93KSB7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYXQgbW9zdCBvbmUgdGltZSwgbm8gbWF0dGVyIGhvd1xuICAvLyBvZnRlbiB5b3UgY2FsbCBpdC4gVXNlZnVsIGZvciBsYXp5IGluaXRpYWxpemF0aW9uLlxuICBfLm9uY2UgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgdmFyIHJhbiA9IGZhbHNlLCBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChyYW4pIHJldHVybiBtZW1vO1xuICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgIG1lbW8gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBmdW5jID0gbnVsbDtcbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQsXG4gIC8vIGFsbG93aW5nIHlvdSB0byBhZGp1c3QgYXJndW1lbnRzLCBydW4gY29kZSBiZWZvcmUgYW5kIGFmdGVyLCBhbmRcbiAgLy8gY29uZGl0aW9uYWxseSBleGVjdXRlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAgXy53cmFwID0gZnVuY3Rpb24oZnVuYywgd3JhcHBlcikge1xuICAgIHJldHVybiBfLnBhcnRpYWwod3JhcHBlciwgZnVuYyk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaXMgdGhlIGNvbXBvc2l0aW9uIG9mIGEgbGlzdCBvZiBmdW5jdGlvbnMsIGVhY2hcbiAgLy8gY29uc3VtaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZm9sbG93cy5cbiAgXy5jb21wb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZ1bmNzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgZm9yICh2YXIgaSA9IGZ1bmNzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGFyZ3MgPSBbZnVuY3NbaV0uYXBwbHkodGhpcywgYXJncyldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgYWZ0ZXIgYmVpbmcgY2FsbGVkIE4gdGltZXMuXG4gIF8uYWZ0ZXIgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzIDwgMSkge1xuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gT2JqZWN0IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUmV0cmlldmUgdGhlIG5hbWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBPYmplY3Qua2V5c2BcbiAgXy5rZXlzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBbXTtcbiAgICBpZiAobmF0aXZlS2V5cykgcmV0dXJuIG5hdGl2ZUtleXMob2JqKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuXG4gIC8vIFJldHJpZXZlIHRoZSB2YWx1ZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgXy52YWx1ZXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVzW2ldID0gb2JqW2tleXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIC8vIENvbnZlcnQgYW4gb2JqZWN0IGludG8gYSBsaXN0IG9mIGBba2V5LCB2YWx1ZV1gIHBhaXJzLlxuICBfLnBhaXJzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHBhaXJzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcGFpcnNbaV0gPSBba2V5c1tpXSwgb2JqW2tleXNbaV1dXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzO1xuICB9O1xuXG4gIC8vIEludmVydCB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlIHZhbHVlcyBtdXN0IGJlIHNlcmlhbGl6YWJsZS5cbiAgXy5pbnZlcnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0W29ialtrZXlzW2ldXV0gPSBrZXlzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHNvcnRlZCBsaXN0IG9mIHRoZSBmdW5jdGlvbiBuYW1lcyBhdmFpbGFibGUgb24gdGhlIG9iamVjdC5cbiAgLy8gQWxpYXNlZCBhcyBgbWV0aG9kc2BcbiAgXy5mdW5jdGlvbnMgPSBfLm1ldGhvZHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKG9ialtrZXldKSkgbmFtZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZXMuc29ydCgpO1xuICB9O1xuXG4gIC8vIEV4dGVuZCBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgcHJvcGVydGllcyBpbiBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuICBfLmV4dGVuZCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGVhY2goc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCBvbmx5IGNvbnRhaW5pbmcgdGhlIHdoaXRlbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ucGljayA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBjb3B5ID0ge307XG4gICAgdmFyIGtleXMgPSBjb25jYXQuYXBwbHkoQXJyYXlQcm90bywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBlYWNoKGtleXMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgaWYgKGtleSBpbiBvYmopIGNvcHlba2V5XSA9IG9ialtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiBjb3B5O1xuICB9O1xuXG4gICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgd2l0aG91dCB0aGUgYmxhY2tsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5vbWl0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGNvcHkgPSB7fTtcbiAgICB2YXIga2V5cyA9IGNvbmNhdC5hcHBseShBcnJheVByb3RvLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmICghXy5jb250YWlucyhrZXlzLCBrZXkpKSBjb3B5W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIGNvcHk7XG4gIH07XG5cbiAgLy8gRmlsbCBpbiBhIGdpdmVuIG9iamVjdCB3aXRoIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgXy5kZWZhdWx0cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGVhY2goc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBpZiAob2JqW3Byb3BdID09PSB2b2lkIDApIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgKHNoYWxsb3ctY2xvbmVkKSBkdXBsaWNhdGUgb2YgYW4gb2JqZWN0LlxuICBfLmNsb25lID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gICAgcmV0dXJuIF8uaXNBcnJheShvYmopID8gb2JqLnNsaWNlKCkgOiBfLmV4dGVuZCh7fSwgb2JqKTtcbiAgfTtcblxuICAvLyBJbnZva2VzIGludGVyY2VwdG9yIHdpdGggdGhlIG9iaiwgYW5kIHRoZW4gcmV0dXJucyBvYmouXG4gIC8vIFRoZSBwcmltYXJ5IHB1cnBvc2Ugb2YgdGhpcyBtZXRob2QgaXMgdG8gXCJ0YXAgaW50b1wiIGEgbWV0aG9kIGNoYWluLCBpblxuICAvLyBvcmRlciB0byBwZXJmb3JtIG9wZXJhdGlvbnMgb24gaW50ZXJtZWRpYXRlIHJlc3VsdHMgd2l0aGluIHRoZSBjaGFpbi5cbiAgXy50YXAgPSBmdW5jdGlvbihvYmosIGludGVyY2VwdG9yKSB7XG4gICAgaW50ZXJjZXB0b3Iob2JqKTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG4gIHZhciBlcSA9IGZ1bmN0aW9uKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxuICAgIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICAgIGlmIChhID09PSBiKSByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PSAxIC8gYjtcbiAgICAvLyBBIHN0cmljdCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGBudWxsID09IHVuZGVmaW5lZGAuXG4gICAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBhID09PSBiO1xuICAgIC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxuICAgIGlmIChhIGluc3RhbmNlb2YgXykgYSA9IGEuX3dyYXBwZWQ7XG4gICAgaWYgKGIgaW5zdGFuY2VvZiBfKSBiID0gYi5fd3JhcHBlZDtcbiAgICAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxuICAgIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICAgIGlmIChjbGFzc05hbWUgIT0gdG9TdHJpbmcuY2FsbChiKSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICAgIC8vIFByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHdyYXBwZXJzIGFyZSBlcXVpdmFsZW50OyB0aHVzLCBgXCI1XCJgIGlzXG4gICAgICAgIC8vIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cbiAgICAgICAgcmV0dXJuIGEgPT0gU3RyaW5nKGIpO1xuICAgICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS4gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvclxuICAgICAgICAvLyBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgICAgcmV0dXJuIGEgIT0gK2EgPyBiICE9ICtiIDogKGEgPT0gMCA/IDEgLyBhID09IDEgLyBiIDogYSA9PSArYik7XG4gICAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICByZXR1cm4gK2EgPT0gK2I7XG4gICAgICAvLyBSZWdFeHBzIGFyZSBjb21wYXJlZCBieSB0aGVpciBzb3VyY2UgcGF0dGVybnMgYW5kIGZsYWdzLlxuICAgICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcbiAgICAgICAgcmV0dXJuIGEuc291cmNlID09IGIuc291cmNlICYmXG4gICAgICAgICAgICAgICBhLmdsb2JhbCA9PSBiLmdsb2JhbCAmJlxuICAgICAgICAgICAgICAgYS5tdWx0aWxpbmUgPT0gYi5tdWx0aWxpbmUgJiZcbiAgICAgICAgICAgICAgIGEuaWdub3JlQ2FzZSA9PSBiLmlnbm9yZUNhc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICAgIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgICAvLyBzdHJ1Y3R1cmVzIGlzIGFkYXB0ZWQgZnJvbSBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLCBhYnN0cmFjdCBvcGVyYXRpb24gYEpPYC5cbiAgICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIC8vIExpbmVhciBzZWFyY2guIFBlcmZvcm1hbmNlIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZlxuICAgICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09IGEpIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PSBiO1xuICAgIH1cbiAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHNcbiAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgIHZhciBhQ3RvciA9IGEuY29uc3RydWN0b3IsIGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcbiAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoXy5pc0Z1bmN0aW9uKGFDdG9yKSAmJiAoYUN0b3IgaW5zdGFuY2VvZiBhQ3RvcikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0Z1bmN0aW9uKGJDdG9yKSAmJiAoYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcikpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoJ2NvbnN0cnVjdG9yJyBpbiBhICYmICdjb25zdHJ1Y3RvcicgaW4gYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wdXNoKGEpO1xuICAgIGJTdGFjay5wdXNoKGIpO1xuICAgIHZhciBzaXplID0gMCwgcmVzdWx0ID0gdHJ1ZTtcbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICBpZiAoY2xhc3NOYW1lID09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgc2l6ZSA9IGEubGVuZ3RoO1xuICAgICAgcmVzdWx0ID0gc2l6ZSA9PSBiLmxlbmd0aDtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cbiAgICAgICAgd2hpbGUgKHNpemUtLSkge1xuICAgICAgICAgIGlmICghKHJlc3VsdCA9IGVxKGFbc2l6ZV0sIGJbc2l6ZV0sIGFTdGFjaywgYlN0YWNrKSkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKF8uaGFzKGEsIGtleSkpIHtcbiAgICAgICAgICAvLyBDb3VudCB0aGUgZXhwZWN0ZWQgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgICAgICAgc2l6ZSsrO1xuICAgICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlci5cbiAgICAgICAgICBpZiAoIShyZXN1bHQgPSBfLmhhcyhiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBhU3RhY2ssIGJTdGFjaykpKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGZvciAoa2V5IGluIGIpIHtcbiAgICAgICAgICBpZiAoXy5oYXMoYiwga2V5KSAmJiAhKHNpemUtLSkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9ICFzaXplO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUGVyZm9ybSBhIGRlZXAgY29tcGFyaXNvbiB0byBjaGVjayBpZiB0d28gb2JqZWN0cyBhcmUgZXF1YWwuXG4gIF8uaXNFcXVhbCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXEoYSwgYiwgW10sIFtdKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIGFycmF5LCBzdHJpbmcsIG9yIG9iamVjdCBlbXB0eT9cbiAgLy8gQW4gXCJlbXB0eVwiIG9iamVjdCBoYXMgbm8gZW51bWVyYWJsZSBvd24tcHJvcGVydGllcy5cbiAgXy5pc0VtcHR5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikgfHwgXy5pc1N0cmluZyhvYmopKSByZXR1cm4gb2JqLmxlbmd0aCA9PT0gMDtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIERPTSBlbGVtZW50P1xuICBfLmlzRWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLm5vZGVUeXBlID09PSAxKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGFuIGFycmF5P1xuICAvLyBEZWxlZ2F0ZXMgdG8gRUNNQTUncyBuYXRpdmUgQXJyYXkuaXNBcnJheVxuICBfLmlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbiAgXy5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xuICB9O1xuXG4gIC8vIEFkZCBzb21lIGlzVHlwZSBtZXRob2RzOiBpc0FyZ3VtZW50cywgaXNGdW5jdGlvbiwgaXNTdHJpbmcsIGlzTnVtYmVyLCBpc0RhdGUsIGlzUmVnRXhwLlxuICBlYWNoKFsnQXJndW1lbnRzJywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIF9bJ2lzJyArIG5hbWVdID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0ICcgKyBuYW1lICsgJ10nO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIERlZmluZSBhIGZhbGxiYWNrIHZlcnNpb24gb2YgdGhlIG1ldGhvZCBpbiBicm93c2VycyAoYWhlbSwgSUUpLCB3aGVyZVxuICAvLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuICBpZiAoIV8uaXNBcmd1bWVudHMoYXJndW1lbnRzKSkge1xuICAgIF8uaXNBcmd1bWVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiAhIShvYmogJiYgXy5oYXMob2JqLCAnY2FsbGVlJykpO1xuICAgIH07XG4gIH1cblxuICAvLyBPcHRpbWl6ZSBgaXNGdW5jdGlvbmAgaWYgYXBwcm9wcmlhdGUuXG4gIGlmICh0eXBlb2YgKC8uLykgIT09ICdmdW5jdGlvbicpIHtcbiAgICBfLmlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xuICAgIH07XG4gIH1cblxuICAvLyBJcyBhIGdpdmVuIG9iamVjdCBhIGZpbml0ZSBudW1iZXI/XG4gIF8uaXNGaW5pdGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbiAgfTtcblxuICAvLyBJcyB0aGUgZ2l2ZW4gdmFsdWUgYE5hTmA/IChOYU4gaXMgdGhlIG9ubHkgbnVtYmVyIHdoaWNoIGRvZXMgbm90IGVxdWFsIGl0c2VsZikuXG4gIF8uaXNOYU4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5pc051bWJlcihvYmopICYmIG9iaiAhPSArb2JqO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBib29sZWFuP1xuICBfLmlzQm9vbGVhbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWUgfHwgb2JqID09PSBmYWxzZSB8fCB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgZXF1YWwgdG8gbnVsbD9cbiAgXy5pc051bGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuICBfLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdm9pZCAwO1xuICB9O1xuXG4gIC8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHlcbiAgLy8gb24gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS5cbiAgXy5oYXMgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbiAgfTtcblxuICAvLyBVdGlsaXR5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJ1biBVbmRlcnNjb3JlLmpzIGluICpub0NvbmZsaWN0KiBtb2RlLCByZXR1cm5pbmcgdGhlIGBfYCB2YXJpYWJsZSB0byBpdHNcbiAgLy8gcHJldmlvdXMgb3duZXIuIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICByb290Ll8gPSBwcmV2aW91c1VuZGVyc2NvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gS2VlcCB0aGUgaWRlbnRpdHkgZnVuY3Rpb24gYXJvdW5kIGZvciBkZWZhdWx0IGl0ZXJhdG9ycy5cbiAgXy5pZGVudGl0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIF8uY29uc3RhbnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICBfLnByb3BlcnR5ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIHByZWRpY2F0ZSBmb3IgY2hlY2tpbmcgd2hldGhlciBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gc2V0IG9mIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLm1hdGNoZXMgPSBmdW5jdGlvbihhdHRycykge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIGlmIChvYmogPT09IGF0dHJzKSByZXR1cm4gdHJ1ZTsgLy9hdm9pZCBjb21wYXJpbmcgYW4gb2JqZWN0IHRvIGl0c2VsZi5cbiAgICAgIGZvciAodmFyIGtleSBpbiBhdHRycykge1xuICAgICAgICBpZiAoYXR0cnNba2V5XSAhPT0gb2JqW2tleV0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJ1biBhIGZ1bmN0aW9uICoqbioqIHRpbWVzLlxuICBfLnRpbWVzID0gZnVuY3Rpb24obiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgYWNjdW0gPSBBcnJheShNYXRoLm1heCgwLCBuKSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGFjY3VtW2ldID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBpKTtcbiAgICByZXR1cm4gYWNjdW07XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gYW5kIG1heCAoaW5jbHVzaXZlKS5cbiAgXy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgIGlmIChtYXggPT0gbnVsbCkge1xuICAgICAgbWF4ID0gbWluO1xuICAgICAgbWluID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1pbiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSk7XG4gIH07XG5cbiAgLy8gQSAocG9zc2libHkgZmFzdGVyKSB3YXkgdG8gZ2V0IHRoZSBjdXJyZW50IHRpbWVzdGFtcCBhcyBhbiBpbnRlZ2VyLlxuICBfLm5vdyA9IERhdGUubm93IHx8IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH07XG5cbiAgLy8gTGlzdCBvZiBIVE1MIGVudGl0aWVzIGZvciBlc2NhcGluZy5cbiAgdmFyIGVudGl0eU1hcCA9IHtcbiAgICBlc2NhcGU6IHtcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OycsXG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgIFwiJ1wiOiAnJiN4Mjc7J1xuICAgIH1cbiAgfTtcbiAgZW50aXR5TWFwLnVuZXNjYXBlID0gXy5pbnZlcnQoZW50aXR5TWFwLmVzY2FwZSk7XG5cbiAgLy8gUmVnZXhlcyBjb250YWluaW5nIHRoZSBrZXlzIGFuZCB2YWx1ZXMgbGlzdGVkIGltbWVkaWF0ZWx5IGFib3ZlLlxuICB2YXIgZW50aXR5UmVnZXhlcyA9IHtcbiAgICBlc2NhcGU6ICAgbmV3IFJlZ0V4cCgnWycgKyBfLmtleXMoZW50aXR5TWFwLmVzY2FwZSkuam9pbignJykgKyAnXScsICdnJyksXG4gICAgdW5lc2NhcGU6IG5ldyBSZWdFeHAoJygnICsgXy5rZXlzKGVudGl0eU1hcC51bmVzY2FwZSkuam9pbignfCcpICsgJyknLCAnZycpXG4gIH07XG5cbiAgLy8gRnVuY3Rpb25zIGZvciBlc2NhcGluZyBhbmQgdW5lc2NhcGluZyBzdHJpbmdzIHRvL2Zyb20gSFRNTCBpbnRlcnBvbGF0aW9uLlxuICBfLmVhY2goWydlc2NhcGUnLCAndW5lc2NhcGUnXSwgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgX1ttZXRob2RdID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICBpZiAoc3RyaW5nID09IG51bGwpIHJldHVybiAnJztcbiAgICAgIHJldHVybiAoJycgKyBzdHJpbmcpLnJlcGxhY2UoZW50aXR5UmVnZXhlc1ttZXRob2RdLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICByZXR1cm4gZW50aXR5TWFwW21ldGhvZF1bbWF0Y2hdO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gSWYgdGhlIHZhbHVlIG9mIHRoZSBuYW1lZCBgcHJvcGVydHlgIGlzIGEgZnVuY3Rpb24gdGhlbiBpbnZva2UgaXQgd2l0aCB0aGVcbiAgLy8gYG9iamVjdGAgYXMgY29udGV4dDsgb3RoZXJ3aXNlLCByZXR1cm4gaXQuXG4gIF8ucmVzdWx0ID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICAgIHJldHVybiBfLmlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbChvYmplY3QpIDogdmFsdWU7XG4gIH07XG5cbiAgLy8gQWRkIHlvdXIgb3duIGN1c3RvbSBmdW5jdGlvbnMgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm1peGluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgZWFjaChfLmZ1bmN0aW9ucyhvYmopLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICB2YXIgZnVuYyA9IF9bbmFtZV0gPSBvYmpbbmFtZV07XG4gICAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IFt0aGlzLl93cmFwcGVkXTtcbiAgICAgICAgcHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmNhbGwodGhpcywgZnVuYy5hcHBseShfLCBhcmdzKSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGludGVnZXIgaWQgKHVuaXF1ZSB3aXRoaW4gdGhlIGVudGlyZSBjbGllbnQgc2Vzc2lvbikuXG4gIC8vIFVzZWZ1bCBmb3IgdGVtcG9yYXJ5IERPTSBpZHMuXG4gIHZhciBpZENvdW50ZXIgPSAwO1xuICBfLnVuaXF1ZUlkID0gZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgdmFyIGlkID0gKytpZENvdW50ZXIgKyAnJztcbiAgICByZXR1cm4gcHJlZml4ID8gcHJlZml4ICsgaWQgOiBpZDtcbiAgfTtcblxuICAvLyBCeSBkZWZhdWx0LCBVbmRlcnNjb3JlIHVzZXMgRVJCLXN0eWxlIHRlbXBsYXRlIGRlbGltaXRlcnMsIGNoYW5nZSB0aGVcbiAgLy8gZm9sbG93aW5nIHRlbXBsYXRlIHNldHRpbmdzIHRvIHVzZSBhbHRlcm5hdGl2ZSBkZWxpbWl0ZXJzLlxuICBfLnRlbXBsYXRlU2V0dGluZ3MgPSB7XG4gICAgZXZhbHVhdGUgICAgOiAvPCUoW1xcc1xcU10rPyklPi9nLFxuICAgIGludGVycG9sYXRlIDogLzwlPShbXFxzXFxTXSs/KSU+L2csXG4gICAgZXNjYXBlICAgICAgOiAvPCUtKFtcXHNcXFNdKz8pJT4vZ1xuICB9O1xuXG4gIC8vIFdoZW4gY3VzdG9taXppbmcgYHRlbXBsYXRlU2V0dGluZ3NgLCBpZiB5b3UgZG9uJ3Qgd2FudCB0byBkZWZpbmUgYW5cbiAgLy8gaW50ZXJwb2xhdGlvbiwgZXZhbHVhdGlvbiBvciBlc2NhcGluZyByZWdleCwgd2UgbmVlZCBvbmUgdGhhdCBpc1xuICAvLyBndWFyYW50ZWVkIG5vdCB0byBtYXRjaC5cbiAgdmFyIG5vTWF0Y2ggPSAvKC4pXi87XG5cbiAgLy8gQ2VydGFpbiBjaGFyYWN0ZXJzIG5lZWQgdG8gYmUgZXNjYXBlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIHB1dCBpbnRvIGFcbiAgLy8gc3RyaW5nIGxpdGVyYWwuXG4gIHZhciBlc2NhcGVzID0ge1xuICAgIFwiJ1wiOiAgICAgIFwiJ1wiLFxuICAgICdcXFxcJzogICAgICdcXFxcJyxcbiAgICAnXFxyJzogICAgICdyJyxcbiAgICAnXFxuJzogICAgICduJyxcbiAgICAnXFx0JzogICAgICd0JyxcbiAgICAnXFx1MjAyOCc6ICd1MjAyOCcsXG4gICAgJ1xcdTIwMjknOiAndTIwMjknXG4gIH07XG5cbiAgdmFyIGVzY2FwZXIgPSAvXFxcXHwnfFxccnxcXG58XFx0fFxcdTIwMjh8XFx1MjAyOS9nO1xuXG4gIC8vIEphdmFTY3JpcHQgbWljcm8tdGVtcGxhdGluZywgc2ltaWxhciB0byBKb2huIFJlc2lnJ3MgaW1wbGVtZW50YXRpb24uXG4gIC8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbiAgLy8gYW5kIGNvcnJlY3RseSBlc2NhcGVzIHF1b3RlcyB3aXRoaW4gaW50ZXJwb2xhdGVkIGNvZGUuXG4gIF8udGVtcGxhdGUgPSBmdW5jdGlvbih0ZXh0LCBkYXRhLCBzZXR0aW5ncykge1xuICAgIHZhciByZW5kZXI7XG4gICAgc2V0dGluZ3MgPSBfLmRlZmF1bHRzKHt9LCBzZXR0aW5ncywgXy50ZW1wbGF0ZVNldHRpbmdzKTtcblxuICAgIC8vIENvbWJpbmUgZGVsaW1pdGVycyBpbnRvIG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmlhIGFsdGVybmF0aW9uLlxuICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cChbXG4gICAgICAoc2V0dGluZ3MuZXNjYXBlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5pbnRlcnBvbGF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuZXZhbHVhdGUgfHwgbm9NYXRjaCkuc291cmNlXG4gICAgXS5qb2luKCd8JykgKyAnfCQnLCAnZycpO1xuXG4gICAgLy8gQ29tcGlsZSB0aGUgdGVtcGxhdGUgc291cmNlLCBlc2NhcGluZyBzdHJpbmcgbGl0ZXJhbHMgYXBwcm9wcmlhdGVseS5cbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzb3VyY2UgPSBcIl9fcCs9J1wiO1xuICAgIHRleHQucmVwbGFjZShtYXRjaGVyLCBmdW5jdGlvbihtYXRjaCwgZXNjYXBlLCBpbnRlcnBvbGF0ZSwgZXZhbHVhdGUsIG9mZnNldCkge1xuICAgICAgc291cmNlICs9IHRleHQuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICAgICAgLnJlcGxhY2UoZXNjYXBlciwgZnVuY3Rpb24obWF0Y2gpIHsgcmV0dXJuICdcXFxcJyArIGVzY2FwZXNbbWF0Y2hdOyB9KTtcblxuICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGVzY2FwZSArIFwiKSk9PW51bGw/Jyc6Xy5lc2NhcGUoX190KSkrXFxuJ1wiO1xuICAgICAgfVxuICAgICAgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgaW50ZXJwb2xhdGUgKyBcIikpPT1udWxsPycnOl9fdCkrXFxuJ1wiO1xuICAgICAgfVxuICAgICAgaWYgKGV2YWx1YXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIic7XFxuXCIgKyBldmFsdWF0ZSArIFwiXFxuX19wKz0nXCI7XG4gICAgICB9XG4gICAgICBpbmRleCA9IG9mZnNldCArIG1hdGNoLmxlbmd0aDtcbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgICBzb3VyY2UgKz0gXCInO1xcblwiO1xuXG4gICAgLy8gSWYgYSB2YXJpYWJsZSBpcyBub3Qgc3BlY2lmaWVkLCBwbGFjZSBkYXRhIHZhbHVlcyBpbiBsb2NhbCBzY29wZS5cbiAgICBpZiAoIXNldHRpbmdzLnZhcmlhYmxlKSBzb3VyY2UgPSAnd2l0aChvYmp8fHt9KXtcXG4nICsgc291cmNlICsgJ31cXG4nO1xuXG4gICAgc291cmNlID0gXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIgK1xuICAgICAgXCJwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcblwiICtcbiAgICAgIHNvdXJjZSArIFwicmV0dXJuIF9fcDtcXG5cIjtcblxuICAgIHRyeSB7XG4gICAgICByZW5kZXIgPSBuZXcgRnVuY3Rpb24oc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicsICdfJywgc291cmNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHJldHVybiByZW5kZXIoZGF0YSwgXyk7XG4gICAgdmFyIHRlbXBsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIHJlbmRlci5jYWxsKHRoaXMsIGRhdGEsIF8pO1xuICAgIH07XG5cbiAgICAvLyBQcm92aWRlIHRoZSBjb21waWxlZCBmdW5jdGlvbiBzb3VyY2UgYXMgYSBjb252ZW5pZW5jZSBmb3IgcHJlY29tcGlsYXRpb24uXG4gICAgdGVtcGxhdGUuc291cmNlID0gJ2Z1bmN0aW9uKCcgKyAoc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicpICsgJyl7XFxuJyArIHNvdXJjZSArICd9JztcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICAvLyBBZGQgYSBcImNoYWluXCIgZnVuY3Rpb24sIHdoaWNoIHdpbGwgZGVsZWdhdGUgdG8gdGhlIHdyYXBwZXIuXG4gIF8uY2hhaW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXyhvYmopLmNoYWluKCk7XG4gIH07XG5cbiAgLy8gT09QXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAvLyBJZiBVbmRlcnNjb3JlIGlzIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLCBpdCByZXR1cm5zIGEgd3JhcHBlZCBvYmplY3QgdGhhdFxuICAvLyBjYW4gYmUgdXNlZCBPTy1zdHlsZS4gVGhpcyB3cmFwcGVyIGhvbGRzIGFsdGVyZWQgdmVyc2lvbnMgb2YgYWxsIHRoZVxuICAvLyB1bmRlcnNjb3JlIGZ1bmN0aW9ucy4gV3JhcHBlZCBvYmplY3RzIG1heSBiZSBjaGFpbmVkLlxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb250aW51ZSBjaGFpbmluZyBpbnRlcm1lZGlhdGUgcmVzdWx0cy5cbiAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0aGlzLl9jaGFpbiA/IF8ob2JqKS5jaGFpbigpIDogb2JqO1xuICB9O1xuXG4gIC8vIEFkZCBhbGwgb2YgdGhlIFVuZGVyc2NvcmUgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyIG9iamVjdC5cbiAgXy5taXhpbihfKTtcblxuICAvLyBBZGQgYWxsIG11dGF0b3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBlYWNoKFsncG9wJywgJ3B1c2gnLCAncmV2ZXJzZScsICdzaGlmdCcsICdzb3J0JywgJ3NwbGljZScsICd1bnNoaWZ0J10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9iaiA9IHRoaXMuX3dyYXBwZWQ7XG4gICAgICBtZXRob2QuYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKChuYW1lID09ICdzaGlmdCcgfHwgbmFtZSA9PSAnc3BsaWNlJykgJiYgb2JqLmxlbmd0aCA9PT0gMCkgZGVsZXRlIG9ialswXTtcbiAgICAgIHJldHVybiByZXN1bHQuY2FsbCh0aGlzLCBvYmopO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEFkZCBhbGwgYWNjZXNzb3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBlYWNoKFsnY29uY2F0JywgJ2pvaW4nLCAnc2xpY2UnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmNhbGwodGhpcywgbWV0aG9kLmFwcGx5KHRoaXMuX3dyYXBwZWQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xuXG4gIF8uZXh0ZW5kKF8ucHJvdG90eXBlLCB7XG5cbiAgICAvLyBTdGFydCBjaGFpbmluZyBhIHdyYXBwZWQgVW5kZXJzY29yZSBvYmplY3QuXG4gICAgY2hhaW46IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fY2hhaW4gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEV4dHJhY3RzIHRoZSByZXN1bHQgZnJvbSBhIHdyYXBwZWQgYW5kIGNoYWluZWQgb2JqZWN0LlxuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl93cmFwcGVkO1xuICAgIH1cblxuICB9KTtcblxuICAvLyBBTUQgcmVnaXN0cmF0aW9uIGhhcHBlbnMgYXQgdGhlIGVuZCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFNRCBsb2FkZXJzXG4gIC8vIHRoYXQgbWF5IG5vdCBlbmZvcmNlIG5leHQtdHVybiBzZW1hbnRpY3Mgb24gbW9kdWxlcy4gRXZlbiB0aG91Z2ggZ2VuZXJhbFxuICAvLyBwcmFjdGljZSBmb3IgQU1EIHJlZ2lzdHJhdGlvbiBpcyB0byBiZSBhbm9ueW1vdXMsIHVuZGVyc2NvcmUgcmVnaXN0ZXJzXG4gIC8vIGFzIGEgbmFtZWQgbW9kdWxlIGJlY2F1c2UsIGxpa2UgalF1ZXJ5LCBpdCBpcyBhIGJhc2UgbGlicmFyeSB0aGF0IGlzXG4gIC8vIHBvcHVsYXIgZW5vdWdoIHRvIGJlIGJ1bmRsZWQgaW4gYSB0aGlyZCBwYXJ0eSBsaWIsIGJ1dCBub3QgYmUgcGFydCBvZlxuICAvLyBhbiBBTUQgbG9hZCByZXF1ZXN0LiBUaG9zZSBjYXNlcyBjb3VsZCBnZW5lcmF0ZSBhbiBlcnJvciB3aGVuIGFuXG4gIC8vIGFub255bW91cyBkZWZpbmUoKSBpcyBjYWxsZWQgb3V0c2lkZSBvZiBhIGxvYWRlciByZXF1ZXN0LlxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKCd1bmRlcnNjb3JlJywgW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF87XG4gICAgfSk7XG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgUHJvbWlzZSxcbiAgT3B0aW9uc1xuKSB7XG5cbiAgdmFyIFVuaXRTZXF1ZW5jZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChVbml0U2VxdWVuY2VyLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIG9wdHMgICAgICAgICAgID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdGhpcy5fc2VxdWVuY2UgPSBvcHRzLmdldE9yRWxzZShcImluaXRpYWxTZXF1ZW5jZVwiLCAwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWR2YW5jZXMgaXRzIHNlcXVlbmNlIGJ5IGBieWAsIG9yIGJ5IGAxYCBpZiBgYnlgIGlzIG5vdCBwcm92aWRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBieSB7bnVtYmVyfSB0aGUgYW1vdW50IHRvIGFkdmFuY2UgYnkuIERlZmF1bHRzIHRvIGAxYC5cbiAgICAgKiBAYXN5bmNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQ+fVxuICAgICAqL1xuICAgIGFkdmFuY2U6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKGJ5KSB7XG4gICAgICAvLyBXYWhoIHdhaGggLSBkb24ndCB1c2UgYGJ5IHx8IDFgLCBvciB5b3UgY2FuJ3QgYWR2YW5jZSBieSAwLCB3aGljaCBpcyBzaWxseVxuICAgICAgLy8gYnV0IHBvdGVudGlhbGx5IG5lY2Vzc2FyeS5cbiAgICAgIGJ5ICAgICAgICAgICAgID0gXy5pc1VuZGVmaW5lZChieSkgPyAxIDogYnk7XG5cbiAgICAgIGlmIChieSA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5pdFNlcXVlbmNlciNhZHZhbmNlKCkgcmVxdWlyZXMgcG9zaXRpdmUgYGJ5YCBvZmZzZXRcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NlcXVlbmNlID0gdGhpcy5fc2VxdWVuY2UgKyBieTtcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2VxdWVuY2UuIFRoaXMgdmFsdWUgc2hvdWxkIGFsd2F5cyBiZSB0aGUgc2FtZVxuICAgICAqIG9yIGdyZWF0ZXIgdGhhbiBhIHZhbHVlIHJldHVybmVkIHByZXZpb3VzbHkgKGluIHRpbWUpLlxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn0gdGhlIGN1cnJlbnQgc2VxdWVuY2VcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VxdWVuY2U7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gVW5pdFNlcXVlbmNlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcImJsdWViaXJkXCIpLFxuICByZXF1aXJlKFwiLi4vb3B0aW9uc1wiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBQcm9taXNlLFxuICBPcHRpb25zXG4pIHtcblxuICAvKipcbiAgICogQSBTZXF1ZW5jZXIgd2hpY2ggYWR2YW5jZXMgYnkgcmVhZGluZyBmcm9tIGEgQ2xvY2suXG4gICAqIE5vdGUgdGhhdCB0aGlzIENsb2NrU2VxdWVuY2VyIHJlbGllcyBvbiB0aGUgQ2xvY2sgcHJvdG9jb2wsIHdoaWNoXG4gICAqIG9ubHkgcHJvdmlkZXMgYENsb2NrI2dldFRpbWUoKWAuIEl0IGRvZXMgbm90IG1vZGlmeSB0aGUgY2xvY2sgaXRzZWxmLlxuICAgKiBUaGlzIG1lYW5zIGlmIHlvdSdyZSB1c2luZyBhIExvZ2ljYWxDbG9jaywgaXQncyBzdGlsbCB1cCB0byB0aGUgY2xvY2snc1xuICAgKiBvd25lciB0byBhZHZhbmNlIHRoZSBjbG9jayBmb3IgdGhlIHNlcXVlbmNlciB0byBhZHZhbmNlLlxuICAgKi9cbiAgdmFyIENsb2NrU2VxdWVuY2VyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfLmV4dGVuZChDbG9ja1NlcXVlbmNlci5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuXG4gICAgICB0aGlzLl9jbG9jayAgICA9IG9wdHMuZ2V0T3JFcnJvcihcImNsb2NrXCIpO1xuICAgICAgdGhpcy5fc2VxdWVuY2UgPSBvcHRzLmdldE9yRWxzZShcImluaXRpYWxTZXF1ZW5jZVwiLCAwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWR2YW5jZXMgYnkgc2V0dGluZyBpdHMgc2VxdWVuY2UgdG8gdGhlIGJhY2tpbmcgY2xvY2sncyB0aW1lLlxuICAgICAqIE5vdGUgdGhhdCBpZiB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgdHdpY2Ugd2l0aGluIHRoZSBzYW1lIHRpbWUgdW5pdCxcbiAgICAgKiB0aGUgc2VxdWVuY2Ugd2lsbCBub3QgYWN0dWFsbHkgYWR2YW5jZSwgc2luY2UgdW5pcXVlIHRpbWUgaXMgbm90XG4gICAgICogZ3VhcmFudGVlZCBieSBvdXIgY2xvY2tzLlxuICAgICAqXG4gICAgICogQGFzeW5jXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Pn1cbiAgICAgKi9cbiAgICBhZHZhbmNlOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBQcm9taXNlXG4gICAgICAgIC5iaW5kKHRoaXMpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9jbG9jay5nZXRUaW1lKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICB0aGlzLl9zZXF1ZW5jZSA9IHQ7XG4gICAgICAgIH0pO1xuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBzZXF1ZW5jZS4gVGhpcyB2YWx1ZSBzaG91bGQgYWx3YXlzIGJlIHRoZSBzYW1lXG4gICAgICogb3IgZ3JlYXRlciB0aGFuIGEgdmFsdWUgcmV0dXJuZWQgcHJldmlvdXNseSAoaW4gdGltZSkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgY3VycmVudCBzZXF1ZW5jZVxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZXF1ZW5jZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBDbG9ja1NlcXVlbmNlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcImJsdWViaXJkXCIpLFxuICByZXF1aXJlKFwiLi4vb3B0aW9uc1wiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBQcm9taXNlLFxuICBPcHRpb25zXG4pIHtcblxuICAvKipcbiAgICogQSBVbml0U2VxdWVuY2VyIHdoaWNoIHJlcG9ydHMgaXRzIHNlcXVlbmNlIHN1bW1lZCB3aXRoIHRoZSBzZXF1ZW5jZXNcbiAgICogb2YgaXRzIGludGVybmFsIGNvbGxlY3Rpb24gb2Ygc2VxdWVuY2Vycy5cbiAgICpcbiAgICogVGhpcyBkZXZpY2UgaXMgdXNlZnVsIGZvciB0cmFja2luZyB0aGUgc3RhdGUgb2YgZGF0YSBjb21wcmlzZWQgZnJvbSBtdWx0aXBsZVxuICAgKiBzb3VyY2VzLiBGb3IgaW5zdGFuY2UsIHlvdSBtaWdodCBoYXZlIENhY2hpbmdEYXRhU3RvcmUoQSkgc3RvcmluZyBkYXRhXG4gICAqIGZyb20gU291cmNlKEEpLCB0cmFja2VkIGJ5IFNlcXVlbmNlcihBKSwgYW5kIENhY2hpbmdEYXRhU3RvcmUoQikgc3RvcmluZ1xuICAgKiBkYXRhIGZyb20gU291cmNlKEIpLCB0cmFja2VkIGJ5IFNlcXVlbmNlcihCKS4gTWVhbndoaWxlLCB5b3UgbWF5IGhhdmVcbiAgICogQ2FjaGluZ0RhdGFTdG9yZShDKSwgc3RvcmluZyBkYXRhIGZyb20gU291cmNlKEEgKyBCKSwgYW5kIHRyYWNrZWQgYnlcbiAgICogU2VxdWVuY2VyKEMpID0gU2VxdWVuY2VyKEEgKyBCKSAtIGEgRGVsZWdhdGluZ0NvbXBvc2l0ZVNlcXVlbmNlci5cbiAgICpcbiAgICogVGh1cywgaWYgU2VxdWVuY2VyKEEpIGlzIGFkdmFuY2VkLCBpdCBtYXkgaW52YWxpZGF0ZSBDYWNoaW5nRGF0YVN0b3JlKEEpIG9yXG4gICAqIENhY2hpbmdEYXRhU3RvcmUoQykgb3IgYm90aC5cbiAgICpcbiAgICogTm90ZSB0aGlzIHBhcnRpY3VsYXIgdXNhZ2UgaXMgZ2VuZXJhbGx5IG9ubHkgdXNlZnVsIGZvciBVbml0IHNlcXVlbmNlcnMuXG4gICAqXG4gICAqIElmIHlvdSdkIGxpa2UgdGhlIGFib3ZlIGZ1bmN0aW9uYWxpdHksIGJ1dCB3aXRoIFNlcXVlbmNlcihBKSBhbmRcbiAgICogU2VxdWVuY2VyKEIpIGFzIENsb2NrU2VxdWVuY2VycywgYW5kIFNlcXVlbmNlcihDKSBtZXJlbHkgdHJhY2tpbmdcbiAgICogbW9kaWZpY2F0aW9uLCB5b3UnZCBuZWVkIHRvIHVzZSBhIERlbGVnYXRpbmdGb3J3YXJkaW5nU2VxdWVuY2VyIGZvciBBIGFuZCBCLFxuICAgKiBmb3J3YXJkaW5nIHRoZW0gdG8gVW5pdFNlcXVlbmNlcihDKS5cbiAgICpcbiAgICogRGVsZWdhdGluZ0NvbXBvc2l0ZVNlcXVlbmNlciBhbmQgRGVsZWdhdGluZ0ZvcndhcmRpbmdTZXF1ZW5jZXIgYXJlIGVmZmVjdGl2bHlcbiAgICogb3Bwb3NpdGVzIG9mIGVhY2ggb3RoZXIuIERlbGVnYXRpbmdDb21wb3NpdGVTZXF1ZW5jZXIgY29tcG9zZXMgdGhlIGB2YWx1ZWBcbiAgICogb2YgbXVsdGlwbGUgdW5kZXJseWluZyBzZXF1ZW5jZXJzIChwdWxsKSwgYW5kIERlbGVnYXRpbmdGb3J3YXJkaW5nU2VxdWVuY2VyXG4gICAqIGZvcndhcmRzIHRoZSBgYWR2YW5jZWAgY2FsbCB0byBtdWx0aXBsZSB0YXJnZXRzIChwdXNoKS5cbiAgICovXG4gIHZhciBEZWxlZ2F0aW5nQ29tcG9zaXRlU2VxdWVuY2VyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoRGVsZWdhdGluZ0NvbXBvc2l0ZVNlcXVlbmNlci5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdGhpcy5fZGVsZWdhdGVTZXF1ZW5jZXIgPSBvcHRzLmdldE9yRXJyb3IoXCJkZWxlZ2F0ZVwiKTtcbiAgICAgIHRoaXMuX3NlcXVlbmNlcnMgPSBfLmNsb25lKG9wdHMuZ2V0T3JFbHNlKFwic2VxdWVuY2Vyc1wiLCBbXSkpO1xuICAgIH0sXG4gICAgYWRkU2VxdWVuY2VyOiBmdW5jdGlvbihzZXEpIHtcbiAgICAgIHRoaXMuX3NlcXVlbmNlcnMucHVzaChzZXEpO1xuICAgIH0sXG4gICAgYWR2YW5jZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcyA9IHRoaXMuX2RlbGVnYXRlU2VxdWVuY2VyO1xuICAgICAgcmV0dXJuIHMuYWR2YW5jZS5hcHBseShzLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9cbiAgICAgICAgLmNoYWluKHRoaXMuX3NlcXVlbmNlcnMpXG4gICAgICAgIC5pbnZva2UoXCJ2YWx1ZVwiKVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKHN1bSwgbikge1xuICAgICAgICAgIHJldHVybiBzdW0gKyBuO1xuICAgICAgICB9LCAwKVxuICAgICAgICAudmFsdWUoKSArIHRoaXMuX2RlbGVnYXRlU2VxdWVuY2VyLnZhbHVlKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gRGVsZWdhdGluZ0NvbXBvc2l0ZVNlcXVlbmNlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcImJsdWViaXJkXCIpLFxuICByZXF1aXJlKFwiLi4vb3B0aW9uc1wiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBQcm9taXNlLFxuICBPcHRpb25zXG4pIHtcblxuICB2YXIgRGVsZWdhdGluZ0ZvcndhcmRpbmdTZXF1ZW5jZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChEZWxlZ2F0aW5nRm9yd2FyZGluZ1NlcXVlbmNlci5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdGhpcy5fZGVsZWdhdGVTZXF1ZW5jZXIgPSBvcHRzLmdldE9yRXJyb3IoXCJkZWxlZ2F0ZVwiKTtcbiAgICAgIHRoaXMuX2ZvcndhcmRUYXJnZXRzID0gXy5jbG9uZShvcHRzLmdldE9yRWxzZShcInRhcmdldHNcIiwgW10pKTtcbiAgICB9LFxuICAgIGFkZFRhcmdldDogZnVuY3Rpb24oc2VxKSB7XG4gICAgICB0aGlzLl9mb3J3YXJkVGFyZ2V0cy5wdXNoKHNlcSk7XG4gICAgfSxcbiAgICBhZHZhbmNlOiBQcm9taXNlLm1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzID0gdGhpcy5fZGVsZWdhdGVTZXF1ZW5jZXI7XG4gICAgICByZXR1cm4gcy5hZHZhbmNlLmFwcGx5KHMsIGFyZ3VtZW50cylcbiAgICAgIC5iaW5kKHRoaXMpXG4gICAgICAudGhlbihmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2VcbiAgICAgICAgICAuYWxsKF8uaW52b2tlKHRoaXMuX2ZvcndhcmRUYXJnZXRzLCBcImFkdmFuY2VcIikpXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBzZXF1ZW5jZXInc1xuICAgICAgICAgICAgLy8gYWR2YW5jZSBjYWxsIChpZiBhbnkpLiBUaGUgYWR2YW5jZW1lbnQgb2YgdGhlIGZvcndhcmRcbiAgICAgICAgICAgIC8vIHRhcmdldHMgc2hvdWxkIGJlIHRyYW5zcGFyZW50LlxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pLFxuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzID0gdGhpcy5fZGVsZWdhdGVTZXF1ZW5jZXI7XG4gICAgICByZXR1cm4gcy52YWx1ZS5hcHBseShzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIERlbGVnYXRpbmdGb3J3YXJkaW5nU2VxdWVuY2VyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiYmx1ZWJpcmRcIiksXG4gIHJlcXVpcmUoXCIuLi9vcHRpb25zXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIFByb21pc2UsXG4gIE9wdGlvbnNcbikge1xuICAvKipcbiAgICogQSBDbG9jayB3aGljaCBhbGxvd3MgbWFudWFsbHkgbWFuaXB1bGF0aW5nIHRoZSB1bmRlcmx5aW5nIHRpbWUgdmFsdWUsXG4gICAqIGlycmVzcGVjdGl2ZSBvZiByZWFsIHRpbWUuIFVzZWZ1bCBmb3IgdGVzdGluZy5cbiAgICovXG4gIHZhciBMb2dpY2FsQ2xvY2sgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChMb2dpY2FsQ2xvY2sucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgb3B0cyA9IE9wdGlvbnMuZnJvbU9iamVjdChvcHRzKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gb3B0cy5nZXRPckVsc2UoXCJpbml0aWFsVGltZVwiLCAwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGFzeW5jXG4gICAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gVGltZSBpbiBtaWxsaXNlY29uZHMgc2luY2UgZXBvY2hcbiAgICAgKiBAc2VlIENsb2NrI2dldFRpbWUoKVxuICAgICAqL1xuICAgIGdldFRpbWU6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUaW1lO1xuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogQWR2YW5jZXMgaW50ZXJuYWwgdGltZSwgZWl0aGVyIGBvcHRzLmJ5YCBhIGNlcnRhaW4gb2Zmc2V0LCBvclxuICAgICAqIGBvcHRzLnRvYCBhIHBhcnRpY3VsYXIgYWJzb2x1dGUgdGltZS4gSWYgc3VjY2Vzc2Z1bCwgcmV0dXJucyB0aGUgcmVzdWx0XG4gICAgICogb2YgY2FsbGluZyBgTG9naWNhbENsb2NrI2dldFRpbWUoKWAgYXMgYSBjb252ZW5pZW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRzLnRvIHtudW1iZXJ9IGFic29sdXRlIHRpbWUgdG8gc2V0IGNsb2NrIHRvLiBNdXN0IGJlIGxhcmdlclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIHRoYW4gdGhlIGN1cnJlbnQgdGltZVxuICAgICAqIEBwYXJhbSBvcHRzLmJ5IHtudW1iZXJ9IG9mZnNldCB0byBhZGQgdG8gY3VycmVudCB0aW1lLiBNdXN0IGJlIHBvc2l0aXZlLlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIERlZmF1bHRzIHRvIGAxYCBpZiBuZWl0aGVyIGBvcHRzLnRvYCBvciBgb3B0cy5ieWBcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBhcmUgc3BlY2lmaWVkLlxuICAgICAqIEBhc3luY1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IHJlc3VsdCBvZiBgTG9naWNhbENsb2NrI2dldFRpbWUoKWBcbiAgICAgKi9cbiAgICBhZHZhbmNlVGltZTogUHJvbWlzZS5tZXRob2QoZnVuY3Rpb24ob3B0cyl7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuICAgICAgdmFyIGJ5ID0gb3B0cy5nZXRPckVsc2UoXCJieVwiLCAxKSxcbiAgICAgICAgICB0byA9IG9wdHMuZ2V0T3JFbHNlKFwidG9cIiwgdW5kZWZpbmVkKTtcbiAgICAgIGlmICghXy5pc1VuZGVmaW5lZCh0bykpIHtcbiAgICAgICAgaWYgKHRvIDwgdGhpcy5fY3VycmVudFRpbWUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMb2dpY2FsQ2xvY2sjYWR2YW5jZVRpbWUoKSByZXF1aXJlcyBmb3J3YXJkIG1vdmVtZW50IG9mIHRpbWVcIilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jdXJyZW50VGltZSA9IHRvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGJ5IDwgMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkxvZ2ljYWxDbG9jayNhZHZhbmNlVGltZSgpIHJlcXVpcmVzIGZvcndhcmQgbW92ZW1lbnQgb2YgdGltZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jdXJyZW50VGltZSA9IHRoaXMuX2N1cnJlbnRUaW1lICsgYnk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5nZXRUaW1lKCk7XG4gICAgfSlcbiAgfSk7XG5cbiAgcmV0dXJuIExvZ2ljYWxDbG9jaztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcImJsdWViaXJkXCIpLFxuICByZXF1aXJlKFwiLi4vLi4vY29yZS9vcHRpb25zXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIFByb21pc2Vcbikge1xuXG4gIC8qKlxuICAgKiBBIENsb2NrIHdoaWNoIGRlbGVnYXRlcyB0byB0aGUgc3lzdGVtIGNsb2NrLlxuICAgKi9cbiAgdmFyIFN5c3RlbUNsb2NrID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoU3lzdGVtQ2xvY2sucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7fSxcbiAgICAvKipcbiAgICAgKiBAYXN5bmNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBUaW1lIGluIG1pbGxpc2Vjb25kcyBzaW5jZSBlcG9jaFxuICAgICAqIEBzZWUgQ2xvY2sjZ2V0VGltZSgpXG4gICAgICovXG4gICAgZ2V0VGltZTogUHJvbWlzZS5tZXRob2QoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgICB9KVxuICB9KTtcblxuICByZXR1cm4gU3lzdGVtQ2xvY2s7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCJibHVlYmlyZFwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBTY29wZWRDb25maWd1cmF0aW9uXG4pIHtcblxuICAvKipcbiAgICogQSBkZXZpY2UgZm9yIHJlc29sdmluZyBhIHNldCBvZiByYXcgY29uZmlndXJhdGlvbnMgZ2l2ZW4gYSBzZXQgb2ZcbiAgICogc2NvcGVzLlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgaGF2aW5nIHRoaW5ncyBsaWtlIHJlZ2lvbi0gb3Igc3RhZ2Utc3BlY2lmaWMgKGFuZC9vciBib3RoKVxuICAgKiBjb25maWd1cmF0aW9ucy5cbiAgICpcbiAgICogR2l2ZW4gc2V0cyBvZiByYXcgY29uZmlndXJhdGlvbnMgb2YgdGhlIGZvcm06XG4gICAqXG4gICAqICAge1xuICAgKiAgICAgXCJzY29wZS0xXCIgOiB7XG4gICAqICAgICAgIFwia2V5MVwiIDogXCJ2YWwxXCJcbiAgICogICAgIH0sXG4gICAqICAgICBcInNjb3BlLTErZW52MVwiOiB7XG4gICAqICAgICAgIFwia2V5MlwiIDogXCJ2YWwtZW52LTFcIlxuICAgKiAgICAgfSxcbiAgICogICAgIFwic2NvcGUtMStlbnYyXCI6IHtcbiAgICogICAgICAgXCJrZXkyXCIgOiBcInZhbC1lbnYtMlwiXG4gICAqICAgICB9XG4gICAqICAgfVxuICAgKlxuICAgKiBgcmVzb2x2ZShbXCJzY29wZS0xXCJdKWAgd2lsbCByZXR1cm46XG4gICAqXG4gICAqICAge1xuICAgKiAgICAgXCJrZXkxXCIgOiBcInZhbDJcIlxuICAgKiAgIH1cbiAgICpcbiAgICogYHJlc29sdmUoW1wic2NvcGUtMVwiLCBcImVudi0xXCJdKWAgd2lsbCByZXR1cm46XG4gICAqXG4gICAqICAge1xuICAgKiAgICAgXCJrZXkxXCIgOiBcInZhbDFcIixcbiAgICogICAgIFwia2V5MlwiIDogXCJ2YWwtZW52LTFcIlxuICAgKiAgIH1cbiAgICpcbiAgICogYHJlc29sdmUoW1wic2NvcGUtMVwiLCBcImVudi0yXCJdKWAgd2lsbCByZXR1cm46XG4gICAqXG4gICAqICAge1xuICAgKiAgICAgXCJrZXkxXCIgOiBcInZhbDFcIixcbiAgICogICAgIFwia2V5MlwiIDogXCJ2YWwtZW52LTJcIlxuICAgKiAgIH1cbiAgICpcbiAgICogU2NvcGVzIHVuaW9ucyBhcmUgcmVzb2x2ZWQgaW4gdGhlIGZvbGxvd2luZyBtYW5uZXI6XG4gICAqICAgMS4gYSBnaXZlbiBzY29wZSB1bmlvbidzIHBhcnRzIGFyZSBzb3J0ZWRcbiAgICogICAyLiBzY29wZSB1bmlvbnMgYXMgYSB3aG9sZSBhcmUgYXBwbGllZCBpbiBzb3J0ZWQgb3JkZXJcbiAgICogICAzLiByZXBlYXQgdGhlIHByb2Nlc3MgZm9yIGEgZ2l2ZW4gY29uZmlndXJhdGlvblxuICAgKlxuICAgKiBTbywgZ2l2ZW4gdGhyZWUgY29uZmlnczpcbiAgICpcbiAgICogIHtcbiAgICogICAgXCJhYWFcIjogLi4uIC8vIDFcbiAgICogICAgXCJjY2NcIjogLi4uIC8vIDJcbiAgICogIH1cbiAgICpcbiAgICogIHtcbiAgICogICAgXCJhYWErY2NjXCI6IC4uLiAvLyAzXG4gICAqICAgIFwiY2NjXCIgICAgOiAuLi4gLy8gNFxuICAgKiAgfVxuICAgKlxuICAgKiAge1xuICAgKiAgICBcImFhYStiYmJcIjogLi4uIC8vIDVcbiAgICogICAgXCJiYmJcIiAgICA6IC4uLiAvLyA2XG4gICAqICB9XG4gICAqXG4gICAqIFRoZSByZXN1bHRpbmcgb3JkZXIgd2lsbCBiZTpcbiAgICogICAxLCAyLCA0LCAzLCA2LCA1XG4gICAqXG4gICAqIE5vdGljZSAzIGNvbWVzIGJlZm9yZSA1IGV2ZW4gdGhvdWdoIGl0J3MgbG9naWNhbGx5IFwiYWZ0ZXJcIiBpbiBzb3J0ZWQgb3JkZXIsXG4gICAqIGJlY2F1c2UgY29uZmlndXJhdGlvbiBvcmRlciBvdmVycmlkZXMgc2NvcGUgb3JkZXIuIFRoYXQgaXMsIHNjb3BlIHVuaW9uc1xuICAgKiBhcmUgb3JkZXJlZCB3aXRoaW4gYSBjb25maWcsIGFuZCB0aGVuIGluIGNvbmZpZyBvcmRlci5cbiAgICpcbiAgICovXG4gIHZhciBTY29wZWRDb25maWd1cmF0aW9uUmVzb2x2ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF8uZXh0ZW5kKFNjb3BlZENvbmZpZ3VyYXRpb25SZXNvbHZlci5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2NvbmZpZ3MgPSBbXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSByYXdDb25maWcgaXMgYSBzZXQgb2YgY29uZmlndXJhdGlvbiBzY29wZXMgYW5kIHRoZWlyIGNvbmZpZ3VyYXRpb25cbiAgICAgKiB2YWx1ZXMsIGUuZy46XG4gICAgICpcbiAgICAgKiAgIHtcbiAgICAgKiAgICAgXCJzY29wZS0xXCIgOiB7XG4gICAgICogICAgICAgXCJrZXkxXCIgOiBcInZhbDFcIlxuICAgICAqICAgICB9LFxuICAgICAqICAgICBcInNjb3BlLTErZW52MVwiOiB7XG4gICAgICogICAgICAgXCJrZXkyXCIgOiBcInZhbC1lbnYtMVwiXG4gICAgICogICAgIH0sXG4gICAgICogICAgIFwic2NvcGUtMStlbnYyXCI6IHtcbiAgICAgKiAgICAgICBcImtleTJcIiA6IFwidmFsLWVudi0yXCJcbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHRoZSBwbHVzICgrKSBzaWduIGlzIHJlc2VydmVkIGZvciBzcGVjaWZ5aW5nIHNjb3BlIHVuaW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByYXdDb25maWcge29iamVjdH0gKHJlcXVpcmVkKVxuICAgICAqXG4gICAgICogQHJldHVybnMgdGhpc1xuICAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24ocmF3Q29uZmlnKSB7XG4gICAgICB0aGlzLl9jb25maWdzLnB1c2gobmV3IFNjb3BlZENvbmZpZ3VyYXRpb24ocmF3Q29uZmlnKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgYSBjb21wdXRlZCBmaW5hbCBjb25maWd1cmF0aW9uIGdpdmVuIGEgc2V0IG9mIHNjb3BlcyB0byBhcHBseSxcbiAgICAgKiBhbmQgYSBzZXQgb2YgY29uZmlncyBsb2FkZWQgdmlhIGBTY29wZWRDb25maWd1cmF0aW9uUmVzb2x2ZXIjYWRkKClgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlcyB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHRoZSBjb21wdXRlZCBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgcmVzb2x2ZTogZnVuY3Rpb24oc2NvcGVzKSB7XG4gICAgICBzY29wZXMgPSBwb3dlcnNldChfLmNsb25lKHNjb3Blcykuc29ydCgpKTtcbiAgICAgIHNjb3Blcy5zaGlmdCgpOyAvLyBHZXQgcmlkIG9mIHRoZSBlbXB0eSBzZXQuXG5cbiAgICAgIHNjb3BlcyA9IF8uY29sbGVjdChzY29wZXMsIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgcmV0dXJuIHMuam9pbihcIitcIik7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHJlbGV2YW50Q29uZmlncyA9IF9cbiAgICAgICAgLmNoYWluKHRoaXMuX2NvbmZpZ3MpXG4gICAgICAgIC5jb2xsZWN0KGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICByZXR1cm4gXy5jb2xsZWN0KHNjb3BlcywgZnVuY3Rpb24oc2NvcGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjLmJsb2JGb3JTY29wZShzY29wZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSkuZmxhdHRlbigpLnZhbHVlKCk7XG5cbiAgICAgIHJlbGV2YW50Q29uZmlncy51bnNoaWZ0KHt9KTtcbiAgICAgIHJldHVybiBfLmV4dGVuZC5hcHBseShfLCByZWxldmFudENvbmZpZ3MpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHBvd2Vyc2V0ID0gZnVuY3Rpb24gKGFyeSkge1xuICAgICAgdmFyIHBzID0gW1tdXTtcbiAgICAgIGZvciAodmFyIGk9MDsgaSA8IGFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZvciAodmFyIGogPSAwLCBsZW4gPSBwcy5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgICBwcy5wdXNoKHBzW2pdLmNvbmNhdChhcnlbaV0pKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcHM7XG4gIH1cblxuICByZXR1cm4gU2NvcGVkQ29uZmlndXJhdGlvblJlc29sdmVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiLi9zY29wZWQtY29uZmlndXJhdGlvblwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfXG4pIHtcblxuICAvKipcbiAgICogR2l2ZW4gYSByYXcgY29uZmlnLCBlbnN1cmVzIGJsb2JzIGNhbiBiZSBmZXRjaGVkIHJlZ2FyZGxlc3Mgb2ZcbiAgICogc2NvcGUgdW5pb24gc2NvcGUgKGkuZS4sIGRvZXMgdW5pb24gY2Fub25pY2FsaXphdGlvbikuXG4gICAqXG4gICAqIEZvciBleGFtcGxlLCBhIGNvbmZpZyB3aXRoIHNjb3BlIHVuaW9uIGBcImJiYithYWFcImAgY2FuIGxhdGVyIGJlXG4gICAqIGZldGNoZWQgdXNpbmcgZWl0aGVyIGBcImFhYStiYmJcImAgb3IgYFwiYmJiK2FhYVwiYC4gSXQgZG9lcyB0aGlzXG4gICAqIGJ5IHVuaWZvcm1seSBvcmRlcmluZyB0aGUgdW5pb24ncyBjb21wb3NpdGUgc2NvcGVzLlxuICAgKlxuICAgKiBUaGlzIHByb2JhYmx5IGlzbid0IGEgdXNlZnVsIGNsYXNzIG9uIGl0cyBvd24uIEluc3RlYWQsIGRlZmVyIHRvXG4gICAqIGBTY29wZWRDb25maWd1cmF0aW9uUmVzb2x2ZXJgIG9yIGBDb25maWd1cmF0aW9uTWFnaWNgLlxuICAgKi9cbiAgdmFyIFNjb3BlZENvbmZpZ3VyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF8uZXh0ZW5kKFNjb3BlZENvbmZpZ3VyYXRpb24ucHJvdG90eXBlLCB7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ocmF3Q29uZmlnKSB7XG4gICAgICByYXdDb25maWcgPSByYXdDb25maWcgfHwge307XG4gICAgICB0aGlzLl9zY29wZXMgPSB7fTtcbiAgICAgIC8vIFNvcnQgdGhlIHNjb3BlIHN0cmluZ3NcbiAgICAgIF8uZWFjaChyYXdDb25maWcsIGZ1bmN0aW9uKGNvbmZpZywgc2NvcGVTdHJpbmcpIHtcbiAgICAgICAgdmFyIHNjb3BlID0gc2NvcGVTdHJpbmcuc3BsaXQoXCIrXCIpLnNvcnQoKS5qb2luKFwiK1wiKTtcbiAgICAgICAgdGhpcy5fc2NvcGVzW3Njb3BlXSA9IGNvbmZpZztcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBibG9iRm9yU2NvcGU6IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICByZXR1cm4gXy5jbG9uZSh0aGlzLl9zY29wZXNbc2NvcGUuc3BsaXQoXCIrXCIpLnNvcnQoKS5qb2luKFwiK1wiKV0gfHwge30pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFNjb3BlZENvbmZpZ3VyYXRpb247XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgT3B0aW9uc1xuKSB7XG5cbiAgdmFyIENvbnNvbGVMb2dBcHBlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHZhciBwID0gZnVuY3Rpb24obnVtKSB7XG4gICAgaWYgKChcIlwiICsgbnVtKS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBcIjBcIiArIG51bTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG4gIH07XG5cbiAgXy5leHRlbmQoQ29uc29sZUxvZ0FwcGVuZGVyLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIG9wdHMgPSBPcHRpb25zLmZyb21PYmplY3Qob3B0cyk7XG4gICAgICB0aGlzLl9jb25zb2xlID0gb3B0cy5nZXRPckVsc2UoXCJjb25zb2xlXCIsIGNvbnNvbGUpO1xuICAgICAgdGhpcy5fdGltZURlbGVnYXRlID0gb3B0cy5nZXRPckVsc2UoXCJ0aW1lRGVsZWdhdGVcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICByZXR1cm4gW2QuZ2V0VVRDRnVsbFllYXIoKSwgcChkLmdldFVUQ01vbnRoKCkpLCBwKGQuZ2V0VVRDRGF5KCkpXS5qb2luKFwiL1wiKSArXG4gICAgICAgICAgXCIgXCIgKyBbcChkLmdldFVUQ0hvdXJzKCkpLCBwKGQuZ2V0VVRDTWludXRlcygpKSwgcChkLmdldFVUQ1NlY29uZHMoKSldLmpvaW4oXCI6XCIpICtcbiAgICAgICAgICBcIi5cIiArIGQuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgbG9nOiBmdW5jdGlvbihsb2dnZXJOYW1lLCBkZXNjZW5kYW50cywgbG9nTGV2ZWwsIGxvZ0xldmVsTmFtZSwgYXJncykge1xuICAgICAgLy8gVXNlIHRoZSBmdXJ0aGVzdCBhbmNlc3RvciBhcyB0aGUgbG9nZ2VkIG5hbWUgKHNpbmNlIGl0IG9yaWdpbmF0ZWQgdGhlcmUpXG4gICAgICB2YXIgZnVydGhlc3RBbmNlc3RvciA9IGRlc2NlbmRhbnRzW2Rlc2NlbmRhbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGZ1cnRoZXN0QW5jZXN0b3IpIHtcbiAgICAgICAgbG9nZ2VyTmFtZSA9IGZ1cnRoZXN0QW5jZXN0b3I7XG4gICAgICB9XG4gICAgICB0aGlzLl9sb2coW1wiW1wiK2xvZ0xldmVsTmFtZStcIl1bXCIrdGhpcy5fZ2V0VGltZSgpK1wiXVtcIitsb2dnZXJOYW1lK1wiXVwiXS5jb25jYXQoYXJncykpO1xuICAgIH0sXG5cbiAgICBfZ2V0VGltZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGltZURlbGVnYXRlKCk7XG4gICAgfSxcblxuICAgIF9sb2c6IGZ1bmN0aW9uKGxvZ0l0ZW1zKSB7XG4gICAgICAvLyBXaHkgZG9lcyBoZSBkbyB0aGlzPyBJcyBoZSBpbnNhbmU/IFdlbGwsIHllcy5cbiAgICAgIC8vXG4gICAgICAvLyBCdXQgbW9zdGx5LCBJIGRvIHRoaXMgYmVjYXVzZSBjb25zb2xlLmxvZyBpc24ndCwgaW4gYWxsIGNhc2VzLFxuICAgICAgLy8gc29tZXRoaW5nIHlvdSBjYW4gY2FsbCAuYXBwbHkgb24uIExhc3QgSSBjaGVja2VkLCBpbiBJRSBjYWxsaW5nXG4gICAgICAvLyBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBbXSkgd2lsbCB0aHJvdyBhbiBlcnJvci4gU28gdGhhdCdzIHdoeSB0aGVcbiAgICAgIC8vIGJpZyB1Z2x5IHN3aXRjaC5cbiAgICAgIC8vXG4gICAgICAvLyBJZiB5b3UgbmVlZCBtb3JlIHRoYW4gNyBpdGVtcywgd2VsbCwgSSBjYW4ndCBoZWxwIHlvdSAoYnV0IHlvdSBjYW4gLSBhZGQgYW5vdGhlclxuICAgICAgLy8gc3dpdGNoIGNhc2UpLlxuICAgICAgc3dpdGNoKGxvZ0l0ZW1zLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgdGhpcy5fY29uc29sZS5sb2coKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuX2NvbnNvbGUubG9nKGxvZ0l0ZW1zWzBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuX2NvbnNvbGUubG9nKGxvZ0l0ZW1zWzBdLCBsb2dJdGVtc1sxXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0aGlzLl9jb25zb2xlLmxvZyhsb2dJdGVtc1swXSwgbG9nSXRlbXNbMV0sIGxvZ0l0ZW1zWzJdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRoaXMuX2NvbnNvbGUubG9nKGxvZ0l0ZW1zWzBdLCBsb2dJdGVtc1sxXSwgbG9nSXRlbXNbMl0sIGxvZ0l0ZW1zWzNdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHRoaXMuX2NvbnNvbGUubG9nKGxvZ0l0ZW1zWzBdLCBsb2dJdGVtc1sxXSwgbG9nSXRlbXNbMl0sIGxvZ0l0ZW1zWzNdLCBsb2dJdGVtc1s0XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICB0aGlzLl9jb25zb2xlLmxvZyhsb2dJdGVtc1swXSwgbG9nSXRlbXNbMV0sIGxvZ0l0ZW1zWzJdLCBsb2dJdGVtc1szXSwgbG9nSXRlbXNbNF0sIGxvZ0l0ZW1zWzVdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIHRoaXMuX2NvbnNvbGUubG9nKGxvZ0l0ZW1zWzBdLCBsb2dJdGVtc1sxXSwgbG9nSXRlbXNbMl0sIGxvZ0l0ZW1zWzNdLCBsb2dJdGVtc1s0XSwgbG9nSXRlbXNbNV0sIGxvZ0l0ZW1zWzZdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB2YXIgbGFiZWwgPSBsb2dJdGVtcy5zaGlmdCgpO1xuICAgICAgICAgIHRoaXMuX2NvbnNvbGUubG9nKGxhYmVsLCBsb2dJdGVtcyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gQ29uc29sZUxvZ0FwcGVuZGVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiLi4vLi4vY29yZS9vcHRpb25zXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIFJlZixcbiAgRGVsZWdhdGluZ1JlZlxuKSB7XG5cbiAgdmFyIGhlbHBlciA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHJldHVybiBuZXcgUmVmKHZhbCk7XG4gIH07XG5cbiAgaGVscGVyLmRlbGVnYXRpbmcgPSBmdW5jdGlvbihyZWYpIHtcbiAgICByZXR1cm4gbmV3IERlbGVnYXRpbmdSZWYocmVmKTtcbiAgfTtcblxuICByZXR1cm4gaGVscGVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiLi9yZWZcIiksXG4gIHJlcXVpcmUoXCIuL2RlbGVnYXRpbmctcmVmXCIpXG4pO1xuXG59KSgpIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBQcm9taXNlID0gcmVxdWlyZShcIi4vcHJvbWlzZS5qc1wiKSgpO1xubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIFByb21pc2UsXG4gIE9wdGlvbnMsXG4gIExvZ2dlcixcbiAgQ29uZmlndXJhdGlvbk1hZ2ljLFxuICBBcHBDb250YWluZXJcbikge1xuICB2YXIgTG9nID0gTG9nZ2VyLmNyZWF0ZShcIkJvb3RzdHJhcHBlclwiKTtcblxuICB2YXIgQm9vdHN0cmFwcGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoQm9vdHN0cmFwcGVyLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIG9wdHMgPSBPcHRpb25zLmZyb21PYmplY3Qob3B0cyk7XG4gICAgICB0aGlzLl9jb25maWdzID0gb3B0cy5nZXRPckVycm9yKFwiY29uZmlndXJhdGlvbnNcIik7XG4gICAgICB0aGlzLl9zY29wZXMgPSBvcHRzLmdldE9yRXJyb3IoXCJzY29wZXNcIik7XG4gICAgICB0aGlzLl9hcHBLbGFzcyA9IG9wdHMuZ2V0T3JFcnJvcihcImFwcGxpY2F0aW9uQ29uc3RydWN0b3JcIik7XG4gICAgfSxcbiAgICBib290c3RyYXA6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFByb21pc2VcbiAgICAgICAgLmJpbmQodGhpcylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGNvbmZpZyAgICAgICA9IENvbmZpZ3VyYXRpb25NYWdpYy5yZXNvbHZlQ29uZmlnKHRoaXMuX3Njb3BlcywgdGhpcy5fY29uZmlncyksXG4gICAgICAgICAgICAgIEFwcEtsYXNzICAgICA9IHRoaXMuX2FwcEtsYXNzO1xuXG4gICAgICAgICAgTG9nLmluZm8oXCJVc2luZyByZXNvbHZlZCBjb25maWd1cmF0aW9uOiBcIiwgSlNPTi5zdHJpbmdpZnkoY29uZmlnKSk7XG5cbiAgICAgICAgICB2YXIgYXBwICAgICAgICAgID0gbmV3IEFwcEtsYXNzKHtjb25maWd1cmF0aW9uOiBjb25maWd9KSxcbiAgICAgICAgICAgICAgYXBwQ29udGFpbmVyID0gbmV3IEFwcENvbnRhaW5lcih7YXBwOiBhcHB9KTtcblxuICAgICAgICAgIHJldHVybiBhcHBDb250YWluZXI7XG4gICAgICAgIH0pO1xuICAgIH0pXG4gIH0pO1xuXG4gIHJldHVybiBCb290c3RyYXBwZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCJibHVlYmlyZFwiKSxcbiAgcmVxdWlyZShcIi4uL2NvcmUvb3B0aW9uc1wiKSxcbiAgcmVxdWlyZShcIi4uL2xvZ2dpbmcvbG9nZ2VyXCIpLFxuICByZXF1aXJlKFwiLi9jb25maWd1cmF0aW9uLW1hZ2ljXCIpLFxuICByZXF1aXJlKFwiLi93ZWItYXBwLWNvbnRhaW5lclwiKVxuKTtcbiIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlLCBwcm9jZXNzOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgUHJvbWlzZSxcbiAgT3B0aW9ucyxcbiAgTG9nZ2VyXG4pIHtcblxuICB2YXIgTG9nID0gTG9nZ2VyLmNyZWF0ZShcIkFwcENvbnRhaW5lclwiKTtcblxuICB2YXIgV2ViQXBwQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoV2ViQXBwQ29udGFpbmVyLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIG9wdHMgPSBPcHRpb25zLmZyb21PYmplY3Qob3B0cylcbiAgICAgIHRoaXMuX2FwcCA9IG9wdHMuZ2V0T3JFcnJvcihcImFwcFwiKTtcbiAgICB9LFxuXG4gICAgc3RhcnQ6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFByb21pc2VcbiAgICAgICAgLmJpbmQodGhpcylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2FwcC5zdGFydCgpO1xuICAgICAgICB9KTtcbiAgICB9KSxcblxuICAgIHN0b3A6IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgcmV0dXJuIHRoaXMuX2FwcC5zdG9wKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHJlYXNvbikge1xuICAgICAgICAgIExvZy5lcnJvcihcIlN0b3BwaW5nIGR1ZSB0byByZWFzb246XCIsIHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gIH0pO1xuXG4gIHJldHVybiBXZWJBcHBDb250YWluZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCJibHVlYmlyZFwiKSxcbiAgcmVxdWlyZShcIi4uL2NvcmUvb3B0aW9uc1wiKSxcbiAgcmVxdWlyZShcIi4uL2xvZ2dpbmcvbG9nZ2VyXCIpXG4pO1xuXG59KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgX1xuKSB7XG5cbiAgdmFyIFdlYlNjaGVkdWxlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKFdlYlNjaGVkdWxlci5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgcnVuU29vbjogZnVuY3Rpb24oZm4pIHtcbiAgICAgIHRoaXMuc2NoZWR1bGUoZm4pO1xuICAgIH0sXG5cbiAgICBzY2hlZHVsZTogZnVuY3Rpb24oZm4sIGRlbGF5KSB7XG4gICAgICBkZWxheSA9IGRlbGF5IHx8IDE7XG4gICAgICByZXR1cm4gc2V0VGltZW91dChmbiwgZGVsYXkpO1xuICAgIH0sXG5cbiAgICB1bnNjaGVkdWxlOiBmdW5jdGlvbihpZCkge1xuICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gV2ViU2NoZWR1bGVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpXG4pO1xuIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIE9wdGlvbnMsXG4gIFB1YlN1YixcbiAgVHJhbnNmb3JtQ2hhaW4sXG4gIE1hcFRyYW5zZm9ybSxcbiAgRmlsdGVyVHJhbnNmb3JtXG4pIHtcblxuICB2YXIgUmVhY3RpdmVOb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoUmVhY3RpdmVOb2RlLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIG9wdHMgPSBPcHRpb25zLmZyb21PYmplY3Qob3B0cyk7XG4gICAgICB0aGlzLl9jaGFpbiA9IG5ldyBUcmFuc2Zvcm1DaGFpbigpO1xuICAgICAgdGhpcy5fcGFyZW50ID0gb3B0cy5nZXRPckVsc2UoXCJwYXJlbnRcIiwgbnVsbCk7XG4gICAgICB0aGlzLl9wdWJzdWIgPSBfLmV4dGVuZCh7fSwgUHViU3ViKTtcblxuICAgICAgdmFyIHRyYW5zZm9ybXMgPSBvcHRzLmdldE9yRWxzZShcInRyYW5zZm9ybXNcIiwgW10pXG5cbiAgICAgIF8uZWFjaCh0cmFuc2Zvcm1zLCBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRoaXMuX2NoYWluLmFkZFRyYW5zZm9ybSh0KTtcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICBfLmJpbmRBbGwodGhpcywgXCJfb25QYXJlbnRFbGVtZW50XCIsIFwiX25vdGlmeVN1YnNjcmliZXJzXCIpO1xuXG4gICAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgIHRoaXMuX3BhcmVudC5fcHVic3ViLm9uKFwiZWxlbWVudFwiLCB0aGlzLl9vblBhcmVudEVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jaGFpbi5vbihcImVsZW1lbnRcIiwgdGhpcy5fbm90aWZ5U3Vic2NyaWJlcnMpO1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgIH0sXG4gICAgbWFwOiBmdW5jdGlvbihmbikge1xuICAgICAgcmV0dXJuIG5ldyBSZWFjdGl2ZU5vZGUoe1xuICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgIHRyYW5zZm9ybXM6IFtuZXcgTWFwVHJhbnNmb3JtKGZuKV1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZmlsdGVyOiBmdW5jdGlvbihmbikge1xuICAgICAgcmV0dXJuIG5ldyBSZWFjdGl2ZU5vZGUoe1xuICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgIHRyYW5zZm9ybXM6IFtuZXcgRmlsdGVyVHJhbnNmb3JtKGZuKV1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgX2FwcGx5OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB0aGlzLl9jaGFpbi5hcHBseShlbGVtZW50KTtcbiAgICB9LFxuICAgIF9hcHBseUVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgIC8vIFRPRE86IE1lYW5zIG9mIGJlaW5nIG5vdGlmaWVkIG9mIGVycm9ycywgcGx6XG4gICAgfSxcbiAgICBfb25QYXJlbnRFbGVtZW50OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB0aGlzLl9hcHBseShlbGVtZW50KTtcbiAgICB9LFxuICAgIF9ub3RpZnlTdWJzY3JpYmVyczogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdGhpcy5fcHVic3ViLm5vdGlmeShcImVsZW1lbnRcIiwgZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gUmVhY3RpdmVOb2RlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9vcHRpb25zXCIpLFxuICByZXF1aXJlKFwiLi4vY29yZS9wdWItc3ViXCIpLFxuICByZXF1aXJlKFwiLi90cmFuc2Zvcm0tY2hhaW5cIiksXG4gIHJlcXVpcmUoXCIuL21hcC10cmFuc2Zvcm1cIiksXG4gIHJlcXVpcmUoXCIuL2ZpbHRlci10cmFuc2Zvcm1cIilcbik7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtb2QgPSBmdW5jdGlvbihcbiAgXyxcbiAgT3B0aW9ucyxcbiAgUmVmLFxuICBTZXRUaW1lb3V0U2NoZWR1bGVyXG4pIHtcblxuICB2YXIgRGVmYXVsdFJ1bnRpbWUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChEZWZhdWx0UnVudGltZS5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICBvcHRzID0gT3B0aW9ucy5mcm9tT2JqZWN0KG9wdHMpO1xuXG4gICAgICB0aGlzLl9zY2hlZHVsZXJSZWYgPSBSZWYob3B0cy5nZXRPckVsc2VGbihcInNjaGVkdWxlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXRUaW1lb3V0U2NoZWR1bGVyKCk7XG4gICAgICB9KSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtSZWY8U2NoZWR1bGVyPn1cbiAgICAgKi9cbiAgICBzY2hlZHVsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFJlZi5kZWxlZ2F0aW5nKHRoaXMuX3NjaGVkdWxlclJlZik7XG4gICAgfSxcblxuICAgIHNldFNjaGVkdWxlcjogZnVuY3Rpb24oc2NoZWR1bGVyKSB7XG4gICAgICB0aGlzLl9zY2hlZHVsZXJSZWYuc2V0KHNjaGVkdWxlcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gRGVmYXVsdFJ1bnRpbWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL29wdGlvbnNcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL3JlZlwiKSxcbiAgcmVxdWlyZShcIi4uL2NvcmUvc2NoZWR1bGVyL3NldC10aW1lb3V0LXNjaGVkdWxlclwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBMb2dnZXIsXG4gIE9wdGlvbnNcbikge1xuXG4gIHZhciBURU5fTUlOVVRFU19JTl9NSUxMSVNFQ09ORFMgPSA2MCAqIDEwMDAgKiAxMDtcblxuICB2YXIgTG9nID0gTG9nZ2VyLmNyZWF0ZShcIlByb2Nlc3NLZWVwQWxpdmVcIik7XG5cbiAgdmFyIFByb2Nlc3NLZWVwQWxpdmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChQcm9jZXNzS2VlcEFsaXZlLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIG9wdHMgPSBPcHRpb25zLmZyb21PYmplY3Qob3B0cyk7XG4gICAgICB0aGlzLl9zY2hlZHVsZXIgPSBvcHRzLmdldE9yRXJyb3IoXCJzY2hlZHVsZXJcIik7XG4gICAgICB0aGlzLl90aW1lb3V0SWQgPSBudWxsO1xuXG4gICAgICBfLmJpbmRBbGwodGhpcywgXCJfY3ljbGVcIik7XG4gICAgfSxcbiAgICBzdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICBMb2cuZGVidWcoXCJTdGFydGluZyBQcm9jZXNzS2VlcEFsaXZlXCIpO1xuICAgICAgdGhpcy5fY3ljbGUoKTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgTG9nLmRlYnVnKFwiU3RvcHBpbmcgUHJvY2Vzc0tlZXBBbGl2ZVwiKTtcbiAgICAgIGlmICh0aGlzLl90aW1lb3V0SWQpIHtcbiAgICAgICAgdGhpcy5fc2NoZWR1bGVyLmdldCgpLnVuc2NoZWR1bGUodGhpcy5fdGltZW91dElkKTtcbiAgICAgICAgdGhpcy5fdGltZW91dElkID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9jeWNsZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl90aW1lb3V0SWQgPSB0aGlzLl9zY2hlZHVsZXIuZ2V0KCkuc2NoZWR1bGUoXG4gICAgICAgIHRoaXMuX2N5Y2xlLFxuICAgICAgICBURU5fTUlOVVRFU19JTl9NSUxMSVNFQ09ORFNcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gUHJvY2Vzc0tlZXBBbGl2ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcIi4uLy4uL2xvZ2dpbmcvbG9nZ2VyXCIpLFxuICByZXF1aXJlKFwiLi4vLi4vY29yZS9vcHRpb25zXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF9cbikge1xuXG4gIC8qKlxuICAgKiBBIGJhc2ljIFJlZiBzZXJ2ZXMgYXMgYSBtZWFucyBvZiBpbmRpcmVjdGlvbiBiZXR3ZWVuIHJlZmVyZW5jZXMgYW5kIHRoZWlyXG4gICAqIHZhbHVlcywgYWxsb3dpbmcgYW4gb3V0c2lkZSBhZ2VudCB0byBtb2RpZnkgdGhlIHVuZGVybHlpbmcgdmFsdWUuXG4gICAqL1xuICB2YXIgUmVmID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoUmVmLnByb3RvdHlwZSwge1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgdGhpcy5fdmFsID0gdmFsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHZhbHVlIGJveGVkIGJ5IHRoaXMgUmVmXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZHluYW1pY31cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgbmV3IGJveGVkIHZhbHVlLiBOb3RlIHRoaXMgbWV0aG9kIGlzIHNwZWNpZmljIHRvIHRoaXMgUmVmXG4gICAgICogaW1wbGVtZW50YXRpb24sIGFuZCBub3QgdGhlIFJlZiBwcm90b2NvbCwgd2hpY2ggb25seSBkZWZpbmVzXG4gICAgICogYFJlZiNnZXQoKWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmV3VmFsIHtkeW5hbWljfSB0aGUgdmFsdWUgdG8gYm94XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbihuZXdWYWwpIHtcbiAgICAgIGlmIChuZXdWYWwgaW5zdGFuY2VvZiBSZWYpIHtcbiAgICAgICAgdGhpcy5fdmFsID0gbmV3VmFsLmdldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdmFsID0gbmV3VmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFJlZjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfXG4pIHtcblxuICAvKipcbiAgICogQSByZWYgd2hvc2UgYm94ZWQgdmFsdWUgaXMgYW5vdGhlciByZWZcbiAgICovXG4gIHZhciBEZWxlZ2F0aW5nUmVmID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoRGVsZWdhdGluZ1JlZi5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgIHRoaXMuX2RlbGVnYXRlUmVmID0gcmVmO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZVJlZi5nZXQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBEZWxlZ2F0aW5nUmVmO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2QoXG4gIHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpXG4pO1xuXG59KSgpIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIiwiKGZ1bmN0aW9uKHByb2Nlc3Mpey8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgb2xkO1xuaWYgKHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiKSBvbGQgPSBQcm9taXNlO1xuZnVuY3Rpb24gbm9Db25mbGljdChibHVlYmlyZCkge1xuICAgIHRyeSB7IGlmIChQcm9taXNlID09PSBibHVlYmlyZCkgUHJvbWlzZSA9IG9sZDsgfVxuICAgIGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBibHVlYmlyZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgYXN5bmMgPSByZXF1aXJlKFwiLi9hc3luYy5qc1wiKTtcbnZhciBlcnJvcnMgPSByZXF1aXJlKFwiLi9lcnJvcnMuanNcIik7XG5cbnZhciBJTlRFUk5BTCA9IGZ1bmN0aW9uKCl7fTtcbnZhciBBUFBMWSA9IHt9O1xudmFyIE5FWFRfRklMVEVSID0ge2U6IG51bGx9O1xuXG52YXIgY2FzdCA9IHJlcXVpcmUoXCIuL3RoZW5hYmxlcy5qc1wiKShQcm9taXNlLCBJTlRFUk5BTCk7XG52YXIgUHJvbWlzZUFycmF5ID0gcmVxdWlyZShcIi4vcHJvbWlzZV9hcnJheS5qc1wiKShQcm9taXNlLCBJTlRFUk5BTCwgY2FzdCk7XG52YXIgQ2FwdHVyZWRUcmFjZSA9IHJlcXVpcmUoXCIuL2NhcHR1cmVkX3RyYWNlLmpzXCIpKCk7XG52YXIgQ2F0Y2hGaWx0ZXIgPSByZXF1aXJlKFwiLi9jYXRjaF9maWx0ZXIuanNcIikoTkVYVF9GSUxURVIpO1xudmFyIFByb21pc2VSZXNvbHZlciA9IHJlcXVpcmUoXCIuL3Byb21pc2VfcmVzb2x2ZXIuanNcIik7XG5cbnZhciBpc0FycmF5ID0gdXRpbC5pc0FycmF5O1xuXG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xudmFyIHRyeUNhdGNoMSA9IHV0aWwudHJ5Q2F0Y2gxO1xudmFyIHRyeUNhdGNoMiA9IHV0aWwudHJ5Q2F0Y2gyO1xudmFyIHRyeUNhdGNoQXBwbHkgPSB1dGlsLnRyeUNhdGNoQXBwbHk7XG52YXIgUmFuZ2VFcnJvciA9IGVycm9ycy5SYW5nZUVycm9yO1xudmFyIFR5cGVFcnJvciA9IGVycm9ycy5UeXBlRXJyb3I7XG52YXIgQ2FuY2VsbGF0aW9uRXJyb3IgPSBlcnJvcnMuQ2FuY2VsbGF0aW9uRXJyb3I7XG52YXIgVGltZW91dEVycm9yID0gZXJyb3JzLlRpbWVvdXRFcnJvcjtcbnZhciBPcGVyYXRpb25hbEVycm9yID0gZXJyb3JzLk9wZXJhdGlvbmFsRXJyb3I7XG52YXIgb3JpZ2luYXRlc0Zyb21SZWplY3Rpb24gPSBlcnJvcnMub3JpZ2luYXRlc0Zyb21SZWplY3Rpb247XG52YXIgbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uID0gZXJyb3JzLm1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbjtcbnZhciBjYW5BdHRhY2ggPSBlcnJvcnMuY2FuQXR0YWNoO1xudmFyIHRocm93ZXIgPSB1dGlsLnRocm93ZXI7XG52YXIgYXBpUmVqZWN0aW9uID0gcmVxdWlyZShcIi4vZXJyb3JzX2FwaV9yZWplY3Rpb25cIikoUHJvbWlzZSk7XG5cblxudmFyIG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yID0gZnVuY3Rpb24gUHJvbWlzZSRfbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJjaXJjdWxhciBwcm9taXNlIHJlc29sdXRpb24gY2hhaW5cIik7XG59O1xuXG5mdW5jdGlvbiBQcm9taXNlKHJlc29sdmVyKSB7XG4gICAgaWYgKHR5cGVvZiByZXNvbHZlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvciByZXF1aXJlcyBhIHJlc29sdmVyIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3RvciAhPT0gUHJvbWlzZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwidGhlIHByb21pc2UgY29uc3RydWN0b3IgY2Fubm90IGJlIGludm9rZWQgZGlyZWN0bHlcIik7XG4gICAgfVxuICAgIHRoaXMuX2JpdEZpZWxkID0gMDtcbiAgICB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwID0gdm9pZCAwO1xuICAgIHRoaXMuX3JlamVjdGlvbkhhbmRsZXIwID0gdm9pZCAwO1xuICAgIHRoaXMuX3Byb21pc2UwID0gdm9pZCAwO1xuICAgIHRoaXMuX3JlY2VpdmVyMCA9IHZvaWQgMDtcbiAgICB0aGlzLl9zZXR0bGVkVmFsdWUgPSB2b2lkIDA7XG4gICAgdGhpcy5fYm91bmRUbyA9IHZvaWQgMDtcbiAgICBpZiAocmVzb2x2ZXIgIT09IElOVEVSTkFMKSB0aGlzLl9yZXNvbHZlRnJvbVJlc29sdmVyKHJlc29sdmVyKTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIFByb21pc2UkYmluZCh0aGlzQXJnKSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXQuX2ZvbGxvdyh0aGlzKTtcbiAgICByZXQuX3Byb3BhZ2F0ZUZyb20odGhpcywgMiB8IDEpO1xuICAgIHJldC5fc2V0Qm91bmRUbyh0aGlzQXJnKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiBQcm9taXNlJHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgUHJvbWlzZV1cIjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmNhdWdodCA9IFByb21pc2UucHJvdG90eXBlW1wiY2F0Y2hcIl0gPVxuZnVuY3Rpb24gUHJvbWlzZSRjYXRjaChmbikge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChsZW4gPiAxKSB7XG4gICAgICAgIHZhciBjYXRjaEluc3RhbmNlcyA9IG5ldyBBcnJheShsZW4gLSAxKSxcbiAgICAgICAgICAgIGogPSAwLCBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuIC0gMTsgKytpKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY2F0Y2hJbnN0YW5jZXNbaisrXSA9IGl0ZW07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjYXRjaEZpbHRlclR5cGVFcnJvciA9XG4gICAgICAgICAgICAgICAgICAgIG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkEgY2F0Y2ggZmlsdGVyIG11c3QgYmUgYW4gZXJyb3IgY29uc3RydWN0b3IgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgXCJvciBhIGZpbHRlciBmdW5jdGlvblwiKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2F0dGFjaEV4dHJhVHJhY2UoY2F0Y2hGaWx0ZXJUeXBlRXJyb3IpO1xuICAgICAgICAgICAgICAgIGFzeW5jLmludm9rZSh0aGlzLl9yZWplY3QsIHRoaXMsIGNhdGNoRmlsdGVyVHlwZUVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2hJbnN0YW5jZXMubGVuZ3RoID0gajtcbiAgICAgICAgZm4gPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgdGhpcy5fcmVzZXRUcmFjZSgpO1xuICAgICAgICB2YXIgY2F0Y2hGaWx0ZXIgPSBuZXcgQ2F0Y2hGaWx0ZXIoY2F0Y2hJbnN0YW5jZXMsIGZuLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RoZW4odm9pZCAwLCBjYXRjaEZpbHRlci5kb0ZpbHRlciwgdm9pZCAwLFxuICAgICAgICAgICAgY2F0Y2hGaWx0ZXIsIHZvaWQgMCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90aGVuKHZvaWQgMCwgZm4sIHZvaWQgMCwgdm9pZCAwLCB2b2lkIDApO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9XG5mdW5jdGlvbiBQcm9taXNlJHRoZW4oZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCBkaWRQcm9ncmVzcykge1xuICAgIHJldHVybiB0aGlzLl90aGVuKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MsXG4gICAgICAgIHZvaWQgMCwgdm9pZCAwKTtcbn07XG5cblxuUHJvbWlzZS5wcm90b3R5cGUuZG9uZSA9XG5mdW5jdGlvbiBQcm9taXNlJGRvbmUoZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCBkaWRQcm9ncmVzcykge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fdGhlbihkaWRGdWxmaWxsLCBkaWRSZWplY3QsIGRpZFByb2dyZXNzLFxuICAgICAgICB2b2lkIDAsIHZvaWQgMCk7XG4gICAgcHJvbWlzZS5fc2V0SXNGaW5hbCgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuc3ByZWFkID0gZnVuY3Rpb24gUHJvbWlzZSRzcHJlYWQoZGlkRnVsZmlsbCwgZGlkUmVqZWN0KSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4oZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCB2b2lkIDAsXG4gICAgICAgIEFQUExZLCB2b2lkIDApO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuaXNDYW5jZWxsYWJsZSA9IGZ1bmN0aW9uIFByb21pc2UkaXNDYW5jZWxsYWJsZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNSZXNvbHZlZCgpICYmXG4gICAgICAgIHRoaXMuX2NhbmNlbGxhYmxlKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiBQcm9taXNlJHRvSlNPTigpIHtcbiAgICB2YXIgcmV0ID0ge1xuICAgICAgICBpc0Z1bGZpbGxlZDogZmFsc2UsXG4gICAgICAgIGlzUmVqZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBmdWxmaWxsbWVudFZhbHVlOiB2b2lkIDAsXG4gICAgICAgIHJlamVjdGlvblJlYXNvbjogdm9pZCAwXG4gICAgfTtcbiAgICBpZiAodGhpcy5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgIHJldC5mdWxmaWxsbWVudFZhbHVlID0gdGhpcy5fc2V0dGxlZFZhbHVlO1xuICAgICAgICByZXQuaXNGdWxmaWxsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgcmV0LnJlamVjdGlvblJlYXNvbiA9IHRoaXMuX3NldHRsZWRWYWx1ZTtcbiAgICAgICAgcmV0LmlzUmVqZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24gUHJvbWlzZSRhbGwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQXJyYXkodGhpcykucHJvbWlzZSgpO1xufTtcblxuXG5Qcm9taXNlLmlzID0gZnVuY3Rpb24gUHJvbWlzZSRJcyh2YWwpIHtcbiAgICByZXR1cm4gdmFsIGluc3RhbmNlb2YgUHJvbWlzZTtcbn07XG5cblByb21pc2UuYWxsID0gZnVuY3Rpb24gUHJvbWlzZSRBbGwocHJvbWlzZXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VBcnJheShwcm9taXNlcykucHJvbWlzZSgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiBQcm9taXNlJF9lcnJvcihmbikge1xuICAgIHJldHVybiB0aGlzLmNhdWdodChvcmlnaW5hdGVzRnJvbVJlamVjdGlvbiwgZm4pO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Jlc29sdmVGcm9tU3luY1ZhbHVlID1cbmZ1bmN0aW9uIFByb21pc2UkX3Jlc29sdmVGcm9tU3luY1ZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBlcnJvck9iaikge1xuICAgICAgICB0aGlzLl9jbGVhblZhbHVlcygpO1xuICAgICAgICB0aGlzLl9zZXRSZWplY3RlZCgpO1xuICAgICAgICB0aGlzLl9zZXR0bGVkVmFsdWUgPSB2YWx1ZS5lO1xuICAgICAgICB0aGlzLl9lbnN1cmVQb3NzaWJsZVJlamVjdGlvbkhhbmRsZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gY2FzdCh2YWx1ZSwgdm9pZCAwKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvdyhtYXliZVByb21pc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2xlYW5WYWx1ZXMoKTtcbiAgICAgICAgICAgIHRoaXMuX3NldEZ1bGZpbGxlZCgpO1xuICAgICAgICAgICAgdGhpcy5fc2V0dGxlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Qcm9taXNlLm1ldGhvZCA9IGZ1bmN0aW9uIFByb21pc2UkX01ldGhvZChmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gUHJvbWlzZSRfbWV0aG9kKCkge1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogdmFsdWUgPSB0cnlDYXRjaDEoZm4sIHRoaXMsIHZvaWQgMCk7IGJyZWFrO1xuICAgICAgICBjYXNlIDE6IHZhbHVlID0gdHJ5Q2F0Y2gxKGZuLCB0aGlzLCBhcmd1bWVudHNbMF0pOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiB2YWx1ZSA9IHRyeUNhdGNoMihmbiwgdGhpcywgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGg7dmFyIGFyZ3MgPSBuZXcgQXJyYXkoJF9sZW4pOyBmb3IodmFyICRfaSA9IDA7ICRfaSA8ICRfbGVuOyArKyRfaSkge2FyZ3NbJF9pXSA9IGFyZ3VtZW50c1skX2ldO31cbiAgICAgICAgICAgIHZhbHVlID0gdHJ5Q2F0Y2hBcHBseShmbiwgYXJncywgdGhpcyk7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgIHJldC5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICAgICAgcmV0Ll9yZXNvbHZlRnJvbVN5bmNWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbn07XG5cblByb21pc2UuYXR0ZW1wdCA9IFByb21pc2VbXCJ0cnlcIl0gPSBmdW5jdGlvbiBQcm9taXNlJF9UcnkoZm4sIGFyZ3MsIGN0eCkge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICB2YXIgdmFsdWUgPSBpc0FycmF5KGFyZ3MpXG4gICAgICAgID8gdHJ5Q2F0Y2hBcHBseShmbiwgYXJncywgY3R4KVxuICAgICAgICA6IHRyeUNhdGNoMShmbiwgY3R4LCBhcmdzKTtcblxuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcmV0Ll9zZXRUcmFjZSh2b2lkIDApO1xuICAgIHJldC5fcmVzb2x2ZUZyb21TeW5jVmFsdWUodmFsdWUpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLmRlZmVyID0gUHJvbWlzZS5wZW5kaW5nID0gZnVuY3Rpb24gUHJvbWlzZSREZWZlcigpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICBwcm9taXNlLl9zZXRUcmFjZSh2b2lkIDApO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZVJlc29sdmVyKHByb21pc2UpO1xufTtcblxuUHJvbWlzZS5iaW5kID0gZnVuY3Rpb24gUHJvbWlzZSRCaW5kKHRoaXNBcmcpIHtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICByZXQuX3NldEZ1bGZpbGxlZCgpO1xuICAgIHJldC5fc2V0Qm91bmRUbyh0aGlzQXJnKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5jYXN0ID0gZnVuY3Rpb24gUHJvbWlzZSRfQ2FzdChvYmopIHtcbiAgICB2YXIgcmV0ID0gY2FzdChvYmosIHZvaWQgMCk7XG4gICAgaWYgKCEocmV0IGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgdmFyIHZhbCA9IHJldDtcbiAgICAgICAgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICByZXQuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgICAgIHJldC5fc2V0RnVsZmlsbGVkKCk7XG4gICAgICAgIHJldC5fY2xlYW5WYWx1ZXMoKTtcbiAgICAgICAgcmV0Ll9zZXR0bGVkVmFsdWUgPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnJlc29sdmUgPSBQcm9taXNlLmZ1bGZpbGxlZCA9IFByb21pc2UuY2FzdDtcblxuUHJvbWlzZS5yZWplY3QgPSBQcm9taXNlLnJlamVjdGVkID0gZnVuY3Rpb24gUHJvbWlzZSRSZWplY3QocmVhc29uKSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXQuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKHJlYXNvbik7XG4gICAgcmV0Ll9jbGVhblZhbHVlcygpO1xuICAgIHJldC5fc2V0UmVqZWN0ZWQoKTtcbiAgICByZXQuX3NldHRsZWRWYWx1ZSA9IHJlYXNvbjtcbiAgICBpZiAoIWNhbkF0dGFjaChyZWFzb24pKSB7XG4gICAgICAgIHZhciB0cmFjZSA9IG5ldyBFcnJvcihyZWFzb24gKyBcIlwiKTtcbiAgICAgICAgcmV0Ll9zZXRDYXJyaWVkU3RhY2tUcmFjZSh0cmFjZSk7XG4gICAgfVxuICAgIHJldC5fZW5zdXJlUG9zc2libGVSZWplY3Rpb25IYW5kbGVkKCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2Uub25Qb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbiA9XG5mdW5jdGlvbiBQcm9taXNlJE9uUG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24oZm4pIHtcbiAgICAgICAgQ2FwdHVyZWRUcmFjZS5wb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbiA9IHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmbiA6IHZvaWQgMDtcbn07XG5cbnZhciB1bmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkO1xuUHJvbWlzZS5vblVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRvblVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQoZm4pIHtcbiAgICB1bmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkID0gdHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIgPyBmbiA6IHZvaWQgMDtcbn07XG5cbnZhciBkZWJ1Z2dpbmcgPSBmYWxzZSB8fCAhIShcbiAgICB0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIHR5cGVvZiBwcm9jZXNzLmV4ZWNQYXRoID09PSBcInN0cmluZ1wiICYmXG4gICAgdHlwZW9mIHByb2Nlc3MuZW52ID09PSBcIm9iamVjdFwiICYmXG4gICAgKHByb2Nlc3MuZW52W1wiQkxVRUJJUkRfREVCVUdcIl0gfHxcbiAgICAgICAgcHJvY2Vzcy5lbnZbXCJOT0RFX0VOVlwiXSA9PT0gXCJkZXZlbG9wbWVudFwiKVxuKTtcblxuXG5Qcm9taXNlLmxvbmdTdGFja1RyYWNlcyA9IGZ1bmN0aW9uIFByb21pc2UkTG9uZ1N0YWNrVHJhY2VzKCkge1xuICAgIGlmIChhc3luYy5oYXZlSXRlbXNRdWV1ZWQoKSAmJlxuICAgICAgICBkZWJ1Z2dpbmcgPT09IGZhbHNlXG4gICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IGVuYWJsZSBsb25nIHN0YWNrIHRyYWNlcyBhZnRlciBwcm9taXNlcyBoYXZlIGJlZW4gY3JlYXRlZFwiKTtcbiAgICB9XG4gICAgZGVidWdnaW5nID0gQ2FwdHVyZWRUcmFjZS5pc1N1cHBvcnRlZCgpO1xufTtcblxuUHJvbWlzZS5oYXNMb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbiBQcm9taXNlJEhhc0xvbmdTdGFja1RyYWNlcygpIHtcbiAgICByZXR1cm4gZGVidWdnaW5nICYmIENhcHR1cmVkVHJhY2UuaXNTdXBwb3J0ZWQoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl90aGVuID1cbmZ1bmN0aW9uIFByb21pc2UkX3RoZW4oXG4gICAgZGlkRnVsZmlsbCxcbiAgICBkaWRSZWplY3QsXG4gICAgZGlkUHJvZ3Jlc3MsXG4gICAgcmVjZWl2ZXIsXG4gICAgaW50ZXJuYWxEYXRhXG4pIHtcbiAgICB2YXIgaGF2ZUludGVybmFsRGF0YSA9IGludGVybmFsRGF0YSAhPT0gdm9pZCAwO1xuICAgIHZhciByZXQgPSBoYXZlSW50ZXJuYWxEYXRhID8gaW50ZXJuYWxEYXRhIDogbmV3IFByb21pc2UoSU5URVJOQUwpO1xuXG4gICAgaWYgKCFoYXZlSW50ZXJuYWxEYXRhKSB7XG4gICAgICAgIGlmIChkZWJ1Z2dpbmcpIHtcbiAgICAgICAgICAgIHZhciBoYXZlU2FtZUNvbnRleHQgPSB0aGlzLl9wZWVrQ29udGV4dCgpID09PSB0aGlzLl90cmFjZVBhcmVudDtcbiAgICAgICAgICAgIHJldC5fdHJhY2VQYXJlbnQgPSBoYXZlU2FtZUNvbnRleHQgPyB0aGlzLl90cmFjZVBhcmVudCA6IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0Ll9wcm9wYWdhdGVGcm9tKHRoaXMsIDcpO1xuICAgIH1cblxuICAgIHZhciBjYWxsYmFja0luZGV4ID1cbiAgICAgICAgdGhpcy5fYWRkQ2FsbGJhY2tzKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MsIHJldCwgcmVjZWl2ZXIpO1xuXG4gICAgaWYgKHRoaXMuaXNSZXNvbHZlZCgpKSB7XG4gICAgICAgIGFzeW5jLmludm9rZSh0aGlzLl9xdWV1ZVNldHRsZUF0LCB0aGlzLCBjYWxsYmFja0luZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2xlbmd0aCA9IGZ1bmN0aW9uIFByb21pc2UkX2xlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYml0RmllbGQgJiAyNjIxNDM7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfaXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDkzOTUyNDA5NikgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzRm9sbG93aW5nID0gZnVuY3Rpb24gUHJvbWlzZSRfaXNGb2xsb3dpbmcoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDUzNjg3MDkxMikgPT09IDUzNjg3MDkxMjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRMZW5ndGggPSBmdW5jdGlvbiBQcm9taXNlJF9zZXRMZW5ndGgobGVuKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSAodGhpcy5fYml0RmllbGQgJiAtMjYyMTQ0KSB8XG4gICAgICAgIChsZW4gJiAyNjIxNDMpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldEZ1bGZpbGxlZCA9IGZ1bmN0aW9uIFByb21pc2UkX3NldEZ1bGZpbGxlZCgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMjY4NDM1NDU2O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFJlamVjdGVkID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0UmVqZWN0ZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDEzNDIxNzcyODtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRGb2xsb3dpbmcgPSBmdW5jdGlvbiBQcm9taXNlJF9zZXRGb2xsb3dpbmcoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDUzNjg3MDkxMjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRJc0ZpbmFsID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0SXNGaW5hbCgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMzM1NTQ0MzI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNGaW5hbCA9IGZ1bmN0aW9uIFByb21pc2UkX2lzRmluYWwoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDMzNTU0NDMyKSA+IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FuY2VsbGFibGUgPSBmdW5jdGlvbiBQcm9taXNlJF9jYW5jZWxsYWJsZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNjcxMDg4NjQpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRDYW5jZWxsYWJsZSA9IGZ1bmN0aW9uIFByb21pc2UkX3NldENhbmNlbGxhYmxlKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCA2NzEwODg2NDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldENhbmNlbGxhYmxlID0gZnVuY3Rpb24gUHJvbWlzZSRfdW5zZXRDYW5jZWxsYWJsZSgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH42NzEwODg2NCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDIwOTcxNTI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCA9XG5mdW5jdGlvbiBQcm9taXNlJF91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjIwOTcxNTIpO1xuICAgIGlmICh0aGlzLl9pc1VuaGFuZGxlZFJlamVjdGlvbk5vdGlmaWVkKCkpIHtcbiAgICAgICAgdGhpcy5fdW5zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkKCk7XG4gICAgICAgIHRoaXMuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbklzSGFuZGxlZCgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc1JlamVjdGlvblVuaGFuZGxlZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9pc1JlamVjdGlvblVuaGFuZGxlZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMjA5NzE1MikgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfc2V0VW5oYW5kbGVkUmVqZWN0aW9uSXNOb3RpZmllZCgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgNTI0Mjg4O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0VW5oYW5kbGVkUmVqZWN0aW9uSXNOb3RpZmllZCA9XG5mdW5jdGlvbiBQcm9taXNlJF91bnNldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+NTI0Mjg4KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc1VuaGFuZGxlZFJlamVjdGlvbk5vdGlmaWVkID1cbmZ1bmN0aW9uIFByb21pc2UkX2lzVW5oYW5kbGVkUmVqZWN0aW9uTm90aWZpZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDUyNDI4OCkgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldENhcnJpZWRTdGFja1RyYWNlID1cbmZ1bmN0aW9uIFByb21pc2UkX3NldENhcnJpZWRTdGFja1RyYWNlKGNhcHR1cmVkVHJhY2UpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMTA0ODU3NjtcbiAgICB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwID0gY2FwdHVyZWRUcmFjZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldENhcnJpZWRTdGFja1RyYWNlID1cbmZ1bmN0aW9uIFByb21pc2UkX3Vuc2V0Q2FycmllZFN0YWNrVHJhY2UoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+MTA0ODU3Nik7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9IHZvaWQgMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0NhcnJ5aW5nU3RhY2tUcmFjZSA9XG5mdW5jdGlvbiBQcm9taXNlJF9pc0NhcnJ5aW5nU3RhY2tUcmFjZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMTA0ODU3NikgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2dldENhcnJpZWRTdGFja1RyYWNlID1cbmZ1bmN0aW9uIFByb21pc2UkX2dldENhcnJpZWRTdGFja1RyYWNlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0NhcnJ5aW5nU3RhY2tUcmFjZSgpXG4gICAgICAgID8gdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMFxuICAgICAgICA6IHZvaWQgMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWNlaXZlckF0ID0gZnVuY3Rpb24gUHJvbWlzZSRfcmVjZWl2ZXJBdChpbmRleCkge1xuICAgIHZhciByZXQgPSBpbmRleCA9PT0gMFxuICAgICAgICA/IHRoaXMuX3JlY2VpdmVyMFxuICAgICAgICA6IHRoaXNbKGluZGV4IDw8IDIpICsgaW5kZXggLSA1ICsgNF07XG4gICAgaWYgKHRoaXMuX2lzQm91bmQoKSAmJiByZXQgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRUbztcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm9taXNlQXQgPSBmdW5jdGlvbiBQcm9taXNlJF9wcm9taXNlQXQoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPT09IDBcbiAgICAgICAgPyB0aGlzLl9wcm9taXNlMFxuICAgICAgICA6IHRoaXNbKGluZGV4IDw8IDIpICsgaW5kZXggLSA1ICsgM107XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZnVsZmlsbG1lbnRIYW5kbGVyQXQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfZnVsZmlsbG1lbnRIYW5kbGVyQXQoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPT09IDBcbiAgICAgICAgPyB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwXG4gICAgICAgIDogdGhpc1soaW5kZXggPDwgMikgKyBpbmRleCAtIDUgKyAwXTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3Rpb25IYW5kbGVyQXQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfcmVqZWN0aW9uSGFuZGxlckF0KGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4ID09PSAwXG4gICAgICAgID8gdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjBcbiAgICAgICAgOiB0aGlzWyhpbmRleCA8PCAyKSArIGluZGV4IC0gNSArIDFdO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2FkZENhbGxiYWNrcyA9IGZ1bmN0aW9uIFByb21pc2UkX2FkZENhbGxiYWNrcyhcbiAgICBmdWxmaWxsLFxuICAgIHJlamVjdCxcbiAgICBwcm9ncmVzcyxcbiAgICBwcm9taXNlLFxuICAgIHJlY2VpdmVyXG4pIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9sZW5ndGgoKTtcblxuICAgIGlmIChpbmRleCA+PSAyNjIxNDMgLSA1KSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9wcm9taXNlMCA9IHByb21pc2U7XG4gICAgICAgIGlmIChyZWNlaXZlciAhPT0gdm9pZCAwKSB0aGlzLl9yZWNlaXZlcjAgPSByZWNlaXZlcjtcbiAgICAgICAgaWYgKHR5cGVvZiBmdWxmaWxsID09PSBcImZ1bmN0aW9uXCIgJiYgIXRoaXMuX2lzQ2FycnlpbmdTdGFja1RyYWNlKCkpXG4gICAgICAgICAgICB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwID0gZnVsZmlsbDtcbiAgICAgICAgaWYgKHR5cGVvZiByZWplY3QgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjAgPSByZWplY3Q7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvZ3Jlc3MgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5fcHJvZ3Jlc3NIYW5kbGVyMCA9IHByb2dyZXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBiYXNlID0gKGluZGV4IDw8IDIpICsgaW5kZXggLSA1O1xuICAgICAgICB0aGlzW2Jhc2UgKyAzXSA9IHByb21pc2U7XG4gICAgICAgIHRoaXNbYmFzZSArIDRdID0gcmVjZWl2ZXI7XG4gICAgICAgIHRoaXNbYmFzZSArIDBdID0gdHlwZW9mIGZ1bGZpbGwgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZ1bGZpbGwgOiB2b2lkIDA7XG4gICAgICAgIHRoaXNbYmFzZSArIDFdID0gdHlwZW9mIHJlamVjdCA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcmVqZWN0IDogdm9pZCAwO1xuICAgICAgICB0aGlzW2Jhc2UgKyAyXSA9IHR5cGVvZiBwcm9ncmVzcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvZ3Jlc3MgOiB2b2lkIDA7XG4gICAgfVxuICAgIHRoaXMuX3NldExlbmd0aChpbmRleCArIDEpO1xuICAgIHJldHVybiBpbmRleDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRQcm94eUhhbmRsZXJzID1cbmZ1bmN0aW9uIFByb21pc2UkX3NldFByb3h5SGFuZGxlcnMocmVjZWl2ZXIsIHByb21pc2VTbG90VmFsdWUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9sZW5ndGgoKTtcblxuICAgIGlmIChpbmRleCA+PSAyNjIxNDMgLSA1KSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZTAgPSBwcm9taXNlU2xvdFZhbHVlO1xuICAgICAgICB0aGlzLl9yZWNlaXZlcjAgPSByZWNlaXZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYmFzZSA9IChpbmRleCA8PCAyKSArIGluZGV4IC0gNTtcbiAgICAgICAgdGhpc1tiYXNlICsgM10gPSBwcm9taXNlU2xvdFZhbHVlO1xuICAgICAgICB0aGlzW2Jhc2UgKyA0XSA9IHJlY2VpdmVyO1xuICAgICAgICB0aGlzW2Jhc2UgKyAwXSA9XG4gICAgICAgIHRoaXNbYmFzZSArIDFdID1cbiAgICAgICAgdGhpc1tiYXNlICsgMl0gPSB2b2lkIDA7XG4gICAgfVxuICAgIHRoaXMuX3NldExlbmd0aChpbmRleCArIDEpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb3h5UHJvbWlzZUFycmF5ID1cbmZ1bmN0aW9uIFByb21pc2UkX3Byb3h5UHJvbWlzZUFycmF5KHByb21pc2VBcnJheSwgaW5kZXgpIHtcbiAgICB0aGlzLl9zZXRQcm94eUhhbmRsZXJzKHByb21pc2VBcnJheSwgaW5kZXgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb3h5UHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UkX3Byb3h5UHJvbWlzZShwcm9taXNlKSB7XG4gICAgcHJvbWlzZS5fc2V0UHJveGllZCgpO1xuICAgIHRoaXMuX3NldFByb3h5SGFuZGxlcnMocHJvbWlzZSwgLTEpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldEJvdW5kVG8gPSBmdW5jdGlvbiBQcm9taXNlJF9zZXRCb3VuZFRvKG9iaikge1xuICAgIGlmIChvYmogIT09IHZvaWQgMCkge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgODM4ODYwODtcbiAgICAgICAgdGhpcy5fYm91bmRUbyA9IG9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH44Mzg4NjA4KTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNCb3VuZCA9IGZ1bmN0aW9uIFByb21pc2UkX2lzQm91bmQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDgzODg2MDgpID09PSA4Mzg4NjA4O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Jlc29sdmVGcm9tUmVzb2x2ZXIgPVxuZnVuY3Rpb24gUHJvbWlzZSRfcmVzb2x2ZUZyb21SZXNvbHZlcihyZXNvbHZlcikge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICB0aGlzLl9zZXRUcmFjZSh2b2lkIDApO1xuICAgIHRoaXMuX3B1c2hDb250ZXh0KCk7XG5cbiAgICBmdW5jdGlvbiBQcm9taXNlJF9yZXNvbHZlcih2YWwpIHtcbiAgICAgICAgaWYgKHByb21pc2UuX3RyeUZvbGxvdyh2YWwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcHJvbWlzZS5fZnVsZmlsbCh2YWwpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBQcm9taXNlJF9yZWplY3Rlcih2YWwpIHtcbiAgICAgICAgdmFyIHRyYWNlID0gY2FuQXR0YWNoKHZhbCkgPyB2YWwgOiBuZXcgRXJyb3IodmFsICsgXCJcIik7XG4gICAgICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UpO1xuICAgICAgICBtYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb24odmFsKTtcbiAgICAgICAgcHJvbWlzZS5fcmVqZWN0KHZhbCwgdHJhY2UgPT09IHZhbCA/IHZvaWQgMCA6IHRyYWNlKTtcbiAgICB9XG4gICAgdmFyIHIgPSB0cnlDYXRjaDIocmVzb2x2ZXIsIHZvaWQgMCwgUHJvbWlzZSRfcmVzb2x2ZXIsIFByb21pc2UkX3JlamVjdGVyKTtcbiAgICB0aGlzLl9wb3BDb250ZXh0KCk7XG5cbiAgICBpZiAociAhPT0gdm9pZCAwICYmIHIgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIHZhciBlID0gci5lO1xuICAgICAgICB2YXIgdHJhY2UgPSBjYW5BdHRhY2goZSkgPyBlIDogbmV3IEVycm9yKGUgKyBcIlwiKTtcbiAgICAgICAgcHJvbWlzZS5fcmVqZWN0KGUsIHRyYWNlKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc3ByZWFkU2xvd0Nhc2UgPVxuZnVuY3Rpb24gUHJvbWlzZSRfc3ByZWFkU2xvd0Nhc2UodGFyZ2V0Rm4sIHByb21pc2UsIHZhbHVlcywgYm91bmRUbykge1xuICAgIHZhciBwcm9taXNlRm9yQWxsID0gbmV3IFByb21pc2VBcnJheSh2YWx1ZXMpLnByb21pc2UoKTtcbiAgICB2YXIgcHJvbWlzZTIgPSBwcm9taXNlRm9yQWxsLl90aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0Rm4uYXBwbHkoYm91bmRUbywgYXJndW1lbnRzKTtcbiAgICB9LCB2b2lkIDAsIHZvaWQgMCwgQVBQTFksIHZvaWQgMCk7XG4gICAgcHJvbWlzZS5fZm9sbG93KHByb21pc2UyKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9jYWxsU3ByZWFkID1cbmZ1bmN0aW9uIFByb21pc2UkX2NhbGxTcHJlYWQoaGFuZGxlciwgcHJvbWlzZSwgdmFsdWUpIHtcbiAgICB2YXIgYm91bmRUbyA9IHRoaXMuX2JvdW5kVG87XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgaWYgKGNhc3QodmFsdWVbaV0sIHZvaWQgMCkgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ByZWFkU2xvd0Nhc2UoaGFuZGxlciwgcHJvbWlzZSwgdmFsdWUsIGJvdW5kVG8pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgIHJldHVybiB0cnlDYXRjaEFwcGx5KGhhbmRsZXIsIHZhbHVlLCBib3VuZFRvKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9jYWxsSGFuZGxlciA9XG5mdW5jdGlvbiBQcm9taXNlJF9jYWxsSGFuZGxlcihcbiAgICBoYW5kbGVyLCByZWNlaXZlciwgcHJvbWlzZSwgdmFsdWUpIHtcbiAgICB2YXIgeDtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEFQUExZICYmICF0aGlzLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICB4ID0gdGhpcy5fY2FsbFNwcmVhZChoYW5kbGVyLCBwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICAgICAgeCA9IHRyeUNhdGNoMShoYW5kbGVyLCByZWNlaXZlciwgdmFsdWUpO1xuICAgIH1cbiAgICBwcm9taXNlLl9wb3BDb250ZXh0KCk7XG4gICAgcmV0dXJuIHg7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZUZyb21IYW5kbGVyID1cbmZ1bmN0aW9uIFByb21pc2UkX3NldHRsZVByb21pc2VGcm9tSGFuZGxlcihcbiAgICBoYW5kbGVyLCByZWNlaXZlciwgdmFsdWUsIHByb21pc2Vcbikge1xuICAgIGlmICghKHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgICBoYW5kbGVyLmNhbGwocmVjZWl2ZXIsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgeCA9IHRoaXMuX2NhbGxIYW5kbGVyKGhhbmRsZXIsIHJlY2VpdmVyLCBwcm9taXNlLCB2YWx1ZSk7XG4gICAgaWYgKHByb21pc2UuX2lzRm9sbG93aW5nKCkpIHJldHVybjtcblxuICAgIGlmICh4ID09PSBlcnJvck9iaiB8fCB4ID09PSBwcm9taXNlIHx8IHggPT09IE5FWFRfRklMVEVSKSB7XG4gICAgICAgIHZhciBlcnIgPSB4ID09PSBwcm9taXNlXG4gICAgICAgICAgICAgICAgICAgID8gbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IoKVxuICAgICAgICAgICAgICAgICAgICA6IHguZTtcbiAgICAgICAgdmFyIHRyYWNlID0gY2FuQXR0YWNoKGVycikgPyBlcnIgOiBuZXcgRXJyb3IoZXJyICsgXCJcIik7XG4gICAgICAgIGlmICh4ICE9PSBORVhUX0ZJTFRFUikgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh0cmFjZSk7XG4gICAgICAgIHByb21pc2UuX3JlamVjdFVuY2hlY2tlZChlcnIsIHRyYWNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2FzdFZhbHVlID0gY2FzdCh4LCBwcm9taXNlKTtcbiAgICAgICAgaWYgKGNhc3RWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIGlmIChjYXN0VmFsdWUuaXNSZWplY3RlZCgpICYmXG4gICAgICAgICAgICAgICAgIWNhc3RWYWx1ZS5faXNDYXJyeWluZ1N0YWNrVHJhY2UoKSAmJlxuICAgICAgICAgICAgICAgICFjYW5BdHRhY2goY2FzdFZhbHVlLl9zZXR0bGVkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRyYWNlID0gbmV3IEVycm9yKGNhc3RWYWx1ZS5fc2V0dGxlZFZhbHVlICsgXCJcIik7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh0cmFjZSk7XG4gICAgICAgICAgICAgICAgY2FzdFZhbHVlLl9zZXRDYXJyaWVkU3RhY2tUcmFjZSh0cmFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9taXNlLl9mb2xsb3coY2FzdFZhbHVlKTtcbiAgICAgICAgICAgIHByb21pc2UuX3Byb3BhZ2F0ZUZyb20oY2FzdFZhbHVlLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UuX2Z1bGZpbGxVbmNoZWNrZWQoeCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZm9sbG93ID1cbmZ1bmN0aW9uIFByb21pc2UkX2ZvbGxvdyhwcm9taXNlKSB7XG4gICAgdGhpcy5fc2V0Rm9sbG93aW5nKCk7XG5cbiAgICBpZiAocHJvbWlzZS5pc1BlbmRpbmcoKSkge1xuICAgICAgICB0aGlzLl9wcm9wYWdhdGVGcm9tKHByb21pc2UsIDEpO1xuICAgICAgICBwcm9taXNlLl9wcm94eVByb21pc2UodGhpcyk7XG4gICAgfSBlbHNlIGlmIChwcm9taXNlLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgdGhpcy5fZnVsZmlsbFVuY2hlY2tlZChwcm9taXNlLl9zZXR0bGVkVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlamVjdFVuY2hlY2tlZChwcm9taXNlLl9zZXR0bGVkVmFsdWUsXG4gICAgICAgICAgICBwcm9taXNlLl9nZXRDYXJyaWVkU3RhY2tUcmFjZSgpKTtcbiAgICB9XG5cbiAgICBpZiAocHJvbWlzZS5faXNSZWplY3Rpb25VbmhhbmRsZWQoKSkgcHJvbWlzZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuXG4gICAgaWYgKGRlYnVnZ2luZyAmJlxuICAgICAgICBwcm9taXNlLl90cmFjZVBhcmVudCA9PSBudWxsKSB7XG4gICAgICAgIHByb21pc2UuX3RyYWNlUGFyZW50ID0gdGhpcztcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdHJ5Rm9sbG93ID1cbmZ1bmN0aW9uIFByb21pc2UkX3RyeUZvbGxvdyh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9pc0ZvbGxvd2luZ09yRnVsZmlsbGVkT3JSZWplY3RlZCgpIHx8XG4gICAgICAgIHZhbHVlID09PSB0aGlzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QodmFsdWUsIHZvaWQgMCk7XG4gICAgaWYgKCEobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9mb2xsb3cobWF5YmVQcm9taXNlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXNldFRyYWNlID0gZnVuY3Rpb24gUHJvbWlzZSRfcmVzZXRUcmFjZSgpIHtcbiAgICBpZiAoZGVidWdnaW5nKSB7XG4gICAgICAgIHRoaXMuX3RyYWNlID0gbmV3IENhcHR1cmVkVHJhY2UodGhpcy5fcGVla0NvbnRleHQoKSA9PT0gdm9pZCAwKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0VHJhY2UgPSBmdW5jdGlvbiBQcm9taXNlJF9zZXRUcmFjZShwYXJlbnQpIHtcbiAgICBpZiAoZGVidWdnaW5nKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5fcGVla0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5fdHJhY2VQYXJlbnQgPSBjb250ZXh0O1xuICAgICAgICB2YXIgaXNUb3BMZXZlbCA9IGNvbnRleHQgPT09IHZvaWQgMDtcbiAgICAgICAgaWYgKHBhcmVudCAhPT0gdm9pZCAwICYmXG4gICAgICAgICAgICBwYXJlbnQuX3RyYWNlUGFyZW50ID09PSBjb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZSA9IHBhcmVudC5fdHJhY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZSA9IG5ldyBDYXB0dXJlZFRyYWNlKGlzVG9wTGV2ZWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2F0dGFjaEV4dHJhVHJhY2UgPVxuZnVuY3Rpb24gUHJvbWlzZSRfYXR0YWNoRXh0cmFUcmFjZShlcnJvcikge1xuICAgIGlmIChkZWJ1Z2dpbmcpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhY2sgPSBlcnJvci5zdGFjaztcbiAgICAgICAgc3RhY2sgPSB0eXBlb2Ygc3RhY2sgPT09IFwic3RyaW5nXCIgPyBzdGFjay5zcGxpdChcIlxcblwiKSA6IFtdO1xuICAgICAgICBDYXB0dXJlZFRyYWNlLnByb3RlY3RFcnJvck1lc3NhZ2VOZXdsaW5lcyhzdGFjayk7XG4gICAgICAgIHZhciBoZWFkZXJMaW5lQ291bnQgPSAxO1xuICAgICAgICB2YXIgY29tYmluZWRUcmFjZXMgPSAxO1xuICAgICAgICB3aGlsZShwcm9taXNlICE9IG51bGwgJiZcbiAgICAgICAgICAgIHByb21pc2UuX3RyYWNlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN0YWNrID0gQ2FwdHVyZWRUcmFjZS5jb21iaW5lKFxuICAgICAgICAgICAgICAgIHN0YWNrLFxuICAgICAgICAgICAgICAgIHByb21pc2UuX3RyYWNlLnN0YWNrLnNwbGl0KFwiXFxuXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJvbWlzZSA9IHByb21pc2UuX3RyYWNlUGFyZW50O1xuICAgICAgICAgICAgY29tYmluZWRUcmFjZXMrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGFja1RyYWNlTGltaXQgPSBFcnJvci5zdGFja1RyYWNlTGltaXQgfHwgMTA7XG4gICAgICAgIHZhciBtYXggPSAoc3RhY2tUcmFjZUxpbWl0ICsgaGVhZGVyTGluZUNvdW50KSAqIGNvbWJpbmVkVHJhY2VzO1xuICAgICAgICB2YXIgbGVuID0gc3RhY2subGVuZ3RoO1xuICAgICAgICBpZiAobGVuID4gbWF4KSB7XG4gICAgICAgICAgICBzdGFjay5sZW5ndGggPSBtYXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGVuID4gMClcbiAgICAgICAgICAgIHN0YWNrWzBdID0gc3RhY2tbMF0uc3BsaXQoXCJcXHUwMDAyXFx1MDAwMFxcdTAwMDFcIikuam9pbihcIlxcblwiKTtcblxuICAgICAgICBpZiAoc3RhY2subGVuZ3RoIDw9IGhlYWRlckxpbmVDb3VudCkge1xuICAgICAgICAgICAgZXJyb3Iuc3RhY2sgPSBcIihObyBzdGFjayB0cmFjZSlcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yLnN0YWNrID0gc3RhY2suam9pbihcIlxcblwiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9jbGVhblZhbHVlcyA9IGZ1bmN0aW9uIFByb21pc2UkX2NsZWFuVmFsdWVzKCkge1xuICAgIGlmICh0aGlzLl9jYW5jZWxsYWJsZSgpKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbGxhdGlvblBhcmVudCA9IHZvaWQgMDtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcHJvcGFnYXRlRnJvbSA9XG5mdW5jdGlvbiBQcm9taXNlJF9wcm9wYWdhdGVGcm9tKHBhcmVudCwgZmxhZ3MpIHtcbiAgICBpZiAoKGZsYWdzICYgMSkgPiAwICYmIHBhcmVudC5fY2FuY2VsbGFibGUoKSkge1xuICAgICAgICB0aGlzLl9zZXRDYW5jZWxsYWJsZSgpO1xuICAgICAgICB0aGlzLl9jYW5jZWxsYXRpb25QYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIGlmICgoZmxhZ3MgJiA0KSA+IDApIHtcbiAgICAgICAgdGhpcy5fc2V0Qm91bmRUbyhwYXJlbnQuX2JvdW5kVG8pO1xuICAgIH1cbiAgICBpZiAoKGZsYWdzICYgMikgPiAwKSB7XG4gICAgICAgIHRoaXMuX3NldFRyYWNlKHBhcmVudCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2Z1bGZpbGwgPSBmdW5jdGlvbiBQcm9taXNlJF9mdWxmaWxsKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX2lzRm9sbG93aW5nT3JGdWxmaWxsZWRPclJlamVjdGVkKCkpIHJldHVybjtcbiAgICB0aGlzLl9mdWxmaWxsVW5jaGVja2VkKHZhbHVlKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3QgPVxuZnVuY3Rpb24gUHJvbWlzZSRfcmVqZWN0KHJlYXNvbiwgY2FycmllZFN0YWNrVHJhY2UpIHtcbiAgICBpZiAodGhpcy5faXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX3JlamVjdFVuY2hlY2tlZChyZWFzb24sIGNhcnJpZWRTdGFja1RyYWNlKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXR0bGVQcm9taXNlQXQgPSBmdW5jdGlvbiBQcm9taXNlJF9zZXR0bGVQcm9taXNlQXQoaW5kZXgpIHtcbiAgICB2YXIgaGFuZGxlciA9IHRoaXMuaXNGdWxmaWxsZWQoKVxuICAgICAgICA/IHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlckF0KGluZGV4KVxuICAgICAgICA6IHRoaXMuX3JlamVjdGlvbkhhbmRsZXJBdChpbmRleCk7XG5cbiAgICB2YXIgdmFsdWUgPSB0aGlzLl9zZXR0bGVkVmFsdWU7XG4gICAgdmFyIHJlY2VpdmVyID0gdGhpcy5fcmVjZWl2ZXJBdChpbmRleCk7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlQXQoaW5kZXgpO1xuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhpcy5fc2V0dGxlUHJvbWlzZUZyb21IYW5kbGVyKGhhbmRsZXIsIHJlY2VpdmVyLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGlzRnVsZmlsbGVkID0gdGhpcy5pc0Z1bGZpbGxlZCgpO1xuICAgICAgICBpZiAocmVjZWl2ZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgaWYgKHJlY2VpdmVyIGluc3RhbmNlb2YgUHJvbWlzZSAmJlxuICAgICAgICAgICAgICAgIHJlY2VpdmVyLl9pc1Byb3hpZWQoKSkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyLl91bnNldFByb3hpZWQoKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bGZpbGxlZCkgcmVjZWl2ZXIuX2Z1bGZpbGxVbmNoZWNrZWQodmFsdWUpO1xuICAgICAgICAgICAgICAgIGVsc2UgcmVjZWl2ZXIuX3JlamVjdFVuY2hlY2tlZCh2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q2FycmllZFN0YWNrVHJhY2UoKSk7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY2VpdmVyIGluc3RhbmNlb2YgUHJvbWlzZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRnVsZmlsbGVkKSByZWNlaXZlci5fcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgZWxzZSByZWNlaXZlci5fcHJvbWlzZVJlamVjdGVkKHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzRnVsZmlsbGVkKSBwcm9taXNlLl9mdWxmaWxsKHZhbHVlKTtcbiAgICAgICAgICAgIGVsc2UgcHJvbWlzZS5fcmVqZWN0KHZhbHVlLCB0aGlzLl9nZXRDYXJyaWVkU3RhY2tUcmFjZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbmRleCA+PSAyNTYpIHtcbiAgICAgICAgdGhpcy5fcXVldWVHQygpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc1Byb3hpZWQgPSBmdW5jdGlvbiBQcm9taXNlJF9pc1Byb3hpZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDQxOTQzMDQpID09PSA0MTk0MzA0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFByb3hpZWQgPSBmdW5jdGlvbiBQcm9taXNlJF9zZXRQcm94aWVkKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCA0MTk0MzA0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0UHJveGllZCA9IGZ1bmN0aW9uIFByb21pc2UkX3Vuc2V0UHJveGllZCgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH40MTk0MzA0KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0djUXVldWVkID0gZnVuY3Rpb24gUHJvbWlzZSRfaXNHY1F1ZXVlZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgLTEwNzM3NDE4MjQpID09PSAtMTA3Mzc0MTgyNDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRHY1F1ZXVlZCA9IGZ1bmN0aW9uIFByb21pc2UkX3NldEdjUXVldWVkKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAtMTA3Mzc0MTgyNDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldEdjUXVldWVkID0gZnVuY3Rpb24gUHJvbWlzZSRfdW5zZXRHY1F1ZXVlZCgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH4tMTA3Mzc0MTgyNCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcXVldWVHQyA9IGZ1bmN0aW9uIFByb21pc2UkX3F1ZXVlR0MoKSB7XG4gICAgaWYgKHRoaXMuX2lzR2NRdWV1ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX3NldEdjUXVldWVkKCk7XG4gICAgYXN5bmMuaW52b2tlTGF0ZXIodGhpcy5fZ2MsIHRoaXMsIHZvaWQgMCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZ2MgPSBmdW5jdGlvbiBQcm9taXNlJGdjKCkge1xuICAgIHZhciBsZW4gPSB0aGlzLl9sZW5ndGgoKSAqIDU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBkZWxldGUgdGhpc1tpXTtcbiAgICB9XG4gICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgIHRoaXMuX3Vuc2V0R2NRdWV1ZWQoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9xdWV1ZVNldHRsZUF0ID0gZnVuY3Rpb24gUHJvbWlzZSRfcXVldWVTZXR0bGVBdChpbmRleCkge1xuICAgIGlmICh0aGlzLl9pc1JlamVjdGlvblVuaGFuZGxlZCgpKSB0aGlzLl91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgYXN5bmMuaW52b2tlKHRoaXMuX3NldHRsZVByb21pc2VBdCwgdGhpcywgaW5kZXgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2Z1bGZpbGxVbmNoZWNrZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfZnVsZmlsbFVuY2hlY2tlZCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5pc1BlbmRpbmcoKSkgcmV0dXJuO1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcykge1xuICAgICAgICB2YXIgZXJyID0gbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IoKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoRXh0cmFUcmFjZShlcnIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVqZWN0VW5jaGVja2VkKGVyciwgdm9pZCAwKTtcbiAgICB9XG4gICAgdGhpcy5fY2xlYW5WYWx1ZXMoKTtcbiAgICB0aGlzLl9zZXRGdWxmaWxsZWQoKTtcbiAgICB0aGlzLl9zZXR0bGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB2YXIgbGVuID0gdGhpcy5fbGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuID4gMCkge1xuICAgICAgICBhc3luYy5pbnZva2UodGhpcy5fc2V0dGxlUHJvbWlzZXMsIHRoaXMsIGxlbik7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JlamVjdFVuY2hlY2tlZENoZWNrRXJyb3IgPVxuZnVuY3Rpb24gUHJvbWlzZSRfcmVqZWN0VW5jaGVja2VkQ2hlY2tFcnJvcihyZWFzb24pIHtcbiAgICB2YXIgdHJhY2UgPSBjYW5BdHRhY2gocmVhc29uKSA/IHJlYXNvbiA6IG5ldyBFcnJvcihyZWFzb24gKyBcIlwiKTtcbiAgICB0aGlzLl9yZWplY3RVbmNoZWNrZWQocmVhc29uLCB0cmFjZSA9PT0gcmVhc29uID8gdm9pZCAwIDogdHJhY2UpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JlamVjdFVuY2hlY2tlZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9yZWplY3RVbmNoZWNrZWQocmVhc29uLCB0cmFjZSkge1xuICAgIGlmICghdGhpcy5pc1BlbmRpbmcoKSkgcmV0dXJuO1xuICAgIGlmIChyZWFzb24gPT09IHRoaXMpIHtcbiAgICAgICAgdmFyIGVyciA9IG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yKCk7XG4gICAgICAgIHRoaXMuX2F0dGFjaEV4dHJhVHJhY2UoZXJyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlamVjdFVuY2hlY2tlZChlcnIpO1xuICAgIH1cbiAgICB0aGlzLl9jbGVhblZhbHVlcygpO1xuICAgIHRoaXMuX3NldFJlamVjdGVkKCk7XG4gICAgdGhpcy5fc2V0dGxlZFZhbHVlID0gcmVhc29uO1xuXG4gICAgaWYgKHRoaXMuX2lzRmluYWwoKSkge1xuICAgICAgICBhc3luYy5pbnZva2VMYXRlcih0aHJvd2VyLCB2b2lkIDAsIHRyYWNlID09PSB2b2lkIDAgPyByZWFzb24gOiB0cmFjZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGxlbiA9IHRoaXMuX2xlbmd0aCgpO1xuXG4gICAgaWYgKHRyYWNlICE9PSB2b2lkIDApIHRoaXMuX3NldENhcnJpZWRTdGFja1RyYWNlKHRyYWNlKTtcblxuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIGFzeW5jLmludm9rZSh0aGlzLl9yZWplY3RQcm9taXNlcywgdGhpcywgbnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZW5zdXJlUG9zc2libGVSZWplY3Rpb25IYW5kbGVkKCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JlamVjdFByb21pc2VzID0gZnVuY3Rpb24gUHJvbWlzZSRfcmVqZWN0UHJvbWlzZXMoKSB7XG4gICAgdGhpcy5fc2V0dGxlUHJvbWlzZXMoKTtcbiAgICB0aGlzLl91bnNldENhcnJpZWRTdGFja1RyYWNlKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZXMgPSBmdW5jdGlvbiBQcm9taXNlJF9zZXR0bGVQcm9taXNlcygpIHtcbiAgICB2YXIgbGVuID0gdGhpcy5fbGVuZ3RoKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB0aGlzLl9zZXR0bGVQcm9taXNlQXQoaSk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2Vuc3VyZVBvc3NpYmxlUmVqZWN0aW9uSGFuZGxlZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9lbnN1cmVQb3NzaWJsZVJlamVjdGlvbkhhbmRsZWQoKSB7XG4gICAgdGhpcy5fc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICBpZiAoQ2FwdHVyZWRUcmFjZS5wb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGFzeW5jLmludm9rZUxhdGVyKHRoaXMuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbiwgdGhpcywgdm9pZCAwKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fbm90aWZ5VW5oYW5kbGVkUmVqZWN0aW9uSXNIYW5kbGVkID1cbmZ1bmN0aW9uIFByb21pc2UkX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbklzSGFuZGxlZCgpIHtcbiAgICBpZiAodHlwZW9mIHVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBhc3luYy5pbnZva2VMYXRlcih1bmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkLCB2b2lkIDAsIHRoaXMpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb24gPVxuZnVuY3Rpb24gUHJvbWlzZSRfbm90aWZ5VW5oYW5kbGVkUmVqZWN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc1JlamVjdGlvblVuaGFuZGxlZCgpKSB7XG4gICAgICAgIHZhciByZWFzb24gPSB0aGlzLl9zZXR0bGVkVmFsdWU7XG4gICAgICAgIHZhciB0cmFjZSA9IHRoaXMuX2dldENhcnJpZWRTdGFja1RyYWNlKCk7XG5cbiAgICAgICAgdGhpcy5fc2V0VW5oYW5kbGVkUmVqZWN0aW9uSXNOb3RpZmllZCgpO1xuXG4gICAgICAgIGlmICh0cmFjZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0aGlzLl91bnNldENhcnJpZWRTdGFja1RyYWNlKCk7XG4gICAgICAgICAgICByZWFzb24gPSB0cmFjZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIENhcHR1cmVkVHJhY2UucG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgQ2FwdHVyZWRUcmFjZS5wb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbihyZWFzb24sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIGNvbnRleHRTdGFjayA9IFtdO1xuUHJvbWlzZS5wcm90b3R5cGUuX3BlZWtDb250ZXh0ID0gZnVuY3Rpb24gUHJvbWlzZSRfcGVla0NvbnRleHQoKSB7XG4gICAgdmFyIGxhc3RJbmRleCA9IGNvbnRleHRTdGFjay5sZW5ndGggLSAxO1xuICAgIGlmIChsYXN0SW5kZXggPj0gMCkge1xuICAgICAgICByZXR1cm4gY29udGV4dFN0YWNrW2xhc3RJbmRleF07XG4gICAgfVxuICAgIHJldHVybiB2b2lkIDA7XG5cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wdXNoQ29udGV4dCA9IGZ1bmN0aW9uIFByb21pc2UkX3B1c2hDb250ZXh0KCkge1xuICAgIGlmICghZGVidWdnaW5nKSByZXR1cm47XG4gICAgY29udGV4dFN0YWNrLnB1c2godGhpcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcG9wQ29udGV4dCA9IGZ1bmN0aW9uIFByb21pc2UkX3BvcENvbnRleHQoKSB7XG4gICAgaWYgKCFkZWJ1Z2dpbmcpIHJldHVybjtcbiAgICBjb250ZXh0U3RhY2sucG9wKCk7XG59O1xuXG5Qcm9taXNlLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiBQcm9taXNlJE5vQ29uZmxpY3QoKSB7XG4gICAgcmV0dXJuIG5vQ29uZmxpY3QoUHJvbWlzZSk7XG59O1xuXG5Qcm9taXNlLnNldFNjaGVkdWxlciA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIGFzeW5jLl9zY2hlZHVsZSA9IGZuO1xufTtcblxuaWYgKCFDYXB0dXJlZFRyYWNlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICBQcm9taXNlLmxvbmdTdGFja1RyYWNlcyA9IGZ1bmN0aW9uKCl7fTtcbiAgICBkZWJ1Z2dpbmcgPSBmYWxzZTtcbn1cblxuUHJvbWlzZS5fbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IgPSBtYWtlU2VsZlJlc29sdXRpb25FcnJvcjtcbnJlcXVpcmUoXCIuL2ZpbmFsbHkuanNcIikoUHJvbWlzZSwgTkVYVF9GSUxURVIsIGNhc3QpO1xucmVxdWlyZShcIi4vZGlyZWN0X3Jlc29sdmUuanNcIikoUHJvbWlzZSk7XG5yZXF1aXJlKFwiLi9zeW5jaHJvbm91c19pbnNwZWN0aW9uLmpzXCIpKFByb21pc2UpO1xucmVxdWlyZShcIi4vam9pbi5qc1wiKShQcm9taXNlLCBQcm9taXNlQXJyYXksIGNhc3QsIElOVEVSTkFMKTtcblByb21pc2UuUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG5Qcm9taXNlLkNhbmNlbGxhdGlvbkVycm9yID0gQ2FuY2VsbGF0aW9uRXJyb3I7XG5Qcm9taXNlLlRpbWVvdXRFcnJvciA9IFRpbWVvdXRFcnJvcjtcblByb21pc2UuVHlwZUVycm9yID0gVHlwZUVycm9yO1xuUHJvbWlzZS5PcGVyYXRpb25hbEVycm9yID0gT3BlcmF0aW9uYWxFcnJvcjtcblByb21pc2UuUmVqZWN0aW9uRXJyb3IgPSBPcGVyYXRpb25hbEVycm9yO1xuUHJvbWlzZS5BZ2dyZWdhdGVFcnJvciA9IGVycm9ycy5BZ2dyZWdhdGVFcnJvcjtcblxudXRpbC50b0Zhc3RQcm9wZXJ0aWVzKFByb21pc2UpO1xudXRpbC50b0Zhc3RQcm9wZXJ0aWVzKFByb21pc2UucHJvdG90eXBlKTtcblByb21pc2UuUHJvbWlzZSA9IFByb21pc2U7XG5yZXF1aXJlKCcuL3RpbWVycy5qcycpKFByb21pc2UsSU5URVJOQUwsY2FzdCk7XG5yZXF1aXJlKCcuL3JhY2UuanMnKShQcm9taXNlLElOVEVSTkFMLGNhc3QpO1xucmVxdWlyZSgnLi9jYWxsX2dldC5qcycpKFByb21pc2UpO1xucmVxdWlyZSgnLi9nZW5lcmF0b3JzLmpzJykoUHJvbWlzZSxhcGlSZWplY3Rpb24sSU5URVJOQUwsY2FzdCk7XG5yZXF1aXJlKCcuL21hcC5qcycpKFByb21pc2UsUHJvbWlzZUFycmF5LGFwaVJlamVjdGlvbixjYXN0LElOVEVSTkFMKTtcbnJlcXVpcmUoJy4vbm9kZWlmeS5qcycpKFByb21pc2UpO1xucmVxdWlyZSgnLi9wcm9taXNpZnkuanMnKShQcm9taXNlLElOVEVSTkFMKTtcbnJlcXVpcmUoJy4vcHJvcHMuanMnKShQcm9taXNlLFByb21pc2VBcnJheSxjYXN0KTtcbnJlcXVpcmUoJy4vcmVkdWNlLmpzJykoUHJvbWlzZSxQcm9taXNlQXJyYXksYXBpUmVqZWN0aW9uLGNhc3QsSU5URVJOQUwpO1xucmVxdWlyZSgnLi9zZXR0bGUuanMnKShQcm9taXNlLFByb21pc2VBcnJheSk7XG5yZXF1aXJlKCcuL3NvbWUuanMnKShQcm9taXNlLFByb21pc2VBcnJheSxhcGlSZWplY3Rpb24pO1xucmVxdWlyZSgnLi9wcm9ncmVzcy5qcycpKFByb21pc2UsUHJvbWlzZUFycmF5KTtcbnJlcXVpcmUoJy4vY2FuY2VsLmpzJykoUHJvbWlzZSxJTlRFUk5BTCk7XG5yZXF1aXJlKCcuL2ZpbHRlci5qcycpKFByb21pc2UsSU5URVJOQUwpO1xucmVxdWlyZSgnLi9hbnkuanMnKShQcm9taXNlLFByb21pc2VBcnJheSk7XG5yZXF1aXJlKCcuL2VhY2guanMnKShQcm9taXNlLElOVEVSTkFMKTtcbnJlcXVpcmUoJy4vdXNpbmcuanMnKShQcm9taXNlLGFwaVJlamVjdGlvbixjYXN0KTtcblxuUHJvbWlzZS5wcm90b3R5cGUgPSBQcm9taXNlLnByb3RvdHlwZTtcbnJldHVybiBQcm9taXNlO1xuXG59O1xuXG59KShyZXF1aXJlKFwiX19icm93c2VyaWZ5X3Byb2Nlc3NcIikpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIFRyYW5zZm9ybVxuKSB7XG5cbiAgdmFyIEZpbHRlclRyYW5zZm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKEZpbHRlclRyYW5zZm9ybS5wcm90b3R5cGUsIFRyYW5zZm9ybS5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihmaWx0ZXJGbikge1xuICAgICAgdGhpcy5fZmlsdGVyRm4gPSBmaWx0ZXJGbjtcbiAgICB9LFxuICAgIGFwcGx5OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5fZmlsdGVyRm4oZWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5ub3RpZnkoXCJlbGVtZW50XCIsIGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIEZpbHRlclRyYW5zZm9ybTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcIi4vdHJhbnNmb3JtXCIpXG4pO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbW9kID0gZnVuY3Rpb24oXG4gIF8sXG4gIFRyYW5zZm9ybVxuKSB7XG5cbiAgdmFyIE1hcFRyYW5zZm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIF8uZXh0ZW5kKE1hcFRyYW5zZm9ybS5wcm90b3R5cGUsIFRyYW5zZm9ybS5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihtYXBGbikge1xuICAgICAgVHJhbnNmb3JtLnByb3RvdHlwZS5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB0aGlzLl9tYXBGbiA9IG1hcEZuXG4gICAgfSxcbiAgICBhcHBseTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdGhpcy5ub3RpZnkoXCJlbGVtZW50XCIsIHRoaXMuX21hcEZuKGVsZW1lbnQpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBNYXBUcmFuc2Zvcm07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCIuL3RyYW5zZm9ybVwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBQdWJTdWIsXG4gIFRyYW5zZm9ybVxuKSB7XG5cbiAgdmFyIFRyYW5zZm9ybUNoYWluID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgXy5leHRlbmQoVHJhbnNmb3JtQ2hhaW4ucHJvdG90eXBlLCBQdWJTdWIsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2hlYWQgPSB0aGlzLl90YWlsID0gbmV3IFRyYW5zZm9ybSgpO1xuXG4gICAgICBfLmJpbmRBbGwodGhpcywgXCJfb25UYWlsRWxlbWVudFwiLCBcImFwcGx5XCIpO1xuXG4gICAgICB0aGlzLl90YWlsLm9uKFwiZWxlbWVudFwiLCB0aGlzLl9vblRhaWxFbGVtZW50KTtcbiAgICB9LFxuICAgIGFwcGx5OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB0aGlzLl9oZWFkLmFwcGx5KGVsZW1lbnQpO1xuICAgIH0sXG4gICAgYWRkVHJhbnNmb3JtOiBmdW5jdGlvbih0KSB7XG4gICAgICB0aGlzLl90YWlsLm9mZihcImVsZW1lbnRcIiwgdGhpcy5fb25UYWlsRWxlbWVudCk7XG4gICAgICB0aGlzLl90YWlsLm9uKFwiZWxlbWVudFwiLCB0LmFwcGx5LCB0KTtcbiAgICAgIHRoaXMuX3RhaWwgPSB0O1xuICAgICAgdGhpcy5fdGFpbC5vbihcImVsZW1lbnRcIiwgdGhpcy5fb25UYWlsRWxlbWVudCk7XG5cbiAgICB9LFxuICAgIF9vblRhaWxFbGVtZW50OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB0aGlzLm5vdGlmeShcImVsZW1lbnRcIiwgZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gVHJhbnNmb3JtQ2hhaW47XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIiksXG4gIHJlcXVpcmUoXCIuLi9jb3JlL3B1Yi1zdWJcIiksXG4gIHJlcXVpcmUoXCIuL3RyYW5zZm9ybVwiKVxuKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8qZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfLFxuICBQdWJTdWJcbikge1xuXG4gIHZhciBUcmFuc2Zvcm0gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBfLmV4dGVuZChUcmFuc2Zvcm0ucHJvdG90eXBlLCBQdWJTdWIsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHt9LFxuICAgIGFwcGx5OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAvLyBEZWZhdWx0IGlzIGlkZW50aXR5IG1hcFxuICAgICAgdGhpcy5ub3RpZnkoXCJlbGVtZW50XCIsIGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFRyYW5zZm9ybTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kKFxuICByZXF1aXJlKFwidW5kZXJzY29yZVwiKSxcbiAgcmVxdWlyZShcIi4uL2NvcmUvcHViLXN1YlwiKVxuKTtcblxufSkoKSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UpIHtcbmZ1bmN0aW9uIFByb21pc2VJbnNwZWN0aW9uKHByb21pc2UpIHtcbiAgICBpZiAocHJvbWlzZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gcHJvbWlzZS5fYml0RmllbGQ7XG4gICAgICAgIHRoaXMuX3NldHRsZWRWYWx1ZSA9IHByb21pc2UuaXNSZXNvbHZlZCgpXG4gICAgICAgICAgICA/IHByb21pc2UuX3NldHRsZWRWYWx1ZVxuICAgICAgICAgICAgOiB2b2lkIDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IDA7XG4gICAgICAgIHRoaXMuX3NldHRsZWRWYWx1ZSA9IHZvaWQgMDtcbiAgICB9XG59XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5pc0Z1bGZpbGxlZCA9XG5Qcm9taXNlLnByb3RvdHlwZS5pc0Z1bGZpbGxlZCA9IGZ1bmN0aW9uIFByb21pc2UkaXNGdWxmaWxsZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDI2ODQzNTQ1NikgPiAwO1xufTtcblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmlzUmVqZWN0ZWQgPVxuUHJvbWlzZS5wcm90b3R5cGUuaXNSZWplY3RlZCA9IGZ1bmN0aW9uIFByb21pc2UkaXNSZWplY3RlZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMTM0MjE3NzI4KSA+IDA7XG59O1xuXG5Qcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuaXNQZW5kaW5nID1cblByb21pc2UucHJvdG90eXBlLmlzUGVuZGluZyA9IGZ1bmN0aW9uIFByb21pc2UkaXNQZW5kaW5nKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA0MDI2NTMxODQpID09PSAwO1xufTtcblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLnZhbHVlID1cblByb21pc2UucHJvdG90eXBlLnZhbHVlID0gZnVuY3Rpb24gUHJvbWlzZSR2YWx1ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2Fubm90IGdldCBmdWxmaWxsbWVudCB2YWx1ZSBvZiBhIG5vbi1mdWxmaWxsZWQgcHJvbWlzZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3NldHRsZWRWYWx1ZTtcbn07XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5lcnJvciA9XG5Qcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUucmVhc29uID1cblByb21pc2UucHJvdG90eXBlLnJlYXNvbiA9IGZ1bmN0aW9uIFByb21pc2UkcmVhc29uKCkge1xuICAgIGlmICghdGhpcy5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbm5vdCBnZXQgcmVqZWN0aW9uIHJlYXNvbiBvZiBhIG5vbi1yZWplY3RlZCBwcm9taXNlXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc2V0dGxlZFZhbHVlO1xufTtcblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmlzUmVzb2x2ZWQgPVxuUHJvbWlzZS5wcm90b3R5cGUuaXNSZXNvbHZlZCA9IGZ1bmN0aW9uIFByb21pc2UkaXNSZXNvbHZlZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNDAyNjUzMTg0KSA+IDA7XG59O1xuXG5Qcm9taXNlLlByb21pc2VJbnNwZWN0aW9uID0gUHJvbWlzZUluc3BlY3Rpb247XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwpIHtcbnZhciBQcm9taXNlTWFwID0gUHJvbWlzZS5tYXA7XG5cblByb21pc2UucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIFByb21pc2UkZmlsdGVyKGZuLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIFByb21pc2VNYXAodGhpcywgZm4sIG9wdGlvbnMsIElOVEVSTkFMKTtcbn07XG5cblByb21pc2UuZmlsdGVyID0gZnVuY3Rpb24gUHJvbWlzZSRGaWx0ZXIocHJvbWlzZXMsIGZuLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIFByb21pc2VNYXAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBJTlRFUk5BTCk7XG59O1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UpIHtcbnZhciBTb21lUHJvbWlzZUFycmF5ID0gUHJvbWlzZS5fU29tZVByb21pc2VBcnJheTtcbmZ1bmN0aW9uIFByb21pc2UkX0FueShwcm9taXNlcykge1xuICAgIHZhciByZXQgPSBuZXcgU29tZVByb21pc2VBcnJheShwcm9taXNlcyk7XG4gICAgdmFyIHByb21pc2UgPSByZXQucHJvbWlzZSgpO1xuICAgIGlmIChwcm9taXNlLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgcmV0LnNldEhvd01hbnkoMSk7XG4gICAgcmV0LnNldFVud3JhcCgpO1xuICAgIHJldC5pbml0KCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cblByb21pc2UuYW55ID0gZnVuY3Rpb24gUHJvbWlzZSRBbnkocHJvbWlzZXMpIHtcbiAgICByZXR1cm4gUHJvbWlzZSRfQW55KHByb21pc2VzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmFueSA9IGZ1bmN0aW9uIFByb21pc2UkYW55KCkge1xuICAgIHJldHVybiBQcm9taXNlJF9BbnkodGhpcyk7XG59O1xuXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwpIHtcbnZhciBQcm9taXNlUmVkdWNlID0gUHJvbWlzZS5yZWR1Y2U7XG5cblByb21pc2UucHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbiBQcm9taXNlJGVhY2goZm4pIHtcbiAgICByZXR1cm4gUHJvbWlzZVJlZHVjZSh0aGlzLCBmbiwgbnVsbCwgSU5URVJOQUwpO1xufTtcblxuUHJvbWlzZS5lYWNoID0gZnVuY3Rpb24gUHJvbWlzZSRFYWNoKHByb21pc2VzLCBmbikge1xuICAgIHJldHVybiBQcm9taXNlUmVkdWNlKHByb21pc2VzLCBmbiwgbnVsbCwgSU5URVJOQUwpO1xufTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKFxuICBfXG4pIHtcblxuICB2YXIgU2V0VGltZW91dFNjaGVkdWxlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgXy5leHRlbmQoU2V0VGltZW91dFNjaGVkdWxlci5wcm90b3R5cGUsIHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgcnVuU29vbjogZnVuY3Rpb24oZm4pIHtcbiAgICAgIHRoaXMuc2NoZWR1bGUoZm4pO1xuICAgIH0sXG4gICAgc2NoZWR1bGU6IGZ1bmN0aW9uKGZuLCBkZWxheSkge1xuICAgICAgZGVsYXkgPSBkZWxheSB8fCAxO1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIGRlbGF5KTtcbiAgICB9LFxuXG4gICAgdW5zY2hlZHVsZTogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFNldFRpbWVvdXRTY2hlZHVsZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZChcbiAgcmVxdWlyZShcInVuZGVyc2NvcmVcIilcbik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIGVzNSA9IHJlcXVpcmUoXCIuL2VzNS5qc1wiKTtcbnZhciBoYXZlR2V0dGVycyA9IChmdW5jdGlvbigpe1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBvID0ge307XG4gICAgICAgIGVzNS5kZWZpbmVQcm9wZXJ0eShvLCBcImZcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gby5mID09PSAzO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59KSgpO1xudmFyIGNhbkV2YWx1YXRlID0gdHlwZW9mIG5hdmlnYXRvciA9PSBcInVuZGVmaW5lZFwiO1xudmFyIGVycm9yT2JqID0ge2U6IHt9fTtcbmZ1bmN0aW9uIHRyeUNhdGNoMShmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgIHRyeSB7IHJldHVybiBmbi5jYWxsKHJlY2VpdmVyLCBhcmcpOyB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyb3JPYmouZSA9IGU7XG4gICAgICAgIHJldHVybiBlcnJvck9iajtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRyeUNhdGNoMihmbiwgcmVjZWl2ZXIsIGFyZywgYXJnMikge1xuICAgIHRyeSB7IHJldHVybiBmbi5jYWxsKHJlY2VpdmVyLCBhcmcsIGFyZzIpOyB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyb3JPYmouZSA9IGU7XG4gICAgICAgIHJldHVybiBlcnJvck9iajtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRyeUNhdGNoMyhmbiwgcmVjZWl2ZXIsIGFyZywgYXJnMiwgYXJnMykge1xuICAgIHRyeSB7IHJldHVybiBmbi5jYWxsKHJlY2VpdmVyLCBhcmcsIGFyZzIsIGFyZzMpOyB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyb3JPYmouZSA9IGU7XG4gICAgICAgIHJldHVybiBlcnJvck9iajtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRyeUNhdGNoNChmbiwgcmVjZWl2ZXIsIGFyZywgYXJnMiwgYXJnMywgYXJnNCkge1xuICAgIHRyeSB7IHJldHVybiBmbi5jYWxsKHJlY2VpdmVyLCBhcmcsIGFyZzIsIGFyZzMsIGFyZzQpOyB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyb3JPYmouZSA9IGU7XG4gICAgICAgIHJldHVybiBlcnJvck9iajtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRyeUNhdGNoQXBwbHkoZm4sIGFyZ3MsIHJlY2VpdmVyKSB7XG4gICAgdHJ5IHsgcmV0dXJuIGZuLmFwcGx5KHJlY2VpdmVyLCBhcmdzKTsgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbihDaGlsZCwgUGFyZW50KSB7XG4gICAgdmFyIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICAgIGZ1bmN0aW9uIFQoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBDaGlsZDtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciQgPSBQYXJlbnQ7XG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBQYXJlbnQucHJvdG90eXBlKSB7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcC5jYWxsKFBhcmVudC5wcm90b3R5cGUsIHByb3BlcnR5TmFtZSkgJiZcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUuY2hhckF0KHByb3BlcnR5TmFtZS5sZW5ndGgtMSkgIT09IFwiJFwiXG4gICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lICsgXCIkXCJdID0gUGFyZW50LnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFQucHJvdG90eXBlID0gUGFyZW50LnByb3RvdHlwZTtcbiAgICBDaGlsZC5wcm90b3R5cGUgPSBuZXcgVCgpO1xuICAgIHJldHVybiBDaGlsZC5wcm90b3R5cGU7XG59O1xuXG5mdW5jdGlvbiBhc1N0cmluZyh2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IChcIlwiICsgdmFsKTtcbn1cblxuZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsKSB7XG4gICAgcmV0dXJuIHZhbCA9PSBudWxsIHx8IHZhbCA9PT0gdHJ1ZSB8fCB2YWwgPT09IGZhbHNlIHx8XG4gICAgICAgIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIjtcblxufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNQcmltaXRpdmUodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBtYXliZVdyYXBBc0Vycm9yKG1heWJlRXJyb3IpIHtcbiAgICBpZiAoIWlzUHJpbWl0aXZlKG1heWJlRXJyb3IpKSByZXR1cm4gbWF5YmVFcnJvcjtcblxuICAgIHJldHVybiBuZXcgRXJyb3IoYXNTdHJpbmcobWF5YmVFcnJvcikpO1xufVxuXG5mdW5jdGlvbiB3aXRoQXBwZW5kZWQodGFyZ2V0LCBhcHBlbmRlZSkge1xuICAgIHZhciBsZW4gPSB0YXJnZXQubGVuZ3RoO1xuICAgIHZhciByZXQgPSBuZXcgQXJyYXkobGVuICsgMSk7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHJldFtpXSA9IHRhcmdldFtpXTtcbiAgICB9XG4gICAgcmV0W2ldID0gYXBwZW5kZWU7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YVByb3BlcnR5T3JEZWZhdWx0KG9iaiwga2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAoZXM1LmlzRVM1KSB7XG4gICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gICAgICAgIGlmIChkZXNjICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBkZXNjLmdldCA9PSBudWxsICYmIGRlc2Muc2V0ID09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBkZXNjLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHt9Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpID8gb2JqW2tleV0gOiB2b2lkIDA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3RFbnVtZXJhYmxlUHJvcChvYmosIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGlzUHJpbWl0aXZlKG9iaikpIHJldHVybiBvYmo7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9O1xuICAgIGVzNS5kZWZpbmVQcm9wZXJ0eShvYmosIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIHJldHVybiBvYmo7XG59XG5cblxudmFyIHdyYXBzUHJpbWl0aXZlUmVjZWl2ZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgIT09IFwic3RyaW5nXCI7XG59KS5jYWxsKFwic3RyaW5nXCIpO1xuXG5mdW5jdGlvbiB0aHJvd2VyKHIpIHtcbiAgICB0aHJvdyByO1xufVxuXG52YXIgaW5oZXJpdGVkRGF0YUtleXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKGVzNS5pc0VTNSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCBvcHRzKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gW107XG4gICAgICAgICAgICB2YXIgdmlzaXRlZEtleXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgdmFyIGdldEtleXMgPSBPYmplY3Qob3B0cykuaW5jbHVkZUhpZGRlblxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgICAgICAgICAgICAgICA6IE9iamVjdC5rZXlzO1xuICAgICAgICAgICAgd2hpbGUgKG9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleXM7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAga2V5cyA9IGdldEtleXMob2JqKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpc2l0ZWRLZXlzW2tleV0pIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB2aXNpdGVkS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2MgIT0gbnVsbCAmJiBkZXNjLmdldCA9PSBudWxsICYmIGRlc2Muc2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqID0gZXM1LmdldFByb3RvdHlwZU9mKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBbXTtcbiAgICAgICAgICAgIC8qanNoaW50IGZvcmluOmZhbHNlICovXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0LnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH07XG4gICAgfVxuXG59KSgpO1xuXG5mdW5jdGlvbiBpc0NsYXNzKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IGVzNS5rZXlzKGZuLnByb3RvdHlwZSk7XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgIShrZXlzLmxlbmd0aCA9PT0gMSAmJiBrZXlzWzBdID09PSBcImNvbnN0cnVjdG9yXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvRmFzdFByb3BlcnRpZXMob2JqKSB7XG4gICAgLypqc2hpbnQgLVcwMjcqL1xuICAgIGZ1bmN0aW9uIGYoKSB7fVxuICAgIGYucHJvdG90eXBlID0gb2JqO1xuICAgIHJldHVybiBmO1xuICAgIGV2YWwob2JqKTtcbn1cblxudmFyIHJpZGVudCA9IC9eW2EteiRfXVthLXokXzAtOV0qJC9pO1xuZnVuY3Rpb24gaXNJZGVudGlmaWVyKHN0cikge1xuICAgIHJldHVybiByaWRlbnQudGVzdChzdHIpO1xufVxuXG5mdW5jdGlvbiBmaWxsZWRSYW5nZShjb3VudCwgcHJlZml4LCBzdWZmaXgpIHtcbiAgICB2YXIgcmV0ID0gbmV3IEFycmF5KGNvdW50KTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICByZXRbaV0gPSBwcmVmaXggKyBpICsgc3VmZml4O1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG52YXIgcmV0ID0ge1xuICAgIGlzQ2xhc3M6IGlzQ2xhc3MsXG4gICAgaXNJZGVudGlmaWVyOiBpc0lkZW50aWZpZXIsXG4gICAgaW5oZXJpdGVkRGF0YUtleXM6IGluaGVyaXRlZERhdGFLZXlzLFxuICAgIGdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdDogZ2V0RGF0YVByb3BlcnR5T3JEZWZhdWx0LFxuICAgIHRocm93ZXI6IHRocm93ZXIsXG4gICAgaXNBcnJheTogZXM1LmlzQXJyYXksXG4gICAgaGF2ZUdldHRlcnM6IGhhdmVHZXR0ZXJzLFxuICAgIG5vdEVudW1lcmFibGVQcm9wOiBub3RFbnVtZXJhYmxlUHJvcCxcbiAgICBpc1ByaW1pdGl2ZTogaXNQcmltaXRpdmUsXG4gICAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICAgIGNhbkV2YWx1YXRlOiBjYW5FdmFsdWF0ZSxcbiAgICBlcnJvck9iajogZXJyb3JPYmosXG4gICAgdHJ5Q2F0Y2gxOiB0cnlDYXRjaDEsXG4gICAgdHJ5Q2F0Y2gyOiB0cnlDYXRjaDIsXG4gICAgdHJ5Q2F0Y2gzOiB0cnlDYXRjaDMsXG4gICAgdHJ5Q2F0Y2g0OiB0cnlDYXRjaDQsXG4gICAgdHJ5Q2F0Y2hBcHBseTogdHJ5Q2F0Y2hBcHBseSxcbiAgICBpbmhlcml0czogaW5oZXJpdHMsXG4gICAgd2l0aEFwcGVuZGVkOiB3aXRoQXBwZW5kZWQsXG4gICAgYXNTdHJpbmc6IGFzU3RyaW5nLFxuICAgIG1heWJlV3JhcEFzRXJyb3I6IG1heWJlV3JhcEFzRXJyb3IsXG4gICAgd3JhcHNQcmltaXRpdmVSZWNlaXZlcjogd3JhcHNQcmltaXRpdmVSZWNlaXZlcixcbiAgICB0b0Zhc3RQcm9wZXJ0aWVzOiB0b0Zhc3RQcm9wZXJ0aWVzLFxuICAgIGZpbGxlZFJhbmdlOiBmaWxsZWRSYW5nZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXQ7XG4iLCIoZnVuY3Rpb24ocHJvY2Vzcyl7LyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzY2hlZHVsZSA9IHJlcXVpcmUoXCIuL3NjaGVkdWxlLmpzXCIpO1xudmFyIFF1ZXVlID0gcmVxdWlyZShcIi4vcXVldWUuanNcIik7XG52YXIgZXJyb3JPYmogPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpLmVycm9yT2JqO1xudmFyIHRyeUNhdGNoMSA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIikudHJ5Q2F0Y2gxO1xudmFyIF9wcm9jZXNzID0gdHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgPyBwcm9jZXNzIDogdm9pZCAwO1xuXG5mdW5jdGlvbiBBc3luYygpIHtcbiAgICB0aGlzLl9pc1RpY2tVc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fc2NoZWR1bGUgPSBzY2hlZHVsZTtcbiAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgIHRoaXMuX2xhdGVCdWZmZXIgPSBuZXcgUXVldWUoMTYpO1xuICAgIHRoaXMuX2Z1bmN0aW9uQnVmZmVyID0gbmV3IFF1ZXVlKDY1NTM2KTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5jb25zdW1lRnVuY3Rpb25CdWZmZXIgPSBmdW5jdGlvbiBBc3luYyRjb25zdW1lRnVuY3Rpb25CdWZmZXIoKSB7XG4gICAgICAgIHNlbGYuX2NvbnN1bWVGdW5jdGlvbkJ1ZmZlcigpO1xuICAgIH07XG59XG5cbkFzeW5jLnByb3RvdHlwZS5oYXZlSXRlbXNRdWV1ZWQgPSBmdW5jdGlvbiBBc3luYyRoYXZlSXRlbXNRdWV1ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aCA+IDA7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuaW52b2tlTGF0ZXIgPSBmdW5jdGlvbiBBc3luYyRpbnZva2VMYXRlcihmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgIGlmIChfcHJvY2VzcyAhPT0gdm9pZCAwICYmXG4gICAgICAgIF9wcm9jZXNzLmRvbWFpbiAhPSBudWxsICYmXG4gICAgICAgICFmbi5kb21haW4pIHtcbiAgICAgICAgZm4gPSBfcHJvY2Vzcy5kb21haW4uYmluZChmbik7XG4gICAgfVxuICAgIHRoaXMuX2xhdGVCdWZmZXIucHVzaChmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgdGhpcy5fcXVldWVUaWNrKCk7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gQXN5bmMkaW52b2tlKGZuLCByZWNlaXZlciwgYXJnKSB7XG4gICAgaWYgKF9wcm9jZXNzICE9PSB2b2lkIDAgJiZcbiAgICAgICAgX3Byb2Nlc3MuZG9tYWluICE9IG51bGwgJiZcbiAgICAgICAgIWZuLmRvbWFpbikge1xuICAgICAgICBmbiA9IF9wcm9jZXNzLmRvbWFpbi5iaW5kKGZuKTtcbiAgICB9XG4gICAgdmFyIGZ1bmN0aW9uQnVmZmVyID0gdGhpcy5fZnVuY3Rpb25CdWZmZXI7XG4gICAgZnVuY3Rpb25CdWZmZXIucHVzaChmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgdGhpcy5fbGVuZ3RoID0gZnVuY3Rpb25CdWZmZXIubGVuZ3RoKCk7XG4gICAgdGhpcy5fcXVldWVUaWNrKCk7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuX2NvbnN1bWVGdW5jdGlvbkJ1ZmZlciA9XG5mdW5jdGlvbiBBc3luYyRfY29uc3VtZUZ1bmN0aW9uQnVmZmVyKCkge1xuICAgIHZhciBmdW5jdGlvbkJ1ZmZlciA9IHRoaXMuX2Z1bmN0aW9uQnVmZmVyO1xuICAgIHdoaWxlIChmdW5jdGlvbkJ1ZmZlci5sZW5ndGgoKSA+IDApIHtcbiAgICAgICAgdmFyIGZuID0gZnVuY3Rpb25CdWZmZXIuc2hpZnQoKTtcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gZnVuY3Rpb25CdWZmZXIuc2hpZnQoKTtcbiAgICAgICAgdmFyIGFyZyA9IGZ1bmN0aW9uQnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgIGZuLmNhbGwocmVjZWl2ZXIsIGFyZyk7XG4gICAgfVxuICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgdGhpcy5fY29uc3VtZUxhdGVCdWZmZXIoKTtcbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fY29uc3VtZUxhdGVCdWZmZXIgPSBmdW5jdGlvbiBBc3luYyRfY29uc3VtZUxhdGVCdWZmZXIoKSB7XG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2xhdGVCdWZmZXI7XG4gICAgd2hpbGUoYnVmZmVyLmxlbmd0aCgpID4gMCkge1xuICAgICAgICB2YXIgZm4gPSBidWZmZXIuc2hpZnQoKTtcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gYnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgIHZhciBhcmcgPSBidWZmZXIuc2hpZnQoKTtcbiAgICAgICAgdmFyIHJlcyA9IHRyeUNhdGNoMShmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgICAgIGlmIChyZXMgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZVRpY2soKTtcbiAgICAgICAgICAgIGlmIChmbi5kb21haW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZuLmRvbWFpbi5lbWl0KFwiZXJyb3JcIiwgcmVzLmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZXMuZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fcXVldWVUaWNrID0gZnVuY3Rpb24gQXN5bmMkX3F1ZXVlKCkge1xuICAgIGlmICghdGhpcy5faXNUaWNrVXNlZCkge1xuICAgICAgICB0aGlzLl9zY2hlZHVsZSh0aGlzLmNvbnN1bWVGdW5jdGlvbkJ1ZmZlcik7XG4gICAgICAgIHRoaXMuX2lzVGlja1VzZWQgPSB0cnVlO1xuICAgIH1cbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbiBBc3luYyRfcmVzZXQoKSB7XG4gICAgdGhpcy5faXNUaWNrVXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2xlbmd0aCA9IDA7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBBc3luYygpO1xuXG59KShyZXF1aXJlKFwiX19icm93c2VyaWZ5X3Byb2Nlc3NcIikpIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBPYmplY3RmcmVlemUgPSByZXF1aXJlKFwiLi9lczUuanNcIikuZnJlZXplO1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGluaGVyaXRzID0gdXRpbC5pbmhlcml0cztcbnZhciBub3RFbnVtZXJhYmxlUHJvcCA9IHV0aWwubm90RW51bWVyYWJsZVByb3A7XG5cbmZ1bmN0aW9uIG1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbihlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbm90RW51bWVyYWJsZVByb3AoZSwgXCJpc09wZXJhdGlvbmFsXCIsIHRydWUpO1xuICAgIH1cbiAgICBjYXRjaChpZ25vcmUpIHt9XG59XG5cbmZ1bmN0aW9uIG9yaWdpbmF0ZXNGcm9tUmVqZWN0aW9uKGUpIHtcbiAgICBpZiAoZSA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICgoZSBpbnN0YW5jZW9mIE9wZXJhdGlvbmFsRXJyb3IpIHx8XG4gICAgICAgIGVbXCJpc09wZXJhdGlvbmFsXCJdID09PSB0cnVlKTtcbn1cblxuZnVuY3Rpb24gaXNFcnJvcihvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRXJyb3I7XG59XG5cbmZ1bmN0aW9uIGNhbkF0dGFjaChvYmopIHtcbiAgICByZXR1cm4gaXNFcnJvcihvYmopO1xufVxuXG5mdW5jdGlvbiBzdWJFcnJvcihuYW1lUHJvcGVydHksIGRlZmF1bHRNZXNzYWdlKSB7XG4gICAgZnVuY3Rpb24gU3ViRXJyb3IobWVzc2FnZSkge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU3ViRXJyb3IpKSByZXR1cm4gbmV3IFN1YkVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiA/IG1lc3NhZ2UgOiBkZWZhdWx0TWVzc2FnZTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVByb3BlcnR5O1xuICAgICAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluaGVyaXRzKFN1YkVycm9yLCBFcnJvcik7XG4gICAgcmV0dXJuIFN1YkVycm9yO1xufVxuXG52YXIgX1R5cGVFcnJvciwgX1JhbmdlRXJyb3I7XG52YXIgQ2FuY2VsbGF0aW9uRXJyb3IgPSBzdWJFcnJvcihcIkNhbmNlbGxhdGlvbkVycm9yXCIsIFwiY2FuY2VsbGF0aW9uIGVycm9yXCIpO1xudmFyIFRpbWVvdXRFcnJvciA9IHN1YkVycm9yKFwiVGltZW91dEVycm9yXCIsIFwidGltZW91dCBlcnJvclwiKTtcbnZhciBBZ2dyZWdhdGVFcnJvciA9IHN1YkVycm9yKFwiQWdncmVnYXRlRXJyb3JcIiwgXCJhZ2dyZWdhdGUgZXJyb3JcIik7XG50cnkge1xuICAgIF9UeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4gICAgX1JhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xufSBjYXRjaChlKSB7XG4gICAgX1R5cGVFcnJvciA9IHN1YkVycm9yKFwiVHlwZUVycm9yXCIsIFwidHlwZSBlcnJvclwiKTtcbiAgICBfUmFuZ2VFcnJvciA9IHN1YkVycm9yKFwiUmFuZ2VFcnJvclwiLCBcInJhbmdlIGVycm9yXCIpO1xufVxuXG52YXIgbWV0aG9kcyA9IChcImpvaW4gcG9wIHB1c2ggc2hpZnQgdW5zaGlmdCBzbGljZSBmaWx0ZXIgZm9yRWFjaCBzb21lIFwiICtcbiAgICBcImV2ZXJ5IG1hcCBpbmRleE9mIGxhc3RJbmRleE9mIHJlZHVjZSByZWR1Y2VSaWdodCBzb3J0IHJldmVyc2VcIikuc3BsaXQoXCIgXCIpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IG1ldGhvZHMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZVttZXRob2RzW2ldXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIEFnZ3JlZ2F0ZUVycm9yLnByb3RvdHlwZVttZXRob2RzW2ldXSA9IEFycmF5LnByb3RvdHlwZVttZXRob2RzW2ldXTtcbiAgICB9XG59XG5cbkFnZ3JlZ2F0ZUVycm9yLnByb3RvdHlwZS5sZW5ndGggPSAwO1xuQWdncmVnYXRlRXJyb3IucHJvdG90eXBlW1wiaXNPcGVyYXRpb25hbFwiXSA9IHRydWU7XG52YXIgbGV2ZWwgPSAwO1xuQWdncmVnYXRlRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGluZGVudCA9IEFycmF5KGxldmVsICogNCArIDEpLmpvaW4oXCIgXCIpO1xuICAgIHZhciByZXQgPSBcIlxcblwiICsgaW5kZW50ICsgXCJBZ2dyZWdhdGVFcnJvciBvZjpcIiArIFwiXFxuXCI7XG4gICAgbGV2ZWwrKztcbiAgICBpbmRlbnQgPSBBcnJheShsZXZlbCAqIDQgKyAxKS5qb2luKFwiIFwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHN0ciA9IHRoaXNbaV0gPT09IHRoaXMgPyBcIltDaXJjdWxhciBBZ2dyZWdhdGVFcnJvcl1cIiA6IHRoaXNbaV0gKyBcIlwiO1xuICAgICAgICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbGluZXMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIGxpbmVzW2pdID0gaW5kZW50ICsgbGluZXNbal07XG4gICAgICAgIH1cbiAgICAgICAgc3RyID0gbGluZXMuam9pbihcIlxcblwiKTtcbiAgICAgICAgcmV0ICs9IHN0ciArIFwiXFxuXCI7XG4gICAgfVxuICAgIGxldmVsLS07XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIE9wZXJhdGlvbmFsRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubmFtZSA9IFwiT3BlcmF0aW9uYWxFcnJvclwiO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5jYXVzZSA9IG1lc3NhZ2U7XG4gICAgdGhpc1tcImlzT3BlcmF0aW9uYWxcIl0gPSB0cnVlO1xuXG4gICAgaWYgKG1lc3NhZ2UgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlLm1lc3NhZ2U7XG4gICAgICAgIHRoaXMuc3RhY2sgPSBtZXNzYWdlLnN0YWNrO1xuICAgIH0gZWxzZSBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG59XG5pbmhlcml0cyhPcGVyYXRpb25hbEVycm9yLCBFcnJvcik7XG5cbnZhciBrZXkgPSBcIl9fQmx1ZWJpcmRFcnJvclR5cGVzX19cIjtcbnZhciBlcnJvclR5cGVzID0gRXJyb3Jba2V5XTtcbmlmICghZXJyb3JUeXBlcykge1xuICAgIGVycm9yVHlwZXMgPSBPYmplY3RmcmVlemUoe1xuICAgICAgICBDYW5jZWxsYXRpb25FcnJvcjogQ2FuY2VsbGF0aW9uRXJyb3IsXG4gICAgICAgIFRpbWVvdXRFcnJvcjogVGltZW91dEVycm9yLFxuICAgICAgICBPcGVyYXRpb25hbEVycm9yOiBPcGVyYXRpb25hbEVycm9yLFxuICAgICAgICBSZWplY3Rpb25FcnJvcjogT3BlcmF0aW9uYWxFcnJvcixcbiAgICAgICAgQWdncmVnYXRlRXJyb3I6IEFnZ3JlZ2F0ZUVycm9yXG4gICAgfSk7XG4gICAgbm90RW51bWVyYWJsZVByb3AoRXJyb3IsIGtleSwgZXJyb3JUeXBlcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEVycm9yOiBFcnJvcixcbiAgICBUeXBlRXJyb3I6IF9UeXBlRXJyb3IsXG4gICAgUmFuZ2VFcnJvcjogX1JhbmdlRXJyb3IsXG4gICAgQ2FuY2VsbGF0aW9uRXJyb3I6IGVycm9yVHlwZXMuQ2FuY2VsbGF0aW9uRXJyb3IsXG4gICAgT3BlcmF0aW9uYWxFcnJvcjogZXJyb3JUeXBlcy5PcGVyYXRpb25hbEVycm9yLFxuICAgIFRpbWVvdXRFcnJvcjogZXJyb3JUeXBlcy5UaW1lb3V0RXJyb3IsXG4gICAgQWdncmVnYXRlRXJyb3I6IGVycm9yVHlwZXMuQWdncmVnYXRlRXJyb3IsXG4gICAgb3JpZ2luYXRlc0Zyb21SZWplY3Rpb246IG9yaWdpbmF0ZXNGcm9tUmVqZWN0aW9uLFxuICAgIG1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbjogbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uLFxuICAgIGNhbkF0dGFjaDogY2FuQXR0YWNoXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwpIHtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBjYW5BdHRhY2ggPSByZXF1aXJlKFwiLi9lcnJvcnMuanNcIikuY2FuQXR0YWNoO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciBpc09iamVjdCA9IHV0aWwuaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGdldFRoZW4ob2JqKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG9iai50aGVuO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBQcm9taXNlJF9DYXN0KG9iaiwgb3JpZ2luYWxQcm9taXNlKSB7XG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBbnlCbHVlYmlyZFByb21pc2Uob2JqKSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgICAgIHJldC5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICAgICAgICAgIG9iai5fdGhlbihcbiAgICAgICAgICAgICAgICByZXQuX2Z1bGZpbGxVbmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgcmV0Ll9yZWplY3RVbmNoZWNrZWRDaGVja0Vycm9yLFxuICAgICAgICAgICAgICAgIHJldC5fcHJvZ3Jlc3NVbmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgcmV0LFxuICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXQuX3NldEZvbGxvd2luZygpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGhlbiA9IGdldFRoZW4ob2JqKTtcbiAgICAgICAgaWYgKHRoZW4gPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxQcm9taXNlICE9PSB2b2lkIDAgJiYgY2FuQXR0YWNoKHRoZW4uZSkpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodGhlbi5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0aGVuLmUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlJF9kb1RoZW5hYmxlKG9iaiwgdGhlbiwgb3JpZ2luYWxQcm9taXNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuXG52YXIgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaXNBbnlCbHVlYmlyZFByb21pc2Uob2JqKSB7XG4gICAgcmV0dXJuIGhhc1Byb3AuY2FsbChvYmosIFwiX3Byb21pc2UwXCIpO1xufVxuXG5mdW5jdGlvbiBQcm9taXNlJF9kb1RoZW5hYmxlKHgsIHRoZW4sIG9yaWdpbmFsUHJvbWlzZSkge1xuICAgIHZhciByZXNvbHZlciA9IFByb21pc2UuZGVmZXIoKTtcbiAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgdGhlbi5jYWxsKFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIFByb21pc2UkX3Jlc29sdmVGcm9tVGhlbmFibGUsXG4gICAgICAgICAgICBQcm9taXNlJF9yZWplY3RGcm9tVGhlbmFibGUsXG4gICAgICAgICAgICBQcm9taXNlJF9wcm9ncmVzc0Zyb21UaGVuYWJsZVxuICAgICAgICApO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciB0cmFjZSA9IGNhbkF0dGFjaChlKSA/IGUgOiBuZXcgRXJyb3IoZSArIFwiXCIpO1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsUHJvbWlzZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxQcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmVyLnByb21pc2UuX3JlamVjdChlLCB0cmFjZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmVyLnByb21pc2U7XG5cbiAgICBmdW5jdGlvbiBQcm9taXNlJF9yZXNvbHZlRnJvbVRoZW5hYmxlKHkpIHtcbiAgICAgICAgaWYgKGNhbGxlZCkgcmV0dXJuO1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAgICAgICB2YXIgZSA9IFByb21pc2UuX21ha2VTZWxmUmVzb2x1dGlvbkVycm9yKCk7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxQcm9taXNlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlci5wcm9taXNlLl9yZWplY3QoZSwgdm9pZCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlci5yZXNvbHZlKHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFByb21pc2UkX3JlamVjdEZyb21UaGVuYWJsZShyKSB7XG4gICAgICAgIGlmIChjYWxsZWQpIHJldHVybjtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIHRyYWNlID0gY2FuQXR0YWNoKHIpID8gciA6IG5ldyBFcnJvcihyICsgXCJcIik7XG4gICAgICAgIGlmIChvcmlnaW5hbFByb21pc2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgb3JpZ2luYWxQcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlci5wcm9taXNlLl9yZWplY3QociwgdHJhY2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFByb21pc2UkX3Byb2dyZXNzRnJvbVRoZW5hYmxlKHYpIHtcbiAgICAgICAgaWYgKGNhbGxlZCkgcmV0dXJuO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHJlc29sdmVyLnByb21pc2U7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvbWlzZS5fcHJvZ3Jlc3MgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcHJvbWlzZS5fcHJvZ3Jlc3Modik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnJldHVybiBQcm9taXNlJF9DYXN0O1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMLCBjYXN0KSB7XG52YXIgY2FuQXR0YWNoID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpLmNhbkF0dGFjaDtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBpc0FycmF5ID0gdXRpbC5pc0FycmF5O1xuXG5mdW5jdGlvbiB0b1Jlc29sdXRpb25WYWx1ZSh2YWwpIHtcbiAgICBzd2l0Y2godmFsKSB7XG4gICAgY2FzZSAtMTogcmV0dXJuIHZvaWQgMDtcbiAgICBjYXNlIC0yOiByZXR1cm4gW107XG4gICAgY2FzZSAtMzogcmV0dXJuIHt9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gUHJvbWlzZUFycmF5KHZhbHVlcykge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICB2YXIgcGFyZW50ID0gdm9pZCAwO1xuICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHBhcmVudCA9IHZhbHVlcztcbiAgICAgICAgcHJvbWlzZS5fcHJvcGFnYXRlRnJvbShwYXJlbnQsIDEgfCA0KTtcbiAgICB9XG4gICAgcHJvbWlzZS5fc2V0VHJhY2UocGFyZW50KTtcbiAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZXM7XG4gICAgdGhpcy5fbGVuZ3RoID0gMDtcbiAgICB0aGlzLl90b3RhbFJlc29sdmVkID0gMDtcbiAgICB0aGlzLl9pbml0KHZvaWQgMCwgLTIpO1xufVxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbiBQcm9taXNlQXJyYXkkbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLnByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlQXJyYXkkcHJvbWlzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX2luaXQgPVxuZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9pbml0KF8sIHJlc29sdmVWYWx1ZUlmRW1wdHkpIHtcbiAgICB2YXIgdmFsdWVzID0gY2FzdCh0aGlzLl92YWx1ZXMsIHZvaWQgMCk7XG4gICAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdGhpcy5fdmFsdWVzID0gdmFsdWVzO1xuICAgICAgICB2YWx1ZXMuX3NldEJvdW5kVG8odGhpcy5fcHJvbWlzZS5fYm91bmRUbyk7XG4gICAgICAgIGlmICh2YWx1ZXMuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLl9zZXR0bGVkVmFsdWU7XG4gICAgICAgICAgICBpZiAoIWlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICAgICAgICAgIHZhciBlcnIgPSBuZXcgUHJvbWlzZS5UeXBlRXJyb3IoXCJleHBlY3RpbmcgYW4gYXJyYXksIGEgcHJvbWlzZSBvciBhIHRoZW5hYmxlXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX19oYXJkUmVqZWN0X18oZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWVzLmlzUGVuZGluZygpKSB7XG4gICAgICAgICAgICB2YWx1ZXMuX3RoZW4oXG4gICAgICAgICAgICAgICAgUHJvbWlzZUFycmF5JF9pbml0LFxuICAgICAgICAgICAgICAgIHRoaXMuX3JlamVjdCxcbiAgICAgICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICByZXNvbHZlVmFsdWVJZkVtcHR5XG4gICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCh2YWx1ZXMuX3NldHRsZWRWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgdmFyIGVyciA9IG5ldyBQcm9taXNlLlR5cGVFcnJvcihcImV4cGVjdGluZyBhbiBhcnJheSwgYSBwcm9taXNlIG9yIGEgdGhlbmFibGVcIik7XG4gICAgICAgIHRoaXMuX19oYXJkUmVqZWN0X18oZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChyZXNvbHZlVmFsdWVJZkVtcHR5ID09PSAtNSkge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUVtcHR5QXJyYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUodG9SZXNvbHV0aW9uVmFsdWUocmVzb2x2ZVZhbHVlSWZFbXB0eSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGxlbiA9IHRoaXMuZ2V0QWN0dWFsTGVuZ3RoKHZhbHVlcy5sZW5ndGgpO1xuICAgIHZhciBuZXdMZW4gPSBsZW47XG4gICAgdmFyIG5ld1ZhbHVlcyA9IHRoaXMuc2hvdWxkQ29weVZhbHVlcygpID8gbmV3IEFycmF5KGxlbikgOiB0aGlzLl92YWx1ZXM7XG4gICAgdmFyIGlzRGlyZWN0U2Nhbk5lZWRlZCA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QodmFsdWVzW2ldLCB2b2lkIDApO1xuICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZS5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fcHJveHlQcm9taXNlQXJyYXkodGhpcywgaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgICAgICAgICAgICAgIGlzRGlyZWN0U2Nhbk5lZWRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc0RpcmVjdFNjYW5OZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIG5ld1ZhbHVlc1tpXSA9IG1heWJlUHJvbWlzZTtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWVzID0gbmV3VmFsdWVzO1xuICAgIHRoaXMuX2xlbmd0aCA9IG5ld0xlbjtcbiAgICBpZiAoaXNEaXJlY3RTY2FuTmVlZGVkKSB7XG4gICAgICAgIHRoaXMuX3NjYW5EaXJlY3RWYWx1ZXMobGVuKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9zZXR0bGVQcm9taXNlQXQgPVxuZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9zZXR0bGVQcm9taXNlQXQoaW5kZXgpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLl92YWx1ZXNbaW5kZXhdO1xuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgaW5kZXgpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICB0aGlzLl9wcm9taXNlRnVsZmlsbGVkKHZhbHVlLl9zZXR0bGVkVmFsdWUsIGluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICB0aGlzLl9wcm9taXNlUmVqZWN0ZWQodmFsdWUuX3NldHRsZWRWYWx1ZSwgaW5kZXgpO1xuICAgIH1cbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX3NjYW5EaXJlY3RWYWx1ZXMgPVxuZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9zY2FuRGlyZWN0VmFsdWVzKGxlbikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2V0dGxlUHJvbWlzZUF0KGkpO1xuICAgIH1cbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX2lzUmVzb2x2ZWQgPSBmdW5jdGlvbiBQcm9taXNlQXJyYXkkX2lzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcyA9PT0gbnVsbDtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Jlc29sdmUgPSBmdW5jdGlvbiBQcm9taXNlQXJyYXkkX3Jlc29sdmUodmFsdWUpIHtcbiAgICB0aGlzLl92YWx1ZXMgPSBudWxsO1xuICAgIHRoaXMuX3Byb21pc2UuX2Z1bGZpbGwodmFsdWUpO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fX2hhcmRSZWplY3RfXyA9XG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZWplY3QgPSBmdW5jdGlvbiBQcm9taXNlQXJyYXkkX3JlamVjdChyZWFzb24pIHtcbiAgICB0aGlzLl92YWx1ZXMgPSBudWxsO1xuICAgIHZhciB0cmFjZSA9IGNhbkF0dGFjaChyZWFzb24pID8gcmVhc29uIDogbmV3IEVycm9yKHJlYXNvbiArIFwiXCIpO1xuICAgIHRoaXMuX3Byb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UpO1xuICAgIHRoaXMuX3Byb21pc2UuX3JlamVjdChyZWFzb24sIHRyYWNlKTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VQcm9ncmVzc2VkID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfcHJvbWlzZVByb2dyZXNzZWQocHJvZ3Jlc3NWYWx1ZSwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fcHJvbWlzZS5fcHJvZ3Jlc3Moe1xuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIHZhbHVlOiBwcm9ncmVzc1ZhbHVlXG4gICAgfSk7XG59O1xuXG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPVxuZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9wcm9taXNlRnVsZmlsbGVkKHZhbHVlLCBpbmRleCkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcbiAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgdmFyIHRvdGFsUmVzb2x2ZWQgPSArK3RoaXMuX3RvdGFsUmVzb2x2ZWQ7XG4gICAgaWYgKHRvdGFsUmVzb2x2ZWQgPj0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3Jlc29sdmUodGhpcy5fdmFsdWVzKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlUmVqZWN0ZWQgPVxuZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9wcm9taXNlUmVqZWN0ZWQocmVhc29uLCBpbmRleCkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcbiAgICB0aGlzLl90b3RhbFJlc29sdmVkKys7XG4gICAgdGhpcy5fcmVqZWN0KHJlYXNvbik7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLnNob3VsZENvcHlWYWx1ZXMgPVxuZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9zaG91bGRDb3B5VmFsdWVzKCkge1xuICAgIHJldHVybiB0cnVlO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5nZXRBY3R1YWxMZW5ndGggPVxuZnVuY3Rpb24gUHJvbWlzZUFycmF5JGdldEFjdHVhbExlbmd0aChsZW4pIHtcbiAgICByZXR1cm4gbGVuO1xufTtcblxucmV0dXJuIFByb21pc2VBcnJheTtcbn07XG4iLCIoZnVuY3Rpb24oKXsvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIikuaW5oZXJpdHM7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9lczUuanNcIikuZGVmaW5lUHJvcGVydHk7XG5cbnZhciByaWdub3JlID0gbmV3IFJlZ0V4cChcbiAgICBcIlxcXFxiKD86W2EtekEtWjAtOS5dK1xcXFwkX1xcXFx3K3xcIiArXG4gICAgXCJ0cnlDYXRjaCg/OjF8MnwzfDR8QXBwbHkpfG5ldyBcXFxcdypQcm9taXNlQXJyYXl8XCIgK1xuICAgIFwiXFxcXHcqUHJvbWlzZUFycmF5XFxcXC5cXFxcdypQcm9taXNlQXJyYXl8XCIgK1xuICAgIFwic2V0VGltZW91dHxDYXRjaEZpbHRlclxcXFwkX1xcXFx3K3xtYWtlTm9kZVByb21pc2lmaWVkfHByb2Nlc3NJbW1lZGlhdGV8XCIgK1xuICAgIFwicHJvY2Vzcy5fdGlja0NhbGxiYWNrfG5leHRUaWNrfEFzeW5jXFxcXCRcXFxcdyspXFxcXGJcIlxuKTtcblxudmFyIHJ0cmFjZWxpbmUgPSBudWxsO1xudmFyIGZvcm1hdFN0YWNrID0gbnVsbDtcblxuZnVuY3Rpb24gZm9ybWF0Tm9uRXJyb3Iob2JqKSB7XG4gICAgdmFyIHN0cjtcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHN0ciA9IFwiW2Z1bmN0aW9uIFwiICtcbiAgICAgICAgICAgIChvYmoubmFtZSB8fCBcImFub255bW91c1wiKSArXG4gICAgICAgICAgICBcIl1cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBvYmoudG9TdHJpbmcoKTtcbiAgICAgICAgdmFyIHJ1c2VsZXNzVG9TdHJpbmcgPSAvXFxbb2JqZWN0IFthLXpBLVowLTkkX10rXFxdLztcbiAgICAgICAgaWYgKHJ1c2VsZXNzVG9TdHJpbmcudGVzdChzdHIpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdTdHIgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgICAgICAgICAgICAgIHN0ciA9IG5ld1N0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGUpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzdHIgPSBcIihlbXB0eSBhcnJheSlcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFwiKDxcIiArIHNuaXAoc3RyKSArIFwiPiwgbm8gc3RhY2sgdHJhY2UpXCIpO1xufVxuXG5mdW5jdGlvbiBzbmlwKHN0cikge1xuICAgIHZhciBtYXhDaGFycyA9IDQxO1xuICAgIGlmIChzdHIubGVuZ3RoIDwgbWF4Q2hhcnMpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgbWF4Q2hhcnMgLSAzKSArIFwiLi4uXCI7XG59XG5cbmZ1bmN0aW9uIENhcHR1cmVkVHJhY2UoaWdub3JlVW50aWwsIGlzVG9wTGV2ZWwpIHtcbiAgICB0aGlzLmNhcHR1cmVTdGFja1RyYWNlKENhcHR1cmVkVHJhY2UsIGlzVG9wTGV2ZWwpO1xuXG59XG5pbmhlcml0cyhDYXB0dXJlZFRyYWNlLCBFcnJvcik7XG5cbkNhcHR1cmVkVHJhY2UucHJvdG90eXBlLmNhcHR1cmVTdGFja1RyYWNlID1cbmZ1bmN0aW9uIENhcHR1cmVkVHJhY2UkY2FwdHVyZVN0YWNrVHJhY2UoaWdub3JlVW50aWwsIGlzVG9wTGV2ZWwpIHtcbiAgICBjYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBpZ25vcmVVbnRpbCwgaXNUb3BMZXZlbCk7XG59O1xuXG5DYXB0dXJlZFRyYWNlLnBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uID1cbmZ1bmN0aW9uIENhcHR1cmVkVHJhY2UkUG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHZhciBtZXNzYWdlO1xuICAgICAgICBpZiAodHlwZW9mIHJlYXNvbiA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgcmVhc29uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciBzdGFjayA9IHJlYXNvbi5zdGFjaztcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlBvc3NpYmx5IHVuaGFuZGxlZCBcIiArIGZvcm1hdFN0YWNrKHN0YWNrLCByZWFzb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiUG9zc2libHkgdW5oYW5kbGVkIFwiICsgU3RyaW5nKHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmVycm9yID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgICAgICAgICB0eXBlb2YgY29uc29sZS5sb2cgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuQ2FwdHVyZWRUcmFjZS5jb21iaW5lID0gZnVuY3Rpb24gQ2FwdHVyZWRUcmFjZSRDb21iaW5lKGN1cnJlbnQsIHByZXYpIHtcbiAgICB2YXIgY3VyTGFzdCA9IGN1cnJlbnQubGVuZ3RoIC0gMTtcbiAgICBmb3IgKHZhciBpID0gcHJldi5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgbGluZSA9IHByZXZbaV07XG4gICAgICAgIGlmIChjdXJyZW50W2N1ckxhc3RdID09PSBsaW5lKSB7XG4gICAgICAgICAgICBjdXJyZW50LnBvcCgpO1xuICAgICAgICAgICAgY3VyTGFzdC0tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjdXJyZW50LnB1c2goXCJGcm9tIHByZXZpb3VzIGV2ZW50OlwiKTtcbiAgICB2YXIgbGluZXMgPSBjdXJyZW50LmNvbmNhdChwcmV2KTtcblxuICAgIHZhciByZXQgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaW5lcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuXG4gICAgICAgIGlmICgocmlnbm9yZS50ZXN0KGxpbmVzW2ldKSB8fFxuICAgICAgICAgICAgKGkgPiAwICYmICFydHJhY2VsaW5lLnRlc3QobGluZXNbaV0pKSAmJlxuICAgICAgICAgICAgbGluZXNbaV0gIT09IFwiRnJvbSBwcmV2aW91cyBldmVudDpcIilcbiAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldC5wdXNoKGxpbmVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbkNhcHR1cmVkVHJhY2UucHJvdGVjdEVycm9yTWVzc2FnZU5ld2xpbmVzID0gZnVuY3Rpb24oc3RhY2spIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChydHJhY2VsaW5lLnRlc3Qoc3RhY2tbaV0pKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpIDw9IDEpIHJldHVybjtcblxuICAgIHZhciBlcnJvck1lc3NhZ2VMaW5lcyA9IFtdO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgaTsgKytqKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZUxpbmVzLnB1c2goc3RhY2suc2hpZnQoKSk7XG4gICAgfVxuICAgIHN0YWNrLnVuc2hpZnQoZXJyb3JNZXNzYWdlTGluZXMuam9pbihcIlxcdTAwMDJcXHUwMDAwXFx1MDAwMVwiKSk7XG59O1xuXG5DYXB0dXJlZFRyYWNlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gQ2FwdHVyZWRUcmFjZSRJc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNhcHR1cmVTdGFja1RyYWNlID09PSBcImZ1bmN0aW9uXCI7XG59O1xuXG52YXIgY2FwdHVyZVN0YWNrVHJhY2UgPSAoZnVuY3Rpb24gc3RhY2tEZXRlY3Rpb24oKSB7XG4gICAgaWYgKHR5cGVvZiBFcnJvci5zdGFja1RyYWNlTGltaXQgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgdHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcnRyYWNlbGluZSA9IC9eXFxzKmF0XFxzKi87XG4gICAgICAgIGZvcm1hdFN0YWNrID0gZnVuY3Rpb24oc3RhY2ssIGVycm9yKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YWNrID09PSBcInN0cmluZ1wiKSByZXR1cm4gc3RhY2s7XG5cbiAgICAgICAgICAgIGlmIChlcnJvci5uYW1lICE9PSB2b2lkIDAgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubmFtZSArIFwiLiBcIiArIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0Tm9uRXJyb3IoZXJyb3IpO1xuXG5cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNhcHR1cmVTdGFja1RyYWNlID0gRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBDYXB0dXJlZFRyYWNlJF9jYXB0dXJlU3RhY2tUcmFjZShcbiAgICAgICAgICAgIHJlY2VpdmVyLCBpZ25vcmVVbnRpbCkge1xuICAgICAgICAgICAgY2FwdHVyZVN0YWNrVHJhY2UocmVjZWl2ZXIsIGlnbm9yZVVudGlsKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcigpO1xuXG4gICAgaWYgKHR5cGVvZiBlcnIuc3RhY2sgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgdHlwZW9mIFwiXCIuc3RhcnRzV2l0aCA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgIChlcnIuc3RhY2suc3RhcnRzV2l0aChcInN0YWNrRGV0ZWN0aW9uQFwiKSkgJiZcbiAgICAgICAgc3RhY2tEZXRlY3Rpb24ubmFtZSA9PT0gXCJzdGFja0RldGVjdGlvblwiKSB7XG5cbiAgICAgICAgZGVmaW5lUHJvcGVydHkoRXJyb3IsIFwic3RhY2tUcmFjZUxpbWl0XCIsIHtcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IDI1XG4gICAgICAgIH0pO1xuICAgICAgICBydHJhY2VsaW5lID0gL0AvO1xuICAgICAgICB2YXIgcmxpbmUgPSAvW0BcXG5dLztcblxuICAgICAgICBmb3JtYXRTdGFjayA9IGZ1bmN0aW9uKHN0YWNrLCBlcnJvcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZXJyb3IubmFtZSArIFwiLiBcIiArIGVycm9yLm1lc3NhZ2UgKyBcIlxcblwiICsgc3RhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXJyb3IubmFtZSAhPT0gdm9pZCAwICYmXG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm5hbWUgKyBcIi4gXCIgKyBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2FwdHVyZVN0YWNrVHJhY2Uobykge1xuICAgICAgICAgICAgdmFyIHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgICAgICAgICB2YXIgc3BsaXQgPSBzdGFjay5zcGxpdChybGluZSk7XG4gICAgICAgICAgICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHJldCA9IFwiXCI7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0ICs9IHNwbGl0W2ldO1xuICAgICAgICAgICAgICAgIHJldCArPSBcIkBcIjtcbiAgICAgICAgICAgICAgICByZXQgKz0gc3BsaXRbaSArIDFdO1xuICAgICAgICAgICAgICAgIHJldCArPSBcIlxcblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgby5zdGFjayA9IHJldDtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtYXRTdGFjayA9IGZ1bmN0aW9uKHN0YWNrLCBlcnJvcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHN0YWNrO1xuXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBlcnJvciA9PT0gXCJvYmplY3RcIiB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvciA9PT0gXCJmdW5jdGlvblwiKSAmJlxuICAgICAgICAgICAgICAgIGVycm9yLm5hbWUgIT09IHZvaWQgMCAmJlxuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5uYW1lICsgXCIuIFwiICsgZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXROb25FcnJvcihlcnJvcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSkoKTtcblxucmV0dXJuIENhcHR1cmVkVHJhY2U7XG59O1xuXG59KSgpIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkVYVF9GSUxURVIpIHtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBlcnJvcnMgPSByZXF1aXJlKFwiLi9lcnJvcnMuanNcIik7XG52YXIgdHJ5Q2F0Y2gxID0gdXRpbC50cnlDYXRjaDE7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xudmFyIGtleXMgPSByZXF1aXJlKFwiLi9lczUuanNcIikua2V5cztcbnZhciBUeXBlRXJyb3IgPSBlcnJvcnMuVHlwZUVycm9yO1xuXG5mdW5jdGlvbiBDYXRjaEZpbHRlcihpbnN0YW5jZXMsIGNhbGxiYWNrLCBwcm9taXNlKSB7XG4gICAgdGhpcy5faW5zdGFuY2VzID0gaW5zdGFuY2VzO1xuICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5fcHJvbWlzZSA9IHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIENhdGNoRmlsdGVyJF9zYWZlUHJlZGljYXRlKHByZWRpY2F0ZSwgZSkge1xuICAgIHZhciBzYWZlT2JqZWN0ID0ge307XG4gICAgdmFyIHJldGZpbHRlciA9IHRyeUNhdGNoMShwcmVkaWNhdGUsIHNhZmVPYmplY3QsIGUpO1xuXG4gICAgaWYgKHJldGZpbHRlciA9PT0gZXJyb3JPYmopIHJldHVybiByZXRmaWx0ZXI7XG5cbiAgICB2YXIgc2FmZUtleXMgPSBrZXlzKHNhZmVPYmplY3QpO1xuICAgIGlmIChzYWZlS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgZXJyb3JPYmouZSA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICBcIkNhdGNoIGZpbHRlciBtdXN0IGluaGVyaXQgZnJvbSBFcnJvciBcIlxuICAgICAgICAgICsgXCJvciBiZSBhIHNpbXBsZSBwcmVkaWNhdGUgZnVuY3Rpb25cIik7XG4gICAgICAgIHJldHVybiBlcnJvck9iajtcbiAgICB9XG4gICAgcmV0dXJuIHJldGZpbHRlcjtcbn1cblxuQ2F0Y2hGaWx0ZXIucHJvdG90eXBlLmRvRmlsdGVyID0gZnVuY3Rpb24gQ2F0Y2hGaWx0ZXIkX2RvRmlsdGVyKGUpIHtcbiAgICB2YXIgY2IgPSB0aGlzLl9jYWxsYmFjaztcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3Byb21pc2U7XG4gICAgdmFyIGJvdW5kVG8gPSBwcm9taXNlLl9ib3VuZFRvO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLl9pbnN0YW5jZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLl9pbnN0YW5jZXNbaV07XG4gICAgICAgIHZhciBpdGVtSXNFcnJvclR5cGUgPSBpdGVtID09PSBFcnJvciB8fFxuICAgICAgICAgICAgKGl0ZW0gIT0gbnVsbCAmJiBpdGVtLnByb3RvdHlwZSBpbnN0YW5jZW9mIEVycm9yKTtcblxuICAgICAgICBpZiAoaXRlbUlzRXJyb3JUeXBlICYmIGUgaW5zdGFuY2VvZiBpdGVtKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gdHJ5Q2F0Y2gxKGNiLCBib3VuZFRvLCBlKTtcbiAgICAgICAgICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICAgICAgTkVYVF9GSUxURVIuZSA9IHJldC5lO1xuICAgICAgICAgICAgICAgIHJldHVybiBORVhUX0ZJTFRFUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0gPT09IFwiZnVuY3Rpb25cIiAmJiAhaXRlbUlzRXJyb3JUeXBlKSB7XG4gICAgICAgICAgICB2YXIgc2hvdWxkSGFuZGxlID0gQ2F0Y2hGaWx0ZXIkX3NhZmVQcmVkaWNhdGUoaXRlbSwgZSk7XG4gICAgICAgICAgICBpZiAoc2hvdWxkSGFuZGxlID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgICAgIHZhciB0cmFjZSA9IGVycm9ycy5jYW5BdHRhY2goZXJyb3JPYmouZSlcbiAgICAgICAgICAgICAgICAgICAgPyBlcnJvck9iai5lXG4gICAgICAgICAgICAgICAgICAgIDogbmV3IEVycm9yKGVycm9yT2JqLmUgKyBcIlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICAgICAgICAgICAgICBlID0gZXJyb3JPYmouZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IHRyeUNhdGNoMShjYiwgYm91bmRUbywgZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgTkVYVF9GSUxURVIuZSA9IHJldC5lO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTkVYVF9GSUxURVI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgTkVYVF9GSUxURVIuZSA9IGU7XG4gICAgcmV0dXJuIE5FWFRfRklMVEVSO1xufTtcblxucmV0dXJuIENhdGNoRmlsdGVyO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgbWF5YmVXcmFwQXNFcnJvciA9IHV0aWwubWF5YmVXcmFwQXNFcnJvcjtcbnZhciBlcnJvcnMgPSByZXF1aXJlKFwiLi9lcnJvcnMuanNcIik7XG52YXIgVGltZW91dEVycm9yID0gZXJyb3JzLlRpbWVvdXRFcnJvcjtcbnZhciBPcGVyYXRpb25hbEVycm9yID0gZXJyb3JzLk9wZXJhdGlvbmFsRXJyb3I7XG52YXIgYXN5bmMgPSByZXF1aXJlKFwiLi9hc3luYy5qc1wiKTtcbnZhciBoYXZlR2V0dGVycyA9IHV0aWwuaGF2ZUdldHRlcnM7XG52YXIgZXM1ID0gcmVxdWlyZShcIi4vZXM1LmpzXCIpO1xuXG5mdW5jdGlvbiBpc1VudHlwZWRFcnJvcihvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRXJyb3IgJiZcbiAgICAgICAgZXM1LmdldFByb3RvdHlwZU9mKG9iaikgPT09IEVycm9yLnByb3RvdHlwZTtcbn1cblxuZnVuY3Rpb24gd3JhcEFzT3BlcmF0aW9uYWxFcnJvcihvYmopIHtcbiAgICB2YXIgcmV0O1xuICAgIGlmIChpc1VudHlwZWRFcnJvcihvYmopKSB7XG4gICAgICAgIHJldCA9IG5ldyBPcGVyYXRpb25hbEVycm9yKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gb2JqO1xuICAgIH1cbiAgICBlcnJvcnMubWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKHJldCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbm9kZWJhY2tGb3JQcm9taXNlKHByb21pc2UpIHtcbiAgICBmdW5jdGlvbiBQcm9taXNlUmVzb2x2ZXIkX2NhbGxiYWNrKGVyciwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHByb21pc2UgPT09IG51bGwpIHJldHVybjtcblxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlZCA9IHdyYXBBc09wZXJhdGlvbmFsRXJyb3IobWF5YmVXcmFwQXNFcnJvcihlcnIpKTtcbiAgICAgICAgICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2Uod3JhcHBlZCk7XG4gICAgICAgICAgICBwcm9taXNlLl9yZWplY3Qod3JhcHBlZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHZhciAkX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGg7dmFyIGFyZ3MgPSBuZXcgQXJyYXkoJF9sZW4gLSAxKTsgZm9yKHZhciAkX2kgPSAxOyAkX2kgPCAkX2xlbjsgKyskX2kpIHthcmdzWyRfaSAtIDFdID0gYXJndW1lbnRzWyRfaV07fVxuICAgICAgICAgICAgcHJvbWlzZS5fZnVsZmlsbChhcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UuX2Z1bGZpbGwodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlUmVzb2x2ZXIkX2NhbGxiYWNrO1xufVxuXG5cbnZhciBQcm9taXNlUmVzb2x2ZXI7XG5pZiAoIWhhdmVHZXR0ZXJzKSB7XG4gICAgUHJvbWlzZVJlc29sdmVyID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyKHByb21pc2UpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgdGhpcy5hc0NhbGxiYWNrID0gbm9kZWJhY2tGb3JQcm9taXNlKHByb21pc2UpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gdGhpcy5hc0NhbGxiYWNrO1xuICAgIH07XG59XG5lbHNlIHtcbiAgICBQcm9taXNlUmVzb2x2ZXIgPSBmdW5jdGlvbiBQcm9taXNlUmVzb2x2ZXIocHJvbWlzZSkge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIH07XG59XG5pZiAoaGF2ZUdldHRlcnMpIHtcbiAgICB2YXIgcHJvcCA9IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlYmFja0ZvclByb21pc2UodGhpcy5wcm9taXNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZXM1LmRlZmluZVByb3BlcnR5KFByb21pc2VSZXNvbHZlci5wcm90b3R5cGUsIFwiYXNDYWxsYmFja1wiLCBwcm9wKTtcbiAgICBlczUuZGVmaW5lUHJvcGVydHkoUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZSwgXCJjYWxsYmFja1wiLCBwcm9wKTtcbn1cblxuUHJvbWlzZVJlc29sdmVyLl9ub2RlYmFja0ZvclByb21pc2UgPSBub2RlYmFja0ZvclByb21pc2U7XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiBQcm9taXNlUmVzb2x2ZXIkdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBQcm9taXNlUmVzb2x2ZXJdXCI7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnJlc29sdmUgPVxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS5mdWxmaWxsID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJHJlc29sdmUodmFsdWUpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZVJlc29sdmVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSWxsZWdhbCBpbnZvY2F0aW9uLCByZXNvbHZlciByZXNvbHZlL3JlamVjdCBtdXN0IGJlIGNhbGxlZCB3aXRoaW4gYSByZXNvbHZlciBjb250ZXh0LiBDb25zaWRlciB1c2luZyB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvciBpbnN0ZWFkLlwiKTtcbiAgICB9XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcbiAgICBpZiAocHJvbWlzZS5fdHJ5Rm9sbG93KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFzeW5jLmludm9rZShwcm9taXNlLl9mdWxmaWxsLCBwcm9taXNlLCB2YWx1ZSk7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnJlamVjdCA9IGZ1bmN0aW9uIFByb21pc2VSZXNvbHZlciRyZWplY3QocmVhc29uKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VSZXNvbHZlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgaW52b2NhdGlvbiwgcmVzb2x2ZXIgcmVzb2x2ZS9yZWplY3QgbXVzdCBiZSBjYWxsZWQgd2l0aGluIGEgcmVzb2x2ZXIgY29udGV4dC4gQ29uc2lkZXIgdXNpbmcgdGhlIHByb21pc2UgY29uc3RydWN0b3IgaW5zdGVhZC5cIik7XG4gICAgfVxuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG4gICAgZXJyb3JzLm1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbihyZWFzb24pO1xuICAgIHZhciB0cmFjZSA9IGVycm9ycy5jYW5BdHRhY2gocmVhc29uKSA/IHJlYXNvbiA6IG5ldyBFcnJvcihyZWFzb24gKyBcIlwiKTtcbiAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICBhc3luYy5pbnZva2UocHJvbWlzZS5fcmVqZWN0LCBwcm9taXNlLCByZWFzb24pO1xuICAgIGlmICh0cmFjZSAhPT0gcmVhc29uKSB7XG4gICAgICAgIGFzeW5jLmludm9rZSh0aGlzLl9zZXRDYXJyaWVkU3RhY2tUcmFjZSwgdGhpcywgdHJhY2UpO1xuICAgIH1cbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUucHJvZ3Jlc3MgPVxuZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJHByb2dyZXNzKHZhbHVlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VSZXNvbHZlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgaW52b2NhdGlvbiwgcmVzb2x2ZXIgcmVzb2x2ZS9yZWplY3QgbXVzdCBiZSBjYWxsZWQgd2l0aGluIGEgcmVzb2x2ZXIgY29udGV4dC4gQ29uc2lkZXIgdXNpbmcgdGhlIHByb21pc2UgY29uc3RydWN0b3IgaW5zdGVhZC5cIik7XG4gICAgfVxuICAgIGFzeW5jLmludm9rZSh0aGlzLnByb21pc2UuX3Byb2dyZXNzLCB0aGlzLnByb21pc2UsIHZhbHVlKTtcbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJGNhbmNlbCgpIHtcbiAgICBhc3luYy5pbnZva2UodGhpcy5wcm9taXNlLmNhbmNlbCwgdGhpcy5wcm9taXNlLCB2b2lkIDApO1xufTtcblxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJHRpbWVvdXQoKSB7XG4gICAgdGhpcy5yZWplY3QobmV3IFRpbWVvdXRFcnJvcihcInRpbWVvdXRcIikpO1xufTtcblxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS5pc1Jlc29sdmVkID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZS5pc1Jlc29sdmVkKCk7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIFByb21pc2VSZXNvbHZlciR0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZS50b0pTT04oKTtcbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUuX3NldENhcnJpZWRTdGFja1RyYWNlID1cbmZ1bmN0aW9uIFByb21pc2VSZXNvbHZlciRfc2V0Q2FycmllZFN0YWNrVHJhY2UodHJhY2UpIHtcbiAgICBpZiAodGhpcy5wcm9taXNlLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICB0aGlzLnByb21pc2UuX3NldENhcnJpZWRTdGFja1RyYWNlKHRyYWNlKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2VSZXNvbHZlcjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIE5FWFRfRklMVEVSLCBjYXN0KSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgd3JhcHNQcmltaXRpdmVSZWNlaXZlciA9IHV0aWwud3JhcHNQcmltaXRpdmVSZWNlaXZlcjtcbnZhciBpc1ByaW1pdGl2ZSA9IHV0aWwuaXNQcmltaXRpdmU7XG52YXIgdGhyb3dlciA9IHV0aWwudGhyb3dlcjtcblxuZnVuY3Rpb24gcmV0dXJuVGhpcygpIHtcbiAgICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHRocm93VGhpcygpIHtcbiAgICB0aHJvdyB0aGlzO1xufVxuZnVuY3Rpb24gcmV0dXJuJChyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFByb21pc2UkX3JldHVybmVyKCkge1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xufVxuZnVuY3Rpb24gdGhyb3ckKHIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gUHJvbWlzZSRfdGhyb3dlcigpIHtcbiAgICAgICAgdGhyb3cgcjtcbiAgICB9O1xufVxuZnVuY3Rpb24gcHJvbWlzZWRGaW5hbGx5KHJldCwgcmVhc29uT3JWYWx1ZSwgaXNGdWxmaWxsZWQpIHtcbiAgICB2YXIgdGhlbjtcbiAgICBpZiAod3JhcHNQcmltaXRpdmVSZWNlaXZlciAmJiBpc1ByaW1pdGl2ZShyZWFzb25PclZhbHVlKSkge1xuICAgICAgICB0aGVuID0gaXNGdWxmaWxsZWQgPyByZXR1cm4kKHJlYXNvbk9yVmFsdWUpIDogdGhyb3ckKHJlYXNvbk9yVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW4gPSBpc0Z1bGZpbGxlZCA/IHJldHVyblRoaXMgOiB0aHJvd1RoaXM7XG4gICAgfVxuICAgIHJldHVybiByZXQuX3RoZW4odGhlbiwgdGhyb3dlciwgdm9pZCAwLCByZWFzb25PclZhbHVlLCB2b2lkIDApO1xufVxuXG5mdW5jdGlvbiBmaW5hbGx5SGFuZGxlcihyZWFzb25PclZhbHVlKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG4gICAgdmFyIGhhbmRsZXIgPSB0aGlzLmhhbmRsZXI7XG5cbiAgICB2YXIgcmV0ID0gcHJvbWlzZS5faXNCb3VuZCgpXG4gICAgICAgICAgICAgICAgICAgID8gaGFuZGxlci5jYWxsKHByb21pc2UuX2JvdW5kVG8pXG4gICAgICAgICAgICAgICAgICAgIDogaGFuZGxlcigpO1xuXG4gICAgaWYgKHJldCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHJldCwgdm9pZCAwKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlZEZpbmFsbHkobWF5YmVQcm9taXNlLCByZWFzb25PclZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5pc0Z1bGZpbGxlZCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9taXNlLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICBORVhUX0ZJTFRFUi5lID0gcmVhc29uT3JWYWx1ZTtcbiAgICAgICAgcmV0dXJuIE5FWFRfRklMVEVSO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWFzb25PclZhbHVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdGFwSGFuZGxlcih2YWx1ZSkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgIHZhciBoYW5kbGVyID0gdGhpcy5oYW5kbGVyO1xuXG4gICAgdmFyIHJldCA9IHByb21pc2UuX2lzQm91bmQoKVxuICAgICAgICAgICAgICAgICAgICA/IGhhbmRsZXIuY2FsbChwcm9taXNlLl9ib3VuZFRvLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiBoYW5kbGVyKHZhbHVlKTtcblxuICAgIGlmIChyZXQgIT09IHZvaWQgMCkge1xuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gY2FzdChyZXQsIHZvaWQgMCk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZWRGaW5hbGx5KG1heWJlUHJvbWlzZSwgdmFsdWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuX3Bhc3NUaHJvdWdoSGFuZGxlciA9XG5mdW5jdGlvbiBQcm9taXNlJF9wYXNzVGhyb3VnaEhhbmRsZXIoaGFuZGxlciwgaXNGaW5hbGx5KSB7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0aGlzLnRoZW4oKTtcblxuICAgIHZhciBwcm9taXNlQW5kSGFuZGxlciA9IHtcbiAgICAgICAgcHJvbWlzZTogdGhpcyxcbiAgICAgICAgaGFuZGxlcjogaGFuZGxlclxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5fdGhlbihcbiAgICAgICAgICAgIGlzRmluYWxseSA/IGZpbmFsbHlIYW5kbGVyIDogdGFwSGFuZGxlcixcbiAgICAgICAgICAgIGlzRmluYWxseSA/IGZpbmFsbHlIYW5kbGVyIDogdm9pZCAwLCB2b2lkIDAsXG4gICAgICAgICAgICBwcm9taXNlQW5kSGFuZGxlciwgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmxhc3RseSA9XG5Qcm9taXNlLnByb3RvdHlwZVtcImZpbmFsbHlcIl0gPSBmdW5jdGlvbiBQcm9taXNlJGZpbmFsbHkoaGFuZGxlcikge1xuICAgIHJldHVybiB0aGlzLl9wYXNzVGhyb3VnaEhhbmRsZXIoaGFuZGxlciwgdHJ1ZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS50YXAgPSBmdW5jdGlvbiBQcm9taXNlJHRhcChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3NUaHJvdWdoSGFuZGxlcihoYW5kbGVyLCBmYWxzZSk7XG59O1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgaXNQcmltaXRpdmUgPSB1dGlsLmlzUHJpbWl0aXZlO1xudmFyIHdyYXBzUHJpbWl0aXZlUmVjZWl2ZXIgPSB1dGlsLndyYXBzUHJpbWl0aXZlUmVjZWl2ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIHJldHVybmVyID0gZnVuY3Rpb24gUHJvbWlzZSRfcmV0dXJuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xudmFyIHRocm93ZXIgPSBmdW5jdGlvbiBQcm9taXNlJF90aHJvd2VyKCkge1xuICAgIHRocm93IHRoaXM7XG59O1xuXG52YXIgd3JhcHBlciA9IGZ1bmN0aW9uIFByb21pc2UkX3dyYXBwZXIodmFsdWUsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24gPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIFByb21pc2UkX3Rocm93ZXIoKSB7XG4gICAgICAgICAgICB0aHJvdyB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gMikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gUHJvbWlzZSRfcmV0dXJuZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuXG5Qcm9taXNlLnByb3RvdHlwZVtcInJldHVyblwiXSA9XG5Qcm9taXNlLnByb3RvdHlwZS50aGVuUmV0dXJuID1cbmZ1bmN0aW9uIFByb21pc2UkdGhlblJldHVybih2YWx1ZSkge1xuICAgIGlmICh3cmFwc1ByaW1pdGl2ZVJlY2VpdmVyICYmIGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGhlbihcbiAgICAgICAgICAgIHdyYXBwZXIodmFsdWUsIDIpLFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgdm9pZCAwXG4gICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4ocmV0dXJuZXIsIHZvaWQgMCwgdm9pZCAwLCB2YWx1ZSwgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlW1widGhyb3dcIl0gPVxuUHJvbWlzZS5wcm90b3R5cGUudGhlblRocm93ID1cbmZ1bmN0aW9uIFByb21pc2UkdGhlblRocm93KHJlYXNvbikge1xuICAgIGlmICh3cmFwc1ByaW1pdGl2ZVJlY2VpdmVyICYmIGlzUHJpbWl0aXZlKHJlYXNvbikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RoZW4oXG4gICAgICAgICAgICB3cmFwcGVyKHJlYXNvbiwgMSksXG4gICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICB2b2lkIDBcbiAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbih0aHJvd2VyLCB2b2lkIDAsIHZvaWQgMCwgcmVhc29uLCB2b2lkIDApO1xufTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPVxuZnVuY3Rpb24oUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBjYXN0LCBJTlRFUk5BTCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGNhbkV2YWx1YXRlID0gdXRpbC5jYW5FdmFsdWF0ZTtcbnZhciB0cnlDYXRjaDEgPSB1dGlsLnRyeUNhdGNoMTtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG5cblxuaWYgKGNhbkV2YWx1YXRlKSB7XG4gICAgdmFyIHRoZW5DYWxsYmFjayA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcInZhbHVlXCIsIFwiaG9sZGVyXCIsIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgaG9sZGVyLnBJbmRleCA9IHZhbHVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgaG9sZGVyLmNoZWNrRnVsZmlsbG1lbnQodGhpcyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgXCIucmVwbGFjZSgvSW5kZXgvZywgaSkpO1xuICAgIH07XG5cbiAgICB2YXIgY2FsbGVyID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBjb3VudDsgKytpKSB2YWx1ZXMucHVzaChcImhvbGRlci5wXCIgKyBpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcImhvbGRlclwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGhvbGRlci5mbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh2YWx1ZXMpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiLnJlcGxhY2UoL3ZhbHVlcy9nLCB2YWx1ZXMuam9pbihcIiwgXCIpKSk7XG4gICAgfTtcbiAgICB2YXIgdGhlbkNhbGxiYWNrcyA9IFtdO1xuICAgIHZhciBjYWxsZXJzID0gW3ZvaWQgMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gNTsgKytpKSB7XG4gICAgICAgIHRoZW5DYWxsYmFja3MucHVzaCh0aGVuQ2FsbGJhY2soaSkpO1xuICAgICAgICBjYWxsZXJzLnB1c2goY2FsbGVyKGkpKTtcbiAgICB9XG5cbiAgICB2YXIgSG9sZGVyID0gZnVuY3Rpb24odG90YWwsIGZuKSB7XG4gICAgICAgIHRoaXMucDEgPSB0aGlzLnAyID0gdGhpcy5wMyA9IHRoaXMucDQgPSB0aGlzLnA1ID0gbnVsbDtcbiAgICAgICAgdGhpcy5mbiA9IGZuO1xuICAgICAgICB0aGlzLnRvdGFsID0gdG90YWw7XG4gICAgICAgIHRoaXMubm93ID0gMDtcbiAgICB9O1xuXG4gICAgSG9sZGVyLnByb3RvdHlwZS5jYWxsZXJzID0gY2FsbGVycztcbiAgICBIb2xkZXIucHJvdG90eXBlLmNoZWNrRnVsZmlsbG1lbnQgPSBmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgIHZhciBub3cgPSB0aGlzLm5vdztcbiAgICAgICAgbm93Kys7XG4gICAgICAgIHZhciB0b3RhbCA9IHRoaXMudG90YWw7XG4gICAgICAgIGlmIChub3cgPj0gdG90YWwpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVyID0gdGhpcy5jYWxsZXJzW3RvdGFsXTtcbiAgICAgICAgICAgIHZhciByZXQgPSB0cnlDYXRjaDEoaGFuZGxlciwgdm9pZCAwLCB0aGlzKTtcbiAgICAgICAgICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fcmVqZWN0VW5jaGVja2VkKHJldC5lKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXByb21pc2UuX3RyeUZvbGxvdyhyZXQpKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fZnVsZmlsbFVuY2hlY2tlZChyZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub3cgPSBub3c7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cblxuXG5Qcm9taXNlLmpvaW4gPSBmdW5jdGlvbiBQcm9taXNlJEpvaW4oKSB7XG4gICAgdmFyIGxhc3QgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICB2YXIgZm47XG4gICAgaWYgKGxhc3QgPiAwICYmIHR5cGVvZiBhcmd1bWVudHNbbGFzdF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBmbiA9IGFyZ3VtZW50c1tsYXN0XTtcbiAgICAgICAgaWYgKGxhc3QgPCA2ICYmIGNhbkV2YWx1YXRlKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICAgICAgcmV0Ll9zZXRUcmFjZSh2b2lkIDApO1xuICAgICAgICAgICAgdmFyIGhvbGRlciA9IG5ldyBIb2xkZXIobGFzdCwgZm4pO1xuICAgICAgICAgICAgdmFyIHJlamVjdCA9IHJldC5fcmVqZWN0O1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoZW5DYWxsYmFja3M7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3Q7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KGFyZ3VtZW50c1tpXSwgdm9pZCAwKTtcbiAgICAgICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlLmlzUGVuZGluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3RoZW4oY2FsbGJhY2tzW2ldLCByZWplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwLCByZXQsIGhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF5YmVQcm9taXNlLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5jYWxsKHJldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fc2V0dGxlZFZhbHVlLCBob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0Ll9yZWplY3QobWF5YmVQcm9taXNlLl9zZXR0bGVkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0uY2FsbChyZXQsIG1heWJlUHJvbWlzZSwgaG9sZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciAkX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGg7dmFyIGFyZ3MgPSBuZXcgQXJyYXkoJF9sZW4pOyBmb3IodmFyICRfaSA9IDA7ICRfaSA8ICRfbGVuOyArKyRfaSkge2FyZ3NbJF9pXSA9IGFyZ3VtZW50c1skX2ldO31cbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2VBcnJheShhcmdzKS5wcm9taXNlKCk7XG4gICAgcmV0dXJuIGZuICE9PSB2b2lkIDAgPyByZXQuc3ByZWFkKGZuKSA6IHJldDtcbn07XG5cbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCwgY2FzdCkge1xudmFyIGFwaVJlamVjdGlvbiA9IHJlcXVpcmUoXCIuL2Vycm9yc19hcGlfcmVqZWN0aW9uLmpzXCIpKFByb21pc2UpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpLmlzQXJyYXk7XG5cbnZhciByYWNlTGF0ZXIgPSBmdW5jdGlvbiBQcm9taXNlJF9yYWNlTGF0ZXIocHJvbWlzZSkge1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UkX1JhY2UoYXJyYXksIHByb21pc2UpO1xuICAgIH0pO1xufTtcblxudmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gUHJvbWlzZSRfUmFjZShwcm9taXNlcywgcGFyZW50KSB7XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QocHJvbWlzZXMsIHZvaWQgMCk7XG5cbiAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gcmFjZUxhdGVyKG1heWJlUHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmICghaXNBcnJheShwcm9taXNlcykpIHtcbiAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImV4cGVjdGluZyBhbiBhcnJheSwgYSBwcm9taXNlIG9yIGEgdGhlbmFibGVcIik7XG4gICAgfVxuXG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICBpZiAocGFyZW50ICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0Ll9wcm9wYWdhdGVGcm9tKHBhcmVudCwgNyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0Ll9zZXRUcmFjZSh2b2lkIDApO1xuICAgIH1cbiAgICB2YXIgZnVsZmlsbCA9IHJldC5fZnVsZmlsbDtcbiAgICB2YXIgcmVqZWN0ID0gcmV0Ll9yZWplY3Q7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHByb21pc2VzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciB2YWwgPSBwcm9taXNlc1tpXTtcblxuICAgICAgICBpZiAodmFsID09PSB2b2lkIDAgJiYgIShoYXNPd24uY2FsbChwcm9taXNlcywgaSkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIFByb21pc2UuY2FzdCh2YWwpLl90aGVuKGZ1bGZpbGwsIHJlamVjdCwgdm9pZCAwLCByZXQsIG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5Qcm9taXNlLnJhY2UgPSBmdW5jdGlvbiBQcm9taXNlJFJhY2UocHJvbWlzZXMpIHtcbiAgICByZXR1cm4gUHJvbWlzZSRfUmFjZShwcm9taXNlcywgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnJhY2UgPSBmdW5jdGlvbiBQcm9taXNlJHJhY2UoKSB7XG4gICAgcmV0dXJuIFByb21pc2UkX1JhY2UodGhpcywgdm9pZCAwKTtcbn07XG5cbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIGNyID0gT2JqZWN0LmNyZWF0ZTtcbmlmIChjcikge1xuICAgIHZhciBjYWxsZXJDYWNoZSA9IGNyKG51bGwpO1xuICAgIHZhciBnZXR0ZXJDYWNoZSA9IGNyKG51bGwpO1xuICAgIGNhbGxlckNhY2hlW1wiIHNpemVcIl0gPSBnZXR0ZXJDYWNoZVtcIiBzaXplXCJdID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgY2FuRXZhbHVhdGUgPSB1dGlsLmNhbkV2YWx1YXRlO1xudmFyIGlzSWRlbnRpZmllciA9IHV0aWwuaXNJZGVudGlmaWVyO1xuXG5mdW5jdGlvbiBtYWtlTWV0aG9kQ2FsbGVyIChtZXRob2ROYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcIm9ialwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICd1c2Ugc3RyaWN0JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHZhciBsZW4gPSB0aGlzLmxlbmd0aDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHN3aXRjaChsZW4pIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdKTsgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdLCB0aGlzWzFdKTsgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdLCB0aGlzWzFdLCB0aGlzWzJdKTsgICAgICAgIFxcblxcXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBvYmoubWV0aG9kTmFtZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gb2JqLm1ldGhvZE5hbWUuYXBwbHkob2JqLCB0aGlzKTsgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIFwiLnJlcGxhY2UoL21ldGhvZE5hbWUvZywgbWV0aG9kTmFtZSkpO1xufVxuXG5mdW5jdGlvbiBtYWtlR2V0dGVyIChwcm9wZXJ0eU5hbWUpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwib2JqXCIsIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgJ3VzZSBzdHJpY3QnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0dXJuIG9iai5wcm9wZXJ0eU5hbWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCIucmVwbGFjZShcInByb3BlcnR5TmFtZVwiLCBwcm9wZXJ0eU5hbWUpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcGlsZWQobmFtZSwgY29tcGlsZXIsIGNhY2hlKSB7XG4gICAgdmFyIHJldCA9IGNhY2hlW25hbWVdO1xuICAgIGlmICh0eXBlb2YgcmV0ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKCFpc0lkZW50aWZpZXIobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldCA9IGNvbXBpbGVyKG5hbWUpO1xuICAgICAgICBjYWNoZVtuYW1lXSA9IHJldDtcbiAgICAgICAgY2FjaGVbXCIgc2l6ZVwiXSsrO1xuICAgICAgICBpZiAoY2FjaGVbXCIgc2l6ZVwiXSA+IDUxMikge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjYWNoZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSBkZWxldGUgY2FjaGVba2V5c1tpXV07XG4gICAgICAgICAgICBjYWNoZVtcIiBzaXplXCJdID0ga2V5cy5sZW5ndGggLSAyNTY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZ2V0TWV0aG9kQ2FsbGVyKG5hbWUpIHtcbiAgICByZXR1cm4gZ2V0Q29tcGlsZWQobmFtZSwgbWFrZU1ldGhvZENhbGxlciwgY2FsbGVyQ2FjaGUpO1xufVxuXG5mdW5jdGlvbiBnZXRHZXR0ZXIobmFtZSkge1xuICAgIHJldHVybiBnZXRDb21waWxlZChuYW1lLCBtYWtlR2V0dGVyLCBnZXR0ZXJDYWNoZSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxlcihvYmopIHtcbiAgICByZXR1cm4gb2JqW3RoaXMucG9wKCldLmFwcGx5KG9iaiwgdGhpcyk7XG59XG5Qcm9taXNlLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gUHJvbWlzZSRjYWxsKG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgJF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoO3ZhciBhcmdzID0gbmV3IEFycmF5KCRfbGVuIC0gMSk7IGZvcih2YXIgJF9pID0gMTsgJF9pIDwgJF9sZW47ICsrJF9pKSB7YXJnc1skX2kgLSAxXSA9IGFyZ3VtZW50c1skX2ldO31cbiAgICBpZiAoY2FuRXZhbHVhdGUpIHtcbiAgICAgICAgdmFyIG1heWJlQ2FsbGVyID0gZ2V0TWV0aG9kQ2FsbGVyKG1ldGhvZE5hbWUpO1xuICAgICAgICBpZiAobWF5YmVDYWxsZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aGVuKG1heWJlQ2FsbGVyLCB2b2lkIDAsIHZvaWQgMCwgYXJncywgdm9pZCAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcmdzLnB1c2gobWV0aG9kTmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4oY2FsbGVyLCB2b2lkIDAsIHZvaWQgMCwgYXJncywgdm9pZCAwKTtcbn07XG5cbmZ1bmN0aW9uIG5hbWVkR2V0dGVyKG9iaikge1xuICAgIHJldHVybiBvYmpbdGhpc107XG59XG5mdW5jdGlvbiBpbmRleGVkR2V0dGVyKG9iaikge1xuICAgIHJldHVybiBvYmpbdGhpc107XG59XG5Qcm9taXNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBQcm9taXNlJGdldChwcm9wZXJ0eU5hbWUpIHtcbiAgICB2YXIgaXNJbmRleCA9ICh0eXBlb2YgcHJvcGVydHlOYW1lID09PSBcIm51bWJlclwiKTtcbiAgICB2YXIgZ2V0dGVyO1xuICAgIGlmICghaXNJbmRleCkge1xuICAgICAgICBpZiAoY2FuRXZhbHVhdGUpIHtcbiAgICAgICAgICAgIHZhciBtYXliZUdldHRlciA9IGdldEdldHRlcihwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgZ2V0dGVyID0gbWF5YmVHZXR0ZXIgIT09IG51bGwgPyBtYXliZUdldHRlciA6IG5hbWVkR2V0dGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0dGVyID0gbmFtZWRHZXR0ZXI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXR0ZXIgPSBpbmRleGVkR2V0dGVyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbihnZXR0ZXIsIHZvaWQgMCwgdm9pZCAwLCBwcm9wZXJ0eU5hbWUsIHZvaWQgMCk7XG59O1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIGFwaVJlamVjdGlvbiwgSU5URVJOQUwsIGNhc3QpIHtcbnZhciBlcnJvcnMgPSByZXF1aXJlKFwiLi9lcnJvcnMuanNcIik7XG52YXIgVHlwZUVycm9yID0gZXJyb3JzLlR5cGVFcnJvcjtcbnZhciBkZXByZWNhdGVkID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKS5kZXByZWNhdGVkO1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciB0cnlDYXRjaDEgPSB1dGlsLnRyeUNhdGNoMTtcbnZhciB5aWVsZEhhbmRsZXJzID0gW107XG5cbmZ1bmN0aW9uIHByb21pc2VGcm9tWWllbGRIYW5kbGVyKHZhbHVlLCB5aWVsZEhhbmRsZXJzKSB7XG4gICAgdmFyIF9lcnJvck9iaiA9IGVycm9yT2JqO1xuICAgIHZhciBfUHJvbWlzZSA9IFByb21pc2U7XG4gICAgdmFyIGxlbiA9IHlpZWxkSGFuZGxlcnMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoMSh5aWVsZEhhbmRsZXJzW2ldLCB2b2lkIDAsIHZhbHVlKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gX2Vycm9yT2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gX1Byb21pc2UucmVqZWN0KF9lcnJvck9iai5lKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gY2FzdChyZXN1bHQsIHByb21pc2VGcm9tWWllbGRIYW5kbGVyKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIF9Qcm9taXNlKSByZXR1cm4gbWF5YmVQcm9taXNlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gUHJvbWlzZVNwYXduKGdlbmVyYXRvckZ1bmN0aW9uLCByZWNlaXZlciwgeWllbGRIYW5kbGVyKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHByb21pc2UuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgdGhpcy5fZ2VuZXJhdG9yRnVuY3Rpb24gPSBnZW5lcmF0b3JGdW5jdGlvbjtcbiAgICB0aGlzLl9yZWNlaXZlciA9IHJlY2VpdmVyO1xuICAgIHRoaXMuX2dlbmVyYXRvciA9IHZvaWQgMDtcbiAgICB0aGlzLl95aWVsZEhhbmRsZXJzID0gdHlwZW9mIHlpZWxkSGFuZGxlciA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gW3lpZWxkSGFuZGxlcl0uY29uY2F0KHlpZWxkSGFuZGxlcnMpXG4gICAgICAgIDogeWllbGRIYW5kbGVycztcbn1cblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZVNwYXduJHByb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG59O1xuXG5Qcm9taXNlU3Bhd24ucHJvdG90eXBlLl9ydW4gPSBmdW5jdGlvbiBQcm9taXNlU3Bhd24kX3J1bigpIHtcbiAgICB0aGlzLl9nZW5lcmF0b3IgPSB0aGlzLl9nZW5lcmF0b3JGdW5jdGlvbi5jYWxsKHRoaXMuX3JlY2VpdmVyKTtcbiAgICB0aGlzLl9yZWNlaXZlciA9XG4gICAgICAgIHRoaXMuX2dlbmVyYXRvckZ1bmN0aW9uID0gdm9pZCAwO1xuICAgIHRoaXMuX25leHQodm9pZCAwKTtcbn07XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUuX2NvbnRpbnVlID0gZnVuY3Rpb24gUHJvbWlzZVNwYXduJF9jb250aW51ZShyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikge1xuICAgICAgICB0aGlzLl9nZW5lcmF0b3IgPSB2b2lkIDA7XG4gICAgICAgIHZhciB0cmFjZSA9IGVycm9ycy5jYW5BdHRhY2gocmVzdWx0LmUpXG4gICAgICAgICAgICA/IHJlc3VsdC5lIDogbmV3IEVycm9yKHJlc3VsdC5lICsgXCJcIik7XG4gICAgICAgIHRoaXMuX3Byb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UpO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9yZWplY3QocmVzdWx0LmUsIHRyYWNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICBpZiAocmVzdWx0LmRvbmUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fZ2VuZXJhdG9yID0gdm9pZCAwO1xuICAgICAgICBpZiAoIXRoaXMuX3Byb21pc2UuX3RyeUZvbGxvdyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3Byb21pc2UuX2Z1bGZpbGwodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QodmFsdWUsIHZvaWQgMCk7XG4gICAgICAgIGlmICghKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAgICAgICBtYXliZVByb21pc2UgPVxuICAgICAgICAgICAgICAgIHByb21pc2VGcm9tWWllbGRIYW5kbGVyKG1heWJlUHJvbWlzZSwgdGhpcy5feWllbGRIYW5kbGVycyk7XG4gICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGhyb3cobmV3IFR5cGVFcnJvcihcIkEgdmFsdWUgd2FzIHlpZWxkZWQgdGhhdCBjb3VsZCBub3QgYmUgdHJlYXRlZCBhcyBhIHByb21pc2VcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYXliZVByb21pc2UuX3RoZW4oXG4gICAgICAgICAgICB0aGlzLl9uZXh0LFxuICAgICAgICAgICAgdGhpcy5fdGhyb3csXG4gICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICk7XG4gICAgfVxufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fdGhyb3cgPSBmdW5jdGlvbiBQcm9taXNlU3Bhd24kX3Rocm93KHJlYXNvbikge1xuICAgIGlmIChlcnJvcnMuY2FuQXR0YWNoKHJlYXNvbikpXG4gICAgICAgIHRoaXMuX3Byb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UocmVhc29uKTtcbiAgICB0aGlzLl9jb250aW51ZShcbiAgICAgICAgdHJ5Q2F0Y2gxKHRoaXMuX2dlbmVyYXRvcltcInRocm93XCJdLCB0aGlzLl9nZW5lcmF0b3IsIHJlYXNvbilcbiAgICk7XG59O1xuXG5Qcm9taXNlU3Bhd24ucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gUHJvbWlzZVNwYXduJF9uZXh0KHZhbHVlKSB7XG4gICAgdGhpcy5fY29udGludWUoXG4gICAgICAgIHRyeUNhdGNoMSh0aGlzLl9nZW5lcmF0b3IubmV4dCwgdGhpcy5fZ2VuZXJhdG9yLCB2YWx1ZSlcbiAgICk7XG59O1xuXG5Qcm9taXNlLmNvcm91dGluZSA9XG5mdW5jdGlvbiBQcm9taXNlJENvcm91dGluZShnZW5lcmF0b3JGdW5jdGlvbiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgZ2VuZXJhdG9yRnVuY3Rpb24gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZ2VuZXJhdG9yRnVuY3Rpb24gbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICB2YXIgeWllbGRIYW5kbGVyID0gT2JqZWN0KG9wdGlvbnMpLnlpZWxkSGFuZGxlcjtcbiAgICB2YXIgUHJvbWlzZVNwYXduJCA9IFByb21pc2VTcGF3bjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ2VuZXJhdG9yID0gZ2VuZXJhdG9yRnVuY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIHNwYXduID0gbmV3IFByb21pc2VTcGF3biQodm9pZCAwLCB2b2lkIDAsIHlpZWxkSGFuZGxlcik7XG4gICAgICAgIHNwYXduLl9nZW5lcmF0b3IgPSBnZW5lcmF0b3I7XG4gICAgICAgIHNwYXduLl9uZXh0KHZvaWQgMCk7XG4gICAgICAgIHJldHVybiBzcGF3bi5wcm9taXNlKCk7XG4gICAgfTtcbn07XG5cblByb21pc2UuY29yb3V0aW5lLmFkZFlpZWxkSGFuZGxlciA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIHlpZWxkSGFuZGxlcnMucHVzaChmbik7XG59O1xuXG5Qcm9taXNlLnNwYXduID0gZnVuY3Rpb24gUHJvbWlzZSRTcGF3bihnZW5lcmF0b3JGdW5jdGlvbikge1xuICAgIGRlcHJlY2F0ZWQoXCJQcm9taXNlLnNwYXduIGlzIGRlcHJlY2F0ZWQuIFVzZSBQcm9taXNlLmNvcm91dGluZSBpbnN0ZWFkLlwiKTtcbiAgICBpZiAodHlwZW9mIGdlbmVyYXRvckZ1bmN0aW9uICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImdlbmVyYXRvckZ1bmN0aW9uIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgdmFyIHNwYXduID0gbmV3IFByb21pc2VTcGF3bihnZW5lcmF0b3JGdW5jdGlvbiwgdGhpcyk7XG4gICAgdmFyIHJldCA9IHNwYXduLnByb21pc2UoKTtcbiAgICBzcGF3bi5fcnVuKFByb21pc2Uuc3Bhd24pO1xuICAgIHJldHVybiByZXQ7XG59O1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uLCBjYXN0LCBJTlRFUk5BTCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIHRyeUNhdGNoMyA9IHV0aWwudHJ5Q2F0Y2gzO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciBQRU5ESU5HID0ge307XG52YXIgRU1QVFlfQVJSQVkgPSBbXTtcblxuZnVuY3Rpb24gTWFwcGluZ1Byb21pc2VBcnJheShwcm9taXNlcywgZm4sIGxpbWl0LCBfZmlsdGVyKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciQocHJvbWlzZXMpO1xuICAgIHRoaXMuX2NhbGxiYWNrID0gZm47XG4gICAgdGhpcy5fcHJlc2VydmVkVmFsdWVzID0gX2ZpbHRlciA9PT0gSU5URVJOQUxcbiAgICAgICAgPyBuZXcgQXJyYXkodGhpcy5sZW5ndGgoKSlcbiAgICAgICAgOiBudWxsO1xuICAgIHRoaXMuX2xpbWl0ID0gbGltaXQ7XG4gICAgdGhpcy5faW5GbGlnaHQgPSAwO1xuICAgIHRoaXMuX3F1ZXVlID0gbGltaXQgPj0gMSA/IFtdIDogRU1QVFlfQVJSQVk7XG4gICAgdGhpcy5faW5pdCQodm9pZCAwLCAtMik7XG59XG51dGlsLmluaGVyaXRzKE1hcHBpbmdQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gTWFwcGluZ1Byb21pc2VBcnJheSRfaW5pdCgpIHt9O1xuXG5NYXBwaW5nUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9XG5mdW5jdGlvbiBNYXBwaW5nUHJvbWlzZUFycmF5JF9wcm9taXNlRnVsZmlsbGVkKHZhbHVlLCBpbmRleCkge1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgaWYgKHZhbHVlcyA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgdmFyIHByZXNlcnZlZFZhbHVlcyA9IHRoaXMuX3ByZXNlcnZlZFZhbHVlcztcbiAgICB2YXIgbGltaXQgPSB0aGlzLl9saW1pdDtcbiAgICBpZiAodmFsdWVzW2luZGV4XSA9PT0gUEVORElORykge1xuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIGlmIChsaW1pdCA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9pbkZsaWdodC0tO1xuICAgICAgICAgICAgdGhpcy5fZHJhaW5RdWV1ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGxpbWl0ID49IDEgJiYgdGhpcy5faW5GbGlnaHQgPj0gbGltaXQpIHtcbiAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3F1ZXVlLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVzZXJ2ZWRWYWx1ZXMgIT09IG51bGwpIHByZXNlcnZlZFZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcblxuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFjaztcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gdGhpcy5fcHJvbWlzZS5fYm91bmRUbztcbiAgICAgICAgdmFyIHJldCA9IHRyeUNhdGNoMyhjYWxsYmFjaywgcmVjZWl2ZXIsIHZhbHVlLCBpbmRleCwgbGVuZ3RoKTtcbiAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHJldHVybiB0aGlzLl9yZWplY3QocmV0LmUpO1xuXG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHJldCwgdm9pZCAwKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGltaXQgPj0gMSkgdGhpcy5faW5GbGlnaHQrKztcbiAgICAgICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gUEVORElORztcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF5YmVQcm9taXNlLl9wcm94eVByb21pc2VBcnJheSh0aGlzLCBpbmRleCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gbWF5YmVQcm9taXNlLnZhbHVlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWplY3QobWF5YmVQcm9taXNlLnJlYXNvbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gcmV0O1xuICAgIH1cbiAgICB2YXIgdG90YWxSZXNvbHZlZCA9ICsrdGhpcy5fdG90YWxSZXNvbHZlZDtcbiAgICBpZiAodG90YWxSZXNvbHZlZCA+PSBsZW5ndGgpIHtcbiAgICAgICAgaWYgKHByZXNlcnZlZFZhbHVlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyKHZhbHVlcywgcHJlc2VydmVkVmFsdWVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfVxuXG4gICAgfVxufTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUuX2RyYWluUXVldWUgPVxuZnVuY3Rpb24gTWFwcGluZ1Byb21pc2VBcnJheSRfZHJhaW5RdWV1ZSgpIHtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgbGltaXQgPSB0aGlzLl9saW1pdDtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwICYmIHRoaXMuX2luRmxpZ2h0IDwgbGltaXQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gcXVldWUucG9wKCk7XG4gICAgICAgIHRoaXMuX3Byb21pc2VGdWxmaWxsZWQodmFsdWVzW2luZGV4XSwgaW5kZXgpO1xuICAgIH1cbn07XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9maWx0ZXIgPVxuZnVuY3Rpb24gTWFwcGluZ1Byb21pc2VBcnJheSRfZmlsdGVyKGJvb2xlYW5zLCB2YWx1ZXMpIHtcbiAgICB2YXIgbGVuID0gdmFsdWVzLmxlbmd0aDtcbiAgICB2YXIgcmV0ID0gbmV3IEFycmF5KGxlbik7XG4gICAgdmFyIGogPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgaWYgKGJvb2xlYW5zW2ldKSByZXRbaisrXSA9IHZhbHVlc1tpXTtcbiAgICB9XG4gICAgcmV0Lmxlbmd0aCA9IGo7XG4gICAgdGhpcy5fcmVzb2x2ZShyZXQpO1xufTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUucHJlc2VydmVkVmFsdWVzID1cbmZ1bmN0aW9uIE1hcHBpbmdQcm9taXNlQXJyYXkkcHJlc2VydmVWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXNlcnZlZFZhbHVlcztcbn07XG5cbmZ1bmN0aW9uIG1hcChwcm9taXNlcywgZm4sIG9wdGlvbnMsIF9maWx0ZXIpIHtcbiAgICB2YXIgbGltaXQgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zICE9PSBudWxsXG4gICAgICAgID8gb3B0aW9ucy5jb25jdXJyZW5jeVxuICAgICAgICA6IDA7XG4gICAgbGltaXQgPSB0eXBlb2YgbGltaXQgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgaXNGaW5pdGUobGltaXQpICYmIGxpbWl0ID49IDEgPyBsaW1pdCA6IDA7XG4gICAgcmV0dXJuIG5ldyBNYXBwaW5nUHJvbWlzZUFycmF5KHByb21pc2VzLCBmbiwgbGltaXQsIF9maWx0ZXIpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiBQcm9taXNlJG1hcChmbiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGFwaVJlamVjdGlvbihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcblxuICAgIHJldHVybiBtYXAodGhpcywgZm4sIG9wdGlvbnMsIG51bGwpLnByb21pc2UoKTtcbn07XG5cblByb21pc2UubWFwID0gZnVuY3Rpb24gUHJvbWlzZSRNYXAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBfZmlsdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIHJldHVybiBtYXAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBfZmlsdGVyKS5wcm9taXNlKCk7XG59O1xuXG5cbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgYXN5bmMgPSByZXF1aXJlKFwiLi9hc3luYy5qc1wiKTtcbnZhciB0cnlDYXRjaDIgPSB1dGlsLnRyeUNhdGNoMjtcbnZhciB0cnlDYXRjaDEgPSB1dGlsLnRyeUNhdGNoMTtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG5cbmZ1bmN0aW9uIHRocm93ZXIocikge1xuICAgIHRocm93IHI7XG59XG5cbmZ1bmN0aW9uIFByb21pc2UkX3NwcmVhZEFkYXB0ZXIodmFsLCByZWNlaXZlcikge1xuICAgIGlmICghdXRpbC5pc0FycmF5KHZhbCkpIHJldHVybiBQcm9taXNlJF9zdWNjZXNzQWRhcHRlcih2YWwsIHJlY2VpdmVyKTtcbiAgICB2YXIgcmV0ID0gdXRpbC50cnlDYXRjaEFwcGx5KHRoaXMsIFtudWxsXS5jb25jYXQodmFsKSwgcmVjZWl2ZXIpO1xuICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIGFzeW5jLmludm9rZUxhdGVyKHRocm93ZXIsIHZvaWQgMCwgcmV0LmUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gUHJvbWlzZSRfc3VjY2Vzc0FkYXB0ZXIodmFsLCByZWNlaXZlcikge1xuICAgIHZhciBub2RlYmFjayA9IHRoaXM7XG4gICAgdmFyIHJldCA9IHZhbCA9PT0gdm9pZCAwXG4gICAgICAgID8gdHJ5Q2F0Y2gxKG5vZGViYWNrLCByZWNlaXZlciwgbnVsbClcbiAgICAgICAgOiB0cnlDYXRjaDIobm9kZWJhY2ssIHJlY2VpdmVyLCBudWxsLCB2YWwpO1xuICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIGFzeW5jLmludm9rZUxhdGVyKHRocm93ZXIsIHZvaWQgMCwgcmV0LmUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIFByb21pc2UkX2Vycm9yQWRhcHRlcihyZWFzb24sIHJlY2VpdmVyKSB7XG4gICAgdmFyIG5vZGViYWNrID0gdGhpcztcbiAgICB2YXIgcmV0ID0gdHJ5Q2F0Y2gxKG5vZGViYWNrLCByZWNlaXZlciwgcmVhc29uKTtcbiAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICBhc3luYy5pbnZva2VMYXRlcih0aHJvd2VyLCB2b2lkIDAsIHJldC5lKTtcbiAgICB9XG59XG5cblByb21pc2UucHJvdG90eXBlLm5vZGVpZnkgPSBmdW5jdGlvbiBQcm9taXNlJG5vZGVpZnkobm9kZWJhY2ssIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG5vZGViYWNrID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2YXIgYWRhcHRlciA9IFByb21pc2UkX3N1Y2Nlc3NBZGFwdGVyO1xuICAgICAgICBpZiAob3B0aW9ucyAhPT0gdm9pZCAwICYmIE9iamVjdChvcHRpb25zKS5zcHJlYWQpIHtcbiAgICAgICAgICAgIGFkYXB0ZXIgPSBQcm9taXNlJF9zcHJlYWRBZGFwdGVyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RoZW4oXG4gICAgICAgICAgICBhZGFwdGVyLFxuICAgICAgICAgICAgUHJvbWlzZSRfZXJyb3JBZGFwdGVyLFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgbm9kZWJhY2ssXG4gICAgICAgICAgICB0aGlzLl9ib3VuZFRvXG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBQcm9taXNlQXJyYXksIGFwaVJlamVjdGlvbiwgY2FzdCwgSU5URVJOQUwpIHtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciB0cnlDYXRjaDQgPSB1dGlsLnRyeUNhdGNoNDtcbnZhciB0cnlDYXRjaDMgPSB1dGlsLnRyeUNhdGNoMztcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG5mdW5jdGlvbiBSZWR1Y3Rpb25Qcm9taXNlQXJyYXkocHJvbWlzZXMsIGZuLCBhY2N1bSwgX2VhY2gpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yJChwcm9taXNlcyk7XG4gICAgdGhpcy5fcHJlc2VydmVkVmFsdWVzID0gX2VhY2ggPT09IElOVEVSTkFMID8gW10gOiBudWxsO1xuICAgIHRoaXMuX3plcm90aElzQWNjdW0gPSAoYWNjdW0gPT09IHZvaWQgMCk7XG4gICAgdGhpcy5fZ290QWNjdW0gPSBmYWxzZTtcbiAgICB0aGlzLl9yZWR1Y2luZ0luZGV4ID0gKHRoaXMuX3plcm90aElzQWNjdW0gPyAxIDogMCk7XG4gICAgdGhpcy5fdmFsdWVzUGhhc2UgPSB1bmRlZmluZWQ7XG5cbiAgICB2YXIgbWF5YmVQcm9taXNlID0gY2FzdChhY2N1bSwgdm9pZCAwKTtcbiAgICB2YXIgcmVqZWN0ZWQgPSBmYWxzZTtcbiAgICB2YXIgaXNQcm9taXNlID0gbWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZTtcbiAgICBpZiAoaXNQcm9taXNlKSB7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fcHJveHlQcm9taXNlQXJyYXkodGhpcywgLTEpO1xuICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICBhY2N1bSA9IG1heWJlUHJvbWlzZS52YWx1ZSgpO1xuICAgICAgICAgICAgdGhpcy5fZ290QWNjdW0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF5YmVQcm9taXNlLl91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3QobWF5YmVQcm9taXNlLnJlYXNvbigpKTtcbiAgICAgICAgICAgIHJlamVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIShpc1Byb21pc2UgfHwgdGhpcy5femVyb3RoSXNBY2N1bSkpIHRoaXMuX2dvdEFjY3VtID0gdHJ1ZTtcbiAgICB0aGlzLl9jYWxsYmFjayA9IGZuO1xuICAgIHRoaXMuX2FjY3VtID0gYWNjdW07XG4gICAgaWYgKCFyZWplY3RlZCkgdGhpcy5faW5pdCQodm9pZCAwLCAtNSk7XG59XG51dGlsLmluaGVyaXRzKFJlZHVjdGlvblByb21pc2VBcnJheSwgUHJvbWlzZUFycmF5KTtcblxuUmVkdWN0aW9uUHJvbWlzZUFycmF5LnByb3RvdHlwZS5faW5pdCA9XG5mdW5jdGlvbiBSZWR1Y3Rpb25Qcm9taXNlQXJyYXkkX2luaXQoKSB7fTtcblxuUmVkdWN0aW9uUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVzb2x2ZUVtcHR5QXJyYXkgPVxuZnVuY3Rpb24gUmVkdWN0aW9uUHJvbWlzZUFycmF5JF9yZXNvbHZlRW1wdHlBcnJheSgpIHtcbiAgICBpZiAodGhpcy5fZ290QWNjdW0gfHwgdGhpcy5femVyb3RoSXNBY2N1bSkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ByZXNlcnZlZFZhbHVlcyAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbXSA6IHRoaXMuX2FjY3VtKTtcbiAgICB9XG59O1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID1cbmZ1bmN0aW9uIFJlZHVjdGlvblByb21pc2VBcnJheSRfcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgaW5kZXgpIHtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIGlmICh2YWx1ZXMgPT09IG51bGwpIHJldHVybjtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcbiAgICB2YXIgcHJlc2VydmVkVmFsdWVzID0gdGhpcy5fcHJlc2VydmVkVmFsdWVzO1xuICAgIHZhciBpc0VhY2ggPSBwcmVzZXJ2ZWRWYWx1ZXMgIT09IG51bGw7XG4gICAgdmFyIGdvdEFjY3VtID0gdGhpcy5fZ290QWNjdW07XG4gICAgdmFyIHZhbHVlc1BoYXNlID0gdGhpcy5fdmFsdWVzUGhhc2U7XG4gICAgdmFyIHZhbHVlc1BoYXNlSW5kZXg7XG4gICAgaWYgKCF2YWx1ZXNQaGFzZSkge1xuICAgICAgICB2YWx1ZXNQaGFzZSA9IHRoaXMuX3ZhbHVlc1BoYXNlID0gQXJyYXkobGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YWx1ZXNQaGFzZUluZGV4PTA7IHZhbHVlc1BoYXNlSW5kZXg8bGVuZ3RoOyArK3ZhbHVlc1BoYXNlSW5kZXgpIHtcbiAgICAgICAgICAgIHZhbHVlc1BoYXNlW3ZhbHVlc1BoYXNlSW5kZXhdID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZXNQaGFzZUluZGV4ID0gdmFsdWVzUGhhc2VbaW5kZXhdO1xuXG4gICAgaWYgKGluZGV4ID09PSAwICYmIHRoaXMuX3plcm90aElzQWNjdW0pIHtcbiAgICAgICAgaWYgKCFnb3RBY2N1bSkge1xuICAgICAgICAgICAgdGhpcy5fYWNjdW0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX2dvdEFjY3VtID0gZ290QWNjdW0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlc1BoYXNlW2luZGV4XSA9ICgodmFsdWVzUGhhc2VJbmRleCA9PT0gMClcbiAgICAgICAgICAgID8gMSA6IDIpO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGlmICghZ290QWNjdW0pIHtcbiAgICAgICAgICAgIHRoaXMuX2FjY3VtID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9nb3RBY2N1bSA9IGdvdEFjY3VtID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh2YWx1ZXNQaGFzZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB2YWx1ZXNQaGFzZVtpbmRleF0gPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzUGhhc2VbaW5kZXhdID0gMjtcbiAgICAgICAgICAgIGlmIChnb3RBY2N1bSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjY3VtID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFnb3RBY2N1bSkgcmV0dXJuO1xuXG4gICAgdmFyIGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2s7XG4gICAgdmFyIHJlY2VpdmVyID0gdGhpcy5fcHJvbWlzZS5fYm91bmRUbztcbiAgICB2YXIgcmV0O1xuXG4gICAgZm9yICh2YXIgaSA9IHRoaXMuX3JlZHVjaW5nSW5kZXg7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICB2YWx1ZXNQaGFzZUluZGV4ID0gdmFsdWVzUGhhc2VbaV07XG4gICAgICAgIGlmICh2YWx1ZXNQaGFzZUluZGV4ID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWR1Y2luZ0luZGV4ID0gaSArIDE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVzUGhhc2VJbmRleCAhPT0gMSkgcmV0dXJuO1xuXG4gICAgICAgIHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuX3NldHRsZWRWYWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlLl91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlamVjdCh2YWx1ZS5yZWFzb24oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFYWNoKSB7XG4gICAgICAgICAgICBwcmVzZXJ2ZWRWYWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICByZXQgPSB0cnlDYXRjaDMoY2FsbGJhY2ssIHJlY2VpdmVyLCB2YWx1ZSwgaSwgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldCA9IHRyeUNhdGNoNChjYWxsYmFjaywgcmVjZWl2ZXIsIHRoaXMuX2FjY3VtLCB2YWx1ZSwgaSwgbGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSByZXR1cm4gdGhpcy5fcmVqZWN0KHJldC5lKTtcblxuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gY2FzdChyZXQsIHZvaWQgMCk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlLmlzUGVuZGluZygpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzUGhhc2VbaV0gPSA0O1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXliZVByb21pc2UuX3Byb3h5UHJvbWlzZUFycmF5KHRoaXMsIGkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXliZVByb21pc2UuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgIHJldCA9IG1heWJlUHJvbWlzZS52YWx1ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVqZWN0KG1heWJlUHJvbWlzZS5yZWFzb24oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yZWR1Y2luZ0luZGV4ID0gaSArIDE7XG4gICAgICAgIHRoaXMuX2FjY3VtID0gcmV0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9yZWR1Y2luZ0luZGV4IDwgbGVuZ3RoKSByZXR1cm47XG4gICAgdGhpcy5fcmVzb2x2ZShpc0VhY2ggPyBwcmVzZXJ2ZWRWYWx1ZXMgOiB0aGlzLl9hY2N1bSk7XG59O1xuXG5mdW5jdGlvbiByZWR1Y2UocHJvbWlzZXMsIGZuLCBpbml0aWFsVmFsdWUsIF9lYWNoKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIHZhciBhcnJheSA9IG5ldyBSZWR1Y3Rpb25Qcm9taXNlQXJyYXkocHJvbWlzZXMsIGZuLCBpbml0aWFsVmFsdWUsIF9lYWNoKTtcbiAgICByZXR1cm4gYXJyYXkucHJvbWlzZSgpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbiBQcm9taXNlJHJlZHVjZShmbiwgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHJlZHVjZSh0aGlzLCBmbiwgaW5pdGlhbFZhbHVlLCBudWxsKTtcbn07XG5cblByb21pc2UucmVkdWNlID0gZnVuY3Rpb24gUHJvbWlzZSRSZWR1Y2UocHJvbWlzZXMsIGZuLCBpbml0aWFsVmFsdWUsIF9lYWNoKSB7XG4gICAgcmV0dXJuIHJlZHVjZShwcm9taXNlcywgZm4sIGluaXRpYWxWYWx1ZSwgX2VhY2gpO1xufTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPVxuICAgIGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSkge1xudmFyIFByb21pc2VJbnNwZWN0aW9uID0gUHJvbWlzZS5Qcm9taXNlSW5zcGVjdGlvbjtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcblxuZnVuY3Rpb24gU2V0dGxlZFByb21pc2VBcnJheSh2YWx1ZXMpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yJCh2YWx1ZXMpO1xufVxudXRpbC5pbmhlcml0cyhTZXR0bGVkUHJvbWlzZUFycmF5LCBQcm9taXNlQXJyYXkpO1xuXG5TZXR0bGVkUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVJlc29sdmVkID1cbmZ1bmN0aW9uIFNldHRsZWRQcm9taXNlQXJyYXkkX3Byb21pc2VSZXNvbHZlZChpbmRleCwgaW5zcGVjdGlvbikge1xuICAgIHRoaXMuX3ZhbHVlc1tpbmRleF0gPSBpbnNwZWN0aW9uO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ZhbHVlcyk7XG4gICAgfVxufTtcblxuU2V0dGxlZFByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPVxuZnVuY3Rpb24gU2V0dGxlZFByb21pc2VBcnJheSRfcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlSW5zcGVjdGlvbigpO1xuICAgIHJldC5fYml0RmllbGQgPSAyNjg0MzU0NTY7XG4gICAgcmV0Ll9zZXR0bGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9wcm9taXNlUmVzb2x2ZWQoaW5kZXgsIHJldCk7XG59O1xuU2V0dGxlZFByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VSZWplY3RlZCA9XG5mdW5jdGlvbiBTZXR0bGVkUHJvbWlzZUFycmF5JF9wcm9taXNlUmVqZWN0ZWQocmVhc29uLCBpbmRleCkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2VJbnNwZWN0aW9uKCk7XG4gICAgcmV0Ll9iaXRGaWVsZCA9IDEzNDIxNzcyODtcbiAgICByZXQuX3NldHRsZWRWYWx1ZSA9IHJlYXNvbjtcbiAgICB0aGlzLl9wcm9taXNlUmVzb2x2ZWQoaW5kZXgsIHJldCk7XG59O1xuXG5Qcm9taXNlLnNldHRsZSA9IGZ1bmN0aW9uIFByb21pc2UkU2V0dGxlKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIG5ldyBTZXR0bGVkUHJvbWlzZUFycmF5KHByb21pc2VzKS5wcm9taXNlKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zZXR0bGUgPSBmdW5jdGlvbiBQcm9taXNlJHNldHRsZSgpIHtcbiAgICByZXR1cm4gbmV3IFNldHRsZWRQcm9taXNlQXJyYXkodGhpcykucHJvbWlzZSgpO1xufTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPVxuZnVuY3Rpb24oUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBhcGlSZWplY3Rpb24pIHtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBSYW5nZUVycm9yID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpLlJhbmdlRXJyb3I7XG52YXIgQWdncmVnYXRlRXJyb3IgPSByZXF1aXJlKFwiLi9lcnJvcnMuanNcIikuQWdncmVnYXRlRXJyb3I7XG52YXIgaXNBcnJheSA9IHV0aWwuaXNBcnJheTtcblxuXG5mdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5KHZhbHVlcykge1xuICAgIHRoaXMuY29uc3RydWN0b3IkKHZhbHVlcyk7XG4gICAgdGhpcy5faG93TWFueSA9IDA7XG4gICAgdGhpcy5fdW53cmFwID0gZmFsc2U7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSBmYWxzZTtcbn1cbnV0aWwuaW5oZXJpdHMoU29tZVByb21pc2VBcnJheSwgUHJvbWlzZUFycmF5KTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5JF9pbml0KCkge1xuICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5faG93TWFueSA9PT0gMCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKFtdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9pbml0JCh2b2lkIDAsIC01KTtcbiAgICB2YXIgaXNBcnJheVJlc29sdmVkID0gaXNBcnJheSh0aGlzLl92YWx1ZXMpO1xuICAgIGlmICghdGhpcy5faXNSZXNvbHZlZCgpICYmXG4gICAgICAgIGlzQXJyYXlSZXNvbHZlZCAmJlxuICAgICAgICB0aGlzLl9ob3dNYW55ID4gdGhpcy5fY2FuUG9zc2libHlGdWxmaWxsKCkpIHtcbiAgICAgICAgdGhpcy5fcmVqZWN0KHRoaXMuX2dldFJhbmdlRXJyb3IodGhpcy5sZW5ndGgoKSkpO1xuICAgIH1cbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5JGluaXQoKSB7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2luaXQoKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLnNldFVud3JhcCA9IGZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkc2V0VW53cmFwKCkge1xuICAgIHRoaXMuX3Vud3JhcCA9IHRydWU7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5ob3dNYW55ID0gZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRob3dNYW55KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3dNYW55O1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuc2V0SG93TWFueSA9XG5mdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5JHNldEhvd01hbnkoY291bnQpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5faG93TWFueSA9IGNvdW50O1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPVxuZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRfcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcbiAgICB0aGlzLl9hZGRGdWxmaWxsZWQodmFsdWUpO1xuICAgIGlmICh0aGlzLl9mdWxmaWxsZWQoKSA9PT0gdGhpcy5ob3dNYW55KCkpIHtcbiAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aCA9IHRoaXMuaG93TWFueSgpO1xuICAgICAgICBpZiAodGhpcy5ob3dNYW55KCkgPT09IDEgJiYgdGhpcy5fdW53cmFwKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ZhbHVlc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ZhbHVlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVJlamVjdGVkID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX3Byb21pc2VSZWplY3RlZChyZWFzb24pIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fYWRkUmVqZWN0ZWQocmVhc29uKTtcbiAgICBpZiAodGhpcy5ob3dNYW55KCkgPiB0aGlzLl9jYW5Qb3NzaWJseUZ1bGZpbGwoKSkge1xuICAgICAgICB2YXIgZSA9IG5ldyBBZ2dyZWdhdGVFcnJvcigpO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5sZW5ndGgoKTsgaSA8IHRoaXMuX3ZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgZS5wdXNoKHRoaXMuX3ZhbHVlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVqZWN0KGUpO1xuICAgIH1cbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9mdWxmaWxsZWQgPSBmdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5JF9mdWxmaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsUmVzb2x2ZWQ7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVqZWN0ZWQgPSBmdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5JF9yZWplY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVzLmxlbmd0aCAtIHRoaXMubGVuZ3RoKCk7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fYWRkUmVqZWN0ZWQgPVxuZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRfYWRkUmVqZWN0ZWQocmVhc29uKSB7XG4gICAgdGhpcy5fdmFsdWVzLnB1c2gocmVhc29uKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9hZGRGdWxmaWxsZWQgPVxuZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRfYWRkRnVsZmlsbGVkKHZhbHVlKSB7XG4gICAgdGhpcy5fdmFsdWVzW3RoaXMuX3RvdGFsUmVzb2x2ZWQrK10gPSB2YWx1ZTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9jYW5Qb3NzaWJseUZ1bGZpbGwgPVxuZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRfY2FuUG9zc2libHlGdWxmaWxsKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCgpIC0gdGhpcy5fcmVqZWN0ZWQoKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9nZXRSYW5nZUVycm9yID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX2dldFJhbmdlRXJyb3IoY291bnQpIHtcbiAgICB2YXIgbWVzc2FnZSA9IFwiSW5wdXQgYXJyYXkgbXVzdCBjb250YWluIGF0IGxlYXN0IFwiICtcbiAgICAgICAgICAgIHRoaXMuX2hvd01hbnkgKyBcIiBpdGVtcyBidXQgY29udGFpbnMgb25seSBcIiArIGNvdW50ICsgXCIgaXRlbXNcIjtcbiAgICByZXR1cm4gbmV3IFJhbmdlRXJyb3IobWVzc2FnZSk7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVzb2x2ZUVtcHR5QXJyYXkgPVxuZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRfcmVzb2x2ZUVtcHR5QXJyYXkoKSB7XG4gICAgdGhpcy5fcmVqZWN0KHRoaXMuX2dldFJhbmdlRXJyb3IoMCkpO1xufTtcblxuZnVuY3Rpb24gUHJvbWlzZSRfU29tZShwcm9taXNlcywgaG93TWFueSkge1xuICAgIGlmICgoaG93TWFueSB8IDApICE9PSBob3dNYW55IHx8IGhvd01hbnkgPCAwKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJleHBlY3RpbmcgYSBwb3NpdGl2ZSBpbnRlZ2VyXCIpO1xuICAgIH1cbiAgICB2YXIgcmV0ID0gbmV3IFNvbWVQcm9taXNlQXJyYXkocHJvbWlzZXMpO1xuICAgIHZhciBwcm9taXNlID0gcmV0LnByb21pc2UoKTtcbiAgICBpZiAocHJvbWlzZS5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHJldC5zZXRIb3dNYW55KGhvd01hbnkpO1xuICAgIHJldC5pbml0KCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cblByb21pc2Uuc29tZSA9IGZ1bmN0aW9uIFByb21pc2UkU29tZShwcm9taXNlcywgaG93TWFueSkge1xuICAgIHJldHVybiBQcm9taXNlJF9Tb21lKHByb21pc2VzLCBob3dNYW55KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnNvbWUgPSBmdW5jdGlvbiBQcm9taXNlJHNvbWUoaG93TWFueSkge1xuICAgIHJldHVybiBQcm9taXNlJF9Tb21lKHRoaXMsIGhvd01hbnkpO1xufTtcblxuUHJvbWlzZS5fU29tZVByb21pc2VBcnJheSA9IFNvbWVQcm9taXNlQXJyYXk7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgUHJvbWlzZUFycmF5KSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgYXN5bmMgPSByZXF1aXJlKFwiLi9hc3luYy5qc1wiKTtcbnZhciBlcnJvcnMgPSByZXF1aXJlKFwiLi9lcnJvcnMuanNcIik7XG52YXIgdHJ5Q2F0Y2gxID0gdXRpbC50cnlDYXRjaDE7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuXG5Qcm9taXNlLnByb3RvdHlwZS5wcm9ncmVzc2VkID0gZnVuY3Rpb24gUHJvbWlzZSRwcm9ncmVzc2VkKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbih2b2lkIDAsIHZvaWQgMCwgaGFuZGxlciwgdm9pZCAwLCB2b2lkIDApO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb2dyZXNzID0gZnVuY3Rpb24gUHJvbWlzZSRfcHJvZ3Jlc3MocHJvZ3Jlc3NWYWx1ZSkge1xuICAgIGlmICh0aGlzLl9pc0ZvbGxvd2luZ09yRnVsZmlsbGVkT3JSZWplY3RlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fcHJvZ3Jlc3NVbmNoZWNrZWQocHJvZ3Jlc3NWYWx1ZSk7XG5cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm9ncmVzc0hhbmRsZXJBdCA9XG5mdW5jdGlvbiBQcm9taXNlJF9wcm9ncmVzc0hhbmRsZXJBdChpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA9PT0gMFxuICAgICAgICA/IHRoaXMuX3Byb2dyZXNzSGFuZGxlcjBcbiAgICAgICAgOiB0aGlzWyhpbmRleCA8PCAyKSArIGluZGV4IC0gNSArIDJdO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2RvUHJvZ3Jlc3NXaXRoID1cbmZ1bmN0aW9uIFByb21pc2UkX2RvUHJvZ3Jlc3NXaXRoKHByb2dyZXNzaW9uKSB7XG4gICAgdmFyIHByb2dyZXNzVmFsdWUgPSBwcm9ncmVzc2lvbi52YWx1ZTtcbiAgICB2YXIgaGFuZGxlciA9IHByb2dyZXNzaW9uLmhhbmRsZXI7XG4gICAgdmFyIHByb21pc2UgPSBwcm9ncmVzc2lvbi5wcm9taXNlO1xuICAgIHZhciByZWNlaXZlciA9IHByb2dyZXNzaW9uLnJlY2VpdmVyO1xuXG4gICAgdmFyIHJldCA9IHRyeUNhdGNoMShoYW5kbGVyLCByZWNlaXZlciwgcHJvZ3Jlc3NWYWx1ZSk7XG4gICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgaWYgKHJldC5lICE9IG51bGwgJiZcbiAgICAgICAgICAgIHJldC5lLm5hbWUgIT09IFwiU3RvcFByb2dyZXNzUHJvcGFnYXRpb25cIikge1xuICAgICAgICAgICAgdmFyIHRyYWNlID0gZXJyb3JzLmNhbkF0dGFjaChyZXQuZSlcbiAgICAgICAgICAgICAgICA/IHJldC5lIDogbmV3IEVycm9yKHJldC5lICsgXCJcIik7XG4gICAgICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX3Byb2dyZXNzKHJldC5lKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmV0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXQuX3RoZW4ocHJvbWlzZS5fcHJvZ3Jlc3MsIG51bGwsIG51bGwsIHByb21pc2UsIHZvaWQgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZS5fcHJvZ3Jlc3MocmV0KTtcbiAgICB9XG59O1xuXG5cblByb21pc2UucHJvdG90eXBlLl9wcm9ncmVzc1VuY2hlY2tlZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9wcm9ncmVzc1VuY2hlY2tlZChwcm9ncmVzc1ZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmlzUGVuZGluZygpKSByZXR1cm47XG4gICAgdmFyIGxlbiA9IHRoaXMuX2xlbmd0aCgpO1xuICAgIHZhciBwcm9ncmVzcyA9IHRoaXMuX3Byb2dyZXNzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLl9wcm9ncmVzc0hhbmRsZXJBdChpKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlQXQoaSk7XG4gICAgICAgIGlmICghKHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgICAgICAgdmFyIHJlY2VpdmVyID0gdGhpcy5fcmVjZWl2ZXJBdChpKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKHJlY2VpdmVyLCBwcm9ncmVzc1ZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjZWl2ZXIgaW5zdGFuY2VvZiBQcm9taXNlICYmIHJlY2VpdmVyLl9pc1Byb3hpZWQoKSkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyLl9wcm9ncmVzc1VuY2hlY2tlZChwcm9ncmVzc1ZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjZWl2ZXIgaW5zdGFuY2VvZiBQcm9taXNlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlci5fcHJvbWlzZVByb2dyZXNzZWQocHJvZ3Jlc3NWYWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBhc3luYy5pbnZva2UodGhpcy5fZG9Qcm9ncmVzc1dpdGgsIHRoaXMsIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICAgICAgICAgIHByb21pc2U6IHByb21pc2UsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZXI6IHRoaXMuX3JlY2VpdmVyQXQoaSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb2dyZXNzVmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXN5bmMuaW52b2tlKHByb2dyZXNzLCBwcm9taXNlLCBwcm9ncmVzc1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwpIHtcbnZhciBlcnJvcnMgPSByZXF1aXJlKFwiLi9lcnJvcnMuanNcIik7XG52YXIgY2FuQXR0YWNoID0gZXJyb3JzLmNhbkF0dGFjaDtcbnZhciBhc3luYyA9IHJlcXVpcmUoXCIuL2FzeW5jLmpzXCIpO1xudmFyIENhbmNlbGxhdGlvbkVycm9yID0gZXJyb3JzLkNhbmNlbGxhdGlvbkVycm9yO1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FuY2VsID0gZnVuY3Rpb24gUHJvbWlzZSRfY2FuY2VsKHJlYXNvbikge1xuICAgIGlmICghdGhpcy5pc0NhbmNlbGxhYmxlKCkpIHJldHVybiB0aGlzO1xuICAgIHZhciBwYXJlbnQ7XG4gICAgdmFyIHByb21pc2VUb1JlamVjdCA9IHRoaXM7XG4gICAgd2hpbGUgKChwYXJlbnQgPSBwcm9taXNlVG9SZWplY3QuX2NhbmNlbGxhdGlvblBhcmVudCkgIT09IHZvaWQgMCAmJlxuICAgICAgICBwYXJlbnQuaXNDYW5jZWxsYWJsZSgpKSB7XG4gICAgICAgIHByb21pc2VUb1JlamVjdCA9IHBhcmVudDtcbiAgICB9XG4gICAgcHJvbWlzZVRvUmVqZWN0Ll9hdHRhY2hFeHRyYVRyYWNlKHJlYXNvbik7XG4gICAgcHJvbWlzZVRvUmVqZWN0Ll9yZWplY3RVbmNoZWNrZWQocmVhc29uKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uIFByb21pc2UkY2FuY2VsKHJlYXNvbikge1xuICAgIGlmICghdGhpcy5pc0NhbmNlbGxhYmxlKCkpIHJldHVybiB0aGlzO1xuICAgIHJlYXNvbiA9IHJlYXNvbiAhPT0gdm9pZCAwXG4gICAgICAgID8gKGNhbkF0dGFjaChyZWFzb24pID8gcmVhc29uIDogbmV3IEVycm9yKHJlYXNvbiArIFwiXCIpKVxuICAgICAgICA6IG5ldyBDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgIGFzeW5jLmludm9rZUxhdGVyKHRoaXMuX2NhbmNlbCwgdGhpcywgcmVhc29uKTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cblByb21pc2UucHJvdG90eXBlLmNhbmNlbGxhYmxlID0gZnVuY3Rpb24gUHJvbWlzZSRjYW5jZWxsYWJsZSgpIHtcbiAgICBpZiAodGhpcy5fY2FuY2VsbGFibGUoKSkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5fc2V0Q2FuY2VsbGFibGUoKTtcbiAgICB0aGlzLl9jYW5jZWxsYXRpb25QYXJlbnQgPSB2b2lkIDA7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS51bmNhbmNlbGxhYmxlID0gZnVuY3Rpb24gUHJvbWlzZSR1bmNhbmNlbGxhYmxlKCkge1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcmV0Ll9wcm9wYWdhdGVGcm9tKHRoaXMsIDIgfCA0KTtcbiAgICByZXQuX2ZvbGxvdyh0aGlzKTtcbiAgICByZXQuX3Vuc2V0Q2FuY2VsbGFibGUoKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZm9yayA9XG5mdW5jdGlvbiBQcm9taXNlJGZvcmsoZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCBkaWRQcm9ncmVzcykge1xuICAgIHZhciByZXQgPSB0aGlzLl90aGVuKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwLCB2b2lkIDApO1xuXG4gICAgcmV0Ll9zZXRDYW5jZWxsYWJsZSgpO1xuICAgIHJldC5fY2FuY2VsbGF0aW9uUGFyZW50ID0gdm9pZCAwO1xuICAgIHJldHVybiByZXQ7XG59O1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChQcm9taXNlLCBhcGlSZWplY3Rpb24sIGNhc3QpIHtcbiAgICB2YXIgVHlwZUVycm9yID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpLlR5cGVFcnJvcjtcbiAgICB2YXIgaW5oZXJpdHMgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpLmluaGVyaXRzO1xuICAgIHZhciBQcm9taXNlSW5zcGVjdGlvbiA9IFByb21pc2UuUHJvbWlzZUluc3BlY3Rpb247XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0aW9uTWFwcGVyKGluc3BlY3Rpb25zKSB7XG4gICAgICAgIHZhciBsZW4gPSBpbnNwZWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBpbnNwZWN0aW9uID0gaW5zcGVjdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAoaW5zcGVjdGlvbi5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoaW5zcGVjdGlvbi5lcnJvcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluc3BlY3Rpb25zW2ldID0gaW5zcGVjdGlvbi52YWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnNwZWN0aW9ucztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aHJvd2VyKGUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGU7fSwgMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcG9zZShyZXNvdXJjZXMsIGluc3BlY3Rpb24pIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgbGVuID0gcmVzb3VyY2VzLmxlbmd0aDtcbiAgICAgICAgdmFyIHJldCA9IFByb21pc2UuZGVmZXIoKTtcbiAgICAgICAgZnVuY3Rpb24gaXRlcmF0b3IoKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSBsZW4pIHJldHVybiByZXQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QocmVzb3VyY2VzW2krK10sIHZvaWQgMCk7XG4gICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSAmJlxuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5faXNEaXNwb3NhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UgPSBjYXN0KG1heWJlUHJvbWlzZS5fZ2V0RGlzcG9zZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cnlEaXNwb3NlKGluc3BlY3Rpb24pLCB2b2lkIDApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93ZXIoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXliZVByb21pc2UuX3RoZW4oaXRlcmF0b3IsIHRocm93ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlcmF0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVyYXRvcigpO1xuICAgICAgICByZXR1cm4gcmV0LnByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcG9zZXJTdWNjZXNzKHZhbHVlKSB7XG4gICAgICAgIHZhciBpbnNwZWN0aW9uID0gbmV3IFByb21pc2VJbnNwZWN0aW9uKCk7XG4gICAgICAgIGluc3BlY3Rpb24uX3NldHRsZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBpbnNwZWN0aW9uLl9iaXRGaWVsZCA9IDI2ODQzNTQ1NjtcbiAgICAgICAgcmV0dXJuIGRpc3Bvc2UodGhpcywgaW5zcGVjdGlvbikudGhlblJldHVybih2YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcG9zZXJGYWlsKHJlYXNvbikge1xuICAgICAgICB2YXIgaW5zcGVjdGlvbiA9IG5ldyBQcm9taXNlSW5zcGVjdGlvbigpO1xuICAgICAgICBpbnNwZWN0aW9uLl9zZXR0bGVkVmFsdWUgPSByZWFzb247XG4gICAgICAgIGluc3BlY3Rpb24uX2JpdEZpZWxkID0gMTM0MjE3NzI4O1xuICAgICAgICByZXR1cm4gZGlzcG9zZSh0aGlzLCBpbnNwZWN0aW9uKS50aGVuVGhyb3cocmVhc29uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBEaXNwb3NlcihkYXRhLCBwcm9taXNlKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLl9wcm9taXNlID0gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uIERpc3Bvc2VyJGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uIERpc3Bvc2VyJHByb21pc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUucmVzb3VyY2UgPSBmdW5jdGlvbiBEaXNwb3NlciRyZXNvdXJjZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvbWlzZSgpLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21pc2UoKS52YWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUudHJ5RGlzcG9zZSA9IGZ1bmN0aW9uKGluc3BlY3Rpb24pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gdGhpcy5yZXNvdXJjZSgpO1xuICAgICAgICB2YXIgcmV0ID0gcmVzb3VyY2UgIT09IG51bGxcbiAgICAgICAgICAgID8gdGhpcy5kb0Rpc3Bvc2UocmVzb3VyY2UsIGluc3BlY3Rpb24pIDogbnVsbDtcbiAgICAgICAgdGhpcy5fcHJvbWlzZS5fdW5zZXREaXNwb3NhYmxlKCk7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9wcm9taXNlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gRnVuY3Rpb25EaXNwb3NlcihmbiwgcHJvbWlzZSkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yJChmbiwgcHJvbWlzZSk7XG4gICAgfVxuICAgIGluaGVyaXRzKEZ1bmN0aW9uRGlzcG9zZXIsIERpc3Bvc2VyKTtcblxuICAgIEZ1bmN0aW9uRGlzcG9zZXIucHJvdG90eXBlLmRvRGlzcG9zZSA9IGZ1bmN0aW9uIChyZXNvdXJjZSwgaW5zcGVjdGlvbikge1xuICAgICAgICB2YXIgZm4gPSB0aGlzLmRhdGEoKTtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwocmVzb3VyY2UsIHJlc291cmNlLCBpbnNwZWN0aW9uKTtcbiAgICB9O1xuXG4gICAgUHJvbWlzZS51c2luZyA9IGZ1bmN0aW9uIFByb21pc2UkdXNpbmcoKSB7XG4gICAgICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuIDwgMikgcmV0dXJuIGFwaVJlamVjdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieW91IG11c3QgcGFzcyBhdCBsZWFzdCAyIGFyZ3VtZW50cyB0byBQcm9taXNlLnVzaW5nXCIpO1xuICAgICAgICB2YXIgZm4gPSBhcmd1bWVudHNbbGVuIC0gMV07XG4gICAgICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGFwaVJlamVjdGlvbihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgbGVuLS07XG4gICAgICAgIHZhciByZXNvdXJjZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlIGluc3RhbmNlb2YgRGlzcG9zZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzcG9zZXIgPSByZXNvdXJjZTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlLnByb21pc2UoKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5fc2V0RGlzcG9zYWJsZShkaXNwb3Nlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvdXJjZXNbaV0gPSByZXNvdXJjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnNldHRsZShyZXNvdXJjZXMpXG4gICAgICAgICAgICAudGhlbihpbnNwZWN0aW9uTWFwcGVyKVxuICAgICAgICAgICAgLnNwcmVhZChmbilcbiAgICAgICAgICAgIC5fdGhlbihkaXNwb3NlclN1Y2Nlc3MsIGRpc3Bvc2VyRmFpbCwgdm9pZCAwLCByZXNvdXJjZXMsIHZvaWQgMCk7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLl9zZXREaXNwb3NhYmxlID1cbiAgICBmdW5jdGlvbiBQcm9taXNlJF9zZXREaXNwb3NhYmxlKGRpc3Bvc2VyKSB7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAyNjIxNDQ7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VyID0gZGlzcG9zZXI7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLl9pc0Rpc3Bvc2FibGUgPSBmdW5jdGlvbiBQcm9taXNlJF9pc0Rpc3Bvc2FibGUoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAyNjIxNDQpID4gMDtcbiAgICB9O1xuXG4gICAgUHJvbWlzZS5wcm90b3R5cGUuX2dldERpc3Bvc2VyID0gZnVuY3Rpb24gUHJvbWlzZSRfZ2V0RGlzcG9zZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNwb3NlcjtcbiAgICB9O1xuXG4gICAgUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uIFByb21pc2UkX3Vuc2V0RGlzcG9zYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+MjYyMTQ0KTtcbiAgICAgICAgdGhpcy5fZGlzcG9zZXIgPSB2b2lkIDA7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLmRpc3Bvc2VyID0gZnVuY3Rpb24gUHJvbWlzZSRkaXNwb3Nlcihmbikge1xuICAgICAgICBpZiAodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb25EaXNwb3NlcihmbiwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgIH07XG5cbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgVHlwZUVycm9yID0gcmVxdWlyZSgnLi9lcnJvcnMuanMnKS5UeXBlRXJyb3I7XG5cbmZ1bmN0aW9uIGFwaVJlamVjdGlvbihtc2cpIHtcbiAgICB2YXIgZXJyb3IgPSBuZXcgVHlwZUVycm9yKG1zZyk7XG4gICAgdmFyIHJldCA9IFByb21pc2UucmVqZWN0ZWQoZXJyb3IpO1xuICAgIHZhciBwYXJlbnQgPSByZXQuX3BlZWtDb250ZXh0KCk7XG4gICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudC5fYXR0YWNoRXh0cmFUcmFjZShlcnJvcik7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbnJldHVybiBhcGlSZWplY3Rpb247XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBfc2V0VGltZW91dCA9IGZ1bmN0aW9uKGZuLCBtcykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBhcmcwID0gYXJndW1lbnRzWzJdO1xuICAgIHZhciBhcmcxID0gYXJndW1lbnRzWzNdO1xuICAgIHZhciBhcmcyID0gbGVuID49IDUgPyBhcmd1bWVudHNbNF0gOiB2b2lkIDA7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZm4oYXJnMCwgYXJnMSwgYXJnMik7XG4gICAgfSwgbXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCwgY2FzdCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGVycm9ycyA9IHJlcXVpcmUoXCIuL2Vycm9ycy5qc1wiKTtcbnZhciBhcGlSZWplY3Rpb24gPSByZXF1aXJlKFwiLi9lcnJvcnNfYXBpX3JlamVjdGlvblwiKShQcm9taXNlKTtcbnZhciBUaW1lb3V0RXJyb3IgPSBQcm9taXNlLlRpbWVvdXRFcnJvcjtcblxudmFyIGFmdGVyVGltZW91dCA9IGZ1bmN0aW9uIFByb21pc2UkX2FmdGVyVGltZW91dChwcm9taXNlLCBtZXNzYWdlLCBtcykge1xuICAgIGlmICghcHJvbWlzZS5pc1BlbmRpbmcoKSkgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBtZXNzYWdlID0gXCJvcGVyYXRpb24gdGltZWQgb3V0IGFmdGVyXCIgKyBcIiBcIiArIG1zICsgXCIgbXNcIlxuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IFRpbWVvdXRFcnJvcihtZXNzYWdlKTtcbiAgICBlcnJvcnMubWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKGVycik7XG4gICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZShlcnIpO1xuICAgIHByb21pc2UuX2NhbmNlbChlcnIpO1xufTtcblxudmFyIGFmdGVyRGVsYXkgPSBmdW5jdGlvbiBQcm9taXNlJF9hZnRlckRlbGF5KHZhbHVlLCBwcm9taXNlKSB7XG4gICAgcHJvbWlzZS5fZnVsZmlsbCh2YWx1ZSk7XG59O1xuXG52YXIgZGVsYXkgPSBQcm9taXNlLmRlbGF5ID0gZnVuY3Rpb24gUHJvbWlzZSREZWxheSh2YWx1ZSwgbXMpIHtcbiAgICBpZiAobXMgPT09IHZvaWQgMCkge1xuICAgICAgICBtcyA9IHZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHZvaWQgMDtcbiAgICB9XG4gICAgbXMgPSArbXM7XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QodmFsdWUsIHZvaWQgMCk7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG5cbiAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlLl9wcm9wYWdhdGVGcm9tKG1heWJlUHJvbWlzZSwgNyk7XG4gICAgICAgIHByb21pc2UuX2ZvbGxvdyhtYXliZVByb21pc2UpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5kZWxheSh2YWx1ZSwgbXMpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlLl9zZXRUcmFjZSh2b2lkIDApO1xuICAgICAgICBfc2V0VGltZW91dChhZnRlckRlbGF5LCBtcywgdmFsdWUsIHByb21pc2UpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24gUHJvbWlzZSRkZWxheShtcykge1xuICAgIHJldHVybiBkZWxheSh0aGlzLCBtcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gUHJvbWlzZSR0aW1lb3V0KG1zLCBtZXNzYWdlKSB7XG4gICAgbXMgPSArbXM7XG5cbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fcHJvcGFnYXRlRnJvbSh0aGlzLCA3KTtcbiAgICByZXQuX2ZvbGxvdyh0aGlzKTtcbiAgICBfc2V0VGltZW91dChhZnRlclRpbWVvdXQsIG1zLCByZXQsIG1lc3NhZ2UsIG1zKTtcbiAgICByZXR1cm4gcmV0LmNhbmNlbGxhYmxlKCk7XG59O1xuXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwpIHtcbnZhciBUSElTID0ge307XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgbm9kZWJhY2tGb3JQcm9taXNlID0gcmVxdWlyZShcIi4vcHJvbWlzZV9yZXNvbHZlci5qc1wiKVxuICAgIC5fbm9kZWJhY2tGb3JQcm9taXNlO1xudmFyIHdpdGhBcHBlbmRlZCA9IHV0aWwud2l0aEFwcGVuZGVkO1xudmFyIG1heWJlV3JhcEFzRXJyb3IgPSB1dGlsLm1heWJlV3JhcEFzRXJyb3I7XG52YXIgY2FuRXZhbHVhdGUgPSB1dGlsLmNhbkV2YWx1YXRlO1xudmFyIFR5cGVFcnJvciA9IHJlcXVpcmUoXCIuL2Vycm9yc1wiKS5UeXBlRXJyb3I7XG52YXIgZGVmYXVsdFN1ZmZpeCA9IFwiQXN5bmNcIjtcbnZhciBkZWZhdWx0RmlsdGVyID0gZnVuY3Rpb24obmFtZSwgZnVuYykge1xuICAgIHJldHVybiB1dGlsLmlzSWRlbnRpZmllcihuYW1lKSAmJlxuICAgICAgICBuYW1lLmNoYXJBdCgwKSAhPT0gXCJfXCIgJiZcbiAgICAgICAgIXV0aWwuaXNDbGFzcyhmdW5jKTtcbn07XG52YXIgZGVmYXVsdFByb21pc2lmaWVkID0ge19faXNQcm9taXNpZmllZF9fOiB0cnVlfTtcblxuXG5mdW5jdGlvbiBlc2NhcGVJZGVudFJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFskXSkvLCBcIlxcXFwkXCIpO1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2lmaWVkKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGZuLl9faXNQcm9taXNpZmllZF9fID09PSB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNQcm9taXNpZmllZChvYmosIGtleSwgc3VmZml4KSB7XG4gICAgdmFyIHZhbCA9IHV0aWwuZ2V0RGF0YVByb3BlcnR5T3JEZWZhdWx0KG9iaiwga2V5ICsgc3VmZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UHJvbWlzaWZpZWQpO1xuICAgIHJldHVybiB2YWwgPyBpc1Byb21pc2lmaWVkKHZhbCkgOiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNoZWNrVmFsaWQocmV0LCBzdWZmaXgsIHN1ZmZpeFJlZ2V4cCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIHZhciBrZXkgPSByZXRbaV07XG4gICAgICAgIGlmIChzdWZmaXhSZWdleHAudGVzdChrZXkpKSB7XG4gICAgICAgICAgICB2YXIga2V5V2l0aG91dEFzeW5jU3VmZml4ID0ga2V5LnJlcGxhY2Uoc3VmZml4UmVnZXhwLCBcIlwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmV0Lmxlbmd0aDsgaiArPSAyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJldFtqXSA9PT0ga2V5V2l0aG91dEFzeW5jU3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcHJvbWlzaWZ5IGFuIEFQSSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRoYXQgaGFzIG5vcm1hbCBtZXRob2RzIHdpdGggJ1wiK3N1ZmZpeCtcIictc3VmZml4XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJvbWlzaWZpYWJsZU1ldGhvZHMob2JqLCBzdWZmaXgsIHN1ZmZpeFJlZ2V4cCwgZmlsdGVyKSB7XG4gICAgdmFyIGtleXMgPSB1dGlsLmluaGVyaXRlZERhdGFLZXlzKG9iaik7XG4gICAgdmFyIHJldCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgIWlzUHJvbWlzaWZpZWQodmFsdWUpICYmXG4gICAgICAgICAgICAhaGFzUHJvbWlzaWZpZWQob2JqLCBrZXksIHN1ZmZpeCkgJiZcbiAgICAgICAgICAgIGZpbHRlcihrZXksIHZhbHVlLCBvYmopKSB7XG4gICAgICAgICAgICByZXQucHVzaChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja1ZhbGlkKHJldCwgc3VmZml4LCBzdWZmaXhSZWdleHApO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaENhc2VBcmd1bWVudE9yZGVyKGxpa2VseUFyZ3VtZW50Q291bnQpIHtcbiAgICB2YXIgcmV0ID0gW2xpa2VseUFyZ3VtZW50Q291bnRdO1xuICAgIHZhciBtaW4gPSBNYXRoLm1heCgwLCBsaWtlbHlBcmd1bWVudENvdW50IC0gMSAtIDUpO1xuICAgIGZvcih2YXIgaSA9IGxpa2VseUFyZ3VtZW50Q291bnQgLSAxOyBpID49IG1pbjsgLS1pKSB7XG4gICAgICAgIGlmIChpID09PSBsaWtlbHlBcmd1bWVudENvdW50KSBjb250aW51ZTtcbiAgICAgICAgcmV0LnB1c2goaSk7XG4gICAgfVxuICAgIGZvcih2YXIgaSA9IGxpa2VseUFyZ3VtZW50Q291bnQgKyAxOyBpIDw9IDU7ICsraSkge1xuICAgICAgICByZXQucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gYXJndW1lbnRTZXF1ZW5jZShhcmd1bWVudENvdW50KSB7XG4gICAgcmV0dXJuIHV0aWwuZmlsbGVkUmFuZ2UoYXJndW1lbnRDb3VudCwgXCJhcmd1bWVudHNbXCIsIFwiXVwiKTtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyRGVjbGFyYXRpb24ocGFyYW1ldGVyQ291bnQpIHtcbiAgICByZXR1cm4gdXRpbC5maWxsZWRSYW5nZShwYXJhbWV0ZXJDb3VudCwgXCJfYXJnXCIsIFwiXCIpO1xufVxuXG5mdW5jdGlvbiBwYXJhbWV0ZXJDb3VudChmbikge1xuICAgIGlmICh0eXBlb2YgZm4ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihmbi5sZW5ndGgsIDEwMjMgKyAxKSwgMCk7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb3BlcnR5QWNjZXNzKGtleSkge1xuICAgIGlmICh1dGlsLmlzSWRlbnRpZmllcihrZXkpKSB7XG4gICAgICAgIHJldHVybiBcIi5cIiArIGtleTtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gXCJbJ1wiICsga2V5LnJlcGxhY2UoLyhbJ1xcXFxdKS9nLCBcIlxcXFwkMVwiKSArIFwiJ11cIjtcbn1cblxuZnVuY3Rpb24gbWFrZU5vZGVQcm9taXNpZmllZEV2YWwoY2FsbGJhY2ssIHJlY2VpdmVyLCBvcmlnaW5hbE5hbWUsIGZuLCBzdWZmaXgpIHtcbiAgICB2YXIgbmV3UGFyYW1ldGVyQ291bnQgPSBNYXRoLm1heCgwLCBwYXJhbWV0ZXJDb3VudChmbikgLSAxKTtcbiAgICB2YXIgYXJndW1lbnRPcmRlciA9IHN3aXRjaENhc2VBcmd1bWVudE9yZGVyKG5ld1BhcmFtZXRlckNvdW50KTtcbiAgICB2YXIgY2FsbGJhY2tOYW1lID1cbiAgICAgICAgKHR5cGVvZiBvcmlnaW5hbE5hbWUgPT09IFwic3RyaW5nXCIgJiYgdXRpbC5pc0lkZW50aWZpZXIob3JpZ2luYWxOYW1lKVxuICAgICAgICAgICAgPyBvcmlnaW5hbE5hbWUgKyBzdWZmaXhcbiAgICAgICAgICAgIDogXCJwcm9taXNpZmllZFwiKTtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ2FsbEZvckFyZ3VtZW50Q291bnQoY291bnQpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudFNlcXVlbmNlKGNvdW50KS5qb2luKFwiLCBcIik7XG4gICAgICAgIHZhciBjb21tYSA9IGNvdW50ID4gMCA/IFwiLCBcIiA6IFwiXCI7XG4gICAgICAgIHZhciByZXQ7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldCA9IFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgdGhpcy5tZXRob2QoYXJncywgZm4pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIi5yZXBsYWNlKFwiLm1ldGhvZFwiLCBnZW5lcmF0ZVByb3BlcnR5QWNjZXNzKGNhbGxiYWNrKSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVjZWl2ZXIgPT09IFRISVMpIHtcbiAgICAgICAgICAgIHJldCA9ICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBhcmdzLCBmbik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIjtcbiAgICAgICAgfSBlbHNlIGlmIChyZWNlaXZlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXQgPSAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwocmVjZWl2ZXIsIGFyZ3MsIGZuKTsgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXQgPSAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3MsIGZuKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldC5yZXBsYWNlKFwiYXJnc1wiLCBhcmdzKS5yZXBsYWNlKFwiLCBcIiwgY29tbWEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQXJndW1lbnRTd2l0Y2hDYXNlKCkge1xuICAgICAgICB2YXIgcmV0ID0gXCJcIjtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50T3JkZXIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHJldCArPSBcImNhc2UgXCIgKyBhcmd1bWVudE9yZGVyW2ldICtcIjpcIiArXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVDYWxsRm9yQXJndW1lbnRDb3VudChhcmd1bWVudE9yZGVyW2ldKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29kZUZvckNhbGw7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvZGVGb3JDYWxsID0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eS5hcHBseSh0aGlzLCBhcmdzKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiLnByb3BlcnR5XCIsIGdlbmVyYXRlUHJvcGVydHlBY2Nlc3MoY2FsbGJhY2spKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWNlaXZlciA9PT0gVEhJUykge1xuICAgICAgICAgICAgY29kZUZvckNhbGwgPSBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29kZUZvckNhbGwgPSBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShyZWNlaXZlciwgYXJncyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0ICs9IFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIGRlZmF1bHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShsZW4gKyAxKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgaSA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBhcmdzW2ldID0gZm47ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBbQ29kZUZvckNhbGxdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIFwiLnJlcGxhY2UoXCJbQ29kZUZvckNhbGxdXCIsIGNvZGVGb3JDYWxsKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwiUHJvbWlzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsYmFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWNlaXZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aXRoQXBwZW5kZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWF5YmVXcmFwQXNFcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub2RlYmFja0ZvclByb21pc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSU5URVJOQUxcIixcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgdmFyIHJldCA9IGZ1bmN0aW9uIEZ1bmN0aW9uTmFtZShQYXJhbWV0ZXJzKSB7ICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHByb21pc2UuX3NldFRyYWNlKHZvaWQgMCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBmbiA9IG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHRyeSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBzd2l0Y2gobGVuKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgW0NvZGVGb3JTd2l0Y2hDYXNlXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZCA9IG1heWJlV3JhcEFzRXJyb3IoZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHdyYXBwZWQpOyAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9yZWplY3Qod3JhcHBlZCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgfTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0Ll9faXNQcm9taXNpZmllZF9fID0gdHJ1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0dXJuIHJldDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCJcbiAgICAgICAgLnJlcGxhY2UoXCJGdW5jdGlvbk5hbWVcIiwgY2FsbGJhY2tOYW1lKVxuICAgICAgICAucmVwbGFjZShcIlBhcmFtZXRlcnNcIiwgcGFyYW1ldGVyRGVjbGFyYXRpb24obmV3UGFyYW1ldGVyQ291bnQpKVxuICAgICAgICAucmVwbGFjZShcIltDb2RlRm9yU3dpdGNoQ2FzZV1cIiwgZ2VuZXJhdGVBcmd1bWVudFN3aXRjaENhc2UoKSkpKFxuICAgICAgICAgICAgUHJvbWlzZSxcbiAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgcmVjZWl2ZXIsXG4gICAgICAgICAgICB3aXRoQXBwZW5kZWQsXG4gICAgICAgICAgICBtYXliZVdyYXBBc0Vycm9yLFxuICAgICAgICAgICAgbm9kZWJhY2tGb3JQcm9taXNlLFxuICAgICAgICAgICAgSU5URVJOQUxcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gbWFrZU5vZGVQcm9taXNpZmllZENsb3N1cmUoY2FsbGJhY2ssIHJlY2VpdmVyKSB7XG4gICAgZnVuY3Rpb24gcHJvbWlzaWZpZWQoKSB7XG4gICAgICAgIHZhciBfcmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICAgICAgaWYgKHJlY2VpdmVyID09PSBUSElTKSBfcmVjZWl2ZXIgPSB0aGlzO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IF9yZWNlaXZlcltjYWxsYmFja107XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgIHByb21pc2UuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgICAgIHZhciBmbiA9IG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KF9yZWNlaXZlciwgd2l0aEFwcGVuZGVkKGFyZ3VtZW50cywgZm4pKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlZCA9IG1heWJlV3JhcEFzRXJyb3IoZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHdyYXBwZWQpO1xuICAgICAgICAgICAgcHJvbWlzZS5fcmVqZWN0KHdyYXBwZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBwcm9taXNpZmllZC5fX2lzUHJvbWlzaWZpZWRfXyA9IHRydWU7XG4gICAgcmV0dXJuIHByb21pc2lmaWVkO1xufVxuXG52YXIgbWFrZU5vZGVQcm9taXNpZmllZCA9IGNhbkV2YWx1YXRlXG4gICAgPyBtYWtlTm9kZVByb21pc2lmaWVkRXZhbFxuICAgIDogbWFrZU5vZGVQcm9taXNpZmllZENsb3N1cmU7XG5cbmZ1bmN0aW9uIHByb21pc2lmeUFsbChvYmosIHN1ZmZpeCwgZmlsdGVyLCBwcm9taXNpZmllcikge1xuICAgIHZhciBzdWZmaXhSZWdleHAgPSBuZXcgUmVnRXhwKGVzY2FwZUlkZW50UmVnZXgoc3VmZml4KSArIFwiJFwiKTtcbiAgICB2YXIgbWV0aG9kcyA9XG4gICAgICAgIHByb21pc2lmaWFibGVNZXRob2RzKG9iaiwgc3VmZml4LCBzdWZmaXhSZWdleHAsIGZpbHRlcik7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrPSAyKSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRob2RzW2ldO1xuICAgICAgICB2YXIgZm4gPSBtZXRob2RzW2krMV07XG4gICAgICAgIHZhciBwcm9taXNpZmllZEtleSA9IGtleSArIHN1ZmZpeDtcbiAgICAgICAgb2JqW3Byb21pc2lmaWVkS2V5XSA9IHByb21pc2lmaWVyID09PSBtYWtlTm9kZVByb21pc2lmaWVkXG4gICAgICAgICAgICAgICAgPyBtYWtlTm9kZVByb21pc2lmaWVkKGtleSwgVEhJUywga2V5LCBmbiwgc3VmZml4KVxuICAgICAgICAgICAgICAgIDogcHJvbWlzaWZpZXIoZm4pO1xuICAgIH1cbiAgICB1dGlsLnRvRmFzdFByb3BlcnRpZXMob2JqKTtcbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBwcm9taXNpZnkoY2FsbGJhY2ssIHJlY2VpdmVyKSB7XG4gICAgcmV0dXJuIG1ha2VOb2RlUHJvbWlzaWZpZWQoY2FsbGJhY2ssIHJlY2VpdmVyLCB2b2lkIDAsIGNhbGxiYWNrKTtcbn1cblxuUHJvbWlzZS5wcm9taXNpZnkgPSBmdW5jdGlvbiBQcm9taXNlJFByb21pc2lmeShmbiwgcmVjZWl2ZXIpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKGlzUHJvbWlzaWZpZWQoZm4pKSB7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2lmeShmbiwgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBUSElTIDogcmVjZWl2ZXIpO1xufTtcblxuUHJvbWlzZS5wcm9taXNpZnlBbGwgPSBmdW5jdGlvbiBQcm9taXNlJFByb21pc2lmeUFsbCh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInRoZSB0YXJnZXQgb2YgcHJvbWlzaWZ5QWxsIG11c3QgYmUgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBPYmplY3Qob3B0aW9ucyk7XG4gICAgdmFyIHN1ZmZpeCA9IG9wdGlvbnMuc3VmZml4O1xuICAgIGlmICh0eXBlb2Ygc3VmZml4ICE9PSBcInN0cmluZ1wiKSBzdWZmaXggPSBkZWZhdWx0U3VmZml4O1xuICAgIHZhciBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICBpZiAodHlwZW9mIGZpbHRlciAhPT0gXCJmdW5jdGlvblwiKSBmaWx0ZXIgPSBkZWZhdWx0RmlsdGVyO1xuICAgIHZhciBwcm9taXNpZmllciA9IG9wdGlvbnMucHJvbWlzaWZpZXI7XG4gICAgaWYgKHR5cGVvZiBwcm9taXNpZmllciAhPT0gXCJmdW5jdGlvblwiKSBwcm9taXNpZmllciA9IG1ha2VOb2RlUHJvbWlzaWZpZWQ7XG5cbiAgICBpZiAoIXV0aWwuaXNJZGVudGlmaWVyKHN1ZmZpeCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJzdWZmaXggbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcIik7XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSB1dGlsLmluaGVyaXRlZERhdGFLZXlzKHRhcmdldCwge2luY2x1ZGVIaWRkZW46IHRydWV9KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleXNbaV1dO1xuICAgICAgICBpZiAoa2V5c1tpXSAhPT0gXCJjb25zdHJ1Y3RvclwiICYmXG4gICAgICAgICAgICB1dGlsLmlzQ2xhc3ModmFsdWUpKSB7XG4gICAgICAgICAgICBwcm9taXNpZnlBbGwodmFsdWUucHJvdG90eXBlLCBzdWZmaXgsIGZpbHRlciwgcHJvbWlzaWZpZXIpO1xuICAgICAgICAgICAgcHJvbWlzaWZ5QWxsKHZhbHVlLCBzdWZmaXgsIGZpbHRlciwgcHJvbWlzaWZpZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2lmeUFsbCh0YXJnZXQsIHN1ZmZpeCwgZmlsdGVyLCBwcm9taXNpZmllcik7XG59O1xufTtcblxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBjYXN0KSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgYXBpUmVqZWN0aW9uID0gcmVxdWlyZShcIi4vZXJyb3JzX2FwaV9yZWplY3Rpb25cIikoUHJvbWlzZSk7XG52YXIgaXNPYmplY3QgPSB1dGlsLmlzT2JqZWN0O1xudmFyIGVzNSA9IHJlcXVpcmUoXCIuL2VzNS5qc1wiKTtcblxuZnVuY3Rpb24gUHJvcGVydGllc1Byb21pc2VBcnJheShvYmopIHtcbiAgICB2YXIga2V5cyA9IGVzNS5rZXlzKG9iaik7XG4gICAgdmFyIGxlbiA9IGtleXMubGVuZ3RoO1xuICAgIHZhciB2YWx1ZXMgPSBuZXcgQXJyYXkobGVuICogMik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFsdWVzW2ldID0gb2JqW2tleV07XG4gICAgICAgIHZhbHVlc1tpICsgbGVuXSA9IGtleTtcbiAgICB9XG4gICAgdGhpcy5jb25zdHJ1Y3RvciQodmFsdWVzKTtcbn1cbnV0aWwuaW5oZXJpdHMoUHJvcGVydGllc1Byb21pc2VBcnJheSwgUHJvbWlzZUFycmF5KTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuX2luaXQgPVxuZnVuY3Rpb24gUHJvcGVydGllc1Byb21pc2VBcnJheSRfaW5pdCgpIHtcbiAgICB0aGlzLl9pbml0JCh2b2lkIDAsIC0zKSA7XG59O1xuXG5Qcm9wZXJ0aWVzUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9XG5mdW5jdGlvbiBQcm9wZXJ0aWVzUHJvbWlzZUFycmF5JF9wcm9taXNlRnVsZmlsbGVkKHZhbHVlLCBpbmRleCkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcbiAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgdmFyIHRvdGFsUmVzb2x2ZWQgPSArK3RoaXMuX3RvdGFsUmVzb2x2ZWQ7XG4gICAgaWYgKHRvdGFsUmVzb2x2ZWQgPj0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICAgIHZhciB2YWwgPSB7fTtcbiAgICAgICAgdmFyIGtleU9mZnNldCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxlbmd0aCgpOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHZhbFt0aGlzLl92YWx1ZXNbaSArIGtleU9mZnNldF1dID0gdGhpcy5fdmFsdWVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jlc29sdmUodmFsKTtcbiAgICB9XG59O1xuXG5Qcm9wZXJ0aWVzUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVByb2dyZXNzZWQgPVxuZnVuY3Rpb24gUHJvcGVydGllc1Byb21pc2VBcnJheSRfcHJvbWlzZVByb2dyZXNzZWQodmFsdWUsIGluZGV4KSB7XG4gICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fcHJvbWlzZS5fcHJvZ3Jlc3Moe1xuICAgICAgICBrZXk6IHRoaXMuX3ZhbHVlc1tpbmRleCArIHRoaXMubGVuZ3RoKCldLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbn07XG5cblByb3BlcnRpZXNQcm9taXNlQXJyYXkucHJvdG90eXBlLnNob3VsZENvcHlWYWx1ZXMgPVxuZnVuY3Rpb24gUHJvcGVydGllc1Byb21pc2VBcnJheSRfc2hvdWxkQ29weVZhbHVlcygpIHtcbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5Qcm9wZXJ0aWVzUHJvbWlzZUFycmF5LnByb3RvdHlwZS5nZXRBY3R1YWxMZW5ndGggPVxuZnVuY3Rpb24gUHJvcGVydGllc1Byb21pc2VBcnJheSRnZXRBY3R1YWxMZW5ndGgobGVuKSB7XG4gICAgcmV0dXJuIGxlbiA+PiAxO1xufTtcblxuZnVuY3Rpb24gUHJvbWlzZSRfUHJvcHMocHJvbWlzZXMpIHtcbiAgICB2YXIgcmV0O1xuICAgIHZhciBjYXN0VmFsdWUgPSBjYXN0KHByb21pc2VzLCB2b2lkIDApO1xuXG4gICAgaWYgKCFpc09iamVjdChjYXN0VmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJjYW5ub3QgYXdhaXQgcHJvcGVydGllcyBvZiBhIG5vbi1vYmplY3RcIik7XG4gICAgfSBlbHNlIGlmIChjYXN0VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHJldCA9IGNhc3RWYWx1ZS5fdGhlbihQcm9taXNlLnByb3BzLCB2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCB2b2lkIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IG5ldyBQcm9wZXJ0aWVzUHJvbWlzZUFycmF5KGNhc3RWYWx1ZSkucHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGlmIChjYXN0VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHJldC5fcHJvcGFnYXRlRnJvbShjYXN0VmFsdWUsIDQpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5wcm9wcyA9IGZ1bmN0aW9uIFByb21pc2UkcHJvcHMoKSB7XG4gICAgcmV0dXJuIFByb21pc2UkX1Byb3BzKHRoaXMpO1xufTtcblxuUHJvbWlzZS5wcm9wcyA9IGZ1bmN0aW9uIFByb21pc2UkUHJvcHMocHJvbWlzZXMpIHtcbiAgICByZXR1cm4gUHJvbWlzZSRfUHJvcHMocHJvbWlzZXMpO1xufTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cbnZhciBpc0VTNSA9IChmdW5jdGlvbigpe1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHJldHVybiB0aGlzID09PSB2b2lkIDA7XG59KSgpO1xuXG5pZiAoaXNFUzUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgZnJlZXplOiBPYmplY3QuZnJlZXplLFxuICAgICAgICBkZWZpbmVQcm9wZXJ0eTogT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICAgICAgICBrZXlzOiBPYmplY3Qua2V5cyxcbiAgICAgICAgZ2V0UHJvdG90eXBlT2Y6IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICAgICAgaXNBcnJheTogQXJyYXkuaXNBcnJheSxcbiAgICAgICAgaXNFUzU6IGlzRVM1XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgdmFyIGhhcyA9IHt9Lmhhc093blByb3BlcnR5O1xuICAgIHZhciBzdHIgPSB7fS50b1N0cmluZztcbiAgICB2YXIgcHJvdG8gPSB7fS5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbiAgICB2YXIgT2JqZWN0S2V5cyA9IGZ1bmN0aW9uIE9iamVjdEtleXMobykge1xuICAgICAgICB2YXIgcmV0ID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwobywga2V5KSkge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICB2YXIgT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBPYmplY3REZWZpbmVQcm9wZXJ0eShvLCBrZXksIGRlc2MpIHtcbiAgICAgICAgb1trZXldID0gZGVzYy52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgdmFyIE9iamVjdEZyZWV6ZSA9IGZ1bmN0aW9uIE9iamVjdEZyZWV6ZShvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICB2YXIgT2JqZWN0R2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbiBPYmplY3RHZXRQcm90b3R5cGVPZihvYmopIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qob2JqKS5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBBcnJheUlzQXJyYXkgPSBmdW5jdGlvbiBBcnJheUlzQXJyYXkob2JqKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBpc0FycmF5OiBBcnJheUlzQXJyYXksXG4gICAgICAgIGtleXM6IE9iamVjdEtleXMsXG4gICAgICAgIGRlZmluZVByb3BlcnR5OiBPYmplY3REZWZpbmVQcm9wZXJ0eSxcbiAgICAgICAgZnJlZXplOiBPYmplY3RGcmVlemUsXG4gICAgICAgIGdldFByb3RvdHlwZU9mOiBPYmplY3RHZXRQcm90b3R5cGVPZixcbiAgICAgICAgaXNFUzU6IGlzRVM1XG4gICAgfTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBhcnJheUNvcHkoc3JjLCBzcmNJbmRleCwgZHN0LCBkc3RJbmRleCwgbGVuKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBsZW47ICsraikge1xuICAgICAgICBkc3RbaiArIGRzdEluZGV4XSA9IHNyY1tqICsgc3JjSW5kZXhdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gUXVldWUoY2FwYWNpdHkpIHtcbiAgICB0aGlzLl9jYXBhY2l0eSA9IGNhcGFjaXR5O1xuICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJvbnQgPSAwO1xuICAgIHRoaXMuX21ha2VDYXBhY2l0eSgpO1xufVxuXG5RdWV1ZS5wcm90b3R5cGUuX3dpbGxCZU92ZXJDYXBhY2l0eSA9XG5mdW5jdGlvbiBRdWV1ZSRfd2lsbEJlT3ZlckNhcGFjaXR5KHNpemUpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHkgPCBzaXplO1xufTtcblxuUXVldWUucHJvdG90eXBlLl9wdXNoT25lID0gZnVuY3Rpb24gUXVldWUkX3B1c2hPbmUoYXJnKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgdGhpcy5fY2hlY2tDYXBhY2l0eShsZW5ndGggKyAxKTtcbiAgICB2YXIgaSA9ICh0aGlzLl9mcm9udCArIGxlbmd0aCkgJiAodGhpcy5fY2FwYWNpdHkgLSAxKTtcbiAgICB0aGlzW2ldID0gYXJnO1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbmd0aCArIDE7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIFF1ZXVlJHB1c2goZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKSArIDM7XG4gICAgaWYgKHRoaXMuX3dpbGxCZU92ZXJDYXBhY2l0eShsZW5ndGgpKSB7XG4gICAgICAgIHRoaXMuX3B1c2hPbmUoZm4pO1xuICAgICAgICB0aGlzLl9wdXNoT25lKHJlY2VpdmVyKTtcbiAgICAgICAgdGhpcy5fcHVzaE9uZShhcmcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBqID0gdGhpcy5fZnJvbnQgKyBsZW5ndGggLSAzO1xuICAgIHRoaXMuX2NoZWNrQ2FwYWNpdHkobGVuZ3RoKTtcbiAgICB2YXIgd3JhcE1hc2sgPSB0aGlzLl9jYXBhY2l0eSAtIDE7XG4gICAgdGhpc1soaiArIDApICYgd3JhcE1hc2tdID0gZm47XG4gICAgdGhpc1soaiArIDEpICYgd3JhcE1hc2tdID0gcmVjZWl2ZXI7XG4gICAgdGhpc1soaiArIDIpICYgd3JhcE1hc2tdID0gYXJnO1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbmd0aDtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uIFF1ZXVlJHNoaWZ0KCkge1xuICAgIHZhciBmcm9udCA9IHRoaXMuX2Zyb250LFxuICAgICAgICByZXQgPSB0aGlzW2Zyb250XTtcblxuICAgIHRoaXNbZnJvbnRdID0gdm9pZCAwO1xuICAgIHRoaXMuX2Zyb250ID0gKGZyb250ICsgMSkgJiAodGhpcy5fY2FwYWNpdHkgLSAxKTtcbiAgICB0aGlzLl9sZW5ndGgtLTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUXVldWUucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uIFF1ZXVlJGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xufTtcblxuUXVldWUucHJvdG90eXBlLl9tYWtlQ2FwYWNpdHkgPSBmdW5jdGlvbiBRdWV1ZSRfbWFrZUNhcGFjaXR5KCkge1xuICAgIHZhciBsZW4gPSB0aGlzLl9jYXBhY2l0eTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHRoaXNbaV0gPSB2b2lkIDA7XG4gICAgfVxufTtcblxuUXVldWUucHJvdG90eXBlLl9jaGVja0NhcGFjaXR5ID0gZnVuY3Rpb24gUXVldWUkX2NoZWNrQ2FwYWNpdHkoc2l6ZSkge1xuICAgIGlmICh0aGlzLl9jYXBhY2l0eSA8IHNpemUpIHtcbiAgICAgICAgdGhpcy5fcmVzaXplVG8odGhpcy5fY2FwYWNpdHkgPDwgMyk7XG4gICAgfVxufTtcblxuUXVldWUucHJvdG90eXBlLl9yZXNpemVUbyA9IGZ1bmN0aW9uIFF1ZXVlJF9yZXNpemVUbyhjYXBhY2l0eSkge1xuICAgIHZhciBvbGRGcm9udCA9IHRoaXMuX2Zyb250O1xuICAgIHZhciBvbGRDYXBhY2l0eSA9IHRoaXMuX2NhcGFjaXR5O1xuICAgIHZhciBvbGRRdWV1ZSA9IG5ldyBBcnJheShvbGRDYXBhY2l0eSk7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICBhcnJheUNvcHkodGhpcywgMCwgb2xkUXVldWUsIDAsIG9sZENhcGFjaXR5KTtcbiAgICB0aGlzLl9jYXBhY2l0eSA9IGNhcGFjaXR5O1xuICAgIHRoaXMuX21ha2VDYXBhY2l0eSgpO1xuICAgIHRoaXMuX2Zyb250ID0gMDtcbiAgICBpZiAob2xkRnJvbnQgKyBsZW5ndGggPD0gb2xkQ2FwYWNpdHkpIHtcbiAgICAgICAgYXJyYXlDb3B5KG9sZFF1ZXVlLCBvbGRGcm9udCwgdGhpcywgMCwgbGVuZ3RoKTtcbiAgICB9IGVsc2UgeyAgICAgICAgdmFyIGxlbmd0aEJlZm9yZVdyYXBwaW5nID1cbiAgICAgICAgICAgIGxlbmd0aCAtICgob2xkRnJvbnQgKyBsZW5ndGgpICYgKG9sZENhcGFjaXR5IC0gMSkpO1xuXG4gICAgICAgIGFycmF5Q29weShvbGRRdWV1ZSwgb2xkRnJvbnQsIHRoaXMsIDAsIGxlbmd0aEJlZm9yZVdyYXBwaW5nKTtcbiAgICAgICAgYXJyYXlDb3B5KG9sZFF1ZXVlLCAwLCB0aGlzLCBsZW5ndGhCZWZvcmVXcmFwcGluZyxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoIC0gbGVuZ3RoQmVmb3JlV3JhcHBpbmcpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVldWU7XG4iLCIoZnVuY3Rpb24ocHJvY2Vzcyl7LyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzY2hlZHVsZTtcbnZhciBfTXV0YXRpb25PYnNlcnZlcjtcbmlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcHJvY2Vzcy52ZXJzaW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgc2NoZWR1bGUgPSBmdW5jdGlvbiBQcm9taXNlJF9TY2hlZHVsZXIoZm4pIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbik7XG4gICAgfTtcbn1cbmVsc2UgaWYgKCh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgKF9NdXRhdGlvbk9ic2VydmVyID0gTXV0YXRpb25PYnNlcnZlcikpIHx8XG4gICAgICAgICAodHlwZW9mIFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgIChfTXV0YXRpb25PYnNlcnZlciA9IFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIpKSkge1xuICAgIHNjaGVkdWxlID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIHF1ZXVlZEZuID0gdm9pZCAwO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgX011dGF0aW9uT2JzZXJ2ZXIoXG4gICAgICAgICAgICBmdW5jdGlvbiBQcm9taXNlJF9TY2hlZHVsZXIoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWVkRm47XG4gICAgICAgICAgICAgICAgcXVldWVkRm4gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICApO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRpdiwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIFByb21pc2UkX1NjaGVkdWxlcihmbikge1xuICAgICAgICAgICAgcXVldWVkRm4gPSBmbjtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvb1wiKTtcbiAgICAgICAgfTtcblxuICAgIH0pKCk7XG59XG5lbHNlIGlmICh0eXBlb2Ygc2V0VGltZW91dCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHNjaGVkdWxlID0gZnVuY3Rpb24gUHJvbWlzZSRfU2NoZWR1bGVyKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59XG5lbHNlIHRocm93IG5ldyBFcnJvcihcIm5vIGFzeW5jIHNjaGVkdWxlciBhdmFpbGFibGVcIik7XG5tb2R1bGUuZXhwb3J0cyA9IHNjaGVkdWxlO1xuXG59KShyZXF1aXJlKFwiX19icm93c2VyaWZ5X3Byb2Nlc3NcIikpIl19
;