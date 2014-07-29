"use strict";

var assert   = require("assert"),
    grove    = require("../../../../lib-node/grove"),
    Options  = grove.c("options");

describe("Options", function() {
  it("should be defined", function() {
    assert.ok(Options);
  })
});
