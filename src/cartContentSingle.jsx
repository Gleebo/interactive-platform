import React, { Component } from "react";

class CartContentSingle extends Component {
  /* styles = {
    fontSize: 30,
    fontWeight: "bold"
  };  */
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <img src={"https://picsum.photos/15" + this.props.counter.id}></img>
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
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-warning btn-sm m-2"
        >
          remove
        </button>
        {/* {this.state.tags.length === 0 && "pls input some tags"}
        {this.renderTags()}    */}
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let BG = "badge m-3 badge-";
    BG += this.props.counter.value === 0 ? "warning" : "primary";
    return BG;
  }

  returnZero() {
    const count = this.props.counter.value;
    return count;
  }
}

export default CartContentSingle;
