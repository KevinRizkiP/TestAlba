import React from "react";
import About from "../components/layout/About";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";
import Portofolio from "../components/layout/Portofolio";
import Service from "../components/layout/Service";
import Testimonials from "../components/layout/Testimonials";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Service />
      <Portofolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
