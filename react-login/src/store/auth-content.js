import React from "react";

// Creating context to manage app wide state
// The context created here and the object passed is to simply create a default
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
