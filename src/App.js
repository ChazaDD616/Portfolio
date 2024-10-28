import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import GlobalStyles from './styles/GlobalStyles.js';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <div className={darkMode ? 'dark-mode' : ''}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
