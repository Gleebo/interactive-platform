import React, { Component } from "react";

class BrandIntro extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card bg-dark text-white">
          <img src="https://picsum.photos/600" className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>

        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">Brand Name</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Back to Home Page
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BrandIntro;
