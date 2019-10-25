import React, { Component } from "react";
import { createProduct, getCategoriesAndSubjects } from "../firebase";
import { async } from "q";
import axios from "axios";

class AddProduct extends Component {
  state = {
    product: {
      name: "",
      brand: "",
      category: "",
      subject: "",
      description: "",
      price: ""
    },
    brandsOption: [],
    categoriesOption: [],
    subjectsOption: [],
    imgFile: null
  };

  async componentWillMount() {
    const { data: brandsOption } = await axios.get(
      "https://us-central1-kids-islands.cloudfunctions.net/getBrands"
    );
    this.setState({ brandsOption });

    const product = { ...this.state.product };
    product.brand = brandsOption[0].name;

    const cNs = await getCategoriesAndSubjects();
    product.category = cNs.categories[0];
    product.subject = cNs.subjects[0];
    this.setState({ product });

    this.setState({ categoriesOption: cNs.categories });
    this.setState({ subjectsOption: cNs.subjects });
  }

  imageChange = e => {
    if (typeof e.currentTarget.files[0] === "undefined") {
      return;
    }
    this.setState({ imgFile: e.currentTarget.files[0] });
  };

  handleChange = e => {
    const product = { ...this.state.product };
    product[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ product });
  };

  handleCancel = () => {
    window.open("/adminManageHome", "_self");
  };

  handleUpdate = async e => {
    e.preventDefault();
    const { product, imgFile } = { ...this.state };

    if (
      product.name === "" ||
      product.category === "" ||
      product.price === "" ||
      product.description === "" ||
      imgFile === null
    ) {
      window.alert("product info is not complete");
    } else {
      await createProduct(product, imgFile);
      window.alert("successfully upload");
    }
  };

  render() {
    const {
      product,
      imgFile,
      brandsOption,
      categoriesOption,
      subjectsOption
    } = { ...this.state };

    return (
      <div>
        <div className="d-flex justify-content-center">
          <div style={{ marginTop: 100, width: 400 }}>
            <div style={{ marginBottom: 12 }}>
              <input
                style={{ display: "none" }}
                type="file"
                onChange={this.imageChange}
                ref={fileInput => (this.fileInput = fileInput)}
              ></input>
              <button
                className="btn btn-primary"
                onClick={() => this.fileInput.click()}
              >
                Select Image
              </button>
              <span style={{ marginLeft: 20 }}>
                {imgFile === null ? "" : imgFile.name}
              </span>
            </div>
            <form onSubmit={this.handleUpdate}>
              <div className="form-group">
                <label htmlFor="theName">Product Name</label>
                <textarea
                  style={{ height: 65 }}
                  value={product.name}
                  name="name"
                  onChange={this.handleChange}
                  id="theName"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="thePrice">Product Price</label>
                <input
                  value={product.price}
                  name="price"
                  onChange={this.handleChange}
                  id="thePrice"
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="theCategory">Product Category</label>
                <select
                  value={product.category}
                  name="category"
                  onChange={this.handleChange}
                  id="theCategory"
                  type="text"
                  className="form-control"
                >
                  {categoriesOption.map(cate => (
                    <option>{cate}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="theSubject">Product Subject</label>
                <select
                  value={product.subject}
                  name="subject"
                  onChange={this.handleChange}
                  id="theSubject"
                  type="text"
                  className="form-control"
                >
                  {subjectsOption.map(sub => (
                    <option>{sub}</option>
                  ))}
                </select>
              </div>

              <div class="form-group">
                <label for="theBrand" style={{ float: "left" }}>
                  Product Brand
                </label>
                <select
                  value={product.brand}
                  name="brand"
                  onChange={this.handleChange}
                  class="form-control"
                  id="theBrand"
                >
                  {brandsOption.map(brand => (
                    <option>{brand.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="theDescription">Description</label>
                <textarea
                  style={{ height: 160 }}
                  value={product.description}
                  name="description"
                  onChange={this.handleChange}
                  id="theDescription"
                  type="text"
                  className="form-control"
                />
              </div>

              <button className="btn btn-primary" style={{ width: 125 }}>
                Confirm
              </button>
            </form>

            <div style={{ marginTop: 5, marginBottom: 200 }}>
              <button
                style={{ width: 125 }}
                className="btn btn-secondary "
                onClick={this.handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
