// item.js

function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: function () {
      return this.price * this.quantity;
    },
  };
}

module.exports = {
  createItem,
};
