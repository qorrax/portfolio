



import React, { useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FiSun } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";
// import { BiMenu } from "react-icons/bi";

const NavBar = ({toggleTheme, darkMode}) => {
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
          

          <button onClick={toggleTheme} className='p-4'>
            {darkMode ? <FiSun size={20} /> : <MdOutlineNightlight size={20} />}


          </button>

          
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





