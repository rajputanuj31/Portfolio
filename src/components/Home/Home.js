import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Achievements from '../Achievements/Achievements';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
