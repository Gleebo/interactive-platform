import React from "react";

const Carousel = () => {
  return (
    <div id="slides" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#slides" data-slide-to="0" className="active"></li>
        <li data-target="#slides" data-slide-to="1"></li>
        <li data-target="#slides" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner text-center">
        <div className="carousel-item active">
          <img
            src="https://www.robin-noorda.com/uploads/1/6/8/3/16830688/3347022_orig.jpg"
            alt="..."
          ></img>
          <div className="carousel-caption">
            <h1 className="display-2">ProductTitle</h1>
            <h3>Product Description</h3>
            <button type="button" className="btn btn-outline-light btn-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://www.robin-noorda.com/uploads/1/6/8/3/16830688/3347022_orig.jpg"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://www.robin-noorda.com/uploads/1/6/8/3/16830688/3347022_orig.jpg"
            alt="..."
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
