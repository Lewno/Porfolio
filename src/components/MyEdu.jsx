import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timeLineEdu from '../helper/timeLineEdu';

const ExperienceCard = ({edu}) => (
    <VerticalTimelineElement
        contentStyle={{background:"rgb(124 58 237)", color:"#fff"}}
        contentArrowStyle={{borderRight:"7px solid rgb(124 58 237)"}}
        date={edu.date}
        iconStyle={{background:"#fff"}}
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
            <p className='m-0 font-semibold text-[16px]'>{edu.name}</p>
        </div>

    </VerticalTimelineElement>
)

const MyEdu = () => {
  return (
    <section className="my-20"> 
        <h2 className="text-center text-5xl font-bold mb-8">Educación</h2>
        <VerticalTimeline className="before:bg-black dark:before:bg-white">
            {
                timeLineEdu?.map((edu,index)=>(
                    <ExperienceCard key={index} edu={edu} />
                ))
            }
           
        </VerticalTimeline>
    </section>
  )
}

export default MyEdu