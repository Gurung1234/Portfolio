import React from 'react';
import who from '../assets/who am i.jpg';
// import { FaUniversity } from 'react-icons/fa';
// import { TbWheatOff } from 'react-icons/tb';

const About = () => {
  return (
    <>
      {/* Section Wrapper */}
      <div className="bg-[#323946] text-light-gray lg:px-32 md:px-20 px-2 py-8"

        // data-aos="zoom-in-up"
        // data-aos-duration="1500"
      >
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
          <div className="p-6 my-2"  >
            {/* About Me Section */}
            <div className   data-aos="zoom-in-up" data-aos-duration="1500">
              <h1 className="text-white font-bold text-3xl mb-4 self-center md:self-start justify-center text-center font-serif ">Who AM I?</h1>
              <h1 className="text-white font-bold text-1xl my-6 mb-4 text-center font-serif">LET ME INTRODUCE YOU</h1>

              <p className="text-white px-2 font-serif pb-9 text-justify" >
              I’m an enthusiastic, passionate about coding,problem-solving,and continuous learning,with experience in both frontend and backend development. I’m eager to collaborate on new projects, whether it’s bringing creative ideas to life or tackling complex challenges. With a strong commitment to high-quality work and innovation, I’m ready to design,develop, and strategize to achieve your goals. Let’s connect and turn your vision into reality!
              </p>
            </div>

            {/* Education Section */}
            <div className="flex flex-col gap-3 justify-center"
            data-aos="zoom-in"
            data-aos-duration="1200"
            
            >
              <p className="text-white font-bold font-serif text-1xl my-4">CODING ASIDE, HERE ARE A FEW HOBBIES I'M PASSIONATE ABOUT:</p>
              {/* Education Item 1 */}
              <div className="flex flex-row gap-2 items-center">
                {/* <FaUniversity color="black" /> */}
                <p className="text-white font-serif">-Exploring new places through travel</p>
                {/* <p className="text-warm-orange font-bold text-lg font-mono">BCA</p> */}
              </div>
              {/* Education Item 2 */}
              <div className="flex flex-row gap-2 items-center">
                {/* <FaUniversity color="black" /> */}
                <p className="text-white font-serif">-Sharing my experiences through blogging</p>
                {/* <p className="text-warm-orange font-bold text-lg font-mono">+2 </p> */}
              </div>
              {/* Education Item 3 */}
              <div className="flex flex-row gap-2 items-center">
                <p className="text-white font-serif">-Enjoying games of all kinds</p>
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
