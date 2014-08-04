var _        = require("underscore"),
    Promise  = require("bluebird"),
    assert   = require("assert"),
    thicket  = require("../../../../lib-node/thicket"),
    Reactive = thicket.c("reactive");

describe("Reactive", function() {
  it("can map from a promise", function(done) {
    var mapCount = 0;

    var resolver,
        p = new Promise(function(resolve, reject) {
          resolver = resolve;
        });
    var c = Reactive.fromPromise(p).map(function(val) {
      mapCount++;
      return val.toUpperCase();
    }).map(function(val) {
      mapCount++;
      assert.equal(val, "RESOLVED_VALUE");
      assert.equal(mapCount, 2);
      done();
    });
    assert.ok(c);
    process.nextTick(function() {
      resolver("resolved_value");
    });
  });

  it("can filter values as well", function(done) {
    Reactive([1, 2, 3, 4])
      .map(function(val) {
        return val + 1;
      })
      .filter(function(val) {
        return val % 2 == 0;
      })
      .map(function(val) {
        assert.ok(val % 2 == 0);
        done()
      });
  });
});
