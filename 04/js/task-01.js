const account = {
  owner: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["order-1", "order-2", "order-3"],
  changeDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost;
    this.orders.push(order);
  }
};

account.changeDiscount(0.15);
console.log(account.discount);

const orders = account.getOrders();
console.log(orders);

account.addOrder(5000, "order-4");
console.log(account.balance);
console.log(account.orders);
