"use strict";

var assert        = require("assert"),
    Promise       = require("bluebird"),
    grove         = require("../../../../../lib-node/grove"),
    UnitSequencer = grove.c("unit-sequencer");

describe("UnitSequencer", function() {
  it("should advance on demand", function(done) {
    var sequencer = new UnitSequencer();
    Promise
      .attempt(function() {
        assert.equal(sequencer.value(), 0);
        return sequencer.advance();
      })
      .then(function() {
        assert.equal(sequencer.value(), 1);
        return sequencer.advance(10);
      })
      .then(function() {
        assert.equal(sequencer.value(), 11);
      })
      .caught(function(err) {
        assert.equal(err && err.message, false);
      })
      .lastly(function() {
        done();
      });
  });
});
