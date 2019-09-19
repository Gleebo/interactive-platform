import React, { Component } from "react";

const SignUp = () => {
  return (
    <div className="row justify-content-center align-items-center ">
      <div className="row">
        <div className="span12">
          <form className="form-horizontal" action="" method="POST">
            <fieldset>
              <div id="legend">
                <legend className="">Sign Up</legend>
              </div>
              <div className="control-group">
                <label className="control-label" for="username">
                  Eamil
                </label>
                <div className="controls">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder=""
                    className="input-xlarge"
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" for="username">
                  School Name
                </label>
                <div className="controls">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder=""
                    className="input-xlarge"
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" for="password">
                  Password
                </label>
                <div className="controls">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder=""
                    className="input-xlarge"
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" for="password">
                  Confirm Password
                </label>
                <div className="controls">
                  <input
                    type="password"
                    id="passwordC"
                    name="passwordC"
                    placeholder=""
                    className="input-xlarge"
                  />
                </div>
              </div>

              <div className="control-group">
                <div className="controls">
                  <button className="btn btn-success m-2">Sgin Up</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
