import React, { Component } from "react";
import SearchBar from "./searchBar.jsx";
import axios from "axios";
import OneProduct from "./oneProduct.jsx";
import NotFound from "./notFound.jsx";
import OneProductForManagement from "./oneProductForManagement.jsx";
import { deleteProducts } from "../firebase";
import { async } from "q";
import { searchProducts } from "../firebase";

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
    if (resultProducts.length >= 1) {
      if (
        this.state.resultProducts.length !== resultProducts.length ||
        this.state.resultProducts[0].id !== resultProducts[0].id
      )
        this.setState({ resultProducts });
    } else {
      this.setState({ resultProducts });
    }
    sessionStorage.setItem("kind", "");
  }

  async componentDidMount() {
    const kind = sessionStorage.getItem("kind");
    if (kind === "cate") {
      const category = sessionStorage.getItem("keyOfKind");
      console.log(category);
      const res = await searchProducts.next({
        keyword: "",
        category: category,
        subject: "",
        limit: 10
      });
      console.log(res);
    } else if (kind === "sub") {
      const subject = sessionStorage.getItem("keyOfKind");
      console.log(subject);
      const res = await searchProducts.next({ subject: subject });
      console.log(res);
    } else {
      const keyword = this.props.location.state.keyword;
      const { data: resultProducts } = await axios.get(
        "https://us-central1-kids-islands.cloudfunctions.net/searchProducts?keyword=" +
          keyword +
          "&id=none&category=all"
      );
      this.setState({ resultProducts });
    }
    sessionStorage.setItem("kind", "");
  }

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
                Delete selected
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
                {sessionStorage.getItem("kind")
                  ? "category or subject"
                  : this.props.location.state.keyword}{" "}
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
