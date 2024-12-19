
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar"
import MyRouting from "./Routings/MyRouting"
import Aos from "aos"
import 'aos/dist/aos.css';
function App() {
  Aos.init();
  return (
    <>
    <Navbar/>
     <MyRouting/>
     <Footer/>
    </>
  )
}

export default App
