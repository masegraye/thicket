"use strict";

var assert         = require("assert"),
    thicket        = require("../../../../lib-node/thicket"),
    ChainedChannel = thicket.c("messaging/chained-channel"),
    Channel        = thicket.c("messaging/channel");

describe("Chained Channel", function() {
  it("should forward messages from original channel", function() {
    var sentinel1 = {},
        sentinel2 = {},
        c1 = new Channel({ sentinel: sentinel1 }),
        c2 = new ChainedChannel({ sentinel: sentinel2 }),
        dispatchCount = 0;

    c2.chainTo(c1);

    c1.subscribe(function(msg) {
      dispatchCount++;
      assert.ok(msg.foo);
    });

    c2.subscribe(function() {
      dispatchCount++;
    });

    c1.publish(sentinel1, { foo: true });
    c2.publish(sentinel2, { bar: true });

    assert.equal(dispatchCount, 3);

    c2.dispose();

    c1.publish(sentinel1, { foo: true });
    assert.equal(dispatchCount, 4);
  });

  it("should allow for an initially chained channel", function() {
    var sentinel1 = {},
        sentinel2 = {},
        c1 = new Channel({ sentinel: sentinel1 }),
        c2 = new ChainedChannel({
          sentinel: sentinel2,
          chainTo: c1
        }),
        dispatchCount = 0;

    c2.subscribe(function() {
      dispatchCount++;
    });

    c1.publish(sentinel1, {});
    assert.equal(dispatchCount, 1);
  });
})
