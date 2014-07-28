"use strict";

var factory = function(
  ComponentLoader
) {
  var c = new ComponentLoader(require);

  c.bulkAlias({
    "./util/component-loader"        : "component-loader",
    "./core/options"                 : "options",
    "./core/lang"                    : "lang",
    "./storage/in-memory-data-store" : "in-memory-data-store",
    "./storage/caching-data-store"   : "caching-data-store",
    "./storage/internal/sequencer"   : "sequencer"
  });

  return c;
};

module.exports = factory(
  require("./util/component-loader")
);

