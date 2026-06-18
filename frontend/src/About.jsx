import React from "react";
import { motion, AnimatePresence } from "framer-motion"


function About() {
  let facts = [
    { title: "Surat, Gujarat", sub: "India", icon: "fa-solid fa-location-dot" },
    { title: "BSc Information Technology", sub: "Swarnim University", icon: "fa-solid fa-graduation-cap" },
    { title: "Currently - Learning MERN Stack", sub: "#current-obsession", icon: "fa-solid fa-code"},
    { title: "Planning Master's in Cybersecurity", sub: "#future-goal", icon: "fa-solid fa-bullseye" },
    { title: "Quick learner & Passionate", sub: "#super-power", icon: "fa-solid fa-bolt" },
  ];

  return (
    <>
      <section className="px-8 py-4 ">
        <main className="flex flex-col justify-center items-center min-h-screen gap-4" id="about">
          <div className="w-full flex flex-col gap-3 mb-2 items-center lg:flex-row">
          <p className="text-xl font-medium" >01 | ABOUT</p>
          <div className="w-full lg:flex-1 h-[1px] bg-fg"></div>
          </div>
          <div className="flex flex-col justify-center items-center  lg:flex-row my-2 lg:my-4 w-full">
            <motion.div className="flex justify-center items-center lg:items-start flex-col w-full text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="text-4xl lg:text-5xl mb-1 font-bold tracking-wide " >Nice to meet youh!, I'm Madhvi...</h1>
              <p className="text-base lg:text-xl italic font-light mb-4 lg:mb-10">// the human behind the code! </p>
              <h3 className="text-sm lg:text-2xl mb-2 lg:mb-5 lg:leading-8 w-full lg:tracking-wide">
                A BSc IT graduate from Swarnim University, Surat — currently
                finding my footing in the world of full-stack web development.
                I'm a fresher in this field, but what I lack in experience I
                make up for in hunger to learn. Give me a challenge and I'll
                figure it out. Give me time and I'll master it.
              </h3>
              <h4 className="text-sm lg:text-2xl mb-8 lg:mb-16 lg:leading-8 lg:tracking-wide">
                My goal is simple — get really good at MERN stack first, then
                pursue a Master's with a focus on Cybersecurity. Two fields, one
                mindset: keep learning, keep growing, no ceiling.
              </h4>
              <p className='text-base lg:text-xl italic font-light mb-5 lg:mb-10'>-------Scrolll!</p>
            </motion.div>
            <motion.div className="flex flex-row flex-wrap justify-center items-center lg:flex-col w-full gap-2 lg:gap-6"
            initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {facts.map((fact, index) => (
                <motion.div className="flex flex-row gap-4 items-center group border-1 border-solid p-2 lg:py-2 lg:px-4 rounded-2xl lg:w-[75%]" key={fact.title}
                 initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay: index * 0.25 } }}
                  whileHover={{scale: 1.01, transition: {duration: 0.2}}}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <div className="text-lg lg:text-2xl lg:mr-2">
                    <i className={fact.icon}></i>
                  </div>
                  <div className="flex flex-col" > 
                    <p className="group-hover:text-pyellow transition-all duration-300 group-hover:font-semibold text-base lg:text-2xl font-medium" >{fact.title}</p>
                    <p className="group-hover:text-fg transition-all duration-300 text-xs lg:text-xl text-pyellow" >{fact.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>
      </section>
    </>
  );
}

export default About;
