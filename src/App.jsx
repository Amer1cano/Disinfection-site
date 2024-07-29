import { useEffect } from "react"
import About from "./pages/about/About"
import Benefits from "./pages/benefits/Benefits"
import Contact from "./pages/contact/Contact"
import Faq from "./pages/faq/Faq"
import Footer from "./pages/foot/Footer"
import Head from "./pages/head/head-section/Head"
import Navbar from "./pages/head/navbar/Navbar"
import Service from "./pages/service/Service"
import Aos from "aos"
import 'aos/dist/aos.css'



const App = () => {
  useEffect(()=>{
    Aos.init({
    })
  },[])
  return (
    <div className="scroll-smooth">
      <Navbar   />
      <Head/>
      <About/>
      <Service/>
      <Benefits/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App