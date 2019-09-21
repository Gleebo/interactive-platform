import React from "react";
import { render } from "react-dom";
import TestForm from "./TestForm";

const App = () => {
  return <TestForm />;
};

render(<App />, document.getElementById("root"));
