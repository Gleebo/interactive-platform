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
import MyAccountManagement from "./myAccountManagement.jsx";
import FinalPayInterface from "./finalPayInterface.jsx";
import EmailPasswordUpdate from "./emailPasswordUpdate.jsx";
import AdminLogIn from "./adminLogIn.jsx";
import AdminManageHome from "./adminManageHome.jsx";
import ProductDetailManagePage from "./productDetailManagePage.jsx";
import AddProduct from "./addProduct.jsx";
import AdminForHomeManagement from "./adminForHomeManagement.jsx";
import OrderManagement from "./orderManagement.jsx";
import UserOrders from "./userOrders.jsx";
import AskQuestion from "./askQuestion.jsx";
import CheckQuestions from "./checkQuestions.jsx";
import CNs from "./cNs.jsx";
import BrandCateSub from "./brandCateSub.jsx";

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
          <Route
            path="/myAccountManagement"
            component={MyAccountManagement}
          ></Route>
          <Route
            path="/finalPayInterface"
            component={FinalPayInterface}
          ></Route>
          <Route
            path="/emailPasswordUpdate"
            component={EmailPasswordUpdate}
          ></Route>
          <Route path="/adminLogIn" component={AdminLogIn}></Route>
          <Route path="/adminManageHome" component={AdminManageHome}></Route>
          <Route
            path="/productDetailManagePage"
            component={ProductDetailManagePage}
          ></Route>
          <Route path="/addProduct" component={AddProduct}></Route>
          <Route
            path="/adminForHomeManagement"
            component={AdminForHomeManagement}
          ></Route>
          <Route path="/orderManagement" component={OrderManagement}></Route>
          <Route path="/userOrders" component={UserOrders}></Route>
          <Route path="/askQuestion" component={AskQuestion}></Route>
          <Route path="/checkQuestions" component={CheckQuestions}></Route>
          <Route path="/cNs" component={CNs}></Route>
          <Route path="/brandCateSub" component={BrandCateSub}></Route>
        </div>
      </div>
    );
  }
}

export default MainInterface;
