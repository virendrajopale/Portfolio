
import React from 'react'

import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';



function App() {

  return (
    <div className=''>

      <Navbar />
      <Main />
      <Portfolio />
      <Skills />
      <About />
      <Contact />


    </div>
  );
}

export default App;
