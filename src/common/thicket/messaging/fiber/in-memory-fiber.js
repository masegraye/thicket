/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  M,
  Options,
  UUID,
  Logger
) {

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
  });

  return InMemoryFiber;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("mori"),
  require("../../core/options"),
  require("../../core/uuid"),
  require("../../logging/logger")
);
