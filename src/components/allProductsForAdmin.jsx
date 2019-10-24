import React, { Component } from "react";
import { searchProducts, deleteProducts } from "../firebase";
import { async } from "q";
import OneProductForManagement from "./oneProductForManagement";

class AllProductsForAdmin extends Component {
  state = {
    products: [],
    selectedProducts: []
  };

  async componentDidMount() {
    const products = await searchProducts.next();
    this.setState({ products });
  }

  loadMore = async () => {
    const res = await searchProducts.next();
    let oldArray = this.state.products;
    let newArray = oldArray.concat(res);
    this.setState({ products: newArray });
  };

  handleCheckTrue = prodcut => {
    const newSelectedProducts = [...this.state.selectedProducts];
    newSelectedProducts.push(prodcut.id);
    this.setState({ selectedProducts: newSelectedProducts });
  };

  handleCheckFalse = product_id => {
    const newSelectedProducts = this.state.selectedProducts.filter(
      c => c !== product_id
    );
    this.setState({ selectedProducts: newSelectedProducts });
  };

  deleteClick = async () => {
    // wait for backend connection.
    const result = await deleteProducts(this.state.selectedProducts);
    if (result) {
      window.alert("delete successfully");
      window.location.reload();
    } else if (result instanceof Error) {
      window.alert(result.message);
    }
  };

  render() {
    return (
      <div className="container">
        <div>
          <button
            type="button"
            className="btn btn-link "
            style={{ color: "red", marginLeft: 800 }}
            onClick={this.deleteClick}
          >
            Delete selected
          </button>
        </div>
        <div className="row justify-content-center">
          {this.state.products.map(product => (
            <OneProductForManagement
              onCheckTrue={this.handleCheckTrue}
              onCheckFalse={this.handleCheckFalse}
              product={product}
            />
          ))}
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

export default AllProductsForAdmin;
