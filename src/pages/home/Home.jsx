import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slider from "../../components/slider/Slide";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slider />
    </div>
  );
};

export default Home;
