import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './sections/Hero/Hero';
import AboutMe from './sections/AboutMe/AboutMe';
import Formation from './sections/Formation/Formation';
import Certificates from './sections/Certificates/Certificates';
import Experience from './sections/Experience/Experience';
import Portfolio from './sections/Portfolio/Portfolio';
import Testimonials from './sections/Testimonials/Testimonials';
import HealthTips from './sections/HealthTips/HealthTips';
import Contact from './sections/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Formation />
        <Certificates />
        <Experience />
        <Portfolio />
        <Testimonials />
        <HealthTips />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
