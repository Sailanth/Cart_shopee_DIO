// index.js

const cartService = require("./services/cart");
const itemService = require("./services/item");

const myCart = [];

// Criando itens
const item1 = itemService.createItem("Camisa", 50, 2);
const item2 = itemService.createItem("Tênis", 200, 1);

// Adicionando ao carrinho
cartService.addItem(myCart, item1);
cartService.addItem(myCart, item2);

// Exibindo carrinho
cartService.displayCart(myCart);

// Total
let total = cartService.calculateTotal(myCart);
console.log(`\nTotal: R$ ${total}`);

// Aplicando desconto
const totalWithDiscount = cartService.applyDiscount(total, 10);
console.log(`Total com desconto (10%): R$ ${totalWithDiscount}`);
