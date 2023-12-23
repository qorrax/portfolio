

import React, { useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FiSun } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";
import { BiMenu } from "react-icons/bi";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [darkmode, setDarkmode] = useState(false);

   


  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
        <Link to='/' className='hover:text-white'>Abdull</Link>
      </h1>
      <nav>
        <ul className='hidden md:flex'>
          
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



// import React from "react";
// import { FiSun } from "react-icons/fi";
// import { MdOutlineNightlight } from "react-icons/md";
// import { BiMenu } from "react-icons/bi";
// import { AiOutlineClose } from "react-icons/ai";

// const NavBar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
//   return (
//     <div className='px-0 2xl:px-40'>
//       <div className='w-full items-center justify-between py-4 px-4 md:px-12'>
//         <div className='flex items-center justify-between w-full'>
//           <a
//             href='/'
//             className='text-2xl font-bold text-blue-500 cursor-pointer '
//           >
//             CodeWave
//           </a>
//           <ul className='hidden md:flex gap-10 text-lg text-slate-800 dark:text-gray-200'>
//             <li className='cursor-pointer hover:text-blue-500'>
//               <a href='#home'>Home</a>
//             </li>
//             <li className='cursor-pointer hover:text-blue-500'>
//               <a href='#about'>About</a>
//             </li>
//             <li className='cursor-pointer hover:text-blue-500'>
//               <a href='#projects'>Projects</a>
//             </li>
//           </ul>
//           <button onClick={toggleTheme} className='p-2'>
//             {darkMode ? (
//               <FiSun size={24} color={"white"} />
//             ) : (
//               <MdOutlineNightlight size={24} color={"gray"} />
//             )}
//           </button>

//           <div className='md:hidden'>
//             <button
//               type='button'
//               className=''
//               aria-controls=',onile-menu'
//               aria-expanded='false'
//               onClick={toggleMenu}
//             >
//               <BiMenu
//                 size={26}
//                 className={`${
//                   isOpen ? "hidden" : "block"
//                 } text-gray-700 dark:text-gray-300`}
//               />

//               <AiOutlineClose
//                 size={26}
//                 className={`${
//                   isOpen ? "block" : "hidden"
//                 } h-6 w-6 dark:text-gray-400`}
//               />
//             </button>
//           </div>
//         </div>
//         {/* Mobile Menu */}
//         <div
//           className={`${isOpen ? "block pt-4" : "hidden"} md:hidden`}
//           id='mobile-menu'
//         >
//           <div className='flex flex-col gap-4 text-md text-gray-700 dark:text-neutral-200'>
//             <a href='#home' onClick={toggleMenu} className='cursor-pointer'>
//               Home
//             </a>
//             <a href='#about' onClick={toggleMenu} className='cursor-pointer'>
//               About
//             </a>
//             <a href='#projects' onClick={toggleMenu} className='cursor-pointer'>
//               Projects
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;


