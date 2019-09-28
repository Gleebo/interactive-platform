import React, { useEffect } from "react";
//import RxTestingForm from "../back-end-forms-testing/rxtesting";
import TestForm from "../back-end-forms-testing/TestForm";
import LazyLoad from "../back-end-forms-testing/lazyloadTest";
export default function App() {
  async function get() {
    const result = await fetch(
      "https://us-central1-kids-islands.cloudfunctions.net/getProducts?id=none"
    );
    return result.json();
  }
  useEffect(() => {
    get().then(console.log);
  });
  return <TestForm />;
}
