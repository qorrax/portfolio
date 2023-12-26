


import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Nav/NavBar';
import Hero from './Components/Hero'; // Import the Header component
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import ScrollToTop from './Components/Nav/ScrollToTop';
import Footer from './Components/Footer';

const App = () => {

  const [darkMode, setDarkMode] = useState(true);

  const toggletheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div>
      <ScrollToTop />
      <NavBar  
      toggletheme={toggletheme}
      darkMode={darkMode}
      />
      <Hero />
      <Projects />
      <Skills />
      <Contact />


      

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        

        {/* Add a catch-all route */}
        <Route path="*" element={<About />} />
      </Routes>


        
      
      <Footer /> Include the Footer component
    </div>
  );
};

export default App;


