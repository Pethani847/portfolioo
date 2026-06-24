import React from 'react';
import { motion, AnimatePresence } from "framer-motion"

function IconSkill({skill, onSelect, isSelected }) {



  const itemVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

    return ( 
        <>
                <motion.div 
                        
                        className={`bg-bg2 hover:bg-bg hover:-translate-1 hover:text-[var(--skill-color)] ${isSelected ? "text-[var(--selected-color)]" : "text-fg" } transition-all duration-250 border-1 p-4 lg:p-6 rounded-2xl`} 
                        style={{ '--skill-color': skill.color, '--selected-color': skill.color }} 
                        onClick={() => onSelect(skill)} variants={itemVariants}
                        >
                            <button className="text-4xl md:text-6xl lg:text-8xl">
                                <i className={`${skill.icon}`} > </i>
                            </button> 
                        </motion.div>
        </>
     );
}

export default IconSkill;