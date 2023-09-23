import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import MyInfo from "./components/MyInfo"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useState } from "react"
import ParticlesBackground from "./components/ParticlesBackground"
import WhatApp from "./components/WhatApp"

function App() {
  
  const [color, setColor] = useState("dark")

  const handleDark = (point) =>{
    setColor(point)
  }

  return (
    <div>
      <WhatApp/>
      <ParticlesBackground color={color}/>
      <Navbar handleDark={handleDark}/>
      <Banner/>
      <MyInfo color={color}/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  ) 
}

export default App
