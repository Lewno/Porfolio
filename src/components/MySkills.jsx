import svgs from "../helper/svgs"

const MySkills = () => {
    
  return (
    <section className="mb-10">
        <h2 className="text-center text-5xl font-bold mb-8">Habilidades</h2>
        <div className="flex flex-wrap gap-4 justify-center">
            {
                svgs?.map((svg)=>(
                    <div className="w-full md:w-2/5 xl:w-72 flex flex-col justify-center items-center p-4 m-4 bg-slate-900 rounded-md border" key={svg.name}>
                       <img src={`${svg.link}`} alt={svg.name} className="w-24 h-24" />  
                       <h6 className=" mt-3  uppercase lg:text-2xl">{svg.name}</h6>   
                    </div>
                ))
            }            
        </div>
    </section>
  )
}

export default MySkills