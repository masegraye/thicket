"use strict";

var assert         = require("assert"),
    Promise        = require("bluebird"),
    thicket        = require("../../../../lib-node/thicket"),
    Exchange       = thicket.c("messaging/exchange"),
    CountdownLatch = thicket.c("countdown-latch"),
    Logger         = thicket.c("logger");

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

    var exchange = new Exchange(),
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

  it("should respect timeouts", function(done) {
    var exchange = new Exchange({
          expiryInterval: 3
        }),
        mail1    = exchange.mailbox("one");

    mail1
      .sendAndReceive({
        to: "two",
        body: {foo: "foo"}
      }, {replyTimeout: 15})
      .bind({err: null, result: null})
      .then(function(result) {
        this.result = result;
      })
      .caught(Promise.TimeoutError, function(err) {
        this.err = err;
      })
      .lastly(function() {
        assert.ok(this.err);
        assert.ok(!this.result);
        done();
      });
  });
});
