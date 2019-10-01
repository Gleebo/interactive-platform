import React, { Component } from "react";
import NavBar from "./navBar.jsx";
import { Route } from "react-router-dom";
import SignIn from "./signIn.jsx";
import SignUp from "./signUp.jsx";
import Home from "./home.jsx";
import CartInterface from "./cartInterface.jsx";
import NotFound from "./notFound.jsx";
import AllProducts from "./allProducts.jsx";
import BrandIntro from "./brandIntro.jsx";
import ProductDetailPage from "./productDetailPage.jsx";
import ResultPage from "./resultPage.jsx";

class MainInterface extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/signIn" component={SignIn}></Route>
          <Route path="/signUp" component={SignUp}></Route>
          <Route path="/cartInterface" component={CartInterface}></Route>
          <Route path="/brandIntro" component={BrandIntro}></Route>
          <Route
            path="/productDetailPage"
            component={ProductDetailPage}
          ></Route>
          <Route path="/notFound" component={NotFound}></Route>
          <Route path="/allProducts" component={AllProducts}></Route>
          <Route path="/resultPage" component={ResultPage}></Route>
        </div>
      </div>
    );
  }
}

export default MainInterface;
