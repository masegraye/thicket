var assert       = require("assert"),
    Promise      = require("bluebird"),
    thicket      = require("../../../../lib-node/thicket"),
    LRUDataStore = thicket.c("lru-data-store");

describe("LRUDataStore", function() {
   it("should evict based on provided capacity", function(done) {
     var caughtCount = 0,
         store = new LRUDataStore({
           capacity: 3
         });

     Promise.attempt(function() {
       return store.put("one", 1).then(function() {
         return store.put("two", 2);
       }).then(function() {
         return store.put("three", 3);
       }).then(function() {
         return store.put("four", 4)
       });
     }).then(function() {
       return store.exists("one");
     }).then(function(doesExist) {
       assert.ok(!doesExist);
       return store.exists("four");
     }).then(function(doesExist) {
       assert.ok(doesExist);
     }).caught(function(err) {
       assert.equal(err && err.message, "");
       caughtCount++;
     }).lastly(function() {
       assert.equal(caughtCount, 0);
       done();
     });
   });
});