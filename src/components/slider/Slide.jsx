import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";
import CatCard from "../catCard/CatCard";
import { cards } from "../../data.js";
const Slide = (slidesToShow, arrowsScroll, children) => {
  return (
    <div className={"slide"}>
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};
export default Slide;
