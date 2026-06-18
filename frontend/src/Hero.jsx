import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "./assets/hero-image.png";

function Hero() {
  return (
    <>
      <section className="px-8 py-4">
        <motion.main className="flex flex-col justify-center lg:flex-row items-center min-h-screen"
         initial= {{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1.5}}
          viewport={{once: false}}
        >
          <div className="flex items-center lg:items-start text-center lg:text-start flex-col w-full">
            <p className="text-base lg:text-xl mb-2 lg:mb-6 italic font-light">// hallow, world! </p>
            <h1 className="text-6xl lg:text-8xl font-bold tracking-wide text-pyellow">
              MADHVI
            </h1>
            <h2 className="text-4xl lg:text-5xl mb-4 lg:mb-10 ml-25 lg:ml-48 font-semibold">
              PETHANI
            </h2>
            <div className="flex flex-row justify-center  flex-wrap gap-4 lg:gap-8 text-2xl lg:text-3xl mb-4 lg:mb-8">
              <span>MERN Stack Dev.</span>
              <span>BSc IT</span>
              <span className="text-pyellow">Undefined</span>
            </div>
            <p className="w-[75%] text-xl mb-6 lg:text-2xl/8 lg:mb-10">
              Fresh BSc IT grad. who turned curiosity into code. Currently
              learning and growing in the MERN Stack world. <br /> --No ceiling
              on what's next!
            </p>
            <div className="flex flex-wrap justify-center items-start gap-4 lg:gap-6 text-2xl lg:text-4xl mb-8 lg:mb-10 font-medium text-pyellow">
              <a href="#skills" className="bg-bg2 w-50 rounded-2xl py-2 lg:w-70 border-2 lg:py-3 text-center lg:rounded-3xl hover:bg-pyellow transition-all duration-300 hover:text-black hover:font-bold "><i className="mr-2 text-2xl fa-solid fa-eye"></i> View Skills</a>
              <a href="/CV-madhvi-pethani.pdf" download="CV-madhvi-pethani.pdf" className="bg-bg2 w-60 rounded-2xl py-2 lg:w-80 border-2 lg:py-3 lg:rounded-3xl text-center hover:bg-pyellow transition-all duration-300 hover:text-black hover:font-bold"><i className="mr-2 text-2xl fa-solid fa-cloud-arrow-down"></i>Download CV</a>
            </div>
            <p className="text-base lg:text-xl italic font-light">
              -------Scrolll!
            </p>
          </div>
          <div className="w-full flex justify-center">
            <img src={heroImage} className="w-100 lg:w-140" alt="coding-girl" />
          </div>
        </motion.main>
      </section>
    </>
  );
}

export default Hero;
