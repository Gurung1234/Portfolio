import React from 'react'
import { NavLink } from 'react-router-dom'
// import Blog from '../assets/Blog.jpg'
// import Profile from '../assets/Profile.jpg'
import backgroundGif from "../assets/Blogs/cover.jpg";



const BlogNavigator = () => {
  return (

    

  
    //     <div className="flex flex-col items-center justify-center px-4 bg-cover bg-center bg-no-repeat text-white"
    //   style={{
    //     backgroundImage: `url(${backgroundGif})`,
    //   }}
    //      >

    
    
    <div className=' text-light-gray lg:px-32 md:px-20 px-2 bg-[#323946] pb-8 md:pb-13 lg:pb-15 pt-8 md:pt-13 lg:pt-15'>
              {/* <h1 className="font-bold text-white text-2xl text-center py-10 font-mont">Blog</h1> */}
              <h1 className=' font-semibold mb-2 text-white text-3xl text-center font-serif'>
  Welcome to My Blog!
</h1>


    <div className="flex flex-col items-center justify-center h-1500 px-4 bg-cover bg-center bg-no-repeat text-white pb-8 md:pb-13 lg:pb-15 pt-8 md:pt-13 lg:pt-15"
      style={{
        backgroundImage: `url(${backgroundGif})`,
      }}
         >



        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-8 justify-center md:py-4 py-2 lg:py-8'>


            {/* <div   data-aos="zoom-in " data-aos-duration="1200"> */}
             {/* <div className='overflow-hidden h-60'>
                {/* <NavLink to="/blog">
             <img className='object-cover h-full w-full hover:scale-125 duration-500 cursor-grab ease-in-out' src="https://copysmiths.com/wp-content/uploads/2022/05/feature-image-maintain-a-successful-blog.jpg" alt="blog image" />
                </NavLink> */}
                             {/* <img className='object-cover h-full w-full hover:scale-125 duration-500 cursor-grab ease-in-out' */}
                             
                            {/* //  data-aos="flip-left" */}
                            {/* // data-aos-duration="1000" */}

                            {/* //  src={Blog} alt="blog image" /> */}


             {/* </div> */} 
            <div className='flex flex-row items-center'
            >
               
            </div>
            </div>
            <div className='text-white px-2 font-serif pb-9 text-justify' data-aos="zoom-in" data-aos-duration="1000">
                {/* <h1 className='text-xl font-semibold mb-2 text-white text-center md:text-start font-mont'>Welcome to My Blog!</h1> */}
                <p>Welcome to my journey! Through this platform, I’ll be sharing my travel stories, technological explorations, and the priceless 
                    lessons I’ve learned along the way. My mission is to document these moments and offer you a window into the wonders of our world.
                     Join me as I uncover fascinating discoveries and share meaningful experiences with the hope of inspiring and uplifting others. 
                     Let’s begin this exciting adventure together My aim is to showcase the beauty and wonder of our world, offering inspiration and
                      insight through my experiences. Join me on this path of discovery, and together, let’s embrace the adventure!</p>

                    {/* <div className='text-white justify-center text-center  hover:underline transition duration-300 ease-in-out' data-aos="Zoom-in" data-aos-duration="1000">
                <NavLink to='/blog'>Go to the Blog...</NavLink>
                </div> */}
            </div>
            {/* <div className='overflow-hidden h-10 w-10'>
                    <img className='h-full w-full object-cover rounded-full ' src={Profile} alt="profile" />
                 </div>
                    <div className='flex flex-row text-white'>
                    <p></p>
                    <p>By Roshan Gurung</p>
                    <p></p>
                </div> */}
                                {/* <NavLink to='/blog'>Learn More...</NavLink> */}


        </div>
        <div className='text-white justify-center text-center  hover:underline transition duration-300 ease-in-out hover:text-[#00ffff]' data-aos="Zoom-in" data-aos-duration="1000">
                <NavLink to='/blog'>Go to the Blog...</NavLink>
                </div>

     </div>
    
  )
}

export default BlogNavigator