import React, { useContext } from "react";

import ProductItem from "../components/Products/ProductItem";
import { ProductContext } from "../context/products-context";
import "./Products.css";

const Products = (props) => {
  // Using Context to get the products
  const productCtx = useContext(ProductContext);

  return (
    <ul className="products-list">
      {productCtx.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
