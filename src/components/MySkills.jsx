

const MySkills = () => {
    const svgs = [
        {name:"html", link:"html.svg"},
        {name:"css", link:"css.svg"},
        {name:"javascript", link:"javascript.svg"},
        {name:"react", link:"react.svg"},
        {name:"redux", link:"redux.svg"},
        {name:"node", link:"nodejs.svg"},
        {name:"express", link:"express.svg"},
        {name:"postgresql", link:"postgresql.svg"},
        {name:"sequelize", link:"sequelize.svg"},
        {name:"git", link:"git.svg"},
        {name:"Style Components", link:"styled-components.svg"},
        {name:"bootstrap", link:"bootstrap.svg"},
        {name:"tailwind css", link:"tailwindcss.svg"},
        {name:"java", link:"java.svg"},
        {name:"MySQL", link:"mysql.svg"},

    ]

  return (
    <section className="mb-10">
        <h2 className="text-center text-5xl font-bold mb-8">Habilidades</h2>
        <div className="flex flex-wrap gap-4 justify-center">
            {
                svgs.map((svg)=>(
                    <div className="w-full md:w-2/5 xl:w-72 flex flex-col justify-center items-center p-4 m-4 bg-slate-900 rounded-md border" key={svg.name}>
                       <img src={`../assets/${svg.link}`} alt={svg.name} className="w-24 h-24" />  
                       <h6 className=" mt-3  uppercase lg:text-2xl">{svg.name}</h6>   
                    </div>
                ))
            }            
        </div>
    </section>
  )
}

export default MySkills