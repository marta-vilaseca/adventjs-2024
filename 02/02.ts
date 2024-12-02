function createFrameTS(names: string[]): string {
  const size: number = Math.max(...names.map((name) => name.length));
  const border: string = "*".repeat(size + 4);

  const framedNames: string = names.map((name) => `* ${name.padEnd(size)} *`).join("\n");

  return `${border}\n${framedNames}\n${border}`;
}
