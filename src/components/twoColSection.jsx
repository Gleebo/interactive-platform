import React, { Component } from "react";
import { async } from "q";
import axios from "axios";
import { Link } from "react-router-dom";
import { getFooterProduct } from "../firebase";

class TwoColSection extends Component {
  state = {
    product: {}
  };

  async componentWillMount() {
    const u = await getFooterProduct();
    this.setState({ product: u });
  }

  render() {
    const product = this.state.product;

    return (
      <main className="container">
        <div className="container-fluid padding">
          <div className="row padiing ">
            <div className="col-md-12 col-lg-6 ">
              <img
                className="img-fluid float-right"
                src={this.state.product.imgUrl}
                alt="..."
                style={{ width: 300, height: 300, marginRight: 60 }}
              />
            </div>

            <div className="col-md-12 col-lg-6">
              <h2>{this.state.product.brand}</h2>
              <p className="OneProduct">{this.state.product.description}</p>

              <Link
                className="btn btn-outline-primary"
                to={{
                  pathname: "/productDetailPage",
                  state: { product } //how to attach data using Link to jump to new page
                }}
              >
                Buy now
              </Link>

              <a
                href="/allProducts"
                className="btn btn-outline-info"
                style={{ marginLeft: 25 }}
              >
                More products
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default TwoColSection;
