"use strict";

var assert  = require("assert"),
    thicket = require("../../../../lib-node/thicket"),
    Channel = thicket.c("messaging/channel"),
    _       = require("underscore");

describe("Message Channel", function() {
  it("should honor sentinel rules", function() {
    var sentinel = {};
    var c = new Channel({ sentinel: sentinel });

    assert.throws(function() {
      c.publish({}, {});
    }, "should throw due to incorrect sentinel");

    assert.ok(c.publish(sentinel, {}));
  });

  it("should transmit messages to subscribers", function() {
    var sentinel = {},
        receiveCount = 0,
        sub1 = function(msg) {
          assert.equal(msg.foo, true);
          receiveCount++;
        },
        sub2 = function(msg) {
          assert.equal(msg.foo, true);
          receiveCount++;
        },
        c = new Channel({ sentinel: sentinel }),
        subs = [];

    subs.push(c.subscribe(sub1));
    subs.push(c.subscribe(sub2));
    // Push #2 twice; make sure we have distinct subscriptions
    subs.push(c.subscribe(sub2));

    assert.ok(_.every(subs, _.isObject));
    assert.ok(_.every(_.pluck(subs, "dispose"), _.isFunction));

    c.publish(sentinel, { foo: true });

    assert.equal(receiveCount, 3, "three dispatches");

    subs[0].dispose();
    subs[1].dispose();

    c.publish(sentinel, { foo: true });

    assert.equal(receiveCount, 4, "four dispatches");

    subs[2].dispose();
    c.publish(sentinel, { foo: true });

    assert.equal(receiveCount, 4, "still four dispatches");

    // Make sure you can dispose idempotently
    _.invoke(subs, "dispose");

    subs = [];
    subs.push(c.subscribe(sub1));

    assert.ok(!c.isDisposed());

    c.dispose();

    assert.ok(c.isDisposed());

    assert.throws(function() {
      c.subscribe(sub2);
    });

    assert.throws(function() {
      c.publish(sentinel, {});
    });

  });
});
