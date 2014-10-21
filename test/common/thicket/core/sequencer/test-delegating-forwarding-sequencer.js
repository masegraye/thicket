var assert                        = require("assert"),
    Promise                       = require("bluebird"),
    thicket                       = require("../../../../../lib-node/thicket"),
    UnitSequencer                 = thicket.c("unit-sequencer"),
    DelegatingForwardingSequencer = thicket.c("delegating-forwarding-sequencer");

describe("DelegatingForwardingSequencer", function() {
  it("should forward advance calls to other sequencers", function(done) {
    var caughtCount = 0,
        delegate    = new UnitSequencer(),
        seq1        = new UnitSequencer(),
        seq2        = new UnitSequencer(),
        forwarding  = new DelegatingForwardingSequencer({
          delegate: delegate,
          targets: [seq1, seq2]
        });

    Promise.attempt(function() {
      return forwarding.advance();
    })
    .then(function() {
      assert.equal(seq1.value(), 1);
      assert.equal(seq2.value(), 1);
      assert.equal(delegate.value(), 1);
      assert.equal(forwarding.value(), 1);
      return delegate.advance();
    })
    .then(function() {
      assert.equal(seq1.value(), 1);
      assert.equal(forwarding.value(), 2);
    })
    .caught(function(err) {
      assert.equal(err && err.message, "");
      caughtCount++;
    })
    .lastly(function() {
      assert.equal(caughtCount, 0);
      done();
    });
  });
});
