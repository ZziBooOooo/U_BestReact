import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import Button from "../Button/Button";
import CheckOut from "./CheckOut";

import style from "./CartModal.module.css";

import CartContext from "../../store/CartData";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  const cartCtx = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);

  function addAmount(id) {
    const updatedData = cartCtx.cartData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      }
      return item;
    });
    cartCtx.setCartData(updatedData);
  }
  function subAmount(id) {
    const updatedData = cartCtx.cartData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount - 1,
        };
      }
      return item;
    });
    cartCtx.setCartData(updatedData);
  }

  useEffect(() => {
    let prices = 0;
    cartCtx.cartData.map((item) => {
      const price = item.price * item.amount;
      prices += price;
    });
    setTotalAmount(prices.toFixed(2));
  }, [cartCtx.cartData]);

  return (
    <Card className={style.modal}>
      <div className={style.cartListFullContainer}>
        {props.cartData.map((list) => {
          return (
            <div key={list.id} className={style.cartListContainer}>
              <div className={style.cartListDiv}>
                <div>
                  <p>{list.name}</p>
                  <span>${list.price}</span>
                  <span>x{list.amount}</span>
                </div>
                <div className={style.cartListBtnBox}>
                  <button onClick={() => subAmount(list.id)}>-</button>
                  <button onClick={() => addAmount(list.id)}>+</button>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className={style.priceBox}>
        <span>Total Amount</span>
        <span>$ {totalAmount}</span>
      </div>
      {props.formValid ? (
        ""
      ) : (
        <div className={style.modalBtnBox}>
          <Button onClick={props.onOrder}>Order</Button>
          <Button onClick={props.onConfirm}>Close</Button>
        </div>
      )}
      {props.formValid ? <CheckOut></CheckOut> : ""}
    </Card>
  );
};

const CartModal = (props) => {
  const [formValid, setFormValid] = useState(false);

  function openForm() {
    setFormValid(true);
    console.log("open");
  }
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          cartData={props.cartData}
          formValid={formValid}
          onOrder={openForm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default CartModal;
