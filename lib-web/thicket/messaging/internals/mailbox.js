/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  ChainedChannel,
  Channel
) {


  var Mailbox = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Mailbox.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._ownerIdentity  = opts.getOrError("identity");
      this._exchange       = opts.getOrError("exchange");
      this._ingressChannel = new Channel({ sentinel: this });
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

    _dispatch: function(msg) {
      this._ingressChannel.publish(this, msg);
    }
  });

  return Mailbox;
};

module.exports = mod(
  require("underscore"),
  require("../../core/options"),
  require("../../core/chained-channel"),
  require("../../core/channel")
);
