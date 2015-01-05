/*global require: false, module: false, describe:false, it:false */

var assert            = require("assert"),
    thicket           = require("../../../../lib-node/thicket"),
    DefaultingHashMap = thicket.c("defaulting-hash-map");

describe("DefaultingHashMap", function() {
  it("should return a default value if not present", function() {
    var m = new DefaultingHashMap({
      defaultFn: function(key) {
        return key + "-FOO";
      }
    });

    m.put("one", 1);
    m.put("two", 2);

    assert.equal(m.get("one"), 1);
    assert.equal(m.get("two"), 2);
    assert.equal(m.get("three"), "three-FOO");

    m.remove("two");
    assert.equal(m.get("two"), "two-FOO");
    assert.equal(m.size(), 3);
  });
});
