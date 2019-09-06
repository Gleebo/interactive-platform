import React, { useState } from "react";
import ReactDOM from "react-dom";
import { signIn, createNewUser } from "./firebase";

function SignInForm() {
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
  const handleSignInClick = e => {
    e.preventDefault();
    signIn(email, password);
  };
  const handleSignUpClick = e => {
    e.preventDefault();
    createNewUser(email, password);
  };
  return (
    <table>
      <tbody>
        <tr>
          <td>Email</td>
          <td>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="sign up" onClick={handleSignUpClick} />
          </td>
          <td>
            <input type="button" value="sign in" onClick={handleSignInClick} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

ReactDOM.render(<SignInForm />, document.getElementById("login"));
