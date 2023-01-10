'use client'

import { useRef } from 'react';
import { useInView, motion } from "framer-motion";

export default function SlideParagraph({children, initialValue}) {

    const ref = useRef(null);
    const isInView = useInView(ref, {
      once : true,
      margin: '-100px 0px -220px' });

  return (
    <div>
        <motion.article ref={ref} initial={{x: initialValue, opacity : 0}} animate={isInView ? {x: 0, opacity: 1} : {x : initialValue, opacity : 0}} transition={{delay : 0.2, duration : 1}}
        className='relative text-white text-[1.2em] sm:text-[1.4em] xl:text-[1.6em] mx-auto w-[75%] xl:w-[60%] 2xl:w-[45%] mb-[3em] font-paragraph border-[5px] p-6 rounded-xl bg-slate-900/[0.65] z-30'>
            {children}
        </motion.article>
      
        {/* <motion.article ref={ref} initial={{x: initialValue, opacity : 0}} animate={isInView ? {x: 0, opacity: 1} : {x : initialValue, opacity : 0}} transition={{delay : 0.2, duration : 1}}
        className='text-white text-[1.2em] sm:text-[1.4em] xl:text-[1.6em] mx-auto w-[75%] xl:w-[60%] 2xl:w-[45%] mb-[3em] font-paragraph border-[6px] p-6 rounded-xl bg-gradient-to-br from-pink-300/[0.3] to-violet-500/[0.3]'>
            {children}
        </motion.article>
       */}

       {/* <motion.article ref={ref} initial={{scale : 1}} animate={isInView ? {scale : 1.2} : {scale : 1}} exit={{scale: 1}}
        className={ isInView ? 'text-white text-[1.2em] sm:text-[1.4em] xl:text-[1.6em] mx-auto w-[75%] xl:w-[60%] 2xl:w-[45%] mb-[4em] font-paragraph border-[6px] p-6 rounded-xl bg-gradient-to-b from-orange-300/[0.3] to-violet-500/[0.3] duration-700'
      : 'text-white text-[1.2em] sm:text-[1.4em] xl:text-[1.6em] mx-auto w-[75%] xl:w-[60%] 2xl:w-[45%] mb-[3em] font-paragraph border-[6px] p-6 rounded-xl duration-700'}>
            {children}
        </motion.article> */}
      
    </div>
  )
}
