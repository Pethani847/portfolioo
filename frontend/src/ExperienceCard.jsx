import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import experiences from './data/experiences';

function ExperienceCard() {
    return ( 
        <>
        {experiences.map((experience, index) => (
                <motion.div
                  key={experience.role}
                  className="flex flex-col border-pyellow border-1 px-4 py-6 lg:px-6 lg:py-8 rounded-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay: index * 0.25 } }}
                  whileHover={{scale: 1.01, transition: {duration: 0.2}}}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <div className="flex justify-between items-center mb-1 lg:mb-2">
                    <h2 className="text-xl lg:text-3xl text-pyellow font-semibold ">
                      {experience.role}
                    </h2>
                    <span className="text-sm lg:text-base font-light">{experience.year}</span>
                  </div>
                  <h4 className="text-base text-start lg:text-xl mb-4 lg:mb-6">
                    {experience.company}
                  </h4>
                  <p className="text-lg text-start font-light lg:w-[65%]">
                    {experience.des}
                  </p>
                </motion.div>
              ))}
        </>
     );
}

export default ExperienceCard;