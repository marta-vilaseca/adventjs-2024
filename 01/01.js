function prepareGifts(gifts) {
  let giftSet = new Set(gifts.sort((a, b) => a - b));
  return Array.from(giftSet);
}
