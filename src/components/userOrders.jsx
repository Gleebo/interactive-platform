import React, { Component } from "react";
import { getOrdersByUser } from "../firebase";
import { async } from "q";

class UserOrders extends Component {
  state = {};

  async componentDidMount() {
    const hh = await getOrdersByUser();
    console.log(hh.message);
  }

  render() {
    return <div></div>;
  }
}

export default UserOrders;
