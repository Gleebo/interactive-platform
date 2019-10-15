import React, { Component } from "react";

class ProductDetailManagePage extends Component {
  state = {
    product: {
      name: "",
      price: "",
      brand: "",
      description: "",
      imgUrl: ""
    }
  };

  componentWillMount() {
    const product = { ...this.state.product };
    product.name = this.props.location.state.product.name;
    product.imgUrl = this.props.location.state.product.imgUrl;
    product.brand = this.props.location.state.product.brand;
    product.price = this.props.location.state.product.price;
    product.description = this.props.location.state.product.description;
    this.setState({ product });
  }

  render() {
    const { product } = { ...this.state };

    return (
      <div>
        <div>{product.name}</div>
        <div>{product.price}</div>
      </div>
    );
  }
}

export default ProductDetailManagePage;
