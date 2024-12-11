/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  for (let i = 1; i < box.length - 1; i++) {
    if (box[i][0] === "#" && box[i][box[i].length - 1] === "#" && box[i].includes("*")) {
      return true;
    }
  }
  return false;
}
