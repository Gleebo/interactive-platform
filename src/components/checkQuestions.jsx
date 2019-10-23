import React, { Component } from "react";
import { async } from "q";
import { getSupportTickets, getUserInfo } from "../firebase";

class CheckQuestions extends Component {
  state = {
    questions: []
  };

  async componentDidMount() {
    const res = await getSupportTickets.next(10);
    this.setState({ questions: res });
    console.log(this.state.questions);
  }

  getEmailByUid = async uid => {
    //wait for develop
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
        </div>
      </div>
    );
  }
}

export default CheckQuestions;
