import React, { Component } from "react";
import OneProduct from "./oneProduct.jsx";
import axios from "axios";
import { getAllProducts } from "./firebase";

class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        price: 30,
        name: "productName",
        imgUrl: "https://picsum.photos/200"
      },
      {
        id: 1,
        price: 30,
        name: "productName",
        imgUrl: "https://picsum.photos/201"
      },
      {
        id: 1,
        price: 30,
        name: "productName",
        imgUrl: "https://picsum.photos/202"
      },
      {
        id: 1,
        price: 30,
        name: "productName",
        imgUrl: "https://picsum.photos/203"
      },
      {
        id: 1,
        price: 30,
        name: "productName",
        imgUrl: "https://picsum.photos/204"
      },
      {
        id: 1,
        price: 30,
        name: "productName",
        imgUrl: "https://picsum.photos/205"
      },
      {
        id: 1,
        price: 30,
        name: "productName",
        imgUrl: "https://picsum.photos/206"
      },
      {
        id: 1,
        price: 30,
        name: "productName",
        imgUrl: "https://picsum.photos/207"
      },
      {
        id: 1,
        price: 30,
        name: "productName",
        imgUrl: "https://picsum.photos/208"
      },
      {
        id: 1,
        price: 30,
        name: "productName",
        imgUrl: "https://picsum.photos/209"
      }
    ]
  };

  /* Const homePageProductsUrl = "https://us-central1-kids-islands.cloudfunctions.net/getProductsList"; */
  /*componentDidMount() {
    const promise = axios.get(
      "https://us-central1-kids-islands.cloudfunctions.net/getProductsList"
    );
    console.log(promise);
  }*/
  async componentDidMount() {
    const newArray = getAllProducts(); //getAllProducts() gives back a Promise;
    const result = await newArray; // use await in async function to convert Promise to real obejct(array here)
    this.setState({ products: result });
  }

  render() {
    return (
      <main className="container">
        <div className="row justify-content-center">
          {this.state.products.map(product => OneProduct(product))}
        </div>
        <div className="viewAllText">
          <a href="#">View all ></a>
        </div>
      </main>
    );
  }
}

export default ProductList;
