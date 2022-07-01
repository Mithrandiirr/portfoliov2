import ThemeNavbar from './ThemeNavbar'
import Image from 'next/image'
import Selfie from '../assets/imagee.png'
import Link from 'next/link'
import { UpDown } from "./Animations"

const FrontPage = () => {

  return (
    <>
        {/* <ThemeNavbar /> */}
        <div className='text-center mt-[8rem] back transform-gpu'>
          <h1 className='text-[90px] text-medium leading-initial front '>
            El Yaakoubi <span className='mohammed font-bold uppercase  text-[40px] text-[#D0E015]'>Mohammed .</span>
          </h1>
          <div className='flex justify-center'>
          <div className='flex flex-col  w-[785px]  items-center mt-[2rem] ml-[6rem]'>
            <div className='text-left flex-1 relative jamstack  leading-[30px] mt-[-1rem]'>
           <span className='text-[20px]'>JAMStack & Fullstack developer experienced in the modern web , SEO , speed optimization and UI/UX.
I have gained the trust and the satisfaction of many clients making their end projects during my freelancing journey.
<br/></span><span className='font-light text-[16px]'>“Writing clean and reusable code leads to better end product”</span>
            </div>
            {/* <div className=' relative'> */}
          <div className='flex flex-row mt-2 ml-[4rem] justify-center relative  gap-[3rem] '>
       <Link href='https://github.com/Mithrandiirr' target='_blank'>
       <a>
       <svg className='cursor-pointer' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 0C7.83125 0 0 7.83125 0 17.5C0 25.2437 5.00938 31.7844 11.9656 34.1031C12.8406 34.2562 13.1687 33.7313 13.1687 33.2719C13.1687 32.8563 13.1469 31.4781 13.1469 30.0125C8.75 30.8219 7.6125 28.9406 7.2625 27.9562C7.06563 27.4531 6.2125 25.9 5.46875 25.4844C4.85625 25.1562 3.98125 24.3469 5.44688 24.325C6.825 24.3031 7.80938 25.5937 8.1375 26.1187C9.7125 28.7656 12.2281 28.0219 13.2344 27.5625C13.3875 26.425 13.8469 25.6594 14.35 25.2219C10.4563 24.7844 6.3875 23.275 6.3875 16.5812C6.3875 14.6781 7.06563 13.1031 8.18125 11.8781C8.00625 11.4406 7.39375 9.64687 8.35625 7.24062C8.35625 7.24062 9.82187 6.78125 13.1687 9.03438C14.5688 8.64062 16.0562 8.44375 17.5438 8.44375C19.0312 8.44375 20.5188 8.64062 21.9188 9.03438C25.2656 6.75938 26.7313 7.24062 26.7313 7.24062C27.6938 9.64687 27.0813 11.4406 26.9063 11.8781C28.0219 13.1031 28.7 14.6562 28.7 16.5812C28.7 23.2969 24.6094 24.7844 20.7156 25.2219C21.35 25.7687 21.8969 26.8187 21.8969 28.4594C21.8969 30.8 21.875 32.6812 21.875 33.2719C21.875 33.7313 22.2031 34.2781 23.0781 34.1031C26.5521 32.9302 29.5709 30.6975 31.7095 27.7191C33.8481 24.7407 34.999 21.1667 35 17.5C35 7.83125 27.1688 0 17.5 0Z" fill="#363625"/>
       </svg>
       </a>
       </Link>
       <Link href='https://twitter.com/0xmithrandiir' target='_blank'>
       <a>
       <svg className='cursor-pointer' width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.286 9.874C45.616 10.614 43.822 11.114 41.936 11.34C43.882 10.1756 45.3379 8.34293 46.032 6.184C44.2037 7.26998 42.2027 8.03439 40.116 8.444C38.7128 6.94573 36.8541 5.95265 34.8287 5.61895C32.8032 5.28524 30.7242 5.62958 28.9145 6.59851C27.1048 7.56743 25.6656 9.10672 24.8203 10.9774C23.9751 12.8481 23.7711 14.9455 24.24 16.944C20.5354 16.758 16.9113 15.7951 13.6029 14.1178C10.2945 12.4405 7.37571 10.0863 5.03602 7.208C4.23602 8.588 3.77602 10.188 3.77602 11.892C3.77513 13.426 4.15289 14.9365 4.87578 16.2895C5.59867 17.6424 6.64435 18.7961 7.92002 19.648C6.44058 19.6009 4.99377 19.2012 3.70002 18.482V18.602C3.69987 20.7535 4.44409 22.8388 5.80639 24.504C7.16869 26.1692 9.06517 27.3119 11.174 27.738C9.80159 28.1094 8.3627 28.1641 6.96602 27.898C7.56102 29.7492 8.72001 31.3681 10.2808 32.5279C11.8415 33.6877 13.7259 34.3304 15.67 34.366C12.3697 36.9568 8.2938 38.3622 4.09802 38.356C3.35479 38.3562 2.61218 38.3128 1.87402 38.226C6.13298 40.9644 11.0907 42.4176 16.154 42.412C33.294 42.412 42.664 28.216 42.664 15.904C42.664 15.504 42.654 15.1 42.636 14.7C44.4586 13.3819 46.0318 11.7498 47.282 9.88L47.286 9.874Z" fill="#363625"/>
              </svg>
       </a>
       </Link>
       <Link href='https://www.linkedin.com/in/mohammed-el-yaakoubi-52552010b/' target='_blank'>
       <a>
       <svg className='cursor-pointer' width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.858 17.938H26.286V21.638C27.356 19.51 30.1 17.598 34.222 17.598C42.124 17.598 44 21.834 44 29.606V44H36V31.376C36 26.95 34.93 24.454 32.206 24.454C28.428 24.454 26.858 27.144 26.858 31.374V44H18.858V17.938ZM5.14 43.66H13.14V17.598H5.14V43.66ZM14.286 9.1C14.2863 9.77055 14.1533 10.4345 13.8948 11.0532C13.6362 11.6719 13.2573 12.233 12.78 12.704C11.8128 13.6652 10.5036 14.2033 9.14 14.2C7.77878 14.1991 6.47262 13.6624 5.504 12.706C5.02842 12.2334 4.65077 11.6716 4.39269 11.0529C4.1346 10.4341 4.00116 9.77045 4 9.1C4 7.746 4.54 6.45 5.506 5.494C6.47377 4.53632 7.78048 3.9994 9.142 4C10.506 4 11.814 4.538 12.78 5.494C13.744 6.45 14.286 7.746 14.286 9.1Z" fill="#363625"/>
              </svg>
       </a>
       </Link>
              
           

          {/* </div> */}
      
        </div>
          </div>

          </div>
        </div>
        <div className='flex justify-center relative bottom-[-90px] cursor' >
        <UpDown>
          <a href='#skills'>
          <svg  className='cursor-pointer' width="48" height="36" viewBox="0 0 57 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 1L25.2377 32.3871C27.2764 35.1407 31.4178 35.0746 33.3676 32.2573L55 1" stroke="#D0E015" strokeWidth="3"/>
        </svg>
          </a>
       
          </UpDown>

        </div>
      

    </>
  )
}

export default FrontPage