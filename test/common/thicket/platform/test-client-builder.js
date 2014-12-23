/*global require: false, describe: false, it: false */

"use strict";

var assert        = require("assert"),
    Promise       = require("bluebird"),
    thicket       = require("../../../../lib-node/thicket"),
    Exchange      = thicket.c("messaging/exchange"),
    Courier       = thicket.c("messaging/courier"),
    ClientBuilder = thicket.c("experimental/platform/client-builder"),
    ClientSpec    = thicket.c("experimental/platform/client-spec");

describe("ClientBuilder", function() {
  it("should build a functional client given a spec", function(done) {
    var exchange = new Exchange(),
        serviceResponder = {
          onReqFoo: Promise.method(function(msg) {
            assert.equal(msg.zoo, "zzz");
            return "bar";
          })
        },
        serviceMailbox = exchange.mailbox("service"),
        serviceCourier = new Courier({
          delegate: serviceResponder,
          mailbox: serviceMailbox
        }),
        spec = new ClientSpec({
          initOptions: {
            serviceIdentity: "service"
          },
          methods: [
            {
              name: "boo",
              mType: "foo",
              args: ["zoo"],
              defaults: {
                zoo: "zzz"
              }
            }
          ]
        }),
        builder = new ClientBuilder({
          spec: spec
        }),
        client = builder.build({
          exchange: exchange
        });

    client.boo()
      .then(function(res) {
        assert.equal(res, "bar");
      })
      .then(function() {
        done();
      })
      .caught(function(err) {
        assert.ok(!err);
      });
  });
});
