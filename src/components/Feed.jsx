import React from "react";
import "./Feed.css";
import image1 from "../assets/feed.png"; 
import image2 from "../assets/feed1.png"; 

const Feed = () => {
  return (
    <section className="feed-section">
      <div className="feed-container">
        <div className="feed-image">
          <img src={image1} alt="Feedback Illustration 1" />
        </div>
        <div className="feed-content">
          <h2>Communicate and gather feedback</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            neque nisi architecto autem molestias corrupti officia veniam.
          </p>
          <div className="testimonial-card">
            <div className="testimonial-info">
              <h4>Kimberly Gush</h4>
              <p>Co-Founder, XYZ Inc.</p>
              <blockquote>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ducimus vitae ipsa asperiores inventore aperiam iure?"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="feed-container reverse">
        <div className="feed-content">
          <h2>Communicate and gather feedback</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            neque nisi architecto autem molestias corrupti officia veniam.
          </p>
          <div className="testimonial-card">
        
            <div className="testimonial-info">
              <h4>Grey Simpson</h4>
              <p>Co-Founder, XYZ Inc.</p>
              <blockquote>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ducimus vitae ipsa asperiores inventore aperiam iure?"
              </blockquote>
            </div>
          </div>
        </div>
        <div className="feed-image">
          <img src={image2} alt="Feedback Illustration 2" />
        </div>
      </div>
        <div className="feed-container">
        <div className="feed-image">
          <img src={image1} alt="Feedback Illustration 1" />
        </div>
        <div className="feed-content">
          <h2>Communicate and gather feedback</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            neque nisi architecto autem molestias corrupti officia veniam.
          </p>
          <div className="testimonial-card">
          
            <div className="testimonial-info">
              <h4>Kimberly Gush</h4>
              <p>Co-Founder, XYZ Inc.</p>
              <blockquote>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ducimus vitae ipsa asperiores inventore aperiam iure?"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="feed-container reverse">
        <div className="feed-content">
          <h2>Communicate and gather feedback</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            neque nisi architecto autem molestias corrupti officia veniam.
          </p>
          <div className="testimonial-card">
           
            <div className="testimonial-info">
              <h4>Grey Simpson</h4>
              <p>Co-Founder, XYZ Inc.</p>
              <blockquote>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ducimus vitae ipsa asperiores inventore aperiam iure?"
              </blockquote>
            </div>
          </div>
        </div>
        <div className="feed-image">
          <img src={image2} alt="Feedback Illustration 2" />
        </div>
      </div>

      
    </section>
  );
};

export default Feed;
