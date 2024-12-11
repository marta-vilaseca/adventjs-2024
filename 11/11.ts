function decodeFilenameTS(filename: string): string {
  let textOnly = filename.slice(filename.indexOf("_") + 1);
  return textOnly.slice(0, textOnly.lastIndexOf("."));
}
