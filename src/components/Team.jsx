import React from "react";
import "./Team.css";
import image1 from "../assets/team1.jpg";
import image2 from "../assets/team2.jpg";
import image3 from "../assets/team3.jpg";
import image4 from "../assets/team4.jpg";
import image5 from "../assets/team5.jpg";
import image6 from "../assets/team6.jpg";


const Team = () => {
const teamMembers = [
  {
    name: "Cloe Marena",
    position: "PRESIDENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
    image: image1,
  },
  {
    name: "John Rooster",
    position: "MARKETING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
    image: image2,
  },
  {
    name: "Will Turner",
    position: "MARKETING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
    image: image3,
  },
  {
      name: "Cloe Marena",
      position: "PRESIDENT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
      image: image4,
    },
    {
      name: "John Rooster",
      position: "MARKETING",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
      image: image5,
    },
    {
      name: "Will Turner",
      position: "MARKETING",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
      image: image6,
    },

  ];
  
  const firstHalf = teamMembers.slice(0, teamMembers.length / 2);
  const secondHalf = teamMembers.slice(teamMembers.length / 2);
  
  return (
    <div className="team-section">
      <h1>Our Team</h1>
      <div className="team-grid">
        {firstHalf.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p className="team-position">{member.role}</p>
            <p className="team-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
      <div className="team-grid">
        {secondHalf.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p className="team-position">{member.role}</p>
            <p className="team-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;