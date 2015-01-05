/*global require: false, module: false, describe:false, it:false */

var assert            = require("assert"),
    thicket           = require("../../../../lib-node/thicket"),
    MultiMap = thicket.c("multi-map");

describe("MultiMap", function() {
  it("should store things like a multimap", function() {
    var m = new MultiMap();

    assert.deepEqual(m.get("foo"), []);

    m.put("foo", 1);
    m.put("foo", 2);
    assert.deepEqual(m.get("foo"), [1, 2]);
    assert.equal(m.size(), 2);

    m.put("bar", 9);
    assert.deepEqual(m.get("bar"), [9]);

    assert.ok(m.exists("bar", 9));

    assert.equal(m.size(), 3);

    assert.ok(!m.exists("baz"));

    m.clear();
    assert.equal(m.size(), 0);
  });
});
