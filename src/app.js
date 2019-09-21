import React from "react";
import { render } from "react-dom";
import TestForm from "../back-end-forms-testing/TestForm";

const App = () => {
  return <TestForm />;
};

render(<App />, document.getElementById("root"));
