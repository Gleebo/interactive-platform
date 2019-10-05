import React, { Component } from "react";

class SignIn extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault(); // prevent pre-default function of <form> element

    if (
      this.state.account.username === "" ||
      this.state.account.password === ""
    ) {
      window.alert("sign in information is not complete");
    } else {
      window.open("/", "_self");
    }
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div className="d-flex justify-content-center">
        <div style={{ marginTop: 100, width: 400 }}>
          <div className="text-center" style={{ marginBottom: 14 }}>
            <span className="signInLogo">KidIslands</span>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="theUsername">Username</label>
              <input
                value={account.username}
                name="username"
                onChange={this.handleChange}
                id="theUsername"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="thePassword">Password</label>
              <input
                value={account.password}
                name="password"
                onChange={this.handleChange}
                id="thePassword"
                type="password"
                className="form-control"
              />
            </div>
            <button className="btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
