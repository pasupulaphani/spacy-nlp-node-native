var python = require('node-python');
var os = python.import('os');
/**
 * Parse text - nlp
 *
 * @param {string} text - Text to parse
 * @param {object} options - options to parse against
 * @returns {object} parsed text
 */
function parse (text, options) {

  if (!text || text === "") {
    throw new Error("TEXT_REQUIRED");
  }

  if (options) {
    // apply options
  }
  return {
    originalText: text
  };


// nodejs stuff
var path = require('path');
console.log(os.path.basename(os.getcwd()))
console.log(path.basename(process.cwd()))
}

module.exports = parse;
