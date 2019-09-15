import React from "react";
import { render } from "react-dom";
import ProductPage from "./ProductPage";
import MainInterface from "./mainInterface.jsx";
import { BrowserRouter } from "react-router-dom";

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
