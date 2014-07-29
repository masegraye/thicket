"use strict";

var assert       = require("assert"),
    Promise      = require("bluebird"),
    grove        = require("../../../../../lib-node/grove"),
    LogicalClock = grove.c("logical-clock");

describe("LogicalClock", function() {
  it("should be defined", function() {
    assert.ok(LogicalClock);
  });

  it("should allow advancement", function(done) {
    var clock = new LogicalClock();
    Promise
      .attempt(function() {
        return clock.getTime();
      })
      .then(function(time) {
        assert.equal(time, 0);
        return clock.advanceTime({by: 10});
      })
      .then(function(time) {
        assert.equal(time, 10);
        return clock.advanceTime({to: 20});
      })
      .then(function(time) {
        assert.equal(time, 20);
        return clock.getTime();
      })
      .then(function(time) {
        assert.equal(time, 20);
      })
      .caught(function(err) {
        assert.equal(err && err.message, false);
      })
      .lastly(function() {
        done();
      })
  });
});

