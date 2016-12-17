var parse = require("../lib/parse");
var assert = require("assert");

describe("parse", function () {
  it("should parse text", function () {

    var parsedText = parse("");
    assert.equal({}, parsedText);
  });
});
