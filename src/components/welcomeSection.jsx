import React, { Component } from "react";
import { getWelcomeText } from "../firebase";
import { async } from "q";

class WelcomeSection extends Component {
  state = {
    text: {
      thing: ""
    }
  };

  async componentDidMount() {
    const text = { ...this.state.text };
    const s = await getWelcomeText();
    text.thing = s;
    this.setState({ text });
  }

  render() {
    return (
      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-5">Learn with KidIslands</h1>
            <hr className="my-5"></hr>
          </div>

          <div className="col-12 ">
            <p className="lead">{this.state.text.thing}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeSection;
