import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'


export default function Home() {
  return (
   <div className="bg-[rgb(11,0,26)] text-white h-screen snap-mandatory overflow-scroll z-0">
    <Head>
      <title>
        Avishkar's Portfolio
      </title>
    </Head>

    <Header />

 
    <section id="hero" className="snap-center">
      
    <Hero/>

    </section>

    <section id="about" className="snap-center">
      <About/>
    </section>

    {/*Experience*/}
    <section id="experience" className="snap-center">
    <WorkExperience  />
    </section>
    {/*Skills */}

    {/*projects */}
    
    {/*Contact Me */}

   </div>
  )
}
