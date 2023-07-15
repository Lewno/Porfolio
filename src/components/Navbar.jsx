import { useState } from "react"

const Navbar = () => {

    const Links = [
        {name:"Sobre Mí", link:"/"},
        {name:"Proyectos", link:"/"},
        {name:"Contáctame", link:"/"}
    ]

    const [open, setOpen] = useState(false);
    const [sun, setSun] = useState(false);


  return (
    <header className="bg-gray-800 shadow-md text-white w-full fixed top-0 left-0">
        
        <nav className="flex md:flex-row  md:items-center w-[90%] m-auto  py-4  ">
            <div className="md:w-1/3 p-0 m-0 md:block">
                <ul className={`md:flex md:items-center absolute md:static bg-white text-black md:bg-transparent md:text-white md:z-auto z-[-1] left-0  md:w-auto md:pl-0 pl-8 w-full  transition-all duration-500 ease-in ${open ? "top-16" : "top-[-350px]"}`}>
                    {
                        Links?.map((link,index)=>(
                            <li key={index} className="md:mx-2  md:my-0 my-7 hover:-translate-y-1 cursor-pointer duration-300">
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
                <code className="font-bold cursor-pointer flex items-center text-3xl">
                    <span>&#60;</span>
                    lewno
                    <span>/&#62;</span>
                </code>
            </div>
            <div onClick={()=>setSun(!sun)} className="md:hidden text-2xl absolute right-10">
                <ion-icon name={sun ? "moon": "sunny"}></ion-icon>
            </div>  
            <div className=" flex-grow hidden md:block">
                <ul className=" md:flex justify-evenly items-center h-auto text-2xl px-0">
                    <li className="w-6 h-6 md:mx-3 hover:-translate-y-1 cursor-pointer duration-300">
                        <a href=""><ion-icon name="logo-github"></ion-icon></a>       
                    </li>
                    <li className="w-6 h-6 md:mx-3 hover:-translate-y-1 cursor-pointer duration-300">  
                        <a href=""><ion-icon name="logo-linkedin"></ion-icon></a>
                    </li>
                    <li onClick={()=>setSun(!sun)} className="w-6 h-6 md:mx-3 hover:-translate-y-1 cursor-pointer duration-300">
                        <ion-icon name={sun ? "moon": "sunny"}></ion-icon>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar