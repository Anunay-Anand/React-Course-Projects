// Importing custom Hook
import useInput from "../hooks/user_input";

const SimpleInput = (props) => {
  // using custom hook to manage input
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  // Varible to see if form is valid or not (by default it's false)
  // Thus everytime any state change that is input is removed or added this is also re evlauted
  // This the form validity is falsed everytime until the if condition down there checks and turns in valid
  let isFormValid = false;

  // We add both if and else case to useEffect because there is a chance a user creates
  // a valid input and then turns it empty thus in valid
  if (enteredNameIsValid && enteredEmailIsValid) {
    isFormValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // Check if form is Valid
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    // Reset the input name on submission
    nameInputReset();
    emailInputReset();
  };

  // Adding conditional styling if error
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  // Adding conditional styling if error
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      {nameInputHasError && (
        <p className="error-text">The name is not Valid.</p>
      )}
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
      </div>
      {emailInputHasError && (
        <p className="error-text">The email is not Valid.</p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
