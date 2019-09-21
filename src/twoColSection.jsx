import React from "react";

const TwoColSection = () => {
  return (
    <main className="container">
      <div className="container-fluid padding">
        <div className="row padiing ">
          <div className="col-md-12 col-lg-6 ">
            <img
              className="img-fluid"
              src="https://images-na.ssl-images-amazon.com/images/I/91U3OBIZ0-L.jpg"
              alt="..."
              style={{ width: 360, height: 360 }}
            />
          </div>

          <div className="col-md-12 col-lg-6">
            <h2>I Wish You More</h2>
            <p>dfashdfuhasdofhaodhfaousdf</p>
            <p>sdfadsfsadf</p>
            <p>hahsdfjasodfjaoisdjfaisdjfoiasjdoifjasoidfjiasdjfs</p>

            <a href="/productPage" className="btn btn-primary">
              Buy now
            </a>

            <a
              href="/productPage"
              className="btn btn-secondary"
              style={{ marginLeft: 25 }}
            >
              More books
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TwoColSection;
