import React, { Component } from "react";
import CartAssemble from "./cartAssemble.jsx";
import { getCart, updateCart } from "../firebase";
import firebase from "firebase/app";

class CartInterface extends Component {
  state = {
    counters: []
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const productsInCart = await getCart();
        console.log(productsInCart);
        if (productsInCart) {
          this.setState({ counters: productsInCart });
        } else {
          window.open("/notFound", "_self");
        }
      } else {
        console.log("log out");
      }
    });
  }

  handleDelete = product_id => {
    const counters = this.state.counters.filter(c => c.id !== product_id);
    this.setState({ counters: counters }); // old array : new array
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // confused
    counters[index].quantity++;
    this.setState({ counters: counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // confused
    if (counters[index].quantity > 0) counters[index].quantity--;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.quantity = 0;
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
