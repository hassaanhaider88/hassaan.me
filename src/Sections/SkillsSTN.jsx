import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger);

const SkillsSTN = () => {


  const AllSkillsList = [
    {
      id : "html",
    name : "HTML5",
    numberOfAverage : "9" ,
    average : "90%"
    },
    {
      id : "css",
      name : "CSS3",
      numberOfAverage : "8" ,
      average : "80%"
    },{
      id : 'js',
      name : "JavaScript",
      numberOfAverage : "7" ,
      average : "75%"
    },{
      id : "tcss",
      name : "TailwindCSS",
      numberOfAverage : "8" ,
      average : "90%"
    },{
      id : "bootstrap",
      name : "BootStrap",
      numberOfAverage : "8" ,
      average : "80%"
    },{
      id : "responsice",
      name : "Responsive",
      numberOfAverage : "9" ,
      average : "90%"
    },
    {
      id : "jq",
      name : "JQuery",
      numberOfAverage : "7" ,
      average : "70%"
    },
    {
      id : "react",
      name : "React JS",
      numberOfAverage : "8" ,
      average : "85%"
    },{
      id : "next",
      name : "Next JS",
      numberOfAverage : "8" ,
      average : "80%"
    },
    {
      id : "node",
      name : "Node JS",
      numberOfAverage : "7" ,
      average : "70%"
    },
    {
      id : 'express',
      name : "Express JS",
      numberOfAverage : "8" ,
      average : "80%"
    },
    {
      id : 'mongodb',
      name : "MongoDB",
      numberOfAverage : "7" ,
      average : "70%"
    }
  ]
  
  const containerRef = useRef(null);
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 40%",
        end: "20%",
        scrub: true, // Smooth scrolling
      },
    });
  
    // Main container animation
    tl.from(containerRef.current, {
      y: "-100px",
      opacity: 0,
      duration: 1,
    });
  
    // Individual skills animation
    AllSkillsList.forEach((skill) => {
      gsap.from(`#${skill.id}`, {
        y: "100px",
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: `#${skill.id}`,
          start: "top 90%", 
          end : "bttom 50%",
          toggleActions: "play none none reverse",
          scrub : true,
        },
      });
    });
    }, []);

  return (
    <div ref={containerRef} id='SkillSection' className='w-full min-h-screen text-black dark:text-white'>
        <div className='flex justify-evenly items-center'>
            <div className="font-semibold text-nowrap text-xl xsm:text-3xl md2:text-6xl md:text-4xl Text">My Skills</div>
            <div className="ArrowIcon">
                <img src="../../LongArrow.svg" alt="" />
            </div>
        </div>

    <div className="flex flex-col items-center gap-8 md2:grid grid-cols-2 px-2 xsm:px-10 w-full">
        
        {
          AllSkillsList.map((skill,idx)=>{
                   return  <div key={idx} id={skill.id} className='flex xsm:flex-row flex-col justify-evenly md2:justify-between gap-2 px-8 w-full'>
                    <h1 className='font-semibold text-xl'>{skill.name}</h1>
                     <CircleIndicator count={skill.numberOfAverage} Average={skill.average}/>
                    </div>
          })
        }

        
    </div>   

    </div>
  )
}

export default SkillsSTN




const CircleIndicator = ({ count,Average }) => {
    const circlesToFill = Math.max(0, Math.min(10, count)); 
    const [IsShowAverage, setIsShowAverage] = useState(false) 
    const handleMEnter = (idx)=>{
        setIsShowAverage(true)
    }
    const handleMMouse = (idx)=>{
        setIsShowAverage(true)
    }
    const handleMLeave = ()=>{
    
        setIsShowAverage(false)
    }
    return (
      <div className='relative flex flex-col justify-center items-center w-fit'>
    <h1 className={`-top-10 duration-1000 bg-[#f832da] text-white text-semibold absolute p-2 rounded-xl ${IsShowAverage ? 'z-10 opacity-[0.90]' : 'opacity-0 z-0'}`}>The Total Average {Average}</h1>
        <div  className="flex gap-2 w-fit">
        {Array.from({ length: 10 }, (_, index) => (
          <div
          onMouseEnter={()=>handleMEnter(index)} onMouseMove={()=>handleMMouse(index)} onMouseLeave={handleMLeave}
            key={index}
            className={` w-5 h-5  flex z-10 justify-center items-center text-[10px] cursor-pointer hover:scale-90 duration-500 rounded-full`}
            style={{
              backgroundColor: index < circlesToFill ? "#da4ec7" : "#f832dab6",
              opacity: index < circlesToFill ? 1 : 0.4,
            }}
          >
          </div>
        ))}
      </div>
      </div>
    );
  };