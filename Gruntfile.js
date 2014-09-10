module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    browserify2: {
      thicket_web: {
        compile: "./dist/thicket.js",
        debug: true,
        entry: "./lib-web/thicket/index.js"
      }
    },
    clean: {
      build: ["./dist"]
    }
  });

  grunt.loadNpmTasks("grunt-browserify2");
  grunt.loadNpmTasks("grunt-contrib-clean");

  grunt.registerTask("build", "Build stuff", [
    "clean:build",
    "browserify2:thicket_web"
  ]);

  grunt.registerTask("default", ["build"])
};
