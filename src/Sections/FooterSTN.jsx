import React from 'react'

const Footer = () => {
  var NarLink = [
    { name : 'Home'  },
    { name : "Projects"},
    { name : "Blogs" },
    { name :  "Contact" }
   ]

  return (
    <>
    <div className='relative'>
    <div className='flex xsm:flex-row flex-col justify-between items-center px-3 xsm:px-10 w-full font-semibold text-black dark:text-white'>
        <div className='w-fit h-fit text-4xl LogoUserName'>
        <h1 className='relative font-semibold duration-300' >Hassaan<span className='text-[#d217b7]'>.</span></h1>
      </div>
      <div className='flex gap-5'>
      {NarLink.map((nlink,index)=>  {
             return <h1 className={`h-full cursor-pointer duration-300 hover:underline`} key={index}>{nlink.name}</h1>
           })}
      </div>
    </div>
    <div className='right-10 absolute flex justify-between items-center gap-2 mt-1 w-fit text-[#a8a5a5] text-[11px] cursor-pointer cursor-pointer'>
      <p>&#169;Hassaan Haider.All rights reserved</p>
      <p className='hover:underline'>Terms of Use</p>
      <p className='hover:underline'>Privacy Policy</p>
    </div>
    </div>
    </>
  )
}

export default Footer