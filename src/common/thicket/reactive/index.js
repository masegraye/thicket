"use strict";

var mod = function(
  _,
  ReactiveNode
) {

  var Reactive = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Reactive, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._scheduler = opts.getOrError("scheduler");
    },
    fromPromise: function(promise) {
      var node = new ReactiveNode();
      promise.then(function(v) {
        node._apply(v);
      }, function(err) {
        node._applyError(err);
      });
      return node;
    },
    fromArray: function(ary) {
      var node = new ReactiveNode();

      this._scheduler.get().schedule(function() {
        _.each(ary, function(element){
          node._apply(element);
        });
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
