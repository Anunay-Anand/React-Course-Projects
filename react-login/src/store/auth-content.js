import React, { useState, useEffect } from "react";

// Creating context to manage app wide state
// The context created here and the object passed is to simply create a default
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

// We create a context component instead of simply passing values we pass entire component having methods
export const AuthContextProvider = (props) => {
  // Managing loggin state with useState Hook
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Using useEffect to seperate the code from the general flow
  // useEffect hook is used when we only want to run the code if dependencies change
  useEffect(() => {
    //Fetch isloggedIn from local storage
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  // Logout and Login Handler
  const loginHandler = () => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    //Removing localStorage key of loggedIn
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
