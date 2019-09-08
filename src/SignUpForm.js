import React, { useState, useEffect } from "react";
import { createNewUser } from "./firebase";

export const SignUpForm = () => {
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");

  useEffect(() => {
    //disables submit button if password length is less than 6 chars
    setSubmitButtonDisabled(password.length < 6);
  }, [password]);

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
            <input
              type="button"
              value="sign up"
              disabled={submitButtonDisabled}
              onClick={e => {
                e.preventDefault();
                createNewUser(email, password);
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
