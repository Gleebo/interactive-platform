import React from "react";

const OneOrder = order => {
  return (
    <div className="row" style={{ marginTop: 35 }}>
      <div className="col-3">
        <span>Order Id: </span>
        <br></br>
        <span>{order.id}</span>
      </div>
      <div className="col-4 text-center ">
        {order.productsForPay.map(product => (
          <img
            style={{ height: 55, width: 55, marginTop: 20 }}
            src={product.imgUrl}
            alt="..."
          ></img>
        ))}
      </div>
      <div className="col-3 ">
        <span>Payment Method: </span>
        <br></br>
        <span>{order.method.payment}</span>
        <br></br>
        <span>Shipping Method: </span>
        <br></br>
        <span>{order.method.shipping}</span>
      </div>
      <div className="col-2 text-center">
        <span>{order.status}</span>
      </div>
    </div>
  );
};

export default OneOrder;
