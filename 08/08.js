/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  let race = [];

  for (let i = 0; i < indices.length; i++) {
    let track = "";
    let position = indices[i];
    let trackNum = i + 1;

    let margin = " ".repeat(indices.length - trackNum);

    if (position === 0) {
      track = margin + "~".repeat(length) + ` /${trackNum}`;
    } else {
      const emptySpaceBefore = "~".repeat(position > 0 ? position : length - Math.abs(position));
      const emptySpaceAfter = "~".repeat(length - (emptySpaceBefore.length + 1));
      track = margin + emptySpaceBefore + "r" + emptySpaceAfter + ` /${trackNum}`;
    }
    race.push(track);
  }
  return race.join("\n");
}
