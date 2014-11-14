"use strict";

var assert  = require("assert"),
    thicket = require("../../../../lib-node/thicket"),
    Lang     = thicket.c("lang");

describe("Lang", function() {
  describe("pojo", function() {
    it("should make a pojo-like thing with all required attributes", function() {
      var MyKlass = Lang.pojoClass(["one", "two"]);

      assert.ok(MyKlass);

      var instance = new MyKlass({
        one: 1,
        two: 2
      });

      assert.ok(instance.one);
      assert.ok(instance.two);
      assert.ok(instance.setOne);
      assert.ok(instance.setTwo);

      assert.equal(instance.one(), 1);
      assert.equal(instance.two(), 2);

      instance.setTwo(3);
      assert.equal(instance.two(), 3);
      assert.equal(instance.one(), 1);

    });

    it("should support optional options", function() {
      var MyKlass = Lang.pojoClass(["foo", "bar"], {
        defaults: {
          bar: "bar"
        }
      });

      assert.throws(function() {
        new MyKlass();
      });

      assert.throws(function() {
        new MyKlass({
          bar: "BAR"
        });
      });

      var instance = new MyKlass({
        foo: "foo"
      });

      assert.equal(instance.foo(), "foo");
      assert.equal(instance.bar(), "bar");

      instance = new MyKlass({
        foo: "foo",
        bar: "BAZ"
      });

      assert.equal(instance.foo(), "foo");
      assert.equal(instance.bar(), "BAZ");

      assert.ok(instance instanceof MyKlass);
    });
  });
});
