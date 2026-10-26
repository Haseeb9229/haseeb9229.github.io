import React from "react";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";

function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
