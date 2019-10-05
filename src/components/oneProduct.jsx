import React from "react";
import { Link } from "react-router-dom";

const OneProduct = product => {
  return (
    <Link
      to={{
        pathname: "/productDetailPage",
        state: { product } //how to attach data using Link to jump to new page
      }}
    >
      <div
        className="card oneP"
        style={{ width: 12 + "rem", height: 24 + "rem" }}
      >
        <img
          src={product.imgUrl}
          className="card-img-top"
          alt="..."
          style={{ width: 100 + "%", height: 172 }}
        />
        <div
          className="card-body"
          style={{
            width: 100 + "%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            webkitLineClamp: "5",
            webkitBoxOrient: "vertical"
          }}
        >
          <h5>{product.name}</h5>

          {/*<p className="card-text">{product.desciption}</p>*/}
        </div>
        <h5 className="card-body">AU$: {product.price}</h5>
      </div>
    </Link>
  );
};

export default OneProduct;
