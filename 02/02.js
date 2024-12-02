function createFrame(names) {
  const size = Math.max(...names.map((name) => name.length));
  const border = "*".repeat(size + 4);

  const framedNames = names.map((name) => `* ${name.padEnd(size)} *`).join("\n");

  return `${border}\n${framedNames}\n${border}`;
}
