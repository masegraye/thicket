"use strict";

var mod = function(
  _,
  Promise,
  Options
) {

  /**
   * A Sequencer which advances by reading from a Clock.
   * Note that this ClockSequencer relies on the Clock protocol, which
   * only provides `Clock#getTime()`. It does not modify the clock itself.
   * This means if you're using a LogicalClock, it's still up to the clock's
   * owner to advance the clock for the sequencer to advance.
   */
  var ClockSequencer = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(ClockSequencer.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._clock    = opts.getOrError("clock");
      this._sequence = opts.getOrElse("initialSequence", 0);
    },

    /**
     * Advances by setting its sequence to the backing clock's time.
     * Note that if this method is called twice within the same time unit,
     * the sequence will not actually advance, since unique time is not
     * guaranteed by our clocks.
     *
     * @async
     * @returns {Promise<>}
     */
    advance: Promise.method(function() {
      return Promise
        .bind(this)
        .then(function() {
          return this._clock.getTime();
        })
        .then(function(t) {
          this._sequence = t;
        });
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

  return ClockSequencer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../options")
);
