import React, { Component } from "react";
import CartContentSingle from "./cartContentSingle.jsx";

class CartAssemble extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          {this.props.counters.map(counter => (
            <CartContentSingle
              key={counter.id} //using in inner React, cant access through component
              counter={counter}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
            >
              <h5 className="m-2">
                product {counter.id} : {counter.name}
              </h5>
            </CartContentSingle>
          ))}
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
    );
  }
}

export default CartAssemble;
