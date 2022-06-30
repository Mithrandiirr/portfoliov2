import ThemeNavbar from './ThemeNavbar'
import Image from 'next/image'
import Selfie from '../assets/imagee.png'
import { UpDown } from "./Animations"

const FrontPage = () => {
  const Cursor = () =>
  {
     document.querySelector('#skills').scrollIntoView({ 
         behavior: 'smooth' 
       });
  }
  return (
    <>
        {/* <ThemeNavbar /> */}
        <div className='text-center mt-[8rem] back transform-gpu'>
          <h1 className='text-[90px] text-medium leading-initial front '>
            El Yaakoubi <span className='mohammed font-bold uppercase  text-[40px] text-[#D0E015]'>Mohammed .</span>
          </h1>
          <div className='flex justify-center'>
          <div className='flex flex-row w-[785px]  items-center mt-[2rem] ml-[6rem]'>
            <div className='text-left flex-1 relative jamstack  leading-[30px] mt-[-1rem]'>
           <span className='text-[20px]'>JAMStack & Fullstack developer experienced in the modern web , SEO , speed optimization and UI/UX.
I have gained the trust and the satisfaction of many clients making their end projects during my freelancing journey.
<br/></span><span className='font-light text-[16px]'>“Writing clean and reusable code leads to better end product”</span>
            </div>
          </div>
          </div>
        </div>
        <div className='flex justify-center relative bottom-[-90px] cursor' >
        <UpDown>
        <svg onClick={Cursor} className='cursor-pointer' width="48" height="36" viewBox="0 0 57 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 1L25.2377 32.3871C27.2764 35.1407 31.4178 35.0746 33.3676 32.2573L55 1" stroke="#D0E015" strokeWidth="3"/>
        </svg>
          </UpDown>
        </div>
    </>
  )
}

export default FrontPage