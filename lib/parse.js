/**
 * Send redis instructions
 *
 * @param {string} text - Text to parse
 * @param {object} options - options to parse against
 * @returns {object} parsed text
 */
module.exports = function parse (text, options) {

  if (!text || text !== "") {
    return {};
  }
  return {
    text: text,
    options: options
  };
};
