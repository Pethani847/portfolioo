import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function ContactForm() {

    const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [remark, setRemark] = useState("");
      const [message, setMessage] = useState("");
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const data = {
          name,
          email,
          remark,
        };
    
        try {
          const res = await fetch(
            "https://portfolio-backend-fx66.onrender.com/contact",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            },
          );
    
          const result = await res.json();
          if (result.success) {
            setMessage("✅ Message sent successfully!");
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
        <h2 className="text-xl lg:text-4xl mb-4 lg:mb-6 font-semibold">
                Mark your <span className="text-pyellow">Attendance here!</span>
              </h2>
              <form noValidate className="flex flex-col w-[75%]" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="peer text-sm border-1  rounded-2xl p-2 user-invalid:border-red-500"
                  required
                ></input>
                <p className="text-sm lg:text-base hidden peer-user-invalid:block text-red-600 ml-2"> ❌ please enter your name!</p>
                </div>
                <div className="flex flex-col mb-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-sm border-1 peer user-invalid:border-red-500 rounded-2xl p-2"
                  required
                ></input>
                <p className="text-sm lg:text-base hidden peer-user-invalid:block text-red-600 ml-2"> ❌ please share your email!</p>
                </div>
                <div className="flex flex-col mb-4">
                <textarea
                  placeholder="Message or any feedback for me?"
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                  className="text-sm border-1 rounded-2xl peer user-invalid:border-red-500 p-2 lg:p-2"
                  required
                ></textarea>
                <p className="text-sm lg:text-base hidden peer-user-invalid:block text-red-600 ml-2 "> ❌ please give atleast one remark!</p>
                </div>
                <div className="flex justify-center lg:justify-start text-base items-center lg:text-xl text-pyellow">
                  <button className="bg-bg2 w-40 rounded-xl py-1 lg:w-50 border-1 lg:rounded-2xl hover:bg-pyellow hover:text-black transition-all duration-300 hover:font-semibold">
                    <i className="fa-solid fa-paper-plane mr-2"></i> send
                    Message
                  </button>
                </div>
              </form>
              {message && <p className="text-pgreen mt-2">{message}</p>}
        </>
     );
}

export default ContactForm;