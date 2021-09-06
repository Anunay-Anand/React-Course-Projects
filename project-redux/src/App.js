import React from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  // Importing reducer action keys and data
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <React.Fragment>
      <Header />
      {isLoggedIn && <UserProfile />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Counter />}
    </React.Fragment>
  );
}

export default App;
