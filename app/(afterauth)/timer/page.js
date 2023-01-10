'use client'

import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import TimerContext from '../../../context/TimerContext';
import FocusCompleteModal from '../../../components/focusCompleteModal';

export default function TimerPage() {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(5);
    const [failed, setFailed] = useState(false)
    const [cancelTime, setCancelTime] = useState(0)
    const [canCancel, setCanCancel] = useState(false)
    const [completeFocusTime, setCompleteFocusTime] = useState(0)
    const [hasCompleted, setHasCompleted] = useState(false)


    const timer = useContext(TimerContext)

    useEffect(() => {

        if (timer.timerOn) {

            const interval = setInterval(() => {

                setSeconds(seconds - 1)

                if (canCancel) {

                    setCancelTime(cancelTime - 1)

                    if (cancelTime == 1) {
                        setCanCancel(false)
                    }
                }

                if (seconds == 1 && minutes == 0) {
                    timer.setTimerOn(false)
                    setHasCompleted(true)
                    return () => clearInterval(interval)
                }

                else if (seconds == 0) {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                }
            }, 1000)

            return () => clearInterval(interval)
        }

    }, [seconds, timer.timerOn])

    const dropIn = {
        hidden: {
            opacity: 0
        },
        visible: {
            y: 100,
            opacity: 1,
        },
        exit: {
            opacity: 0,
            y: -100
        }
    }

    const handleStop = () => {
        //delay for the button animation
        setTimeout(() => {
            timer.setTimerOn(false)
            setMinutes(5)
            setSeconds(0)
            setFailed(true)
            setCanCancel(false)
            setHasCompleted(false)
        }, 200)
    }

    const handleStart = () => {
        //delay for the button animation
        setTimeout(() => {
            timer.setTimerOn(true)
            setCanCancel(true)
            setCancelTime(10)
            setCompleteFocusTime(minutes)
            setHasCompleted(false)
        }, 200)
    }

    const handleComplete = () => {
        setHasCompleted(false)
        setMinutes(5)
    }

    return (
        <>
            {/*Timer finish summary message */}
            {hasCompleted &&
                <FocusCompleteModal dropIn={dropIn} completeFocusTime={completeFocusTime} handleStop={handleStop} />}

            {!hasCompleted &&
                <AnimatePresence>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 150 }} exit={{ scale: 0, opacity: 0 }}
                        className='text-center mt-[6em] 2xl:mt-[10em] w-[95%] sm:w-[70%] md:w-[55%] lg:w-[40%] xl:w-[32%] mx-auto z-40 relative'>

                        <div className={timer.timerOn ? 'bg-gradient-to-br from-slate-800/[0.85] to-slate-900/[0.85] pt-8 rounded-2xl border-[3px] border-pink-100 duration-1000'
                            : 'bg-gradient-to-br from-slate-800/[0.85] to-slate-900/[0.85] pt-12 rounded-2xl border-[3px] lg:border-[4px] border-pink-100 duration-500'}>

                            <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
                                {!timer.timerOn &&
                                    <motion.div variants={dropIn} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 100 }} exit={{ scale: 0, opacity: 0 }}
                                        className='flex justify-center items-center mb-4'>
                                        <span className='text-[1.2em] font-paragraph text-transparent text-white xl:mr-5 mr-3'>5</span>
                                        <input
                                            className='appearance-none xl:w-[15em] w-[12em] 2xl:w-[18em] xl:h-[2.5em] h-[2em] bg-gradient-to-l from-[#904fb5] to-[#342a82] rounded-full cursor-pointer shadow-md shadow-black/[1]'
                                            type="range"
                                            min={5}
                                            max={150}
                                            step={5}
                                            onChange={e => setMinutes(e.target.value)}
                                            value={minutes}
                                            id='timerInput' />
                                        <span className='text-[1.2em] font-paragraph text-transparent text-white xl:ml-5 ml-3'>150</span>
                                    </motion.div>}
                            </AnimatePresence>

                            {/*Display of the time */}
                            <div>
                                <p className={timer.timerOn ? 'text-transparent bg-clip-text bg-gradient-to-b from-yellow-50 to-yellow-500 xl:text-[6.3em] text-[5.5em] font-numbers mb-0 mt-0 tracking-wider'
                                    : 'text-transparent bg-clip-text bg-gradient-to-b from-yellow-50 to-yellow-500 xl:text-[6.3em] text-[5.5em] font-numbers mb-6 mt-0 tracking-wider'}>
                                    {minutes.toString().length > 2 ? ('0' + minutes).slice(-3) : ('0' + minutes).slice(-2)}:{('0' + seconds).slice(-2)}
                                </p>
                            </div>

                            {timer.timerOn &&
                                <motion.div
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} exit={{ opacity: 0 }}
                                    className="hourglass mx-auto mb-8">
                                </motion.div>}

                            {!timer.timerOn && <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className='text-[1.6em] tracking-wide sm:text-[1.6em] md:text-[2em] xl:text-[2em] 2xl:text-[2.7em] mb-12
            border-[4px] px-5 md:px-7 xl:px-10 py-1 bg-gradient-to-b from-cyan-600 to-violet-800 rounded-xl
                font-header text-white hover:from-cyan-500 hover:to-violet-700 duration-100 disabled:opacity-40 disabled:hover:none'
                                onClick={handleStart}
                            >Start</motion.button>}

                            {timer.timerOn && canCancel && <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className='text-[1.2em] tracking-wide sm:text-[1.1em] md:text-[1.1em] xl:text-[1.2em] mb-12
            border-[4px] px-5 md:px-7 xl:px-4 py-1 bg-transparent rounded-xl font-header text-white hover:bg-slate-100/[0.15] duration-100'
                                onClick={handleStop}
                            >CANCEL ({cancelTime})</motion.button>}

                            {timer.timerOn && !canCancel && <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className='text-[1.2em] tracking-wide sm:text-[1.1em] md:text-[1.1em] xl:text-[1.2em] mb-12
            border-[4px] px-5 md:px-7 xl:px-4 py-1 bg-gradient-to-b from-red-600 to-red-900 hover:from-red-500 hover:to-red-800 rounded-xl font-header text-white duration-100'
                                onClick={handleStop}
                            >Give up</motion.button>}
                        </div>
                    </motion.div>
                </AnimatePresence>
            }

            <Link href='/' className='text-[2em] text-white absolute bottom-7 right-9 z-[50]'>back</Link>
        </>
    );
};
