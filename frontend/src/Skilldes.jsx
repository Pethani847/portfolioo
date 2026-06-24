import React from 'react';

import { motion, AnimatePresence } from "framer-motion"

function Skilldes(p) {

    return ( 
        <>
        <AnimatePresence mode="wait">
                <motion.div key={p.selected.name} initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="px-6 px-2 lg:w-[75%]" >
            <div className="text-center">
                <h1 className="text-3xl lg:text-4xl mb-4 text-pyellow font-semibold">{p.selected.name}</h1>
                <p className=" text-lg lg:text-2xl leading-8 lg:leading-9" >{p.selected.des}</p>
            </div>
            </motion.div>
            </AnimatePresence>
        </>
     );
}

export default Skilldes;