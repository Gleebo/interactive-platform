import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <a className="navbar-brand" href="/">
            <img
              src="Logo.jpg"
              alt="..."
              style={{
                height: 40 + "px",
                width: 150 + "px",
                marginLeft: 35 + "px"
              }}
            ></img>
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
                <button
                  className="btn btn-light"
                  type="button"
                  data-toggle="collapse"
                  data-target=".multi-collapse"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1 multiCollapseExample2 multiCollapseExample3"
                >
                  Categories
                </button>
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
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div className="card card-body">
                <div className="text-center">
                  <h5>Brands</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <div className="card card-body">
                <div className="text-center">
                  <h5>Subjects</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample3">
              <div className="card card-body">
                <div className="text-center">
                  <h5>Properties</h5>
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
