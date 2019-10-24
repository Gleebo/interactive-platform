import React, { Component } from "react";
import OneProduct from "./oneProduct.jsx";

import SearchBar from "./searchBar.jsx";
import Pagination from "./pagination.jsx";

import { searchProducts } from "../firebase";
import { async } from "q";

class AllProducts extends Component {
  state = {
    products: []
    // thePageSize: 12,
    // currentPage: 1
  };

  async componentDidMount() {
    /*const { data: result } = await axios.get(
      "https://us-central1-kids-islands.cloudfunctions.net/getProducts?id=none" //use ? to query id in a link
    ); // use await in async function to convert Promise to real obejct(array here)  */
    const result = await searchProducts.next({});
    this.setState({ products: result });
  }

  loadMore = async () => {
    const res = await searchProducts.next({});
    let oldArray = this.state.products;
    let newArray = oldArray.concat(res);
    this.setState({ products: newArray });
  };

  /* handlePageChange = page => {
    this.setState({ currentPage: page });
  };
*/
  render() {
    /* const onePageProducts = paginate(
      this.state.products,
      this.state.currentPage,
      this.state.thePageSize
    );    */

    return (
      <div className=" text-center container">
        <SearchBar />
        <div className="row justify-content-center">
          {this.state.products.map(product => OneProduct(product))}
        </div>

        <div>
          <div style={{ marginRight: 100 }}>
            <button
              style={{ marginBottom: 50, marginTop: 20 }}
              className="btn btn-primary float-right"
              onClick={() => this.loadMore()}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AllProducts;
