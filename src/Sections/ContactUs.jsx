import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";



const ContactUs = () => {
  const [UName, setUName] = useState('')
  const [UEmail, setUEmail] = useState('')
  const [UMsg, setUMsg] = useState('')

  const handleContactForm = (e) =>{
   e.preventDefault();
  if(UName && UEmail && UMsg){
   window.location.href = `mailto:${UEmail}?subject=${UMsg}`;
  }else{
    alert('Please Fill All Fields')
  }
 }
  return (
    <div id='contact' className='relative flex flex-col items-center w-full text-black dark:text-white'>
       <h1 id='ContectSectionHeading' className='py-2 w-fit h-fit font-semibold text-3xl text-center text-nowrap xsm:text-6xl overflow-hidden'>Contact me</h1>
       <div className="py-4 w-[250px] xsm:w-[400px] FormContainer">
        <form onSubmit={handleContactForm} >
            <div className='Input'>
            <label className='block font-semibold' htmlFor="Name">Name</label>
            <input value={UName}  onChange={(e)=>setUName(e.target.value)}  type="text" required placeholder='Enter Your Name...' className='bg-[#230b21] shadow-lg p-2 rounded-lg w-full font-semibold italic outline-none' name="" id="" />
            </div>
            <div className='mt-3 Input'>
            <label className='mb-1 font-semibold' htmlFor="Name">Email</label>
            <input  value={UEmail}  onChange={(e)=>setUEmail(e.target.value)} type="text" placeholder='Enter Your Email...' required className='bg-[#230b21] p-2 rounded-lg w-full font-semibold italic outline-none' name="" id="" />
            </div>
            <div className='mt-3 Input'>
            <label className='mb-1 font-semibold' htmlFor="Name">Message</label>
            <textarea value={UMsg}  onChange={(e)=>setUMsg(e.target.value)} placeholder='Enter Your Message...' required className='bg-[#230b21] p-2 rounded-lg w-full h-20 font-semibold text-white italic outline-none resize-none' />
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