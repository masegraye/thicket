/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Channel,
  CompositeChannel,
  Logger,
  Options,
  Lang,
  UUID,
  JSONSerde
) {

  var Log = Logger.create("MessagePusher");

  var TERMINATION_CHAR = "\0";

  var StreamError = function() {
    return {
      mT: "StreamError"
    };
  };

  /**
   * Warning: Experimental
   *
   */
  var MessagePusher = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(MessagePusher.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._id = UUID.v4();

      this._status = new Channel({ sentinel: this });
      this._ingress = new Channel({ sentinel: this });
      this._egress  = new CompositeChannel({ sentinel: this });

      this._buffer = [];

      this._serde = opts.getOrElseFn("serde", function() {
        return new JSONSerde();
      });

      _.bindAll(this, "_onData", "_onPub");

      this._egress.subscribe(this._onPub);
    },

    dispose: function() {

      if (this._status) {
        this._status.dispose();
        this._status = null;
      }

      if (this._ingress) {
        this._ingress.dispose();
        this._ingress = null;
      }

      if (this._egress) {
        this._egress.dispose();
        this._egress = null;
      }

      if (this._stream) {
        this._stream.removeListener("data", this._onData);
        this._stream = null;
      }

      this._buffer = [];
    },

    statusChannel: function() {
      return this._status;
    },

    egressChannel: function() {
      return this._egress;
    },

    ingressChannel: function() {
      return this._ingress;
    },

    forward: function(channel) {
      this._egress.listen(channel);
    },

    listenStream: function(stream) {
      if (this._stream) {
        throw new MessagePusher.Error.DuplicateStreamError();
      }

      this._stream = stream;
      this._stream.setEncoding("utf8");
      this._stream.on("data", this._onData);
    },

    _onData: function(data) {
      this._ingest(data);
    },

    _onPub: function(msg) {
      if (this._stream) {
        var outbound = this._encodeForWire(msg);
        try {
          this._stream.write(outbound, 'utf8');
        } catch (e) {
          this._status.publish(this, StreamError());
        }
      }
    },

    // Cheat cheat
    _encodeForWire: function(msg) {
      return this._serde.serialize(msg) + TERMINATION_CHAR;
    },

    _ingest: function(data) {
      Log.trace("Raw ingest data", this._id, data);
      var idx = data.indexOf(TERMINATION_CHAR),
          done = false,
          messages = [],
          current, buff;

      while(!done) {
        if (data.length === 0) {
          done = true;
        } else if (idx === -1) {
          this._buffer.push(data);
          done = true;
        } else {
          buff = this._buffer;
          this._buffer = [];
          current = data.substr(0, idx);
          buff.push(current);
          messages.push(buff.join(""));
          data = data.substr(idx + 1);
          idx = data.indexOf(TERMINATION_CHAR);
        }
      }

      try {
        var messages = _.map(messages, _.bind(function(msgStr) {
          return this._serde.deserialize(msgStr);
        }, this));

        _.each(messages, function(msg) {
          _.defer(_.bind(function() {
            this._ingress.publish(this, msg);
          }, this));
        }, this);
      } catch (e) {
        Log.debug("Caught error parsing message;", e);
        if (this._stream) {
          this._stream.removeListener("data", this._onData);
          this._stream = null;
          this._status.publish(this, StreamError());
        }
      }
    }
  });

  _.extend(MessagePusher, {
    Error: {
      DuplicateStreamError: Lang.makeErrorClass("DuplicateStreamError", "cannot listen on multiple streams")
    }
  })

  return MessagePusher;
};

module.exports = mod(
  require("underscore"),
  require("../../core/channel/channel"),
  require("../../core/channel/composite-channel"),
  require("../../core/logging/logger"),
  require("../../core/options"),
  require("../../core/lang"),
  require("../../core/uuid"),
  require("../../core/serde/json-serde")
);
