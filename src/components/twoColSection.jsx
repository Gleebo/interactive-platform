import React, { Component } from "react";
import { async } from "q";
import axios from "axios";
import { Link } from "react-router-dom";

class TwoColSection extends Component {
  state = {
    product: {}
  };

  async componentWillMount() {
    const { data: homePageProduct } = await axios.get(
      "https://us-central1-kids-islands.cloudfunctions.net/getProductById?id=vrjIOa1Exk6XyxIr3gnq"
    );
    homePageProduct.id = "vrjIOa1Exk6XyxIr3gnq";
    console.log(homePageProduct);

    this.setState({ product: homePageProduct });
  }

  render() {
    const product = this.state.product;

    return (
      <main className="container">
        <div className="container-fluid padding">
          <div className="row padiing ">
            <div className="col-md-12 col-lg-6 ">
              <img
                className="img-fluid"
                src={this.state.product.imgUrl}
                alt="..."
                style={{ width: 360, height: 360 }}
              />
            </div>

            <div className="col-md-12 col-lg-6">
              <h2>{this.state.product.brand}</h2>
              <p>{this.state.product.description}</p>

              <Link
                className="btn btn-primary"
                to={{
                  pathname: "/productDetailPage",
                  state: { product } //how to attach data using Link to jump to new page
                }}
              >
                Buy now
              </Link>

              <a
                href="/allProducts"
                className="btn btn-secondary"
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
