// import React and other libraries
import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  // Extracting Params from dynamic links
  const params = useParams();

  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.id}</p>
    </section>
  );
};

export default ProductDetail;
