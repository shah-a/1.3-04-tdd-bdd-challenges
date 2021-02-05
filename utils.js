// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return (w >= 0 && h >= 0) ? w * h : null;
}

const perimeter = (w, h) => {
  return (w >= 0 && h >= 0) ? 2 * (w + h) : null;
}

const circleArea = r => {
  return (r >= 0) ? Math.PI * (r ** 2) : null;
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  return shoppingCart;
}

const addItemToCart = (item) => {
  const index = shoppingCart.indexOf(item);
  if (index !== -1) {
    shoppingCart[index].quantity += 1;
  } else {
    shoppingCart.push(item);
  }
}

const getNumItemsInCart = () => {
  let numItems = 0;
  shoppingCart.forEach((item) => {
    numItems += item.quantity;
  })
  return numItems;
}

const removeItemFromCart = (item) => {
  const index = shoppingCart.indexOf(item);
  if (index !== -1) {
    if (shoppingCart[index].quantity > 1) {
      shoppingCart[index].quantity -= 1;
    } else {
      shoppingCart.splice(index, 1);
    }
  }
}

const getCost = () => {
  let cost = 0;
  shoppingCart.forEach(item => {
    cost += item.price * item.quantity;
  })
  return parseFloat(cost.toFixed(2));
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, getCost
}
