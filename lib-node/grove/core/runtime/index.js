"use strict";

var mod = function(
  _,
  Options,
  Ref,
  SetTimeoutScheduler
) {

  var Runtime = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(Runtime.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._scheduler = Ref(opts.getOrElseFn("scheduler", function() {
        return new SetTimeoutScheduler();
      }));
    },

    /**
     * @returns {Ref<Scheduler>}
     */
    scheduler: function() {
      return Ref.delegating(this._scheduler);
    }
  });

  return Runtime;
};

module.exports = mod(
  require("underscore"),
  require("../options"),
  require("../ref"),
  require("./scheduler/set-timeout-scheduler")
);
