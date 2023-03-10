import React, { useReducer } from "react";
import CartContext from "./cart-context";
import CartReducer from "../reducers/CartReducer";
const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        CartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: "ADD",
            item,
        });
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: "REMOVE",
            id,
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
