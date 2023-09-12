import poke from "../assets/poke.png"
import ohana from "../assets/ohana.png"
import ram from "../assets/ram.png"
import medic from "../assets/medic.png"

const proyects = [
    {
       title:"MediPro",
       image:medic,
       description:"E-commerce de pastelería",
       tech:["react","node","sequalize"],
       github:"https://github.com/No-Country/s10-18-n-python-react",
       deploy:"https://s10-18-n-python-react.netlify.app/", 
    },
    {
      title:"Ohana Pastelería",
      image:ohana,
      description:"E-commerce de pastelería",
      tech:["react","node","sequalize"],
      github:"https://github.com/Manolo0178/PF-Cakes_team11",
      deploy:"https://pf-front-eegvakue1-22-00.vercel.app/", 
    },
    {
      title:"Pokemon App",
      image:poke,
      description:"App de pokemon",
      tech:["react","node","sequalize"],
      github:"https://github.com/Lewno/PI-Pokemon-main",
      deploy:"https://pi-pokemon-main-phi-eight.vercel.app/", 
    },
   {
      title:"Rick and Morty App",
      image:ram,
      description:"App de Rick and Morty",
      tech:["react","node"],
      github:"https://github.com/Lewno/rick_and_morty",
      deploy:"https://rick-and-morty-alpha-liart.vercel.app/", 
   },
]

export default proyects;