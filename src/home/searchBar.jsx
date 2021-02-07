import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div class="row justify-content-center m-2">
        <div class="col-12 col-md-10 col-lg-8">
          <form class="card card-sm">
            <div class="card-body row no-gutters align-items-center">
              <div class="col-auto">
                <i class="fas fa-search h4 text-body"></i>
              </div>

              <div class="col">
                <input
                  class="form-control form-control-lg form-control-borderless"
                  type="search"
                  placeholder="Input keywords to search"
                />
              </div>

              <div class="col-auto">
                <button class="btn btn-lg btn-success m-2" type="submit">
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
