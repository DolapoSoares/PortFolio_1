import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
            About
        </h3>

        <motion.img 
        initial={{
            x : -200, 
            opacity: 0
        }}
        transition={{
            duration:1.3
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        viewport={{
          once:true
        }}
        src="https://res.cloudinary.com/soares04/image/upload/v1680626242/ckexjvtna2qzhelj6cdh.jpg"
        className='-mb-20 md:mb-0 w-56 h-56 flex-shrink-0 object-cover rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
        />

        <div>
          
        </div>
    </div>
  )
}

export default About