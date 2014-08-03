"use strict";

var mod = function(
  _,
  PubSub
) {

  var Transform = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Transform.prototype, PubSub, {
    initialize: function() {},
    apply: function(element) {
      // Default is identity map
      this.notify("element", element);
    },
    setNext: function(next) {
      this._next = next;
      this.on("element", next.apply.bind(next));
    }
  });

  return Transform;
};

module.exports = mod(
  require("underscore"),
  require("../core/pub-sub")
);