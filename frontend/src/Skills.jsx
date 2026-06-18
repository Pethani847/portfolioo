import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

function Skills() {

  let skills = [
    {
      name: "HTML",
      des: "The foundation of every project I build. Without HTML, we're all just staring at a blank screen crying. Some people see a bunch of tags—I see the skeleton of something awesome waiting to happen.",
      icon: "devicon-html5-plain",
      level: "Expert",
      color: "#E44D26"
    },
    {
      name: "CSS",
      des: "CSS and I spend a lot of time arguing over 1-pixel differences. It's fine, everything is fine... I only cried twice. We have a complicated relationship, but somehow we always make it work.",
      icon: "devicon-css3-plain",
      level: "Expert",
      color: "#264DE4"
    },
    {
      name: "JavaScript",
      des: "While some developers search for bugs, bugs somehow keep finding me. Thankfully, JavaScript and I have learned to work things out. Most of our conversations start with console.log().",
      icon: "devicon-javascript-plain",
      level: "Expert",
      color: "#F7DF1E"
    },
    {
      name: "node.js",
      des: " I enjoy working behind the scenes. While users click buttons, Node.js and I are busy making sure the magic actually happens. littrally we're at backstage making sure the show doesn't get cancelled",
      icon: "devicon-nodejs-plain",
      level: "Expert",
      color: "#339933"
    },
    {
      name: "express.js",
      des: "Why take the long route when Express exists? Building APIs with it feels like ordering fast food—quick, reliable, and surprisingly satisfying. Express and I have an understanding: I tell it where to go, and it handles the traffic.",
      icon: "devicon-express-original",
      level: "Expert",
      color: "#000000"
    },
    {
      name: "react.js",
      des: "React and I are still getting to know each other. Some days I manage the state; other days the state manages me.I think in components now but still figuring out the deeper stuff. useState() I get. useEffect()? We're still in couples therapy. Currently collecting components like Pokémon and hoping they all render correctly.",
      icon: "devicon-react-original",
      level: "Expert",
      color: "#61DBFB"
    },
    {
      name: "MongoDB",
      des: "Rows and columns are cool, but sometimes I like my data a little more chill. MongoDB lets me store ideas without forcing them into tiny boxes. Who needs tables when you have documents? I store data like I organize my thoughts — flexible, fast, and slightly chaotic.",
      icon: "devicon-mongodb-plain",
      level: "Expert",
      color: "#00684A"
    },
    {
      name: "MySQL",
      des: "When the data needs structure and discipline, MySQL enters the chat. Joins, queries, relations — I've got it all figured out. Mostly.MySQL taught me that asking the right question is important. Luckily, databases answer with fewer excuses than humans do.",
      icon: "devicon-mysql-original",
      level: "Expert",
      color: "#00758F"
    },
    {
      name: "Tailwind CSS",
      des: "Tailwind feels like styling with cheat codes enabled. Why write custom CSS for hours when utility classes are already doing cardio? I will never write vanilla CSS again and you can't make me.",
      icon: "devicon-tailwindcss-original",
      level: "Expert",
      color: "#38BDF8"
    },
    {
      name: "git",
      des: "I commit to Git more than I commit to anything else in life. My code and I have disagreements sometimes, and Git keeps those arguments from becoming permanent. My trust issues disappeared the day I discovered git commit. Such a savior it was!",
      icon: "devicon-git-plain",
      level: "Expert",
      color: "#F14E32"
    },
  ];

    const [selected, setSelected] = useState(skills[0]);

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
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="px-10 lg:px-20 py-4">
        <main className="min-h-screen  flex flex-col justify-center items-center lg:items-start gap-4" id="skills">
           <div className="w-full mb-2 lg:mb-4 flex flex-col gap-3 items-center lg:flex-row">
          <p className="text-base lg:text-xl font-medium">04 | SKILLS</p>
                    <div className="w-full lg:flex-1 h-[1px] bg-fg"></div>
          </div>
          <div className="flex text-center  lg:text-start flex-col items-center ">
            <h1 className="text-3xl lg:text-5xl mb-2 font-bold tracking-wide w-full">What I Work withh!</h1>
            <p className="text-sm lg:text-xl italic font-light mb-10 lg:mb-20 w-full">// hover on icon to fill colors and click it to know more!</p>
            <motion.div className="flex gap-4 items-center lg:gap-10 flex-wrap justify-center mb-10 lg:mb-15 lg:w-[75%]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            {skills.map((skill) => (
                <motion.div key={skill.name} className={`bg-bg2 hover:bg-bg hover:-translate-1 hover:text-[var(--skill-color)] ${selected.name === skill.name ? "text-[var(--selected-color)]" : "text-fg" } transition-all duration-250 border-1 p-4 lg:p-6 rounded-2xl`} style={{ '--skill-color': skill.color, '--selected-color': selected.color }} onClick={() => setSelected(skill)} variants={itemVariants}><button className="text-4xl md:text-6xl lg:text-8xl"><i className={`${skill.icon}`} > </i></button> </motion.div>
            ))}
            </motion.div>
            <div className="flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div key={selected.name} initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="px-6 px-2 lg:w-[75%]" >
            <div className="text-center">
                <h1 className="text-3xl lg:text-4xl mb-4 text-pyellow font-semibold">{selected.name}</h1>
                <p className=" text-lg lg:text-2xl leading-8 lg:leading-9" >{selected.des}</p>
            </div>
            </motion.div>
            </AnimatePresence>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Skills;
