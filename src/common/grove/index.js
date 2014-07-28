"use strict";

var factory = function(
  ComponentLoader
) {
  var c = new ComponentLoader(require);

  c.bulkAlias({
    "./util/component-loader" : "component-loader",
    "./core/options"          : "options",
    "./core/lang"             : "lang"
  });

  return c;
};

module.exports = factory(
  require("./util/component-loader")
);

