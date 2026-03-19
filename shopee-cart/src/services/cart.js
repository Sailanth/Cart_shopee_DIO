// cart.js

function addItem(userCart, item) {
  const existingItemIndex = userCart.findIndex(
    (cartItem) => cartItem.name === item.name
  );

  if (existingItemIndex !== -1) {
    userCart[existingItemIndex].quantity += item.quantity;
  } else {
    userCart.push(item);
  }
}

function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

function removeItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index === -1) return;

  if (userCart[index].quantity > 1) {
    userCart[index].quantity -= 1;
  } else {
    deleteItem(userCart, name);
  }
}

function updateItemQuantity(userCart, name, quantity) {
  const item = userCart.find((i) => i.name === name);

  if (!item) return;

  if (quantity <= 0) {
    deleteItem(userCart, name);
    return;
  }

  item.quantity = quantity;
}

function applyDiscount(total, percentage) {
  const discount = total * (percentage / 100);
  return total - discount;
}

function calculateTotal(userCart) {
  return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

function displayCart(userCart) {
  console.log("\nShopee cart list:");

  if (userCart.length === 0) {
    console.log("Carrinho vazio");
    return;
  }

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`
    );
  });
}

module.exports = {
  addItem,
  deleteItem,
  removeItem,
  updateItemQuantity,
  calculateTotal,
  displayCart,
  applyDiscount,
};
