/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  ChainedChannel,
  Channel,
  CompositeChannel
) {


  var Mailbox = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Mailbox.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._ownerIdentity  = opts.getOrError("identity");
      this._exchange       = opts.getOrError("exchange");

      this._oneShotChannel        = new Channel({ sentinel: this });
      this._requestReplyChannel   = new Channel({ sentinel: this });

      this._ingressChannel = new CompositeChannel({
        sentinel: this,
        listen: [this._oneShotChannel, this._requestReplyChannel]
      });
    },

    /**
     * Returns a new ChainedChannel chained to this Mailbox's
     * privately-owned inbound Channel.
     * @returns {ChainedChannel}
     */
    ingressChannel: function() {
      return new ChainedChannel({
        sentinel: this,
        chainTo: this._ingressChannel
      });
    },

    requestReplyChannel: function() {
      return new ChainedChannel({
        sentinel: this,
        chainTo: this._requestReplyChannel
      });
    },

    send: function(env) {
      env = _.extend({}, env || {}, {
        from: this._ownerIdentity
      });
      return this._exchange.send(env);
    },

    reply: function(msgId, env) {
      env = _.extend({}, env || {}, {
        rMsgId: msgId,
        from: this._ownerIdentity
      });

      return this._exchange.reply(env);
    },

    sendAndReceive: function(env, opts) {
      env = _.extend({}, env || {}, {
        from: this._ownerIdentity
      });

      return this._exchange.sendAndReceive(env, opts);
    },

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
  require("../../core/options"),
  require("../../core/channel/chained-channel"),
  require("../../core/channel/channel"),
  require("../../core/channel/composite-channel")
);
