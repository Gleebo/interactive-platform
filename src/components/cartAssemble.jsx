import React, { Component } from "react";
import CartContentSingle from "./cartContentSingle.jsx";
import { Link } from "react-router-dom";

class CartAssemble extends Component {
  state = {};

  calculateAllPrice = () => {
    const counters = this.props.counters;
    let money = 0;
    counters.map(counter => (money += counter.quantity * counter.price));
    return money;
  };

  payall = () => {
    if (this.props.counters.length === 0) {
      window.alert("nothing in the cart");
    } else {
      window.open("/finalPayInterface", "_self");
    }
  };

  render() {
    return (
      <div>
        <div className="nav justify-content-end" style={{ marginTop: "20px" }}>
          <button
            className="btn btn-secondary m-1 btn-success"
            onClick={this.payall}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div
          className="row text-center"
          style={{
            marginTop: 25,
            fontSize: 15
          }}
        >
          <div className="col-3">
            <span>Image</span>
          </div>
          <div className="col-4">
            <span>Product</span>
          </div>
          <div className="col-2">
            <span>Price</span>
          </div>
          <div className="col-2">
            <span>Amount</span>
          </div>
        </div>
        <hr />
        <div>
          {this.props.counters.map(counter => (
            <CartContentSingle
              key={counter.productId} //using in inner React, cant access through component
              counter={counter}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
            >
              <p className="info">{counter.name}</p>
            </CartContentSingle>
          ))}
        </div>
        <div
          className="cartActionSection text-center"
          style={{ marginBottom: 50, marginRight: 50, marginTop: 30 }}
        >
          <div className="text-right">
            <button
              onClick={this.props.onAllDelete}
              className="btn btn-outline-secondary m-1 btn-sm"
            >
              Remove all
            </button>
            <button
              onClick={this.props.onReset}
              className="btn btn-outline-secondary m-1 btn-sm"
            >
              Reset
            </button>
          </div>
          <div style={{ marginTop: "50px" }}>
            <hr />
            <span style={{ fontSize: 15, fontWeight: "bolder" }}>
              Subtotal (GST inclusive): AU${" "}
            </span>
            <span style={{ fontSize: 15, fontWeight: "bolder" }}>
              {this.calculateAllPrice()}
            </span>
          </div>
          <div>
            <button
              className="btn btn-secondary btn-success"
              onClick={this.payall}
              style={{ width: "100%", marginTop: "20px" }}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartAssemble;
