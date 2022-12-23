import classes from "../../styles/HeaderCartButton.module.css";
import CartContext from "../../context/cart-context";
import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext);
    const [btnHighlighted, setBtnHighlighted] = useState(false);

    const { items } = ctx;
    const btnClasses = `${classes.button} ${
        btnHighlighted ? classes.bump : ""
    }`;
    useEffect(() => {
        if (items.length === 0) return;
        setBtnHighlighted(true);

        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    const numberOfCartItems = ctx.items.reduce((acc, currValue) => {
        return +(acc + currValue.amount);
    }, 0);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
