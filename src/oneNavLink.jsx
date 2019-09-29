import React from "react";
import { Link } from "react-router-dom";

const OneNavLink = brand => {
  const Name = brand.name;
  return (
    <Link
      to={{
        pathname: "/brandIntro",
        state: { name: Name } //how to attach data using Link to jump to new page
      }}
    >
      {Name}
      <br></br>
    </Link>
  );
};

export default OneNavLink;
