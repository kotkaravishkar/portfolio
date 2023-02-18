import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

      <motion.img 
      initial ={{ x:-200, opacity:0,}}
      whileInView ={{opacity:1, x:0,}}
      viewport = {{once:true}}
      transition={{duration:1.2}}
      src="https://media.licdn.com/dms/image/C5603AQFOOGzSFlrDwA/profile-displayphoto-shrink_800_800/0/1634228362465?e=2147483647&v=beta&t=t0QiqoiXjMYUVstkzUMF8kcX0emtPobiff30qdDEecU"
      className ="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
/>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="texte-4xl font-semibold"> 
        Here's a <span className="underline decoration-[#F7AB0A]/50">Little </span>{""} Bakcground</h4>
        <p className="text-base">
          I'am Avishkar 💻
        </p>
        </div>
    </motion.div>
  )
}

export default About