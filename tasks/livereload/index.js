// =========== [ REQUIRE ] ===========
var co = require("co");
var watch = require('watch');
var path = require("path");
var spawn = require("dm-shell").spawn;

// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ filter ] ===========
function filter(file) {
  if (file.indexOf(".tex") > -1) {
    console.log(file);
    return true;
  } else {
    return false;
  }
}

// =========== [ SYNC task.start() ] ===========
task.start = function(p1) {
  try {
    var p1 = p1 || process.argv[3] || undefined;

    var dirPath = path.resolve(process.cwd(), "*.tex");
    //console.log(dirPath);

    // =========== [ watch ] ===========
    watch.createMonitor(process.cwd(), {
      'ignoreDotFiles': true,
      'filter': filter
    }, function(monitor) {
      monitor.on("changed", function(f, curr, prev) {
        // Handle file changes
        console.log("f", f);
        //console.log("curr", curr);
        //console.log("prev", prev);
        var pdf = f.replace(".tex", ".pdf");
        var command = "pdflatex " + f + "  && evince " + pdf + " &";
        console.log(command);
        spawn(command);
      });
    });
    return p1;
  } catch (e) {
    console.log("Filename: ", __filename, "\n", e.stack);
    return e;
  }
}; // task.start()



// =========== [ MODULE EXPORT ] ===========
module.exports = task;
