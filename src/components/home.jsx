import React from "react";
import SearchBar from "./searchBar.jsx";
import ProductList from "./productList.jsx";
import Carousel from "./carousel.jsx";

import WelcomeSection from "./welcomeSection.jsx";
import ThreeCategory from "./threeCategory.jsx";
import TwoColSection from "./twoColSection.jsx";

import Footer from "./footer.jsx";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <Carousel />
      <ProductList />
      <WelcomeSection />
      <ThreeCategory />
      <TwoColSection />
      {/*<MeetTheTeamTitle />
      <MeetTheTeamCard />  */}
      <Footer />
    </div>
  );
};

export default Home;
