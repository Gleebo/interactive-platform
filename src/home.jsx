import React from "react";
import SearchBar from "./searchBar.jsx";
import BrandList from "./brandList.jsx";
import SubjectList from "./subjectList.jsx";
import PropertyList from "./propertyList.jsx";
import ProductList from "./productList.jsx";
import Carousel from "./carousel.jsx";
import Jumbotron from "./jumbotron.jsx";
import WelcomeSection from "./welcomeSection.jsx";
import ThreeCategory from "./threeCategory.jsx";
import TwoColSection from "./twoColSection.jsx";
import MeetTheTeamTitle from "./meetTheTeamTitle.jsx";
import MeetTheTeamCard from "./meetTheTeamCard.jsx";
import Footer from "./footer.jsx";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <Carousel />
      <WelcomeSection />
      <ThreeCategory />
      <TwoColSection />
      <MeetTheTeamTitle />
      <MeetTheTeamCard />
      <Footer />
    </div>
  );
};

export default Home;
