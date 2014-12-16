/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  M,
  Options,
  Channel
) {

  /**
   * A channel which listens to other channels, and forwards their messages as through published to this channel
   *
   */
  var CompositeChannel = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(CompositeChannel.prototype, Channel.prototype, {
    initialize: function(opts) {
      Channel.prototype.initialize.apply(this, arguments);
      opts = Options.fromObject(opts);

      this._forwarding = M.hash_map();

      var listen = opts.getOrElse("listen", []);
      if (!_.isArray(listen)) {
        listen = [listen];
      }

      _.each(listen, _.bind(function(c) {
        this.listen(c);
      }, this));
    },


    dispose: function() {
      Channel.prototype.dispose.apply(this, arguments);
      var forwarding = this._forwarding;
      this._forwarding = M.hash_map();

      M.each(forwarding, _.bind(function(pair) {
        M.nth(pair, 1).dispose();
      }, this));
    },


    listen: function(channel) {
      var sub = channel.subscribe(_.bind(function(msg) {
        this._forward(msg)
      }, this));
      this._forwarding = M.assoc(this._forwarding, channel, sub);

      return {
        dispose: _.bind(function() {
          this._forwarding = M.dissoc(this._forwarding, channel);
          sub.dispose();
        }, this)
      };
    },


    _forward: function(msg) {
      this.publish(this._sentinel, msg);
    }
  });

  return CompositeChannel;
};

module.exports = mod(
  require("underscore"),
  require("mori"),
  require("../options"),
  require("./channel")
);
