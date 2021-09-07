import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { useRef } from "react";

const Auth = () => {
  // using ref to validate input
  const userInputEmail = useRef();
  const userInputPassword = useRef();

  // dispatch action and login handler
  const dispatch = useDispatch();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // Input email and password validate
    const emailIsValid = userInputEmail.current.value.includes("@");
    const passwordIsValid = userInputPassword.current.value.trim() !== "";
    if (!emailIsValid || !passwordIsValid) {
      return;
    }
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={userInputEmail} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={userInputPassword} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
