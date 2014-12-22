/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  net,
  Logger,
  Options,
  CompositeChannel,
  UUID,
  LinkableFiber,
  MessagePusher
) {

  var Log = Logger.create("TcpFiber");

  /**
   * Warning: Experimental
   *
   */
  var TcpFiber = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(TcpFiber.prototype, LinkableFiber.prototype, {
    initialize: function(opts) {
      LinkableFiber.prototype.initialize.apply(this, arguments);
      opts = Options.fromObject(opts);
      this._port = opts.getOrElse("port", 11013);
      this._server = null;
      this._sessions = {};
    },

    start: Promise.method(function() {
      this._server = net.createServer(_.bind(function(client) {
        Log.debug("New client connected");
        var session = new Session();
        this.listen(session.ingressChannel());
        session.forward(this.egressChannel());
        session.listenStream(client);
        session.statusChannel().subscribe(function(msg) {
          if (msg.mT === "StreamError") {
            Log.error("StreamError; destroying connection", session.id());
            client.destroy();
          }
        });

        this._sessions[session.id()] = session;
        Log.debug("Session started", session.id());
        client.on("close", _.bind(this._cleanupSession, this, session.id()));
      }, this));

      return new Promise(_.bind(function(resolve, reject) {
        this._server.on("error", function(err) {
          Log.error("Error starting TcpFiber. Error code:", err.code);
          reject(err)
        });

        Log.info("Starting TcpFiber on port", this._port);
        this._server.listen(this._port, _.bind(function() {
          Log.info("TcpFiber listening on port", this._port);
          resolve();
        }, this));
      }, this));
    }),

    stop: Promise.method(function() {
      // TODO: Wait for callback?
      this._server.close();
    }),

    _cleanupSession: function(sessionId) {
      Log.debug("Disposing session", sessionId);
      var session = this._sessions[sessionId];
      if (session) {
        session.dispose();
        delete this._sessions[sessionId];
      }
    }
  });

  var Session = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Session.prototype, {
    initialize: function() {
      this._sessionId = UUID.v4();
      this._pusher = new MessagePusher();
      this._status = new CompositeChannel({ sentinel: this });
      this._status.listen(this._pusher.statusChannel());
    },
    id: function() {
      return this._sessionId;
    },
    statusChannel: function() {
      return this._status;
    },
    ingressChannel: function() {
      return this._pusher.ingressChannel();
    },
    forward: function(egressChannel) {
      return this._pusher.forward(egressChannel);
    },
    listenStream: function(stream) {
      this._pusher.listenStream(stream);
    },
    dispose: function() {
      if (this._status) {
        this._status.dispose();
        this._status = null;
      }

      if (this._pusher) {
        this._pusher.dispose();
        this._pusher = null;
      }
    }
  });

  return TcpFiber;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("net"),
  require("../../core/logging/logger"),
  require("../../core/options"),
  require("../../core/channel/composite-channel"),
  require("../../core/uuid"),
  require("./linkable-fiber"),
  require("../internals/message-pusher")
);
