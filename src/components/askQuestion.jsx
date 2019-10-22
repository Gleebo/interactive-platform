import React, { Component } from "react";
import firebase from "firebase/app";
import { createTicketForSupport } from "../firebase";

class AskQuestion extends Component {
  state = {
    info: {
      title: "",
      content: ""
    },
    userE: {
      email: ""
    }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const userE = { ...this.state.userE };
        userE.email = user.email;

        this.setState({ userE });
        console.log();
      } else {
        console.log("not log in");
      }
    });
  }

  handleSubmit = async e => {
    e.preventDefault();

    const res = await createTicketForSupport(this.state.info);

    if (res instanceof Error) {
      window.alert("Submit fail, error happens");
    } else {
      window.alert("Submit successfully!");
      window.open("/", "_self");
    }

    console.log(res);
  };

  handleChange = e => {
    const info = { ...this.state.info };
    info[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ info });
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="text-center" style={{ marginTop: 100, width: 400 }}>
          <form onSubmit={this.handleSubmit}>
            <h5 className="float-left">From: {this.state.userE.email}</h5>
            <div>
              <input
                style={{ width: 400 }}
                className="float-left "
                type="text"
                name="title"
                value={this.state.info.title}
                placeholder="Title"
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <textarea
                style={{ height: 180, width: 400 }}
                name="content"
                type="text"
                placeholder="Content here"
                onChange={this.handleChange}
              ></textarea>
            </div>
            <button className="btn btn-primary float-right">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AskQuestion;
