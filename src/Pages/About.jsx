import React from 'react';
import who from '../assets/who am i.jpg';
import { FaUniversity } from 'react-icons/fa';
import { TbWheatOff } from 'react-icons/tb';

const About = () => {
  return (
    <>
      {/* Section Wrapper */}
      <div className="bg-blue-400 text-light-gray lg:px-32 md:px-20 px-2 py-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left Side - Image
          <div
            className="flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-duration="1200"
              >
            <img
              className="h-full w-auto rounded-lg shadow-lg"
              src={profile}
              alt="profile"
            />
          </div> */}

          {/* Right Side - Text Content */}
          <div className="p-6 my-2" data-aos="fade-up" data-aos-duration="2000">
            {/* About Me Section */}
            <div className>
              {/* <h1 className="text-white font-bold text-3xl mb-4 self-center md:self-start justify-center ">ABOUT ME</h1> */}
              <h1 className="text-white font-bold text-2xl my-6 mb-4 text-center">LET ME INTRODUCE YOU</h1>

              <p className="text-gray-800 font-serif">
              Hi there! I’m a passionate for coding, problem-solving, and lifelong learning. I thrive on adapting to 
              new technologies and tools, excelling in both frontend and backend development. Through hands-on projects, I transform theoretical
               concepts into practical solutions. Motivated by curiosity and a drive to innovate, I strive to make a significant impact in the tech
                industry. Let’s collaborate and create something incredible together!
              </p>
            </div>

            {/* Education Section */}
            <div className="flex flex-col gap-3"
            data-aos="zoom-in"
            data-aos-duration="1200"
            
            >
              <p className="text-black font-serif font-semibold text-1xl my-4">Coding aside, here are a few hobbies I’m passionate about:</p>
              {/* Education Item 1 */}
              <div className="flex flex-row gap-2 items-center">
                {/* <FaUniversity color="black" /> */}
                <p className="text-gray-900">-Exploring new places through travel</p>
                {/* <p className="text-warm-orange font-bold text-lg font-mono">BCA</p> */}
              </div>
              {/* Education Item 2 */}
              <div className="flex flex-row gap-2 items-center">
                {/* <FaUniversity color="black" /> */}
                <p className="text-gray-900">-Sharing my experiences through blogging</p>
                {/* <p className="text-warm-orange font-bold text-lg font-mono">+2 </p> */}
              </div>
              {/* Education Item 3 */}
              <div className="flex flex-row gap-2 items-center">
                <p className="text-gray-900">-Enjoying games of all kinds</p>
                {/* <p className="text-warm-orange font-bold text-lg font-mono">SLC</p> */}
              </div>
            </div>
          </div>

            {/* Left Side - Image */}
            <div
            className="flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-duration="1200"
              >
            <img
              className="h-full w-auto rounded-lg shadow-lg"
              src={who}
              alt="profile"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
