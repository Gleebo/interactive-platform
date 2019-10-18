import React, { Component } from "react";
import { async } from "q";
import { getFooterProduct, setfooterProduct } from "../firebase";

class AdminForHomeManagement extends Component {
  state = {
    everything: {
      footerId: "",
      welcomeText: "",
      PromotedProducts: []
    }
  };

  async componentWillMount() {
    //waiting intializing data in state
  }

  handleChange = e => {
    const everything = { ...this.state.everything };
    everything[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ everything });
  };

  updateFooter = async () => {
    console.log(this.state.everything.footerId);
    console.log(this.state.everything.welcomeText);

    //const h = await setfooterProduct(this.state.everything.footerId);
    //console.log(h);
  };

  updateWelcome = async () => {};

  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: 50 }}>
          <h3>Footer Product </h3>
          <div style={{ marginBottom: 20 }}>
            <span>input product id to set the footer product in home page</span>
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
              input welcome text id to set the welcome section text in home page
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
      </div>
    );
  }
}

export default AdminForHomeManagement;
