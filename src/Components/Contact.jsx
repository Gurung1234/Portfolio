import React from 'react';
import mail_icon from '../assets/mail_icon.svg';
import location_icon from '../assets/location_icon.svg';
import call_icon from '../assets/call_icon.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', 'ed740688-ce82-443a-ab03-1f142fdce5da');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div
      id="contact"
      className="px-4 md:px-20 lg:px-32 py-10 md:py-20 bg-[#323946] text-white"
    >
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-4 text-center text-white font-serif">
          Get in <span className="">Touch</span>
        </h1>
        {/* /* <p className="text-lg">Feel free to contact me for any project or inquiry.</p>  */}
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        data-aos="zoom-in-up" data-aos-duration="1200"
      >
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white font-serif" >Let's Talk</h2>
          <p className="text-lg text-justify text-white font-serif">
            I’m excited and fully available to take on new projects that align with your
            vision and goals. Whether you have a creative idea that needs expert execution
            or a challenging project that requires detailed attention and skill, I’m here
            to help. With a strong commitment to delivering high-quality work, I am open
            to collaborating on diverse tasks be it designing, developing, strategizing,
            or solving complex problems. Feel free to send me a message with any details,
            questions, or concepts you’d like to discuss. Contact me anytime, and let’s
            turn your ideas into reality together!
          </p>
          <div className="space-y-6 text-white font-serif">
            <div className="flex items-center gap-4">
              <img src={mail_icon} alt="Email" className="w-8 h-8" />
              <p>roosan235@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={call_icon} alt="Call" className="w-8 h-8" />
              <p>9825924337</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={location_icon} alt="Location" className="w-8 h-8" />
              <p>Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className="border-b-purple-900 p-8 rounded-2xl shadow-lg space-y-6 text-white font-serif"
        >
          <div>
            <label htmlFor="name" className="block text-lg">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-md border border-[#00FFFF] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md border border-[#00FFFF] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg">
              Write your message here
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Enter your message"
              className="w-full p-3 rounded-md border border-[#00FFFF] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#323946] text-white px-6 py-3 rounded-md font-bold border-2 border-[#00FFFF] hover:scale-105 hover:text-[#323946] hover:bg-[#00FFFF] duration-200 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
