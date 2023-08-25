import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timeLineExp from '../helper/timeLineExp';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const ExperienceCard = ({edu}) => (
    <VerticalTimelineElement
        contentStyle={{background:"rgb(124 58 237)", color:"#fff"}}
        contentArrowStyle={{borderRight:"7px solid rgb(124 58 237)"}}
        date={edu.date}  
        iconStyle={{background:"#fff", color: '#fff'}}
        style={{}}  
        
        icon={
            <div className='flex justify-center items-center w-full h-full'>
                <img 
                    src={edu.icon}
                    alt={edu.name}
                    className='w-[60%] h-[60%] object-contain'
                />
            </div>
        }
        className='last:text-black'
    >
        <div >
            <h3 className=' text-[24px] font-bold'>
                {edu.title}
            </h3>
            <p className='m-0 font-semibold text-[16px]'>{edu.name}</p>
        </div>

    </VerticalTimelineElement>
)

const MyExp = () => {

    const [mode, setMode] = useThemeSwitcher();
  return (
    <section className="my-20"> 
        <h2 className="text-center text-5xl font-bold mb-8">Experiencia</h2>
        <VerticalTimeline  lineColor='blue' >
            {
                timeLineExp?.map((edu,index)=>(
                    <ExperienceCard key={index} edu={edu}/>
                ))
            }
           
        </VerticalTimeline>
    </section>
  )
}

export default MyExp;