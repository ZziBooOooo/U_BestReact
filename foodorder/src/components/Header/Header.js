import React, { useState, useContext } from "react";

import Button from "../../UI/Button/Button";
import CartModal from "../../UI/CartModal/CartModal";
import CartContext from "../../store/CartData";

import style from "./Header.module.css";

const Header = () => {
  const [cartModalOpen, setcartModalOpen] = useState(false);
  const cartCtx = useContext(CartContext);

  function closeCartModal() {
    setcartModalOpen(false);
  }
  return (
    <>
      {cartModalOpen && (
        <CartModal
          onConfirm={closeCartModal}
          cartData={cartCtx.cartData}
        ></CartModal>
      )}
      <div className={style.header_Box}>
        <div className={style.header_contentBox}>
          <h1>Food Order</h1>
          <Button
            onClick={() => {
              setcartModalOpen(true);
            }}
          >
            Your Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
