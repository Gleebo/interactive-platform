import React, { Component } from "react";
import { getOrders, setOrderStatus } from "../firebase";
import OneOrderManagement from "./oneOrderManagement.jsx";

class OrderManagement extends Component {
  state = {
    orders: {
      processingArray: [],
      shippingArray: [],
      doneArray: []
    }
  };

  async componentDidMount() {
    const orders = { ...this.state.orders };

    const k = await getOrders.next(20);
    const p = k.filter(c => c.status === "processing");
    orders.processingArray = p;

    const s = k.filter(c => c.status === "shipping");
    orders.shippingArray = s;

    const d = k.filter(c => c.status === "done");
    orders.doneArray = d;

    this.setState({ orders });
    console.log(this.state.orders.doneArray);
  }

  toShipping = async order => {
    await setOrderStatus(order.id, "shipping");
    const processingArray = [...this.state.orders.processingArray];
    const index = processingArray.indexOf(order);
    processingArray[index].status = "shipping";
    this.setState({ processingArray });
  };

  toDone = async order => {
    await setOrderStatus(order.id, "done");
    const shippingArray = [...this.state.orders.shippingArray];
    const index = shippingArray.indexOf(order);
    shippingArray[index].status = "done";
    this.setState({ shippingArray });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h3>Processing Orders: </h3>
          {this.state.orders.processingArray.map(order => (
            <OneOrderManagement
              order={order}
              onToShipping={this.toShipping}
              onToDone={this.toDone}
            />
          ))}
        </div>
        <div className="container" style={{ marginTop: 50 }}>
          <h3>Shipping Orders: </h3>
          {this.state.orders.shippingArray.map(order => (
            <OneOrderManagement order={order} onToDone={this.toDone} />
          ))}
        </div>
        <div className="container" style={{ marginTop: 50 }}>
          <h3>Done Orders: </h3>
          {this.state.orders.doneArray.map(order => (
            <OneOrderManagement order={order} />
          ))}
        </div>
      </div>
    );
  }
}

export default OrderManagement;
