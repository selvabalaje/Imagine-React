import React from "react";
import "./Navbar.css";

const Navbar = () => {

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="navbar">
      <div className="logo">
        colorlib. <span>IMAGINE</span>
      </div>
      <ul className="nav-links">
        <li className="active">Home</li>
        <li>
  <a href="#features" onClick={scrollToFeatures} className="nav-link">
    Features
  </a>
</li>
        <li>About Us</li>
        <li>Testimonials</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
