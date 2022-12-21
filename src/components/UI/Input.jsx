import React from "react";
import classes from "../../styles/Input.module.css";
const Input = (props) => {
  const classNames = `${classes.input} ${props.classes}`;
  return (
    <div className={classNames}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
