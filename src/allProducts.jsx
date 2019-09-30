import React, { Component } from "react";
import OneProduct from "./oneProduct.jsx";
import SearchBar from "./searchBar.jsx";
import Pagination from "./pagination.jsx";
import { getAllProducts } from "./firebase";

class AllProducts extends Component {
  state = {
    products: [],
    thePageSize: 10
  };

  async componentDidMount() {
    const newArray = getAllProducts(); //getAllProducts() gives back a Promise;
    const result = await newArray; // use await in async function to convert Promise to real obejct(array here)
    this.setState({ products: result });
  }

  handlePageChange = page => {};

  render() {
    return (
      <div className="text-center">
        <SearchBar />
        <div className="row justify-content-center">
          {this.state.products.map(product => OneProduct(product))}
        </div>
        <Pagination
          productsCount={this.state.products.length}
          pageSize={this.state.thePageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default AllProducts;
