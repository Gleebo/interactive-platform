import React, { Component } from "react";
import SearchBar from "./searchBar.jsx";
import AllProductsForAdmin from "./allProductsForAdmin.jsx";

class AdminManageHome extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <SearchBar />
        <div className="text-center">
          <span style={{ color: "green" }}>
            Delete and edit products should be done using the Search Bar to find
            the targets
          </span>
        </div>
        <div
          className="container"
          style={{ backgroundColor: "", marginTop: 38 }}
        >
          <div className="row">
            <div className="col">
              <img
                style={{
                  width: 200,
                  height: 200,
                  float: "right"
                }}
                src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-add-icon.png"
                alt="..."
              ></img>
              <a href="/addProduct">
                <button className="btn btn-light" style={{ float: "right" }}>
                  Add Products To Database
                </button>
              </a>
            </div>
            <div className="col text-center">
              <img
                style={{ width: 200, height: 200 }}
                src="https://cdn.pixabay.com/photo/2017/09/12/06/26/home-2741413_960_720.png"
                alt="..."
              ></img>
              <a href="/adminForHomeManagement">
                <button className="btn btn-light">Home Page Management</button>
              </a>
            </div>
            <div className="col">
              <img
                style={{ width: 200, height: 200 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-r5LcRQHCgS4Ubrpm4y5Dq4-o7PAeWAkT7PWMhbiCA9WfhCIinQ&s"
                alt="..."
              ></img>
              <a href="/orderManagement">
                <button className="btn btn-light" style={{ marginLeft: 20 }}>
                  Orders Management
                </button>
              </a>
            </div>
          </div>
          <div className="row" style={{ marginTop: 30, marginBottom: 40 }}>
            <div className="col-4">
              <img
                style={{
                  width: 200,
                  height: 200,
                  float: "right"
                }}
                src="http://www.iconarchive.com/download/i75883/martz90/circle/messages.ico"
                alt="..."
              ></img>
              <a href="/checkQuestions">
                <button className="btn btn-light" style={{ float: "right" }}>
                  Check Messages From Users
                </button>
              </a>
            </div>
            <div className="col-4 text-center">
              <img
                style={{
                  width: 200,
                  height: 200
                }}
                src="https://cdn.dribbble.com/users/1057455/screenshots/2673531/icons3.jpg"
                alt="..."
              ></img>
              <a href="/cNs">
                <button className="btn btn-light">
                  Categories and Subjects
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <AllProductsForAdmin />
        </div>
      </div>
    );
  }
}

export default AdminManageHome;
