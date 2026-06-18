import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Project() {
  let projects = [
    {
      num: "01",
      status: "Completed-this site",
      name: "Personal Portfolio",
      des: "you're looking at it. Built with React + Tailwind My first real project and most personal one!. every section is a lesson learned.",
      tech: ["react", "Tailwind", "node.js"],
      color: "text-pgreen",
    },
    {
      num: "02",
      status: "Starting soon!",
      name: "Coffee House",
      des: "A full stack coffee restaurant website with a complete role based authentication system. Customers browse the menu, admins manage orders and inventory. Built with MERN Stack -- My first real world full stack project.",
      tech: [
        "MongoDB",
        "express.js",
        "react.js",
        "node.js",
        "JWT",
        "Role based Auth",
      ],
      color: "text-porange",
    },
  ];

  let pro3 = {
    num: "03",
    status: "Dream project | Startup idea",
    name: "CollabSpace--Learn | Build | Earn",
    des: "A platform where students, freshers and freelancers come together in one place, Not just another job board -- a full ecosystem. Learn from experts, find collaborators, build together, and connect with real clients. The platform i wish existed when i started.",
    tech: [
      "react.js",
      "node,js",
      "express.js",
      "MongoDB",
      "Real-time",
      "Startup vision",
      "Futur plan",
    ],
    details: [
      {
        icon: "fa-solid fa-graduation-cap",
        title: "Learn",
        des: "Students ask doubts, expert answer. learning from real people.",
      },
      {
        icon: "fa-solid fa-users",
        title: "Collaborate",
        des: "Freshers find partners to build ideas togather. also can build and earn togather. No more solo struggle!",
      },
      {
        icon: "fa-solid fa-indian-rupee-sign",
        title: "Earn",
        des: "Business owners find freelancers to build something!, also student find experts for guidance.",
      },
      {
        icon: "fa-regular fa-handshake",
        title: "Build Ideas",
        des: "Have an idea or project, need guide or partner to build with? platform will exist soon!",
      },
    ],
  };

  return (
    <>
      <section className="px-10 lg:px-20 py-4">
        <main
          className="min-h-screen flex flex-col justify-center items-center"
          id="project"
        >
          <div className="w-full mb-1 lg:mb-4 flex flex-col gap-3 items-center lg:flex-row">
            <p className="text-base lg:text-xl font-medium ">05 | PROJECTS</p>
            <div className="w-full lg:flex-1 h-[1px] bg-fg"></div>
          </div>
          <div className="flex flex-col text-center lg:text-start items-center lg:items-start w-full mb-4">
            <h1 className="text-3xl  lg:text-5xl mb-2 font-bold tracking-wide">
              Things I'm building.
            </h1>
            <p className="text-sm lg:text-xl italic font-light mb-4 lg:mb-6">
              // no projects yet to show you -- but just watch this space!
            </p>
            <p className="text-base text-center lg:text-start lg:text-2xl">
              I haven't shipped a full project yet -- and i'm not going to
              pretend otherwise. What I have is solid understanding a growing
              skillset, and a pipeline of projects i'm actively planning.
              Honestly over hype, always!.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start w-full mb-4'">
            <div className="flex flex-col lg:flex-row mb-4 gap-2 lg:gap-6">
              {projects.map((project, index) => (
                <motion.div
                  className="border-pyellow bg-bg2 flex flex-col justify-center w-full p-4 lg:p-5 border-1 border-solid rounded-4xl"
                  key={project.num}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.8,
                    },
                  }}
                  whileHover={{
                    scale: 1.01,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="flex justify-between font-light mb-2 lg:mb-3">
                    <div className="text-sm lg:text-xl">{project.num}</div>
                    <div
                      className={`${project.color} border-1 text-xs lg:text-base border-solid rounded-xl p-1`}
                    >
                      {project.status}
                    </div>
                  </div>
                  <h2
                    className={`${project.color} text-center lg:text-start text-xl lg:text-2xl mb-2 font-semibold`}
                  >
                    {project.name}
                  </h2>
                  <p className="text-sm lg:text-lg text-center lg:text-start">
                    {project.des}
                  </p>
                  <div></div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="bg-bg2 group border-pyellow border-1 border-solid rounded-4xl p-4 lg:p-5 flex flex-col justify-center w-full"
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                },
              }}
              whileHover={{
                scale: 1.01,
                transition: {
                  duration: 0.2,
                },
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex justify-between font-light  mb-2 lg:mb-3">
                <div className="text-sm lg:text-xl">{pro3.num}</div>
                <div className="text-pblue border-1 border-solid text-xs lg:text-base rounded-xl p-1">
                  {pro3.status}
                </div>
              </div>
              <h2 className="text-xl text-pblue lg:text-2xl mb-2 font-semibold text-center lg:text-start">
                {pro3.name}
              </h2>
              <p className="text:base lg:text-lg mb-4 text-center lg:text-start">
                {pro3.des}
              </p>
              <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-6">
                {pro3.details.map((detail) => (
                  <div
                    key={detail.title}
                    className="text-center border-pblue bg-bg3 p-1 lg:p-3 rounded-2xl border-1 w-full transition-all duration-300 hover:-translate-2"
                  >
                    <div className="text-lg lg:text-2xl mb-2">
                      <i className={detail.icon}></i>
                    </div>
                    <h4 className=" text-pyellow text-base lg:text-xl mb-1">
                      {detail.title}
                    </h4>
                    <p className="text-sm lg:text-base font-light">
                      {detail.des}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Project;
