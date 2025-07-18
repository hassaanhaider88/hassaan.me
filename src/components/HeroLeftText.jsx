import { useGSAP } from '@gsap/react';
import React, { useEffect, useState } from 'react'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
const HeroLeftText = () => {
  return (
    <div id='Main'  className='relative md2:mt-0 mt-20 flex justify-center items-center w-full md2:w-1/2 h-screen'>
        <div id='TypingText'  className='block -bottom-[17%] md2:-bottom-[40%] left-[70%] md2:left-[12%] absolute w-full h-full -translate-x-1/2 md2:translate-x-0'>
        <h1 className='xsm:block bottom-[55%] sm:bottom-0 left-[7%] sm:left-0 sm:static absolute hidden w-[545px] sm:rotate-0 text-[rgb(104,86,86)] text-nowrap text-xl sm2:text-5xl sm:text-5xl xsm:text-2xl md2:text-7xl dark:text-[#ffffff60] uppercase open-sans rotate-90'><TypingAnimation/></h1>
        <h1 id="NameHeading" className="relative my-5 text-7xl text-black dark:text-white">Hassaan <br /> Haider <span className='text-[#d217b7] ml-3 line'>.</span>Dev</h1>
        <p id='AboutLine' className='text-[rgb(104,86,86)] dark:text-[#ffffffb4]'>I'm front end developer <br /> in React <FaReact className="inline text-blue-500" />  and Next Js <SiNextdotjs className="inline text-gray-800 dark:text-white" /> <br /> as well. I can work remotely <br /> work as well on-site.</p>
   
        </div>
    </div>
  )
}

export default HeroLeftText



const TypingAnimation = () => {
    const phrases = [
      { text: "FRONT END DEVELOPER", icon: null },
      { text: "React JS DEVELOPER", icon: <FaReact className="ml-2 text-blue-500" /> },
      { text: "Next JS DEVELOPER", icon: <SiNextdotjs className="ml-2 text-gray-800 dark:text-white" /> },
    ];
  
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const currentPhrase = phrases[currentPhraseIndex].text;
      const speed = isDeleting ? 20 : 40; // Typing and deleting speeds
  
      const timeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayedText((prev) => prev.slice(0, -1)); // Remove characters
        } else {
          setDisplayedText((prev) => currentPhrase.slice(0, prev.length + 1)); // Add characters
        }
  
        if (!isDeleting && displayedText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        } else if (isDeleting && displayedText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length); // Move to the next phrase
        }
      }, speed);
  
      return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentPhraseIndex, phrases]);
  
    return (
      <div className="flex items-center font-bold text-[rgb(104,86,86)] text-5xl dark:text-[#ffffffd2]">
        {displayedText}
        {displayedText === phrases[currentPhraseIndex].text && phrases[currentPhraseIndex].icon}
        <span className="blinking-cursor fire-effect">|</span>
      </div>
    );
  };


  