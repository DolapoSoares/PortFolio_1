import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>About</h3>
    </div>
  )
}

export default About