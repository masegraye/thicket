var assert                      = require("assert"),
    thicket                     = require("../../../../../lib-node/thicket"),
    ScopedConfigurationResolver = thicket.c("scoped-configuration-resolver");

describe("ScopedConfigurationResolver", function() {
  it("should be defined", function() {
    assert.ok(ScopedConfigurationResolver);
  })

  it("should resolve multiple configs, given multiple scopes", function() {
    var resolver = new ScopedConfigurationResolver();
    resolver
      .add({
        "aaa" : {
          "a": 1
        }
      })
      .add({
        "bbb" : {
          "b" : 2
        }
      })
      .add({
        "bbb+aaa" : {
          "ab" : 3
        }
      })
      .add({
        "aaa+ccc+bbb" : {
          "abc" : 4
        }
      })
      .add({
        "aaa+ccc" : {
          "ac" : 5
        }
      });

    assert.deepEqual(resolver.resolve(["aaa"]), {
      "a": 1
    });

    assert.deepEqual(resolver.resolve(["bbb"]), {
      "b": 2
    });

    assert.deepEqual(resolver.resolve(["bbb", "aaa"]), {
      "a": 1,
      "b": 2,
      "ab": 3
    });

    assert.deepEqual(resolver.resolve(["ccc", "aaa"]), {
      "a": 1,
      "ac": 5
    });

  });
});
