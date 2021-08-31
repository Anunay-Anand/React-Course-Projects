import { useState } from "react";

const SimpleInput = (props) => {
  // Managing input with useState and validation
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouch, setEnteredNameTouch] = useState(false);

  // We can handle this my simply touch and the value of input managed by state
  const enteredNameIsValid = enteredName.trim() !== "";
  // One the basis of previous condition we derive wether it is valid or not
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;

  // Handling the setEnteredName
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  // Handling the setEntered Name but on Blur or Lost focus
  const nameChangeBlurHandler = () => {
    // to make sure that user has touched the input
    setEnteredNameTouch(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // Check if form is Valid
    if (!enteredNameIsValid) {
      return;
    }
    // setting touch state to be true
    setEnteredNameTouch(true);
    // If input is invalid (Set the state to be false)
    // Empty the input after submission
    setEnteredName("");
    // After submission just change state of touch to be untouched (for no error)
    setEnteredNameTouch(false);
  };

  // Adding conditional styling if error
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      {nameInputIsInvalid && (
        <p className="error-text">The name is not Valid.</p>
      )}
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameChangeBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
