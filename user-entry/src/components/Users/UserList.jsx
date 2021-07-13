import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  if (props.users.length === 0) {
    return (
      <Card>
        <p>Nothing there</p>
      </Card>
    );
  }
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.username} ({user.age} yeard old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
