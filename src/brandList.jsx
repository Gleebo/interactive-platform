import React from "react";
import { NavLink } from "react-router-dom";

const BrandList = () => {
  return (
    <div className="list-group m-3">
      <button
        type="button"
        className="list-group-item list-group-item-action active"
      >
        Brand List
      </button>
      <NavLink
        type="button"
        className="list-group-item list-group-item-action"
        to="/brandIntro"
      >
        Nike
      </NavLink>
      <NavLink
        type="button"
        class="list-group-item list-group-item-action"
        to="/brandIntro"
      >
        Li Ning
      </NavLink>
      <NavLink
        type="button"
        class="list-group-item list-group-item-action"
        to="/brandIntro"
      >
        Adidas
      </NavLink>
      <NavLink
        type="button"
        class="list-group-item list-group-item-action"
        to="/brandIntro"
      >
        Vans
      </NavLink>
    </div>
  );
};

export default BrandList;
