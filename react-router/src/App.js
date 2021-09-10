// importing React and necessary packages
import React from "react";
import { Route } from "react-router-dom";

// Importing other components
import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (
    <section>
      <MainHeader />
      <main>
        {/* Welcome is only rendered when the path is active */}
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </section>
  );
}

export default App;
