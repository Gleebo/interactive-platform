import React from "react";
import { Link } from "react-router-dom";

const OneNavLink = brand => {
  const Name = brand.name;
  const Year = brand.year;
  const Country = brand.country;
  const Description = brand.description;
  const ImgUrl = brand.imgUrl;
  return (
    <Link
      to={{
        pathname: "/brandIntro",
        state: {
          name: Name,
          year: Year,
          country: Country,
          description: Description,
          imgUrl: ImgUrl
        } //how to attach data using Link to jump to new page
      }}
    >
      {Name}
      <br></br>
    </Link>
  );
};

export default OneNavLink;
