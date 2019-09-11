import React, { useState } from "react";
import { signIn } from "./firebase";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignInClick = e => {
    e.preventDefault();
    signIn(email, password);
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
              placeholder = "Input your email"
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
              placeholder = "Input your password"
              onChange={e => setPassword(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="sign in" onClick={handleSignInClick} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
