import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0, // 총 결제 가격
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_CART") {
    const updatedItems = state.items.concat(action.item); // 새로운 배열을 리턴!! push() X
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState; // action이 없을 경우 초기값 리턴~~
};

// provider의 역할은 cart contex를 관리하고, 이 context를 접근하는 모든 컴포넌트에 제공한다.
function CartProvider({ children }) {
  // reducer를 사용하여 cart를 state로 관리한다.
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_CART", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_CART", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
export default CartProvider;
