import React, { useContext } from "react";
import AuthContext from "../../store/auth-content";

import classes from "./Navigation.module.css";

const Navigation = () => {
  // Using React useContext hook to access the context
  // Here ctx will simply take the value passed
  const ctx = useContext(AuthContext);
  return (
    // <AuthContext.Consumer>
    // {(ctx) => {return ();}}
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    // </AuthContext.Consumer>
  );
};

export default Navigation;
