import React, { useState, useEffect } from "react";
import { getProduct } from "./firebase";
import ProductCategory from "./ProductCategory";
import ProductDetail from "./ProductDetail";
import ProductForm from "./ProductForm";
import ProductImage from "./ProductImage";

export default function ProductPage({ productID }) {
  const [
    { name, brand, description, price, imgUrl, category },
    setProduct
  ] = useState({});
  useEffect(() => {
    getProduct(productID).then(product => {
      setProduct(product);
    });
  }, []);
  return (
    <main className="mt-5 pt-4">
      <div className="container dark-grey-text mt-5">
        <div className="row wow fadeIn">
          <div className="col-md-6 mb-4">
            <ProductImage imgUrl={imgUrl} name={name}></ProductImage>
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-4">
              <ProductCategory categories={[category]}></ProductCategory>
              <ProductDetail
                price={price}
                description={description}
                name={name}
                brand={brand}
              ></ProductDetail>
              <ProductForm></ProductForm>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
