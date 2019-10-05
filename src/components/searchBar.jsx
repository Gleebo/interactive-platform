import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  state = {
    input: { key: "" }
  };

  inputChange = e => {
    const input = { ...this.state.input };
    input.key = e.currentTarget.value;
    this.setState({ input });
  };

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
                  value={this.state.input.key}
                  onChange={this.inputChange}
                  autoFocus
                  className="form-control form-control-lg form-control-borderless"
                  type="search"
                  placeholder="Input keywords to search"
                />
              </div>

              <div className="col-auto">
                <Link
                  to={{
                    pathname: "/resultPage",
                    state: { keyword: this.state.input.key }
                  }}
                >
                  <button className="btn btn-lg btn-success m-2" type="submit">
                    Search
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
