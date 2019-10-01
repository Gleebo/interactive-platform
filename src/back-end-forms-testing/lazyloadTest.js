import React, { useState } from "react";
import { lazyLoad } from "../firebase";

export default function LazyLoad() {
  const [products, setProducts] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  let key = 0;
  const handleClick = async () => {
    let results = await lazyLoad();
    if (results) {
      setProducts([...products, ...results]);
    } else {
      setIsDisabled(true);
    }
  };
  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={key++}>{product}</li>
        ))}
      </ul>
      <button onClick={handleClick} disabled={isDisabled}>
        Click to load
      </button>
    </div>
  );
}
