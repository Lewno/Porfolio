

const Banner = () => {
  return (
    <section className="w-full m-auto h-screen text-white">
        <div className="w-[80%] 2xl:w-[70%] flex flex-col justify-center items-center h-full  my-0 mx-auto text-center">
            <div className="flex flex-col gap-4 my-8 mx-auto">
                <code className="font-bold text-4xl">
                    <span>&#60;</span><span>holaMundo</span><span>/&#62;</span>
                </code>
                <p className=" text-2xl font-bold">soy</p>
                <h1 className=" text-7xl font-bold text-violet-500">Carlos Benites</h1>
                <p className=" text-2xl font-bold">Software Developer</p>
            </div>
            <div className=" flex flex-col md:flex-row">
                <a className="p-4 m-4 rounded-lg bg-violet-600 hover:shadow-lg hover:shadow-violet-600/50 duration-300 flex gap-2  items-center text-xl" href="" > 
                    <span>DESCARGAR CV</span> 
                    <ion-icon name="arrow-down-circle-outline"></ion-icon>
                </a>
                <a className=" p-4 m-4 rounded-lg bg-violet-600 hover:shadow-lg hover:shadow-violet-600/50 duration-300 flex gap-2 items-center text-xl" href="" > 
                    <span>CONTÁCTAME</span> 
                    <ion-icon  name="navigate-circle-outline"></ion-icon>   
                </a>
            </div>
        </div>
    </section>
  )
}

export default Banner