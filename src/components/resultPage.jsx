import React, { Component } from "react";
import SearchBar from "./searchBar.jsx";
import axios from "axios";
import OneProduct from "./oneProduct.jsx";
import NotFound from "./notFound.jsx";
import OneProductForManagement from "./oneProductForManagement.jsx";

class ResultPage extends Component {
  state = {
    selectedProducts: [],
    resultProducts: []
  };

  async componentDidUpdate() {
    const keyword = this.props.location.state.keyword;
    const { data: resultProducts } = await axios.get(
      "https://us-central1-kids-islands.cloudfunctions.net/searchProducts?keyword=" +
        keyword +
        "&id=none&category=all"
    );
    if (this.state.resultProducts.length !== resultProducts.length)
      this.setState({ resultProducts });
  }

  async componentDidMount() {
    const keyword = this.props.location.state.keyword;
    const { data: resultProducts } = await axios.get(
      "https://us-central1-kids-islands.cloudfunctions.net/searchProducts?keyword=" +
        keyword +
        "&id=none&category=all"
    );
    this.setState({ resultProducts });
  }

  handleCheckTrue = prodcut => {
    const newSelectedProducts = [...this.state.selectedProducts];
    newSelectedProducts.push({ id: prodcut.id });
    this.setState({ selectedProducts: newSelectedProducts });
  };

  handleCheckFalse = product_id => {
    const newSelectedProducts = this.state.selectedProducts.filter(
      c => c.id !== product_id
    );
    this.setState({ selectedProducts: newSelectedProducts });
  };

  deleteClick = () => {
    // wait for backend connection.
    console.log(this.state.selectedProducts);
  };

  render() {
    if (this.state.resultProducts.length >= 1) {
      return (
        <div>
          <SearchBar />
          <div className="row">
            <div style={{ marginLeft: 40 }}>
              <span>
                This is the result based on keyword:{" "}
                <span className="badge badge-pill badge-info">
                  {this.props.location.state.keyword}{" "}
                </span>
              </span>
            </div>
            <div
              style={{
                marginLeft: 590
              }}
            >
              <button
                type="button"
                className={
                  sessionStorage.getItem("adminLogin")
                    ? "btn btn-link"
                    : "btn btn-link invisible"
                }
                style={{ color: "red" }}
                onClick={this.deleteClick}
              >
                delete selected
              </button>
            </div>
          </div>

          <div className="row justify-content-center">
            {this.state.resultProducts.map(oneResultProduct =>
              sessionStorage.getItem("adminLogin") ? (
                <OneProductForManagement
                  onCheckTrue={this.handleCheckTrue}
                  onCheckFalse={this.handleCheckFalse}
                  product={oneResultProduct}
                />
              ) : (
                OneProduct(oneResultProduct)
              )
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <SearchBar />
          <div style={{ marginLeft: 40 }}>
            <span>
              This is the result based on keyword:{" "}
              <span className="badge badge-pill badge-info">
                {this.props.location.state.keyword}{" "}
              </span>
            </span>
          </div>
          <NotFound />
        </div>
      );
    }
  }
}

export default ResultPage;
