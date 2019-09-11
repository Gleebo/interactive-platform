import React from "react";
export default function ProductCategory({ categories }) {
  return (
    <div className="mb-3">
      {categories.map(category => (
        <a key={category} href="google.com">
          <span className="badge purple mr-1">{category}</span>
        </a>
      ))}
    </div>
  );
}
