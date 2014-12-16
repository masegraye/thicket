/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  M,
  Options,
  InMemoryFiber,
  Channel,
  CompositeChannel
) {

  /**
   * LinkableFiber is a reference implementation for implementing a multi-fiber "fabric". Whereas an `InMemoryFiber`
   * only has local entities, and only performs local dispatch, a `LinkableFiber` is an `InMemoryFiber` which will
   * forward messages to its linked fibers in the event a local entity hasn't been registered with the address for
   * which a message is bound.
   *
   * For an example of how this might work in a multi-process or multi-machine environment, see the
   * `thicket-zmq-fiber` node module.
   */
  var LinkableFiber = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(LinkableFiber.prototype, InMemoryFiber.prototype, {
    initialize: function(opts) {
      InMemoryFiber.prototype.initialize.apply(this, arguments);
      opts = Options.fromObject(opts);


      this._localDispatch  = new Channel({ sentinel: this });
      this._ingressChannel = new CompositeChannel({
        sentinel: this,
        listen:   this._localDispatch
      });

      this._egressChannel  = new Channel({ sentinel: this });

      // _receive is defined and bound in InMemoryFiber ("protected" method)
      this._ingressChannel.subscribe(this._receive);
    },


    listen: function(channel) {
      this._ingressChannel.listen(channel);
    },


    egressChannel: function() {
      return this._egressChannel;
    },


    _dispose: function() {
      InMemoryFiber.prototype._dispose.apply(this, arguments);
    },

    send: Promise.method(function(opts) {
      this._stateGuard.deny("disposed");

      opts = Options.fromObject(opts);

      var from   = opts.getOrError("from"),
          to     = opts.getOrError("to"),
          body   = opts.getOrError("body"),
          msgId  = opts.getOrError("msgId"),
          mT     = opts.getOrElse("mT"),
          rMsgId = opts.getOrElse("rMsgId"),
          chan   = null;

      var msg = {
        from:   from,
        to:     to,
        body:   body,
        msgId:  msgId,
        mT:     mT,
        rMsgId: rMsgId,
        oFib:   this._identity
      };

      // Local dispatch, skip the round-trip
      if (M.get(this._entities, to)) {
        chan = this._localDispatch;
      } else {
        chan = this._egressChannel;
      }

      _.defer(_.bind(function() {
        chan.publish(this, msg);
      }, this));

      return msgId;
    })


  });

  return LinkableFiber;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("mori"),
  require("../../core/options"),
  require("./in-memory-fiber"),
  require("../../core/channel/channel"),
  require("../../core/channel/composite-channel")
);
