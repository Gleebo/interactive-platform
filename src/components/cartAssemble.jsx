import React, { Component } from "react";
import CartContentSingle from "./cartContentSingle.jsx";

class CartAssemble extends Component {
  state = {};

  calculateAllPrice = () => {
    const counters = this.props.counters;
    let money = 0;
    counters.map(counter => (money += counter.qunatity * counter.price));
    return money;
  };

  render() {
    return (
      <div>
        <div
          className="row text-center"
          style={{
            marginTop: 25,
            fontSize: 20,
            fontFamily: "Palatino Linotype"
          }}
        >
          <div className="col-3">
            <span>Image</span>
          </div>
          <div className="col-4">
            <span>Information</span>
          </div>
          <div className="col-3">
            <span>Amount</span>
          </div>
          <div className="col-2">
            <span>Price</span>
          </div>
        </div>
        <div>
          {this.props.counters.map(counter => (
            <CartContentSingle
              key={counter.productId} //using in inner React, cant access through component
              counter={counter}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
            >
              <h5 className="m-2">product : {counter.name}</h5>
            </CartContentSingle>
          ))}
        </div>
        <div
          className="cartActionSection text-center"
          style={{ marginBottom: 50, marginRight: 50, marginTop: 30 }}
        >
          <div>
            <span style={{ fontSize: 30, fontWeight: "bolder" }}>
              Total: AU${" "}
            </span>
            <span style={{ fontSize: 30, fontWeight: "bolder" }}>
              {this.calculateAllPrice()}
            </span>
          </div>
          <div>
            <button
              onClick={this.props.onAllDelete}
              className="btn btn-secondary m-1 btn-sm"
            >
              remove all
            </button>
            <button
              onClick={this.props.onReset}
              className="btn btn-secondary m-1 btn-sm"
            >
              reset
            </button>
            <button className="btn btn-secondary m-1 btn-sm">pay all</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartAssemble;
