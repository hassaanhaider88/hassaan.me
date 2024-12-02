import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
gsap.registerPlugin(ScrollTrigger)
const LeftSlashes = () =>{

    // useGSAP(()=>{
    //     gsap.to('#LeftSlashed',{
    //      gap : "200px",
    //      duration : 1,
    //      opacity : 0,
    //      scrollTrigger : {
    //         trigger : '#PersonalImg',
    //         start: "top 30%", 
    //         end: "50%", 
    //         scrub: true,
    //      }
    //     })
    // })

    return (
    <div id='LeftSlashed' className='flex flex-col justify-center items-center gap-10 w-[70px] h-screen'>
        <div className='bg-[#cf1fb7] my-2 rounded-xl w-full h-1 rotate-[32deg]'></div>
        <div className='bg-[#cf1fb7] my-2 rounded-xl w-full h-1 rotate-[32deg]'></div>
        <div className='bg-[#cf1fb7] my-2 rounded-xl w-full h-1 rotate-[32deg]'></div>
        <div className='bg-[#cf1fb7] my-2 rounded-xl w-full h-1 rotate-[32deg]'></div>
        <div className='bg-[#cf1fb7] my-2 rounded-xl w-full h-1 rotate-[32deg]'></div>

    </div>
    )
}

export default LeftSlashes;