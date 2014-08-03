"use strict";

var assert         = require("assert"),
    Promise        = require("bluebird"),
    thicket          = require("../../../../../lib-node/thicket"),
    LogicalClock   = thicket.c("logical-clock"),
    ClockSequencer = thicket.c("clock-sequencer");

describe("ClockSequencer", function() {
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
