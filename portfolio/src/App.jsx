
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './Components/Nav/NavBar';
// import  About from './Components/About';
// import Skills from './Components/Skills';
// import Contact from './Components/Contact';
// import Projects from './Components/Projects'; 
// import Footer from './Components/Footer'; 

// const App = () => {
//   return (
//     <div>
      
//       <NavBar/>
      
//       <Routes>
//         <Route path="/" element={<About />} />
//         <Route path="/projects" element={<Projects />} /> {/* Correct the route path case */}
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/contact" element={<Contact />} />
        
//         {/* Add a catch-all route */}
//         <Route path="*" element={<About />} />
//       </Routes>
//       <Footer /> Include the Footer component
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Nav/NavBar';
import Hero from './Components/Hero'; // Import the Header component
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import ScrollToTop from './Components/Nav/ScrollToTop';
// import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        

        {/* Add a catch-all route */}
        <Route path="*" element={<About />} />
      </Routes>
     <Hero /> 
      
      {/* <Footer /> Include the Footer component */}
    </div>
  );
};

export default App;

