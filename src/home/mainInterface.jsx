import React, { Component } from "react";
import NavBar from "./navBar";
import SearchBar from "./searchBar";
import { Route } from "react-router-dom";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Home from "./home";

class MainInterface extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <main className="container">
          <Route path="/" exact component={Home}></Route>
          <Route path="/signIn" component={SignIn}></Route>
          <Route path="/signUp" component={SignUp}></Route>
        </main>
      </React.Fragment>
    );
  }
}

export default MainInterface;
