import React, { useRef, useState } from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoLogoVercel } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const AllIcons = [
    { 
        Name : FaLinkedinIn,
        redirectToURL : "https://www.linkedin.com/in/hassaan-haider-627272294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    { 
        Name :  FiGithub,
        redirectToURL : "https://github.com/hassaanhaider88"
     },
    { 
        Name :  FaUpwork,
        redirectToURL : "https://www.upwork.com/freelancers/~018dbe8e7b42678764"
    },
    { 
        Name :  TbBrandFiverr,
        redirectToURL : "https://www.fiverr.com/s/Y3vyLp"
     },
    { 
        Name :  BiLogoNetlify,
        redirectToURL : "https://app.netlify.com/teams/hassaanhaider88"
    },
    { 
        Name :  FaTelegramPlane,
        redirectToURL : "https://t.me/HMKCodeWeb"
    }
]

const RightIcons = () => {
   
    const handleMediaLinks=(url)=>{
        window.open(url);
    }

    useGSAP(()=>{
        gsap.to('#AllLinks',{
         gap : "200px",
         duration : 2,
         opacity : 0,
         scrollTrigger : {
            trigger : '#PersonalImg',
            start: "top 30%", 
            end: "50%", 
            scrub: true,
         }
        })
    })


  return (
    <div id="AllLinks" className='top-0 right-0 z-20 absolute flex flex-col justify-center items-center gap-5 w-[80px] h-screen'>
       {
        AllIcons.map((icon,idx)=>{
       return <div key={idx} 
      onClick={()=>handleMediaLinks(icon.redirectToURL)}
        className='flex justify-center items-center bg-white hover:bg-[#ad15ab] dark:hover:bg-[#ad15ab] dark:bg-black rounded-full w-10 text-[#ad15ab] text-2xl hover:text-white hover:scale-95 h-10 dark:hover:text-black duration-200 cursor-pointer'>
        <icon.Name/>
        </div>
       
        })
       }
    </div>

  )
}

export default RightIcons
