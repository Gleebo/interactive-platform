import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { getAllProducts } from "./firebase";
import ProductPage from "./ProductPage";

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
      <ProductPage productID="6Q0JqK7OWJR6TfTpg3kj" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
