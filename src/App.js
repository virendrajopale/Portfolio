import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "./Context/theme-context";

function App() {
  const location = useLocation();
  return (
    <div className=" ">
    <ThemeProvider>

      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
    </div>
  );
}

export default App;
