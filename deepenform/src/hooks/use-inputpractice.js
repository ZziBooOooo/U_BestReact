import { useState } from "react";

const useInputPractice = (checkValid) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValueTouched, setInputValueTouched] = useState(false);

  function inputValueChangeHandler(e) {
    setInputValue(e.target.value);
  }

  function inputValueBlurHandler() {
    setInputValueTouched(true);
  }

  const inputValueValid = checkValid(inputValue);
  const inputValueHasError = !inputValueValid && inputValueTouched;

  function resetInput() {
    setInputValue("");
    setInputValueTouched(false);
  }
  return {
    value: inputValue,
    isValid: inputValueValid,
    inputValueHasError,
    inputValueChangeHandler,
    inputValueBlurHandler,
    resetInput,
  };
};

export default useInputPractice;
