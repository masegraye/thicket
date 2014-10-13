/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  Ref,
  ReactiveNode,
  DefaultScheduler
) {

  var Reactor = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Reactor.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._scheduler = opts.getOrElseFn("scheduler", function() {
        return Ref(new DefaultScheduler());
      });
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

  return Reactor;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("../core/ref"),
  require("./reactive-node"),
  require("../scheduler")
);
