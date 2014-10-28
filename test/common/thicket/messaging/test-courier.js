"use strict";

var assert         = require("assert"),
    Promise        = require("bluebird"),
    thicket        = require("../../../../lib-node/thicket"),
    Exchange       = thicket.c("messaging/exchange"),
    Courier        = thicket.c("messaging/courier"),
    CountdownLatch = thicket.c("countdown-latch");

describe("Courier", function() {
  it("should dispatch wrapped message to delegate", function(done) {
    var exchange      = new Exchange(),
        dispatchCount = 0,
        mail1         = exchange.mailbox("one"),
        mail2         = exchange.mailbox("two"),
        latch         = new CountdownLatch(1, done),
        responder2    = {
          onMsgFoo: function(msg) {
            dispatchCount++;
            assert.equal(msg.foo.bar, "bar");
            latch.step();
          }
        },
        courier2 = new Courier({
          delegate: responder2,
          mailbox: mail2
        });

    mail1.send({
      to: "two",
      body: {
        mT: "foo",
        foo: {
          bar: "bar"
        }
      }
    });

  });
});
