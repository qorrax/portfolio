import React from 'react';
import Typed from 'react-typed';
import { HiArrowNarrowRight } from 'react-icons/hi';
const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          Abdulkadir Mohamed
        </p>
        <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6'>
          Sofware Developer
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, Efficient, & Reliable
          </p>
          <Typed
          className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Problem Solver', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button> */}

        <button
              // onClick={toggleProjects}
              className='text-white group border-2 w-[200px] rounded-md font-medium my-6 mx-auto py-3 pl-6 flex items-center hover:bg-pink-600 hover:border-pink-600'
            >
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
      </div>
    </div>
  );
};



export default Hero;
