"use strict";

var assert         = require("assert"),
    _              = require("underscore"),
    thicket        = require("../../../../lib-node/thicket"),
    Exchange       = thicket.c("messaging/exchange"),
    CountdownLatch = thicket.c("countdown-latch"),
    Logger         = thicket.c("logger"),
    CLA            = thicket.c("appenders/console-log");

describe("Exchange", function() {

  it("should vend mailboxes", function() {
    var exchange = new Exchange(),
        mail1 = exchange.mailbox("one");

    assert.ok(mail1);
  });

  it("should send a message from one mailbox to the next", function(done) {

    var exchange     = new Exchange(),
        mail1        = exchange.mailbox("one"),
        mail2        = exchange.mailbox("two"),
        receiveCount = 0,
        doneLatch    = new CountdownLatch(1, done);

    assert.ok(mail1);
    assert.ok(mail2);


    mail2.inboundChannel().subscribe(function(msg) {
      receiveCount++;

      assert.equal(msg.from, "one", "message sent from one");
      assert.equal(msg.to,   "two", "message sent to two");

      assert.ok(msg.body);
      assert.ok(msg.body.foo);

      doneLatch.step();
    });

    mail1.send({
      to: "two",
      body: { foo: true }
    }).then(function() {
      setTimeout(done, 100);
    });

  });

});
