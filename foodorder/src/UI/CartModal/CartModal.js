import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import Button from "../Button/Button";

import style from "./CartModal.module.css";

import CartContext from "../../store/CartData";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  const cartCtx = useContext(CartContext);

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

  return (
    <Card className={style.modal}>
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
      <div className={style.modalBtnBox}>
        <Button>Order</Button>
        <Button onClick={props.onConfirm}>Close</Button>
      </div>
    </Card>
  );
};

const CartModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} cartData={props.cartData} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default CartModal;
