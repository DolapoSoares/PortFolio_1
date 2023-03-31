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
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#e8a921'/>
        </h1>
        </div>
        
    </div>
  )
}

export default Hero