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
    },
    {
      module: require("./messaging/fiber/tcp-fiber"),
      as: "messaging/fibers/tcp"
    },
    {
      module: require("./messaging/internals/message-pusher"),
      as: "messaging/internals/message-pusher"
    }
  ]);
};
