var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let obj = { [item]: Math.floor(Math.random() * 99 + 1) };
 cart.push(obj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}/*
function addToCart(item) {
 cart[item] = Math.floor(Math.random() * 99 + 1);
 console.log(`${item} has been added to your cart.`);
 return cart;
}*/

function viewCart() {
  if (cart.length == 0) {
    console.log(`Your shopping cart is empty.`)
  }
  if (cart.length == 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])}.`)
  }
  if (cart.length > 1) {
    var string = ""
    for (var i = 0; i < cart.length - 1; i++) {
      cart[i]
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
