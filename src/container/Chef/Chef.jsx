
import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">

    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Welcome to Gericht, where culinary artistry meets impeccable craftsmanship .</p>
        </div>
        <p className="p__opensans"> As the head chef, I am honored to present a menu that celebrates the authentic flavors of Japan while embracing innovation. Each dish is a reflection of our commitment to excellence, from the intricately rolled sushi to the sizzling teppanyaki. Our team of passionate chefs is dedicated to taking you on a culinary journey that harmonizes tradition and creativity. We invite you to savor every bite and immerse yourself in the art of Japanese cuisine. </p>
      </div>

      <div className="app__chef-sign">
        <p>Chef Uzumaki</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
    
  </div>
);

export default Chef;