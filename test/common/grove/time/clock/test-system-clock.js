"use strict";

var assert       = require("assert"),
    Promise      = require("bluebird"),
    thicket        = require("../../../../../lib-node/thicket"),
    SystemClock = thicket.c("system-clock");

describe("SystemClock", function() {
  it("should be defined", function() {
    assert.ok(SystemClock);
  });

  it("should advance with system time", function(done) {
    var clock = new SystemClock();
    Promise
      .bind({})
      .then(function() {
        return clock.getTime();
      })
      .then(function(time) {
        assert.ok(time > 0);
        this.lastTime = time;
        // Wait 30 ms, then see if we've actually been delayed 30ms (or more)
        return Promise
          .delay(30)
          .then(function() {
            return clock.getTime();
          });
      })
      .then(function(time) {
        assert.ok(this.lastTime + 30 <= time)
      })
      .caught(function(err) {
        assert.equal(err && err.message, false);
      })
      .lastly(function() {
        done();
      })
  });
});

