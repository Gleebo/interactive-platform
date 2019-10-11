import React, { Component } from "react";
import { signOut, updateUser, getUserInfo } from "../firebase";
import firebase from "firebase/app";

class MyAccountManagement extends Component {
  state = {
    account: {
      schoolName: "",
      phoneNumber: "",
      address: ""
    }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const account = { ...this.state.account };

        const userInfo = await getUserInfo();

        account.schoolName = userInfo.schoolName;
        account.phoneNumber = userInfo.phoneNumber;
        account.address = userInfo.address;
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

  handleUpdate = async e => {
    e.preventDefault();

    updateUser(this.state.account);

    window.alert("update successfully");
    window.open("/", "_self");
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div style={{ marginTop: 100, width: 400 }}>
            <div className="text-center" style={{ marginBottom: 14 }}>
              <span className="signInLogo">KidIslands</span>
            </div>
            <form onSubmit={this.handleUpdate}>
              <div className="form-group">
                <label htmlFor="theSchoolName">School Name</label>
                <input
                  value={this.state.account.schoolName}
                  name="schoolName"
                  onChange={this.handleChange}
                  id="theSchoolName"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="thePhoneNumber">Phone Number</label>
                <input
                  value={this.state.account.phoneNumber}
                  name="phoneNumber"
                  onChange={this.handleChange}
                  id="thePhoneNumber"
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="theAddress">Address</label>
                <input
                  value={this.state.account.address}
                  name="address"
                  onChange={this.handleChange}
                  id="theAddress"
                  type="text"
                  className="form-control"
                />
              </div>
              <div style={{ float: "right" }}>
                <a href="/emailPasswordUpdate">update email or password ></a>
              </div>
              <button className="btn btn-primary">Confoirm Update</button>
            </form>

            <div style={{ marginTop: 5, marginBottom: 200 }}>
              <button
                style={{ width: 148 }}
                className="btn btn-secondary "
                onClick={this.handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyAccountManagement;
