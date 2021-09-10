// importing React and necessary packages
import React from "react";
import { Route } from "react-router-dom";

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
        {/* Welcome is only rendered when the path is active */}
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        {/* This will a dynamic Route path which will render the page according to Params */}
        <Route path="/product-detail/:id">
          <ProductDetail />
        </Route>
      </main>
    </section>
  );
}

export default App;
