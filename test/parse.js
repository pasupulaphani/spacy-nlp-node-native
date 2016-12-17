var parse = require("../lib/parse");
var should = require("should");

describe("parse", function () {
  it("should require text", function () {

    parse.should.throw(/TEXT_REQUIRED/);
  });

  it("should throw error on empty text", function () {

    (function () { parse(""); }).should.throw(/TEXT_REQUIRED/);
  });

  it("should parse text", function () {

    var text = "test";

    var parsedText = parse(text);
    should.equal(parsedText.originalText, text);
  });
});
