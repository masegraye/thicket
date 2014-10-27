"use strict";

var assert   = require("assert"),
    _        = require("underscore"),
    Promise  = require("bluebird"),
    thicket  = require("../../../../lib-node/thicket"),
    Periodic = thicket.c("periodic"),
    Runtime  = thicket.c("runtime");

Promise.onPossiblyUnhandledRejection(function(e) {
  throw e;
});

describe("Periodic", function() {
  it("should schedule work", function(done) {
    var runCount = 0,
        runtime  = new Runtime(),
        task     = function() {
          return new Promise(function(resolve, reject) {
            setTimeout(function() {
              runCount++;
              resolve("foo");
            }, 1);
          });
        },
        periodic = new Periodic({
          scheduler: runtime.scheduler(),
          task: task,
          interval: 2
        });

    Promise
      .bind({actualCount: 0, actualResults: [], sub: null})
      .then(function(){
        this.sub = periodic.egressChannel().subscribe(_.bind(function(results) {
          this.actualResults.push(results);
        }, this));
        periodic.start();
      })
      .delay(20)
      .then(function() {
        periodic.stop();
        this.actualCount = this.actualResults.length;

        assert.ok(runCount > 0, "ran at least once");
        assert.ok(this.actualCount > 0, "at least one result");
        assert.ok(this.actualCount > 4, "more than 4 results");
      })
      .delay(10)
      .then(function() {
        
        assert.equal(this.actualCount, this.actualResults.length, "no more results after having stopped periodic");
        assert.equal(this.actualResults[0].result, "foo", "foo result");
        this.sub.dispose();
      })
      .caught(function(err) {
        console.log("EEEEH");
        throw err;
      })
      .lastly(function() {
        done();
      });
  });
})
