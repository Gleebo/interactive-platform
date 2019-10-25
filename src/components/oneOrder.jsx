import React from "react";

const OneOrder = order => {
  return (
    <div>
      <div className="row" style={{ marginTop: 35 }}>
        <div className="col-3 orderInfo">
          <span>Order Id: </span>

          <span>{order.id}</span>
        </div>
        <div className="col-4 text-center ">
          {order.productsForPay.map(product => (
            <img
              style={{ height: 70, width: 70 }}
              src={product.imgUrl}
              alt="..."
            ></img>
          ))}
        </div>
        <div className="col-3 orderInfo">
          <span>Payment Method: </span>

          <span>{order.method.payment}</span>
          <br></br>
          <span>Shipping Method: </span>

          <span>{order.method.shipping}</span>
        </div>
        <div className="col-2 text-center">
          <span>{order.status}</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default OneOrder;
