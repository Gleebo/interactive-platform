import React, { Component } from "react";

class SignIn extends Component {
  state = {
    account: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault(); // prevent pre-default function of <form> element
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div style={{ marginTop: 100, width: 400 }}>
          <div className="text-center" style={{ marginBottom: 14 }}>
            <span className="signInLogo">KidIslands</span>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="theUsername">Username</label>
              <input id="theUsername" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="thePassword">Password</label>
              <input id="thePassword" type="text" className="form-control" />
            </div>
            <button className="btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
