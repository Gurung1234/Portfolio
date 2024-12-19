import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaFacebook, FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";





            <div className="flex gap-4 items-center">
          <p>Find me:</p>
          <a href="https://www.facebook.com/profile.php?id=100094018513367" target="_blank" rel="noopener noreferrer">
            <FaFacebook color="blue" className="hover:scale-110 transition duration-300" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare color="black" className="hover:scale-110 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/gurungroshan99/" target="_blank" rel="noopener noreferrer">
            <FaInstagram color="red" className="hover:scale-110 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/roshan-gurung-34079b295/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin color="blue" className="hover:scale-110 transition duration-300" />
          </a>
        </div>
const Navbar = () => {
    const [toggle, setToggle]=useState(false)
  return (
    <div className='bg-blue-600 text-light-gray lg:px-32 md:px-20 px-2 sticky top-0 z-50 font-normal'>
        <div className=' hidden md:flex md:flex-row md:justify-between md:items-center md:py-1 lg:font-semibold '>
            <div className='flex flex-row justify-center items-center'>
                <NavLink className='text- font-bold p-3 cursor-pointer hover:text-light-gray' to='/'>Roshan Gurung</NavLink>
            </div>
            <div className='flex flex-row lg:gap-10 gap-4 '>
                <NavLink  to="/"className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>Home</NavLink>
                <NavLink  to='/skills' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>Skills</NavLink>
                <NavLink   to='/projects' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>Projects</NavLink>
                {/* <NavLink  to='/resume'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }> Resume</NavLink> */}
                <NavLink  to='/about' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>About</NavLink>
                <NavLink  to='/blog'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>Blogs</NavLink>
                <NavLink  to='/gallery'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>Gallery</NavLink>
            </div>
            {/* <div className='bg-[#F39C12] lg:py-2 rounded-full lg:px-6 md:px-2 md:py-1 hover:bg-yellow-700'>
                <NavLink className='text-white hover:text-white duration-300 ease-in-out' to='/contact'>Contact Me</NavLink>
            </div> */}


            <div className="flex gap-4 items-center">
          <p>Find me:</p>
          <a href="https://www.facebook.com/profile.php?id=100094018513367" target="_blank" rel="noopener noreferrer">
            <FaFacebook color="blue" className="hover:scale-110 transition duration-300" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare color="black" className="hover:scale-110 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/gurungroshan99/" target="_blank" rel="noopener noreferrer">
            <FaInstagram color="red" className="hover:scale-110 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/roshan-gurung-34079b295/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin color="blue" className="hover:scale-110 transition duration-300" />
          </a>
        </div>

        

        </div>
        {/* thsis is start for the mobile device navigation */}
        <div className=' md:hidden flex flex-col p-3'>
            <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row justify-center items-center'>
                <NavLink className='text-light-gray font-bold  cursor-pointer hover:text-light-gray' to='/'>Roshan Gurung</NavLink>
            </div>
            <div>
            <IoReorderThreeSharp size={34} onClick={()=>setToggle(!toggle)} />
            </div>
            </div>
            <div className={`flex flex-col  gap-2 ${toggle?"":"hidden"}`}>

            <NavLink  to="/"className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>Home</NavLink>
                <NavLink  to='/skills' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>Skills</NavLink>
                <NavLink   to='/projects' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>Projects</NavLink>
                {/* <NavLink  to='/resume'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }> Resume</NavLink> */}
                <NavLink  to='/about' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>About</NavLink>
                <NavLink  to='/blog'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>Blogs</NavLink>
                <NavLink  to='/gallery'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>Gallery</NavLink>
            </div>

            
            <div className="flex gap-4 items-start">
          <p></p>
          <a href="https://www.facebook.com/profile.php?id=100094018513367" target="_blank" rel="noopener noreferrer">
            <FaFacebook color="blue" className="hover:scale-110 transition duration-300" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare color="black" className="hover:scale-110 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/gurungroshan99/" target="_blank" rel="noopener noreferrer">
            <FaInstagram color="red" className="hover:scale-110 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/roshan-gurung-34079b295/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin color="blue" className="hover:scale-110 transition duration-300" />
          </a>
        </div>

                


            {/* <div className={`rounded-full mt-4 ${toggle?"":"hidden"}`}>
                <NavLink className='w-1/2 bg-[#F39C12] px-5 py-1 rounded  text-light-gray hover:text-white hover:bg-yellow-700 duration-300 ease-in-out' to='/contact'>Contact Me</NavLink>
            </div> */}

        </div>

       
    </div>
  )
}

export default Navbar