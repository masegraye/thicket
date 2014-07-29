"use strict";

var mod = function(
  _,
  Promise,
  Options,
  InMemoryDataStore,
  Sequencer
) {

  // Appropriate for the default sequencer (non-temporal)
  var DEFAULT_TTL = 1;


  /**
   * A look-aside caching data store.
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
        return new Sequencer();
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
      return this._backingStore.exists(key);
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
  require("./internal/sequencer")
);
