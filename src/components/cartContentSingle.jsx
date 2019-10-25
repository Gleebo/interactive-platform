import React, { Component } from "react";

class CartContentSingle extends Component {
  styles = {
    fontSize: 15,
    marginLeft: "8px"
  };
  render() {
    return (
      <div className="row text-center cartSingle ">
        <div className="col-3">
          <img
            style={{ height: 200, width: 200 }}
            src={this.props.counter.imgUrl}
            alt="..."
          ></img>
        </div>
        <div className="col-4 align-self-center">{this.props.children}</div>
        <div className="col-2 align-self-center">
          <p>AU$: {this.props.counter.price * this.returnZero()}</p>
        </div>
        {/* {this.state.tags.length === 0 && "pls input some tags"}
        {this.renderTags()}    */}
        <div className="col-3 align-self-center">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-outline-secondary btn-sm"
          >
            +
          </button>
          <span style={this.styles}>{this.returnZero()}</span>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-outline-secondary m-2 btn-sm"
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-outline-secondary btn-sm m-2"
          >
            remove
          </button>
        </div>
        <hr style={{ borderTop: "1px solid rgb(216, 213, 213)" }} />
      </div>
    );
  }
  getBadgeClass() {
    let BG = "badge m-3 badge-";
    BG += this.props.counter.quantity === 0 ? "warning" : "primary";
    return BG;
  }

  returnZero() {
    const count = this.props.counter.quantity;
    return count;
  }
}

export default CartContentSingle;
