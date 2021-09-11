// importing React and necessary packages
import React from "react";
import { Route } from "react-router";

// Creating our landing page or Home Route
const Welcome = () => {
  return (
    <section>
      <h1>The welcome page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome new User</p>
      </Route>
    </section>
  );
};

export default Welcome;
