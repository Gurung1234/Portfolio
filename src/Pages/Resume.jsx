import React, { useState, useEffect } from "react";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../Roshan Gurung.pdf"; // Correct file path
    link.download = "Roshan-Gurung-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const roles = [
    "Software Developer",
    "Photographer",
    "Graphic Designer",
    "Java Developer",
    "Frontend Developer",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000); // Role changes every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed text-white px-6"
      style={{
        backgroundImage: "url('../../background.gif')", // Update with your background image path
      }}
    >
      <div className="text-center max-w-4xl bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-8 md:p-12">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src="../../Profile.jpg" // Replace with your profile image
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-[#00ffff] object-cover"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Hi, I'm <span className="text-[#00ffff]">Roshan Gurung</span>
        </h1>

        {/* Dynamic Role Animation */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 animate-fade-in">
          {roles[currentRole]}
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          I specialize in creating innovative solutions, blending creativity
          with technical skills to deliver high-quality projects. Whether it's
          frontend development, graphic design, or problem-solving, I'm always
          excited to contribute and grow.
        </p>

        {/* Download Resume Button */}
        <button
          onClick={handleDownload}
          className="px-8 py-3 bg-[#00ffff] text-gray-900 font-semibold rounded-lg hover:bg-[#00e5e5] hover:scale-105 transition transform duration-300 ease-in-out"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
