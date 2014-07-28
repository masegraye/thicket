"use strict";

var assert            = require("assert"),
    Promise           = require("bluebird"),
    grove             = require("../../../src/common/grove"),
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
      .finally(function() {
        done();
      });
  });
});
