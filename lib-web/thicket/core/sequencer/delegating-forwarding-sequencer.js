/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options
) {

  /**
   * See `UnitSequencer` for a high-level explanation of Sequencer semantics.
   *
   * A Sequencer which delegates to another sequencer for both `advance` and `value`, and also forwards `advance` to
   * other `target` sequencers. It is the logical complement of a `DelegatingCompositeSequencer`, which derives its `value` from
   * its underlying `sequencers`.
   *
   *
   */
  var DelegatingForwardingSequencer = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(DelegatingForwardingSequencer.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._delegateSequencer = opts.getOrError("delegate");
      this._forwardTargets = _.clone(opts.getOrElse("targets", []));
    },
    addTarget: function(seq) {
      this._forwardTargets.push(seq);
    },
    advance: Promise.method(function() {
      var s = this._delegateSequencer;
      return s.advance.apply(s, arguments)
      .bind(this)
      .then(function(val) {
        return Promise
          .all(_.invoke(this._forwardTargets, "advance"))
          .then(function() {
            // Return the value returned by the delegate sequencer's
            // advance call (if any). The advancement of the forward
            // targets should be transparent.
            return val;
          });
      });
    }),
    value: function() {
      var s = this._delegateSequencer;
      return s.value.apply(s, arguments);
    }
  });

  return DelegatingForwardingSequencer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../options")
);
