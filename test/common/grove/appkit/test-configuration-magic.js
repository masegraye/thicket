
var assert             = require("assert"),
    grove              = require("../../../../lib-node/grove"),
    ConfigurationMagic = grove.c("configuration-magic");

describe("ConfigurationMagic", function() {
  it("should be defined", function() {
    assert.ok(ConfigurationMagic);
  });
});
