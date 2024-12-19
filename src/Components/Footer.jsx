import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaLinkedin,FaFacebook,FaInstagram ,FaGithubSquare ,FaPhone} from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
const Footer = () => {
    const email1 = 'roosan235@gmail.com';
    const handleEmailClick1 = () => {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email1}`);
    };
 
  return (
    <div className='text-light-gray mt-0 font-serif'>
       <div className=' lg:px-32 md:px-20 px-2 bg-[#1f242d] '>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 '>
          <div className='flex flex-col p-3' >
            <h1 className='text-warm-orange font-bold md:text-2xl text-lg my-1 font-mont'>Quick Links</h1>
            <div className='flex flex-col lg:gap-1 font-serif '>

            <NavLink  to="/"className={({ isActive }) => `text-light-gray hover:text-[#00FFFF] duration-300 ease-in-out ${  isActive ? 'font-bold' : ''    }` }>Home</NavLink>
                <NavLink  to='/skills' className={({ isActive }) => `text-light-gray hover:text-[#00FFFF] duration-300 ease-in-out ${  isActive ? 'font-bold' : ''    }` }>Skills</NavLink>
                <NavLink   to='/projects' className={({ isActive }) => `text-light-gray hover:text-[#00FFFF] duration-300 ease-in-out ${  isActive ? 'font-bold' : ''    }` }>Projects</NavLink>
                <NavLink  to='/resume'className={({ isActive }) => `text-light-gray hover:text-[#00FFFF] duration-300 ease-in-out ${  isActive ? 'font-bold' : ''    }` }> Resume</NavLink>
                <NavLink  to='/about' className={({ isActive }) => `text-light-gray hover:text-[#00FFFF] duration-300 ease-in-out ${  isActive ? 'font-bold' : ''    }` }>About</NavLink>
                <NavLink  to='/blog'className={({ isActive }) => `text-light-gray hover:text-[#00FFFF] duration-300 ease-in-out ${  isActive ? 'font-bold' : ''    }` }>Blogs</NavLink>
                <NavLink  to='/gallery'className={({ isActive }) => `text-light-gray hover:text-[#00FFFF] duration-300 ease-in-out ${  isActive ? 'font-bold' : ''    }` }>Gallery</NavLink>
            </div>
          </div>
          {/* <div className='p-3'>
            <h1 className='text-warm-orange font-bold md:md:text-2xl text-lg my-1 font-mont'>Find Me</h1>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row items-center gap-1'>
            <a href="https://www.facebook.com/profile.php?id=100094018513367" target='_blank'> <FaFacebook size={24} color='white'/></a><a href="https://www.facebook.com/profile.php?id=100094018513367" target='_blank' className='text-light-gray'> Facebook</a>
              </div>
              <div className='flex flex-row items-center gap-1'>
                 <a href="" target='_blank'><FaGithubSquare size={24} color='white'/></a><a href="" target='_blank' className='text-light-gray'> Github</a>
              </div>
              <div className='flex flex-row items-center gap-1'>

                 <a href="https://www.instagram.com/gurungroshan99/" target='_blank'><FaInstagram size={24} color='white'/></a><a href="https://www.instagram.com/gurungroshan99/" target='_blank' className='text-light-gray'> Instagram</a>
              </div>
              <div className='flex flex-row items-center gap-1'>

                <a href="https://www.linkedin.com/in/roshan-gurung-34079b295/" target='_blank'> <FaLinkedin size={24} color='white'/></a><a href="https://www.linkedin.com/in/roshan-gurung-34079b295/" target='_blank' className='text-light-gray'> Linkedin</a>
              </div>

            </div>
          </div> */}
                <div className='p-3 '>
                  <h1 className='text-warm-orange font-bold md:text-2xl text-lg my-1 font-mont'>Contact Me</h1>
                  <div className='flex flex-row gap-2 items-center '>
                          <FaPhone color='green '/>
                          <p>+977-9825924337</p>
                         </div>
                             <div className='flex flex-row gap-2 items-center'>
                             <FaPhone color='green'/>
                         <p>+977-9763216356</p>
                         </div>
           
                         <div className='flex flex-row gap-2 items-center my-1  hover:text-[#00FFFF]'>
                         <MdOutlineAttachEmail color='red' onClick={handleEmailClick1}/>
                      <p onClick={handleEmailClick1} className='cursor-pointer'>{email1}</p>
                     </div>
                 </div>



                    <div className='p-3'>
                         <h1 className='text-warm-orange font-bold md:md:text-2xl text-lg my-1 font-mont'>Find Me</h1>
                                 <div className='flex flex-col gap-2'>
                            <div className='flex flex-row items-center gap-1  hover:text-[#00FFFF]'>
                             <a href="https://www.facebook.com/profile.php?id=100094018513367" target='_blank'> <FaFacebook size={24} color='white'/></a><a href="https://www.facebook.com/profile.php?id=100094018513367" target='_blank' className='text-light-gray'> Facebook</a>
                            </div>
                            <div className='flex flex-row items-center gap-1  hover:text-[#00FFFF]'>
                                <a href="" target='_blank'><FaGithubSquare size={24} color='white'/></a><a href="" target='_blank' className='text-light-gray'> Github</a>
                            </div>
                            <div className='flex flex-row items-center gap-1  hover:text-[#00FFFF]'>

                                <a href="https://www.instagram.com/gurungroshan99/" target='_blank'><FaInstagram size={24} color='white'/></a><a href="https://www.instagram.com/gurungroshan99/" target='_blank' className='text-light-gray'> Instagram</a>
                                    </div>
                                    <div className='flex flex-row items-center gap-1  hover:text-[#00FFFF]'>

                                <a href="https://www.linkedin.com/in/roshan-gurung-34079b295/" target='_blank'> <FaLinkedin size={24} color='white'/></a><a href="https://www.linkedin.com/in/roshan-gurung-34079b295/" target='_blank' className='text-light-gray'> Linkedin</a>
                          </div>

                          </div>
                          </div>


                          </div>
                     <div>
                  <p className='text-center'>Copyright ©2024 All rights reserved.</p>
          </div>

       </div>

    </div>
  )
}

export default Footer