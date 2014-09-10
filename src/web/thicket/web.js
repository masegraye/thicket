module.exports = function(c) {
  c.bulkAlias({
    "./appkit/bootstrapper"       : "bootstrapper",
    "./appkit/web-app-container"  : "app-container",
    "./scheduler/web-scheduler"   : "scheduler"
  });

  require("./browserify2-list");
};
