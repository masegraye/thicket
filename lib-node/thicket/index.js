"use strict";

var factory = function(
  ComponentLoader,
  webAliases,
  nodeAliases
) {
  var c = new ComponentLoader(require);

  c.bulkAlias({
    "./util/component-loader"                          : "component-loader",
    "./core/options"                                   : "options",
    "./core/lang"                                      : "lang",
    "./core/ref"                                       : "ref",
    "./core/state-guard"                               : "state-guard",
    "./core/pub-sub"                                   : "pub-sub",
    "./core/sequencer/unit-sequencer"                  : ["unit-sequencer", "sequencer"],
    "./core/sequencer/clock-sequencer"                 : "clock-sequencer",
    "./core/sequencer/delegating-composite-sequencer"  : "delegating-composite-sequencer",
    "./core/sequencer/delegating-forwarding-sequencer" : "delegating-forwarding-sequencer",
    "./collection/doubly-linked-list"                  : "doubly-linked-list",
    "./collection/lru-hash-map"                        : "lru-hash-map",
    "./storage/caching-data-store"                     : "caching-data-store",
    "./storage/in-memory-data-store"                   : "in-memory-data-store",
    "./time/clock/logical-clock"                       : "logical-clock",
    "./time/clock/system-clock"                        : "system-clock",
    "./appkit/configuration-magic"                     : "configuration-magic",
    "./appkit/config/scoped-configuration-resolver"    : "scoped-configuration-resolver",
    "./appkit/config/scoped-configuration"             : ["scoped-configuration", "config/scoped-configuration"],
    "./appkit/app"                                     : "app",
    "./runtime"                                        : "runtime",
    "./logging/logger"                                 : "logger",
    "./logging/appenders/console-log-appender"         : ["appenders/console-log", "console-log-appender"],
    "./reactive/reactor"                               : "reactor"
  });

  webAliases(c);
  nodeAliases(c);

  return c;
};

module.exports = factory(
  require("./util/component-loader"),
  require("./web"),
  require("./node")
);

