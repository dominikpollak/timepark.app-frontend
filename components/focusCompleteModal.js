'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function FocusCompleteModal({ dropIn, completeFocusTime, handleStop }) {
    return (

        <div className='w-full h-full flex justify-center mt-[6em] 2xl:mt-[10em]'>

            <motion.div variants={dropIn} initial='hidden' animate='visible' exit='exit' transition={{ type: "spring", stiffness: 150 }}
                className='absolute rounded-2xl border-[3px] border-pink-100 w-[80%] lg:w-[30%] h-[30%] flex flex-col justify-center items-center bg-slate-900/[0.85] text-[1.5em] font-paragraph text-white mb-8 z-30'>

                <p className='text-center'>You have focused for {completeFocusTime} minutes</p>
                <p>and earned <span className='text-yellow-300'> {(completeFocusTime * 60) / 30} points.</span></p>

                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className='mt-10 text-[1em] tracking-wide sm:text-[1em] md:text-[0.8em] xl:text-[1em]
            border-[4px] px-5 md:px-7 xl:px-10 py-1 bg-transparent rounded-xl font-header text-white hover:bg-slate-100/[0.15] duration-100'
                    onClick={handleStop}
                >Close</motion.button>

            </motion.div>
        </div>
    )
}
