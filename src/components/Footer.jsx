import React from "react";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-pinterest"></i></a>
      </div>
      <p className="copyright">
        Copyright &copy;2025 All rights reserved | This template is made with
        <span className="heart"> &#10084; </span> by
        <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer"> Colorlib</a>
      </p>
    </footer>
  );
};

export default Footer;
