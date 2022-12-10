import CartContext from "./cart-context";

// provider의 역할은 cart contex를 관리하고, 이 context를 접근하는 모든 컴포넌트에 제공한다.
function CartProvider({ children }) {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
export default CartProvider;
