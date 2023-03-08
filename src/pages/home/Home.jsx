import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slider from "../../components/slider/Slide";
import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slider>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slider>
    </div>
  );
};

export default Home;
