import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import Title from "./components/Title";
import experiences from "./data/experiences";
import Heading from "./components/Heading";
import Comments from "./components/Comments";
import ExperienceCard from "./ExperienceCard";

function Experience() {
 

  return (
    <>
      <section className="px-10 lg:px-20 py-4">
        <main
          className="min-h-screen  flex flex-col justify-center items-center lg:items-start"
          id="experience"
        >
          <div className="w-full  mb-5 lg:mb-10  flex flex-col gap-3 items-center lg:flex-row">
            <Title num="06" title="EXPERIENCE" />
          </div>
          <div className="flex flex-col text-center justify-center items-center lg:items-start w-full">
            <div className="mb-4 text-start lg:mb-10">
            <Heading heading="Where I've worked." />
            <Comments comment="real world experience before the code world!" />
            </div>
            <p className="text-sm lg:text-xl text-center lg:text-start mb-8 lg:mb-10">
              My Professional background is outside of tech -- but it taught me
              accuracy, accountability, and how real businesses operate, Skills
              that make a better developer!
            </p>
            <div className="flex flex-col gap-5 lg:gap-8 lg:w-[75%]">
              <ExperienceCard />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Experience;
