import React, { useState } from 'react';
import html from '../assets/Skills/html1.jpg';
import CSS from '../assets/Skills/css.svg';
import Java from '../assets/Skills/Java1.webp';
import CodeTesting from '../assets/Skills/CodeTesting.png';
import Git from '../assets/Skills/Git1.png';
import JavaScript from '../assets/Skills/JavaScript.webp';
import NodeJs from '../assets/Skills/NodeJs.png';
import Python from '../assets/Skills/Python.jpg';
import ReactImg from '../assets/Skills/React.png'; // Renamed React import to avoid conflicts

const Skills = () => {
  const data = [
    { id: 1, name: 'React', image: ReactImg },
    { id: 2, name: 'NodeJs', image: NodeJs },
    { id: 3, name: 'Java', image: Java },
    { id: 4, name: 'JavaScript', image: JavaScript },
    { id: 5, name: 'Git', image: Git },
    { id: 6, name: 'Code Testing', image: CodeTesting },
    { id: 7, name: 'CSS', image: CSS },
    { id: 8, name: 'Python', image: Python },
    { id: 9, name: 'HTML', image: html }, // Use the renamed ReactImg variable
  ];

  const [visibleCount, setVisibleCount] = useState(9);

  // const showMore = () => setVisibleCount(data.length);
  // const showLess = () => setVisibleCount(4);

  return (
    <div className='bg-[#323946] text-light-gray px-2 md:px-20 lg:px-32 pt-10 md:pt-14 lg:pt-20'>
      <h1 className='font-bold text-white text-3xl text-center font-serif py-10'>SKILLS</h1>
      {/* <h2 className='font-bold text-white text-2xl text-center py-8'>I have following Skills</h2> */}

{/*       
      <p className="text-gray-800 font-serif w-full max-w-full m-0 p-0 leading-relaxed py-6">
  Hello! I'm an enthusiastic IT student passionate about coding, problem-solving, and continuous learning. I adapt quickly 
  to new technologies and tools, excelling in both frontend and backend development. With many projects, I bridge
  theory with real-world solutions. Driven by curiosity and a desire to innovate, I aim to make a meaningful impact in the tech 
  industry. Let’s connect and build something amazing together!
</p> */}

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-2'>
        {data.slice(0, visibleCount).map((d) => (
          <div
            key={d.id}
            className='rounded-lg shadow-black hover:scale-105 ease-in-out cursor-pointer'
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img
              className='rounded-lg object-contain h-20 w-20 mx-auto'
              src={d.image}
              alt={d.name}
            />
            <h3 className='text-white text-center mt-3 font-bold'>{d.name}</h3>
          </div>
        ))}
      </div>
      {/* <div className='text-center mt-6'>
        {visibleCount < data.length ? (
        //   <button
        //     onClick={showMore}
        //     className='bg-black text-white px-6 py-3 rounded-md font-bold border-2 border-[#00FFFF] hover:scale-105 hover:text-black hover:bg-[#00FFFF] duration-200 ease-in-out'
        //   >
        //     Show More
        //   </button>
        // ) : (
        //   <button
        //     onClick={showLess}
        //     className='bg-black text-white px-6 py-3 rounded-md font-bold border-2 border-[#00FFFF] hover:scale-105 hover:text-black hover:bg-[#00FFFF] duration-200 ease-in-out'
        //   >
        //     Show Less
        //   </button>
        )}
      </div> */}
    </div>
  );
};

export default Skills;
