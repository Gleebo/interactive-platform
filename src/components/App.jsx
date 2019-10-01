import React, { useEffect, useState } from "react";
//import RxTestingForm from "../back-end-forms-testing/rxtesting";
import TestForm from "../back-end-forms-testing/TestForm";
import { SupportRequestForm } from "../back-end-forms-testing/SupportRequestForm";
import { createOrder, getOrdersByUser, cancelOrder } from "../firebase";

export default function App() {
  return <SupportRequestForm />;
}
