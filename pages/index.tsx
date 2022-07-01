import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FrontPage from '../components/FrontPage'
import Layout from '../components/Layout'
import Skills from '../components/Skills'
import Work from '../components/Work'
import EmblaCarousel from '../components/Swiper' 
import InTouch from '../components/inTouch'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <>
     <NextSeo
      title="El Yaakoubi Mohammed | Frontend - JAMStack Developer"
      description="Mohammed El Yaakoubi's Portfolio and Curriculum Vitae"
      openGraph={{
        images: [
          {
            url: 'https://i.ibb.co/DgKJY88/Screenshot-3.png',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
        ]
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
     
    />
     <Layout>
     <Head>
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  
     </Head>
     <section className='frontPage'>
      <FrontPage />
     </section>
     <section id='skills' className='skillsPage'>
      <Skills />
     </section>
     <section className='workPage'>
      <Work />
     </section>
     <section className='slide'>
      <Carousel />
     </section>
     <section className='get_in_touch'>
      <InTouch />
     </section>
     <Footer />
   </Layout>
    </>
  
  )
}

export default Home
