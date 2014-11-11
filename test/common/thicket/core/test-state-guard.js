
var assert     = require("assert"),
    Promise    = require("bluebird"),
    thicket    = require("../../../../lib-node/thicket"),
    StateGuard = thicket.c("state-guard");

describe("StateGuard", function() {
  it("should chain", function() {
    var guard = new StateGuard(["one", "two", "three", "four"]);
    assert.doesNotThrow(function() {
      guard
        .apply("one")
        .ensure("one")
        .deny("two")
        .apply("two", "three")
        .unapply("two", "three")
        .apply(["two", "three"])
        .ensure("one", "two")
        .ensure(["one", "two"]);
    });
    assert.ok(guard.applied("one", "two"));
    assert.ok(guard.applied(["one", "two"]));
    guard.unapply(["one"]);
    guard.unapply("three", "two");
    assert.ok(!guard.applied("one", "two", "three"));
  });

  it("should chain with promises", function(done) {
    var guard = new StateGuard(["one", "two", "three", "four"]);
    Promise
      .bind(this)
      .then(guard.applyAsyncFn("one"))
      .then(guard.applyAsyncFn("two", "three"))
      .then(function(){
        assert.ok(this.applied("one", "two", "three"));
      })
      .caught(function(err) {
        assert.equal(err && err.message, "");
      })
      .caught(function() {
        done();
      });
  });

  it("should throw on assertion failure", function(done) {
    var thrownCount = 0,
        guard       = new StateGuard(["one", "two", "three", "four", "five"]);

    Promise
      .bind(this)
      .then(guard.applyAsyncFn("one"))
      .then(guard.ensureAsyncFn("one"))
      .then(guard.denyAsyncFn("two"))
      .then(guard.applyAsyncFn("two", "three"))
      .then(guard.applyAsyncFn(["four", "five"]))
      .then(guard.unapplyAsyncFn("four"))
      .then(guard.ensureAsyncFn("four"))
      .caught(function(err) {
        thrownCount++;
      })
      .then(function() {
        assert.equal(thrownCount, 1);
      })
      .then(guard.denyAsyncFn("five"))
      .caught(function(err) {
        thrownCount++;
      })
      .then(function() {
        assert.equal(thrownCount, 2);
      })
      .lastly(function() {
        assert.equal(thrownCount, 2);
        done();
      });
  });

  it("should support scoped guards", function() {
    var guard = (new StateGuard(["one"])).scope("one"),
        guardTwo = StateGuard.scoped("two");

    assert.throws(function() {
      guard.ensure();
    });

    guard.deny();
    guard.apply();

    assert.throws(function() {
      guard.deny();
    });

    guard.unapply();

    assert.throws(function() {
      guard.ensure();
    });

    guard.deny();

    assert.ok(guardTwo);
    guardTwo.apply();
    assert.ok(guardTwo.applied());

  });
});
