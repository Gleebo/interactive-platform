import React, { Component } from "react";
import { async } from "q";
import {
  getCategoriesAndSubjects,
  setCategories,
  setSubjects
} from "../firebase";

class CNs extends Component {
  state = {
    categories: [],
    subjects: [],
    newContent: {
      newCategory: "",
      newSubject: ""
    }
  };

  async componentDidMount() {
    const previous = await getCategoriesAndSubjects();
    this.setState({ categories: previous.categories });
    this.setState({ subjects: previous.subjects });
  }

  handleSubmitC = async e => {
    e.preventDefault();

    const res = await setCategories(this.state.categories);
    if (res instanceof Error) {
      window.alert("error happens");
    } else {
      window.alert("Categories update successfully");
      window.location.reload();
    }
  };
  handleSubmitS = async e => {
    e.preventDefault();

    const res = await setSubjects(this.state.subjects);
    if (res instanceof Error) {
      window.alert("error happens");
    } else {
      window.alert("Subjects update successfully");
      window.location.reload();
    }
  };

  handleDeteleC = category => {
    const categories = this.state.categories.filter(cate => cate !== category);
    this.setState({ categories });
  };

  handleDeteleS = subject => {
    const subjects = this.state.subjects.filter(sub => sub !== subject);
    this.setState({ subjects });
  };

  handleAddC = () => {
    let categories = [...this.state.categories];
    categories.push(this.state.newContent.newCategory);
    this.setState({ categories });
  };

  handleAddS = () => {
    let subjects = [...this.state.subjects];
    subjects.push(this.state.newContent.newSubject);
    this.setState({ subjects });
  };

  handleChange = e => {
    const newContent = { ...this.state.newContent };
    newContent[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ newContent });
  };

  render() {
    return (
      <div className="container">
        <div className="border text-center">
          <h3 style={{ marginBottom: 30 }}>Categories Management</h3>
          <form onSubmit={this.handleSubmitC}>
            <div style={{ marginBottom: 20 }}>
              <h5>Categories:</h5>
              {this.state.categories.map(cate => (
                <div className="row justify-content-md-center">
                  <div className="col col-1">
                    <span>{cate}</span>
                  </div>
                  <div className="col col-1">
                    <button
                      type="button"
                      onClick={() => this.handleDeteleC(cate)}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <label htmlFor="theNewCategory" style={{ marginRight: 15 }}>
              New Category:{" "}
            </label>
            <input
              name="newCategory"
              type="text"
              id="theNewCategory"
              value={this.state.newContent.newCategory}
              onChange={this.handleChange}
            ></input>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginLeft: 20 }}
              onClick={() => this.handleAddC()}
            >
              Add
            </button>
            <br></br>
            <button className="btn btn-primary" style={{ marginBottom: 10 }}>
              Confirm Changes
            </button>
          </form>
        </div>

        <div
          className="border text-center"
          style={{ marginTop: 20, marginBottom: 30 }}
        >
          <h3 style={{ marginBottom: 30 }}>Subjects Management</h3>
          <form onSubmit={this.handleSubmitS}>
            <div style={{ marginBottom: 20 }}>
              <h5>Subjects:</h5>
              {this.state.subjects.map(sub => (
                <div className="row justify-content-md-center">
                  <div className="col col-1">
                    <span>{sub}</span>
                  </div>
                  <div className="col col-1">
                    <button
                      type="button"
                      onClick={() => this.handleDeteleS(sub)}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <label htmlFor="theNewSubject" style={{ marginRight: 15 }}>
              New Subject:{" "}
            </label>
            <input
              name="newSubject"
              type="text"
              id="theNewSubject"
              value={this.state.newContent.newSubject}
              onChange={this.handleChange}
            ></input>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginLeft: 20 }}
              onClick={() => this.handleAddS()}
            >
              Add
            </button>
            <br></br>
            <button className="btn btn-primary" style={{ marginBottom: 10 }}>
              Confirm Changes
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CNs;
