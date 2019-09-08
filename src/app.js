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
    </div>
  );
};

render(<App />, document.getElementById("root"));
