var Mocha = require("mocha"),
    getPath = require("./shared/helpers.js").getPath;

// To run specific tests add to Mocha object: grep: /{PATTERN}/
var mocha = new Mocha({
  timeout: 120000,
  title: "Streamkeys tests",
  ui: "mocha-retry",
  grep: /.*/
});

mocha.addFile(getPath(__filename, "/_base_suite.js"));

mocha.run(function(failures) {
  process.on("exit", function () {
    process.exit(failures);
  });
});
