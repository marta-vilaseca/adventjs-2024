type InventoryItem = {
  category: string;
  name: string;
  quantity: number;
};

type OrganizedInventory = {
  [category: string]: {
    [name: string]: number;
  };
};

function organizeInventoryTS(inventory: InventoryItem[]): OrganizedInventory {
  return inventory.reduce((result, { category, name, quantity }) => {
    result[category] ??= {};
    result[category][name] = (result[category][name] ?? 0) + quantity;
    return result;
  }, {} as OrganizedInventory);
}
