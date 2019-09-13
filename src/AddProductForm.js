import React, { useState } from "react";
import { createProduct } from "./firebase";

export const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    brand: "",
    description: "",
    price: ""
  });
  const [ref, setRef] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const image = ref.files[0];
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
                id="productCategory"
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
                id="productName"
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
                id="productDescription"
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
                id="productPrice"
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
