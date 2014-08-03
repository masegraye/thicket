"use strict";

var assert = require("assert"),
    thicket  = require("../../../../lib-node/thicket"),
    Logger = thicket.c("logger");

describe("Logger", function() {
  it("should log to appender, and root logger's appender", function() {
    Logger.resetRootLogger();
    var log = Logger.create("Test");
    var logCount = 0;
    log.addAppender({
      log: function(name, descendants, logLevel, logLevelName, args) {
        logCount++;
        assert.deepEqual(descendants, []);
        assert.equal("Test", name);
        assert.equal(logLevel, Logger.Level.Info);
        assert.equal(logLevelName, "Info");
        assert.equal(args[0], "foo");
        assert.equal(args[1], "bar");
      }
    });

    Logger.root().addAppender({
      log: function(name, descendants, logLevel, logLevelName, args) {
        logCount++;
        assert.deepEqual(descendants, ["Test"]);
        assert.equal("Root", name);
        assert.equal(logLevel, Logger.Level.Info);
        assert.equal(logLevelName, "Info");
        assert.equal(args[0], "foo");
        assert.equal(args[1], "bar");
      }
    });

    log.info("foo", "bar");

    assert.equal(logCount, 2);
  });

  it("should log as appropriate for log level", function() {
    Logger.resetRootLogger();
    var log = Logger.create("Test");
    var logCount = 0;

    log.addAppender({
      log: function(name, descendants, logLevel, logLevelName, args) {
        logCount++;
      }
    });

    assert.equal(logCount, 0);
    // By default, Info is enabled
    log.info("foo");
    assert.equal(logCount, 1);

    // Info > Error
    log.error("foo");
    assert.equal(logCount, 2);

    // Info > Error > Fatal
    log.fatal("foo");
    assert.equal(logCount, 3);

    // This shouldn't hit the appender,
    // since default is Info and Debug > Info
    log.debug("foo");
    // Assert unchanged
    assert.equal(logCount, 3);

    // Set to Debug and try again
    log.setLogLevel(Logger.Level.Debug);
    log.debug("foo");

    assert.equal(logCount, 4);

    // Again, shouldn't hit. Trace > Debug
    log.trace("foo");
    assert.equal(logCount, 4);

    log.setLogLevel(Logger.Level.Trace);
    log.trace("foo");
    assert.equal(logCount, 5);
  });
});
