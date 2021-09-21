import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configureProductsStore from "./hooks-store/product-store";

import "./index.css";
import App from "./App";

// This is will initialize our custom Store

configureProductsStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
