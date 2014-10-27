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
  Dispatcher,
  SignalingDataStore,
  Periodic,
  ClockSequencer,
  SystemClock,
  Runtime
) {

  var Exchange = function() {
    this.initialize.apply(this, arguments);
  };

  var MSG_SEND             = Exchange.MSG_SEND             = "send",
      MSG_SEND_AND_RECEIVE = Exchange.MSG_SEND_AND_RECEIVE = "sendAndReceive",
      MSG_REPLY            = Exchange.MSG_REPLY            = "reply";

  var Log = Logger.create("Exchange");


  _.extend(Exchange.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._identity = opts.getOrElse("identity", UUID.v4());

      this._runtime = opts.getOrElseFn("runtime", function() {
        return new Runtime();
      });

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

      // Data store for pending requests
      this._outstandingRequests = new SignalingDataStore({
        ttl: opts.getOrElse("replyTimeout", 10000),
        sequencer: new ClockSequencer({
          clock: opts.getOrElseFn("clock", function() {
            return new SystemClock();
          })
        })
      });

      // Dispatches store signals (e.g., expiry)
      this._expiryDispatcher = new Dispatcher({
        delegate: this,
        prefix: "_onStoreSignal",
        listen: this._outstandingRequests.signalChannel()
      });

      // This guy triggers periodic expiry checks in the store
      this._checkExpiry = new Periodic({
        scheduler: this._runtime.scheduler(),
        task: _.bind(function() {
          return this
            ._outstandingRequests
            .sentrySequencer()
            .advance();
        }, this),
        interval: opts.getOrElse("expiryInterval", 1000)
      });

      this._checkExpiry.start();
    },

    dispose: function() {
      // TODO: Cancel outstanding requests

      // TODO: Dispose all the things
      this._checkExpiry.stop();
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


    send: function(env) {
      env = Options.fromObject(env);

      return this._fiber.send({
        from:  env.getOrError("from"),
        to:    env.getOrError("to"),
        body:  env.getOrError("body"),
        mT:    MSG_SEND,
        msgId: UUID.v4()
      });
    },


    reply: function(env) {
      env = Options.fromObject(env);
      return this._fiber.send({
        from:   env.getOrError("from"),
        to:     env.getOrError("to"),
        body:   env.getOrError("body"),
        mT:     MSG_REPLY,
        msgId:  UUID.v4(),
        rMsgId: env.getOrError("rMsgId")
      });
    },


    sendAndReceive: function(env, opts) {
      env  = Options.fromObject(env);
      opts = Options.fromObject(opts);

      var msgId = UUID.v4(),
          deferred = defer(),
          fibEnv = {
            from:  env.getOrError("from"),
            to:    env.getOrError("to"),
            body:  env.getOrError("body"),
            mT:    MSG_SEND_AND_RECEIVE,
            msgId: msgId
          },
          req = {
            deferred: deferred,
            fibEnv:   fibEnv
          };

      return this
        ._outstandingRequests
        .put(msgId, req, {ttl: opts.getOrElse("replyTimeout")})
        .bind(this)
        .then(function() {
          return this._fiber.send(fibEnv);
        })
        .then(function() {
          return req.deferred.promise;
        });
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
        mbox._receiveOneShot(env);
      }
    },

    // TODO: Should this go along the mailbox ingress channel?
    // Or should it be cb-based?
    _onMbxSendAndReceive: function(env) {
      var oEnv = Options.fromObject(env),
          identity = oEnv.getOrElse("to"),
          body = oEnv.getOrElse("body");

      if (!(identity || body)) {
        Log.info("Exchange received a message with missing envelope information", env);
        return;
      }

      var mbox = M.get(this._mailboxes, identity);
      if (mbox) {
        mbox._receiveRequestReply(env);
      }
    },


    _onMbxReply: function(env) {
      var oEnv     = Options.fromObject(env),
          rMsgId   = oEnv.getOrElse("rMsgId");

      // Don't dispatch vetted replies. Just fulfill the promise
      Promise
        .bind(this)
        .then(function(){
          return this._outstandingRequests.remove(rMsgId);
        })
        .then(function(request) {
          if (request) {
            request.deferred.resolve(env);
          }
        });
    },


    /**
     * Fired when a request in the outstanding requests store is past due.
     */
    _onStoreSignalExpired: function(sig) {
      Log.debug("Expired entry in store", sig);
      Promise
        .bind(this)
        .then(function() {
          return this._outstandingRequests.remove(sig.key);
        })
        .then(function(request) {
          if (request) {
            request.deferred.reject(new Promise.TimeoutError());
          }
        });
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


  var defer = function(){
    var res, rej;
    var p = new Promise(function() {
      res = arguments[0];
      rej = arguments[1];
    });

    return {
      promise: p,
      resolve: res,
      reject: rej
    };
  };

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
  require("../core/dispatcher"),
  require("../storage/signaling-data-store"),
  require("../util/periodic"),
  require("../core/sequencer/clock-sequencer"),
  require("../time/clock/system-clock"),
  require("../runtime")
);
