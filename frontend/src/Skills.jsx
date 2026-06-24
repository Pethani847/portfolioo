import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import Title from "./components/Title";
import Heading from "./components/Heading";
import Comments from "./components/Comments";

import skills from "./data/skills";
import Skilldes from "./Skilldes";
import IconSkill from "./IconSkill";

function Skills() {


    const [selected, setSelected] = useState(skills[0]);

    const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };


  return (
    <>
      <section className="px-10 lg:px-20 py-4">
        <main className="min-h-screen  flex flex-col justify-center items-center lg:items-start gap-4" id="skills">
           <div className="w-full mb-2 lg:mb-4 flex flex-col gap-3 items-center lg:flex-row">
          <Title num="04" title="SKILLS" />
          </div>
          <div className="flex text-center  lg:items-start  flex-col  items-center ">
            <div className="mb-10 lg:mb-20">
            <Heading heading="What I Work withh!" />
            <Comments comment="hover on icon to fill colors and click it to know more!" />
            </div>
            <div className="flex justify-center">
            <motion.div className="flex gap-4 items-center lg:gap-10 flex-wrap justify-center mb-10 lg:mb-15 lg:w-[75%]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            {skills.map((skill) => (
                  
                  <IconSkill 
                  key={skill.name}  
                  skill={skill} 
                  onSelect={setSelected}
                  isSelected={selected.name === skill.name}
                  
                  />
                  
                  ))}  
            </motion.div>
            </div>
            <div className="flex justify-center">
             <Skilldes selected={selected} />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Skills;
