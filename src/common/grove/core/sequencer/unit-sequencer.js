"use strict";

var mod = function(
  _,
  Options
) {

  var Sequencer = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(Sequencer.prototype, {
    initialize: function(opts) {
      opts           = Options.fromObject(opts);
      this._sequence = opts.getOrElse("initialSequence", 0);
    },

    advance: function(by) {
      // Wahh wahh - don't use `by || 1`, or you can't advance by 0, which is silly
      // but potentially necessary.
      by             = _.isUndefined(by) ? 1 : by;
      this._sequence = this._sequence + by;
    },

    value: function() {
      return this._sequence;
    }
  });

  return Sequencer;
};

module.exports = mod(
  require("underscore"),
  require("../../core/options")
);
