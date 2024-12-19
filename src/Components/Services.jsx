import React, { useState } from 'react';
import web from '../assets/web development.jpg';
import graphics from '../assets/graphics.jpg';
import app from '../assets/app.jpg';
import digital from '../assets/digital marketing.jpg';
import content from '../assets/content writing.jpg';
import networking from '../assets/networking.jpeg';

const Services = () => {
  const [showMore, setShowMore] = useState(false);

  const data = [
    {
      id: 1,
      name: "Web Development",
      description: "Empower your online presence with our web development services. We deliver responsive and visually captivating websites tailored to your business needs. From single-page apps to complex platforms, we bring your ideas to life.",
      image: web,
    },
    {
      id: 2,
      name: "Graphics Design",
      description: "I bring your ideas to life with my graphic design services. Whether you need captivating visuals, professional branding, or impactful marketing materials, I deliver creative solutions tailored to your unique needs. From logos to comprehensive branding packages, I ensure each design reflects your vision and resonates with your audience.",
      image: graphics,
    },
    {
      id: 3,
      name: "App Design",
      description: "I craft intuitive and visually stunning app designs that enhance user experiences and drive engagement. From concept to prototype, my designs focus on usability, responsiveness, and aligning with your brand identity to deliver apps that stand out and perform seamlessly across devices.",
      image: app,
    },
    {
      id: 4,
      name: "Digital Marketing",
      description: "I will provide result-driven digital marketing solutions to boost your online presence and reach your target audience effectively. From SEO and social media marketing to email campaigns and paid advertising, I craft tailored strategies to help your business grow and achieve measurable success.",
      image: digital,
    },
    {
      id: 5,
      name: "Content Writing",
      description: "I will create compelling and engaging content tailored to your audience and goals. Whether it’s website copy, blogs, articles, or social media posts, my writing is crafted to inform, inspire, and drive action, helping your brand stand out and connect with readers effectively.",
      image: content,
    },
    {
      id: 6,
      name: "Networking",
      description: "Networking involves connecting computers and devices to share resources, data, and services. Whether setting up local area networks (LAN), wide area networks (WAN), or the internet, effective networking ensures seamless communication, data security, and reliable performance across systems. I offer solutions for designing, managing, and optimizing networks to enhance connectivity and support your business needs.",
      image: networking,
    }
  ];

  // Set the limit for initially shown services
  const initialLimit = 3;
  const displayedServices = showMore ? data : data.slice(0, initialLimit);

  return (
    <div className="px-2 md:px-20 lg:px-32 pt-2 md:pt-20 lg:pt-32 bg-green-950">
      <h1 className="text-xl text-center py-5 text-white font-bold pb-20 pt-10 md:pt-14 lg:pt-20 bg-slate-500">My Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-12">
        {displayedServices.map((service) => (
          <div  data-aos="flip-left" data-aos-duration="1500"
            key={service.id}
            className="flex flex-col h-96 gap-8 p-10 border-2 border-[#00FFFF] hover:scale-105 hover:bg-gradient-to-r from-[#02120f] via-[#06473b] to-[#03735e] rounded-2xl duration-200 ease-in-out cursor-pointer"
          >
            <div className="overflow-hidden flex justify-center items-center"  >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl text-center text-white font-bold">{service.name}</h1>
            <p className="text-lg text-center">{service.description}</p>
            <div className="flex flex-col justify-center items-center">
              <button className="bg-black text-white px-3 py-3 w-32 rounded-3xl border-2 border-[#00FFFF] hover:text-black hover:bg-[#00FFFF] duration-150 ease-in-out hover:scale-105">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-8">
        <button
          className="bg-black text-white px-6 py-2 w-32 rounded-md border-2 border-[#00FFFF] hover:text-black hover:bg-[#00FFFF] duration-150 ease-in-out hover:scale-105"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default Services;
