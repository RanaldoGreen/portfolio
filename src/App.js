import React, { useEffect } from 'react';
import './assets/css/main.css';
import Header from './components/Header';
import Banner from './components/Banner';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    // Ensure your scripts are executed after the component mounts
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL + '/js/main.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="landing is-preload">
      <Header />
      <Banner />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
