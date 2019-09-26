import React, { Component } from "react";
import OneProduct from "./oneProduct.jsx";
import SearchBar from "./searchBar.jsx";
import { getAllProducts } from "./firebase";

class AllProducts extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const newArray = getAllProducts(); //getAllProducts() gives back a Promise;
    const result = await newArray; // use await in async function to convert Promise to real obejct(array here)
    this.setState({ products: result });
  }

  render() {
    return (
      <div className="text-center">
        <SearchBar />
        <div className="row justify-content-center">
          {this.state.products.map(product => OneProduct(product))}
        </div>
      </div>
    );
  }
}

export default AllProducts;
