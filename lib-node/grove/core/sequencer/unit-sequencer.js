"use strict";

var mod = function(
  _,
  Promise,
  Options
) {

  var UnitSequencer = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(UnitSequencer.prototype, {
    initialize: function(opts) {
      opts           = Options.fromObject(opts);
      this._sequence = opts.getOrElse("initialSequence", 0);
    },

    /**
     * Advances its sequence by `by`, or by `1` if `by` is not provided.
     *
     * @param by {number} the amount to advance by. Defaults to `1`.
     * @async
     * @returns {Promise<undefined>}
     */
    advance: Promise.method(function(by) {
      // Wahh wahh - don't use `by || 1`, or you can't advance by 0, which is silly
      // but potentially necessary.
      by             = _.isUndefined(by) ? 1 : by;

      if (by < 0) {
        throw new Error("UnitSequencer#advance() requires positive `by` offset");
      }

      this._sequence = this._sequence + by;
    }),

    /**
     * Returns the current sequence. This value should always be the same
     * or greater than a value returned previously (in time).
     *
     * @returns {number} the current sequence
     */
    value: function() {
      return this._sequence;
    }
  });

  return UnitSequencer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../options")
);
