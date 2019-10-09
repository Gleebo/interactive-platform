import React, { Component } from "react";
import CartAssemble from "./cartAssemble.jsx";
import { getCart, updateCart } from "../firebase";
import firebase from "firebase/app";
import { async } from "q";

class CartInterface extends Component {
  state = {
    counters: [
      {
        produntId: 1,
        productQuantity: 0,
        productName: "P1_name",
        productPrice: 30,
        productImage: "https://picsum.photos/200"
      },
      {
        produntId: 2,
        productQuantity: 0,
        productName: "P2_name",
        productPrice: 20,
        productImage: "https://picsum.photos/200"
      },
      {
        produntId: 3,
        productQuantity: 0,
        productName: "P3_name",
        productPrice: 10,
        productImage: "https://picsum.photos/200"
      },
      {
        produntId: 4,
        productQuantity: 0,
        productName: "p4_name",
        productPrice: 5,
        productImage: "https://picsum.photos/200"
      }
    ]
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const productsInCart = await getCart();

        if (productsInCart) {
          console.log(productsInCart);
          // this.setState({ counters: productsInCart });
        } else {
          window.open("/notFound", "_self");
        }
      } else {
        console.log("log out");
      }
    });
  }

  handleDelete = product_id => {
    const counters = this.state.counters.filter(
      c => c.productId !== product_id
    );
    this.setState({ counters: counters }); // old array : new array
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // confused
    counters[index].productQuantity++;
    this.setState({ counters: counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // confused
    if (counters[index].productQuantity > 0) counters[index].productQuantity--;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.productQuantity = 0;
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
