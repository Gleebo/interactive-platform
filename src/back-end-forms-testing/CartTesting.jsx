import React, { useState } from "react";
import { signIn, getCart } from "../firebase";

export default function CartTesting() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    signIn().then(() => getCart().then(console.log));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
