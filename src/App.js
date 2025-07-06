import './App.css';
import React from 'react';
import './styles/style.css';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Menu from './components/Menu.js';
import About from './components/About.js';
import Contact from './components/Contact.js';


function App() {
  return (
    <>
    <Header />
    <Hero />
    <Menu />
    <About />
    <Contact />
    </>
  );
}

export default App;