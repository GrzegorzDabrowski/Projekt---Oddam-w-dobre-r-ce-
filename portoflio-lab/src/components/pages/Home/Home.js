import React from "react";
import HomeAboutUs from "./HomeAboutUs";
import HomeContact from "./HomeContact";
import HomeHeader from "./HomeHeader";
import HomeMainSection from "./HomeMainSection";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeWhoWeHelp from "./HomeWhoWeHelp";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMainSection />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeAboutUs />
      <HomeWhoWeHelp />
      <HomeContact />
    </>
  );
};

export default Home;
