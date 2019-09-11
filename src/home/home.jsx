import React, { Component } from "react";
import SearchBar from "./searchBar";
import BrandList from "./brandList";
import SubjectList from "./subjectList";
import PropertyList from "./propertyList";

const Home = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <div class="row justify-content-center">
        <BrandList />
        <SubjectList />
        <PropertyList />
      </div>
    </React.Fragment>
  );
};

export default Home;
