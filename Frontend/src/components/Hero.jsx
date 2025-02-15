import React from "react";
import HeroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    
    <div className="hero-container">
      <div className="hero">
        <img src={HeroImage} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h2 className="welcome">Welcome, witches, wizards, and Muggles alike! </h2>
         
         
        
        </div>
      </div>
    </div>
  );
};

export default Hero;