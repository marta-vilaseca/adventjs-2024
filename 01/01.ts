function prepareGiftsTS(gifts: number[]): number[] {
  let giftSet: Set<number> = new Set(gifts.sort((a, b) => a - b));
  return Array.from(giftSet);
}
