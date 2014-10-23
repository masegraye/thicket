"use strict";

var assert             = require("assert"),
    Promise            = require("bluebird"),
    thicket            = require("thicket"),
    SignalingDataStore = thicket.c("signaling-data-store");

Promise.onPossiblyUnhandledRejection(function(e) {
  throw e;
});

describe("ExpiringDataStore", function() {
  it("should be defined", function() {
    assert.ok(SignalingDataStore);
  });

  it("should signal expiry on access", function(done) {
    var s = new SignalingDataStore({
          ttl: 1
        }),
        sequencer = s.sequencer(),
        signaled = new Promise(function(resolve, reject) {
          s.signalChannel().subscribe(function(msg) {
            resolve(msg);
          })
        });

    Promise
      .attempt(function() {
        return s.put("key-one", 1);
      })
      .then(function(){
        return s.get("key-one");
      })
      .then(function(val) {
        assert.equal(val, 1);
        return sequencer.advance();
      })
      .then(function() {
        return s.get("key-one");
      })
      .then(function(val) {
        assert.equal(val, 1);
        return signaled;
      })
      .then(function(msg) {
        assert.equal(msg.mT, "expired");
        assert.equal(msg.key, "key-one");
      })
      .caught(function(err) {
        throw err;
      })
      .lastly(function() {
        done();
      });
  });

  it("should signal expiry on sentrySequencer advance", function(done) {

    var s = new SignalingDataStore({
          ttl: 1
        }),
        sequencer = s.sequencer(),
        sentrySequencer = s.sentrySequencer(),
        signaled = new Promise(function(resolve, reject) {
          s.signalChannel().subscribe(function(msg) {
            resolve(msg);
          });
        });

    Promise
      .attempt(function() {
        return s.put("key-one", 1);
      })
      .then(function() {
        return s.get("key-one");
      })
      .then(function(val) {
        assert.equal(val, 1);
        assert.ok(signaled.isPending(), "expiry signal has not yet occurred");

        return sequencer
          .advance()
          .then(function() {
            return sentrySequencer
              .advance()
              .then(function() {
                return signaled;
              });
          });
      })
      .then(function(msg) {
        assert.equal(msg.mT, "expired");
      })
      .caught(function(err) {
        throw err;
      })
      .lastly(function() {
        done();
      });
  });

  it("should accept overridable TTLs", function(done) {
    var s = new SignalingDataStore(),
        sequencer = s.sequencer(),
        sentrySequencer = s.sentrySequencer(),
        signalCount = {one: 0, two: 0},
        signalOne = new Promise(function(resolve, reject) {
          s.signalChannel().subscribe(function(msg) {
            if (msg.key === "t-key-one") {
              signalCount.one++;
              if (signalOne.isPending()) resolve(msg);
            }
          })
        }),
        signalTwo = new Promise(function(resolve, reject) {
          s.signalChannel().subscribe(function(msg){
            if (msg.key === "t-key-two") {
              signalCount.two++;
              if(signalTwo.isPending()) resolve(msg);
            }
          });
        });

    Promise
      .attempt(function() {
        return s.put("t-key-one", 99)
          .then(function() {
            return s.put("t-key-two", 100, { ttl: 2 });
          })
      })
      .then(function() {
        assert.equal(sentrySequencer.value(), 0);
        return sequencer
          .advance()
          .then(function() {
            return sentrySequencer.advance();
          })
          .then(function() {
            return signalOne;
          });
      })
      .then(function(msg) {
        assert.ok(msg);
        assert.ok(signalTwo.isPending());
        assert.equal(sentrySequencer.value(), 1);
        return sequencer
          .advance()
          .then(function() {
            return sentrySequencer.advance();
          })
          .then(function() {
            return signalTwo;
          })
      })
      .then(function(msg) {
        assert.ok(msg);
        assert.ok(signalTwo.isFulfilled());
        assert.equal(sentrySequencer.value(), 2);
        assert.equal(signalCount.one, 2, "two ones");
        // assert.equal(signalCount.two, 2, "two twos");
      })
      .caught(function(err) {
        throw err;
      })
      .lastly(function() {
        done();
      });

  });
})
