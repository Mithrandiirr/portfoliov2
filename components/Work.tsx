import Image from "next/image"
import Project1 from '../assets/0xinsight.jpg'
import AlSabab from '../assets/alsabab.jpg'
import Lumine from '../assets/lm.jpg'
import Zine from '../assets/zine.jpg'
import Men from '../assets/men_lumne.png'
import Tailwind from '../assets/tailwind.svg'
import Next from '../assets/next.svg'
import Gatsby from '../assets/gatsby.svg'
import GraphQL from '../assets/graphql.svg'
import Netlify from '../assets/netlify.svg'
import Shopify from '../assets/shopify.svg'
import sc from '../assets/prismic.svg'
import Link from "next/link"
import Portoflio from  '../assets/portfolio.png'
function Work() {
  return (
    <div className="mt-[6rem] mx-[5rem]">
    <h1 className="text-[50px] ">Previous Work<span className="text-[#D0E015]">.</span></h1>
    <div className="grid grid-cols-2 justify-items-center mt-8 gap-8">
    <Link href='https://alsabab.netlify.app/' target='_blank'>
      <a className="link">
      <Image src={AlSabab} style={{width:'100%'}} alt='AlSabab' className="image" />
      <div className="px-[1rem] mt-[-8px] py-[1rem] bg-[#0F0F08] rounded-b-[10px]">
        <h1 className="text-[30px]">Al Sabab</h1>
        <p className="text-[24px] font-light text-[#919187]">Daily news blog website ,fully-responsive and mobile friendly. </p>
        <div className="flex flex-row items-center justify-center gap-4">
          <Image src={Gatsby} />
          <Image src={Netlify} />
          <Image src={Tailwind} />
          <Image src={sc} />
          <Image src={GraphQL} />
          
         
        </div>
        <div>
          </div>
      </div>
      </a>
    
    </Link>
    
    <Link href='https://zinee.netlify.app/' target='_blank'>
      <a className="link">
      <Image src={Zine} style={{height:'578px'}} alt='Zine' className="image" />
      <div className="px-[1rem] mt-[-8px] py-[1rem] bg-[#0F0F08] rounded-b-[10px]">
        <h1 className="text-[30px]">Zine</h1>
        <p className="text-[24px] font-light text-[#919187]">Daily news blog website ,fully-responsive and mobile friendly.</p>
        <div className="flex flex-row items-center justify-center gap-4">
        <Image src={Gatsby} />
          <Image src={Netlify} />
          <Image src={Tailwind} />
          <Image src={sc} />
          <Image src={GraphQL} />
        </div>
        <div>
          </div>
      </div>
      </a>
     
      </Link>
    <Link href='https://luminee.netlify.app/' target='_blank'>
    <a className="link">
    <Image src={Lumine}  alt='Lumine' className="image" />
      <div className="px-[1rem] mt-[-8px] py-[1rem] bg-[#0F0F08] rounded-b-[10px]">
        <h1 className="text-[30px]">LUMINE</h1>
        <p className="text-[24px] font-light text-[#919187]">An Ecommerce platform of both Men and Women clothes/accessories and more...</p>
        <div className="flex flex-row items-center justify-center gap-4">
        <Image src={Gatsby} />
          <Image src={Netlify} />
          <Image src={Shopify} />
          <Image src={Tailwind} />
          <Image src={GraphQL} />
        </div>
        <div>
          </div>
      </div>
    </a>
     
    </Link>
    <Link href='https://main--startling-clafoutis-4cf004.netlify.app/'  target='_blank'>
      <a className="link">
      <Image src={Project1} alt='Project'  style={{width:'580px'}} className="image" />
      <div className="px-[1rem] mt-[-8px] py-[1rem] bg-[#0F0F08] rounded-b-[10px]">
        <h1 className="text-[30px]">0xInsights</h1>
        <p className="text-[24px] font-light text-[#919187]">A static saas landing page concerning data and other sources.</p>
        <div className="flex flex-row items-center justify-center gap-4">
          <Image src={Next} />
          <Image src={Tailwind} />
         
        </div>
        <div>
          </div>
      </div>
      </a>
    
    </Link>
    <Link href='https://luminee.netlify.app/' target='_blank'>
    <a className="link">
    <Image src={Portoflio}  alt='Portfolio' className="image" />
      <div className="px-[1rem] mt-[-8px] py-[1rem] bg-[#0F0F08] rounded-b-[10px]">
        <h1 className="text-[30px]">My Portfolio</h1>
        <p className="text-[24px] font-light text-[#919187]">An Ecommerce platform of both Men and Women clothes/accessories and more...</p>
        <div className="flex flex-row items-center justify-center gap-4">
        <Image src={Gatsby} />
          <Image src={Netlify} />
          <Image src={Tailwind} />
          <Image src={GraphQL} />
        </div>
        <div>
          </div>
      </div>
    </a>
     
    </Link>

      
    
    </div>
    </div>
  )
}

export default Work