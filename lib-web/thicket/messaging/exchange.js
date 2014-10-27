/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  M,
  Logger,
  Options,
  UUID,
  InMemoryFiber,
  Mailbox,
  Dispatcher
) {

  var Exchange = function() {
    this.initialize.apply(this, arguments);
  };

  var MSG_SEND             = "send",
      MSG_SEND_AND_RECEIVE = "sendAndReceive",
      MSG_REPLY            = "receive";

  var Log = Logger.create("Exchange");

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
        delegate: this,
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

    reply: function(opts) {
      opts = Options.fromObject(opts);
      return this._fiber.send({
        from:   opts.getOrError("from"),
        to:     opts.getOrError("to"),
        body:   opts.getOrError("body"),
        mT:     MSG_REPLY,
        msgId:  UUID.v4(),
        rMsgId: opts.getOrError("rMsgId")
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
      var oEnv     = Options.fromObject(env),
          identity = oEnv.getOrElse("to"),
          body     = oEnv.getOrElse("body");

      if (!(identity || body)) {
        Log.info("Exchange received a message with missing envelope information", env);
        return;
      }

      var mbox = M.get(this._mailboxes, identity);
      if (mbox) {
        mbox._dispatch(env);
      }
    },

    /**
     * Fiber delegate protocol method for a message bound for this Exchange directly.
     *
     * @param env
     * @private
     */
    receiveFiberMessage: function(env) {
      throw new Error("Not implemented");
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
  require("./fiber/in-memory-fiber"),
  require("./internals/mailbox"),
  require("../core/dispatcher")
);
