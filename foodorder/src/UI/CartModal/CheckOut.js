import React, { useState, useContext } from "react";
import style from "./CheckOut.module.css";
import useInput from "../../hooks/use-input";
import CartContext from "../../store/CartData";
import axios from "axios";

const CheckOut = () => {
  const cartCtx = useContext(CartContext);

  const {
    enteredValue: nameValue,
    valueChangeHandler: namechangeHandler,
    valueBlurHandler: nameBlurHandler,
    valueValid: nameValid,
    valueError: nameError,
    reset: nameReset,
  } = useInput();
  const {
    enteredValue: streetValue,
    valueChangeHandler: streetchangeHandler,
    valueBlurHandler: streetBlurHandler,
    valueValid: streetValid,
    valueError: streetError,
    reset: streetReset,
  } = useInput();
  const {
    enteredValue: postalValue,
    valueChangeHandler: postalchangeHandler,
    valueBlurHandler: postalBlurHandler,
    valueValid: postalValid,
    valueError: postalError,
    reset: postalReset,
  } = useInput();
  const {
    enteredValue: cityValue,
    valueChangeHandler: citychangeHandler,
    valueBlurHandler: cityBlurHandler,
    valueValid: cityValid,
    valueError: cityError,
    reset: cityReset,
  } = useInput();

  function formSubmitHandler(e) {
    e.preventDefault();
    const orderData = {
      name: nameValue,
      street: streetValue,
      postalCode: postalValue,
      city: cityValue,
      order: cartCtx.cartData,
    };

    axios.post(
      "https://food-order-3f1f6-default-rtdb.firebaseio.com/User.json",
      {
        body: orderData,
      }
    );

    console.log(orderData);

    if (formValid) {
      nameReset();
      streetReset();
      postalReset();
      cityReset();
    }
  }

  const nameClass = nameError
    ? `${style.inputBox} ${style.inputInvalid}`
    : style.inputBox;
  const streetClass = streetError
    ? `${style.inputBox} ${style.inputInvalid}`
    : style.inputBox;
  const postalClass = postalError
    ? `${style.inputBox} ${style.inputInvalid}`
    : style.inputBox;
  const cityClass = cityError
    ? `${style.inputBox} ${style.inputInvalid}`
    : style.inputBox;

  const formValid = nameValid && streetValid && postalValid && cityValid;

  return (
    <div className={style.fromContainer}>
      <form onSubmit={formSubmitHandler}>
        <div className={nameClass}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={namechangeHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
          />
        </div>
        <div className={streetClass}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            onChange={streetchangeHandler}
            onBlur={streetBlurHandler}
            value={streetValue}
          />
        </div>
        <div className={postalClass}>
          <label htmlFor="postal">Postal Code</label>
          <input
            type="text"
            id="postal"
            onChange={postalchangeHandler}
            onBlur={postalBlurHandler}
            value={postalValue}
          />
        </div>
        <div className={cityClass}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            onChange={citychangeHandler}
            onBlur={cityBlurHandler}
            value={cityValue}
          />
        </div>

        <div className={style["form-actions"]}>
          <button onClick={formSubmitHandler}>Confirm</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
