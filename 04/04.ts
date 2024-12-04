function createXmasTreeTS(height: number, ornament: string): string {
  const totalWidth = height * 2 - 1;
  const tree: string[] = [];

  for (let i = 0; i < height; i++) {
      const width = 2 * i + 1;
      const treeline = ornament.repeat(width);
      tree.push(
          treeline
              .padStart(Math.floor((totalWidth + width) / 2), "_")
              .padEnd(totalWidth, "_")
      );
  }

  const trunk = "_".repeat(Math.floor((totalWidth - 1) / 2)) 
      + "#" 
      + "_".repeat(Math.floor((totalWidth - 1) / 2));

  tree.push(trunk, trunk);

  return tree.join("\n");
}