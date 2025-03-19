import React from "react";
import "./Features.css";
import { FaSyncAlt, FaStore, FaShoppingBag, FaRedo, FaSmile, FaPlug } from "react-icons/fa";

const Features = () => {
  const featuresData = [
    {
      icon: <FaSyncAlt />,
      title: "Marketing Consulting",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    },
    {
      icon: <FaStore />,
      title: "Market Analysis",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    },
    {
      icon: <FaShoppingBag />,
      title: "Easy Purchase",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    },
  ];

  const additionalFeatures = [
    {
      icon: <FaRedo />,
      title: "Free Updates",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    },
    {
      icon: <FaSmile />,
      title: "100% Satisfied",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    },
    {
      icon: <FaPlug />,
      title: "Easy Plugin",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    },
  ];

  return (
    <section id="features" className="features">


      <h2>Imagine Features</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuga quos quaerat sapiente nam, id vero.
      </p>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#" className="learn-more">
              Learn More
            </a>
          </div>
        ))}
      </div>

      <div className="features-container">
        {additionalFeatures.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#" className="learn-more">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
