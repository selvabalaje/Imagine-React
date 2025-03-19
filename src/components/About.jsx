import React from "react";
import "./About.css";
import aboutImage from "../assets/abo.png"

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Us</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Illustration" />
        </div>
        <div className="about-content">
          <h3>Our Mission</h3>
          <p>
            Eos cumque optio dolores excepturi rerum temporibus magni recusandae
            eveniet, totam omnis consectetur maxime quibusdam expedita dolorem
            dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus!
          </p>
          <ul>
            <li>✔ Labore enim quasi at modi</li>
            <li>✔ Ad at tempore</li>
            <li>✔ Labore quaerat esse</li>
          </ul>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
