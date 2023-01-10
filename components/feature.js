'use client'

import { useRef } from 'react';
import { useInView, motion } from "framer-motion";
 
 export default function Feature({children}) {

    const ref = useRef(null);
    const isInView = useInView(ref, {
      once : true,
      margin: '-100px 0px -220px' });

   return (
     <div>
         <motion.article ref={ref} initial={{scale : 0, opacity : 0}} animate={isInView ? {scale : 1, opacity: 1} : {scale : 0, opacity : 0}} transition={{delay : 0.1, duration : 0.9}}
        className='text-white text-[1.2em] sm:text-[1.4em] xl:text-[2.6em] mx-auto w-[75%] xl:w-[60%] 2xl:w-[45%] mb-[0.6em] font-header p-4 rounded-xl'>
            {children}
        </motion.article>
     </div>
   )
 }
 