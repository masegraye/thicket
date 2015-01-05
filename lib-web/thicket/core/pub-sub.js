/*global require: false, module: false */
"use strict";

var mod = function(
  _
) {

  /**
   * A mixin enabling pubsub on an object. To use, copy the singleton methods into the object or object prototype:
   *
   *     var myObj = _.extend({}, PubSub);
   *     myObj.on('foo', function(evt) { console.log(evt) }); // logs `{ 'some': 'data' }`
   *     myObj.notify('foo', { some: 'data' });
   *
   */
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
        // Something went wrong here...
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
