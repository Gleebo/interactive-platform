import React, { Component } from "react";
import { createNewUser } from "../firebase";
import { ToastContainer, toast } from "react-toastify";

class SignUp extends Component {
  state = {
    account: {
      username: "",
      password: "",
      confirmPassword: ""
    }
  };

  handleSubmit = async e => {
    e.preventDefault(); // prevent pre-default function of <form> element

    if (
      this.state.account.username === "" ||
      this.state.account.password === "" ||
      this.state.account.confirmPassword === ""
    ) {
      toast.error("sign up information is not complete");
    } else if (
      this.state.account.password !== this.state.account.confirmPassword
    ) {
      toast.error("password confirmation error");
    } else if (this.state.account.password.length < 6) {
      toast.error("the password should be longer than 6 ");
    } else {
      const infoFromBack = await createNewUser(
        this.state.account.username,
        this.state.account.password
      );
      if (infoFromBack instanceof Error) {
        toast.error(infoFromBack.message);
      } else {
        window.open("/", "_self");
      }
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
        <ToastContainer />
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
                id="theUsername"
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="thePassword">Password</label>
              <input
                value={account.password}
                name="password"
                id="thePassword"
                onChange={this.handleChange}
                type="password"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="theConfirmPassword">Confirm Password</label>
              <input
                value={account.confirmPassword}
                name="confirmPassword"
                id="theConfirmPassword"
                onChange={this.handleChange}
                type="password"
                className="form-control"
              />
            </div>
            <button
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "20px" }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
