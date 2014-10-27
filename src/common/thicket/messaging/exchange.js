/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  M,
  Logger,
  Options,
  UUID,
  Channel,
  ChainedChannel,
  InMemoryFiber,
  Dispatcher
) {

  var Exchange = function() {
    this.initialize.apply(this, arguments);
  };

  var MSG_SEND             = "send",
      MSG_SEND_AND_RECEIVE = "sendAndReceive",
      MSG_REPLY            = "receive";

  _.extend(Exchange.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._identity = opts.getOrElse("identity", UUID.v4());

      this._mailboxFiberDelegate = {
        receiveFiberMessage: this._receiveMailboxFiberMessage.bind(this)
      };

      this._mailboxes = M.hash_map();

      this._fiber     = opts.getOrElseFn("fiber", function() {
        return new InMemoryFiber();
      });

      this._fiber.registerEntity({
        identity: this._identity,
        delegate: this
      });

      this._mailboxDispatcher = new Dispatcher({
        prefix: "_onMbx"
      });

    },

    /**
     * Builds a Mailbox for the provided `requesterIdentity`. The
     * `RequesterIdentity` must never have been used for requesting
     * a mailbox previously.
     *
     * @param requesterIdentity
     * @returns {Mailbox}
     */
    mailbox: function(requesterIdentity) {
      this._assertUniqueOwner(requesterIdentity);

      var mailbox = new Mailbox({
        identity: requesterIdentity,
        exchange: this
      });

      this._mailboxes = M.assoc(this._mailboxes, requesterIdentity, mailbox);

      this._fiber.registerEntity({
        identity: requesterIdentity,
        delegate: this._mailboxFiberDelegate
      });

      return mailbox;
    },


    send: function(opts) {
      opts = Options.fromObject(opts);

      return this._fiber.send({
        from:  opts.getOrError("from"),
        to:    opts.getOrError("to"),
        body:  opts.getOrError("body"),
        mT:    MSG_SEND,
        msgId: UUID.v4()
      });
    },


    sendAndReceive: function(opts) {
      throw new Error("Not implemented");
    },


    _assertUniqueOwner: function(identity) {
      if (M.get(this._mailboxes, identity)) {
        throw new Error("Mailbox registration requires a unique identity");
      }
    },

    /**
     * Fiber delegate protocol method for a message bound for a Mailbox owned by
     * this exchange.
     *
     * @param env
     * @private
     */
    _receiveMailboxFiberMessage: function(env) {
      this._mailboxDispatcher.dispatch(env);
    },

    _onMbxSend: function(env) {
      console.log("GOT", env);
    },

    /**
     * Fiber delegate protocol method for a message bound for this Exchange directly.
     *
     * @param env
     * @private
     */
    receiveFiberMessage: function(env) {

    }
  });

  var Mailbox = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Mailbox.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._ownerIdentity = opts.getOrError("identity");
      this._exchange      = opts.getOrError("exchange");
      this._inbound       = new Channel({ sentinel: this });
    },

    /**
     * Returns a new ChainedChannel chained to this Mailbox's
     * privately-owned inbound Channel.
     * @returns {ChainedChannel}
     */
    inboundChannel: function() {
      return new ChainedChannel({
        sentinel: this,
        chainTo: this._inbound
      });
    },

    send: function(opts) {
      opts = _.extend({}, opts || {}, {
        from: this._ownerIdentity
      });
      return this._exchange.send(opts);
    },

    sendAndReceive: function(opts) {
      opts = _.extend({}, opts || {}, {
        from: this._ownerIdentity
      });

      return this._exchange.sendAndReceive(opts);
    }
  });

  return Exchange;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("mori"),
  require("../logging/logger"),
  require("../core/options"),
  require("../core/uuid"),
  require("../core/channel"),
  require("../core/chained-channel"),
  require("./fiber/in-memory-fiber"),
  require("../core/dispatcher")
);
