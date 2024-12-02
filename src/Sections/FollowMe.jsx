import React, { useRef } from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoLogoVercel } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const FollowMe = () => {

  useGSAP(()=>{
    gsap.from(".FollowHeading",{
       y : -400,
   opacity : 0,
   duration : 1.4,
   scrollTrigger : {
     trigger : "#FollowMe",
     start: "top 60%", 
     end: "bttom 50%", 
     scrub : true,
     // markers : true
   }
     })
   },[])

  useGSAP(()=>{
   gsap.from(".CicleDot",{
      y : "400px",
  opacity : 0,
  duration : 2,
  stagger: 0.2,
  scrollTrigger : {
    trigger : "#FollowMe",
    start: "top 60%", 
    end: "bttom 50%", 
    scrub : true,
    // markers : true
  }
    })
  },[])
  
  useGSAP(()=>{
    gsap.from(".IconsRefClass",{
       x : "400px",
   opacity : 0,
   duration : 1.4,
   stagger: 2,
   scrollTrigger : {
     trigger : "#FollowMe",
     start: "top 60%", 
     end: "bttom 50%", 
     scrub : true,
    //  markers : true
   }
     })
   },[])



const AllIcons = [
    { 
        Name : FaFacebookF,
        redirectToURL : "FaceBook"
    },
    { 
        Name :  FiGithub,
        redirectToURL : "GitHub"
     },
    { 
        Name :  IoLogoVercel,
        redirectToURL : "Vercel"
    },
    { 
        Name :  FaWhatsapp,
        redirectToURL : "WhatsApp"
     },
    { 
        Name :  FaTelegramPlane,
        redirectToURL : "Telegram"
    },
    { 
        Name :  FaYoutube,
        redirectToURL : "YouTube"
    }
]

// console.log(IconsRef.current);


  return (
    <div className='flex sm:flex-row flex-col justify-center sm:justify-between items-center gap-5 px-10 py-3 w-full text-black dark:text-white'>
      <div className='flex flex-col items-center gap-3'>
        <h1 className='py-3 font-semibold text-3xl text-nowrap xsm:text-7xl overflow-hidden FollowHeading'>Follow me</h1>
         <div className='flex gap-1 w-full sm:w-fit'>
       <CricleOrDot OpacityVal={'opacity-[1] xsm:block hidden'}/>
       <CricleOrDot OpacityVal={'opacity-[1] xsm:block hidden'}/>
       <CricleOrDot OpacityVal={'opacity-[1] '}/>
       <CricleOrDot OpacityVal={'opacity-[1] xsm:block hidden'}/>
       <CricleOrDot OpacityVal={'opacity-[0.9]'}/>
       <CricleOrDot OpacityVal={'opacity-[0.8] xsm:block hidden'}/>
       <CricleOrDot OpacityVal={'opacity-[0.7]'}/>
       <CricleOrDot OpacityVal={'opacity-[0.7] xsm:block hidden'}/>
       <CricleOrDot OpacityVal={'opacity-[0.6]'}/>
       <CricleOrDot OpacityVal={'opacity-[0.6]'}/>
       <CricleOrDot OpacityVal={'opacity-[0.5]'}/>
       <CricleOrDot OpacityVal={'opacity-[0.4]'}/>
       <CricleOrDot OpacityVal={'opacity-[0.3] xsm:block hidden'}/>
       <CricleOrDot OpacityVal={'opacity-[0.2] xsm:block hidden'}/>
       <CricleOrDot OpacityVal={'opacity-[0.1]xsm:block hidden'}/>
         </div>
      </div>
      <div className='gap-2 grid grid-cols-3'>
      {
        AllIcons.map((icon,idx)=>{
       return <div key={idx}
        className={`flex justify-center items-center bg-white hover:bg-[#ad15ab] dark:hover:bg-[#ad15ab] dark:bg-black rounded-full w-10 text-[#ad15ab] text-2xl hover:text-white hover:scale-95 h-10 dark:hover:text-black duration-200 cursor-pointer`}>
        <icon.Name />
        </div>
        })
       }
      </div>
    </div>
  )
}

export default FollowMe


const CricleOrDot = ({OpacityVal})=>{
    return(
        <div  className={`h-5 CicleDot w-5 rounded-full ${OpacityVal} bg-[#ad15ab]`}></div>
    )
}