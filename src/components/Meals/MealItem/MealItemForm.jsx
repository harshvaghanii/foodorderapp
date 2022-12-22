import React from "react";
import classes from "../../../styles/MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form action="" className={classes.form}>
      <Input
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
    </form>
  );
};

export default MealItemForm;
