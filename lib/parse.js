module.exports = function parse (text, options) {

  if (!text || text !== "") {
    return {};
  }
  return {
    text: text,
    options: options
  };
};
