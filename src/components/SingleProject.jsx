import React from 'react'
import { HiOutlineExternalLink } from "react-icons/hi";
const SingleProject = ({ImgData,id}) => {
    const handleLinkClick =(link)=>{
        window.open(link)
    }
    console.log(ImgData);
  return (
    <div id={id} className={`xsm:flex block m-0 p-3 gap-5 justify-evenly ${ImgData.FlexDirecton} shadow-2xl rounded-xl `}>
        <div className='rounded-xl w-full xsm:w-1/2 h-[45vh] overflow-x-hidden overflow-y-scroll OuterProjectImgContainer'>
     <img className="w-full duration-200 cursor-[url('../../AboutMeImg.png')] overflow-hidden"  src={ImgData.ProjectImgURl}  alt="" />
        </div>
    <div className='relative flex flex-col justify-center items-center w-full xsm:w-1/2 text-center'>
        <h1 className='font-bold text-sm xsm:text-2xl'>{ImgData.ProjectImgName}</h1>
        <p className='py-3 font-sans text-sm'>{ImgData.ProjectDesc}</p>
        <p className='font-bold text-sm'>{ImgData.ProjectImgCreatedAt}</p>
        <div onClick={()=>handleLinkClick(ImgData.ProjectUrlRedirectTo)} className={`${ImgData.IconsDirection} hover:scale-105 duration-300 absolute xsm:text-2xl text-lg cursor-pointer RedirectUrl `}>
            <HiOutlineExternalLink/>
        </div>
    </div>
    </div>
  )
}

export default SingleProject