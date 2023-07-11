import React, { useContext } from "react";

import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    // cartProvider에서 addItem 키의 값은 addItemToCartHandler함수였다.
    // 이 함수는 item이라는 이름으로 인수를 받고, 또한
    // 이 함수는 dispatchCartAction를 실행하는데
    // 객체의 item이라는 키의 값으로 위에서 받은 item이라는 변수를 할당한다
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
