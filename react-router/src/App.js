// importing React and necessary packages
import React from "react";
import { Route } from "react-router-dom";

// Importing other components
import Welcome from "./components/Welcome";
import Products from "./components/Products";

function App() {
  return (
    <div>
      {/* Welcome is only rendered when the path is active */}
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
