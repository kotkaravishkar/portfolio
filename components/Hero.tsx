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
         <div>
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[4px]"> Software Engineer </h2>
         </div>


        <h1 className="text-5xl lg:text-6xl font-semibold px-10"
        >
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div>
          <button className="heroButton">About</button>
          <button className="heroButton">Experience</button>
          <button className="heroButton">Skills</button>
          <button className="heroButton">Projects</button>

        </div>
    </div>
  )
}

 