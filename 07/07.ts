function fixPackagesTS(packages: string): string {
  return packages
    .split("")
    .reduce<string[]>((stack, char) => {
      if (char === ")") {
        const segmentStart = stack.lastIndexOf("(");
        const segment = stack.slice(segmentStart + 1).reverse();
        return [...stack.slice(0, segmentStart), ...segment];
      }
      return [...stack, char];
    }, [])
    .join("");
}
