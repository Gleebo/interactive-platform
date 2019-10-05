import React, { Component } from "react";
import OneProduct from "./oneProduct.jsx";
import SearchBar from "./searchBar.jsx";
import Pagination from "./pagination.jsx";

import { paginate } from "./paginate";
import axios from "axios";

class AllProducts extends Component {
  state = {
    products: [],
    thePageSize: 12,
    currentPage: 1
  };

  async componentDidMount() {
    const { data: result } = await axios.get(
      "https://us-central1-kids-islands.cloudfunctions.net/getProducts?id=none" //use ? to query id in a link
    ); // use await in async function to convert Promise to real obejct(array here)
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
