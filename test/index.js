var should = require('chai').should();
var index = require('../index').index;
var colors = require("colors");

// =========== [ dm-tex TESTS ] ===========
describe('dm-tex', function() {

    console.log("run dm-tex tests".blue);

    // =========== [ help ] ===========
    it('job undefined', function* testUndefined() {
        process.env.dmnJob = "paskdjföalskdjflk";
        var result =
            yield index();
        result.job.should.equal("undefined");
        result.success.should.equal(true);
    });

    // =========== [ start ] ===========
    it('job start', function* testStart() {
        process.env.dmnJob = "start";
        var result =
            yield index();
        result.job.should.equal("start");
        result.success.should.equal(true);
    });

});
