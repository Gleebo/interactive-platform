import React, { useState, useEffect } from "react";
import { getProduct } from "./firebase";

export default function ProductPage({ productID }) {
  const [{ name, brand, description, price, imgUrl }, setProduct] = useState(
    {}
  );
  useEffect(() => {
    getProduct(productID).then(product => setProduct(product));
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <h2>By {brand}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <img src={imgUrl} alt={name}></img>
    </div>
  );
}
