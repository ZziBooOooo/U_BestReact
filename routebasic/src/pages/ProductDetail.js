import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <p>
        <Link to="..">Back</Link>
      </p>
    </>
  );
};

export default ProductDetail;
