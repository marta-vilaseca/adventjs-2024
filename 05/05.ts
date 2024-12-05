type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoesTS(shoes: Shoe[]): number[] {
  const shoeMap: Map<number, { I: number; R: number }> = new Map();
  const totalPairs: number[] = [];

  for (const { type: foot, size } of shoes) {
    if (!shoeMap.has(size)) {
      shoeMap.set(size, { I: 0, R: 0 });
    }

    const entry = shoeMap.get(size)!;
    entry[foot]++;

    if (entry.I > 0 && entry.R > 0) {
      totalPairs.push(size);
      entry.I--;
      entry.R--;
    }
  }

  return totalPairs;
}
