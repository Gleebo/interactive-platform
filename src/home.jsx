import React from "react";
import SearchBar from "./searchBar.jsx";
import BrandList from "./brandList.jsx";
import SubjectList from "./subjectList.jsx";
import PropertyList from "./propertyList.jsx";
import ProductList from "./productList.jsx";

const Home = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <ProductList />
      <div className="row justify-content-center">
        <BrandList />
        <SubjectList />
        <PropertyList />
      </div>
    </React.Fragment>
  );
};

export default Home;
