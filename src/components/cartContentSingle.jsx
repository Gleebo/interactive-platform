import React, { Component } from "react";

class CartContentSingle extends Component {
  styles = {
    fontSize: 25,
    fontWeight: "bold"
  };
  render() {
    return (
      <div className="row text-center cartSingle ">
        <hr></hr>
        <div className="col-3">
          <img
            style={{ height: 200, width: 200 }}
            src={this.props.counter.imgUrl}
            alt="..."
          ></img>
        </div>
        <div className="col-4 align-self-center">{this.props.children}</div>
        <div className="col-3 align-self-center">
          <span style={this.styles} className={this.getBadgeClass()}>
            {this.returnZero()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary m-2 btn-sm"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.productId)}
            className="btn btn-warning btn-sm m-2"
          >
            remove
          </button>
        </div>
        <div className="col-2 align-self-center">
          <span style={this.styles}>AU$: </span>
          <span style={this.styles}>
            {this.props.counter.price * this.returnZero()}
          </span>
        </div>
        {/* {this.state.tags.length === 0 && "pls input some tags"}
        {this.renderTags()}    */}
      </div>
    );
  }
  getBadgeClass() {
    let BG = "badge m-3 badge-";
    BG += this.props.counter.qunatity === 0 ? "warning" : "primary";
    return BG;
  }

  returnZero() {
    const count = this.props.counter.qunatity;
    return count;
  }
}

export default CartContentSingle;
