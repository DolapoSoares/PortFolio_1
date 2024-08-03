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
          <Skill icon='https://img.icons8.com/?size=100&id=54087&format=png&color=000000&width=100' level='95%'/>
          <Skill icon='https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000' level='89%'/>
          <Skill icon='https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000' level='98%'/>
          <Skill icon='https://img.icons8.com/?size=100&id=D2Hi2VkJSi33&format=png&color=000000' level='99%'/>
          <Skill icon='https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000' level='99%'/>
          <Skill icon='https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000' level='85%'/>
          <Skill icon='https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000' level='100%'/>
          <Skill icon='https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000' level='85%'/>
          <Skill icon='https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000' level='80%'/>
          <Skill icon='https://img.icons8.com/?size=100&id=38561&format=png&color=000000' level='70%'/>
          <Skill icon='https://img.icons8.com/?size=100&id=wU62u24brJ44&format=png&color=000000' level='70%'/>
          <Skill icon='https://img.icons8.com/?size=100&id=62452&format=png&color=000000' level='80%'/>
          <Skill icon='https://img.icons8.com/?size=100&id=20906&format=png&color=000000' level='100%'/>
          <Skill icon='https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000' level='100%'/>
          <Skill icon='https://img.icons8.com/?size=100&id=34886&format=png&color=000000' level='100%'/>
        </div>
       
    </motion.div>
  )
}

export default Skills