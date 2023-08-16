import { useState } from "react"
import { Sun, Moon, LinkedIn, Github } from "../assets/icons-svg/icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const Navbar = () => {

    const Links = [
        {name:"Sobre Mí", link:"#sobreMi"},
        {name:"Proyectos", link:"#proyectos"},
        {name:"Contáctame", link:"#contactame"}
    ]

    const [open, setOpen] = useState(false);


    const [mode, setMode] = useThemeSwitcher();


  return (



    <header className="bg-gray-900 shadow-md text-white w-full fixed top-0 left-0 z-[10]">
        
        <nav className="flex md:flex-row  md:items-center w-[80%] 2xl:w-[70%] m-auto items-center  py-4 ">
            <div className="md:w-1/3 p-0 m-0 md:block">
                <ul className={`md:flex md:items-center absolute md:static bg-white text-black md:bg-transparent md:text-white md:z-auto z-[-1] left-0  md:w-auto md:pl-0 pl-8 w-full  transition-all duration-500 ease-in ${open ? "top-16" : "top-[-350px]"}`}>
                    {
                        Links?.map((link,index)=>(
                            <li key={index} className="md:mx-2  md:my-0 my-7 hover:-translate-y-1 cursor-pointer duration-300 xl:text-xl">
                                <a href={link.link} >{link.name}</a>
                            </li>
                            
                        ))
                    }
                </ul>
            </div>
            <div onClick={()=>setOpen(!open)} className="text-2xl absolute md:hidden left-10">
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
            <div  className="md:flex-grow left-0 right-0 top-0 bottom-0 m-auto md:p-0 md:m-0 md:flex md:items-center md:justify-center">
                <code className="font-bold cursor-pointer flex items-center text-3xl xl:text-4xl text-violet-500">
                    <span>&#60;</span>
                    lewno
                    <span>/&#62;</span>
                </code>
            </div>
            <button onClick={()=>setMode(mode === "light" ? "dark": "light")} className={`md:hidden text-2xl absolute right-10 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark" }`}>
                {mode ==="dark" ? <Moon/> : <Sun/>}
            </button>  
            <div className=" flex-grow hidden md:block ">
                <ul className=" md:flex justify-evenly items-center h-auto text-2xl px-0 ">
                    <li className="w-8 h-8 p-1 hover:bg-white hover:text-black rounded-full md:mx-3 cursor-pointer duration-500">
                        <Github/>   
                    </li>
                    <li className="w-8 h-8 p-1 md:mx-3 cursor-pointer duration-500 rounded-full hover:bg-blue-700">  
                        <LinkedIn/>
                    </li>
                    <li onClick={()=>setMode(mode === "light" ? "dark": "light")} className={`w-8 h-8 p-1 cursor-pointer   flex items-center justify-center rounded-full ${mode === "light" ? " bg-black text-white" : " bg-white text-black" }`}>
                    {mode ==="dark" ? <Moon/> : <Sun/>}              
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar