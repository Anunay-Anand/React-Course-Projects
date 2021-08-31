import { useState } from "react";

const useInput = (validateValue) => {
  // Managing the value and validity of inputs with states
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // Using const which will be re initialized everytime the state change.
  // This is a optimized way of handling state
  // We can fetch a function given by the component itself for it's specific validation criteria
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  // Handling the input value for length
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  // Handling the input blur
  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  // Reset function to reset the input
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  // Return what you want to send as a result of hook
  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
