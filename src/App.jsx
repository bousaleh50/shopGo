
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/footer/Footer"
import HeroSection from "./components/hero_section/HeroSection"
import Home from "./pages/homePage/HomePage"
import Register from "./pages/signup/Register"


function App() {
  

  return (
    <>
      <div>
         <Navbar/>
         <Home/>
         <Footer/>
      </div>
    </>
  )
}

export default App
