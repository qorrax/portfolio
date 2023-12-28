

// create a new component called Projects
// import the data from Data/Data.jsx file its outside of components folder
// i want to map through the data and display the data in the browser
// like  name, image, github, live


import React from 'react';
import tailwind from '../assets/tailwind.png';
import rentme from '../assets/rentme.png';


const projectsData = [
    {
        id: 1,
        name: "Tailwind CSS",
        image: tailwind,
        github: "#",
        live: "#",
    },

]

const Projects = () => {
    return (
    //    create girid layout  for all the projects using tailwind css

        <div name='projects' className='w-full h-screen bg-[#00030] text-gray-300'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Projects</p>
                    <p className='py-4'> These are the projects I've worked on</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="HTML icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="HTML icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="HTML icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="HTML icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="HTML icon" />
                        <p className='my-4'>Tailwind</p>
                    </div> 
                     <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="HTML icon" />
                        <p className='my-4'>Tailwind</p>
                    </div> 
                        <div className='shadow-md shadow-[  ] hover:scale-110 duration-500'>
                        <img className='w-90 mx-auto' src={rentme} alt="HTML icon" />
                        <p className='my-4'>rentme </p>
                    </div> 
                </div>
            </div>
        </div>

        
    )
}

export default Projects



