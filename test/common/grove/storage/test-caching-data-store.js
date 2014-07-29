"use strict";

var assert            = require("assert"),
    Promise           = require("bluebird"),
    grove             = require("../../../../lib-node/grove"),
    CachingDataStore  = grove.c("caching-data-store");

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
        store.sequencer().advance();
        return store.get("key-one");
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
        store.sequencer().advance();
        return store.exists("key-one");
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

});
