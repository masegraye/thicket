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

    send: function(opts) {
      opts = _.extend({}, opts || {}, {
        from: this._ownerIdentity
      });
      return this._exchange.send(opts);
    },

    reply: function(msgId, opts) {
      opts = _.extend({}, opts || {}, {
        rMsgId: msgId,
        from: this._ownerIdentity
      });

      return this._exchange.reply(opts);
    },

    sendAndReceive: function(opts) {
      opts = _.extend({}, opts || {}, {
        from: this._ownerIdentity
      });

      return this._exchange.sendAndReceive(opts);
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
