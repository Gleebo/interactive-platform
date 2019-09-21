import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div className="row justify-content-center m-2 ">
        <div className="col-12 col-md-10 col-lg-8">
          <form className="card card-sm">
            <div className="card-body row no-gutters align-items-center">
              <div className="col-auto">
                <i className="fas fa-search h4 text-body"></i>
              </div>

              <div className="col">
                <input
                  className="form-control form-control-lg form-control-borderless"
                  type="search"
                  placeholder="Input keywords to search"
                />
              </div>

              <div className="col-auto">
                <button className="btn btn-lg btn-success m-2" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
