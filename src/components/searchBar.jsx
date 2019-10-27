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

  handleSearch = () => {
    if (this.state.input.key.length > 0) {
      sessionStorage.setItem("wordToSearch", this.state.input.key);
      window.open("/resultPage", "_self");
    } else {
      window.alert("input is none !");
    }
  };

  render() {
    return (
      <div className="row justify-content-center m-2 ">
        <div className="col-12 col-md-10 col-lg-8">
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
                placeholder="Input keyword to find products"
              />
            </div>

            <div className="col-auto">
              <button
                className="btn btn-lg btn-outline-secondary m-2"
                type="button"
                onClick={() => this.handleSearch()}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
