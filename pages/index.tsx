import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FrontPage from '../components/FrontPage'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
   <Layout>
     <Head>
       <title>El Yaakoubi Mohammed - JAMStack Developer</title>
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>
     <section className='frontPage'>
      <FrontPage />
     </section>
   </Layout>
  )
}

export default Home
