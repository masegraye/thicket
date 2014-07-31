"use strict";

var assert = require("assert"),
    grove  = require("../../../../lib-node/grove"),
    App    = grove.c("app");

describe("App", function() {
  it("should be defined", function() {
    assert.ok(App);
  });
});
