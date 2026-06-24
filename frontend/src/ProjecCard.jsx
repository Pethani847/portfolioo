import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import projects from './data/projectcard';

function ProjectCard() {
    return ( 
        <>
        {projects.map((project, index) => (
                <motion.div
                  className="border-pyellow bg-bg2 flex flex-col justify-center w-full p-4 lg:p-5 border-1 border-solid rounded-4xl"
                  key={project.num}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.8,
                    },
                  }}
                  whileHover={{
                    scale: 1.01,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="flex justify-between font-light mb-2 lg:mb-3">
                    <div className="text-sm lg:text-xl">{project.num}</div>
                    <div
                      className={`${project.color} border-1 text-xs lg:text-base border-solid rounded-xl p-1`}
                    >
                      {project.status}
                    </div>
                  </div>
                  <h2
                    className={`${project.color} text-center lg:text-start text-xl lg:text-2xl mb-2 font-semibold`}
                  >
                    {project.name}
                  </h2>
                  <p className="text-sm lg:text-lg text-center lg:text-start">
                    {project.des}
                  </p>
                  <div></div>
                </motion.div>
              ))}
        </>
     );
}

export default ProjectCard;