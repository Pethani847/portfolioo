import React from "react";
import { motion, AnimatePresence } from "framer-motion"

import Infocard from "./Infocard";
import Scroll from "./components/Scroll";
import Title from "./components/Title";
import Heading from "./components/Heading";
import Comments from "./components/Comments";


function About() {
  
  return (
    <>
      <section className="px-10 lg:px-20 py-4 ">
        <main className="flex flex-col justify-center items-center min-h-screen gap-4" id="about">
          <div className="w-full flex flex-col gap-3 mb-2 items-center lg:flex-row">
          <Title num="01" title="ABOUT" />
          </div>
          <div className="flex flex-col justify-center items-center  lg:flex-row my-2 lg:my-4 w-full">
            <motion.div className="flex justify-center items-center lg:items-start flex-col w-full text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mb-4 lg:mb-10">
              <Heading heading="Nice to meet youh!, I'm Madhvi..." />
              <Comments comment="the human behind the code!" />
              </div>
              <h3 className="text-base lg:text-2xl mb-2 lg:mb-5 lg:leading-8 w-full lg:tracking-wide">
                A BSc IT graduate from Swarnim University, Surat — currently
                finding my footing in the world of full-stack web development.
                I'm a fresher in this field, but what I lack in experience I
                make up for in hunger to learn. Give me a challenge and I'll
                figure it out. Give me time and I'll master it.
              </h3>
              <h4 className="text-base lg:text-2xl mb-8 lg:mb-16 lg:leading-8 lg:tracking-wide">
                My goal is simple — get really good at MERN stack first, then
                pursue a Master's with a focus on Cybersecurity. Two fields, one
                mindset: keep learning, keep growing, no ceiling.
              </h4>
              <Scroll />
            </motion.div>
            <motion.div className="flex flex-row flex-wrap justify-center items-center lg:flex-col w-full gap-2 lg:gap-6"
            initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Infocard />
                </motion.div>
          </div>
        </main>
      </section>
    </>
  );
}

export default About;
