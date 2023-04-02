import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundShape'


type Props = {}

function Hero({}: Props) {

    const [text , count] = useTypewriter({
        words : ["Hi, My Name is Dolapo Soares","I love to code and try new things","Let's get to work"],
        loop: true,
        delaySpeed: 1500
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://res.cloudinary.com/soares04/image/upload/v1634422175/uy7y0zkuexy6gevonu7q.png" alt=""
        />
        <div>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-8'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#e8a921'/>
        </h1>

        <div>
            <button>About</button>
            <button>Experience</button>
            <button>Skills</button>
            <button>Project</button>
        </div>
        </div>
        
    </div>
  )
}

export default Hero