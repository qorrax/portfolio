import React from 'react';
import Typed from 'react-typed';
import { HiArrowNarrowRight } from 'react-icons/hi';
const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] 3xl font-bold p-2'>
          Abdulkadir Mohamed
        </p>
        <h1 className='md:text-2xl sm:text-2xl text-3xl font-bold md:py-6'>
          Sofware Developer
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>
            Efficient, & Creative
          </p>
          <Typed
          className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Problem Solver', 'Developer', 'Engineer']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'> I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
          </p>
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
