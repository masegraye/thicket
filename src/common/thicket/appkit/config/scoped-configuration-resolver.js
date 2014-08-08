/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  ScopedConfiguration
) {

  /**
   * A device for resolving a set of raw configurations given a set of
   * scopes.
   *
   * This is useful for having things like region- or stage-specific (and/or both)
   * configurations.
   *
   * Given sets of raw configurations of the form:
   *
   *   {
   *     "scope-1" : {
   *       "key1" : "val1"
   *     },
   *     "scope-1+env1": {
   *       "key2" : "val-env-1"
   *     },
   *     "scope-1+env2": {
   *       "key2" : "val-env-2"
   *     }
   *   }
   *
   * `resolve(["scope-1"])` will return:
   *
   *   {
   *     "key1" : "val2"
   *   }
   *
   * `resolve(["scope-1", "env-1"])` will return:
   *
   *   {
   *     "key1" : "val1",
   *     "key2" : "val-env-1"
   *   }
   *
   * `resolve(["scope-1", "env-2"])` will return:
   *
   *   {
   *     "key1" : "val1",
   *     "key2" : "val-env-2"
   *   }
   *
   * Scopes unions are resolved in the following manner:
   *   1. a given scope union's parts are sorted
   *   2. scope unions as a whole are applied in sorted order
   *   3. repeat the process for a given configuration
   *
   * So, given three configs:
   *
   *  {
   *    "aaa": ... // 1
   *    "ccc": ... // 2
   *  }
   *
   *  {
   *    "aaa+ccc": ... // 3
   *    "ccc"    : ... // 4
   *  }
   *
   *  {
   *    "aaa+bbb": ... // 5
   *    "bbb"    : ... // 6
   *  }
   *
   * The resulting order will be:
   *   1, 2, 4, 3, 6, 5
   *
   * Notice 3 comes before 5 even though it's logically "after" in sorted order,
   * because configuration order overrides scope order. That is, scope unions
   * are ordered within a config, and then in config order.
   *
   */
  var ScopedConfigurationResolver = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(ScopedConfigurationResolver.prototype, {
    initialize: function() {
      this._configs = [];
    },

    /**
     * A rawConfig is a set of configuration scopes and their configuration
     * values, e.g.:
     *
     *   {
     *     "scope-1" : {
     *       "key1" : "val1"
     *     },
     *     "scope-1+env1": {
     *       "key2" : "val-env-1"
     *     },
     *     "scope-1+env2": {
     *       "key2" : "val-env-2"
     *     }
     *   }
     *
     * Note that the plus (+) sign is reserved for specifying scope unions.
     *
     * @param rawConfig {object} (required)
     *
     * @returns this
     */
    add: function(rawConfig) {
      this._configs.push(new ScopedConfiguration(rawConfig));
      return this;
    },

    /**
     * Resolves a computed final configuration given a set of scopes to apply,
     * and a set of configs loaded via `ScopedConfigurationResolver#add()`.
     *
     * @param scopes {Array<string>}
     *
     * @returns {object} the computed configuration
     */
    resolve: function(scopes) {
      scopes = powerset(_.clone(scopes).sort());
      scopes.shift(); // Get rid of the empty set.

      scopes = _.collect(scopes, function(s) {
        return s.join("+");
      });

      var relevantConfigs = _
        .chain(this._configs)
        .collect(function(c) {
          return _.collect(scopes, function(scope) {
            return c.blobForScope(scope);
          })
        }).flatten().value();

      relevantConfigs.unshift({});
      return _.extend.apply(_, relevantConfigs);
    }
  });

  var powerset = function (ary) {
      var ps = [[]];
      for (var i=0; i < ary.length; i++) {
          for (var j = 0, len = ps.length; j < len; j++) {
              ps.push(ps[j].concat(ary[i]));
          }
      }
      return ps;
  }

  return ScopedConfigurationResolver;
};

module.exports = mod(
  require("underscore"),
  require("./scoped-configuration")
);
