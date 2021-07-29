import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
// Auth Context or context api is used to manage state wide context
import AuthContext from "./store/auth-content";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //Using useEffect to seperate the code from the general flow
  useEffect(() => {
    //Fetch isloggedIn from local storage
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
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
    // Adding context to manage loggedIn or not
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
      }}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
