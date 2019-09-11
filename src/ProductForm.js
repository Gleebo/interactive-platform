import React, { useState } from "react";
const ProductForm = () => {
  const [value, setValue] = useState(1);
  return (
    <form className="d-flex justify-content-left">
      <input
        type="number"
        value={value}
        aria-label="Search"
        className="form-control"
        style={{ width: 100 + "px" }}
        onChange={e => setValue(e.target.value)}
      />
      <button className="btn btn-primary btn-md my-0 p" type="submit">
        Add to cart
        <i className="fas fa-shopping-cart ml-1"></i>
      </button>
    </form>
  );
};
export default ProductForm;
