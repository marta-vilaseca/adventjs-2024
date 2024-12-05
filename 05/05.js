function organizeShoes(shoes) {
  const shoeMap = new Map();
  const totalPairs = [];

  for (const { type: foot, size } of shoes) {
    if (!shoeMap.has(size)) {
      shoeMap.set(size, { I: 0, R: 0 });
    }

    const entry = shoeMap.get(size);
    entry[foot]++;

    if (entry.I > 0 && entry.R > 0) {
      totalPairs.push(size);
      entry.I--;
      entry.R--;
    }
  }

  return totalPairs;
}
