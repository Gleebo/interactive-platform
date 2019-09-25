import React from "react";
import { Link } from "react-router-dom";

const OneProduct = product => {
  return (
    <Link
      to={{
        pathname: "/productPage",
        state: { name: product.name, id: product.id } //how to attach data using Link to jump to new page
      }}
    >
      <div className="card oneP" style={{ width: 12 + "rem" }}>
        <img src={product.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5>{product.name}</h5>
          <h5>{product.price}</h5>
          {/*<p className="card-text">{product.desciption}</p>*/}
        </div>
      </div>
    </Link>
  );
};

export default OneProduct;
