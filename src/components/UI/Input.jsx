import React from "react";
import classes from "../../styles/Input.module.css";

const Input = React.forwardRef((props, ref) => {
    const classNames = `${classes.input} ${props.classes}`;
    return (
        <div className={classNames}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} ref={ref} />
        </div>
    );
});

export default Input;
