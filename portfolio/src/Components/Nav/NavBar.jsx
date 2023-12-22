// import { Navbar, Container, Nav } from 'react-bootstrap';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {

    



// const [expanded, setExpanded] = useState(false);

//   const handleNavToggle = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <>
//       <Navbar
//         bg="dark"
//         data-bs-theme="dark"
//         expand="lg"
//         expanded={expanded}
//         className="sticky-top" // Make the Navbar sticky
//       >
//         <Container>
//           <Navbar.Brand href="#home">Abdull Dev</Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls="basic-navbar-nav"
//             onClick={handleNavToggle}
//           />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ml-auto mr-20"> {/* Use "ml-auto" to move the Nav elements to the right */}
//               <Nav.Link as={Link} to="/About">
//                 About
//               </Nav.Link>
//               <Nav.Link as={Link} to="/Projects">
//                 Projects
//               </Nav.Link>
//               <Nav.Link as={Link} to="/skills">
//                 Skills
//               </Nav.Link>
//               <Nav.Link as={Link} to="/contact">
//                 Contact
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };
// export default NavBar


// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import {Link } from 'react-router-dom';

// const NavBar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (


    
//     <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
//       <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
//       <nav>
//       <ul className='hidden md:flex'>
//         <li className='p-4'>Home</li>
//         <li className='p-4'>About</li>
//         <li className='p-4'>Skills</li>
//         <li className='p-4'>Projects</li>
//         <li className='p-4'>Contact</li>
//       </ul>
//       <div onClick={handleNav} className='block md:hidden'>
//           {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
//       </div>
//       <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]     ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
//         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Abdull</h1>
//           <li className='p-4 border-b border-gray-600'>Home</li>
//           <li className='p-4 border-b border-gray-600'>About</li>
//           <li className='p-4 border-b border-gray-600'>Skills</li>
//           <li className='p-4 border-b border-gray-600'>Projects</li>
//           <li className='p-4'>Contact</li>
          
        
//       </ul>

//       </nav>
//     </div>
    
  
//   );
// };

// export default NavBar;

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
        <Link to='/' className='hover:text-white'>Abdull</Link>
      </h1>
      <nav>
        <ul className='hidden md:flex'>
          <li className='p-4'><Link to='/' className='hover:text-white'>Home</Link></li>
          <li className='p-4'><Link to='/about' className='hover:text-white'>About</Link></li>
          <li className='p-4'><Link to='/skills' className='hover:text-white'>Skills</Link></li>
          <li className='p-4'><Link to='/projects' className='hover:text-white'>Projects</Link></li>
          <li className='p-4'><Link to='/contact' className='hover:text-white'>Contact</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Abdull</h1>
          <li className='p-4 border-b border-gray-600'><Link to='/' className='hover:text-white'>Home</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to='/about' className='hover:text-white'>About</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to='/skills' className='hover:text-white'>Skills</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to='/projects' className='hover:text-white'>Projects</Link></li>
          <li className='p-4'><Link to='/contact' className='hover:text-white'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;


