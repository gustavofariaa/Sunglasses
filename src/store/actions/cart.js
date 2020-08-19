export function addToCart(glasses) {
  return { type: 'ADD_TO_CART', glasses };
}

export function removeFromCart(glasses) {
  return { type: 'REMOVE_FROM_CART', glasses };
}

export function cleanCart() {
  return { type: 'CLEAR_CART' };
}
