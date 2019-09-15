import React, { Component } from "react";
import CartAssemble from "./cartAssemble.jsx";

class CartInterface extends Component {
  state = {
    counters: [
      { id: 1, value: 0, name: "P1_name" },
      { id: 2, value: 0, name: "P2_name" },
      { id: 3, value: 0, name: "P3_name" },
      { id: 4, value: 0, name: "p4_name" }
    ]
  };

  handleDelete = product_id => {
    const counters = this.state.counters.filter(c => c.id !== product_id);
    this.setState({ counters: counters }); // key : value
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // confused
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // confused
    if (counters[index].value > 0) counters[index].value--;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleAllDelete = () => {
    const counters = [];
    this.setState({ counters: counters });
  };

  render() {
    return (
      <main className="container">
        <CartAssemble
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onAllDelete={this.handleAllDelete}
        />
      </main>
    );
  }
}

export default CartInterface;
