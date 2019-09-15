import React from "react";
import { render } from "react-dom";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";
import { AddProductForm } from "./AddProductForm";
import { EditProductForm } from "./EditProductForm";

const App = () => {
  return (
    <div>
      <SignInForm />
      <SignUpForm />
      <AddProductForm />
      <EditProductForm />
    </div>
  );
};

render(<App />, document.getElementById("root"));
