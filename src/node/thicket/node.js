module.exports = function(c) {
  c.registerMany([
    {
      module: require("./appkit/bootstrapper"),
      as: "bootstrapper"
    },
    {
      module: require("./appkit/node-app-container"),
      as: "app-container"
    },
    {
      module: require("./scheduler/node-scheduler"),
      as: "scheduler"
    }
  ]);
};
