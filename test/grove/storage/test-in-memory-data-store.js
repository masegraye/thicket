"use strict";

var assert            = require("assert"),
    Promise           = require("bluebird"),
    grove             = require("../../../src/common/grove"),
    InMemoryDataStore = grove.c("in-memory-data-store");

Promise.onPossiblyUnhandledRejection(function(e, promise) {
    throw e;
});

describe("InMemoryDataStore", function() {
  it("should be defined", function() {
    assert.ok(InMemoryDataStore);
  });

  it("should be able to put/get/remove values", function(done) {
    var store = new InMemoryDataStore();
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
