import React, { Component } from "react";
import SearchBar from "./searchBar.jsx";

class AdminManageHome extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <SearchBar />
        <div className="text-center">
          <span style={{ color: "green" }}>
            delete and edit product should be done using the searchBar to find
            target product
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
                src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/purchase_order.png"
                alt="..."
              ></img>
              <a href="/orderManagement">
                <button className="btn btn-light" style={{ marginLeft: 20 }}>
                  Orders Management
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminManageHome;
