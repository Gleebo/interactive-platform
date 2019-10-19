import React, { Component } from "react";
import { async } from "q";
import {
  getFooterProduct,
  setfooterProduct,
  setWelcomeText,
  getWelcomeText,
  setPromotedProducts,
  getPromotedProducts
} from "../firebase";

class AdminForHomeManagement extends Component {
  state = {
    everything: {
      footerId: "",
      welcomeText: "",
      PromotedProductsIdOne: "",
      PromotedProductsIdTwo: "",
      PromotedProductsIdThree: ""
    }
  };

  async componentWillMount() {
    const everything = { ...this.state.everything };
    const h = await getFooterProduct();
    everything.footerId = h.id;
    const j = await getWelcomeText();
    everything.welcomeText = j;
    const p = await getPromotedProducts();

    everything.PromotedProductsIdOne = p[0].id;
    everything.PromotedProductsIdTwo = p[1].id;
    everything.PromotedProductsIdThree = p[2].id;

    this.setState({ everything });
  }

  handleChange = e => {
    const everything = { ...this.state.everything };
    everything[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ everything });
  };

  updateFooter = async () => {
    const h = await setfooterProduct(this.state.everything.footerId);
    if (h) {
      window.alert("update successfully");
    }
  };

  updateWelcome = async () => {
    const i = await setWelcomeText(this.state.everything.welcomeText);
    if (i) {
      window.alert("update successfully");
    }
  };

  updateCarousel = async () => {
    let products = [
      this.state.everything.PromotedProductsIdOne,
      this.state.everything.PromotedProductsIdTwo,
      this.state.everything.PromotedProductsIdThree
    ];

    const result = await setPromotedProducts(products);
    if (result) {
      window.alert("update successfully");
    }
  };

  render() {
    return (
      <div style={{ marginBottom: 50 }}>
        <div className="container" style={{ marginTop: 50 }}>
          <h3>Footer Product </h3>
          <div style={{ marginBottom: 20 }}>
            <span>Input product id to set the footer product in home page</span>
          </div>
          <input
            style={{ width: 300, marginRight: 30 }}
            value={this.state.everything.footerId}
            name="footerId"
            onChange={this.handleChange}
            type="text"
          ></input>

          <button
            className="btn btn-primary"
            onClick={() => this.updateFooter()}
          >
            Update
          </button>
        </div>
        <div className="container" style={{ marginTop: 50 }}>
          <h3>Welcome Section Text </h3>
          <div style={{ marginBottom: 20 }}>
            <span>
              Input welcome text id to set the welcome section text in home page
            </span>
          </div>
          <textarea
            style={{ height: 160, marginRight: 30, width: 300 }}
            value={this.state.everything.welcomeText}
            name="welcomeText"
            onChange={this.handleChange}
            type="text"
          ></textarea>
          <button
            className="btn btn-primary"
            onClick={() => this.updateWelcome()}
          >
            Update
          </button>
        </div>

        <div className="container" style={{ marginTop: 50 }}>
          <h3>Products For Carousel </h3>
          <div style={{ marginBottom: 20 }}>
            <span>
              Input three product ids to set the Carousel in home page
            </span>
          </div>

          <div style={{ marginBottom: 10 }}>
            <input
              style={{ width: 300, marginRight: 30 }}
              value={this.state.everything.PromotedProductsIdOne}
              name="PromotedProductsIdOne"
              onChange={this.handleChange}
              type="text"
            ></input>
          </div>

          <div style={{ marginBottom: 10 }}>
            <input
              style={{ width: 300, marginRight: 30 }}
              value={this.state.everything.PromotedProductsIdTwo}
              name="PromotedProductsIdTwo"
              onChange={this.handleChange}
              type="text"
            ></input>
          </div>

          <input
            style={{ width: 300, marginRight: 30 }}
            value={this.state.everything.PromotedProductsIdThree}
            name="PromotedProductsIdThree"
            onChange={this.handleChange}
            type="text"
          ></input>

          <button
            className="btn btn-primary"
            onClick={() => this.updateCarousel()}
          >
            Update
          </button>
        </div>
      </div>
    );
  }
}

export default AdminForHomeManagement;
