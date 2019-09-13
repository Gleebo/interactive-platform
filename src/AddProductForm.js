import React, { useState } from "react";
import { createProduct } from "./firebase";

export const AddProductForm = () => {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ref, setRef] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const image = ref.files[0];
    const product = { name, category, brand, description, price };
    createProduct(product, image);
  }

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Brand</td>
            <td>
              <input
                type="text"
                name="brand"
                id="productBrand"
                value={brand}
                onChange={e => setBrand(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Category</td>
            <td>
              <input
                type="text"
                name="category"
                id="productCategory"
                value={category}
                onChange={e => setCategory(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                name="name"
                id="productName"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              <textarea
                name="description"
                id="productDescription"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Price</td>
            <td>
              <input
                type="text"
                name="price"
                id="productPrice"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Image</td>
            <td>
              <input
                type="file"
                name="imgUrl"
                id="productImgUrl"
                ref={ref => {
                  setRef(ref);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" value="add" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
