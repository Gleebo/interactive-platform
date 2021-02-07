import React, { Component } from "react";

const SignUp = () => {
  return (
    <div class="row justify-content-center align-items-center ">
      <div class="row">
        <div class="span12">
          <form class="form-horizontal" action="" method="POST">
            <fieldset>
              <div id="legend">
                <legend class="">Sign Up</legend>
              </div>
              <div class="control-group">
                <label class="control-label" for="username">
                  Eamil
                </label>
                <div class="controls">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder=""
                    class="input-xlarge"
                  />
                </div>
              </div>

              <div class="control-group">
                <label class="control-label" for="username">
                  School Name
                </label>
                <div class="controls">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder=""
                    class="input-xlarge"
                  />
                </div>
              </div>

              <div class="control-group">
                <label class="control-label" for="password">
                  Password
                </label>
                <div class="controls">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder=""
                    class="input-xlarge"
                  />
                </div>
              </div>

              <div class="control-group">
                <label class="control-label" for="password">
                  Confirm Password
                </label>
                <div class="controls">
                  <input
                    type="password"
                    id="passwordC"
                    name="passwordC"
                    placeholder=""
                    class="input-xlarge"
                  />
                </div>
              </div>

              <div class="control-group">
                <div class="controls">
                  <button class="btn btn-success m-2">Sgin Up</button>
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
