import React from "react";
import { Link } from "react-router-dom";

const ThreeCategory = () => {
  return (
    <div className="container-fluid padding">
      <div className="row text-center padding">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="card text-white">
            <img
              src="https://static.businessinsider.com/image/5b560cfe7a85ad31008b45db.jpg"
              style={{ width: 100 + "%", height: 350 }}
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay">
              <h5>Brands</h5>
              <p>Nike/Adidas/Li Ning/Anta...</p>
              <Link to="/allProducts">
                <button type="button" className="btn btn-outline-light">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="card text-white">
            <img
              src="https://studywatches.com/wp-content/uploads/2018/10/6-keys-to-choose-a-good-multimedia-educational-material.png"
              style={{ width: 100 + "%", height: 350 }}
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay">
              <h5>Properties</h5>
              <p>Books/Toys/Tools...</p>
              <button type="button" className="btn btn-outline-light">
                Learn more
              </button>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="card text-white">
            <img
              src="data:image/jpeg;base64,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"
              style={{ width: 100 + "%", height: 350 }}
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay">
              <h5>Subjects</h5>
              <p>Art/Math/History/Music...</p>
              <button type="button" className="btn btn-outline-light">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5"></hr>
    </div>
  );
};

export default ThreeCategory;
