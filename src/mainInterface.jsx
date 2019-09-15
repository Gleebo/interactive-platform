import React, { Component } from "react";
import NavBar from "./navBar.jsx";
import { Route } from "react-router-dom";
import SignIn from "./signIn.jsx";
import SignUp from "./signUp.jsx";
import Home from "./home.jsx";
import CartInterface from "./cartInterface.jsx";
import BrandIntro from "./brandIntro.jsx";
import ProductPage from "./ProductPage";

class MainInterface extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Route path="/" exact component={Home}></Route>
          <Route path="/signIn" component={SignIn}></Route>
          <Route path="/signUp" component={SignUp}></Route>
          <Route path="/cartInterface" component={CartInterface}></Route>
          <Route path="/brandIntro" component={BrandIntro}></Route>
          <Route path="/productPage" component={ProductPage}></Route>
        </main>
      </React.Fragment>
    );
  }
}

export default MainInterface;
