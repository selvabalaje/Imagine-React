import React, { useState } from "react";
import "./Testimonials.css"; 
import profileImage1 from "../assets/team3.jpg"; 
import profileImage2 from "../assets/team4.jpg"; 

const testimonialsData = [
  {
    id: 1,
    name: "John Smith",
    image: profileImage1,
    text: "“Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”"
  },
  {
    id: 2,
    name: "Robert Aguilar",
    image: profileImage2,
    text: "“Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-content">
        <img
          src={testimonialsData[currentTestimonial].image}
          alt={testimonialsData[currentTestimonial].name}
          className="testimonial-img"
        />
        <p className="testimonial-text">{testimonialsData[currentTestimonial].text}</p>
        <h4 className="testimonial-name">{testimonialsData[currentTestimonial].name}</h4>
      </div>
      <div className="testimonial-dots">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentTestimonial ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
