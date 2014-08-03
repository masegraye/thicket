"use strict";

var assert   = require("assert"),
    thicket  = require("../../../../lib-node/thicket"),
    Options  = thicket.c("options");

describe("Options", function() {
  it("should be defined", function() {
    assert.ok(Options);
  });

  it("should allow instantiation", function() {
      var opts = new Options({
          one: 1,
          two: null,
          three: 3,
          four: undefined,
          five: false
      });
      assert.ok(opts);
  });

  it("should allow factory construction", function() {
      var opts = Options.fromObject({
          one: 1,
          two: null,
          three: 3,
          four: undefined,
          five: false
      });
      assert.ok(opts);
  });

  describe("getOrElse", function() {
      it("should use provided values on non-null and non-undefined keys, default otherwise", function() {
          var opts = Options.fromObject({
              one: 1,
              two: null,
              three: 3,
              four: undefined,
              five: false
          });

          assert.equal(opts.getOrElse("one", -1), 1);
          assert.equal(opts.getOrElse("two", -1), -1);
          assert.equal(opts.getOrElse("three", -1), 3);
          assert.equal(opts.getOrElse("four", -1), -1);
          assert.equal(opts.getOrElse("five", -1), false);
      });
  });

  describe("getOrError", function() {
      it("should use provided values on non-null and non-undefined keys, throw otherwise", function() {
          var opts = Options.fromObject({
              one: 1,
              two: null,
              three: 3,
              four: undefined,
              five: false
          });

          assert.equal(opts.getOrError("one"), 1);
          assert.throws(function() {
              opts.getOrError("two");
          });
          assert.equal(opts.getOrError("three"), 3);
          assert.throws(function() {
              opts.getOrError("four");
          })
          assert.equal(opts.getOrError("five"), false);
      });
  });

  describe("getOrElseFn", function() {
      it("should complain when called without defaultValueFn", function() {
          var opts = Options.fromObject({
              one: 1
          });
          assert.throws(function() {
              opts.getOrElseFn("one");
          });
      });

      it("should use evaluated defaultValueFn value as default, if provided key isn't present", function() {
          var opts = Options.fromObject({
              one: 1
          });
          assert.equal(opts.getOrElseFn("one", function() { return -1 }), 1);
          assert.equal(opts.getOrElseFn("two", function() { return -1 }), -1);
      })
  });
});
