import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image'

type Props = {
  jobTitle: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  companyLogo: string;
  logos: string[];
  bulletPoints: string[];
}

function ExperienceCard({
  jobTitle,
  company,
  role,
  startDate,
  endDate,
  companyLogo,
  logos,
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
              src={companyLogo}
              className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
              alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{jobTitle} at {company}</h4>
            <p className='font-bold text-2xl mt-1'>{role}</p>
            <div className='flex space-x-2 my-2'>
            {logos.map((logo, index) => (
            <Image key={index} className='h-10 w-10 rounded-full' src={logo} width={100} height={100} alt=""/>
          ))}
            </div>
            <p className='uppercase py-5 text-gray-500 '>{startDate} - {endDate}</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        </div>
    </article>
  )
}

export default ExperienceCard