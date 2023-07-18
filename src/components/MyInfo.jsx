import AboutMe from "./AboutMe"
import MySkills from "./MySkills"
import MyEdu from "./MyEdu"
import MyExp from "./MyExp"

const MyInfo = () => {
  return (
    <section className="w-full m-auto text-white">
        <div className="w-[80%] 2xl:w-[70%] m-auto">
            <AboutMe/>
            <MySkills/>
            <MyExp/>
            <MyEdu/>
        </div>
    </section>
  )
}

export default MyInfo