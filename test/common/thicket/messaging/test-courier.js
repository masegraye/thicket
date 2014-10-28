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
        mail1         = exchange.mailbox("one"),
        mail2         = exchange.mailbox("two"),
        latch         = new CountdownLatch(1, done),
        responder2    = {
          onMsgFoo: function(msg) {
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

  it("should dispatch a requestReply and ferry back a response on success", function(done) {
    var exchange = new Exchange(),
        mail1 = exchange.mailbox("one"),
        mail2 = exchange.mailbox("two"),
        latch = new CountdownLatch(1, done),
        responder2 = {
          onReqFoo: Promise.method(function(msg) {
            assert.equal(msg.foo, "foo");
            return {baz: "baz"};
          })
        },
        courier1 = new Courier({
          delegate: {},
          mailbox: mail1
        }),
        courier2 = new Courier({
          delegate: responder2,
          mailbox: mail2
        });

    courier1
      .sendAndReceive("two", {
        mT: "foo",
        foo: "foo"
      })
      .then(function(res) {
        assert.equal(res.baz, "baz");
        latch.step();
      });
  });

  it("should dispatch a requestReply and ferry back an error on error", function(done) {
    var exchange = new Exchange(),
        resCount = 0,
        errCount = 0,
        mail1 = exchange.mailbox("one"),
        mail2 = exchange.mailbox("two"),
        latch = new CountdownLatch(1, done),
        responder2 = {
          onReqFoo: Promise.method(function(msg) {
            assert.equal(msg.foo, "foo");
            throw new Error("BOOHOO");
          })
        },
        courier1 = new Courier({
          delegate: {},
          mailbox: mail1
        }),
        courier2 = new Courier({
          delegate: responder2,
          mailbox: mail2
        });

    courier1
      .sendAndReceive("two", {
        mT: "foo",
        foo: "foo"
      })
      .then(function(resp) {
        resCount++;
        assert.ok(!resp);
      })
      .caught(function(err) {
        errCount++;
        assert.equal(err.message, "BOOHOO");
      })
      .lastly(function() {
        assert.equal(resCount, 0);
        assert.equal(errCount, 1);
        latch.step();
      });
  });

});
