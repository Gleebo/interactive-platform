import React from "react";

const ProductDetail = ({ name, price, description, brand }) => {
  return (
    <div>
      <p className="lead">
        <span>{price}</span>
      </p>

      <p className="lead font-weight-bold">{`${name} | ${brand}`}</p>

      <p>{description}</p>
    </div>
  );
};
export default ProductDetail;
