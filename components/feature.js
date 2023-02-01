'use client';

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

export default function Feature({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px 0px -220px',
  });

  return (
    <div>
      <motion.article
        ref={ref}
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.9 }}
        className="mx-auto mb-[0.6em] w-[75%] rounded-xl p-4 font-header text-[1.2em] text-white sm:text-[1.4em] xl:w-[60%] xl:text-[2.6em] 2xl:w-[45%]"
      >
        {children}
      </motion.article>
    </div>
  );
}
