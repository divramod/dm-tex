// =========== [ REQUIRE ] ===========
var co = require("co");
var spawn = require("dm-shell").spawn;

// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ SYNC task.start() ] ===========
task.start = function(p1) {
    try {
        var p1 = p1 || process.argv[3] || undefined;
        console.log(p1);
        var command = "enscript -p " + p1 + ".ps " + p1 + " && ps2pdf " + p1 + ".ps && evince " + p1 + ".pdf";
        console.log(command);
        spawn(command);

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
        return e;
    }
}; // task.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
