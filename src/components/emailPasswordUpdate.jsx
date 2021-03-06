import React, { Component } from "react";
import { updateUserEmail, updateUserPassword } from "../firebase";
import firebase from "firebase/app";
import { ToastContainer, toast } from "react-toastify";

class EmailPasswordUpdate extends Component {
  state = {
    account: {
      email: "",
      password: ""
    }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const account = { ...this.state.account };
        account.email = user.email;

        this.setState({ account });
      } else {
        console.log("not log in");
      }
    });
  }

  handleUpdate = async e => {
    e.preventDefault();
    let num = 0;

    if (this.state.account.email !== "") {
      await updateUserEmail(this.state.account.email);
      num++;
    }
    if (this.state.account.password !== "") {
      if (this.state.account.password.length >= 6) {
        await updateUserPassword(this.state.account.password);
        num++;
      } else {
        toast.error("password should be longer than 6 ");
        num = 0;
      }
    }
    if (num !== 0) {
      toast.success("update successfully");
    }
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div style={{ marginTop: 100 }} className="d-flex justify-content-center">
        <ToastContainer />
        <div style={{ width: 30 + "%" }}>
          <span style={{ color: "red" }}>
            Notice: you are about to change some confidential information
          </span>
          <form onSubmit={this.handleUpdate}>
            <div className="form-group">
              <label htmlFor="theNewEamil">New Email:</label>
              <input
                placeholder="leave empty then wont be updated"
                value={this.state.account.email}
                name="email"
                onChange={this.handleChange}
                id="theNewEamil"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="theNewPassword">New Password:</label>
              <input
                placeholder="leave empty then wont be updated"
                value={this.state.account.password}
                name="password"
                onChange={this.handleChange}
                id="theNewPassword"
                type="password"
                className="form-control"
              />
            </div>

            <button className="btn btn-primary">Confirm Update</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EmailPasswordUpdate;
