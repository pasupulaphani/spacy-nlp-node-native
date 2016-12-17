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
}

module.exports = parse;
