"use strict";

var _       = require("underscore"),
    Promise = require("bluebird"),
    assert  = require("assert"),
    thicket   = require("../../../../lib-node/thicket"),
    App     = thicket.c("app"),
    Logger  = thicket.c("logger"),
    CLA     = thicket.c("appenders/console-log");

describe("App", function() {
  it("should be defined", function() {
    assert.ok(App);
  });

  it("should start and stop", function(done) {
    Logger.resetRootLogger();
    // Logger.root().addAppender(new CLA());
    // Logger.root().setLogLevel(Logger.Level.Debug);

    var MyApp = function() {
      this.initialize.apply(this, arguments);
    };
    _.extend(MyApp.prototype, App.prototype, {
      initialize: function() {
        App.prototype.initialize.apply(this, arguments);
        this.counts = {
          up: 0,
          down: 0
        };
      },

      up: Promise.method(function() {
        this.counts.up++;
      }),

      down: Promise.method(function() {
        this.counts.down++;
      })
    });

    var app = new MyApp({
      configuration: {}
    });

    Promise
      .attempt(function() {
        return app.start().then(function() {
          return app.stop();
        });
      })
      .then(function() {
        assert.equal(app.counts.up, 1);
        assert.equal(app.counts.down, 1);
      })
      .caught(function(err) {
        assert.equal(err && err.message, "");
      })
      .lastly(function() {
        Logger.resetRootLogger();
        done();
      });
  });
});
