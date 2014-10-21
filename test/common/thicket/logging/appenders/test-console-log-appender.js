
"use strict";

var assert             = require("assert"),
    thicket            = require("../../../../../lib-node/thicket"),
    Logger             = thicket.c("logger"),
    ConsoleLogAppender = thicket.c("appenders/console-log");

describe("ConsoleLogAppender", function() {
  it("should log to the provided console", function() {
    Logger.resetRootLogger();
    var log = Logger.create("Test"),
        callCount = 0;

    var c = {
      log: function(meta, arg1, arg2){
        callCount++;
        assert.equal(meta, "[Debug][NOW][Test]");
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
