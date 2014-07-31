"use strict";

var _       = require("underscore"),
    Promise = require("bluebird"),
    assert  = require("assert"),
    grove   = require("../../../../lib-node/grove"),
    App     = grove.c("app");

describe("App", function() {
  it("should be defined", function() {
    assert.ok(App);
  });

  it("should start and stop", function(done) {
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
        done();
      });
  });
});
