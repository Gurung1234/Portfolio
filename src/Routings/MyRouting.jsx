import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Gallery from '../Pages/Gallery'
import Skills from '../Pages/Skills'
import Projects from '../Pages/Projects'
import MyBlog from '../Pages/MyBlog'
// import Resume from '../Pages/Resume'





const MyRouting = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/blog' element={<MyBlog/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>
            {/* <Route path='/resume' element={<Resume/>}/> */}






        </Routes>
    </div>
  )
}

export default MyRouting