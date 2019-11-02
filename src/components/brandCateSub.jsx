import React, { useEffect, useState } from "react";
import { getCategoriesAndSubjects } from "../firebase";
import axios from "axios";
import { Link } from "react-router-dom";
import { async } from "q";

const BrandCateSub = () => {
  const [brands, setBrands] = useState([]);
  const [cate, setCate] = useState([]);
  const [sub, setSub] = useState([]);

  useEffect(() => {
    async function getBrands() {
      const brandList = await axios.get(
        "https://us-central1-kids-islands.cloudfunctions.net/getBrands"
      );
      setBrands(brandList.data);
    }
    async function getcNs() {
      const cNs = await getCategoriesAndSubjects();
      setCate(cNs.categories);
      setSub(cNs.subjects);
    }
    getcNs();
    getBrands();
  }, []);

  const handleCateLinkGo = cate => {
    sessionStorage.setItem("wordToSearch", "");
    sessionStorage.setItem("kind", "cate");
    sessionStorage.setItem("keyOfKind", cate);
  };

  const handleSubLinkGo = sub => {
    sessionStorage.setItem("wordToSearch", "");
    sessionStorage.setItem("kind", "sub");
    sessionStorage.setItem("keyOfKind", sub);
  };

  return (
    <div>
      <div className="container border" style={{ marginTop: 25 }}>
        <h3>Brands:</h3>
        {brands.map(brand => (
          <span>
            <Link
              to={{
                pathname: "/brandIntro",
                state: {
                  name: brand.name,
                  year: brand.year,
                  country: brand.country,
                  description: brand.description,
                  imgUrl: brand.imgUrl
                }
              }}
            >
              {brand.name}
            </Link>
            <span> / </span>
          </span>
        ))}
      </div>
      <div className="container border" style={{ marginTop: 25 }}>
        <h3>Categories:</h3>
        {cate.map(ca => (
          <span>
            <a href="/resultPage" onClick={() => handleCateLinkGo(ca)}>
              {ca}
            </a>
            <span> / </span>
          </span>
        ))}
      </div>
      <div className="container border" style={{ marginTop: 25 }}>
        <h3>Subjects: </h3>
        {sub.map(su => (
          <span>
            <a href="/resultPage" onClick={() => handleSubLinkGo(su)}>
              {su}
            </a>
            <span> / </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandCateSub;
