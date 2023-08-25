import proyects from "../helper/proyects"

const Projects = () => {
  return (
    <section className="w-full m-auto text-black font-semibold dark:text-white pt-20" id="proyectos">
      <div className="w-[80%] 2xl:w-[70%] m-auto">
        <h2 className="text-center text-5xl font-bold mb-8">Proyectos</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {
            proyects?.map((proyect, index)=>(
              <div className="w-full md:w-2/5 flex flex-col justify-center items-center p-4 m-4 bg-slate-200 dark:bg-slate-900 rounded-md border-2 border-violet-900" key={index}>
                <img src={proyect.image} alt="" className="w-full " />
                <section>
                  <h4 className="pt-2 text-2xl">{proyect.title}</h4>
                  <div>

                  </div>
                </section>
                <div>
                    
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects