var should = require('chai').should();
var expect = require('chai').expect;
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe('convertFileTxtToPdf sync'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function success() {
        var result = require('./../index.js').start("convertFileTxtToPdf");
        result.should.equal("convertFileTxtToPdf");
    });

    // =========== [ start ] ===========
    it.skip('error: should ...', function error() {
        var result = require('./../index.js').start("convertFileTxtToPdf");
        result.should.equal("falseconvertFileTxtToPdf");
    });

});
