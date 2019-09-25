import React, { Component } from "react";
import OneProduct from "./oneProduct.jsx";
import axios from "axios";

class ProductList extends Component {
  state = {
    products: []
  };

  /* Const homePageProductsUrl = "https://us-central1-kids-islands.cloudfunctions.net/getProductsList"; */
  componentDidMount() {
    const promise = axios.get(
      "https://us-central1-kids-islands.cloudfunctions.net/getProductsList"
    );
    console.log(promise);
  }

  render() {
    return (
      <main className="container">
        <div className="row justify-content-center">
          {this.state.products.map(product => OneProduct(product))}
        </div>
      </main>
    );
  }
}

export default ProductList;
