var assert  = require("assert"),
    thicket = require("../../../../lib-node/thicket"),
    HashMap = thicket.c("object-hash-map");

describe("ObjectHashMap", function() {
  it("should get/put/remove/clear/size appropriately", function() {
    var map = new HashMap();
    map.put("one",   1);
    map.put("two",   2);
    map.put("three", 3);
    map.put("four",  6);
    map.put("five",  5);
    assert.equal(map.size(), 5);
    assert.equal(map.remove("five"), 5);
    assert.equal(map.size(), 4);
    assert.ok(map.exists("four"));
    assert.ok(!map.exists("five"));
    map.clear();
    assert.equal(map.size(), 0);
  });
});
