import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Publications from './components/Publication';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Hero />
      
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Publications />
      <Footer />
      <BackToTop />
      
    </ThemeProvider>
  );
};

export default App;
