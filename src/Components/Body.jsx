import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../Hello HI.pdf"; // Ensure correct file path
    link.download = "Roshan-Gurung-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-6 py-2 bg-[#00ffff] text-[#323946] font-semibold rounded-lg shadow-md 
                 hover:bg-[#00e5e5] hover:scale-105 transition-transform duration-300"
    >
      Download CV
    </button>
  );
};

const Body = () => {
  const roles = [
    "Software Developer",
    "Photographer",
    "Java Developer",
    "React Developer",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 bg-cover bg-center bg-no-repeat bg-[#323946] text-white pt-8 md:pt-13 lg:pt-15"
    //   style={{
    //     backgroundImage: "url('../../background.gif')", // Replace with your actual background
    //   }}
    >
      {/* Profile Image Section */}
      <div className="relative w-60 h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-[#00ffff] shadow-lg mb-8">
        <img
          src="../Profile.jpg" // Replace with your actual profile image path
          alt="Profile"
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center font-serif leading-tight">
        Hi, I'm <span className="text-[#00ffff]">Roshan Gurung</span>
      </h1>

      {/* Rotating Roles Animation */}
      <h2 className="text-2xl md:text-3xl font-semibold font-serif mb-6 text-gray-200">
        <span className="text-[#00ffff]">{roles[currentRole]}</span>
      </h2>

      {/* Description Section */}
      <p className="max-w-2xl text-center text-lg text-white font-serif leading-relaxed mb-8">
        I am passionate about building innovative solutions and capturing
        creativity through code, visuals, and design. Let's create something
        amazing together!
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex gap-4">
        {/* Resume Download Button */}
        <Resume />

        {/* Contact Me Link */}
        <NavLink
          to="/contact"
          className="px-6 py-2 border-2 border-[#00ffff] text-[#00ffff] bg-[#1f242d] font-semibold rounded-lg 
                     hover:bg-[#00ffff] hover:text-[#323946] hover:scale-105 transition-transform duration-300"
        >
          Contact Me
        </NavLink>
      </div>
    </div>
  );
};

export default Body;
