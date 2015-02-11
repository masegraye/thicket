/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Ref,
  Options
) {

  /**
   * A Logger.
   *
   * Any appender provided to `addAppender` should have a .log method (see `ConsoleLogAppender`).
   *
   */
  var Logger = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Logger.prototype, {

    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._name         = opts.getOrElse("name", "Default");
      this._logLevel     = opts.getOrElse("logLevel", LogUtil.Level.Info);
      this._parent       = opts.getOrElseFn("refParent", function() { return Ref(null) });
      this._muted        = {};
      this._appenders = [];
    },

    mute: function(name) {
      this._muted[name] = true;
    },

    unmute: function(name) {
      delete this._muted[name];
    },

    trace: function() {
      this._log(LogUtil.Level.Trace, _.toArray(arguments));
    },

    debug: function() {
      this._log(LogUtil.Level.Debug, _.toArray(arguments));
    },

    info: function() {
      this._log(LogUtil.Level.Info, _.toArray(arguments));
    },

    warn: function() {
      this._log(LogUtil.Level.Warn, _.toArray(arguments));
    },

    error: function() {
      this._log(LogUtil.Level.Error, _.toArray(arguments));
    },

    fatal: function() {
      this._log(LogUtil.Level.Fatal, _.toArray(arguments));
    },

    isTraceEnabled: function() {
      return this.isLogLevelEnabled(LogUtil.Level.Trace);
    },

    isDebugEnabled: function() {
      return this.isLogLevelEnabled(LogUtil.Level.Debug);
    },

    isInfoEnabled: function() {
      return this.isLogLevelEnabled(LogUtil.Level.Info);
    },

    isWarnEnabled: function() {
      return this.isLogLevelEnabled(LogUtil.Level.Warn);
    },

    isErrorEnabled: function() {
      return this.isLogLevelEnabled(LogUtil.Level.Error);
    },

    isFatalEnabled: function() {
      return this.isLogLevelEnabled(LogUtil.Level.Fatal);
    },

    isLogLevelEnabled: function(logLevel) {
      var coercedLogLevel = b(logLevel);
      return this._isCoercedLogLevelEnabledInTree(coercedLogLevel);
    },

    _isCoercedLogLevelEnabledInTree: function(coercedLogLevel) {
      return ((this._logLevel & coercedLogLevel) === coercedLogLevel) ||
        (this._parent.get() && this._parent.get()._isCoercedLogLevelEnabledInTree(coercedLogLevel));
    },

    addAppender: function(appender) {
      this._appenders.push(appender);
    },

    setLogLevel: function(logLevel) {
      // Save a copy for the potential error message
      var originalLogLevel = logLevel;

      // If name is specified, e.g., "Info", convert to
      // int
      if (_.isString(logLevel)) {
        logLevel = LogUtil.Level[logLevel]
      }

      var exists = _.detect(LogUtil.Level, function(level, name) {
        return level === logLevel;
      });

      if (!exists) {
        throw new Error("Invalid logLevel: " + originalLogLevel);
      }

      this._logLevel = logLevel;
    },


    _log: function(logLevel, logArgs) {
      this._logWithMetadata([], logLevel, logArgs);
    },

    _isMuted: function(name) {
      return !!this._muted[name];
    },

    _logWithMetadata: function(descendants, logLevel, args) {
      var leaf = descendants[descendants.length - 1] || this._name;
      if (this.isLogLevelEnabled(logLevel) && !this._isMuted(leaf)) {
        _.each(this._appenders, function(appender) {
          appender.log(this._name, descendants, logLevel, LogUtil._Label[logLevel], args);
        }, this);
      }

      if (this._parent.get()) {
        this._parent.get()._logWithMetadata([this._name].concat(descendants), logLevel, args);
      }
    }
  });

  var LogUtil = function() {
    this.initialize.apply(this, arguments);
  };

  // Coerce (just use rightmost 8 bits)!; because JS is dumb, and everything is
  // actually a float with 53-bit precision
  var b = function(v) {
    return 0xFF & v;
  };

  _.extend(LogUtil, {
    Level: {
      Trace: b(parseInt("111111", 2)),
      Debug: b(parseInt("011111", 2)),
      Info:  b(parseInt("001111", 2)),
      Warn:  b(parseInt("000111", 2)),
      Error: b(parseInt("000011", 2)),
      Fatal: b(parseInt("000001", 2))
    }
  });

  _.extend(LogUtil.prototype, {
    Level: LogUtil.Level,
    initialize: function() {
      this._rootLogger = Ref(new Logger({
        name: "Root"
      }));
    },

    create: function(name, opts) {
      opts = _.clone(opts || {});

      var parent;
      if (opts.parent) {
        parent = Ref(opts.parent);
        delete(opts.parent);
      } else {
        parent = Ref.delegating(this._rootLogger);
      }

      opts.refParent = parent;

      opts.name = name;

      return new Logger(opts);
    },

    root: function() {
      return this._rootLogger.get();
    },

    resetRootLogger: function() {
      this._rootLogger.set(new Logger({
        name: "Root"
      }));
    }
  });


  LogUtil._Label = _.reduce(LogUtil.Level, function(memo, val, key) {
    memo[val] = key;
    return memo;
  }, {});

  return new LogUtil();
};

module.exports = mod(
  require("underscore"),
  require("../ref"),
  require("../options")
);
