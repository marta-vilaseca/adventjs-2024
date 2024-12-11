/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  return packages
    .split("")
    .reduce((stack, char) => {
      if (char === ")") {
        const segmentStart = stack.lastIndexOf("(");
        const segment = stack.slice(segmentStart + 1).reverse();
        return [...stack.slice(0, segmentStart), ...segment];
      }
      return [...stack, char];
    }, [])
    .join("");
}
