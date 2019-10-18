import React, { Component } from "react";
import { getOrdersByUser } from "../firebase";
import { async } from "q";
import firebase from "firebase/app";
import OneOrder from "./oneOrder.jsx";

class UserOrders extends Component {
  state = {
    user: {
      order: []
    }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const hh = await getOrdersByUser();

        const user = { ...this.state.user };
        user.order = hh;
        this.setState({ user });
        console.log(this.state.user.order);
      } else {
        console.log("not log in");
      }
    });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: 60 }}>
        {this.state.user.order.map(order => OneOrder(order))}
      </div>
    );
  }
}

export default UserOrders;
