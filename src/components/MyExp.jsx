import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timeLineExp from '../helper/timeLineExp';

const ExperienceCard = ({edu}) => (
    <VerticalTimelineElement
        contentStyle={{background:"rgb(15 23 42 / var(--tw-bg-opacity))", color:"#fff"}}
        contentArrowStyle={{borderRight:"7px solid rgb(15 23 42 / var(--tw-bg-opacity))"}}
        date={edu.date}
        iconStyle={{background:"#fff"}}
        icon={
            <div className='flex justify-center items-center w-full h-full'>
                <img 
                    src={edu.icon}
                    alt={edu.name}
                    className='w-[60%] h-[60%] object-contain'
                />
            </div>
        }
    >
        <div >
            <h3 className=' text-[24px] font-bold'>
                {edu.title}
            </h3>
            <p className='m-0 font-semibold text-[16px]'>{edu.name}</p>
            <p>{edu.decription}</p>
        </div>

    </VerticalTimelineElement>
)

const MyExp = () => {
  return (
    <section className="my-20"> 
        <h2 className="text-center text-5xl font-bold mb-8">Experiencia</h2>
        <VerticalTimeline>
            {
                timeLineExp?.map((edu,index)=>(
                    <ExperienceCard key={index} edu={edu} className=' bg-gray-900' />
                ))
            }
           
        </VerticalTimeline>
    </section>
  )
}

export default MyExp;