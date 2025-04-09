import React from "react";
import "./HeroSection.css";
import Graph from "../assets/gra.png";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>Make Your Business</h1>
        <h1>More Profitable</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={Graph} alt="Graph" />
      </div>
    </section>
  );
};

export default HeroSection;
