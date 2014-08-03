"use strict";

var mod = function(
  _
  PubSub,
  Transform
) {

  var TransformChain = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(TransformChain.prototype, Events, {
    initialize: function() {
      this._head = this._tail = new Transform();

      _.bindAll(this, "_onTailElement");

      this._tail.on("element", this._onTailElement);
    },
    apply: function(element) {
      this._head.apply(element);
    },
    addTransform: function(t) {
      this._tail.off("element", this._onTailElement);
      this._tail.setNext(t);
      this._tail = t;
      t.on("element", this._onTailElement);
    },
    _onTailElement: function(element) {
      this.notify("element", element);
    }
  });

  return TransformChain;
};

module.exports = mod(
  require("underscore"),
  require("../core/pub-sub"),
  require("./transform")
);
