import { useState } from "react";

const useInput = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueTouched, setValueTouched] = useState(false);

  function valueChangeHandler(e) {
    setEnteredValue(e.target.value);
  }

  function valueBlurHandler() {
    setValueTouched(true);
  }
  const valueValid = enteredValue.trim() !== "";
  const valueError = !valueValid && valueTouched;

  function reset() {
    setEnteredValue("");
    setValueTouched(false);
  }

  return {
    enteredValue,
    valueChangeHandler,
    valueBlurHandler,
    valueValid,
    valueError,
    reset,
  };
};

export default useInput;
