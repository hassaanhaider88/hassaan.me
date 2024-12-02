import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HashLink } from 'react-router-hash-link';

gsap.registerPlugin(ScrollTrigger);
const AboutMeSTN = () => {
  const circleRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(()=>{
    gsap.to("#TypingText",{
      y : "-100px",
      opacity : 0.8,
     duration : 2,
     scrollTrigger : {
       trigger : "#TypingText",
       start: "top 40%", 
       end: "20%", 
       scrub : true,
     }
    })
    gsap.to("#PersonalImgContainerOne",{
      y : "-100px",
      opacity : 0.2,
     duration : 2,
     scrollTrigger : {
       trigger : "#PersonalImgContainerOne",
       start: "top 40%", 
       end: "20%", 
       scrub : true,
     }
    })
    gsap.to("#PersonalImg",{
      scale : 0.8,
     duration : 2,
     scrollTrigger : {
       trigger : "#PersonalImg",
       start: "top 40%", 
       end: "20%", 
       scrub : true,
     }
    })
 },[])

  useGSAP(()=>{
    let tl = gsap.timeline();
       tl.from(containerRef.current, {
          y : "-300px" ,
          opacity : 0,
          scrollTrigger: {
            trigger: containerRef.current, 
            start: "top 40%", 
            end: "50%", 
            // markers :true,
            scrub: true, 
          },
        })        
    }, []);

  const handleMouseLeave = () =>{
    circleRef.rotateX = 0;
    circleRef.rotateY = 0
  }

  const handleMouseMove = (e) => {
    const circle = circleRef.current;

    // Get dimensions and mouse position relative to the circle
    const { left, top, width, height } = circle.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    // Map mouse movement to rotation angles
    const rotateX = -(y / height) * 30; // Tilt effect
    const rotateY = (x / width) * 30;  // Rotate effect

    // Apply rotation
    circle.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
//  19 4493354
  return (
    <div ref={containerRef} id="AboutSection"  onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}  className='block relative md2:flex justify-evenly pt-[10%] w-full min-h-screen open-sans'>
      <div id="container" className="flex justify-center md2:justify-end items-center md2:items-end mr-5 w-full md2:w-1/2 aboutMeImage">
       <div className="left-[20%] z-20 absolute" >
        <RotatingCircle circleRef={circleRef}/>
       </div>
       <div className='flex justify-center items-center border-[#da4ec7] border-[2px] rounded-full w-[220px] xsm:w-[420px] h-[220px] xsm:h-[420px] overflow-hidden'>
       <div className='rounded-full w-[200px] xsm:w-[400px] h-[200px] xsm:h-[400px] overflow-hidden'>
        <img src="../../AboutMeImg.png" className='z-10 w-full h-full rotate-3' alt="HMK Hassaan" width={'100%'} height={'100%'} />
       </div>
       </div>
      </div>
      <div className="relative flex flex-col justify-evenly items-center md2:items-start mt-10 md2:mt-0 pl-8 w-full md2:w-1/2 aboutMeSmallText">
      <div>
      <div className='block md2:hidden font-semibold text-7xl text-black dark:text-white'>About <br />me</div>
        <div className="mb-10 ml-[60%] text-[#da4ec7] text-6xl arrowTop self-end"><FaArrowRightLong/></div>
         <p id="ParaText" className='w-[250px] xsm:w-[400px] text-black dark:text-white'>
         I am a skilled Front-End Developer with expertise in React.js and Next.js, crafting seamless and dynamic user interfaces. Proficient in the MERN stack (MongoDB, Express.js, React, Node.js), I excel in building full-stack applications. With a strong command of Git and GitHub, I ensure efficient version control and collaboration.
         </p>
       <div  className="bg-[#cd17b9] mt-10 mb-2 px-6 py-2 rounded-full w-fit text-black dark:text-white transition cursor-pointer hover:scale-95 duration-500 ContactUsBtn MyButton">
       <HashLink smooth to={"#contactme"}>
        Contact me
            </HashLink>
        </div>
      </div>
      </div>
      <div className='md2:block md2:absolute hidden mt-20 text-7xl text-black dark:text-white'>About <br /> me</div>
    </div>
  )
}

export default AboutMeSTN


// import React, { useRef } from "react";

const RotatingCircle = ({circleRef}) => {
 

  return (
    <div
      className="flex justify-center items-center"
      
    >
      <div
       ref={circleRef}
        className="relative bg-[#d42fbe] shadow-2xl rounded-full w-20 h-20"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          transition: "transform 0.7s ease-out", // Smooth effect
        }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#888484] dark:from-[#da4ec7] to-[#790e6afb] opacity-80 shadow-lg rounded-full"></div>
        {/* Back Face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#888484] dark:from-[#da4ec7] to-[#8a5c84e7] opacity-50 rounded-full"
          style={{
            transform: "rotateY(180deg)",
          }}
        ></div>
      </div>
    </div>
  );
};

// export default RotatingCircle;
