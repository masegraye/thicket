/*global require: false, describe: false, it: false */

"use strict";

var assert         = require("assert"),
    _              = require("underscore"),
    Promise        = require("bluebird"),
    thicket        = require("../../../../lib-node/thicket"),
    Exchange       = thicket.c("messaging/exchange"),
    InMemoryFiber  = thicket.c("messaging/fibers/in-memory"),
    LinkableFiber  = thicket.c("messaging/fibers/linkable"),
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
        doneLatch    = new CountdownLatch(1, function() {
          exchange.dispose();


          done();
        });

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

  it("should route messages between exchanges if they share the same fiber", function(done) {
    var fiber = new InMemoryFiber(),
        exchange1 = new Exchange({ fiber: fiber }),
        exchange2 = new Exchange({ fiber: fiber }),
        mail1 = exchange1.mailbox("one"),
        mail2 = exchange2.mailbox("two"),
        latch = new CountdownLatch(2, done);

    mail2.requestReplyChannel().subscribe(function(env) {
      assert.equal(env.body.foo, "foo");
      latch.step();
      mail2.reply(env.msgId, {
        to: env.from,
        body: { bar: "bar" }
      });
    })

    mail1
      .sendAndReceive({
        to: "two",
        body: { foo: "foo" }
      })
      .then(function(env) {
        assert.equal(env.body.bar, "bar");
      })
      .lastly(function(){
        latch.step();
      });
  });

  it("should dispatch between two exchanges bound by two linked fibers", function(done) {
    var fiber1 = new LinkableFiber(),
        fiber2 = new LinkableFiber(),
        exchange1 = new Exchange({ fiber: fiber1 }),
        exchange2 = new Exchange({ fiber: fiber2 }),
        mail1 = exchange1.mailbox("one"),
        mail2 = exchange2.mailbox("two"),
        latch = new CountdownLatch(2, done);

    fiber1.listen(fiber2.egressChannel());
    fiber2.listen(fiber1.egressChannel());

    mail2.requestReplyChannel().subscribe(function(env) {
      assert.equal(env.body.foo, "foo");
      latch.step();
      mail2.reply(env.msgId, {
        to: env.from,
        body: { bar: "bar" }
      });
    })

    mail1
      .sendAndReceive({
        to: "two",
        body: { foo: "foo" }
      })
      .then(function(env) {
        assert.equal(env.body.bar, "bar");
      })
      .lastly(function() {
        latch.step();
      });

  });

  it("should allow request cancellation", function(done) {
    var exchange = new Exchange({
          replyTimeout: 10000
        }),
        mail1 = exchange.mailbox("one"),
        mail2 = exchange.mailbox("two"),
        reqId = "FOO_REQ",
        replyReceived = false,
        cancelReceived = false,
        cancelLatch = new CountdownLatch(1, function() {
          mail1.cancelSendAndReceive(reqId);
        });

    mail2.requestReplyChannel().subscribe(function(env) {
      assert.equal(env.body.foo, "foo");
      // Trigger cancellation!
      _.defer(function() {
        cancelLatch.step();
      });
    });

    mail1
      .sendAndReceive({
        to: "two",
        body: { foo: "foo" }
      }, { reqId: reqId })
      .then(function(reply) {
        replyReceived = true;
      })
      .caught(Promise.CancellationError, function() {
        cancelReceived = true;
      })
      .lastly(function() {
        assert.ok(!replyReceived, "received no reply, as expected");
        assert.ok(cancelReceived, "received cancel, as expected");
        done();
      });
  });

});


