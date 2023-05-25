import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    {/* Left Side */}
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Where tradition meets innovation.</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        A Culinary Journey Through Japan Indulge your senses in the captivating
        flavors of authentic Japanese cuisine at Gericht. Step into our
        restaurant and embark on a culinary adventure that will transport you to
        the vibrant streets of Japan. Discover the true essence
        of Japanese gastronomy at Gericht.{" "}
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    {/* Right Side */}
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
