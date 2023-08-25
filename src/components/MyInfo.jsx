import AboutMe from "./AboutMe"
import MySkills from "./MySkills"
import MyEdu from "./MyEdu"
import MyExp from "./MyExp"




const MyInfo = ({color}) => {
  

  return (
    <section className="w-full m-auto text-black dark:text-white pt-20" id="sobreMi">
        <div className="w-[80%] 2xl:w-[70%] m-auto">
            <AboutMe/>
            <MySkills/>
            <MyExp color={color}/>
            <MyEdu color={color}/>
        </div>
    </section>
  )
}

export default MyInfo