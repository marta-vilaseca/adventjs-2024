function createXmasTree(height, ornament) {
  const totalWidth = height * 2 - 1; // Maximum width of the tree
  const tree = [];

  // Generate the tree lines
  for (let i = 0; i < height; i++) {
    const width = 2 * i + 1;
    const treeline = ornament.repeat(width);
    tree.push(treeline.padStart(Math.floor((totalWidth + width) / 2), "_").padEnd(totalWidth, "_"));
  }

  // Generate the trunk lines
  const trunkLine = "#".padStart(Math.floor(totalWidth / 2) + 1, "_").padEnd(totalWidth, "_");
  tree.push(trunkLine, trunkLine);

  return tree.join("\n");
}
