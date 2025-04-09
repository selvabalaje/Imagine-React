import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Feed from "./components/Feed";
import About from "./components/About";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import BlogPosts from "./components/BlogPosts";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App container-fluid px-0">
      <Navbar/>
      <Hero/>
      <Features/>
      <Feed/>
      <About/>
      <Team/>
      <Testimonials/>
      <BlogPosts/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default App;
