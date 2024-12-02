import React from 'react'
import NavBar from './components/NavBar'
import AllProjectsData from './AllProjectsDetails'
import SingleProject from './components/SingleProject'
import FooterSTN from './Sections/FooterSTN'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const ProjectsPage = () => {

  useGSAP(()=>{

    gsap.from(`#DownAurTop`, {
      rotate : 90,
      // opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: `#DownAurTop`,
        start: "top 70%", 
        end : "bttom 10%",
        toggleActions: "play none none reverse",
        scrub : true,
        // markers :true
      },
    });

    AllProjectsData.forEach((project) => {
      gsap.from(`#${project.id}`, {
        x : project.XVal,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: `#${project.id}`,
          start: "top 70%", 
          end : "bttom 10%",
          toggleActions: "play none none reverse",
          scrub : true,
          // markers :true
        },
      });
    });

  },[])

  return (
    <div className='w-full min-h-screen text-black dark:text-white'>
      <Link to={'/'} >
      <div className="top-24 hover:scale-95 left-5 z-30 fixed flex justify-center items-center bg-black dark:bg-white py-3 rounded-full w-12 h-12 text-[#f158ea] text-2xl duration-300 cursor-pointer rotate-180">
      <FaArrowRightLong/>
      </div>
      </Link>
      <div className="right-5 bottom-24 z-30 fixed flex justify-center items-center bg-black dark:bg-white py-3 rounded-full w-12 h-12 text-[#f158ea] text-2xl animate-bounce cursor-pointer">
      <div id='DownAurTop' className='flex justify-center items-center w-full h-full -rotate-90'>
      <FaArrowRightLong/>
      </div>
      </div>
    <NavBar Projectpage={true}/>
    <div className="flex flex-col gap-12 pt-24 pl-5 w-[90%] AllProjectsContainer">
        {
        AllProjectsData.map((ImgData,idx)=>{
           return <SingleProject id={ImgData.id} key={idx} ImgData={ImgData}/>
        })
        }
      </div>
      <hr className='HorinzontalLine' />
      <FooterSTN/>
    </div>
  )
}

export default ProjectsPage