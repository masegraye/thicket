/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options,
  UUID,
  ChainedChannel,
  Channel,
  CompositeChannel,
  StateGuard
) {


  var Mailbox = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Mailbox.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._id                    = UUID.v4();
      this._ownerIdentity         = opts.getOrError("ownerIdentity");
      this._exchange              = opts.getOrError("exchange");
      this._oneShotChannel        = new Channel({ sentinel: this });
      this._requestReplyChannel   = new Channel({ sentinel: this });
      this._ingressChannel        = new CompositeChannel({
        sentinel: this,
        listen: [this._oneShotChannel, this._requestReplyChannel]
      });
      this._stateGuard            = new StateGuard(["disposed"]);
    },

    id: function() {
      return this._id;
    },

    ownerIdentity: function() {
      return this._ownerIdentity;
    },

    dispose: function() {
      if (this._stateGuard.applied("disposed")){
        return;
      }

      this._oneShotChannel.dispose();
      this._requestReplyChannel.dispose();
      this._ingressChannel.dispose();

      this._oneShotChannel      = null;
      this._requestReplyChannel = null;
      this._ingressChannel      = null;

      this._stateGuard.apply("disposed");
    },

    /**
     * Returns a new ChainedChannel chained to this Mailbox's
     * privately-owned inbound Channel.
     * @returns {ChainedChannel}
     */
    ingressChannel: function() {
      return this._ingressChannel;
    },

    oneShotChannel: function() {
      return this._oneShotChannel;
    },

    requestReplyChannel: function() {
      return this._requestReplyChannel;
    },

    send: Promise.method(function(env) {
      this._stateGuard.deny("disposed");

      env = _.extend({}, env || {}, {
        from: this._ownerIdentity
      });
      return this._exchange.send(env);
    }),

    reply: Promise.method(function(msgId, env) {
      this._stateGuard.deny("disposed");

      env = _.extend({}, env || {}, {
        rMsgId: msgId,
        from: this._ownerIdentity
      });

      return this._exchange.reply(env);
    }),

    sendAndReceive: Promise.method(function(env, opts) {
      this._stateGuard.deny("disposed");

      env = _.extend({}, env || {}, {
        from: this._ownerIdentity
      });

      opts = _.extend({}, {
        reqId: UUID.v4()
      }, opts || {});

      return this._exchange.sendAndReceive(env, opts);
    }),

    cancelSendAndReceive: Promise.method(function(reqId) {
      return this._exchange.cancelSendAndReceive(reqId);
    }),

    _receiveOneShot: function(msg) {
      this._oneShotChannel.publish(this, msg);
    },

    _receiveRequestReply: function(msg) {
      this._requestReplyChannel.publish(this, msg);
    }
  });

  return Mailbox;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../../core/options"),
  require("../../core/uuid"),
  require("../../core/channel/chained-channel"),
  require("../../core/channel/channel"),
  require("../../core/channel/composite-channel"),
  require("../../core/state-guard")
);
