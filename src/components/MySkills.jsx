import svgs from "../helper/svgs"

const MySkills = () => {
    
  return (
    <section className="mb-10">
        <h2 className="text-center text-5xl font-bold mb-8">Habilidades</h2>
        <div className="flex flex-wrap gap-4 justify-center">
            {
                svgs?.map((svg)=>(
                    <div className="w-full md:w-2/5 xl:w-72 flex flex-col justify-center items-center p-4 m-4  rounded-md  border-violet-800 border-2 bg-slate-200 dark:bg-gray-900" key={svg.name}>
                       <img src={`${svg.link}`} alt={svg.name} className="w-24 h-24" />  
                       <h6 className=" mt-3 font-bold uppercase lg:text-2xl">{svg.name}</h6>   
                    </div>
                ))
            }            
        </div>
    </section>
  )
}

export default MySkills