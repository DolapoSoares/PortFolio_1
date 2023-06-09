import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    transition={{
      duration: 1.5,
    }}
    whileInView={{
      opacity: 1,
    }}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl my-auto'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm my-auto'>Hover over screen for proficency level</h3>

        <div className='grid grid-cols-5 gap-6'>
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
       
    </motion.div>
  )
}

export default Skills