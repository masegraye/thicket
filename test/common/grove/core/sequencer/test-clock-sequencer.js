"use strict";

var assert         = require("assert"),
    Promise        = require("bluebird"),
    grove          = require("../../../../../lib-node/grove"),
    LogicalClock   = grove.c("logical-clock"),
    ClockSequencer = grove.c("clock-sequencer");

describe("UnitSequencer", function() {
  it("should advance on demand", function(done) {
    var clock = new LogicalClock();
    var sequencer = new ClockSequencer({
      clock: clock
    });

    Promise
      .attempt(function() {
        assert.equal(sequencer.value(), 0);
        return clock.advanceTime({by: 10}).then(function() {
          return sequencer.advance();
        });
      })
      .then(function() {
        assert.equal(sequencer.value(), 10);
        return clock.advanceTime({to: 20}).then(function() {
          return sequencer.advance(10);
        });
      })
      .then(function() {
        assert.equal(sequencer.value(), 20);
      })
      .caught(function(err) {
        assert.equal(err && err.message, false);
      })
      .lastly(function() {
        done();
      });
  });
});
