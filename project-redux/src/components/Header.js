// Importing Redux state data and dispatch actions
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";

import classes from "./Header.module.css";

const Header = () => {
  // Selecting the authenticated state from reducer
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  // logout handler and dispatching action
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(authActions.logout());
  };

  const loggedInHeader = (
    <ul>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
      <li>
        <button onClick={onLogoutHandler}>Logout</button>
      </li>
    </ul>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>{isLoggedIn && loggedInHeader}</nav>
    </header>
  );
};

export default Header;
