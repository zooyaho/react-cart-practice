import { useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const useValidate = (postalCode = false) => {
  const [enteredInputValue, setEnteredInputValue] = useState("");
  const [enteredInputIsTouched, setEnteredInputIsTouched] = useState(false);

  let isValid;
  if (postalCode) {
    isValid = isFiveChars(enteredInputValue);
  } else {
    isValid = !isEmpty(enteredInputValue);
  }

  const inputHasError = !isValid && enteredInputIsTouched;

  const inputChangeHandler = (event) => {
    setEnteredInputValue(event.target.value);
  };
  const inputBlurHandler = () => {
    setEnteredInputIsTouched(true);
  };
  const resetInput = () => {
    setEnteredInputValue("");
    setEnteredInputIsTouched(false);
  };

  return {
    value: enteredInputValue,
    hasError: inputHasError,
    isValid,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useValidate;
