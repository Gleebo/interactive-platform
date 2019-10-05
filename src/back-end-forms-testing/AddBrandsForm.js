import React, { useState } from "react";
import { addBrands } from "../firebase";

export const AddBrandsForm = () => {
  const [brand, setBrand] = useState({
    name: "",
    country: "",
    year: "",
    description: ""
  });
  const [ref, setRef] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const image = ref.files[0];
    addBrands(brand, image);
  }

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                name="name"
                id="brandName"
                value={brand.name}
                onChange={e => setBrand({ ...brand, name: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>country</td>
            <td>
              <input
                type="text"
                name="country"
                id="brandCountry"
                value={brand.country}
                onChange={e => setBrand({ ...brand, country: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>Year</td>
            <td>
              <input
                type="text"
                name="year"
                id="brandYear"
                value={brand.year}
                onChange={e => setBrand({ ...brand, year: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              <textarea
                name="description"
                id="brandDescription"
                value={brand.description}
                onChange={e =>
                  setBrand({ ...brand, description: e.target.value })
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
                id="brandImgUrl"
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
