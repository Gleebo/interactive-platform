import React from "react";
const ProductImage = ({ imgUrl, name }) => {
  return (
    <div>
      <img src={imgUrl} className="img-fluid" alt={name} />
    </div>
  );
};
export default ProductImage;
