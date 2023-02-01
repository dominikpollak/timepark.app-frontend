'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FocusCompleteModal({
  dropIn,
  completeFocusTime,
  handleStop,
}) {
  return (
    <div className="mt-[6em] flex h-full w-full justify-center 2xl:mt-[10em]">
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ type: 'spring', stiffness: 150 }}
        className="absolute z-30 mb-8 flex h-[30%] w-[80%] flex-col items-center justify-center rounded-2xl border-[3px] border-pink-100 bg-slate-900/[0.85] font-paragraph text-[1.5em] text-white lg:w-[30%]"
      >
        <p className="text-center">
          You have focused for {completeFocusTime} minutes
        </p>
        <p>
          and earned{' '}
          <span className="text-yellow-300">
            {' '}
            {(completeFocusTime * 60) / 30} points.
          </span>
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="mt-10 rounded-xl border-[4px] bg-transparent px-5 py-1
            font-header text-[1em] tracking-wide text-white duration-100 hover:bg-slate-100/[0.15] sm:text-[1em] md:px-7 md:text-[0.8em] xl:px-10 xl:text-[1em]"
          onClick={handleStop}
        >
          Close
        </motion.button>
      </motion.div>
    </div>
  );
}
