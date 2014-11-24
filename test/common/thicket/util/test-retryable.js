"use strict";

var assert    = require("assert"),
    _         = require("underscore"),
    Promise   = require("bluebird"),
    thicket   = require("../../../../lib-node/thicket"),
    Retryable = thicket.c("retryable"),
    Runtime   = thicket.c("runtime"),
    Timer     = thicket.c("timer");


describe("Retryable", function() {
  it("should rety with linear backoff", function(done) {

    var attempt = 1,
        runtime = new Runtime(),
        task = Promise.method(function() {
          if (attempt === 3) {
            return true;
          } else {
            attempt++;
            throw new Error("RANDO ERROR");
          }
        }),
        timer = new Timer();

    timer.start();

    Promise
      .attempt(function() {
        return (new Retryable({
          scheduler: runtime.scheduler(),
          task: task,
          backoff: {
            strategy: Retryable.Backoff.Linear,
            factor: 1,
            coefficient: 5
          }
        }).result())
      })
      .timeout(30)
      .then(function(result) {
        timer.stop();
        assert.ok(result);
        assert.ok(timer.delta() > 15 && timer.delta() < 30);
      })
      .lastly(function() {
        done();
      });
  });

  it("should retry with exponential backoff", function(done) {
    var attempt = 1,
        laps = [],
        timer = new Timer(),
        task = Promise.method(function() {
          laps.push(timer.lap());
          if (attempt === 4) {
            return true;
          } else {
            attempt++;
            throw new Error("RANDO ERROR");
          }
        }),
        runtime = new Runtime();

    timer.start();
    Promise
      .attempt(function() {
        return new Retryable({
          scheduler: runtime.scheduler(),
          task: task,
          backoff: {
            strategy: Retryable.Backoff.Exponential,
            coefficient: 2
          }
        }).result();
      })
      .then(function(result) {
        timer.stop();
        var totalTime = _.reduce(laps, function(s,n) {return s+n}, 0);
        assert.ok(totalTime > 25 && totalTime < 40);
        assert.equal(laps.length, 4)
      })
      .lastly(function() {
        done();
      });
  })

});
