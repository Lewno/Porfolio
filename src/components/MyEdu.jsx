import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timeLineEdu from '../helper/timeLineEdu';

const ExperienceCard = ({edu,color}) => (
    <VerticalTimelineElement
        contentStyle={{background:`${color == "dark" ? "rgb(17 24 39)" : "rgb(226 232 240)"}`, color:`${color == "dark" ? "#fff" : "#000"}`}}
        contentArrowStyle={{borderRight:`7px solid ${color == "dark" ? "rgb(17 24 39)" : "rgb(226 232 240)"}`}}
        date={edu.date}
        iconStyle={{background:"#fff", color: '#000'}}
        style={{}}
        icon={
            <div className='flex justify-center items-center w-full h-full'>
                <img 
                    src={edu.icon}
                    alt={edu.name}
                    className='w-[60] h-[60%] object-contain'
                />
            </div>
        }
    >
        <div >
            <h3 className=' text-[24px] font-bold'>
                {edu.title}
            </h3>
            <h4 className='m-0 font-bold text-[18px] italic'>{edu.name}</h4>
            <p className='m-0  text-[16px]'>{edu.decription}</p>
        </div>

    </VerticalTimelineElement>
)

const MyEdu = ({color}) => {
  return (
    <section className="my-20"> 
        <h2 className="text-center text-5xl font-bold mb-8">Educación</h2>
        <VerticalTimeline className="before:bg-black dark:before:bg-white">
            {
                timeLineEdu?.map((edu,index)=>(
                    <ExperienceCard key={index} edu={edu} color={color}/>
                ))
            }
           
        </VerticalTimeline>
    </section>
  )
}

export default MyEdu