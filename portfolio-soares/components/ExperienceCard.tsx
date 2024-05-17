import React from 'react'
import { motion } from "framer-motion";

type Props = {
  jobTitle: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  bulletPoints: string[];
}

function ExperienceCard({
  jobTitle,
  company,
  role,
  startDate,
  endDate,
  bulletPoints,
}: Props) {
  
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
             initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{
                duration: 1.3,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              src="https://res.cloudinary.com/soares04/image/upload/v1681225656/xjv274eqnrwd7cq6gasj.png"
              className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
              alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>ENGINEER at eConnect</h4>
            <p className='font-bold text-2xl mt-1'>BACKEND ENGINEER</p>
            <div className='flex space-x-2 my-2'>
              <img className="h-10 w-10 rounded-full" src="https://res.cloudinary.com/soares04/image/upload/v1681343173/tl7ntxnjbk8gf0iu4gc9.png" />
            </div>
            <p className='uppercase py-5 text-gray-500 '>June 2022 - December 2022</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard