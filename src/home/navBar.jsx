import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link " to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link " to="/signUp">
              sign up
            </NavLink>
            <NavLink className="nav-item nav-link " to="/signIn">
              log in
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
