var fs      = require("fs"),
    spawn   = require("child_process").spawn,
    Promise = require("bluebird"),
    _       = require("underscore");


desc("Exports build artifacts for web, node");
task("build", ["export-artifacts"], function() {
});

desc("Run tests");
task("test", ["export-artifacts", "run-tests"], function() {
});


task("export-artifacts", function() {
  if (!fs.existsSync("./lib-node")) {
    fs.mkdirSync("./lib-node");
  }
  Promise.all(_.map(["common", "node"], function(pkg) {
    return new Promise(function(resolve, reject) {
      var rsync = spawn("rsync", ["-avL", "src/"+pkg+"/thicket", "lib-node/"], {stdio: 'inherit'});
      rsync.on("close", function() {
        resolve();
      });
    })
  }))
  .then(function() {
    complete();
  });
}, {async: true});

task("run-tests", function() {
  var npm =spawn("npm", ["test"], {stdio: 'inherit'});
  npm.on("close", function() {
    complete();
  });
}, {async: true});
