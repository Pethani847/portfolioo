import React from 'react';
import {motion} from "framer-motion";
import pro3 from './data/pro3';

function Pro3() {
    return ( 
        <>
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
        </>
     );
}

export default Pro3;