import React from "react";

const TwoColSection = () => {
  return (
    <main className="container">
      <div className="container-fluid padding">
        <div className="row padiing text-center">
          <div
            className="col-md-12 col-lg-6"
            style={{ backgroundColor: "silver" }}
          >
            <h2>the text in section 1</h2>
            <p>dfashdfuhasdofhaodhfaousdf</p>
            <p>sdfadsfsadf</p>
            <p>hahsdfjasodfjaoisdjfaisdjfoiasjdoifjasoidfjiasdjfs</p>

            <a href="/productPage" className="btn btn-primary">
              Button
            </a>
          </div>
          <div className="col-md-12 col-lg-6 ">
            <img
              className="img-fluid"
              src="https://lateralvision.com.au/wp-content/uploads/2018/11/Brand-icon-Final.png"
              alt="..."
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TwoColSection;
