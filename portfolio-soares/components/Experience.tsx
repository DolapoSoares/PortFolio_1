import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
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
      className="h-screen flex relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-40">
        EXPERIENCE
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-30 snap-x snap-mandatory mt-40 scrollbar scrollbar-track-slate-400/20 scrollbar-thumb-[#f7ab0a]">
        <ExperienceCard
          jobTitle="Developer"
          company="SmartFix"
          role="FullStack Developer"
          startDate="Jan 2023"
          endDate="July 2023"
          bulletPoints={["Leveraged ReactJS and React-Native to craft intuitive and responsive front-end solutions, enhancing user experience.", "Played a pivotal role in the design and implementation of a MongoDB database system, guaranteeing data integrity and accessibility.", "Collaborated seamlessly with cross-functional teams to clarify project requirements and proposals, fostering effective communication channels and contributing to project success."]}
        />
        <ExperienceCard
           jobTitle="Engineer"
           company="eConnect"
           role="Backend Engineer"
           startDate="June 2022"
           endDate="December 2022"
           bulletPoints={["Experience 1", "Experience 2", "Experience 3"]}
        />
        <ExperienceCard 
           jobTitle="Engineer"
           company="PennyCanny"
           role="Fullstack Engineer"
           startDate="March 2022"
           endDate="June 2022"
           bulletPoints={["Experience 1", "Experience 2", "Experience 3"]}
        />
         <ExperienceCard 
           jobTitle="Associate Engineer"
           company="Decagon"
           role="Backend Engineer"
           startDate="October 2020"
           endDate="March 2022"
           bulletPoints={["Experience 1", "Experience 2", "Experience 3"]}
        />
      </div>
    </motion.div>
  );
}

export default Experience;
