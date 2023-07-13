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
    <header className=" shadow-md text-white w-full fixed top-0 left-0">
        
        <nav className="flex md:flex-row  md:items-center w-4/5 m-auto md:justify-evenly py-4 md:px-10  md:w-full ">
            <div className="p-0 m-0 md:block">
                <ul className={`md:flex md:items-center absolute md:static text-white md:z-auto z-[-1] left-0  md:w-auto md:pl-0 pl-8 w-full  transition-all duration-500 ease-in ${open ? "top-16" : "top-[-350px]"}`}>
                    {
                        Links?.map((link,index)=>(
                            <li key={index} className="md:mx-3 md:text-xl md:my-0 my-7 ">
                                <a href={link.link} >{link.name}</a>
                            </li>
                            
                        ))
                    }
                </ul>
            </div>
            <div onClick={()=>setOpen(!open)} className="text-2xl absolute md:hidden left-10">
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
            <div className="left-0 right-0 top-0 bottom-0 m-auto">
                <code className="font-bold cursor-pointer flex items-center text-2xl">
                    <span>&#60;</span>
                    lewno
                    <span>/&#62;</span>
                </code>
            </div>
            <div className="md:hidden text-2xl absolute right-10">
                <ion-icon name="sunny"></ion-icon>
            </div>  
            <div className="hidden md:block w-72 p-0 m-0">
                <ul className=" md:flex justify-evenly items-center h-auto text-2xl px-0">
                    <div className="w-6 h-6 md:mx-3">
                        <ion-icon name="logo-github"></ion-icon>
                    </div>
                    <div className="w-6 h-6 md:mx-3">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </div>
                    <div onClick={()=>setSun(!sun)} className="w-6 h-6 md:mx-3">
                        <ion-icon name={sun ? "moon": "sunny"}></ion-icon>
                    </div>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar