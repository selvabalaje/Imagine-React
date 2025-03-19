import React from "react";
import "./BlogPosts.css";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

const BlogPosts = () => {
  const blogData = [
    {
      id: 1,
      image: blog1,
      title: "Make Your Business More Profitable",
      author: "Ham Brook",
      date: "Jan 18, 2019",
      category: "News",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    },
    {
      id: 2,
      image: blog2,
      title: "Make Your Business More Profitable",
      author: "James Phelps",
      date: "Jan 18, 2019",
      category: "News",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    },
    {
      id: 3,
      image: blog3,
      title: "Make Your Business More Profitable",
      author: "James Phelps",
      date: "Jan 18, 2019",
      category: "News",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    },
  ];

  return (
    <section className="blog-section">
      <h2 className="section-title">Blog Posts</h2>
      <div className="blog-container">
        {blogData.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-meta">
              {post.author} • {post.date} • <span className="blog-category">{post.category}</span>
            </p>
            <p className="blog-description">{post.description}</p>
            <a href="#" className="blog-link">Continue Reading...</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
