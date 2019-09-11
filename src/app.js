import React from "react";
import { render } from "react-dom";
import ProductPage from "./ProductPage";

const App = () => {
  return (
    <div>
      <ProductPage productID="6Q0JqK7OWJR6TfTpg3kj" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
