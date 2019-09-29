import React from "react";

const ProductDetailPage = product => {
  return (
    <div className="row" style={{ marginTop: 50, marginBottom: 100 }}>
      <div className="col-md-12 col-lg-6 text-center align-self-center">
        <img
          src={product.location.state.product.imgUrl}
          alt="..."
          style={{ height: 370, width: 370 }}
        ></img>
      </div>
      <div className="col-md-12 col-lg-6 align-self-center p-d-p">
        <div style={{ width: 350 }}>
          <h4>{product.location.state.product.name}</h4>
        </div>
        <hr></hr>
        <h4>
          <span className="badge badge-primary">
            AU$ {product.location.state.product.price}
          </span>
        </h4>
        <div style={{ width: 350 }}>
          <h5>
            {" "}
            <span>Brand: {product.location.state.product.brand}</span>
          </h5>

          <h5>
            {" "}
            <span>Categoty: {product.location.state.product.category}</span>
          </h5>

          <span>{product.location.state.product.description}</span>
        </div>
        <div style={{ marginTop: 25 }}>
          <input type="number" style={{ width: 60 }}></input>
          <button
            className="btn btn-outline-primary btn-sm"
            style={{ marginLeft: 15 }}
          >
            +
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            style={{ marginLeft: 8 }}
          >
            -
          </button>
        </div>
        <hr></hr>
        <button className="btn btn-danger">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
