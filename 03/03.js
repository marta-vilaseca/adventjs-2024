function organizeInventory(inventory) {
  const result = {};
  for (const item of inventory) {
    const { category, name, quantity } = item;

    if (!result[category]) {
      result[category] = {};
    }
    result[category][name] = (result[category][name] || 0) + quantity;
  }
  return result;
}
