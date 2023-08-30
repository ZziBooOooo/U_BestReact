import { useState } from "react";
import useInputPractice from "../hooks/use-inputpractice";

const BasicForm = (props) => {
  /*
  useInputPractice()가 객체에 할당되는 것은 
  반환 값이 객체 형태라는 것과, 
  구조 분해 문법을 사용해 그 객체의 각 속성을 변수로 
  가져온다는 개념으로 이해
  useInputPractice() 호출 결과로 반환되는 
  객체의 속성들은 변수에 각각 할당
  */

  // tip : useInputPractice에 인자로 들어가는 부분이 겹치는 것이 있으므로
  // 얘네도 따로 함수로 빼면 좋을 것 같다!

  const {
    value: firstName,
    isValid: firstNameValid,
    inputValueHasError: firstNameHasError,
    inputValueChangeHandler: firstNameChangeHandler,
    inputValueBlurHandler: firstNameBlurHandler,
    resetInput: firstNameReset,
  } = useInputPractice((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameValid,
    inputValueHasError: lastNameHasError,
    inputValueChangeHandler: lastNameChangeHandler,
    inputValueBlurHandler: lastNameBlurHandler,
    resetInput: lastNameReset,
  } = useInputPractice((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailValid,
    inputValueHasError: emailHasError,
    inputValueChangeHandler: emailChangeHandler,
    inputValueBlurHandler: emailBlurHandler,
    resetInput: emailReset,
  } = useInputPractice((value) => value.includes("@"));

  const firstNameInputClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailNameInputClass = emailHasError
    ? "form-control invalid"
    : "form-control";

  function formSubmitHandler(e) {
    e.preventDefault();

    firstNameReset();
    lastNameReset();
    emailReset();
  }

  let formValid = false;
  if (firstNameValid && lastNameValid && emailValid) {
    formValid = true;
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
        </div>
      </div>
      <div className={emailNameInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
