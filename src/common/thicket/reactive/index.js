"use strict";

var mod = function(
  _,
  ReactiveNode
) {

  var Reactive = function() {
    // TOOD: Make this a "smart" function
  };

  _.extend(Reactive, {
    fromPromise: function(promise) {
      var node = new ReactiveNode();
      promise.then(function(v) {
        node._apply(v);
      }, function(err) {
        node._applyError(err);
      });
      return node;
    }
  });

  return Reactive;
};

module.exports = mod(
  require("underscore"),
  require("./reactive-node")
);
