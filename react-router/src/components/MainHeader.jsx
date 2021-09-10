// importing React and necessary packages
import React from "react";
import { NavLink } from "react-router-dom";

// Importing css and other assets
import classes from "./MainHeader.module.css";

// Creating our landing page or Home Route
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
