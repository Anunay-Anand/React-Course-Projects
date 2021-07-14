//Importing modules and css files
import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  //Check Username state Update
  const [enteredUsername, setEnteredUsername] = useState("");
  //Check Age Input state Update
  const [enteredAge, setEnteredAge] = useState("");
  //Check if input is valid or not
  const [error, setError] = useState();

  //Function to check userInput
  const submitHandler = (event) => {
    //Prevent default refresh of page
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please set a right username and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Age should be higher than 0",
      });
      return;
    }
    const userData = {
      id: Math.floor(Math.random() * 100000).toString(),
      username: enteredUsername,
      age: enteredAge,
    };
    //Pass the data to parent
    props.onSaveUserData(userData);
    //Clear the input fields
    setEnteredUsername("");
    setEnteredAge("");
  };

  //Username Change Handler
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  //Age Change Handler
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form classList="input" onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
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
    </div>
  );
};

export default UserForm;
