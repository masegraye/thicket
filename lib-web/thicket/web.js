module.exports = function(c) {
  c.registerMany([
    {
      module: require("./appkit/bootstrapper"),
      as: "bootstrapper"
    },
    {
      module: require("./appkit/web-app-container"),
      as: "app-container"
    },
    {
      module: require("./scheduler/web-scheduler"),
      as: "scheduler"
    }
  ]);

  require("./browserify2-list");
};
