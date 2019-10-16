import React, { Component } from "react";
import { async } from "q";
import { adminLogin } from "../firebase";

class AdminLogIn extends Component {
  state = {
    adminUser: {
      username: "",
      password: ""
    }
  };

  handleSubmit = async e => {
    e.preventDefault();

    const result = await adminLogin(
      this.state.adminUser.username,
      this.state.adminUser.password
    );

    if (result === "admin login successful") {
      sessionStorage.setItem("adminLogin", "yes");
      window.open("/adminManageHome", "_self");
    } else if (result === "this account does not have admin rights") {
      window.alert(result);
    } else if (result instanceof Error) {
      window.alert(result.message);
    }
  };

  handleChange = e => {
    const adminUser = { ...this.state.adminUser };
    adminUser[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ adminUser });
  };

  render() {
    const { adminUser } = this.state;

    return (
      <div>
        {" "}
        <div className="d-flex justify-content-center">
          <div style={{ marginTop: 100, width: 400 }}>
            <div className="text-center" style={{ marginBottom: 14 }}>
              <span style={{ color: "red" }}>Log in access for admin only</span>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="theUsername">Username</label>
                <input
                  value={adminUser.username}
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
                  value={adminUser.password}
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
      </div>
    );
  }
}

export default AdminLogIn;
