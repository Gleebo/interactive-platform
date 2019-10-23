import React, { Component } from "react";
import { async } from "q";
import { getSupportTickets } from "../firebase";

class CheckQuestions extends Component {
  state = {
    questions: []
  };

  async componentDidMount() {
    const res = await getSupportTickets.next(10);
    let resFinal = [];
    resFinal = res.reverse();
    this.setState({ questions: resFinal });
    console.log(this.state.questions);
  }

  getEmailByUid = async uid => {
    //wait for develop
  };

  loadMore = async () => {
    const res = await getSupportTickets.next(10);
    let oldArray = this.state.questions;
    let newArray = oldArray.concat(res);
    this.setState({ questions: newArray });
  };

  render() {
    return (
      <div>
        <div className="container">
          {this.state.questions.map(question => (
            <div className="row" style={{ marginTop: 30, marginBottom: 50 }}>
              <div className="col-4 text-center">
                <span>From: </span>
                <br></br>
                <span>{question.email}</span>
              </div>
              <div className="col-8 ">
                <span>Title: {question.title}</span>
                <br></br>
                <span>Message: {question.content}</span>
              </div>
            </div>
          ))}
          <div style={{ marginBottom: 180 }}>
            <button
              className="btn btn-primary float-right"
              onClick={() => this.loadMore()}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckQuestions;
