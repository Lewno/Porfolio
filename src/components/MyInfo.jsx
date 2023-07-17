import AboutMe from "./AboutMe"
import MySkills from "./MySkills"

const MyInfo = () => {
  return (
    <section className="w-full m-auto text-white">
        <div className="w-[80%] 2xl:w-[70%] m-auto">
            <AboutMe/>
            <MySkills/>
        </div>
    </section>
  )
}

export default MyInfo