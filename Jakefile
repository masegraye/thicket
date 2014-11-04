var fs      = require("fs"),
    spawn   = require("child_process").spawn,
    exec    = require("child_process").exec,
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

  if (!fs.existsSync("./lib-web")) {
    fs.mkdirSync("./lib-web");
  }

  Promise.attempt(function() {
    return Promise.all(_.map(["common", "node"], function(pkg) {
      return new Promise(function(resolve, reject) {
        var rsync = spawn("rsync", ["-avL", "src/"+pkg+"/thicket", "lib-node/"], {stdio: 'inherit'});
        rsync.on("close", function() {
          resolve();
        });
      });
    }));
  })
  .then(function() {
    return Promise.all(_.map(["common", "web"], function(pkg) {
      return new Promise(function(resolve, reject) {
        var rsync = spawn("rsync", ["-avL", "src/"+pkg+"/thicket", "lib-web/"], {stdio: 'inherit'});
        rsync.on("close", function() {
          resolve();
        });
      });
    }));
  })
  .then(function() {
    return buildBrowserify2List();
  })
  .then(function() {
    return browserifyWeb();
  })
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


var buildBrowserify2List = function() {
  getWebFiles()
  .then(function(files) {
    return generateBrowserify2ListModule(files);
  })
  .then(function(js) {
    return writeBrowserify2ListModule(js);
  });
};

var getWebFiles = function() {
  return new Promise(function(resolve, reject) {
    child = exec("find lib-web/thicket -type f -name '*.js' -not -name 'browserify2-list.js'", function(err, stdout, stderr) {
      if (err) {
        reject(err);
        return;
      }

      var files = _.chain(stdout.split("\n")).compact().map(function(f) {
        return f.replace("lib-web/thicket/", "./");
      }).value();

      resolve(files);
    });
  });
};

var generateBrowserify2ListModule = function(files) {
  return new Promise(function(resolve, reject) {
    var req = _.template("require(\"<%= mod %>\");\n");
    var template = _.chain(files).map(function(mod) {
      return req({mod: mod});
    }).value().join("");
    resolve(template);
  });
};

var writeBrowserify2ListModule = function(js) {
  return new Promise(function(resolve, reject) {
    fs.writeFileSync("lib-web/thicket/browserify2-list.js", js);
    resolve();
  });
};

var browserifyWeb = function() {
  return new Promise(function(resolve, reject) {
    var grunt = spawn("node_modules/.bin/grunt", ["build"], {stdio: 'inherit'});
    grunt.on("close", function() {
      resolve();
    });

    grunt.on("error", function(err) {
      reject(err);
    });
  });
}
