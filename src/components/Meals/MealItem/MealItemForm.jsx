import React, { useRef, useState } from "react";
import classes from "../../../styles/MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = +amountInputRef.current.value;
        if (enteredAmount < 1 || enteredAmount > 5) {
            setAmountIsValid(false);
            return;
        } else {
            setAmountIsValid(true);
            props.onAddToCart(enteredAmount);
        }
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label={"Amount"}
                type={"number"}
                input={{
                    id: "amount_" + props.item.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount [1-5]</p>}
        </form>
    );
};

export default MealItemForm;
