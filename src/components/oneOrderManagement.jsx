import React, { Component } from "react";

class OneOrderManagement extends Component {
  state = {};
  render() {
    const { order } = { ...this.props };
    if (order.status === "processing") {
      return (
        <div className="row">
          <div className="col-3">
            <span>User id: </span>
            <br></br>
            <span>{order.uid} </span>
            <br></br>
            <span>Order id: </span>
            <br></br>
            <span> {order.id}</span>
          </div>
          <div className="col-4 text-center">
            {order.productsForPay.map(product => (
              <img
                style={{ height: 55, width: 55, marginTop: 20 }}
                src={product.imgUrl}
                alt="..."
              ></img>
            ))}
          </div>
          <div className="col-3 ">
            <span>Payment method : </span>
            <br></br>
            <span>{order.method.payment}</span>
            <br></br>
            <span>Shipping method : </span>
            <br></br>
            <span>{order.method.shipping}</span>
          </div>
          <div className="col-2 text-center">
            <span>{order.status}</span>
            <br></br>
            <button
              className="btn btn-primary"
              onClick={() => this.props.onToShipping(this.props.order)}
            >
              To be shipped
            </button>
          </div>
        </div>
      );
    } else if (order.status === "shipping") {
      return (
        <div className="row">
          <div className="col-3">
            <span>User id: </span>
            <br></br>
            <span>{order.uid} </span>
            <br></br>
            <span>Order id: </span>
            <br></br>
            <span> {order.id}</span>
          </div>
          <div className="col-4 text-center">
            {order.productsForPay.map(product => (
              <img
                style={{ height: 55, width: 55, marginTop: 20 }}
                src={product.imgUrl}
                alt="..."
              ></img>
            ))}
          </div>
          <div className="col-3 ">
            <span>Payment method : </span>
            <br></br>
            <span>{order.method.payment}</span>
            <br></br>
            <span>Shipping method : </span>
            <br></br>
            <span>{order.method.shipping}</span>
          </div>
          <div className="col-2 text-center">
            <span>{order.status}</span>
            <br></br>
            <button
              className="btn btn-success"
              onClick={() => this.props.onToDone(this.props.order)}
            >
              Completed
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-3">
            <span>User id: </span>
            <br></br>
            <span>{order.uid} </span>
            <br></br>
            <span>Order id: </span>
            <br></br>
            <span> {order.id}</span>
          </div>
          <div className="col-4 text-center">
            {order.productsForPay.map(product => (
              <img
                style={{ height: 55, width: 55, marginTop: 20 }}
                src={product.imgUrl}
                alt="..."
              ></img>
            ))}
          </div>
          <div className="col-3 ">
            <span>Payment method : </span>
            <br></br>
            <span>{order.method.payment}</span>
            <br></br>
            <span>Shipping method : </span>
            <br></br>
            <span>{order.method.shipping}</span>
          </div>
          <div className="col-2 text-center">
            <span>{order.status}</span>
            <button style={{ display: "none" }}></button>
          </div>
        </div>
      );
    }
  }
}

export default OneOrderManagement;
