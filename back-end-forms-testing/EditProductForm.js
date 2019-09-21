import React, { useState, useEffect } from "react";
import { getProduct, editProduct } from "./firebase";

export const EditProductForm = () => {
  const id = "6Q0JqK7OWJR6TfTpg3kj";
  const [product, setProduct] = useState({
    name: "",
    category: "",
    brand: "",
    description: "",
    price: "",
    imgUrl: ""
  });

  const [ref, setRef] = useState("");
  useEffect(() => {
    // get product info by ID
    getProduct(id).then(product => setProduct(product));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const image = ref.files[0];
    editProduct(id, product, image);
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
                id="editProductBrand"
                value={product.brand}
                onChange={e =>
                  setProduct({ ...product, brand: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Category</td>
            <td>
              <input
                type="text"
                name="category"
                id="editProductCategory"
                value={product.category}
                onChange={e =>
                  setProduct({ ...product, category: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                name="name"
                id="editProductName"
                value={product.name}
                onChange={e => setProduct({ ...product, name: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              <textarea
                name="description"
                id="editProductDescription"
                value={product.description}
                onChange={e =>
                  setProduct({ ...product, description: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Price</td>
            <td>
              <input
                type="text"
                name="price"
                id="editProductPrice"
                value={product.price}
                onChange={e =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Image</td>
            <td>
              <img
                src={product.imgUrl}
                alt="productImage"
                width="200px"
                height="200px"
              />
            </td>
            <td>
              <input
                type="file"
                name="imgUrl"
                id="editProductImgUrl"
                ref={ref => {
                  setRef(ref);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" value="edit" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
