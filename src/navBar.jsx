import React, { Component } from "react";
import ProductCategory from "./ProductCategory";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand" href="#">
          KidIslands
        </a>
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
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Categories
              </a>
            </li>
            <li>
              <a className="nav-link" href="/signIn">
                Sign in
              </a>
            </li>
            <li>
              <a className="nav-link" href="/signUp">
                Sign up
              </a>
            </li>
            <li>
              <a className="nav-link" href="/cartInterface">
                My cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
