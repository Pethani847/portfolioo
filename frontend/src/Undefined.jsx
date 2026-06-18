import React from "react";
import { motion } from "framer-motion";

function Undefined() {
  let labels = [
    "No Limits",
    "Quick Learner",
    "Strong Communication",
    "MERN Stack",
    "Cybersecurity Next",
  ];

  let definations = [
    { icon: "fa-solid fa-infinity", name: "GROWTH LIMIT" },
    { icon: "fa-solid fa-2", name: "FIELD, ONE MIND" },
    { icon: "fa-solid fa-ban", name: "BOUNDARIES" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="px-8 py-4">
        <main className="flex flex-col items-center justify-center min-h-screen ">
          <div className="w-full flex flex-col gap-3 items-center lg:flex-row"></div>
          <p className="text-xl my-2 ms:my-4 font-medium">02 | PHILOSOPHY</p>
          <motion.div
            className="flex flex-col items-center text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-9xl mb-4 md:mb-8 font-bold tracking-wide"
              variants={itemVariants}
            >
              UNDEFINED
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl w-full mb-1 md:mb-2 lg:mb-4"
              variants={itemVariants}
            >
              "Undefined" is not an error -- it's my belief. I refuse to set
              limits on my own growth. Always gonna welcome everything axcept
              everything learning new things always evolving, always open for
              next chapter!.
            </motion.p>
            <motion.p
              className="text-base lg:text-xl italic font-light mb-6 lg:mb-8"
              variants={itemVariants}
            >
              // this belief shapes my path!
            </motion.p>
            <motion.div
              className="flex flex-wrap items-center justify-center gap-2 lg:gap-5 mb-6 lg:mb-10"
              variants={itemVariants}
            >
              {labels.map((label) => (
                <div
                  key={label}
                  className="bg-bg2 hover:text-pyellow transition-all duration-150 hover:-translate-1 border-1 rounded-xl text-base md:text-xl px-2 py-1 lg:px-4 lg:py-2 "
                >
                  {label}
                </div>
              ))}
            </motion.div>
            <motion.div
              className="flex justify-center flex-wrap gap-8 mb-8 lg:mb-6"
              variants={itemVariants}
            >
              {definations.map((def) => (
                <div
                  key={def.name}
                  className="flex flex-col items-center gap-3"
                >
                  <i className={def.icon}></i>
                  <span>{def.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <p className="text-base lg:text-xl italic font-light ">
            -------Scrolll!
          </p>
        </main>
      </section>
    </>
  );
}

export default Undefined;
