/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options
) {

  var StoreEntry = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(StoreEntry.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      // Perfectly acceptable to pass in undefined...
      this._value = opts.getOrElse("value", undefined);
      this._lastSequence = opts.getOrError("initialSequence");

      this._ttl = opts.getOrElse("ttl");
    },

    isExpired: function(sequence, fallbackTtl) {
      var ttl = this._ttl || fallbackTtl;
      // E.g., lastSequence = 4, ttl = 1, sequence = 5: expired
      //       lastSequence = 4, ttl = 1, sequence = 4: not expired
      //       lastSequence = 4, ttl = 2, sequence = 5: not expired
      return !(this._lastSequence + ttl > sequence);
    },

    touch: function(sequence) {
      this._lastSequence = sequence;
    },

    update: function(val, sequence, opts) {
      this._value        = val;
      this._lastSequence = sequence;

      opts = Options.fromObject(opts);
      this._ttl = opts.getOrElse("ttl");
    },

    dispose: function() {
      this._value        = null;
      this._lastSequence = null;
    },

    value: function() {
      return this._value;
    }
  });

  return StoreEntry;
};

module.exports = mod(
  require("underscore"),
  require("../../core/options")
);
