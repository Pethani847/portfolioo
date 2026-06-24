import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ContactForm from "./ContactForm";
import Title from "./components/Title";
import Comments from "./components/Comments";

function Contact() {

  return (
    <>
      <section className="px-10 lg:px-20 py-4">
        <main
          className="min-h-screen  flex flex-col justify-center items-center lg:items-start lg:gap-4"
          id="contact"
        >
          <div className="w-full  mb-1 lg:mb-4 flex flex-col gap-3 items-center lg:flex-row">
            <Title num="07" title="CONTACT" />
          </div>
          <div className="flex flex-col justify-center  items-center lg:flex-row my-2 lg:my-4 w-full">
            <motion.div
              className="flex flex-col items-center lg:items-start mb-8 w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h1 className="text-3xl lg:text-6xl  font-bold tracking-wide">
                just <span className="text-pyellow">HIRE ME</span>
              </h1>
              <h3 className="text-xl lg:text-4xl ml-7 mb-4 lg:mb-8 font-semibold">
                <span className="text-pyellow">for more</span> such VIBES!
              </h3>
              <p className="text-sm text-center w-full lg:text-start lg:text-2xl mb-4 lg:mb-6 lg:w-[75%]">
                I'm a fresher with zero ego and maximum hustle. Whether it's an
                internship, a freelance gig, or a full-time role — I'm ready to
                learn fast, adapt faster, and bring genuine effort to the team.
              </p>
              <div className="flex justify-center lg:justify-start w-full items-center text-xl lg:text-3xl  lg:ml-16 gap-8 mb-4 lg:mb-8">
                <div className="border-2 p-2 flex rounded-xl hover:-translate-y-1">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=madhvipethani856@gmail.com"
                    target="_blank"
                    className="border-2 p-2 flex rounded-xl hover:-translate-y-1"
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                <div className="border-2 p-2 flex rounded-xl hover:-translate-y-1">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="border-2 p-2 flex rounded-xl hover:-translate-y-1">
                  <i className="fa-solid fa-phone"></i>
                </div>
              </div>
              <Comments comment="for some reasons, I just share email id, you can mail me!" />
            </motion.div>
            <motion.div
              className="flex flex-col items-center w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Contact;
