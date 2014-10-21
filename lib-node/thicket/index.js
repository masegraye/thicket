/*global require: false, module: false */
"use strict";

var mod = function(
  ComponentRegistry,
  webAliases,
  nodeAliases
) {
  var c = new ComponentRegistry();


  c.registerMany([
    {
      module: require("./util/component-loader"),
      as: "component-loader"
    },

    {
      module: require("./core/countdown-latch"),
      as: "countdown-latch"
    },

    {
      module: require("./core/options"),
      as: "options"
    },

    {
      module: require("./core/lang"),
      as: "lang"
    },

    {
      module: require("./core/ref"),
      as: "ref"
    },

    {
      module: require("./core/state-guard"),
      as: "state-guard"
    },


    {
      module: require("./core/pub-sub"),
      as: "pub-sub"
    },

    {
      module: require("./core/sequencer/unit-sequencer"),
      as: ["unit-sequencer", "sequencer"]
    },


    {
      module: require("./core/sequencer/clock-sequencer"),
      as: "clock-sequencer"
    },

    {
      module: require("./core/sequencer/delegating-composite-sequencer"),
      as: "delegating-composite-sequencer"
    },

    {
      module: require("./core/sequencer/delegating-forwarding-sequencer"),
      as: "delegating-forwarding-sequencer"
    },

    {
      module: require("./collection/doubly-linked-list"),
      as: "doubly-linked-list"
    },

    {
      module: require("./collection/object-hash-map"),
      as: ["hash-map", "object-hash-map"]
    },

    {
      module: require("./collection/lru-hash-map"),
      as: "lru-hash-map"
    },

    {
      module: require("./storage/caching-data-store"),
      as: "caching-data-store"
    },

    {
      module: require("./storage/in-memory-data-store"),
      as: "in-memory-data-store"
    },

    {
      module: require("./storage/lru-data-store"),
      as: "lru-data-store"
    },

    {
      module: require("./time/clock/logical-clock"),
      as: "logical-clock"
    },

    {
      module: require("./time/clock/system-clock"),
      as: "system-clock"
    },

    {
      module: require("./appkit/configuration-magic"),
      as: "configuration-magic"
    },

    {
      module: require("./appkit/config/scoped-configuration-resolver"),
      as: "scoped-configuration-resolver"
    },

    {
      module: require("./appkit/config/scoped-configuration"),
      as: ["scoped-configuration", "config/scoped-configuration"]
    },

    {
      module: require("./appkit/app"),
      as: "app"
    },

    {
      module: require("./runtime"),
      as: "runtime"
    },

    {
      module: require("./logging/logger"),
      as: "logger"
    },

    {
      module: require("./logging/appenders/console-log-appender"),
      as: ["appenders/console-log", "console-log-appender"]
    },

    {
      module: require("./reactive/reactor"),
      as: "reactor"
    },

    {
      module: require("./messaging/channel"),
      as: "messaging/channel"
    },

    {
      module: require("./core/uuid"),
      as: "uuid"
    }
  ]);

  c.selfRegister({
    as: "component-registry"
  });

  webAliases(c);
  nodeAliases(c);

  return c;
};

var g = (typeof window === "undefined" ? {} : window);
g.thicket = module.exports = mod(
  require("./util/component-registry"),
  require("./web"),
  require("./node")
);
