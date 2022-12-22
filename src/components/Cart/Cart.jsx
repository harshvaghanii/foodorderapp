import React from "react";
import classes from "../../styles/Cart.module.css";
import Modal from "../UI/Modal";
const Cart = ({ onClose }) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );

  const orderHandler = () => {
    console.log("Ordering...");
  };

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onClose} className={classes.button}>
          Close
        </button>
        <button onClick={orderHandler} className={classes["button--alt"]}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
