import React,{useRef, useState} from 'react'
import SingleProject from '../components/SingleProject'
import { GrFormNextLink } from "react-icons/gr";
import AllProjectsData from '../AllProjectsDetails';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const MyProjectsSTN = () => {
    const [IsImgViewerShown, setIsImgViewerShown] = useState(false)
  const [ModelViewImgUri, setModelViewImgUri] = useState('')

  const containerRef = useRef(null); // Ref for the container div
  useGSAP(()=>{
    gsap.from("#ProjectSectionHeading",{
      width : 0,
      opacity : 0.8,
      duration : 2,
      scrollTrigger : {
         trigger : "#projects",
         start: "top 60%", 
         end: "bttom 40%", 
         scrub : true,
     }
    })

    AllProjectsData.slice(0,4).forEach((project) => {
      gsap.from(`#${project.id}`, {
        x : project.XVal,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: `#${project.id}`,
          start: "top 80%", 
          end : "bttom 20%",
          toggleActions: "play none none reverse",
          scrub : true,
          // markers :true
        },
      });
    });

  },[])
 const handleImgViewerShown = (ImgUri) =>{
  setIsImgViewerShown(true)
   setModelViewImgUri(ImgUri)
} 
  return (
    <>
    <div id='ProjectSection' className='flex flex-col items-center px-5 w-full min-h-screen text-black dark:text-white'>
           <h1 id='ProjectSectionHeading' className='py-4 w-fit text-6xl text-center text-nowrap overflow-hidden'>My projects</h1>
      <div className="flex flex-col gap-12 mt-10 w-[90vw] min-h-screen AllProjectsContainer">
        {
        AllProjectsData.slice(0,4).map((ImgData,idx)=>{
           return <SingleProject key={idx} id={ImgData.id} handleImgViewerShown={handleImgViewerShown} ImgData={ImgData}/>
        })
        }
      </div>
       <h1 className='mt-10 font-semibold text-black hover:scale-95 text-lg dark:text-[#c73ebc] duration-200 cursor-pointer'>
      <Link to={'/projects'} > Want to See More <GrFormNextLink className='inline'/></Link>
        </h1>
    </div>
    {IsImgViewerShown && <div onClick={(e)=>setIsImgViewerShown(false)} className="handleImgViewerDiv fixed top-0 z-50 overflow-hidden py-10 bg-[#333]  h-screen w-full px-5 md:px-10 flex justify-center items-center">
  <div onClick={(e) => e.stopPropagation()}  className='h-full rounded-t-[30px] w-full overflow-y-auto overflow-x-hidden '>
      <img src={`../${ModelViewImgUri}`} alt={ModelViewImgUri} className='w-full bg-cover' />
</div>
  </div>}
    </>
  )
}

export default MyProjectsSTN


