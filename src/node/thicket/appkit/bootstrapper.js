"use strict";

var mod = function(
  fs,
  nopt,
  _,
  Promise,
  Options,
  Logger,
  ConfigurationMagic,
  AppContainer,
  App
  ) {
  var f   = Promise.promisifyAll(fs),
      Log = Logger.create("Bootstrapper");

  var Bootstrapper = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Bootstrapper.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._appKlass = opts.getOrElse("applicationConstructor");
      if (!this._appKlass) {
        this._up = opts.getOrError("up");
        this._down = opts.getOrError("down");
      }
    },
    bootstrap: Promise.method(function(cb) {
      var args        = Options.fromObject(this._getArgs()),
          scopes      = (args.getOrElse("scopes", "")).split(","),
          configFiles = (args.getOrElse(
            "configurationFiles",
            "configuration/default.json"
          )).split(",");

      Log.info("Configuration scopes:", scopes, "Configuration files:", configFiles);
      var readConfigs = _.map(configFiles, function(configFile) {
        return f
          .readFileAsync(configFile)
          .then(function(contents) {
            return JSON.parse(contents);
          });
      });

      return Promise
        .all(readConfigs)
        .bind(this)
        .then(function(configs) {
          var config       = ConfigurationMagic.resolveConfig(scopes, configs),
              AppKlass     = this._appKlass;

          Log.info("Using resolved configuration: ", JSON.stringify(config));

          var app          = AppKlass ? new AppKlass({configuration: config}) : new App({configuration: config, up: this._up, down: this._down}),
              appContainer = new AppContainer({app: app});

          return appContainer;
        }).nodeify(cb);
    }),
    _getArgs: function() {
      return nopt({
        "scopes": String,
        "configurationFiles": String
      });
    }
  });

  return Bootstrapper;
};

module.exports = mod(
  require("fs"),
  require("nopt"),
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("../core/logging/logger"),
  require("./configuration-magic"),
  require("./node-app-container"),
  require("./app")
);
