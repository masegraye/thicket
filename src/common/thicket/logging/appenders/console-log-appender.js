"use strict";

var mod = function(
  _,
  Options
) {

  var ConsoleLogAppender = function() {
    this.initialize.apply(this, arguments);
  };

  var p = function(num) {
    if (("" + num).length === 1) {
      return "0" + num;
    } else {
      return num;
    }
  };

  _.extend(ConsoleLogAppender.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._console = opts.getOrElse("console", console);
      this._timeDelegate = opts.getOrElse("timeDelegate", function(){
        var d = new Date();
        return [d.getUTCFullYear(), p(d.getUTCMonth()), p(d.getUTCDay())].join("/") +
          " " + [p(d.getUTCHours()), p(d.getUTCMinutes()), p(d.getUTCSeconds())].join(":") +
          "." + d.getUTCMilliseconds();
      });
    },

    log: function(loggerName, descendants, logLevel, logLevelName, args) {
      // Use the furthest ancestor as the logged name (since it originated there)
      var furthestAncestor = descendants[descendants.length - 1];
      if (furthestAncestor) {
        loggerName = furthestAncestor;
      }
      this._log(["["+logLevelName+"]["+this._getTime()+"]["+loggerName+"]"].concat(args));
    },

    _getTime: function() {
      return this._timeDelegate();
    },

    _log: function(logItems) {
      // Why does he do this? Is he insane? Well, yes.
      //
      // But mostly, I do this because console.log isn't, in all cases,
      // something you can call .apply on. Last I checked, in IE calling
      // console.log.apply(console, []) will throw an error. So that's why the
      // big ugly switch.
      //
      // If you need more than 7 items, well, I can't help you (but you can - add another
      // switch case).
      switch(logItems.length) {
        case 0:
          this._console.log();
          break;
        case 1:
          this._console.log(logItems[0]);
          break;
        case 2:
          this._console.log(logItems[0], logItems[1]);
          break;
        case 3:
          this._console.log(logItems[0], logItems[1], logItems[2]);
          break;
        case 4:
          this._console.log(logItems[0], logItems[1], logItems[2], logItems[3]);
          break;
        case 5:
          this._console.log(logItems[0], logItems[1], logItems[2], logItems[3], logItems[4]);
          break;
        case 6:
          this._console.log(logItems[0], logItems[1], logItems[2], logItems[3], logItems[4], logItems[5]);
          break;
        case 7:
          this._console.log(logItems[0], logItems[1], logItems[2], logItems[3], logItems[4], logItems[5], logItems[6]);
          break;
        default:
          var label = logItems.shift();
          this._console.log(label, logItems);
      }
    }
  });

  return ConsoleLogAppender;
};

module.exports = mod(
  require("underscore"),
  require("../../core/options")
);
