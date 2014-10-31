/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  M,
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

      this._outstandingRequestIds = M.set();
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

      // Attempt to cancel all outstanding requests.
      // This is an async request, so we just have to fire and
      // forge them.
      //
      // If you're disposing of a mailbox before requests
      // complete, you might have a bad time. The good
      // news is because responses are ferried back from the fiber
      // to the mailbox caller via the Promise interface rather
      // than channels, they should still get CancellationErrors
      var reqs = this._outstandingRequestIds;
      this._outstandingRequestIds = M.set();

      M.each(reqs, _.bind(function(reqId) {
        this._exchange.cancelSendAndReceive(reqId);
      }, this));

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

      var reqId = (opts || {}).reqId || UUID.v4();

      env = _.extend({}, env || {}, {
        from: this._ownerIdentity
      });

      opts = _.extend({}, opts || {}, {
        reqId: reqId
      });

      this._outstandingRequestIds = M.conj(this._outstandingRequestIds, reqId);

      return this._exchange
        .sendAndReceive(env, opts)
        .bind(this)
        .then(function(resp) {
          this._outstandingRequestIds = M.disj(this._outstandingRequestIds, reqId);
          return resp;
        })
        .caught(Promise.CancellationError, function(err) {
          this._outstandingRequestIds = M.disj(this._outstandingRequestIds, reqId);
          throw err;
        })
        .caught(Promise.TimeoutError, function(err) {
          this._outstandingRequestIds = M.disj(this._outstandingRequestIds, reqId);
          throw err;
        });
    }),


    outstandingRequestCount: function() {
      return M.count(this._outstandingRequestIds);
    },


    cancelSendAndReceive: Promise.method(function(reqId) {
      return this._exchange
        .cancelSendAndReceive(reqId)
        .bind(this)
        .then(function() {
          this._outstandingRequestIds = M.disj(this._outstandingRequestIds, reqId);
        });
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
  require("mori"),
  require("../../core/options"),
  require("../../core/uuid"),
  require("../../core/channel/chained-channel"),
  require("../../core/channel/channel"),
  require("../../core/channel/composite-channel"),
  require("../../core/state-guard")
);
