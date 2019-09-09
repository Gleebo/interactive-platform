import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { getAllProducts } from "./firebase";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(docs => setProducts(docs));
  }, []);

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            Product name: {product.name}, Description: {product.description}
          </li>
        ))}
      </ul>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/kids-islands.appspot.com/o/roflmao.jpg?alt=media&token=c898d205-bac6-4cb7-877f-0b479feceae2"
        alt="rofl"
      ></img>
    </div>
  );
};

render(<App />, document.getElementById("root"));
