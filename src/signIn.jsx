import React from "react";

const SignIn = () => {
  return (
    <div className="row justify-content-center align-items-center ">
      <div className="row">
        <div className="span12">
          <form className="form-horizontal" action="" method="POST">
            <fieldset>
              <div id="legend">
                <legend className="">Log In</legend>
              </div>
              <div className="control-group">
                <label className="control-label" for="username">
                  Account
                </label>
                <div className="controls">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Email or School Name"
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
                <div className="controls">
                  <button className="btn btn-success m-2">Log In</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
