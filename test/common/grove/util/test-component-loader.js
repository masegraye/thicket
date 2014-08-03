"use strict";

var _               = require("underscore"),
    assert          = require("assert"),
    thicket         = require("../../../../lib-node/thicket"),
    ComponentLoader = thicket.c("component-loader");

var RequireTracker = function() {
  this.initialize.apply(this, arguments);
};

_.extend(RequireTracker.prototype, {
  initialize: function() {
    this._requiredModules = {};
    _.bindAll(this, "require");
  },
  require: function(mod) {
    this._requiredModules[mod] = this._requiredModules[mod] || 0;
    this._requiredModules[mod]++;
    return "REQUIRE";
  },
  count: function(mod) {
    return this._requiredModules[mod] || 0;
  }
});

describe("ComponentLoader", function() {
  it("should be defined", function() {
    assert.ok(ComponentLoader);
  });

  it("should load a module given an alias", function() {
    var tracker = new RequireTracker(),
        loader = new ComponentLoader(tracker.require);

    loader.alias({module: "deep/one", as: "one"});
    loader.bulkAlias({
      "deep/two"   : "two",
      "deep/three" : ["three", "another-three"]
    });
    assert.equal(loader.c("one"),           "REQUIRE");
    assert.equal(loader.c("two"),           "REQUIRE");
    assert.equal(loader.c("three"),         "REQUIRE");
    assert.equal(loader.c("another-three"), "REQUIRE");

    assert.equal(tracker.count("deep/one"),   1);
    assert.equal(tracker.count("deep/two"),   1);
    assert.equal(tracker.count("deep/three"), 2);
  });

});
