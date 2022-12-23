import React, { useContext } from "react";
import classes from "../../styles/Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
    const ctx = useContext(CartContext);
    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    const hasItems = ctx.items.length > 0;

    const cartItemAddHandler = (item) => {
        ctx.addItem({
            ...item,
            amount: 1,
        });
    };
    const cartItemRemoveHandler = (id) => {
        ctx.removeItem(id);
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {ctx.items.map((item) => {
                return (
                    <CartItem
                        name={item.name}
                        key={item.id}
                        price={item.price}
                        amount={item.amount}
                        onAdd={cartItemAddHandler.bind(null, item)}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    />
                );
                // return <li key={item.id}>{item.name}</li>;
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
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={onClose} className={classes.button}>
                    Close
                </button>
                {hasItems && (
                    <button
                        onClick={orderHandler}
                        className={classes["button--alt"]}
                    >
                        Order
                    </button>
                )}
            </div>
        </Modal>
    );
};

export default Cart;
