import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <span>KidIslands</span>
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
                  <a href="/brandIntro">Nike</a> <br></br>
                  <a href="#">Li Ning</a>
                  <br></br>
                  <a href="#">Adidas</a>
                  <br></br>
                  <a href="#">Anta</a>
                  <br></br>
                  <a href="#">Air Jordan</a>
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
                  <a href="#">Toola</a>
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
