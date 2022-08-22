import React from "react";
import "./slide.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sdata from "./image";
const Slide = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div className="slide-img">
        <Slider {...settings}>
          {Sdata.map((value) => {
            return (
              <div key={value.id}>
                <h3>{value.title}</h3>
                <img src={value.cover} alt="hello" />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export default Slide;
