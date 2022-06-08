import React from 'react'
import ThemeNavbar from './ThemeNavbar'
import Image from 'next/image'
import Selfie from '../assets/image.png'
import { UpDown, UpDownWide } from "./Animations"
import Svg from './Svg'

const FrontPage = () => {
  return (
    <>
        <ThemeNavbar />
        <div className='text-center mt-[3rem] back transform-gpu'>
          <h1 className='text-[90px] text-medium leading-initial '>
            El Yaakoubi <span className='mohammed font-bold uppercase  text-[40px] text-[#D0E015]'>Mohammed .</span>
          </h1>
          <div className='flex justify-center'>
          <div className='flex flex-row w-[785px]  items-center mt-[2rem]'>
            <div className='mr-[7rem] image'>
              <Image src={Selfie} width={190} height={200}  alt='Selfie' />
            </div>
            <div className='text-left flex-1 relative jamstack  leading-[30px] mt-[-1rem]'>
           <span className='text-[20px]'> JAMStack developer experienced in the modern web , SEO , speed optimization and UI/UX.
I have gained the trust and the satisfaction of many clients making their end projects during my freelancing journey.
<br/></span><span className='font-light text-[16px]'>“Have patience .Go where you must go, and hope!”</span>
            </div>
          </div>
          </div>
          
        </div>
        <div className='flex justify-center relative bottom-[-90px]'>
        <svg className='cursor-pointer' width="48" height="36" viewBox="0 0 57 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 1L25.2377 32.3871C27.2764 35.1407 31.4178 35.0746 33.3676 32.2573L55 1" stroke="#D0E015" stroke-width="3"/>
        </svg>
        </div>
    </>
  )
}

export default FrontPage