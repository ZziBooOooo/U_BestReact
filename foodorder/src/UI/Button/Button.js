import React from "react";

import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${style.button} ${props.className}`}
      onClick={props.onClick}
      id={props.id}
    >
      {props.children}
    </button>
  );
};

export default Button;
