import React, { Component } from "react";
import SearchBar from "./searchBar.jsx";
import axios from "axios";
import OneProduct from "./oneProduct.jsx";
import NotFound from "./notFound.jsx";

class ResultPage extends Component {
  state = {
    resultProducts: []
  };

  async componentDidUpdate() {
    const keyword = this.props.location.state.keyword;
    const { data: resultProducts } = await axios.get(
      "https://us-central1-kids-islands.cloudfunctions.net/searchProducts?keyword=" +
        keyword +
        "&id=none&category=all"
    );
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

  render() {
    if (this.state.resultProducts.length >= 1) {
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

          <div className="row justify-content-center">
            {this.state.resultProducts.map(oneResultProduct =>
              OneProduct(oneResultProduct)
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
