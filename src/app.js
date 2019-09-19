import React from "react";
import { render } from "react-dom";
import ProductPage from "./ProductPage";
import MainInterface from "./mainInterface.jsx";
import Carousel from "./carousel.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./myCss.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainInterface />
      </BrowserRouter>
    </div>
  );
};

render(<App />, document.getElementById("root"));
