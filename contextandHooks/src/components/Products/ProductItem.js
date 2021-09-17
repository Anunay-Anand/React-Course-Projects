import React, { useContext } from "react";

import Card from "../UI/Card";
import { ProductContext } from "../../context/products-context";
import "./ProductItem.css";

const ProductItem = (props) => {
  // Using context to update the data
  const prodCtx = useContext(ProductContext);

  const toggleFavHandler = () => {
    prodCtx.toggleFav(props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
