import React from "react";
import HomeAboutUs from "./HomeAboutUs";
import HomeHeader from "./HomeHeader";
import HomeMainSection from "./HomeMainSection";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeThreeColumns from "./HomeThreeColumns";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMainSection />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeAboutUs />
    </>
  );
};

export default Home;
