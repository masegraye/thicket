"use strict";

var mod = function(
  _,
  Options,
  PubSub,
  TransformChain,
  MapTransform,
  FilterTransform
) {

  var ReactiveNode = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ReactiveNode.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._chain = new TransformChain();
      this._parent = opts.getOrElse("parent", null);
      this._pubsub = _.extend({}, PubSub);

      var transforms = opts.getOrElse("transforms", [])

      _.each(transforms, function(t) {
        this._chain.addTransform(t);
      }, this);

      _.bindAll(this, "_onParentElement", "_notifySubscribers");

      if (this._parent) {
        this._parent._pubsub.on("element", this._onParentElement);
      }

      this._chain.on("element", this._notifySubscribers);
      this._subscriptions = [];
    },
    map: function(fn) {
      return new ReactiveNode({
        parent: this,
        transforms: [new MapTransform(fn)]
      });
    },
    filter: function(fn) {
      return new ReactiveNode({
        parent: this,
        transforms: [new FilterTransform(fn)]
      });
    },
    _apply: function(element) {
      this._chain.apply(element);
    },
    _applyError: function(err) {
      // TODO: Means of being notified of errors, plz
    },
    _onParentElement: function(element) {
      this._apply(element);
    },
    _notifySubscribers: function(element) {
      this._pubsub.notify("element", element);
    }
  });

  return ReactiveNode;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("../core/pub-sub"),
  require("./transform-chain"),
  require("./map-transform"),
  require("./filter-transform")
);
