const AddDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};
export const updateCart = (state) => {
  // calculate price
  state.itemsPrice = AddDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price + item.qty, 0)
  );

  // Shipping price
  state.shippingPrice = AddDecimals(state.itemsPrice > 100 ? 0 : 10);

  // tax price
  state.taxPrice = AddDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

  // Calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
