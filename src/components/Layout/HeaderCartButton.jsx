import classes from "../../styles/HeaderCartButton.module.css";
import CartContext from "../../context/cart-context";
import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.items.reduce((acc, currValue) => {
    return acc + currValue.totalAmount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
