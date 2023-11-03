import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timeLineExp from '../helper/timeLineExp';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const ExperienceCard = ({exp, color}) => (
    
    <VerticalTimelineElement
        contentStyle={{background:`${color == "dark" ? "rgb(17 24 39)" : "rgb(226 232 240)"}`, color:`${color == "dark" ? "#fff" : "#000"}`}}
        contentArrowStyle={{borderRight:`7px solid ${color == "dark" ? "rgb(17 24 39)" : "rgb(226 232 240)"}`}}
        date={exp.date}  
        iconStyle={{background:"#fff", color: '#000'}}
        icon={
            <div className='flex justify-center items-center w-full h-full '>
                <img 
                    src={exp.icon}
                    alt={exp.name}
                    className='w-[60%] h-[60%] object-contain'
                />
            </div>
        }
        
    >
        <div>
            <h3 className=' text-[24px] font-bold'>
                {exp.title}
            </h3>
            <h4 className='m-0 font-bold text-[18px] italic'>{exp.name}</h4>
            <p className='m-0  text-[16px]'>{exp.decription1}</p>
            <p className='m-0  text-[16px]'>{exp.decription2}</p>

        </div>

    </VerticalTimelineElement>
)

const MyExp = ({color}) => {
  return (
    <section className="my-20"> 
        <h2 className="text-center text-5xl font-bold mb-8">Experiencia</h2>
        <VerticalTimeline  className="before:bg-black dark:before:bg-white" >
            {
                timeLineExp?.map((exp,index)=>(
                    <ExperienceCard key={index} exp={exp}  color={color}/>
                ))
            }
           
        </VerticalTimeline>
    </section>
  )
}

export default MyExp;