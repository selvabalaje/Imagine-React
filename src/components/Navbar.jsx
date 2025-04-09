import React, { useState } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar fixed-top">
      <div className="container">
        <a className="logo" href="#home">
          colorlib.<span>IMAGINE</span>
        </a>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a onClick={() => scrollToSection("home")}>Home</a></li>
          <li><a onClick={() => scrollToSection("features")}>Features</a></li>
          <li><a onClick={() => scrollToSection("about")}>About Us</a></li>
          <li><a onClick={() => scrollToSection("testimonials")}>Testimonials</a></li>
          <li><a onClick={() => scrollToSection("blog")}>Blog</a></li>
          <li><a onClick={() => scrollToSection("contact")}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
