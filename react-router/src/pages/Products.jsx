// importing React and necessary packages
import React from "react";
import { Link } from "react-router-dom";

// Creating our landing page or Home Route
const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">A Pen</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
