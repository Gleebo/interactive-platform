import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import MainInterface from "./components/mainInterface";
import { BrowserRouter } from "react-router-dom";
import "./components/myCss.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <MainInterface />
  </BrowserRouter>,
  document.getElementById("root")
);
