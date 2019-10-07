import React, { Component } from "react";
import { signOut } from "../firebase";
import firebase from "firebase/app";

class MyAccountManagement extends Component {
  state = {
    account: {
      email: "",
      password: ""
    }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const account = { ...this.state.account };
        account.email = user.uid;
        this.setState({ account: account });
      } else {
        const account = { ...this.state.account };
        account.email = "not log in";
        this.setState({ account: account });
      }
    });
  }

  async handleLogout() {
    const infoFromBack = await signOut();

    if (infoFromBack instanceof Error) {
      window.alert("Error happens, log out fail");
    } else {
      window.open("/", "_self");
    }
  }

  render() {
    return (
      <div>
        <span>{this.state.account.email}</span>
        <button className="btn btn-secondary" onClick={this.handleLogout}>
          Log out
        </button>
      </div>
    );
  }
}

export default MyAccountManagement;
