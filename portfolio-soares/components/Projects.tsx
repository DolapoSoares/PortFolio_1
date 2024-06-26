import React from "react";
import { motion } from "framer-motion"

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      imgSrc: '(link unavailable)',
      title: 'PennyCanny',
      description: 'PennyCanny is your go to website when you want to get latest coupons to products for different companies like Doordash,Lowe\'s, chegg, Fiverr, GRUBHUB and the likes. PenyCanny is the ultimate destination for finding the best deals and discounts on everything from fashion and home decor to food and travel. They offer a hassle-free, high-value shopping experience to online buyers and help customers save money on their everyday purchases.'
    },
    {
      id: 2,
      imgSrc: '(link unavailable)',
      title: 'Project 2',
      description: 'This is a description of project 2.'
    },
    {
      id: 3,
      imgSrc: '(link unavailable)',
      title: 'Project 3',
      description: 'This is a description of project 3.'
    }
  ];
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
    className="h-screen flex relative flex-col text-left md:flex-row max-w-full xl:px-10 min-h-screen justify-evenly z-0 mx-auto items-center overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text2xl mt-0">
        Projects
      </h3>

      <div className="relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-slate-400/20 scrollbar-thumb-[#f7ab0a] ">
        {projects.map((project, i) => {
            return (
                <div className="w-screen flex flex-shrink-0 flex-col space-y-3 items-center justify-center p-20 md:p-44 h-screen xl:p-64">
                    <motion.img 
                        initial={{
                            y: -300,
                            opacity: 0
                          }}
                          transition={{
                            duration: 1.2,
                          }}
                          whileInView={{
                            opacity: 1,
                            y:0
                          }}
                          viewport={{
                            once:true
                          }}
                    className="w-110 h-80" src="{project.img}" alt=""/>

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#f7ab0a]">{i + 1} of {projects.length}:</span> {project.title}
                        </h4>

                        <p className="text-lg text-center md:text-left">
                            {project.description}
                        </p>
                    </div> 
                </div>
            )
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
