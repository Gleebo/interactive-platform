import React from "react";
const ProductInfo = ({ description, name }) => {
  return (
    <div className="col-md-6 text-center">
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};
export default ProductInfo;
