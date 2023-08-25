import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import MyInfo from "./components/MyInfo"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
  
  const [color, setColor] = useState("dark")

  const handleDark = (point) =>{
    setColor(point)
  }

  return (
    <div>
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
