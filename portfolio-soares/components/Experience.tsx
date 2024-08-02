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
          companyLogo="https://res.cloudinary.com/soares04/image/upload/v1722640708/hekxbmhfexqxtyvtxl8z.png"
          logos={["https://img.icons8.com/?size=100&id=54087&format=png&color=000000","https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000","https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000","https://img.icons8.com/?size=100&id=D2Hi2VkJSi33&format=png&color=000000","https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000","https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000","https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000","https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000","https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"]}
        />
        <ExperienceCard
           jobTitle="Engineer"
           company="eConnect"
           role="Backend Engineer"
           startDate="June 2022"
           endDate="December 2022"
           bulletPoints={["Utilized ReactJS, React-Native, and MongoDB to create responsive and efficient front-end solutions.", "Collaborated with cross-functional teams, clarifying project requirements and contributing to successful project outcomes.", "Conducted thorough software system testing and validation procedures, resulting in a reliable and resilient system architecture."]}
           companyLogo="https://res.cloudinary.com/soares04/image/upload/v1722640958/yvoaipdujj1zu3cauh5o.png"
           logos={["https://img.icons8.com/?size=100&id=54087&format=png&color=000000","https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000","https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000","https://img.icons8.com/?size=100&id=D2Hi2VkJSi33&format=png&color=000000","https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000","https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000","https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000","https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000","https://img.icons8.com/?size=100&id=34886&format=png&color=000000","https://img.icons8.com/?size=100&id=wU62u24brJ44&format=png&color=000000"]}
        />
        <ExperienceCard 
           jobTitle="Engineer"
           company="PennyCanny"
           role="Fullstack Engineer"
           startDate="March 2022"
           endDate="June 2022"
           bulletPoints={["Developed Single Page Applications using Javascript frameworks like Handlebars,Node.", "Utilized AWS for production and quality assurance testing, ensuring a seamless and reliable deployment process.", "Implemented design solutions and conducted root cause analysis on component failures, contributing to system stability and reliability."]}
           companyLogo="https://res.cloudinary.com/soares04/image/upload/v1722641040/tdzyy1qbatczbg5h52wh.jpg"
           logos={["https://img.icons8.com/?size=100&id=54087&format=png&color=000000","https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000","https://img.icons8.com/?size=100&id=D2Hi2VkJSi33&format=png&color=000000","https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000","https://img.icons8.com/?size=100&id=wU62u24brJ44&format=png&color=000000"]}
        />
         <ExperienceCard 
           jobTitle="Associate Engineer"
           company="Decagon"
           role="Backend Engineer"
           startDate="October 2020"
           endDate="March 2022"
           bulletPoints={["Developed full-stack applications using Node, Express on the backend, and React on the frontend, delivering highly interactive and user-friendly experiences.", "Maintained client information and accounts while ensuring confidentiality, upholding professional ethics and standards.", "Built high-quality applications using React, JavaScript, and Nodejs and designed testable code and applications using the latest technical features."]}
           companyLogo="https://res.cloudinary.com/soares04/image/upload/v1722641177/vu4ehfndgqulupaztwdv.png"
           logos={["https://img.icons8.com/?size=100&id=54087&format=png&color=000000","https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000","https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000","https://img.icons8.com/?size=100&id=D2Hi2VkJSi33&format=png&color=000000","https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000","https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000","https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000","https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000","https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"]}
        />
      </div>
    </motion.div>
  );
}

export default Experience;
