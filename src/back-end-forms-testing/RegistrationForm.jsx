import React, { useState } from "react";
import { createNewUser } from "../firebase";

export const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form
        onSubmit={async event => {
          event.preventDefault();
          console.log(await createNewUser(email, password));
        }}
      >
        <input
          type="email"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
