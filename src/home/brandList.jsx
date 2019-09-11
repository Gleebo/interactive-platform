import React, { Component } from "react";

const BrandList = () => {
  return (
    <div class="list-group m-3">
      <button
        type="button"
        class="list-group-item list-group-item-action active"
      >
        Brand List
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Nike
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Li Ning
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Addidas
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Vans
      </button>
    </div>
  );
};

export default BrandList;
