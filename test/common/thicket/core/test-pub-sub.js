var _       = require("underscore"),
    assert  = require("assert"),
    thicket = require("../../../../lib-node/thicket"),
    PubSub  = thicket.c("pub-sub");

describe("PubSub", function() {
  it("should pubsub", function() {
    var notifyCount = {
      foo: 0,
      bar: 0
    };

    var p = _.extend({}, PubSub);

    p.on("foo", function(foo) {
      assert.equal(foo, "foo");
      notifyCount.foo++;
    });

    var barHandler = function(bar) {
      assert.equal(bar, "bar");
      notifyCount.bar++;
    };

    p.on("bar", barHandler);

    p.notify("foo", "foo");
    p.notify("bar", "bar");

    assert.equal(notifyCount.foo, 1);
    assert.equal(notifyCount.bar, 1);

    p.off("bar", barHandler);

    p.notify("bar", "bar");
    assert.equal(notifyCount.bar, 1);
  });
});
