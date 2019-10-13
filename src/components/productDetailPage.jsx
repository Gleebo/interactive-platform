import React, { Component } from "react";
import { getCart, updateCart } from "../firebase";
import firebase from "firebase/app";

class ProductDetailPage extends Component {
  state = {
    amount: { number: 0 },
    products: []
  };

  changeAmount = e => {
    const amount = { ...this.state.amount };
    amount.number = e.currentTarget.value;
    if (amount.number >= 0) this.setState({ amount });
  };

  increaseAmount = () => {
    const amount = { ...this.state.amount };
    amount.number++;
    this.setState({ amount });
  };

  decreaseAmount = () => {
    const amount = { ...this.state.amount };
    amount.number--;
    if (amount.number >= 0) this.setState({ amount });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const newList = await getCart();
        console.log(newList);
        let finalArray = [];
        newList.map(item =>
          finalArray.push({ id: item.id, quantity: item.quantity })
        );
        this.setState({ products: finalArray });
      } else {
        console.log("not log in");
      }
    });
  }

  handleAddToCart = async (id, amount) => {
    if (amount === 0) {
      window.alert("product amount is now 0");
    } else {
      let newCartList = [...this.state.products];

      newCartList.push({ id: id, quantity: amount });
      console.log(newCartList);
      const s = await updateCart(newCartList);
      console.log(s);
      this.setState({ products: newCartList });
      window.alert("add in the cart successfully. Find detail in my cart");
    }
  };

  render() {
    return (
      <div className="row" style={{ marginTop: 50, marginBottom: 100 }}>
        <div className="col-md-12 col-lg-6 text-center align-self-center">
          <img
            src={this.props.location.state.product.imgUrl}
            alt="..."
            style={{ height: 370, width: 370 }}
          ></img>
        </div>
        <div className="col-md-12 col-lg-6 align-self-center p-d-p">
          <div style={{ width: 350 }}>
            <h4>{this.props.location.state.product.name}</h4>
          </div>
          <hr></hr>
          <h4>
            <span className="badge badge-primary">
              AU$: {this.props.location.state.product.price}
            </span>
          </h4>
          <div style={{ width: 350 }}>
            <h5>
              {" "}
              <span>Brand: {this.props.location.state.product.brand}</span>
            </h5>

            <h5>
              {" "}
              <span>
                Category: {this.props.location.state.product.category}
              </span>
            </h5>

            <span>{this.props.location.state.product.description}</span>
          </div>
          <div style={{ marginTop: 25 }}>
            <input
              value={this.state.amount.number}
              onChange={this.changeAmount}
              autoFocus
              style={{ width: 60 }}
            ></input>
            <button
              className="btn btn-outline-primary btn-sm"
              style={{ marginLeft: 15 }}
              onClick={this.increaseAmount}
            >
              +
            </button>
            <button
              className="btn btn-outline-primary btn-sm"
              style={{ marginLeft: 8 }}
              onClick={this.decreaseAmount}
            >
              -
            </button>
          </div>
          <hr></hr>
          <button
            className="btn btn-danger"
            onClick={() =>
              this.handleAddToCart(
                this.props.location.state.product.id,
                this.state.amount.number
              )
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetailPage;
