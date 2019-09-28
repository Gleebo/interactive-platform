import React from "react";

const BrandIntro = () => {
  return (
    <div className="card mb-3" style={{ marginTop: 45 }}>
      <div className="row no-gutters">
        <div className="col-md-6 text-center">
          <img
            src="https://picsum.photos/380"
            className="card-img"
            alt="..."
            style={{ width: 500, height: 400 }}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">Title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIntro;
