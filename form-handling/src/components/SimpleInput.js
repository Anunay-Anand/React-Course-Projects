import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // Managing input with useState and validation
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouch, setEnteredNameTouch] = useState(false);

  // Managing the input with useRef
  const nameInputRef = useRef();

  // Handling the setEnteredName
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // setting touch state to be true
    setEnteredNameTouch(true);
    // If input is invalid (Set the state to be false)
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    // Input is true if not trimmed
    setEnteredNameIsValid(true);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    // Empty the input after submission
    setEnteredName("");
  };

  // Checking if user touched the input or not
  // only if the entered name is invalid and it was touched is that we will show error
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;

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
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
