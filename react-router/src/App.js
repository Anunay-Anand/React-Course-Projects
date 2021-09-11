// importing React and necessary packages
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Importing other components
import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <section>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          {/* Welcome is only rendered when the path is active */}
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          {/* This will a dynamic Route path which will render the page according to Params */}
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </section>
  );
}

export default App;
