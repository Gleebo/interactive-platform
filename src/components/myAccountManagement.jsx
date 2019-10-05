import React, { Component } from "react";
class MyAccountManagement extends Component {
  state = {
    account: {
      email: "",
      password: ""
    }
  };

  render() {
    return (
      <div>
        <button className="btn btn-secondary">Log out</button>
      </div>
    );
  }
}

export default MyAccountManagement;
