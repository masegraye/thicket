"use strict";

var assert              = require("assert"),
    grove               = require("../../../../../lib-node/grove"),
    ScopedConfiguration = grove.c("scoped-configuration");

describe("ScopedConfiguration", function() {
  it("should resolve blobs regardless of scope order, and unions override in order of number of scopes", function() {
    var scopedConfig = new ScopedConfiguration({
      "aaa"   : {
        "a"   : 1,
        "zzz" : 1
      },
      "bbb+aaa" : {
        "b"   : 2,
        "zzz" : 2,
      },
      "ccc+bbb+aaa" : {
        "c"   : 3,
        "zzz" : 3
      }
    });

    var aaa = scopedConfig.blobForScope("aaa");
    assert.ok(aaa);
    assert.equal(aaa.a, 1);
    assert.equal(aaa.zzz, 1);

    var aaabbb = scopedConfig.blobForScope("bbb+aaa");
    assert.ok(aaabbb);
    assert.equal(aaabbb.b, 2);
    assert.equal(aaabbb.zzz, 2);

    var aaabbbccc = scopedConfig.blobForScope("bbb+ccc+aaa");
    assert.equal(aaabbbccc.c, 3);
    assert.equal(aaabbbccc.zzz, 3);
  });
});
