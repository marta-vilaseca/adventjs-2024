/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  let textOnly = filename.slice(filename.indexOf("_") + 1);
  return textOnly.slice(0, textOnly.lastIndexOf("."));
}
