import Head from 'next/head'
import type { NextPage } from "next"
import Header from '../components/Header'
import Hero from '../components/Hero'



const Home:NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
      <Head>
        <title>Soares's Portfolio </title>
      </Head>

      <Header />
      <section id="Hero">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
     
    </div>
  )
}
 export default Home