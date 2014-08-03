"use strict";

var factory = function(
  ComponentLoader
) {
  var c = new ComponentLoader(require);

  c.bulkAlias({
    "./util/component-loader"                       : "component-loader",
    "./core/options"                                : "options",
    "./core/lang"                                   : "lang",
    "./core/ref"                                    : "ref",
    "./core/state-guard"                            : "state-guard",
    "./storage/in-memory-data-store"                : "in-memory-data-store",
    "./storage/caching-data-store"                  : "caching-data-store",
    "./core/sequencer/unit-sequencer"               : ["unit-sequencer", "sequencer"],
    "./core/sequencer/clock-sequencer"              : "clock-sequencer",
    "./time/clock/logical-clock"                    : "logical-clock",
    "./time/clock/system-clock"                     : "system-clock",
    "./appkit/configuration-magic"                  : "configuration-magic",
    "./appkit/config/scoped-configuration-resolver" : "scoped-configuration-resolver",
    "./appkit/config/scoped-configuration"          : ["scoped-configuration", "config/scoped-configuration"],
    "./appkit/app"                                  : "app",
    "./runtime"                                     : "runtime",
    "./logging/logger"                              : "logger",
    "./logging/appenders/console-log-appender"      : ["appenders/console-log", "console-log-appender"]
  });

  return c;
};

module.exports = factory(
  require("./util/component-loader")
);

