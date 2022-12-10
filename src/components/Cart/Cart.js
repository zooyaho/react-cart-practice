import { useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

function Cart({ onClose }) {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          close
        </button>
        {hasItems && <button className={classes.button}>order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
