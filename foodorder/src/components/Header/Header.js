import React from "react";

import Button from "../../UI/Button/Button";

import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header_Box}>
      <div className={style.header_contentBox}>
        <h1>Food Order</h1>
        <Button>Your Cart</Button>
      </div>
    </div>
  );
};

export default Header;
