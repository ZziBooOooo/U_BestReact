import React from "react";

import classes from "./Input.module.css";

// <input id={props.input.id}> 대신 전개연산자를 이용했다
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
