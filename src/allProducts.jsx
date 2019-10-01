import React, { Component } from "react";
import OneProduct from "./oneProduct.jsx";
import SearchBar from "./searchBar.jsx";
import Pagination from "./pagination.jsx";
import { getAllProducts } from "./firebase";
import { paginate } from "./utils/paginate";

class AllProducts extends Component {
  state = {
    products: [],
    thePageSize: 12,
    currentPage: 1
  };

  async componentDidMount() {
    const newArray = getAllProducts(); //getAllProducts() gives back a Promise;
    const result = await newArray; // use await in async function to convert Promise to real obejct(array here)
    this.setState({ products: result });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const onePageProducts = paginate(
      this.state.products,
      this.state.currentPage,
      this.state.thePageSize
    );

    return (
      <div className=" text-center">
        <SearchBar />
        <div className="row justify-content-center">
          {onePageProducts.map(product => OneProduct(product))}
        </div>

        <div style={{ marginTop: 30, marginBottom: 60 }}>
          <Pagination
            productsCount={this.state.products.length}
            pageSize={this.state.thePageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default AllProducts;
