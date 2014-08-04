var _        = require("underscore"),
    Promise  = require("bluebird"),
    assert   = require("assert"),
    thicket  = require("../../../../lib-node/thicket"),
    Reactive = thicket.c("reactive");

describe("Reactive", function() {
  it("can map and filter from a promise", function(done) {
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
});
