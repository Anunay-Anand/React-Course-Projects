import useInput from "../hooks/user_input";

const BasicForm = (props) => {
  // Using custom hook to validate the inputs
  // Managing the first name input
  const {
    value: enteredFirstName,
    hasError: firstNameInValid,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  // Managing the last name input
  const {
    value: enteredLastName,
    hasError: lastNameInValid,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  // Managing the email input
  const {
    value: enteredEmail,
    hasError: emailInValid,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  // Checking the overall form validity
  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    // prevent default http refresh
    event.preventDefault();
    // Reset all the input field
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  // Check if first name is valid or invalid and add class
  const firstNameClass = firstNameInValid
    ? "form-control invalid"
    : "form-control";

  // Check if last name is valid or invalid and add class
  const lastNameClass = lastNameInValid
    ? "form-control invalid"
    : "form-control";

  // Check if last name is valid or invalid and add class
  const emailClass = emailInValid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {/* dynamically render the error message */}
          {firstNameInValid && <p>First name is not correct</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {/* dynamically render the error message */}
          {lastNameInValid && <p>Last name is not correct</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {/* dynamically render the error message */}
        {emailInValid && <p>Email is not correct</p>}
      </div>
      <div className="form-actions">
        {/* If form is not valid disabled will be true */}
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
