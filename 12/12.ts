/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePriceTS(ornaments: string): number | undefined {
  const values = new Map<string, number>();

  values.set("*", 1);
  values.set("o", 5);
  values.set("^", 10);
  values.set("#", 50);
  values.set("@", 100);

  let total = 0;
  for (let i = 0; i < ornaments.length; i++) {
    let currentVal = values.get(ornaments[i]);
    let nextVal = values.get(ornaments[i + 1]) | 0;
    if (currentVal) {
      if (currentVal < nextVal) currentVal = currentVal * -1;
      total += currentVal;
    } else {
      return undefined;
    }
  }
  return total;
}
