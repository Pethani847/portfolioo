import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [remark, setRemark] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      remark,
    };

    try {
      const res = await fetch("https://portfolio-backend-fx66.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        alert("Message sent successfully!");

        setName("");
        setEmail("");
        setRemark("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="px-8 py-4">
        <main
          className="min-h-screen  flex flex-col justify-center items-center lg:items-start lg:gap-4"
          id="contact"
        >
          <div className="w-full  mb-1 lg:mb-4 flex flex-col gap-3 items-center lg:flex-row">
            <p className="text-xlfont-medium">08 | CONTACT</p>
            <div className="w-full lg:flex-1 h-[1px] bg-fg"></div>
          </div>
          <div className="flex flex-col justify-center  items-center lg:flex-row my-2 lg:my-4 w-full">
            <motion.div
              className="flex flex-col items-center lg:items-start mb-8 w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h1 className="text-4xl lg:text-6xl  font-bold tracking-wide">
                just <span className="text-pyellow">HIRE ME</span>
              </h1>
              <h3 className="text-2xl lg:text-4xl ml-6 mb-4 lg:mb-8 font-semibold">
                <span className="text-pyellow">for more</span> such VIBES!
              </h3>
              <p className="text-sm text-center w-full lg:text-start lg:text-2xl mb-4 lg:mb-6 lg:w-[75%]">
                I'm a fresher with zero ego and maximum hustle. Whether it's an
                internship, a freelance gig, or a full-time role — I'm ready to
                learn fast, adapt faster, and bring genuine effort to the team.
              </p>
              <div className="flex justify-center lg:justify-start w-full text-2xl lg:text-3xl  lg:ml-16 gap-8 mb-4 lg:mb-8">
                <div className="border-2 p-2 flex rounded-xl hover:-translate-y-1">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="border-2 p-2 flex rounded-xl hover:-translate-y-1">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=madhvipethani856@gmail.com"
                    target="_blank"
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
                <div className="border-2 p-2 flex rounded-xl hover:-translate-y-1">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="border-2 p-2 flex rounded-xl hover:-translate-y-1">
                  <i className="fa-solid fa-phone"></i>
                </div>
              </div>
              <p className="text-center lg:text-start text-base lg:text-xl italic font-light">
                // for some reasons I just share email id, you can mail me!
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className="text-2xl lg:text-4xl mb-4 lg:mb-6 font-semibold">
                Mark your <span className="text-pyellow">Attendance here!</span>
              </h2>
              <form className="flex flex-col w-[75%]" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-base border-1 mb-2 rounded-2xl p-2"
                ></input>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-base border-1 mb-2 rounded-2xl p-2"
                ></input>
                <textarea
                  placeholder="Message or any feedback for me?"
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                  className="text-base border-1 rounded-2xl mb-4 p-2 lg:p-2"
                ></textarea>
                <div className="flex justify-center lg:justify-start text-xl lg:text-xl text-pyellow">
                  <button className="bg-bg2 w-40 rounded-xl py-1 lg:w-50 border-1 lg:rounded-2xl hover:bg-pyellow hover:text-black transition-all duration-300 hover:font-semibold">
                    <i className="fa-solid fa-paper-plane mr-2"></i> send
                    Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Contact;
