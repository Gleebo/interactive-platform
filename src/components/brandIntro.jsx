import React from "react";

const BrandIntro = brand => {
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
        <div className="col-md-6 align-self-center">
          <div className="card-body">
            <h5 className="card-title">Name: {brand.location.state.name}</h5>
            {/*how to retrieve data from Link "to" data*/}
            <h5 className="card-title">Countery: America</h5>
            <h5 className="card-title">Year of establishment: 1985</h5>
            <p className="card-text">
              Introduction: This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Google us to lean more</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIntro;
