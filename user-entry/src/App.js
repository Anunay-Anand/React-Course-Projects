import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/Users/UserForm";
import UserList from "./components/Users/UserList";

function App(props) {
  //State to store user data
  const [users, setUsers] = useState("");

  //To Store user data or bring data from children to parent
  const userDataHandler = (userInfo) => {
    //setting users state
    setUsers((prevState) => {
      return [userInfo, ...prevState];
    });
  };

  return (
    <div>
      <UserForm onSaveUserData={userDataHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
