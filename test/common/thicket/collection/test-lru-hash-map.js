var assert     = require("assert"),
    thicket    = require("../../../../lib-node/thicket"),
    LRUHashMap = thicket.c("lru-hash-map");

describe("LRUHashMap", function() {
  it("should get/put/remove properly", function() {
    var map = new LRUHashMap({
      capacity: 3
    });
    map.put("one", 1);
    map.put("two", 2);
    map.put("three", 3);
    assert.equal(map.size(), 3);
    assert.equal(map.get("one"), 1);
    assert.equal(map.get("two"), 2);
    assert.equal(map.get("three"), 3);
    assert.equal(map.remove("one"), 1);
    assert.equal(map.get("one", undefined));
    assert.ok(!map.exists("one"));
    assert.ok(map.exists("two"));

    map.put("four", 4);
    assert.equal(map.size(), 3);
    // This should cause "two" to be evicted
    map.put("five", 5);
    assert.equal(map.size(), 3);

    assert.ok(!map.exists("two"));
    assert.ok(map.exists("three"));

    // At this point "three" should be at the tail of the list. Getting
    // should refresh it, so that "four" is evicted next
    assert.equal(map.get("three"), 3);
    map.put("six", 6);
    // Should have survived
    assert.ok(map.exists("three"));
    // Should have been evicted
    assert.ok(!map.exists("four"));

    assert.ok(map.exists("six"));

    assert.equal(map.size(), 3);
  });
});
