import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "./components/Title";
import Heading from "./components/Heading";
import Comments from "./components/Comments";
import ProjectCard from "./ProjecCard";
import Pro3 from "./Pro3";

function Project() {
  

  return (
    <>
      <section className="px-10 lg:px-20 py-4">
        <main
          className="min-h-screen flex flex-col justify-center items-center"
          id="project"
        >
          <div className="w-full mb-1 lg:mb-4 flex flex-col gap-3 items-center lg:flex-row">
            <Title num="05" title="PROJECTS" />
          </div>
          <div className="flex flex-col text-center lg:text-start items-center lg:items-start w-full mb-4">
            <div className="mb-4 lg:mb-6">
            <Heading heading="Things I'm building." />
            <Comments comment="no projects yet to show you -- but just watch this space!" />
            </div>
            <p className="text-base text-center lg:text-start lg:text-2xl">
              I haven't shipped a full project yet -- and i'm not going to
              pretend otherwise. What I have is solid understanding a growing
              skillset, and a pipeline of projects i'm actively planning.
              Honestly over hype, always!.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start w-full mb-4'">
            <div className="flex flex-col lg:flex-row mb-4 gap-2 lg:gap-6">
              <ProjectCard />
            </div>
            <Pro3 />
          </div>
        </main>
      </section>
    </>
  );
}

export default Project;
