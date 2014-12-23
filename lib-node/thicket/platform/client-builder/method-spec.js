/*global require: false, module: false */
"use strict";

var mod = function(
  Lang
) {

  var MethodSpec = Lang.pojoClass(["args", "defaults", "mType", "requestReply"], {
    defaults: {
      args:         [],
      defaults:     {},
      requestReply: true
    }
  });

  return MethodSpec;
};

module.exports = mod(
  require("../../core/lang")
);
