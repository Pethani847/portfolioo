import React from 'react';
import { motion } from 'framer-motion';

function Education() {

    let educations = [
        {degree: "BSc Information Technology", collage: "Swarnim University, Gandhinagar", des: "Pursued my BSc in Information Technology externally, working alongside my studies to fund my education and gain real-world experience at the same time. Two responsibilities, one mindset - get it done, learn from it.", year: "2023-2026", remark: "Graduated", styletitle: "text-pgreen group-hover:text-fg", stylesub: "group-hover:text-pgreen", styleremark: "text-pgreen"  },
        {degree: "Master's in Cybersecurity", collage: "The next chapter, planning phase", des: "After getting some experience and knowledge in MERN stack development, I'm planning to pursue a Master's degree focused on Cybersecurity", year: "Upcoming", remark: "Planning", styletitle: "text-pblue group-hover:text-fg", stylesub: "group-hover:text-pblue", styleremark: "text-pblue"}
    ]

    return (  
        <>
        <section className="px-8 py-4 ">
            <main className='flex flex-col justify-center items-center lg:items-start min-h-screen' id='education'>
                 <div className="w-full mb-5  lg:mb-10 flex flex-col gap-3 items-center lg:flex-row">
              <p className="text-xl font-medium">03 | EDUCATION</p>
                        <div className="w-full lg:flex-1 h-[1px] bg-fg"></div>
          </div>
              <div className='flex flex-col items-center text-center lg:text-start lg:items-start w-full'>
                <h1 className="text-4xl lg:text-5xl mb-2 font-bold tracking-wide">What I learned & What's next.</h1>
                <p className="text-base lg:text-xl italic font-light mb-10 lg:mb-15 ">// academic background & upcoming plan</p>
                <div className='flex flex-col mb-8 lg:mb-15 gap-8 lg:w-[75%]'>
                   {educations.map((education, index    ) => (
                        <motion.div key={education.degree} className='bg-bg2 group border-pyellow flex flex-col  border-1 px-4 py-6 lg:px-6 lg:py-8 rounded-4xl'
                          initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay: index * 0.25 } }}
                  whileHover={{scale: 1.01, transition: {duration: 0.2}}}
                  viewport={{ once: false, amount: 0.5 }}
                        > 
                            <div className='flex justify-between mb-1 lg:mb-2'>
                                <h2 className={`${education.styletitle} group-hover:font-semibold transition-all duration-250 text-2xl lg:text-3xl`}>{education.degree}</h2>
                                <span>{education.year}</span>
                            </div>
                            <div className='flex justify-between mb-4 lg:mb-6'>
                                <h4 className={`${education.stylesub} transition-all duration-250 text-base lg:text-xl`}>{education.collage}</h4>
                                <span className={`${education.styleremark} transition-all duration-250 border-2 rounded-2xl px-2`} >{education.remark}</span>
                            </div>
                            <p className='text-xl lg:w-[65%]'>{education.des}</p>
                        </motion.div>
                   ))}
                </div>
                <p className='text-base lg:text-xl italic font-light'>-------Scrolll!</p>
              </div>
            </main>
        </section>
        </>
    );
}

export default Education;