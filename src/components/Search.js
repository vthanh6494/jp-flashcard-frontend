import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  autoplay: true,
  arrows: false,
  swipe: false,
  fade: true,
  speed: 3000,
  autoplaySpeed: 6000,
  pauseOnHover: false,
};

function Search() {
  return (
    <div className="search-container">
      <div className="background">
        <Slider {...settings}>
          <div className="child-background"><img src={require('../images/background/fuji-aki.jpg')} alt="fuji-aki"/></div>
          <div className="child-background"><img src={require('../images/background/fuji.jpg')} alt="fuji"/></div>
          <div className="child-background"><img src={require('../images/background/sakura-hirosaki.jpg')} alt="sakura-hirosaki"/></div>
          <div className="child-background"><img src={require('../images/background/koinobori.jpg')} alt="koinobori"/></div>
          <div className="child-background"><img src={require('../images/background/torii-gate.jpg')} alt="torii-gate"/></div>
        </Slider>
      </div>
      <h1>Search page</h1>
    </div>
  );
}

export default Search;
