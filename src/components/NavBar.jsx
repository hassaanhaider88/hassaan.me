// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import { Link, redirect } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BsNutFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from "react-icons/io";

const NavBar = ({Projectpage}) => {
  const [SelectedNLink, setSelectedNLink] = useState(0);
  const [isChecked, setIsChecked] = useState(true); 
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const NavBar = useRef(null);
  const logo = useRef(null); 
  const navLinks = useRef([]); 
  const toggleTheme = useRef(null);
  const contactBtn = useRef(null); 



useGSAP(() => {
  const tl = gsap.timeline();
  tl.fromTo(
    NavBar.current,
    { top: "-100px", opacity: 0 }, 
    { 
      top : "12px", 
      opacity: 1,
       duration: 2 , 
       delay : 1 }
  );

  tl.from(logo.current, {
    opacity: 0,
    y: -50,
    duration: 0.6,
    ease: "power3.out",
  });

  navLinks.current.forEach((link, index) => {
    tl.from(link, {
      opacity: 0,
      y: -20,
      duration: 0.1,
      delay: index * 0.01, 
      ease: "power3.out",
    });
  });

  gsap.from(toggleTheme.current, {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay : 1,
    ease: "back.out(1.7)",
  });

  gsap.from(contactBtn.current, {
    opacity: 0,
    scale: 0.8,
    duration:1,
    delay : 1,
    ease: "back.out(1.7)",
  });
}, []);


useEffect(() => {
  if(Projectpage){
    NavBar.current.classList.add('hidden');
  }
}, [])


   useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsChecked(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsChecked(false);
    }
  }, []);
  

  const handleToggleTheme = () => {
    if (isChecked) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    
    // Toggle the checked state
    setIsChecked(!isChecked);
  };

   const handleMenuIconOpenOrClose =()=>{
    console.log(IsMenuOpen);
   setIsMenuOpen(!IsMenuOpen)
   }


 const handleWhatsAppUrl =()=>{
  window.open('https://wa.me/923305819108')
 }


  return (
   <>
  
   <div ref={NavBar} className='top-10 left-1/2 z-40 fixed flex justify-between items-center bg-[#ffffffaf] dark:bg-[#000000ab] shadow-[#666363dc] shadow-md dark:shadow-[#dfdbdb] px-5 py-3 rounded-3xl w-[95%] text-black dark:text-white -translate-x-1/2 cursor-pointer overflow-hidden Inter_Font tInter_Fon'>
      {/* Left side bar Contianer */}
      <div className='relative flex justify-between items-center md:gap-5 md2:gap-12 px-2 w-[50%]'>
        {/* User Name Logo Type will be here */}
      <div ref={logo} className='w-fit h-fit text-4xl LogoUserName'>
        <h1 className='relative font-semibold text-black dark:text-white duration-300' >
          <span >Hassaan</span>
          <span className='text-[#d217b7] line'>.</span></h1>
      </div>
      {/* NavBar Link goes here */}
{/* NavBar Links */}
{["Home", "About me", "Projects", "Contact me"].map((item, idx) => (
          <h1
            key={idx}
            ref={(el) => (navLinks.current[idx] = el)} // Store each link in navLinks ref
            className="sm2:block hidden h-full text-nowrap"
          >
            <HashLink smooth to={`/#${item.toLowerCase().replace(" ", "")}`}>
              {item}
            </HashLink>
          </h1>
        ))}
           
      </div>
  {/* Right Side Will Be goes Here  */}

   <div ref={toggleTheme} className='sm2:flex justify-end items-center gap-3 md2:gap-8 hidden w-[40%]'>
   <div className="flex justify-center items-center gap-2 toggleButtonDayAndNight">
    <span>Light</span>
    <label className="switch">
    <input type="checkbox" checked={isChecked} onChange={handleToggleTheme}
      />
  <span className="slider"></span>
</label>
    <span>Dark</span>
   </div>
   <div  onClick={handleWhatsAppUrl} className="bg-[#320a58e7] hover:bg-[#575558d0] px-6 py-2 rounded-full text-green-500 text-lg hover:scale-105 transition duration-300 ContactUsBtn">
   <IoLogoWhatsapp/>
   </div>
   </div>

<span  className="flex justify-center items-center sm2:hidden bg-white rounded-full text-black dark:text-white MobileHumburgurIcon">
<label className="hamburger">
  <input type="checkbox" onChange={handleMenuIconOpenOrClose}/>
  <svg viewBox="0 0 32 32">
    <path className="line-top-bottom line" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
    <path className="line" d="M7 16 27 16"></path>
  </svg>
</label>
</span>
    </div>

    {/* Mobile Menu Here */}
    
 <div className={`fixed ${IsMenuOpen === true ? "left-0" : "-left-[100%]"} z-30 duration-500 dark:bg-black bg-white top-20 px-4 rounded-2xl w-full text-lg dark:text-white text-black cursor-pointer`}>
 <div>
 <h1 className={`h-full`}>
 <HashLink smooth to="/#home">Home</HashLink>
        </h1>  
           <h1 className={`h-full text-nowrap`}>
  <HashLink smooth to="/#about">About me</HashLink>
</h1>
<h1 className={`h-full text-nowrap`}>
  <HashLink smooth to="/projects">Projects</HashLink>
</h1>
<h1 className={`h-full text-nowrap`}>
  <HashLink smooth to="/#contact">Contact me</HashLink>
</h1>
 </div>
 <div>
 <div className='flex flex-col justify-start items-start gap-2 mt-2'>
   <div className="flex justify-start items-center gap-2 toggleButtonDayAndNight">
    <span>Light</span>
    <label className="switch">
    <input type="checkbox" checked={isChecked} onChange={handleToggleTheme}
      />
  <span className="slider"></span>
</label>
    <span>Dark</span>
   </div>
   <div  onClick={handleWhatsAppUrl} className="bg-[#320a58e7] hover:bg-[#7c4ca8d0] mb-2 px-6 py-2 rounded-full w-fit text-white hover:scale-105 transition duration-300 ContactUsBtn">
    <IoLogoWhatsapp/>
    </div>
   </div>
 </div>
 </div>
   </>
  )
}

export default NavBar