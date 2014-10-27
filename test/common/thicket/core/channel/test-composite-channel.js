"use strict";

var assert           = require("assert"),
    thicket          = require("../../../../../lib-node/thicket"),
    CompositeChannel = thicket.c("composite-channel"),
    Channel          = thicket.c("channel");

describe("CompositeChannel", function() {
  it("should composite channels", function() {

    var dispatchCount = 0,
        sentinel = {},
        c1 = new Channel({ sentinel: sentinel }),
        c2 = new Channel({ sentinel: sentinel }),
        composite = new CompositeChannel({ sentinel: sentinel, listen: c1 });

    composite.listen(c2);

    composite.subscribe(function(msg) {
      if (msg.foo) {
        dispatchCount++;
        assert.equal(msg.foo, "foo");
      } else if (msg.bar) {
        dispatchCount++;
        assert.equal(msg.bar, "bar");
      } else if (msg.baz) {
        dispatchCount++;
        assert.equal(msg.baz, "baz");
      } else {
        throw new Error("Shouldn't have gotten here.");
      }
    });

    c1.publish(sentinel, { foo: "foo" });
    c2.publish(sentinel, { bar: "bar" });
    composite.publish(sentinel, { baz: "baz" });
    assert.equal(dispatchCount, 3);
  });
});
