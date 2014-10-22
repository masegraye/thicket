/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  M,
  Options,
  UUID,
  Channel,
  ChainedChannel
) {

  var Exchange = function() {
    this.initialize.apply(this, arguments);
  };

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
      throw new Error("Not implemented");
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
     * @param recipient
     * @param sender
     * @param body
     * @private
     */
    _receiveMailboxFiberMessage: function(recipient, sender, body) {

    },

    /**
     * Fiber delegate protocol method for a message bound for this Exchange directly.
     *
     * @param recipient
     * @param sender
     * @param body
     * @private
     */
    receiveFiberMessage: function(recipient, sender, body) {}
  });

  var Mailbox = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Mailbox.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._ownerIdentity = opts.getOrError("identity");
      this._exchange      = opts.getOrError("exchange");

      this._inbound = new Channel({ sentinel: this });
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


  var InMemoryFiber = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(InMemoryFiber.prototype, {
    initialize: function() {
      this._entities = M.hash_map();
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
    }
  });

  var LocalEntity = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(LocalEntity.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._identity = opts.getOrError("identity");
      this._delegate = opts.getOrError("delegate");
    }
  })

  return Exchange;
};

module.exports = mod(
  require("underscore"),
  require("mori"),
  require("../core/options"),
  require("../core/uuid"),
  require("./channel"),
  require("./chained-channel")
);
