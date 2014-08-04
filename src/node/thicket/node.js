module.exports = function(c) {
  c.bulkAlias({
    "./appkit/bootstrapper"       : "bootstrapper",
    "./appkit/node-app-container" : "app-container",
    "./scheduler/node-scheduler"  : "scheduler"
  });
};
