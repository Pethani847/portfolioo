import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Experience() {
  let experiences = [
    {
      role: "Data Entry Executive",
      company: "Satrani Fashion, Surat",
      des: "Managed accurate inventory and stock updates across major e-commerce platforms (Amazon, Flipkart, Myntra, Meesho, Ajio) using Excel, Google Sheets, and OMS software — while completing my BSc IT alongside.",
      year: "2024-2026",
    },
    {
      role: "Accountant",
      company: "Hare Krishna Fashion, Surat",
      des: "Managed daily cash flow, bookkeeping, and financial record-keeping using Excel, Google Workspace, Alinebook, and Khatabook — learning discipline and accuracy that now shows up in how I write code too.",
      year: "2023-2024",
    },
  ];

  return (
    <>
      <section className="px-8 py-4">
        <main
          className="min-h-screen  flex flex-col justify-center items-center lg:items-start"
          id="experience"
        >
          <div className="w-full  mb-5 lg:mb-10  flex flex-col gap-3 items-center lg:flex-row">
            <p className="text-xlfont-medium">06 | EXPERIENCE</p>
            <div className="w-full lg:flex-1 h-[1px] bg-fg"></div>
          </div>
          <div className="flex flex-col text-center justify-center items-center lg:items-start w-full">
            <h1 className="text-4xl lg:text-5xl mb-2 font-bold tracking-wide">
              Where I've worked.
            </h1>
            <p className="text-base lg:text-xl italic font-light mb-4 lg:mb-10 ">
              // real world experience before the code world!
            </p>
            <p className="text-sm lg:text-xl text-center lg:text-start mb-8 lg:mb-10">
              My Professional background is outside of tech -- but it taught me
              accuracy, accountability, and how real businesses operate, Skills
              that make a better developer!
            </p>
            <div className="flex flex-col gap-5 lg:gap-8 lg:w-[75%]">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.role}
                  className="flex flex-col border-pyellow border-1 px-4 py-6 lg:px-6 lg:py-8 rounded-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay: index * 0.25 } }}
                  whileHover={{scale: 1.01, transition: {duration: 0.2}}}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <div className="flex justify-between mb-1 lg:mb-2">
                    <h2 className="text-2xl lg:text-3xl text-pyellow font-semibold ">
                      {experience.role}
                    </h2>
                    <span className="font-light">{experience.year}</span>
                  </div>
                  <h4 className="text-base lg:text-xl mb-4 lg:mb-6">
                    {experience.company}
                  </h4>
                  <p className="text-xl font-light lg:w-[65%]">
                    {experience.des}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Experience;
