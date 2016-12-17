/**
 * Parse text - nlp
 *
 * @param {string} text - Text to parse
 * @param {object} options - options to parse against
 * @returns {object} parsed text
 */
function parse (text, options) {

  if (!text || text !== "") {
    return {};
  }
  return {
    text: text,
    options: options
  };
}

module.exports = parse;
