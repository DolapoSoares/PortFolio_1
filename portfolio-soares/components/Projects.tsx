import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3];
  return (
    <div className="h-screen flex relative flex-col text-left md:flex-row max-w-full xl:px-10 min-h-screen justify-evenly z-0 mx-auto items-center overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text2xl">
        Projects
      </h3>

      <div className="relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map(() => {
            return (
                <div>
                    <img />
                    <div></div>
                </div>
            )
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
