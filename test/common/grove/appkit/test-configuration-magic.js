
var assert             = require("assert"),
    thicket              = require("../../../../lib-node/thicket"),
    ConfigurationMagic = thicket.c("configuration-magic");

describe("ConfigurationMagic", function() {
  it("should be defined", function() {
    assert.ok(ConfigurationMagic);
  });
});
