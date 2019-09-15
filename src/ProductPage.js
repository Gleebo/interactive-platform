import React, { useState, useEffect } from "react";
import { getProduct } from "./firebase";
import ProductCategory from "./ProductCategory";
import ProductDetail from "./ProductDetail";
import ProductForm from "./ProductForm";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductInfoImage from "./ProductInfoImage";

export default function ProductPage(props) {
  const productID = "6Q0JqK7OWJR6TfTpg3kj";
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
        <hr></hr>
        <div className="row d-flex justify-content-center wow fadeIn">
          <ProductInfo name={name} description={description}></ProductInfo>
        </div>
        <div className="row wow fadeIn">
          <ProductInfoImage
            imgUrl1={imgUrl}
            infoname1={name}
          ></ProductInfoImage>
          <div className="col-lg-4 col-md-12 mb-4">
            <img src={imgUrl} className="img-fluid" alt={name} />
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <img src={imgUrl} className="img-fluid" alt={name} />
          </div>
        </div>
      </div>
    </main>
  );
}
