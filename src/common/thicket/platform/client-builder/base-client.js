/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options,
  Lang,
  UUID,
  Courier
) {

  var BaseClient = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(BaseClient.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._exchange = opts.getOrError("exchange");
      this._identity = opts.getOrElseFn("identity", function() {
        return UUID.v4();
      });
      this._serviceIdentity = opts.getOrError("serviceIdentity");
      this._mailbox         = this._exchange.mailbox(this._identity);
      this._courier         = new Courier({
        delegate: this,
        mailbox: this._mailbox
      });
    },

    __registerMethod: function(methodSpec) {
      var name          = methodSpec.name(),
          args          = methodSpec.args(),
          defaults      = methodSpec.defaults(),
          mType         = methodSpec.mType() || name,
          courierMethod = methodSpec.requestReply() ? "sendAndReceive" : "send";

      var getArgs = _.bind(function(defaults, methodArgs) {
        var finalArgs = {}, argName, argVal;
        for (var i = 0; i < args.length; i++) {
          argName = args[i];
          argVal = methodArgs[argName];
          if (typeof argVal === "undefined") {
            if (defaults.hasOwnProperty(argName)) {
              finalArgs[argName] = defaults[argName];
            } else {
              throw new Error.ArgumentMissingError("argument missing: " + argName);
            }
          } else {
            finalArgs[argName] = argVal;
          }
        }
        return finalArgs;
      }, null, defaults);

      this[name] = Promise.method(_.bind(function() {
        var msg = _.extend({
          mT: mType
        }, getArgs(_.toArray(arguments)));
        return this._courier[courierMethod](this._serviceIdentity, msg);
      }, this));

    }
  });

  var Error = {
    ArgumentMissingError: Lang.makeErrorClass("ArgumentMissingError", "argument missing")
  };

  BaseClient.Error = Error;

  return BaseClient;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../../core/options"),
  require("../../core/lang"),
  require("../../core/uuid"),
  require("../../messaging/courier")
);
