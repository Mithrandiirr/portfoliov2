import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FrontPage from '../components/FrontPage'
import Layout from '../components/Layout'
import Skills from '../components/Skills'
import Work from '../components/Work'

const Home: NextPage = () => {
  return (
   <Layout>
     <Head>
       <title>El Yaakoubi Mohammed - Frontend Developer</title>
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
   </Layout>
  )
}

export default Home
