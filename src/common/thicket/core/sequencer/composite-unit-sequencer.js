"use strict";

var mod = function(
  _,
  Promise,
  Options,
  UnitSequencer
) {

  /**
   * A UnitSequencer which reports its sequence summed with the sequences
   * of its internal collection of sequencers.
   *
   * This device is useful for tracking the state of data comprised from multiple
   * sources. For instance, you might have CachingDataStore(A) storing data
   * from Source(A), tracked by Sequencer(A), and CachingDataStore(B) storing
   * data from Source(B), tracked by Sequencer(B). Meanwhile, you may have
   * CachingDataStore(C), storing data from Source(A + B), and tracked by
   * Sequencer(C) = Sequencer(A + B) - a CompositeUnitSequencer.
   *
   * Thus, if Sequencer(A) is advanced, it may invalidate CachingDataStore(A) or
   * CachingDataStore(C) or both.
   *
   * Note this particular usage is generally only useful for Unit sequencers.
   *
   * If you'd like the above functionality, but with Sequencer(A) and
   * Sequencer(B) as ClockSequencers, and Sequencer(C) merely tracking
   * modification, you'd need to use a DelegatingSequencer for A and B.
   */
  var CompositeUnitSequencer = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(CompositeUnitSequencer.prototype, UnitSequencer.prototype, {
    initialize: function(opts) {
      UnitSequencer.prototype.initialize.apply(this, arguments);

      opts = Options.fromObject(opts);
      this._sequencers = _.clone(opts.getOrElse("sequencers", []));
    },
    addSequencer: function(seq) {
      this._sequencers.push(seq);
    },
    value: function() {
      return _
        .chain(this._sequencers)
        .invoke("value")
        .reduce(function(sum, n) {
          return sum + n;
        }, 0)
        .value() + this._sequence;
    }
  });

  return CompositeUnitSequencer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../options"),
  require("./unit-sequencer")
);
