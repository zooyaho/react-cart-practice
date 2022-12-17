import { useState, useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart({ onClose }) {
  const [isChecked, setIsChecked] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveCartItem = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddCartItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsChecked(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          // ⭐️함수 실행을 prop으로 전달하기 위해서는 사전에 정의한 함수를 bind해야한다!!
          // ⭐️인수를 미리 정의할 수 있다!!
          onRemove={cartItemRemoveCartItem.bind(null, item.id)}
          onAdd={cartItemAddCartItem.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onClose}>
        close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isChecked ? <Checkout onCancel={onClose} /> : modalActions}
    </Modal>
  );
}

export default Cart;
