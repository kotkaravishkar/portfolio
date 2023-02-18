import Link from 'next/link';
import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircle from './BackgroundCircle';

type Props = {}

export default function Hero({}: Props) {

const [text, count]= useTypewriter({
    words:["Hi, The Name's Avishkar Kotkar", "Guy-who-loves-code", "<ButLovesToCodeMore/>"],
    loop:true,
    delaySpeed:2000,
});

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"> 
        <BackgroundCircle />
      <img className="relative rounded-full h-32 w-32 mx-auto object-cover"
      src="https://media.licdn.com/dms/image/C5603AQFOOGzSFlrDwA/profile-displayphoto-shrink_800_800/0/1634228362465?e=2147483647&v=beta&t=t0QiqoiXjMYUVstkzUMF8kcX0emtPobiff30qdDEecU" 
      alt="Avishkar kotkar"
         />
         <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[4px]"> Software Engineer </h2>
         </div>


        <h1 className="text-5xl lg:text-6xl font-semibold px-10"
        >
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
        <Link href="#about"> <button className="heroButton">About</button> </Link>
        <Link href="#experience">  <button className="heroButton">Experience</button></Link>
        <Link href="#skills">  <button className="heroButton">Skills</button></Link>
        <Link href="#projects">  <button className="heroButton">Projects</button></Link>

        </div>
        </div>
  )
}

 