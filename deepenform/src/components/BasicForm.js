import { useState } from "react";
import useInputPractice from "../hooks/use-inputpractice";

const BasicForm = (props) => {
  /*
  useInputPractice()�� ��ü�� �Ҵ�Ǵ� ���� 
  ��ȯ ���� ��ü ���¶�� �Ͱ�, 
  ���� ���� ������ ����� �� ��ü�� �� �Ӽ��� ������ 
  �����´ٴ� �������� ����
  useInputPractice() ȣ�� ����� ��ȯ�Ǵ� 
  ��ü�� �Ӽ����� ������ ���� �Ҵ�
  */

  // tip : useInputPractice�� ���ڷ� ���� �κ��� ��ġ�� ���� �����Ƿ�
  // ��׵� ���� �Լ��� ���� ���� �� ����!

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
