/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  M,
  Logger,
  Options,
  UUID,
  DelegatingForwardingSequencer,
  UnitSequencer,
  InMemoryFiber,
  Mailbox,
  Dispatcher,
  SignalingDataStore,
  Periodic,
  ClockSequencer,
  SystemClock,
  Runtime
  ) {

  /**
   * An `Exchange` vends mailboxes. Messages sent from a mailbox are managed by the Exchange which vended the mailbox.
   * The Exchange handles the work of:
   *
   *   1. Wrapping the message in the appropriate message envelope for the verb used (`send`, `sendAndReceive`,
   *      `reply`)
   *   2. Pairing a given `reply` with the originating `sendAndReceive` call, and fulfilling the associated result
   *      promise.
   *   3. Handling message timeouts for `sendAndReceive` calls. When a message times out, the promise associated with
   *      the result is canceled.
   *
   * The actual work of sending messages is handled by an Exchange's underlying `Fiber`. The default fiber is
   * an `InMemoryFiber`, which performs only local dispatch.
   *
   * Generally speaking, mailboxes sharing an underlying fiber (either by both being spawned from the same mailbox,
   * or being spawned by exchanges sharing the same fiber) can send messages to each other, provided they know
   * each other's addresses.
   *
   */
  var Exchange = function() {
    this.initialize.apply(this, arguments);
  };

  var MSG_SEND             = Exchange.MSG_SEND             = "send",
      MSG_SEND_AND_RECEIVE = Exchange.MSG_SEND_AND_RECEIVE = "sendAndReceive",
      MSG_REPLY            = Exchange.MSG_REPLY            = "reply";

  // 7.5 seconds is reasonable, yes?
  var DEFAULT_REPLY_TIMEOUT = 7500;

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

      var usedDefaultClock = false;

      // For requester-provided requestId to messageId mapping.
      // Used for cancelling outstanding sendAndReceive requests.
      this._reqToMsg = M.hash_map();

      // Data store for pending requests
      this._outstandingRequests = new SignalingDataStore({
        ttl: opts.getOrElse("replyTimeout", DEFAULT_REPLY_TIMEOUT),
        sequencer: new ClockSequencer({
          clock: opts.getOrElseFn("clock", function() {
            usedDefaultClock = true;
            return new SystemClock();
          }),
          // Hax - Since we want time to be async, but provide a default system clock
          // we need to get the initial clock sequence sync, by bypassing the clock call.
          // If you provide an async clock, you should either provide an initial time, or
          // ensure that the first getTime has resolved before instantiating the exchange.
          // OR, in the future, we have to add a start()/stop() to Exchange.
          initialSequence: opts.getOrElse("initialSequence", (usedDefaultClock ? +new Date() : undefined))
        })
      });

      // Dispatches store signals (e.g., expiry)
      this._expiryDispatcher = new Dispatcher({
        delegate: this,
        prefix: "_onStoreSignal",
        listen: this._outstandingRequests.signalChannel()
      });

      this._compositeSeq = new DelegatingForwardingSequencer({
        delegate: new UnitSequencer(),
        targets: [this._outstandingRequests.sequencer(), this._outstandingRequests.sentrySequencer()]
      })

      // This guy triggers periodic expiry checks in the store
      this._checkExpiry = new Periodic({
        scheduler: this._runtime.scheduler(),
        task: _.bind(function() {
          return this._compositeSeq.advance();
        }, this),
        interval: opts.getOrElse("expiryInterval", 1000)
      });

      this._checkExpiry.start();
    },


    dispose: function() {
      // TODO: Cancel outstanding requests

      this._expiryDispatcher.dispose();

      this._outstandingRequests.clear();

      // TODO: Dispose all the things
      this._checkExpiry.dispose();
    },


    /**
     * Builds a Mailbox for the provided `requesterIdentity`. The
     * `RequesterIdentity` must never have been used for requesting
     * a mailbox previously.
     *
     * We attempt to validate unique mailbox names, but because mailbox names
     * are global and there is no checking between fibers, it's only a best-effort.
     *
     * @param requesterIdentity
     * @returns {Mailbox}
     */
    mailbox: function(requesterIdentity) {
      this._assertUniqueOwner(requesterIdentity);

      var mailbox = new Mailbox({
        exchange:      this,
        ownerIdentity: requesterIdentity
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
          reqId    = opts.getOrError("reqId"),
          deferred = defer(),
          fibEnv   = {
            from:  env.getOrError("from"),
            to:    env.getOrError("to"),
            body:  env.getOrError("body"),
            mT:    MSG_SEND_AND_RECEIVE,
            msgId: msgId
          },
          req      = {
            reqId:    reqId,
            deferred: deferred,
            fibEnv:   fibEnv
          };

      this._reqToMsg = M.assoc(this._reqToMsg, reqId, msgId);

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

    cancelSendAndReceive: Promise.method(function(reqId) {
      var msgId = M.get(this._reqToMsg, reqId);

      if (msgId) {
        Log.debug("Canceling request", reqId, "with msgId", msgId);
        this._reqToMsg = M.dissoc(this._reqToMsg, reqId);

        return Promise
          .bind(this)
          .then(function() {
            return this._outstandingRequests.remove(msgId);
          })
          .then(function(req) {
            if (req) {
              req.deferred.reject(new Promise.CancellationError());
            }
          })
      } else {
        Log.warn("Tried to cancel request, but no oustanding request with that ID found;", reqId);
      }
    }),


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
            this._reqToMsg = M.dissoc(this._reqToMsg, request.reqId);
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
            this._reqToMsg = M.dissoc(this._reqToMsg, request.reqId);
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
  require("../core/logging/logger"),
  require("../core/options"),
  require("../core/uuid"),
  require("../core/sequencer/delegating-forwarding-sequencer"),
  require("../core/sequencer/unit-sequencer"),
  require("./fiber/in-memory-fiber"),
  require("./internals/mailbox"),
  require("../core/dispatcher"),
  require("../storage/signaling-data-store"),
  require("../util/periodic"),
  require("../core/sequencer/clock-sequencer"),
  require("../time/clock/system-clock"),
  require("../runtime")
);
