//Importing modules and css files
import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  //Check Username state Update
  const [enteredUsername, setEnteredUsername] = useState("");
  //Check Age Input state Update
  const [enteredAge, setEnteredAge] = useState("");
  //Check if input is valid or not
  const [isValid, setIsValid] = useState(true);

  //Username Change Handler
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  //Age Change Handler
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  //Function to check userInput
  const submitHandler = (event) => {
    //Prevent default refresh of page
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
      return <p>Please Re-enter Username/Age</p>;
    }
    if (+setEnteredAge < 1) {
      return <p>Age Should be more than one</p>;
    }
    const userData = {
      id: Math.floor(Math.random() * 100000),
      username: enteredUsername,
      age: enteredAge,
    };
    //Pass the data to parent
    props.onSaveUserData(userData);
    //Clear the input fields
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card className={classes.input}>
      <form classList="input" onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={usernameChangeHandler}
          style={{ color: !isValid ? "red" : "black" }}
          value={enteredUsername}
        ></input>
        <label htmlFor="age">Age(Years)</label>
        <input
          type="number"
          id="age"
          onChange={ageChangeHandler}
          value={enteredAge}
        ></input>
        <Button type="submit" onclick="">
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default UserForm;
