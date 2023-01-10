'use client'
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export default function Statistics() {


    return (
        <div className='h-screen flex justify-center items-center'>
            <AnimatePresence>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 150 }} exit={{ scale: 0, opacity: 0 }}
                    className='text-center w-[90%] lg:w-[70%] h-[70%] mx-auto z-40 relative bg-gradient-to-br from-slate-800/[0.9] to-slate-900/[0.9] pt-4 rounded-2xl border-[3px] border-pink-100 duration-50'>

                    <div className='font-header text-[2.5em] md:text-[3.5em] text-transparent bg-clip-text bg-gradient-to-b from-yellow-50 to-yellow-500 tracking-wide border-b-[3px] pb-2'>
                        Statistics
                    </div>

                    <div className='h-[80%] flex flex-col justify-center text-[1.5em] md:text-[1.8em] xl:text-[2.1em] p-4'>
                        <div className='mt-6'>
                            <span className='text-white font-paragraph'><span className='text-yellow-200'>Today</span> you've focused for </span>
                            <span className='text-white font-paragraph'>3 hours 15 minutes. </span>
                        </div>

                        <div className='mt-6'>
                            <span className='text-white font-paragraph'>This <span className='text-yellow-200'>week</span> you've focused for </span>
                            <span className='text-white font-paragraph'>12 hours 0 minutes. </span>
                        </div>

                        <div className='mt-6'>
                            <span className='text-white font-paragraph'>This <span className='text-yellow-200'>month</span> you've focused for </span>
                            <span className='text-white font-paragraph'>43 hours 30 minutes. </span>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className='mt-20 lg:mt-20'>

                            <Link href='/statistics/details/week'
                                className='shadow-xl px-10 py-1 text-[1em] sm:text-[2em] md:text-[1em] xl:text-[1.1em] 
                        border-[5px] border-black bg-gradient-to-b from-yellow-200 to-orange-500 hover:from-yellow-100 hover:to-orange-400 rounded-xl font-header text-black duration-100'
                            >Details</Link>
                        </motion.div>

                    </div>

                </motion.div>
            </AnimatePresence>
        </div>
    )
}
