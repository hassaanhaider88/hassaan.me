import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap';
import React from 'react'
import { FaTelegramPlane } from "react-icons/fa"; // replace by Download icon
import { FaDownload } from 'react-icons/fa6';
 
const DownloadCV = ({setIsCVDownloaderOpen,IsCVDownloaderOpen}) => {

  return (
    <div id='DownloadBtn' className='top-[50%] xsm:top-[20%] md2:top-[60%] left-[80%] sm2:left-[52%] z-10 absolute flex flex-col justify-center items-center bg-[#c7b0c480] dark:bg-[#d216b988] rounded-full w-[98px] h-[98px] text-white -translate-x-1/2 duration-300 cursor-pointer hover:scale-95'>
        <div onClick={()=>setIsCVDownloaderOpen(!IsCVDownloaderOpen)} className='flex flex-col justify-center items-center bg-[#c7b0c465] dark:bg-[#d216b986] w-[80px] h-[80px] text-white duration-300 cursor-pointer hover:scale-95 rounded-full'>
        <div   className='flex flex-col justify-center items-center bg-[#c7b0c4] dark:bg-[#d216b8] w-16 h-16 text-white duration-300 cursor-pointer hover:scale-95 rounded-full'>
       <FaDownload/>
       <h1>CV</h1>
          </div>
        </div>
    </div>
  )
}

export default DownloadCV