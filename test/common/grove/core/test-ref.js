"use strict";

var assert = require("assert"),
    thicket  = require("../../../../lib-node/thicket"),
    Ref    = thicket.c("ref");

describe("Ref", function() {
  describe("Standard Ref", function() {
    it("should update on `set()`", function() {
      var one = Ref(1),
          two = Ref(2);

      assert.ok(one);
      assert.ok(two);
      assert.equal(one.get(), 1);
      assert.equal(two.get(), 2);

      one.set(3);
      assert.equal(one.get(), 3);
    });
  });

  describe("Delegating Ref", function() {
    it("should delegate to underlying ref", function() {
      var source = Ref("source"),
          d1     = Ref.delegating(source),
          d2     = Ref.delegating(source);

      assert.ok(source);
      assert.ok(d1);
      assert.ok(d2);

      assert.equal(d1.get(), "source");
      assert.equal(d2.get(), "source");

      source.set("source-2");
      assert.equal(d1.get(), "source-2");
      assert.equal(d2.get(), "source-2");
    });


  });


});
