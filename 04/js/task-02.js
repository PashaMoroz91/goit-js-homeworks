const inventory = {
  items: ["Монорельса", "Фильтр"],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  }
};

const invokeInventoryOperation = function(itemName, inventoryAction) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  inventoryAction(itemName);
};

invokeInventoryOperation("Аптечка", inventory.add.bind(inventory));

console.log(inventory.items);

invokeInventoryOperation("Фильтр", inventory.remove.bind(inventory));

console.log(inventory.items);
