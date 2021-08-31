import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // Managing input with useState and validation
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  // Managing the input with useRef
  const nameInputRef = useRef();

  // Handling the setEnteredName
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
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

  return (
    <form onSubmit={formSubmissionHandler}>
      {!enteredNameIsValid && (
        <p className="error-text">The name is not Valid.</p>
      )}
      <div className="form-control">
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
