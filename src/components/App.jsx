import React, { useEffect, useState } from "react";
//import RxTestingForm from "../back-end-forms-testing/rxtesting";
import TestForm from "../back-end-forms-testing/TestForm";
import LazyLoad from "../back-end-forms-testing/lazyloadTest";
import { createOrder, getOrdersByUser, cancelOrder } from "../firebase";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function get() {
    const result = await fetch(
      "https://us-central1-kids-islands.cloudfunctions.net/getProducts?id=none"
    );
    return result.json();
  }

  useEffect(() => {
    createOrder({
      userId: "111111111",
      products: [1, 2, 3, 4, 5],
      time: "2019-09-30 12:23:33",
      address: "ggqiergqueibgpe",
      status: "on process"
    }).then(function() {
      getOrdersByUser("111111111")
        .then(orders => orders[0].id)
        .then(function(id) {
          cancelOrder(id).then();
        });
    });
  });
  return <div></div>;
}
