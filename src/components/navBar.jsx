import React, { Component } from "react";

import OneNavLink from "./oneNavLink.jsx";
import axios from "axios";
import { async } from "q";
import { signOut } from "../firebase";

class NavBar extends Component {
  state = {
    brands: [],
    subjects: [],
    properties: []
  };

  async componentWillMount() {
    const { data: brands } = await axios.get(
      "https://us-central1-kids-islands.cloudfunctions.net/getBrands"
    );

    this.setState({ brands });
  }

  async handleLogout() {
    const infoFromBack = await signOut();

    if (infoFromBack instanceof Error) {
      window.alert("Error happens, log out fail");
    } else {
      sessionStorage.setItem("adminLogin", "");

      window.open("/", "_self");
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <span>KidIslands</span>
          </a>
          <button
            className={
              sessionStorage.getItem("adminLogin")
                ? "btn btn-light visible"
                : "btn btn-light invisible "
            }
            style={{ color: "red" }}
            onClick={this.handleLogout}
          >
            admin mode log out
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href={
                    sessionStorage.getItem("adminLogin")
                      ? "/adminManageHome"
                      : "/"
                  }
                >
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <span
                  className="nav-link "
                  data-toggle="collapse"
                  data-target=".multi-collapse"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1 multiCollapseExample2 multiCollapseExample3"
                >
                  Categories
                </span>
              </li>
              <li>
                <a
                  className={
                    sessionStorage.getItem("loginEmail") ||
                    sessionStorage.getItem("adminLogin")
                      ? "nav-link disabled"
                      : "nav-link "
                  }
                  href="/signIn"
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  className={
                    sessionStorage.getItem("loginEmail") ||
                    sessionStorage.getItem("adminLogin")
                      ? "nav-link disabled"
                      : "nav-link "
                  }
                  href="/signUp"
                >
                  Sign up
                </a>
              </li>
              <li>
                <a
                  className={
                    sessionStorage.getItem("loginEmail")
                      ? "nav-link"
                      : "nav-link disabled"
                  }
                  href="/cartInterface"
                >
                  My cart
                </a>
              </li>
              <li>
                <a
                  className={
                    sessionStorage.getItem("loginEmail")
                      ? "nav-link"
                      : "nav-link disabled"
                  }
                  href="/myAccountManagement"
                >
                  My account
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div className="card card-body">
                <div className="text-center">
                  <h5>Brands</h5>
                  {this.state.brands.map(brand => OneNavLink(brand))}
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <div className="card card-body">
                <div className="text-center">
                  <h5>Subjects</h5>
                  <a href="#">English</a>
                  <br></br>
                  <a href="#">Chinese</a>
                  <br></br>
                  <a href="#">Music</a>
                  <br></br>
                  <a href="#">History</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample3">
              <div className="card card-body">
                <div className="text-center">
                  <h5>Properties</h5>
                  <a href="#">Books</a>
                  <br></br>
                  <a href="#">Toys</a>
                  <br></br>
                  <a href="#">Tools</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
