import React, { Component } from "react";
import { async } from "q";
import { getSupportTickets, getUserInfo } from "../firebase";

class CheckQuestions extends Component {
  state = {
    questions: []
  };

  async componentDidMount() {
    const res = await getSupportTickets.next(15);
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
            <div className="row" style={{ marginTop: 30 }}>
              <div className="col-3 text-center"></div>
              <div className="col-9 ">
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
