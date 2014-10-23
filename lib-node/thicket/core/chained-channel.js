/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  M,
  Options,
  Channel
) {

  var ChainedChannel = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ChainedChannel.prototype, Channel.prototype, {
    initialize: function(opts) {
      Channel.prototype.initialize.apply(this, arguments);
      opts = Options.fromObject(opts);

      _.bindAll(this, "_forward");
      this._chainedSubs = M.vector();

      var initiallyChainedTo = opts.getOrElse("chainTo");
      if (initiallyChainedTo) {
        this.chainTo(initiallyChainedTo);
      }
    },

    chainTo: function(otherChannel) {
      this._chainedSubs = M.conj(this._chainedSubs, otherChannel.subscribe(this._forward));
    },

    dispose: function() {
      var subs = this._chainedSubs;

      this._chainedSubs = M.vector();

      M.each(subs, function(sub) {
        sub.dispose();
      });

      return this._dispose.apply(this, arguments);
    },

    _forward: function(msg) {
      this._publish(this._sentinel, msg);
    }
  });

  return ChainedChannel;
};

module.exports = mod(
  require("underscore"),
  require("mori"),
  require("../core/options"),
  require("./channel")
);
