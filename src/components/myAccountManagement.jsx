import React, { Component } from "react";
import { signOut, getUserInfo } from "../firebase";

class MyAccountManagement extends Component {
  state = {
    account: {
      email: "",
      password: ""
    }
  };

  componentDidMount() {
    const sss = getUserInfo();
    console.log(sss);
  }

  async handleLogout() {
    const infoFromBack = await signOut();

    if (infoFromBack instanceof Error) {
      window.alert("Error happens, log out fail");
    } else {
      sessionStorage.setItem("loginEmail", "");
      window.open("/", "_self");
    }
  }

  render() {
    return (
      <div>
        <button className="btn btn-secondary" onClick={this.handleLogout}>
          Log out
        </button>
      </div>
    );
  }
}

export default MyAccountManagement;
