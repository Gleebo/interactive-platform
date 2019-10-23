import React, { Component } from "react";
import firebase from "firebase/app";
import { getCart, createOrder } from "../firebase";
import { async } from "q";

class FinalPayInterface extends Component {
  state = {
    productsForPay: [],
    method: {
      payment: "Paypal",
      shipping: "shipping method 1"
    }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const productsInCart = await getCart();
        if (productsInCart) {
          this.setState({ productsForPay: productsInCart });
        }
      } else {
        console.log("log out");
      }
    });
  }

  calculateAllPrice = () => {
    const counters = this.state.productsForPay;
    let money = 0;
    counters.map(counter => (money += counter.quantity * counter.price));

    return money;
  };

  canael = () => {
    window.open("/", "_self");
  };

  handleChange = e => {
    const method = { ...this.state.method };
    method[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ method });
  };

  handlePay = async () => {
    createOrder(this.state);
    window.alert("payment is finished, we will return to home page");
    window.open("/", "_self");
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div
          className="text-center "
          style={{ marginTop: 100, width: 35 + "%" }}
        >
          <span style={{ fontSize: 25, fontWeight: "bold" }}>
            Total Price: AU$ {this.calculateAllPrice()}
          </span>
          <div className="text-center">
            <form>
              <div class="form-group">
                <label for="paymentMethod" style={{ float: "left" }}>
                  Payment method select
                </label>
                <select
                  name="payment"
                  onChange={this.handleChange}
                  class="form-control"
                  id="paymentMethod"
                >
                  <option>Paypal</option>
                  <option>Alipay</option>
                  <option>Applepay</option>
                  <option>Card</option>
                </select>
              </div>
              <div class="form-group">
                <label for="shippingMethod" style={{ float: "left" }}>
                  Shipping method selection
                </label>
                <select
                  name="shipping"
                  onChange={this.handleChange}
                  class="form-control"
                  id="shippingMethod"
                >
                  <option>Standard Shipping</option>
                  <option>Expedited Shipping</option>
                  <option>Overnight Shipping</option>
                  {/* <option>shipping method 4</option> */}
                </select>
              </div>
            </form>
          </div>
          <button
            className="btn btn-secondary"
            style={{ float: "left", marginLeft: 80 }}
            onClick={() => this.canael()}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            style={{ float: "right", marginRight: 80 }}
            onClick={() => this.handlePay()}
          >
            Pay Now
          </button>
        </div>
      </div>
    );
  }
}

export default FinalPayInterface;
