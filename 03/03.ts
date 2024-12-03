// Define a type for each inventory item
type InventoryItem = {
  category: string;
  name: string;
  quantity: number;
};

// Define a type for the organized inventory result
type OrganizedInventory = {
  [category: string]: {
    [name: string]: number;
  };
};

function organizeInventoryTS(inventory: InventoryItem[]): OrganizedInventory {
  const result: OrganizedInventory = {};

  for (const item of inventory) {
    const { category, name, quantity } = item;

    if (!result[category]) {
      result[category] = {};
    }
    result[category][name] = (result[category][name] || 0) + quantity;
  }

  return result;
}
