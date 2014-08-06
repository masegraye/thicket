"use strict";

var assert            = require("assert"),
    Promise           = require("bluebird"),
    thicket           = require("../../../../lib-node/thicket"),
    CachingDataStore  = thicket.c("caching-data-store"),
    LogicalClock      = thicket.c("logical-clock"),
    ClockSequencer    = thicket.c("clock-sequencer"),
    InMemoryDataStore = thicket.c("in-memory-data-store"),
    LRUHashMap        = thicket.c("lru-hash-map");

Promise.onPossiblyUnhandledRejection(function(e, promise) {
    throw e;
});

describe("CachingDataStore", function() {
  it("should be defined", function() {
    assert.ok(CachingDataStore);
  });

  it("should be able to put/get/remove values, given no sequence manipulation", function(done) {
    var store = new CachingDataStore();
    Promise
      .attempt(function() {
        return store.put("key-one", 1);
      })
      .then(function() {
        return store.get("key-one");
      })
      .then(function(val) {
        assert.equal(val, 1);
        return store.remove("key-one");
      })
      .then(function(val) {
        assert.equal(val, 1);
      })
      .caught(function(err) {
        assert.equal(err, undefined);
      })
      .lastly(function() {
        done();
      });
  });

  it("should evict entries when expired", function(done) {
    var store = new CachingDataStore();
    Promise
      .attempt(function() {
        return store.put("key-one", 1);
      })
      .then(function() {
        return store.get("key-one");
      })
      .then(function(val) {
        assert.equal(val, 1);
        return store.sequencer().advance()
          .then(function() {
            return store.get("key-one");
          });
      })
      .then(function(val) {
        assert.ok(!val);
      })
      .caught(function(err) {
        assert.equal(err, undefined);
      })
      .lastly(function() {
        done();
      });
  });

  it("should evict on `exists` check", function(done) {
    var store = new CachingDataStore();
    Promise
      .attempt(function() {
        return store.put("key-one", 1);
      })
      .then(function() {
        return store.get("key-one");
      })
      .then(function(val) {
        assert.equal(val, 1);
        return store.sequencer().advance()
          .then(function() {
            store.exists("key-one");
          });
      })
      .then(function(exists) {
        assert.ok(!exists);
      })
      .caught(function() {
        console.log(err.message, err.stack);
        assert.equal(err, undefined);
      })
      .lastly(function() {
        done();
      });
  });

  it("should work with an externally owned sequencer", function(done) {
    var clock     = new LogicalClock();
    var sequencer = new ClockSequencer({ clock: clock });
    // 5 second ttl
    var store     = new CachingDataStore({ sequencer: sequencer, ttl: 5000 });
    Promise
      .attempt(function() {
        return store.put("key-one", 1)
          .then(function() {
            return store.get("key-one");
          });
      })
      .then(function(val) {
        assert.ok(val, 1);
        return clock.advanceTime({ by: 2500 })
          .then(function() {
            return sequencer.advance();
          })
          .then(function() {
            return store.get("key-one");
          })
      })
      .then(function(val) {
        assert.ok(val, 1);
        return clock.advanceTime({ to: 5001 })
          .then(function() {
            return sequencer.advance();
          })
          .then(function() {
            return store.exists("key-one");
          })
      })
      .then(function(exists) {
        assert.ok(!exists);
      })
      .caught(function(err) {
        assert.equal(err && err.message, false);
        throw err;
      })
      .lastly(function() {
        done();
      })

  });

  it("should interop with an LRUHashMap-backed InMemoryDataStore", function(done) {
    var map      = new LRUHashMap({
      capacity: 5
    }),
    backingStore = new InMemoryDataStore({
      backingHashMap: map
    }),
    cachingStore = new CachingDataStore({
      backingStore: backingStore,
      ttl: 1
    }),
    sequencer    = cachingStore.sequencer(),
    caughtCount  = 0;
    // Now... we should have max 5, OR on expiry
    Promise.attempt(function() {
      // Order is important here, so
      // we'll chain these
      return cachingStore.put("one",   1)
        .then(function() {
          return cachingStore.put("two",   2);
        })
        .then(function() {
          return cachingStore.put("three", 3);
        })
        .then(function() {
          return cachingStore.put("four",  4);
        })
        .then(function() {
          return cachingStore.put("five",  5);
        });
    })
    .then(function() {
      return cachingStore.exists("five");
    })
    .then(function(exists) {
      assert.ok(exists);
      return cachingStore.put("six", 6)
        .then(function() {
          return cachingStore.exists("one");
        });
    })
    .then(function(exists) {
      assert.ok(!exists);
      return sequencer.advance()
        .then(function() {
          return cachingStore.exists("six")
        });
    })
    .then(function(exists) {
      assert.ok(!exists);
    })
    .caught(function(err) {
      assert.equal(err && err.message, "");
      caughtCount++;
    })
    .lastly(function() {
      assert.equal(caughtCount, 0);
      done();
    })
  });

});
