import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import infos from "./data/infocard";

function Infocard() {
    return ( 
        <>
        {infos.map((info, index) => (
                <motion.div className="flex flex-row gap-4 items-center group border-1 border-solid p-2 lg:py-2 lg:px-4 rounded-2xl lg:w-[75%]" key={info.title}
                 initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay: index * 0.25 } }}
                  whileHover={{scale: 1.01, transition: {duration: 0.2}}}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="text-lg lg:text-2xl lg:mr-2">
                    <i className={info.icon}></i>
                  </div>
                  <div className="flex flex-col" > 
                    <p className="group-hover:text-pyellow transition-all duration-300 group-hover:font-semibold text-base lg:text-2xl font-medium" >{info.title}</p>
                    <p className="group-hover:text-fg transition-all duration-300 text-xs lg:text-xl text-pyellow" >{info.sub}</p>
                  </div>
                </motion.div>
              ))}
        </>
     );
}

export default Infocard;