/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  M,
  Options,
  Channel,
  ChainedChannel,
  UnitSequencer,
  DelegatingForwardingSequencer,
  InMemoryDataStore,
  Entry
) {

  /**
   * Semantically similar to a CachingDataStore, except:
   *   1) Expiry is check both on access, and whenever `advance` is
   *      called on the `sentrySequencer`.
   *   2) Records are not automatically removed; instead, a signal is sent
   *      along the `signalChannel`. The signal dispatch is deferred, so
   *      an access-triggered evocation signal won't be received until a
   *      subsequent tick. Since promises are asynchronous, this means
   *      the caller may receive a value from the store, and may also
   *      receive an event from the Store indicating expiry - in non-deterministic
   *      order. It's up to the caller to choose a resolution.
   *      Additionally, there is no guarantee that a single expiry event
   *      will be sent for a given key; instead, the event will continue
   *      to be dispatched for as long as the key remains in the store.
   * @constructor
   */
  var SignalingDataStore = function() {
    this.initialize.apply(this, arguments);
  };

  var DEFAULT_TTL = 1;

  _.extend(SignalingDataStore.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._ttl = opts.getOrElse("ttl", DEFAULT_TTL);

      this._sequencer = opts.getOrElseFn("sequencer", function() {
        return new UnitSequencer();
      });

      _.bindAll(this, "_doCheck");

      this._sentrySequencer = new DelegatingForwardingSequencer({
        delegate: new UnitSequencer(),
        targets: [{
          advance: this._doCheck
        }]
      });

      this._backingStore = opts.getOrElseFn("backingStore", function() {
        return new InMemoryDataStore();
      });

      this._shouldTouchOnRead = opts.getOrElse("touchOnRead", false);

      this._signalChannel = new Channel({ sentinel: this });

      this._keys = M.set();
    },

    sequencer: function() {
      return this._sequencer;
    },

    sentrySequencer: function() {
      return this._sentrySequencer;
    },

    signalChannel: function() {
      return new ChainedChannel({
        sentinel: this,
        chainTo: this._signalChannel
      });
    },

    _doCheck: function() {
      var work = M.map(_.bind(function(key) {
        return Promise
          .bind(this)
          .then(function() {
            return this._backingStore.get(key);
          })
          .then(function(entry) {
            if (entry && entry.isExpired(this._sequencer.value(), this._ttl)) {
              this._signalExpirySoon(key, this._sequencer.value());
            }
          });
        }, this), this._keys);

      return Promise.all(M.into_array(work));
    },

    /**
     * Gets the value associated with the provided `key`. If the object
     * has expired, it will still be returned from the Store, but an mT:expired
     * message will be sent along the `signalChannel`.
     *
     * @param key {string}
     * @async
     * @returns {Promise<object>} requested value
     */
    get: Promise.method(function(key){
      return Promise
        .bind(this)
        .then(function() {
          return this._backingStore.get(key);
        })
        .then(function(entry) {
          if (!entry) {
            return;
          }

          var isExpired = entry.isExpired(this._sequencer.value(), this._ttl);

          if (isExpired) {
            this._signalExpirySoon(key, this._sequencer.value());
          }

          if (!isExpired && this._shouldTouchOnRead) {
            entry.touch(this._sequencer.value());
            return Promise
              .bind(this)
              .then(function() {
                return this._backingStore.put(key, entry);
              })
              .thenReturn(entry.value());
          } else {
            return entry.value();
          }
        });
    }),

    /**
     * Stores the provided `val`, identified by `key`, with a TTL optionally
     * supplied by `opts.ttl` (overrides pre-configured Store TTL.
     *
     * @param key {String}
     * @param val {object} value to be stored
     * @async
     * @returns {Promise<>}
     */
    put: Promise.method(function(key, val, opts) {
      opts = Options.fromObject(opts);

      return Promise
        .bind(this)
        .then(function() {
          return this._backingStore.get(key);
        })
        .then(function(entry) {
          if (entry) {
            entry.update(val, this._sequencer.value(), {
              ttl: opts.getOrElse("ttl")
            });
          } else {
            entry = new Entry({
              value: val,
              initialSequence: this._sequencer.value(),
              ttl: opts.getOrElse("ttl")
            });
          }
          return Promise
            .bind(this)
            .then(function () {
              return this._backingStore.put(key, entry);
            })
            .then(function() {
              this._keys = M.conj(this._keys, key);
              return; // Because thenReturn doesn't work with an empty value.
            });
        });
    }),


    /**
     * Removes the value associated with the provided `key`
     */
    remove: Promise.method(function(key){
      var val;
      return this._backingStore
        .remove(key)
        .bind(this)
        .then(function(entry) {
          if (entry) {
            this._keys = M.disj(this._keys, key);

            val = entry.value();
            entry.dispose();
            return val;
          }
        });
    }),


    exists: Promise.method(function(key){
      // Unlike in the CachingDataStore, where we have to perform eviction rules before
      // returning the answer, here we can just delegate straight to the backing store.
      return this._backingStore.exists(key);
    }),


    clear: Promise.method(function(){
      return this._backingStore.clear();
    }),


    _signalExpirySoon: function(key, sequence) {
      _.defer(_.bind(function(){
        this._signalChannel.publish(this, {
          mT: "expired",
          key: key,
          sequence: sequence
        });
      }, this));
    }
  });

  return SignalingDataStore;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("mori"),
  require("../core/options"),
  require("../core/channel/channel"),
  require("../core/channel/chained-channel"),
  require("../core/sequencer/unit-sequencer"),
  require("../core/sequencer/delegating-forwarding-sequencer"),
  require("./in-memory-data-store"),
  require("./internals/expiring-entry")
);
