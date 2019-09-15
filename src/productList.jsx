import React, { Component } from "react";
import OneProduct from "./oneProduct.jsx";
import axios from "axios";

class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "theOne",
        price: "AU$18",
        desciption: "this is the Product 1",
        imageSrc: "https://picsum.photos/404"
      },
      {
        id: 2,
        name: "theTwo",
        price: "AU$19",
        desciption: "this is the Product 2",
        imageSrc: "https://picsum.photos/403"
      },
      {
        id: 3,
        name: "theThree",
        price: "AU$20",
        desciption: "this is the Product 3",
        imageSrc: "https://picsum.photos/402"
      },
      {
        id: 4,
        name: "theFour",
        price: "AU$21",
        desciption: "this is the Product 4",
        imageSrc: "https://picsum.photos/401"
      },
      {
        id: 5,
        name: "theFive",
        price: "AU$21",
        desciption: "this is the Product 5",
        imageSrc: "https://picsum.photos/400"
      },
      {
        id: 6,
        name: "theSix",
        price: "AU$21",
        desciption: "this is the Product 6",
        imageSrc: "https://picsum.photos/309"
      },
      {
        id: 7,
        name: "theSeven",
        price: "AU$6",
        desciption: "this is the Product 7",
        imageSrc: "https://picsum.photos/308"
      },
      {
        id: 8,
        name: "theEight",
        price: "AU$34",
        desciption: "this is the Product 8",
        imageSrc: "https://picsum.photos/307"
      },
      {
        id: 9,
        name: "theNine",
        price: "AU$68",
        desciption: "this is the Product 9",
        imageSrc: "https://picsum.photos/306"
      },

      {
        id: 10,
        name: "theTen",
        price: "AU$23",
        desciption: "this is the Product 10",
        imageSrc: "https://picsum.photos/303"
      }
    ]
  };

  /* 
    const homePageProductsUrl = "https://jsonplaceholder.typicode.com/posts";
    async componentDidMount() {
    const { data:products } = await axios.get(homePageProductsUrl);
    this.setState({ products });
  }     */

  render() {
    return (
      <div className="row justify-content-center">
        {this.state.products.map(product => OneProduct(product))}
      </div>
    );
  }
}

export default ProductList;
