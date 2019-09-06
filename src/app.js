import React from "react";
import ReactDOM from "react-dom";
import { SignInForm } from "./SignInForm";

const App = () => {
  return (
    <div>
      <SignInForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
