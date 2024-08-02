import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
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
        x: 0
      }}
      className="flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.3,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src="https://res.cloudinary.com/soares04/image/upload/v1680626242/ckexjvtna2qzhelj6cdh.jpg"
        className="-mb-20 md:mb-0 w-56 h-56 flex-shrink-0 object-cover rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">A little summary About Me</h4>
        <p className="text-base">I am Soares Dolapo. I am a FullStack developer(Frontend Heavy) with over 4 years experience. I am good with technologies like React-Native, React, TypeScript, Nodejs, Nestjs, Mongodb, Express and few other technologies I have worked with like firebase and the likes. I have worked with both startups and cooperations where I contributed to applications that contributed to the purpose at large. Working on different applications have helped me in acquiring knowledge that can be contribute to the society and solve real life problems.</p>
      </div>
    </motion.div>
  );
}

export default About;
