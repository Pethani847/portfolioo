import React from 'react';
import { motion } from 'framer-motion';
import Title from './components/Title';
import Heading from './components/Heading';
import Comments from './components/Comments';
import Scroll from './components/Scroll';
import Educard from './Educard';

function Education() {

    return (  
        <>
        <section className="px-10 lg:px-20 py-4 ">
            <main className='flex flex-col justify-center items-center lg:items-start min-h-screen' id='education'>
                 <div className="w-full mb-5  lg:mb-10 flex flex-col gap-3 items-center lg:flex-row">
              <Title num="03" title="EDUCATION" />
          </div>
              <div className='flex flex-col items-center text-center lg:text-start lg:items-start w-full'>
                <div className='mb-10 lg:mb-15'>
                 <Heading heading="What I learned & What's next." />
                <Comments comment="academic background & upcoming plan" />
                </div>
                <div className='flex flex-col mb-8 lg:mb-15 gap-8 lg:w-[75%]'>
                <Educard />
                </div>
                <Scroll />
              </div>
            </main>
        </section>
        </>
    );
}

export default Education;