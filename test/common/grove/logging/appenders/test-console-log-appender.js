
"use strict";

var assert             = require("assert"),
    grove              = require("../../../../../lib-node/grove"),
    Logger             = grove.c("logger"),
    ConsoleLogAppender = grove.c("appenders/console-log");

describe("ConsoleLogAppender", function() {
  it("should log to the provided console", function() {
    Logger.resetRootLogger();
    var log = Logger.create("Test"),
        callCount = 0;

    var c = {
      log: function(meta, arg1, arg2){
        callCount++;
        assert.equal(meta, "[Debug][Test][NOW]");
        assert.equal(arg1, "one");
        assert.equal(arg2, "two");
      }
    };

    log.addAppender(new ConsoleLogAppender({console: c, timeDelegate: function() {
      return "NOW";
    }}));

    log.setLogLevel(Logger.Level.Debug);

    log.debug("one", "two");
    assert.equal(callCount, 1);

  });
});
