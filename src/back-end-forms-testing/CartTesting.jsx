import React, { useState } from "react";
import { signIn, getCart, signOut } from "../firebase";

export default function CartTesting() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    signIn(email, password).then(console.log);
  }
  const logOut = async () => {
    console.log(await signOut());
  };
  const cart = async () => {
    const cartItems = await getCart();
    console.log(cartItems);
  };
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
        <input type="button" value="Log Out" onClick={logOut} />
        <input type="button" value="Cart" onClick={cart} />
      </form>
    </div>
  );
}
