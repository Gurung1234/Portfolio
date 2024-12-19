import React, { useState } from 'react'
import job from '../assets/Project/job.jpg'
import feedback from '../assets/Project/feedback system.jpg'
import port from '../assets/Project/portfolio.jpg'
import prabidhi from '../assets/image.png'
import energy from '../assets/Project/energy.jpg'

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const data = [
    {
      id: 1,
      name: "Job Recommendation System",
      languages: ["React.js", "PHP"],
      image: job,
      description: "A Job Recommendation System is a type of system designed to assist job seekers in finding suitable job opportunities and to help recruiters connect with ideal candidate.",
      sourcecode: "",
      preview: "null"
    },
   
    {
      id: 2,
      name: "Feedback System",
      languages: ["React.js", "Tailwind CSS","Java"],
      image: feedback,
      description: "A Feedback System is a structured mechanism designed to collect, analyze, and act upon feedback provided by users.",
      sourcecode: "",
      preview: ""
    },


  {
    id: 3,
    name: "Portfolio.",
    languages: ["React.js", "Tailwind CSS"],
    image: port,
    description: "This system displays information about person.",
    sourcecode: "https://github.com/Gurung1234/Portfolio",
    preview: "https://www.roshangurung99.com.np"
  },
{
  id: 4,
  name: "Prabidhi Enterprise Pvt. Ltd",
  languages: ["React.js", "Tailwind CSS"],
  image: prabidhi,
  description: "Prabidhi is a company website that displays services, contacts, and more.",
  sourcecode: "",
  preview: "https://prabidhi-virid.vercel.app/"
},

{
id: 5,
name: "Energy Prediction System",
languages: ["React.js", "HTML,CSS","Python"],
image: energy,
description: "An Energy Prediction System is a technology-driven solution that forecasts future energy consumption, production, or demand.",
sourcecode: "",
preview: "null"
},


  ];

  // Set the limit for initially shown projects
  const initialLimit = 2;
  const displayedProjects = showMore ? data : data.slice(0, initialLimit);

  return (
    <div className='bg-dark-500 text-light-gray lg:px-32 md:px-20 px-2 bg-[#323946]'>
<h1 className="bg-white bg-clip-text text-transparent font-bold text-3xl text-center py-10 animate-gradient font-serif" style={{ backgroundSize: '200% 200%' }}>
  Projects
</h1>

      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 p-2 pb-5'>
        {
          displayedProjects.map((d) => (
            <div data-aos="zoom-in-up" data-aos-duration="1500" key={d.id} className='flex flex-col rounded-xl border-2 border-[#00FFFF] p-4 shadow-lg bg-[#1f242d] '>
              <div className='flex flex-col gap-4'>
                <div className='overflow-hidden h-52 md:h-72 lg:h-96'>
                  <a href={d.preview} target='_blank'>
                    <img className='h-full w-full object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer' src={d.image} alt={d.name} />
                  </a>
                </div>
                <div>
                  <h1 className='font-semibold text-lg text-white font-mont'>{d.name}</h1>
                  <p className='text-white'> {d.description}</p>
                </div>
                <div className='flex flex-row flex-wrap rounded-full text-justify font-serif'>
                  {d.languages.map((language, index) => (
                    <span key={index} className="px-3 py-1 border mx-2 border-white text-white rounded-full cursor-pointer text-sm hover:bg-[#00FFFF] hover:text-black">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
              <div className='text-center p-2 text-[#2563EB] font-semibold font-serif flex flex-row justify-between items-center px-2'>
                <div>
                  {
                    d.preview === "null" ? <p className='text-red-600'>No preview</p> : <a className='text-center underline text-white cursor-pointer hover:text-[#00FFFF]' target='_blank' href={d.preview}>Preview</a>
                  }
                </div>
                <a className='underline text-white hover:text-[#00FFFF] cursor-pointer' href={d.sourcecode} target='_blank'>Source code</a>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex justify-center py-6">
        <button 
          className="px-6 py-2 border-2 border-[#00ffff] text-[#00ffff] font-semibold rounded-lg bg-[#1f242d] 
                     hover:bg-[#00ffff] hover:text-[#323946] hover:scale-105 transition-transform duration-300" 
          onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}

export default Projects;
