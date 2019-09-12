import React, { useState, useEffect } from "react";
import { createProduct, uploadImage } from "./firebase";

export const AddProductForm = () => {
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [ref, setRef] = useState("");

  useEffect(() => {
    //disables submit button if password length is less than 6 chars
    setSubmitButtonDisabled(name.length < 2);
  }, [name]);

  return (
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
            <input
              type="button"
              value="add"
              disabled={submitButtonDisabled}
              onClick={e => {
                e.preventDefault();
                uploadImage(
                  ref.files[0],
                  brand,
                  category,
                  description,
                  name,
                  price
                ).then(id => console.log(id));
                // createProduct(brand, category, description, name, price).then(
                //   docRef => console.log(docRef)
                // );
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
