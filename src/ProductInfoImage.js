import React from "react";
const ProductInfoImage = ({ imgUrl1, name }) => {
  return (
    <div className="col-lg-4 col-md-12 mb-4">
      <img src={imgUrl1} className="img-fluid" alt={name} />
    </div>
  );
};
export default ProductInfoImage;
