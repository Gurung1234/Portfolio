import About from "../Components/About"
import BlogNavigator from "../Components/BlogNavigator"
import Body from "../Components/Body"
import Contact from "../Components/Contact"
import Gallery from "../Components/Gallery"
import Projects from "../Components/Projects"
import Skills from "../Components/Skills"
const Home = () => {
  return (
    <div>
        <Body/>
  <About/>

   {/* <Services/> */}
   <Projects/>
   
    {/* <About/> */}
 <Skills/> 
    <Gallery/>
    <BlogNavigator/>
    <Contact/>
    {/* <Footer/> */}
    </div>
  )
}

export default Home