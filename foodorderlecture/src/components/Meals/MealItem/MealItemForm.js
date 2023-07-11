import React, { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";

import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setIsAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsAmountIsValid(false);
      return;
    }
    // 폼이 제출될 때(= Add 버튼누를때) 여기서 context에 접근하는건 좋지않다.
    // 데이터의 이름이나 가격, id 등 정보가 없기 때문
    // 따라서, MealItem에서 context에 접근
    // 이곳에서는 버튼을 누르면 props로 전달받은 함수를 실행하도록 한다.

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1~5)</p>}
    </form>
  );
};

export default MealItemForm;
