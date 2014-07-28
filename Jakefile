var fs   = require("fs"),
    spawn = require("child_process").spawn;


desc("Exports build artifacts for web, node");
task("build", function() {
  if (!fs.existsSync("./lib-node")) {
    fs.mkdirSync("./lib-node");
  }
  spawn("rsync", ["-avL", "src/common/grove", "lib-node/"], {stdio: 'inherit'});
});

desc("Run tests");
task("test", function() {
  spawn("npm", ["test"], {stdio: 'inherit'});
});
