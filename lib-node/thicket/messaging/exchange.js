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
  ChainedChannel
) {

  var Exchange = function() {
    this.initialize.apply(this, arguments);
  };

  var MSG_SEND             = "msg_s",
      MSG_SEND_AND_RECEIVE = "msg_sar",
      MSG_REPLY            = "msg_r";

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
      env = Options.fromObject(env);
      console.log(env);
      throw new Error("Not implemented!");
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


  var InMemoryFiber = (function() {
    var Klass = function() {
      this.initialize.apply(this, arguments);
    };

    var Log = Logger.create("InMemoryLogger");

    _.extend(Klass.prototype, {
      initialize: function(opts) {
        opts = Options.fromObject(opts);

        this._entities = M.hash_map();
        this._identity = opts.getOrElse("identity", UUID.v4());

        _.bindAll(this, "_receive");
      },

      registerEntity: function(opts) {
        opts = Options.fromObject(opts);

        var identity = opts.getOrError("identity"),
            entity   = new LocalEntity({
              identity: identity,
              delegate: opts.getOrError("delegate")
            });

        this._entities = M.assoc(this._entities, identity, entity);
        return true;
      },

      /**
       * Returns a promise which is fulfiled when the message is
       * sent, not received by the remote end. This to let the
       * caller know whether or not the message is stuck
       * in a buffer somewhere when calculating its timeouts.
       */
      send: Promise.method(function(opts) {
        opts = Options.fromObject(opts);
        var from   = opts.getOrError("from"),
            to     = opts.getOrError("to"),
            body   = opts.getOrError("body"),
            msgId  = opts.getOrError("msgId"),

            mT     = opts.getOrElse("mT"),
            rMsgId = opts.getOrElse("rMsgId");


        //XXX: This is in-memory, so it's as simple
        // as invoking _receive in a future call stack
        return Promise
          .bind(this)
          .then(function() {
            _.defer(this._receive, {
              from:   from,
              to:     to,
              body:   body,
              msgId:  msgId,
              mT:     mT,
              rMsgId: rMsgId,
              oFib:   this._identity
            });
          })
          .then(function() {
            return msgId;
          });
      }),

      _receive: function(env) {
        env = Options.fromObject(env);
        var to, from, body, msgId, originFiber, mT, rMsgId;

        try {
          to          = env.getOrError("to");
          from        = env.getOrError("from");
          body        = env.getOrError("body");
          msgId       = env.getOrError("msgId");

          // Future-proofing for multi-fiber fabric.
          originFiber = env.getOrError("oFib");

          mT     = env.getOrElse("mT");
          rMsgId = env.getOrElse("rMsgId");
        } catch (e) {
          Log.error("Received malformed message", env);
        }

        var entity = M.get(this._entities, to);

        if (entity) {
          entity.dispatch({
            to:     to,
            from:   from,
            body:   body,
            msgId:  msgId,
            rMsgId: rMsgId,
            oFib:   originFiber,
            hFib:   this._identity,
            mT: mT
          });
        }
      }
    });

    return Klass;
  })();



  var LocalEntity = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(LocalEntity.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._identity = opts.getOrError("identity");
      this._delegate = opts.getOrError("delegate");
    },
    dispatch: function(env) {
      this._delegate.receiveFiberMessage(env);
    }
  })

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
  require("../core/chained-channel")
);
