import { useState } from "react";

const SimpleInput = (props) => {
  // Managing input with useState and validation
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouch, setEnteredNameTouch] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouch, setEnteredEmailTouch] = useState(false);

  // We can handle this my simply touch and the value of input managed by state
  const enteredNameIsValid = enteredName.trim() !== "";
  // One the basis of previous condition we derive wether it is valid or not
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;
  // We can handle if the email is Valid by using value
  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  // If the enteredEmail is invalid as well as it is touched
  const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouch;

  // Varible to see if form is valid or not (by default it's false)
  // Thus everytime any state change that is input is removed or added this is also re evlauted
  // This the form validity is falsed everytime until the if condition down there checks and turns in valid
  let isFormValid = false;

  // We add both if and else case to useEffect because there is a chance a user creates
  // a valid input and then turns it empty thus in valid
  if (enteredNameIsValid && enteredEmailIsValid) {
    isFormValid = true;
  }

  // Handling the setEnteredName
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  // Handling the email or enteredEmail
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  // Handling the setEntered Name but on Blur or Lost focus
  const nameChangeBlurHandler = () => {
    // to make sure that user has touched the input
    setEnteredNameTouch(true);
  };

  // Handling the validity on the basis input is touch or not
  const emailChangeBlurHandler = () => {
    setEnteredEmailTouch(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // Check if form is Valid
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    // // setting touch state to be true
    setEnteredNameTouch(true);
    setEnteredEmailTouch(true);
    // If input is invalid (Set the state to be false)
    // Empty the input after submission
    setEnteredName("");
    setEnteredEmail("");
    // After submission just change state of touch to be untouched (for no error)
    setEnteredNameTouch(false);
    setEnteredEmailTouch(false);
  };

  // Adding conditional styling if error
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  // Adding conditional styling if error
  const emailInputClasses = enteredEmailIsInValid
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
      {enteredEmailIsInValid && (
        <p className="error-text">The email is not Valid.</p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailChangeBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
