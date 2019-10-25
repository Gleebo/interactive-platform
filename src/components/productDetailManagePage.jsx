import React, { Component } from "react";
import axios from "axios";
import { editProduct, getCategoriesAndSubjects } from "../firebase";

class ProductDetailManagePage extends Component {
  state = {
    product: {
      id: "",
      name: "",
      price: "",
      brand: "",
      description: "",
      imgUrl: "",
      category: "",
      subject: ""
    },
    brandsOption: [],
    categoriesOption: [],
    subjectsOption: []
  };

  async componentWillMount() {
    const product = { ...this.state.product };
    product.subject = this.props.location.state.product.subject;
    product.category = this.props.location.state.product.category;
    product.id = this.props.location.state.product.id;
    product.name = this.props.location.state.product.name;
    product.imgUrl = this.props.location.state.product.imgUrl;
    product.brand = this.props.location.state.product.brand;
    product.price = this.props.location.state.product.price;
    product.description = this.props.location.state.product.description;
    this.setState({ product });

    const { data: brandsOption } = await axios.get(
      "https://us-central1-kids-islands.cloudfunctions.net/getBrands"
    );
    this.setState({ brandsOption });

    const cNs = await getCategoriesAndSubjects();
    this.setState({ categoriesOption: cNs.categories });
    this.setState({ subjectsOption: cNs.subjects });
  }

  handleCancel = () => {
    window.open("/adminManageHome", "_self");
  };

  handleChange = e => {
    const product = { ...this.state.product };
    product[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ product });
  };

  handleUpdate = async e => {
    e.preventDefault();

    const res = await editProduct(this.state.product.id, this.state.product);
    if (res instanceof Error) {
      window.alert("error happens");
    } else {
      window.alert("update successfully");
      window.open("/adminManageHome", "_self");
    }
  };

  render() {
    const { product, brandsOption, categoriesOption, subjectsOption } = {
      ...this.state
    };

    return (
      <div>
        <div className="d-flex justify-content-center">
          <div style={{ marginTop: 100, width: 400 }}>
            <div className="text-center" style={{ marginBottom: 14 }}>
              <img
                src={product.imgUrl}
                alt="..."
                style={{ height: 240, width: 240 }}
              ></img>
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

              <div class="form-group">
                <label for="theCategory" style={{ float: "left" }}>
                  Product Category
                </label>
                <select
                  value={product.category}
                  name="category"
                  onChange={this.handleChange}
                  class="form-control"
                  id="theCategory"
                >
                  {categoriesOption.map(cate => (
                    <option>{cate}</option>
                  ))}
                </select>
              </div>

              <div class="form-group">
                <label for="theSubject" style={{ float: "left" }}>
                  Product Subject
                </label>
                <select
                  value={product.subject}
                  name="subject"
                  onChange={this.handleChange}
                  class="form-control"
                  id="theSubject"
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

              <button className="btn btn-primary">Confirm Update</button>
            </form>

            <div style={{ marginTop: 5, marginBottom: 200 }}>
              <button
                style={{ width: 139 }}
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

export default ProductDetailManagePage;
