import React from "react";
import { render } from "react-dom";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

const App = () => {
  return (
    <div>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

render(<App />, document.getElementById("root"));
