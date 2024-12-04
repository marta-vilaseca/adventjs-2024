function organizeInventory(inventory) {
  return inventory.reduce((result, { category, name, quantity }) => {
    result[category] ??= {};
    result[category][name] = (result[category][name] ?? 0) + quantity;
    return result;
  }, {});
}
