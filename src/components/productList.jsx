import React, { Component } from "react";
import OneProduct from "./oneProduct.jsx";
import axios from "axios";

class ProductList extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const { data: products } = await axios.get(
      "https://us-central1-kids-islands.cloudfunctions.net/getProducts?id=1" //use ? to query id in a link
    );
    this.setState({ products });
  }
  /* async componentDidMount() {
    const newArray = getAllProducts(); //getAllProducts() gives back a Promise;
    const result = await newArray; // use await in async function to convert Promise to real obejct(array here)
    this.setState({ products: result });
  }  */

  render() {
    return (
      <main className="container">
        <div className="row justify-content-center">
          {this.state.products.map(product => OneProduct(product))}
        </div>
        <div
          className="viewAllText"
          style={{ marginTop: 10, marginRight: 100 }}
        >
          <a href="/allProducts">View all ></a>
        </div>
      </main>
    );
  }
}

export default ProductList;
