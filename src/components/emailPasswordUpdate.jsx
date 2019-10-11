import React, { Component } from "react";
import { updateUserEmail, updateUserPassword } from "../firebase";
import firebase from "firebase/app";

class EmailPasswordUpdate extends Component {
  state = {
    account: {
      email: "",
      password: ""
    }
  };
  render() {
    return <div></div>;
  }
}

export default EmailPasswordUpdate;
