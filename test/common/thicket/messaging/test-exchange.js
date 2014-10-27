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


    mail2.ingressChannel().subscribe(function(msg) {
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
    });

  });

  it("should send and receive (without friendly helper)", function(done) {

    var exchange = new Exchange({
          replyTimeout: 50
        }),
        mail1     = exchange.mailbox("one"),
        mail2     = exchange.mailbox("two"),
        doneLatch = new CountdownLatch(2, done);

    mail2.requestReplyChannel().subscribe(function(env) {
      if (env.mT === Exchange.MSG_SEND_AND_RECEIVE) {
        assert.equal(env.body.foo, "foo");
        doneLatch.step();
        mail2.reply(env.msgId, {
          to: env.from,
          body: {bar: "bar"}
        });
      } else {
        throw new Error("Should not have gotten this");
      }
    });

    mail1
      .sendAndReceive({
        to: "two",
        body: {foo:"foo"}
      })
      .then(function(env) {
        assert.equal(env.body.bar, "bar");
      })
      .lastly(function() {
        doneLatch.step();
      });
  });

});
