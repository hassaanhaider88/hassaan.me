import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger)
const ContactUs = () => {
  // useGSAP(()=>{
  //   let tl = gsap.timeline()
  //   tl.from("#ContectSectionHeading",{
  //     width : 0,
  //     opacity : 0.8,
  //     duration : 2,
  //     scrollTrigger : {
  //     trigger : "#contactme",
  //     start: "top 60%", 
  //     end: "bttom 40%", 
  //     scrub : true,
  //    }
  //   })
  //   tl.from(".Input",{
  //     y : 400,
  // opacity : 0,
  // duration : 0.9,
  // stagger: 0.2,
  // scrollTrigger : {
  //   trigger : "#contactme",
  //   start: "top 60%", 
  //   end: "bttom 40%", 
  //   scrub : true,
  // }
  //   })

  // },[])
  return (
    <div id='contact' className='relative flex flex-col items-center w-full text-black dark:text-white'>
       <h1 id='ContectSectionHeading' className='py-2 w-fit h-fit font-semibold text-3xl text-center text-nowrap xsm:text-6xl overflow-hidden'>Contact me</h1>
       <div className="py-4 w-[250px] xsm:w-[400px] FormContainer">
        <form action="" method="post">
            <div className='Input'>
            <label className='block font-semibold' htmlFor="Name">Name</label>
            <input  type="text" required placeholder='Enter Your Name...' className='bg-[#230b21] shadow-lg p-2 rounded-lg w-full font-semibold italic outline-none' name="" id="" />
            </div>
            <div className='mt-3 Input'>
            <label className='mb-1 font-semibold' htmlFor="Name">Email</label>
            <input  type="text" placeholder='Enter Your Email...' required className='bg-[#230b21] p-2 rounded-lg w-full font-semibold italic outline-none' name="" id="" />
            </div>
            <div className='mt-3 Input'>
            <label className='mb-1 font-semibold' htmlFor="Name">Message</label>
            <textarea placeholder='Enter Your Message...' required className='bg-[#230b21] p-2 rounded-lg w-full h-20 font-semibold text-white italic outline-none resize-none' />
            <button className="relative left-1/2 text-black dark:text-white -translate-x-1/2 MyButton">Send Me</button>
            </div>
        </form>
       </div>
       <span className="right-3 md:right-[10%] bottom-0 xsm:bottom-[30%] absolute p-2 w-fit text-[#cd18b3] text-6xl rotate-180">
       <div className="ArrowIcon">
                <FaArrowRightLong/>
            </div>
       </span>
    </div>
  )
}

export default ContactUs