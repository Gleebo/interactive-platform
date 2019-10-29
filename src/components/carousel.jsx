import React, { Component } from "react";
import { getPromotedProducts } from "../firebase";
import { Link } from "react-router-dom";

class Carousel extends Component {
  state = {
    products: {
      one: {},
      two: {},
      three: {}
    }
  };

  async componentDidMount() {
    const products = { ...this.state.products };
    const arr = await getPromotedProducts();
    products.one = arr[0];
    products.two = arr[1];
    products.three = arr[2];

    this.setState({ products });
  }

  render() {
    const product = this.state.products.one;

    return (
      <div
        id="slides"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" className="active"></li>
          <li data-target="#slides" data-slide-to="1"></li>
          <li data-target="#slides" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner text-center">
          <div className="carousel-item active">
            <img
              src={this.state.products.one.imgUrl}
              style={{ height: 470, width: 90 + "%" }}
              alt="..."
            ></img>
            <div className="carousel-caption">
              <h1 className="display-2">{this.state.products.one.name}</h1>
              <h3>{this.state.products.one.description}</h3>
              <Link
                to={{
                  pathname: "/productDetailPage",
                  state: { product } //how to attach data using Link to jump to new page
                }}
              >
                <button type="button" className="btn btn-outline-light btn-lg">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={this.state.products.two.imgUrl}
              style={{ height: 470, width: 90 + "%" }}
              alt="..."
            ></img>
            <div className="carousel-caption">
              <h1 className="display-2">{this.state.products.two.name}</h1>
              <h3>{this.state.products.two.description}</h3>
              <button type="button" className="btn btn-outline-light btn-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={this.state.products.three.imgUrl}
              style={{ height: 470, width: 90 + "%" }}
              alt="..."
            ></img>
            <div className="carousel-caption">
              <h1 className="display-2">{this.state.products.three.name}</h1>
              <h3>{this.state.products.three.description}</h3>
              <button type="button" className="btn btn-outline-light btn-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
