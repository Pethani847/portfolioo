import React from 'react';
import { motion } from 'framer-motion';

import educations from './data/educard';

function Educard() {
    return ( 
        <>
        {educations.map((education, index    ) => (
                        <motion.div key={education.degree} className='bg-bg2 group border-pyellow flex flex-col border px-4 py-6 lg:px-6 lg:py-8 rounded-4xl'
                          initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay: index * 0.25 } }}
                  whileHover={{scale: 1.01, transition: {duration: 0.2}}}
                  viewport={{ once: false, amount: 0.5 }}
                        > 
                            <div className='flex flex-col md:flex-row justify-between items-center mb-1 lg:mb-2'>
                                <h2 className={`${education.styletitle} group-hover:font-semibold mb-1 lg:mb-0 transition-all duration-250 text-xl lg:text-3xl`}>{education.degree}</h2>
                                <span className='mb-3'>{education.year}</span>
                            </div>
                            <div className='flex flex-col md:flex-row justify-between mb-4 lg:mb-6'>
                                <h4 className={`${education.stylesub} transition-all mb-2 lg:mb-0 duration-250 text-sm lg:text-xl`}>{education.collage}</h4>
                                <span className={`${education.styleremark} transition-all text-sm lg:text-xl duration-250 border-2 text-center rounded-2xl px-2`} >{education.remark}</span>
                            </div>
                            <p className='text-base lg:text-xl lg:w-[65%]'>{education.des}</p>
                        </motion.div>
                   ))}
        </>
     );
}

export default Educard;